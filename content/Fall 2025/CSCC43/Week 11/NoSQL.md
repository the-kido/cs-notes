Not Only SQL

Relational DBs are the mainstay for businesses. 
But web-based applications caused changes, and hooking an RDBMS to web apps became troublesome
- There were crazy requirements on performance, scale, and data model diversity

# The issue with Scaling
1. The best way to provide [[Transaction Management#ACID Properties of Transaction Executions|ACID]] and query models is to have the dataset all on one machine.
2. Now you've been bottlenecked for scaling. You can't just make the one machine more powerful over time!
	1. *Scaling up* (vertical scaling) is expensive
3. *Scaling out* (horizontal scaling) is cheaper. Just get a bunch of smaller,. cheaper servers.
4. There are two approaches to horizontal scaling
	1. [[#Primary/Secondary Scaling]]
	2. [[#Sharding (Partitioning)]]
## Primary/Secondary Scaling
For scaling out your RDBMS, you can do the following:
1. All writes are written to the "primary worker"
2. Reads can be made with replicated *secondary* copies of the worker
3. Issue: Read latency, as writes may not have been propagated yet
4. Issue: Large datasets might be hard to duplicate from the primary to the secondary workers

## Sharding (Partitioning)
1. Scales with for both reads and writes
2. Not transparent (so apps must be partition-aware)
3. Issue: Costly to have relationships/joins across partitions
4. Issue: Lost of referential integrity across shards

## Other ways:
- Multi-primary replication  
- INSERT only, not UPDATES/DELETES  
- No JOINs, thereby reducing query time  
- This involves de-normalizing data  
- In-memory databases


# NoSQL
To solve problems that relational DBs are a bad fit for!

Examples include:
- `MongoDB`, `apache HBASE`, `redis`, and more!

## The key features and advantages
1. Non-relational
2. No schemas
3. Data is replicated into multiple "nodes" (so, identical and fault-tolerant) which can be partitioned
	1. Failed nodes are easily replaced
	2. No single point of failure
4. Easily accessible and deployable (cuz it's open-source!)
### Disadvantages:
- Doesn't have all the relational features
	- There is no `JOIN`,  there is no `GROUP BY`, and there is no `CUBE`
	- No referential integrity constraints. No FDs. No nothing!
- No SQL! D:
	- Means more "programming"
- The [[Transaction Management#ACID Properties of Transaction Executions|ACID]] is more "relaxed"
	- See [[#CAP Theorem]]
- No easy integration with other apps that do use SQL

### Papers
Idk why this is mentioned! But it seems cool. These are the "seeds" for the NoSQL "movement"
- `BigTable` by Google
- `Dynamo` by Amazon
- [[#CAP Theorem]]

It's not that RDBMS is bad, it's just large datasets were needed and people we trying to accept alternatives. 
Also for some reason... dynamically-typed data? ew?!?
- Dw i asked gpt about this and apparently the industry agrees dynamic typing was short-sighted. AS THEY SHOULD


## CAP Theorem
We suppose "3" properties of a distributed system
1. **C**`onsistency`
	1. All copies have the same value (between all clusters!)
2. **A**`vailability`
	1. Reads and writes always succeed (for any cluster)
3. **P**`artition-tolerance`
	1. System properties (constancy and/or availability) hold even over things like network failures

Brewer's CAP theorem: You can never have all of them simultaneously. At most it's two of the 3 for any shared-data system

Very large systems will have to partition at some point
- So you really always need `P`. That leaves `C` or `A` to choose from. DBMS's prefer `C` over `A` *and* `P`
- But in almost all cases, you'd prefer `A` over `C` (unless for things like order processing)

### Consistency
A consistency model would determine data visibility and order of updates.

It's a continuum (spectrum) with tradeoffs, and for NoSQL, consistency is always a "maybe".
- Strong consistency would mean sacrificing one of the other two properties

#### Eventual Consistency
If no updates happen in a long time, eventually all updates will propagate to all clusters and the system will be consistent!

#### Cloud Computing
Strong consistency is hard to achieve (and sometimes not always required! Like with blogs, product listings, etc.)

### Availability and Partition Tolerance are skimmed over

## NoSQL Categories
1. Key-value
	1. Dictionaries
	2. Like `DynamoDB`
2. Document-based
	1. Like `MongoDB`
3. Column-based (?)
	1. `BigTable`
4. Graph-based
	1. `Neo4J`
5. Data types are more flexible!
6. No-schema is a common characteristic of most NoSQL storage systems


### Key-value
Key -> Value. that is all.

- Focuses on huge amounts of data
- Can handle massive load, too.
- Based on Amazon's Dynamo paper
	- Used in DynamoDB
- The model is a global collection of KV pairs

Values would be a special type, like lists, sets, maps, etc.

#### A key-value API
Would have a 
- `get(key)`
	- Gets a value from a key
- `put(key, value)`
	- Puts a new pair
- `delete(key)`
	- Removes a key
- `execute(key, operation, parameters)`
	- Runs something on the value of a key (list, set, map, etc.)
#### Pros
- Fast
- Scalable
- Simple
- Eventual (after waits) and/or stronger consistency
- Fault-tolerant
#### Cons
- Can't model complex data structures like objects. Only simple ones

### Document Stores
Can hold more complex objects 
- Like JSON or XML
- Really any semi-structured formats
It holds a big collection of these documents, actually.

For MongoDB, each object has a primary key called `ObjectId`. It doesn't use JSON but some 'object-structured documents stored in collections'
I don't care about Couchbase

### Column Stores
For Google's `BigTable`
Similar to relational DBs (store data in column order) but not the same
- It handles semi-structured data
The data model is a *collection of column **families**!*
- These column families are effectively maps. The "key" (Row Key) us the unique ID used to look up data
- The value is the "set of related columns"
	- Like `User_101` might be a row key, and it's value is a list of columns, like

```
RowKey: "User_101"
   │
   └── Value:
       ├── Column("Name", "Alice")
       ├── Column("Email", "alice@test.com")
       └── Column("Age", "25")
```
- A column family is simply a key, and a value. The value is a set of related columns

Super columns are columns of columns. Used for nesting I guess
```
RowKey: "User_101"
   │
   └── Value (Set of Super Columns):
       │
       ├── SuperColumn("Home_Address")   <-- Grouping 1
       │   ├── Column("Street", "123 Main St")
       │   └── Column("City", "New York")
       │
       └── SuperColumn("Work_Address")   <-- Grouping 2
           ├── Column("Street", "456 Tech Blvd")
           └── Column("City", "San Francisco")
```
- Items are indexed by row key, column key, and timestamp
- One column family can have a variable number of columns
- Most entries in column families are null. They are *sparse*

#### Querying
- Column-based NoSQL only fetches column families of the columns required by the query.
	- All columns in a column family are stored together on disk, so multiple rows can be retrieved in one read!
- Unlike RDBMS, where we fetch data from several places on the disk and glue them together.

### Graph Databases
- More focused on modeling the structure of data
- Scales to the complexity of data, too.
- The model is simply `G = (V, E)`
	- Vertices and edges

It varies a lot and stuff. Lots of recursion too.

### NewSQL
The next-gen RDBMS's
- Super scalable. Horizontal scaling
- ACID!
- SQL!
- NO LOCKS!
- FAST!!!

Postgres is actually kind of goated. Huh!