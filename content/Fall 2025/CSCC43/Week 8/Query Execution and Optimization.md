

#### Intro

SQL lets us write *high-level* queries!
- Execution of these queries isn't specified. yay!
- The DBMS fills in the details for us

The Query processor turns queries and DML commands into DB operations and executes them.

## Query Compilation
Involves:
- Query Parsing
	- Creates a parse tree based on the SQL statements
- Query rewrite (part of *query optimization*)
	- Constructs an *optimized* local **plan** from the parse tree. 
- Physical plan generation (also part of *query optimization*)
	- Constructs a physical execution plan from the logical plan
![[Query Compilation Process.png]]

### Disk-oriented DBMS (Computer parts n stuff)
- The "AP" queries and "Txns" are part of the Execution Engine, which lives on the CPU!
- The memory/ram is the *buffer pool* which has pages of tuples/records that we're calculating on.
- The database file lives on your disk and it's just pages upon pages of data!

# Query Execution!
The DBMS's *processing model* defines how the system executes a query plan (after compilation?)

They all have pros and cons:

#1: Iterator Model
#2: Materialization Model
#3: Vectorized/Batch Model

## Iterator Model (The most used!)
- Each *operator* (basically a specific action/algorithm to process data. They are black-boxed between each other!) in the query plan implements a `Next()` function. 
	- On each `Next()` call, the operator (which implements `Next()`) returns either a single tuple, or an `eof` marker (if there are no more tuples. End of File)
	- The operator implements a loop *itself* that calls the `Next()` of its children. `Next()` gives the *next valid tuple* for the parent to work on until it's squeezed dry until an EOF

*"Parent says 'I need data, so let me call `Next()`' which makes the children do work and return their operated-on tuple for the parent to now work on, because it too was called by a parent which said 'I need data, so---'*


![[Iterator Model.png|800]]
- It starts from the top. Top calls children, which calls children, which hits the tables themselves which simply give (`emit`) a tuple.
- The emitted tuple goes to the parent operation (the selection on the right takes the raw tuples and filters them, which go up to the parent further).
- The parent "join" takes each emitted tuple from its children operations and runs its `Next()` call on them, eventually emitting again!
- Etc., etc.

