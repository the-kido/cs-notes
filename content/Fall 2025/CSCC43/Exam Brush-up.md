[[Weak Entity Sets]]
- An instance of a weak entity set must associate with exactly ONE of a strong entity set. Therefore W.E.S's are one-to-many or one-to-one
- The "double lines" go to the SUPPORTED parts. The thing it's pointed to is the strong entity set.

[[Combining Relations]]
- For two relations, if $E$ is the many side and $F$ is the one side, then you can combine them
	- `Movies(title, length)` with `directs(title, name)` gives `New(title, length, director-name)`
		- I think this is effectively JOIN-ing the tables
	- Movies was the "many" side of "directs" (a director directs many movies)
- You cannot draw this as an E/R diagram

[[Fall 2025/CSCC43/Week 2/Relations/Relational Model|Relational Model]]
- For one-to-one "roles" relation, you can choose which role is the key
- The tables for the children are just the key of the parent + the child's special stuff

[[Subclasses to Relations]]
3 ways
1. The children inherit all attrs of the parent. Just completely
2. The children keep the key of the parent. The parent has the parent-related stuff and the children get it though JOIN-ing
3. Just have EVERYTHING in one table and NULL the stuff you aren't using

[[Weak Entity Set To Relations]]
- The middle relation is the key of the strong (but it's just an attr) AND the key of the weak (where the key of the weak is the strong + itself) but it's actually the "key"
	- Anyway the weak set is always disolvable into the relation (cuz it's a super-set of its attributes)
	- We can't remove Hosts since Logins relies on Hosts

[[How are Keys of FD's determined]]
1. We can just "say" what they are based on the superkey for a table
	1. It's just us using the fact that keys of relations are unique, so we define keys like that.
2. We can *derive* them through the known FDs that hold throughout our relations (given through the tables)
	1. You use the [[Closure Algorithm]] (I think more accurately it's [[Projecting FDs]] though?) to find which attributes imply the rest of the attributes for a relation
		1. Ensure no subset of the "key" is also a key. Otherwise it's a "superkey" and not a minimal key

[[Inferring FDs]]
- If you want to find an FD holds, you show you can derive it. You can use a common tuple or properties
[[Multiplicity and FDs]]
- If key $X$ and $Y$ is any attribute, and the relation is many-one, then $X \to Y$ but $Y \not \to X$
- However if one-one, then $Y \to X$ holds too!
- dw about many-many. No [[Trivial and Non-trivial FDs|non trivial]] FDs exists 

[[Rules for Functional Dependencies]]
- You can combine and split up the right side of FDs
- You can remove trivial attributes

[[Armstrong's Axioms]]
- Reflexivity (subset one)
	- If $Y\subseteq X$, then $X \to Y$ is a trivial FD
- Augmentation (multiplying one)
	- $X \to Y \equiv XZ \to YZ$ for any $Z$
- Transitivity (obvious one)
	- $X \to Y$ and $Y \to Z$ means $X \to Z$
#todo HOW CAN I NEVER REMEMBER THESE

[[Basis for FDs and Projecting]]
- Basis is the set of FDs that imply ALL other FDs
	- The set whose "closure" implies all FDs that hold for $R$ 

[[Fall 2025/CSCC43/Week 3/Closures]]
- Takes something, and gives everything "derivable" from it
- For the case of "attributes", it gives the set of all attributes derivative from it (given a bunch of FDs)
	- Look at the examples they gave. They are good!
	- $(CG)^+ = CG$ at the start, then:
		- $C^+ = C$
		- $G^+ = G$
		- $(CG)^+ = CGHI$

[[Minimal Basis of FD]]
Satisfies 3 properties to be minimal:
1. The RIGHT side must be singleton (that's the 'minimal-ist' it gets)
2. You can't remove any FD in the basis without the result no longer being a basis 
3. The LEFT sides must be minimal in that you can't remove any without the FD
	- You can check that this is satisfied through a quick closure (does the left side sans each attribute represent the same attributes on the right?)


[[Projecting FDs]]
- Useful for *decomposition*. Finding FDs of `ABC` given relation `ABCD`, for instance.
- Lets us know what FDs to preserve for `ABC` 
- Very important!

Algorithm:
- You start with the smallest bit
	- For any NEW FD generated (IMPLIED), you add that to the final list
- You recursively expand
- Then at the end you filter the FDs who don't use all of the attributes of the subset
	- So like if subset is ABC but $A \to D$, then remove $A\to D$
- Do the "optimization" when you need to

#todo Practice if time permits

[[Design Anomalies]]
1. Update and Deletion anomalies
2. For update, if you change something will the changes propagate?
	1. Like if Oppenheimer and year dictates length, and i change length in one place, will it update in the other places?
3. Deletion is similar. If you delete, will you delete other info?

[[Relational Decomposition and Criteria]]
- We want to remove design anomalies. To do that, we decompose our relation into beautiful sub-relations.
	1. We just need NO anomalies (BCNF does this)
	2. Data recovery (through *lostless joining*)
	3. Dependency Preservation (3NF does this)
		1. FDs enforcing the decomposed schema should survive
		2. But if you had $A\to C$ but A and C are separated, then you're out of luck


[[BCNF]]
- Used to detect "redundancy". Not to be confused with BCNF decomposition--that actually *fixes* the problem
- For BCNF, for every NON-TRIVIAL FD $X \to A$, the $X$ is a superkey
	- The $X$ must have all key attributes (and maybe more) of the relation
- Then the example is bad since NONE of the keys are subsets of the table's keys


[[BCNF Algorithm]]
- Used to get BCNF
- This is the funny one that uses the "diagram" action.
- If we have relation $R$ and a set of FDs $F$, then we're gonna get rid of all violations $X\to A$ (the ones that DON'T satisfy BCNF)
- We're gonna SPLIT the relation into two tables.
- To do that, we find $X^+$ for the violation. (That is the "key" side)
	- This will be table #1 
	- Name this, say, $Movies_1(X^+ \text{ attributes})$ with key $X$
- Then you find what $(R - X^+) \cup X$ is
	- That is, you find all the attributes $X$ determines, and only take the attributes in R but NOT in $X^+$. So the "leftovers".
	- But we also $\cup X$ to satisfy the lossless join property for decomposition
	- $Movies_2((R - X^+) \cup X \text{ attributes} )$ with key $R - X^+$
- Then you check the second table for any "other" BCNF violations.

This does not preserve dependencies. When you split the table, some FDs are estranged.
- Temporarily the FDs might hold. But as you add data, it goes bye bye


[[Dependency Preserving Decomposition]]
- Decomposition of X, Y is "dependency preserving" IFF $(F_X \cup F_Y)^+ = F^+$
	- F are "sets" of functional dependencies
	- This statement is obvious. If the set of FDs in X and Y are enforced, and it equals $F^+$, our OG FD set, then we're good.
- Look at the example.
#todo A bit confusing. Might be worth it to glance over.

[[3NF]]
- Defines the "dependency preserving problem" away.
- The left must be a superkey, or the right must be a "prime"
	- A prime is "a member of at least one key"
	- So if you have $A$ and $B$ as keys that imply other attributes in your relation, then the left attribute must either be $A$ or $B$

3NF gives:
- Recoverable data after decomposition (lossless join) like BCNF
- Dependencies are preserved

[[3NF Decomposition]]
We have R, and a set of FDs $F$, and a key $Y$ of $R$
- **If you don't have the key, [[How are Keys of FD's determined|derive one]]**

We do these steps:
1. Find a minimal basis of $F$. We call it $G$. We're using the bare minimum FDs here.
2. For every $X \to A$ inside of $G$, we output $XA$ as a "schema" which goes into $\rho$
3. When you've found your $\rho$, if none of the relations have attributes that are a *superkey* of $R$, then you add the attributes of $Y$ (a key of $R$).
4. Remove any table that's a subset of another table. They're redundant
5. And... that's it?! That's so easy! This is already in 3NF. It's dependency preserving (vs. BCNF) but also recoverable (just like BCNF)

#todo Just REMEMBER this. It's not hard to remember though, honestly. 
For the second example where there are two keys... i hope i don't get that. 

[[Multi-valued Dependencies (MVD)]]
- Very related to 4NF
- If $X\to\to Y$, then if two tuples share $X$ and you swap their $Y$, then the new table should STILL satisfy all FDs
- All FDs are MVDs
	- Like, if $X \to Y$ holds, and you swap $Y$, that should mean the same thing (since $Y$ is determined by $X$!)
	- **Complementation**
		- If you have `R(X, Y, Z, W)` and $X \to\to Y$, then $X \to\to ZW$ too.

They don't have the same properties as normal FDs do. No splitting property, for instance

[[4NF]]
- Eliminates redundancy due to multiplicative effect of MVDs
- #todo I don't get this. I'll just... pretend like it doesn't exist

[[Relational Algebra]]
$\rho$ does "renaming"
- Subscript has the renamed thing

#todo Remember the "Expression Trees" they might be useful

[[More Relational Algebra]]
- Remember the division table. Just ingrain it in your head

[[SQL Queries]]

`AS`
- in the "select" part. Turns expression (or name) into a new name. Returns that column
	- Example: `SELECT length / 60.0 AS time`
	- Also lets you set default values: `'bazinga' as meta`

Regex:
- `%`for "any  string"
- `_` for any character
- `attribute LIKE 'pattern'` matches attribute with mattern in `WHERE`

Nulls:
- Like 1/2 where false = 0 and true = 1
- If something is null, the result propagates throughout the table

Use $<$ and not $!=$ for strings. 
- Think: "`!=` $\equiv$ `<` $\wedge$ `>` "
- So if you use `!=`, it'll match TWO times (one for `<` and another for `>`)

UNION, EXCEPT, INTERSECT between tables

IN -> matches tuple with table in subquery. If tuple is there, then it matches.

EXISTS(relation)
- Matches if relation is NOT `null`

ANY/ALL
- Used to compare an attribute with ANY (so exists) or ALL (for all) tuples of a table.
	- For instance, if you wanna get the longest movie (its title and it's length), you'd do:

```sql
SELECT title, length
FROM Movies
WHERE length >= ALL(SELECT length
					FROM Movies)
```

Subqueries inside the `FROM`
- You can name the subquery (like when you do `Movies movie1`) with the name AFTER the subquery inside the `FROM`


There are also `JOIN`s for tables. (like UNION, INTERSECTION was)
- Natural join
- R join S on $\theta$ (so this is the same as $R ⨝_{\text{condition}} S$)
- Cross join
- Outer join
- etc.

BAG stuff
- You can use DISTINCT **RIGHT AFTER** `SELECT` which means SELECT usually uses bag semantics
- The tables themselves usually use set semantics. To  use bag you'd use the word `ALL` like `UNION ALL`

Aggregation turns SELECT into an answer to a question. By default, it's 1 cell.
Using `*` refers to the number of tuples itself.
- Without grouping it's the whole table!

`GROUP BY` lets you aggregate over some group.
- If you group by `length, age`, then all tuples with the same `length, age` will be grouped together. Aggregations are done with these groups, then!
	- Also `COUNT(*)` would be the # of tuples in the groups!
- Lets you return the aggregation *alongside* other attributes!
	- Typically you'd only be able to do `SELECT COUNT(length)` but with `GROUP BY` you can include any of the attributes you grouped by.
	- To generalise:
```sql
SELECT x, y, z, SUM(x), COUNT(*), AVG(z)
FROM XYZTable
GROUP BY x, y, z
```

HAVING lets you shrink the sub groups further through a condition. You say
`HAVING MIN(x) < y AND x < z` or something like that.

[[More SQL (Week 6 (10-09))]]

Data Modification Language = DML
- Inserting
- Deleting
- Updating

`INSERT INTO <RELATION(attrs)> VALUES <((list), (of), (attrs))>`

```SQL
INSERT INTO StarsIn(movie_title, star_name, movie_year)  
VALUES ('Star Wars', 'Harrison Ford', 1977), 
	   ('Star Wars', 'Mark Hamill', 1977)
```
And you can also insert subqueries (which are tables after all) SO LONG AS the schema is the same

DELETING 

`DELETE FROM <relation> WHERE <condition>`
- Deletes via condition. You don't pass an instance

`UPDATE <relation> SET <new-value> WHERE <condition>`

#todo Gotta remember this

So `INSERT INTO <relation> VALUE <relation-to-insert>`
And
`DELETE FROM <relation> WHERE <condition>`
And
`UPDATE <relation> SET <new-table> WHERE <condition>`


Creating tables (this is where it gets confusing with triggers and all that jazz)
- `CREATE TABLE <name> (<list of elements>)`
Elements are `name` `type`
- Type can be like CHAR(20) or REAL or VARCHAR(20)
- etc

```SQL
CREATE TABLE NewTable (
	name CHAR(20),
	address VARHCAR(20),
	pres_cno REAL)

DROP TABLE NewTable
```

And you can drop the table similarly.

You can CREATE:
- `TABLE`
- `VIEW`
- `INDEX`
- `TRIGGER`
- `ASSERTION`
Then you do `DROP <TYPE> name` to delete the "thing"

Declare keys with `PRIMARY KEY` or `UNIQUE` flag 
- Unique ones are nullable--keys are not
You can put them after a variable, or all together at the end
There is also `NOT NULL` to make sure not nullable. Also `DEFAULT <value>`

For the default one, it means when you do INSERT INTO you don't need to include the "defaulted" one.

Alter a table:
`ALTER TABLE <relation> <ADD|DROP> <attribute definition or name goes here>`

The GRANT-ing stuff... frick that.
That's Data Control Language though. DCL.

[[Constraints, Triggers, Views, Indices]]

Who needs arms when you have legs like these

Constraints. Intra-relational checks
Assertions: Inter-relational checks

Foreign keys are POINTERS.
You specify them with the `REFERENCES` keyword. Cuz it's literally a pointer right? Anyway You say that a variable `REFERENCES` a table, and then the attribute of said table.
- This means the "variable" is always an element of this other table.
- If the other table gets updated, or the tuple is removed, we do special things

For updating the table with the `REFERENCES` variable, if the updated variable is NOT in the other table, it'll reject the operation every time (because why are you intentionally trying to ruin things!?)

For *updating*/*deleting* a tuple in the "other" table (i.e., the one that the `REFERENCES` table is relying on), there are 3 behaviours
- DEFAULT: reject the operation
- CASCADE: update the relying table
- SET NULL: Sets the relying tuple to NULL (just give up trying to fix anything. null pointers yay)

And these are called "policies"
We update the policies of individual attributes.
`ON [DELETE/UPDATE] [CASCADE/SET NULL]`
- This is another "flag"

```sql
CREATE TABLE Studios (  
	name CHAR(30) PRIMARY KEY,  
	addr CHAR(50) DEFAULT '123 Sesame St',  
	pres_cno REAL,  
	FOREIGN KEY (pres_cno) REFERENCES MovieExec(certno)  
		ON DELETE SET NULL  
		ON UPDATE CASCADE)
```

CHECKING
- For validity! You can CHECK like a flag. For instance `CHECK(attr >= 10)`
- Checks happen on updates or adds (not deletes)
- To compare *many* attributes in the tuple, you don't use `CHECK` like a flag, but put it on the bottom.
- Then you can define the behaviour there

For inter-relational checks, we do ASSERTIONS
Which we create with `CREATE ASSERTION <name> CHECK (<condition-like-in-WHERE-clause)`
You'd use subqueries to get actual tables and things.

```sql
CREATE ASSERTION RichPres CHECK  
	(NOT EXISTS(SELECT *  
		FROM Studios, MovieExec  
		WHERE pres_cno = certno AND  
			net_worth < 10000000))
```

Okay so those are assertions. They check for things.

TRIGGERS!
WAIT. NO. STOP. WHAT THE HELL

Views!
Hey i like these
```sql
CREATE VIEW ViewName AS 
	SELECT
	FROM 
	WHERE
```
Basically acts as a wrapper. 

```sql
CREATE VIEW ParamountMovies AS
	SELECT title
	FROM Movies
	WHERE studio = 'Paramount'
```

```SQL
SELECT title  
FROM ParamountMovies -- This is a VIEW!  
WHERE year = 1979
```

[[Indexing Stuff]]
im gonna commit something. I think i need a break though lowkey. brains are like sponges right?

Dense Indices -> Every search key has an entry in the index file
- 1000 records = 1000 entries
- Very fast
- We just need indexes. No other accessing data
- Sparse indicies means less of them (each index points to one data block)

You can have levels of them
#todo if i have time, might be worth going over this again

[[Query Execution and Optimization]]
This stuff isn't so bad!

Summary:
1. Query execution (the processing model stuff)
2. Plan processing direction
	1. Top-down
	2. Bottom-up

Query compilation
- It's first parsed (it creates a "parse tree" based on the SQL statements)
- It's then rewritten
- And then a physical plan is made

Query Execution is done by the "processing model" of a DBMS. There are 3 models.
1. Iterator Model (starts at the top, gets info squeezed up through Next() calls which return/take only tuples and `EoF`, not whole relations)
	1. Basically each operator in the query plan implements a Next() function
		1. Each next() call, the operator returns either a single tuple or EoF.
		2. The operator implements a loop itself that calls Next() for its own children. Next() *gives* the next valid tuple from the child up to the parent
Materialisation Model
- Instead of the operator doing one tuple at a time, materialisation model does the WHOLE table at once.
- But the problem is it has limits (big tables are hard to push)
- Otherwise it's good in OLTP (online transactions) cuz queries are usually very small
- BAD for "OLAP" where queries are really big

Vectorization Model
- Each operator emits a *batch* of tuples (instead of one, or the whole table)
- Best of both worlds
- Allows for operators to use *vectorized* instructions

Plan Processing Direction
Top-Down means start at root and pull into up from its children

Bottom-up means start at leaves and push data up to parents. It's better somehow

Data access methods. There are again 3 of them
- Sequential Scan: For each page of a table, we throw it into our buffer and iterate over each tuple to check if we include it (through our operation)
	- VERY SLOW!
		- But we can optimise it in many ways
		- Im not remembering
- Index Scan
	- The DBMS picks an "index" to find the tuples in the query.
- Multi-index Scan
	- Like say we have age, department indexes for Students
	- You can have way more or less of one group. the smaller group = faster to search through.
	- RIDs are created, matching indexes with a certain condition (like age = 30) and the set could be $\set{ 1, 2, 4, 8, 10}$
	- Then you do the same for the other index.
	- If you want that the age < 30 OR the department, we use the union of these RIDs. otherwise we use the intersection

Modification Queries
- INSERT, UPDATE, DELETE modify tables n things
- The child operators pass Record IDs for the target tuples and the parent operator keeps track of hit tuples

Halloween problem
- Bug where you change the physical location of a tuple (usually "further") and end up hitting it again, and changing it again, more than once.
- Solution? Keep track of the tuples you've already hit.


DBMS makes WHERE's into expression trees
- Evaluating predicates via trees is slow because of traversing and for each node it needs to figure out the operation needed to be done
	- Solution: Use JIT
	- Memorise the action instead of reading it line-by-line like in Python

Query Optimisation Part
- The SQL turns into logical plans which turns into physical plans
- Enumeration can be top-down to bottom-up
- We estimate the cost of each plan to see which one is best
- The "physical plan" is the algebra tree stuff.
The query optimizer in the DBMS is the one that finds candidate trees and somehow compares their speed
- It does some logical optimisations
	- Projection down
	- Selection down
	- Cartesian Product (Times) and Select becomes the Joins (like theta join)
	- Equivalent operations
- And then cost-based search
To calculate cost, you use the formulas given by every operator. Then we estimate the size for said operations somehow.

Physical Cost (dependent on operator algorithm) Vs. Logical Cost (estimate of output size per operator) is a thing

[[Transaction Management]]
txn stuff.

Concurrency Control deals with transactions happening parallel.
Recovery ensures DB doesn't break when crashes happen.

CC&R in total.

txns are just Reads and Writes of objects. Either they are `Commit` or `Abort`'ed

Concurrent execution is important because
- Speed
- Keeping CPU busy
- Better response times

They should satisfy ACID
- Atomicity
	- All actions happen or don't happen
- Consistency
	- If every txn is consistent, the whole DB is
- Independence
	- A txn should be totally isolate of others
- Durability
	- If a txn commits, the result should persist

For atomicity and durability, we log actions
- Undo if action aborted or failed
- Redo if the txn did not propagate to the disk yet (crashes)

For consistency
- We have integrity constraints
	- Like ASSERTION's or CHECK's

For isolation (and therefore concurrency)
- We have "interweaving"
- txns run as if running by themselves
	- other txns accessing the same DB doesn't effect "this" txn

Scheduling txns
- Serial schedule is easiest (no interweaving)
- "Serialisable" schedule is similar but not the exact same

Dirty read -> Opened for writing but you read.
Dirty write -> Open for reading/writing but you write again
Unrepeatable read -> Read twice

You can stop this via "locks"
- 2PL protocol specifically.
	- txn's get an S lock before reading and an X lock before writing
	- If X, no other txn can access same data
	- You can't get a new lock until one has been released
- Lock manager keeps track of this stuff

Recovery manager for crash recovery. Saves the A and D from ACID
Uses the Log
Logging is done "writing ahead"
- Before a txn is commited, a log is made

Deadlocks
- Prevented via "timestamp" priority system or detection (timing out if lock is taking too long)


[[Advanced SQL]]
- This stuff isn't TOOOOO bad

OLAP stuff
- Small queries.

Modelling data with "dimension" attributes and "measure" attributes

Measure attrs are "some value" and can be aggregated (cuz number). They are the "quantity" of a table.

Dimension attributes are what define the measure attributes
- The "facts"
- In a table, everything that isn't a measure is a dim attr
- They can be seen as "angles" to view the data at

Usually small stores will handle OLTP like with online transactions and stuff. They are fast and data is stored immediately.
Then the data goes to big warehouses overnight to get the business insights with, say, THE CUBE

Star Schema
- There is a "fact table" (a very large data accumulation of facts)
- which is derived from many 
- Dimension tables, which are smaller and update much slower. They are facts about the data in the fact table

The example given was the "beer sales"
- The "fact table" might be `Sales(bar, beer, drinker, day, time, price)`. Quite long!
- Dimension tables span from this. They can look like:
	- `Bars(name, addr, lincense)`
	- `Beers(name, manf)`
	- `Drinkers(customerId, name, addr, phone)`
- So you can see how the facts point to these dimension tables
Look at the image. It's helpful

The fact table has "dim" attributes (the key of a dimension table) and dependent attributes dependent by the dim attributes of the tuple

You can have ROLAP (relational OLAP, tuning relations to support star schemas) or MOLAP (multi-dimensional OLAP which are specialised for this stuff)

To "Roll up" means to aggregate (merge) the table (shrink it) by reducing the number of dimensions, basically. 
The image, again, is very good.

Drilling down is the opposite. It expands the data out by adding a new dimension

To use OLAP in SQL, you use the `CUBE` keyword.


```SQL
SELECT x, y, z, SUM(sizes)
FROM Sales
GROUP BY CUBE(x, y, z)
```
This calculates $8$ subsets to use for the drilling down and rolling up.


[[Data Mining]]
- Basically means summarising big data usefully. 
- Has to do with finding patterns (like how ketchup is almost always bought with potato chips)
- But to remove outliers, we have a $s$ "support" factor to filter by

And then it's a big SQL query i will not remember but there is an A-Priori optimization for it.

[[To Normalise or Not]]
- Use the results from [[Advanced SQL]] or [[Data Mining]] to see which operations you do often, and which ones you don't. Then you can un-normalise some operations


[[NoSQL]]

Relational DBs are still king but web-apps make things difficult for them.

Scaling woes
- To provide ACID, having the computation all on one computer is preferable, but you can't scale vertically forever. Also horizontal = cheaper
- You can do two things for horizontal
	- Primary+Secondary Scaling system
		- The "primary" worker does all writes.
		- Reads are made with "replicated" secondary copies of the worker (primary)
		- Issue: read latency for copying / waiting for writes from main guy
		- Issue: large datasets are hard to duplicate
	- Sharding
		- Reads *and* writes are done on unique computers
		- But apps gotta be aware that there are other partitions
		- Costly to join across partitions
		- and lots of referencing between partitions
NoSQL:
- No relations
- No schemas
- Data is in many "nodes"
- Easy to deploy
Cons:
- no SQL
- Relaxed "acid"

CAP theorem
- Consistency
	- All copies have the same value
- Availability
	- Reads and writes always succeed
- Partition-tolerance
	- System properties hold over any kind of problem

You always need partition tolerance. You have to sacrifice C or A

For consistency
- You can either have "eventual" consistency where the partitions settle over time
- Or something else. It's a spectrum of trade-offs

There are 4 NoSQL thingys
- Key-Value
- Document Stores
- Column-based
- Graph