## Materialization Model
- Each operator does everything all at once, then emits all the output at once too.
	- The operator "materializes" its output as a single result
	- The DBMS can push down hits (like `LIMIT`) to avoid scanning too much tuples (parent can't handle infinite tuples of course!)

#todo Look at the image and try to decipher it?


### Pros
- Good for OLTP (online transactions basically) because the queries are tiny and only use a small number of tuples at a time.
	- It has lower execution/coordination overhead
	- and it calls WAY less functions
- But not good for "OLAP" queries (Online Analytical Processing, for businesses and important data analysis stuff) with realllyyy big intermediate results

## Vectorization Model
Similar to Iterator Model (where each operator has a `Next()`) but the difference is *each operator emits a batch of tuples instead of a single one*
- Best of both worlds!
- The operators internal loop also processes many tuples at a time
- The size of the batch can change depending on hardware or what the query is doing

I am NOT tryna understand this darn diagram

### Pros
- Good for OLAP queries unlike the Materialization Model because it greatly reduces number of function invocations per operator
- Allows for operators to more easily use *vectorized* (SIMD--Single Instruction, Multiple Data) instructions to process batches.
	- Vectorization = fast!


## *Plan Processing* Direction
If I remember correctly, this happens right after the query parsing in the whole query compilation process.

You can have two systems. Up or down first. 
#todo I don't really get the top-down bottom-up thing. They barely explain it AT ALL
### Approach #1: Top-Down
- Start with the "root" and pull data "up" from its children
	- This is Iterator and Vectorization Model
- Tuples are always passed with function calls in this case

### Approach #2: Bottom-Up
- Start with the leaf nodes and push the data *up* to the parents
- More "amenable" to dynamic query re-optimisations during calculations

## (Data) Access Methods
These are the ways a DBMS accesses data stored in any table. (It's not defined in relational algebra)

There are 3 approaches:
1. Sequential Scan
2. Index Scan (along with many variants)
3. Multi-Index Scan

### Sequential Scan
- For each page in the table (pages go in units of, say, 10's) we:
	- Retrieve it from the buffer pool / DB file (from RAM or from disk)
	- Iterate over each tuple and check whether to include it (the operation)
- The DBMS maintains an internal **cursor** (like with any other file reading) that tracks the last page or tuple it examined

#### Optimizations
- Usually this is the *worst* way a DBMS can execute a query on data, but sometimes it's the only choice we have!
- Ways to optimize:
	- 5 items in a list
	- Slide 22. Not important

### Index Scan
- The DBMS picks an *index* to find the tuples the query actually needs
- The index we use depends on:
	1. The attributes the index contains (like if the key index is just names, and we want names, boom! Index has it)
	2. What attributes the query references (if the key index has names but we want salary, not useful)
	3. The attribute's value domains (string vs. numbers vs. something else)
	4. Predicate composition (idk what this is. Maybe #todo if valuable)
	5. Whether the index has unique or non-unique keys (we'd have to deal with [[Indexing Stuff#Indices with Duplicate Search Keys|duplicates]])

### Multi-index Scan
#### Setting the scene
Let's say we have *two* indexes going on
- Index 1: age
- Index 2: department

and this is our SQL statement:
```SQL
SELECT *
FROM Students
WHERE age < 30 AND department = 'cs' AND country = 'Canada'
```
We have two scenarios:
1. There are 99 people under 30, but only 2 people in the CS department!
2. There are 2 people under 30, but 99 people in the CS department!
Clearly the choice of index can significantly reduce work needed to be done. That is where *multi-index scans* come into play.

#### How it works
Note: *predicates* are just true/false conditions. It's the `WHERE` clause in this context.

- If there are multiple indexes that the DBMS can use:
	1. Create sets of "Record IDs (RIDs, where specific rows of data are on disk)" using each matching index
		1. So if index A is age, the set might be the RIDs of $\set{1,2, 4, 8, 10}$ (and allegedly these are all entries where age < 30)
		2. Index B with department is the same thing: RIDs could be $\set{2, 5, 9, 10, 12}$
	2. Combine these sets based on query's predicates (union vs. intersect)
		1. So if we want to check age *AND* department, we intersect the sets
		2. If it was age OR department, we union the sets.
	3. Retrieve the records and apply any remaining predicates
		1. We already hit on the `age < 30` and `dept = 'cs'` predicates. We now have to do the `country` one. 

## Modification Queries
There are queries like `INSERT, UPDATE, DELETE` which modify target table data and its indices. 

These operators either output Record IDs, or tuple data!

For UPDATE/DELETE:
- Child operators pass Record IDs for target tuples
- The operator must keep track of previously seen tuples. This is to prevent the Halloween Problem

For INSERT you have two choices:
1. Materialize tuples inside the operator (create them in the operation)
2. Operator inserts tuples passed from child operators (create them based on what the children say to create)

#### Halloween Problem
- It's a bug where an update operation changes the *physical* location of a tuple, which causes a scan operator to visit the tuple multiple times.
	- Like pretend you have a loop over an int array, and every time you see a `5`, you set the next number to be `5`. Well when the loop goes to the next number, it also sets it to `5`, looping the same work. Of course, the `5` might be set near the *start* of the array, and not the end, thereby ending the loop, but you get the idea.
	- Solution: Make sure you don't update twice by keeping track of what you've already hit

## Expression Evaluation
The DBMS represents WHERE clauses as expression trees!

![[Expression Evaluation and Trees.png]]

- Evaluating predicates via trees is slow b/c it has to traverse it, and for each node it must figure out what the operator needs to do.
- The better approach is to "evaluate the expression directly"
	- Think of machine code with a JIT compilation 
	- It "memorizes" the action instead of reading the instructions step-by-step (like an interpreted language, Python, would do)
		- The memorized actions is just machine code that does that one small action. Better than going line-by-line each time

## Summary
1. A query can be executed in many ways (which ways again? #todo find it)
2. DBMS's will prefer index scan over sequential or multi-index
3. Expression trees are flexible but slow, so JIT can (sometimes) speed them up

# Query Optimization
$$\text{gotta go fast}$$
#### Summary
- SQL -> Logical Plan -> Physical Plan
- We make a bunch of plans
- Plan enumeration can be bottom-up or top-down
- Estimating cost of each plan, so we need cost-estimation methods

![[Query Optimization Visual.png|800]]
- In these examples, we have the *same data* but the **physical plans** are different. Different plans have far different costs, even if they do effectively the same thing!

### Physical Plan
It's an annotated algebra tree -- the *output* of a query optimizer 
![[Physical Plan annotated algebra tree.png]]
- The **query optimizer** takes a query (makes the logical plan and stuff), optimizes it, and sends it to the execution engine to be run.

## Query Optimizer
- Identifies candidate equivalent trees (logically equivalent)
	- It's an "NP-hard problem" which idk. i haven't learned that yet.
- For each candidate tree, finds the execution plan tree (this is the physical part)
	- We estimate the cost for each plan!
- Then we choose the best overall physical plan. This is good work to do before committing to huge searches!

1: There are some **Heuristics / Rules** to the logical optimization
- The candidate trees are usually rewriting such that (what we guess are) inefficiencies are removed.
	- For instance, we always do *selection* first, or we always push down projections as early as possible.
- Doesn't worry about the data, just the catalog of operations

2: As for the physical part, we have **Cost-based Search**:
- We use a *model* to estimate the cost of executing a plan.
- We enumerate multiple equivalent plans for the query and pick the lowest-cost one.

### **Heuristics / Rules** for Logical Optimization in the Query Optimizer
#### 1. Predicate Pushdown
We push down selections as close to the relevant table as possible

![[Predicate Pushdown.png]]
#### 2. Replace Cartesian Product
$\times$ followed by a $\sigma$ is the same as $⨝_\theta$ so we might as well consolidate them
![[Replace Cartesian Product.png]]

#### 3. Projection Pushdown
Again, move as close to the table we're projecting as possible!
![[Projection Pushdown.png]]

#### 4. Equivalences 
![[Big list of relational algebra equivalences.png]]
### **Cost-Based Search** for Physical Optimization in the Query Optimizer
Reminder: We enumerate different plans for the query to estimate their cost.
Lowest cost wins. Found when we've gone through all plans, or when we've timed out (if there's just *that many* plans to go through)

#### For *Single*-relation Query Optimization
- Just pick the best access method
	- Sequential
	- Index
- Then do some predicate evaluation re-ordering
- Then some simple heuristic/rules to finish off. It's good enough for this kind of query

#### For *Multi*-relation Query Optimization
You have choices

1: Bottom-Up Optimization
- Start with "nothing" and build up the plan for the outcome you want

2: Top-Down Optimization
- Start with the outcome you want and down down the tree, finding the optimal plan that gets your goal.


### How Do We Calculate Cost?
- Easy: We have *formulas* for the operator algorithms (e.g., the cost formulas for hash join, sort, merge join, etc.), but we also need to estimate the size of the output that each operator produces, too.

#### Cost Estimation
The DBMS uses a "cost model" to predict the behaviour of a query plan given the DB's state

It's too expensive to run *every possible plan* to determine this info. The DBMS needs to derive this info somehow else.

#### Cost Model Components
1: Physical Costs (I.e., looking at Operator Algorithms)
- Predicting CPU cycles, I/O cache misses, RAM consumption, network messages, etc.
- Depends *heavily* on hardware
- Uses the formulas for the operator algorithms (recall, hash join, sort, merge join, etc.)

2: Logical Costs (i.e., Output Size)
- Estimate output size per operator (this is where most research has gone, actually!)
- The logical cost is independent of the operator algorithm
	- The *physical cost* is what's dependent of the operator algorithm!

