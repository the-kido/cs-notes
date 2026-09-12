
# Concurrency Control & Recovery
*Concurrency Control*: We want to be able to have lots of "very available" access to data concurrently over a large/diverse user population.

*Recovery*: Ensures our DB is tolerant to faults (which inevitably happen!). We need 24/7 access to all super important data.

CC&R allows apps to be written without explicit concern for concurrency and/or fault torlerance.
I.e., the app developers can do whatever the heck they want without thinking too hard, and the DB will be safe!

It went onto the [[Structure of a DBMS]]
![[Structure of a DBMS.png]]
The last three layers must consider CC&R via [[Transaction]], [[Lock]], and [[Recovery]] Managers

## Transaction (txn)
- A DBMS's abstract view of a user program (or activity)
- Looks like a *sequence* of elementary reads (R) or writes (W) of database objects
- Each transaction execution has two outcomes:
	- `Commit` (completing all actions--transaction are multiple steps, not just one)
	- `Abort` (unable to complete all of its actions, or the DBMS said to stop)

## Transaction Manager
- The DBMS component that controls the execution of transactions!
- A user's program might do many operations on data from the DB, but the DBMS only cares about what data is *read*/*written* and if *from*/*to* the database

### Concurrent Execution
- Important because:
	- Disk is a bottleneck (it's slow but frequently used)
	- We must keep the CPU busy with as many queries as possible
	- And concurrency gives better response times!

## ACID Properties of Transaction Executions

**A**`tomicity` -- All actions in the txn *happen* or *don't happen*.
**C**`onsistency` -- if each txn is consistent, and the DB is consistent, then everything is *consistent*!
**I**`solation` -- execution of one txn is isolated from all others. No *dependency*
**D**`urability` -- If a txn commits, its effects persist (it should survive all future failures which should not effect this result)
(...tunnel of love sorry i couldn't help it)
### Atomicity and Durability
Transactions can be committed if all their actions are complete, or it could be *aborted* if there's an error or the DBMS says so. Sometimes the system might crash while a transaction is in progress, too. All things to consider

The DBMS ensures Atomicity and Durability by *logging all actions*:
- **Undo** the actions of aborted/failed txns
- **Redo** the actions of committed txns not yet propagated to disk when the system crashes
	- If the action "has" propagated to the disk, then there's no need to redo (work has already been done)

### Consistency
Consistency of a DB is expressed as a "set" of declarative *Integrity Constraints*
- For instance, when doing `CREATE TABLE` (with `CHECK`) or `ASSERTION` statements
	- You might have an assertion stating each C43 students can register into only one project group and each group can only have at most 2 students.

If any transaction violates an integrity constraint, they are *aborted*

### Isolation (Concurrency)
- Achieved by interweaving actions (like reads/writes of DB objects) of various transactions
- DBMS ensures transactions do not step onto one another
- *From me: Isolation = transactions have no dependencies = can be concurrent, not needing to worry if one action happens before another!*

To clarify, each txn executes *as if running by itself*
- So a txn's behaviour is not impacted by other txns accessing the same DB
- It should be the same as doing all the txns in serial order vs. in parallel
- Users can understand a txn without considering other concurrent txns 

![[Example of concurrent txn.png]]
- This is what a txn might look like
- In both cases the result is the same.
![[Concurrent txn example that breaks things.png]]
- But in this example, the `B = 1.06 * B` happens earlier, which means the bank ends up losing $6!
	- The `R(A)` means "reading" A and `W(A)` means "writing" A. C means *commit* the changes (closing files and whatnot)

#### Scheduling Transactions

You can have
- Serial schedule (easiest!). Schedule where txns do NOT interweave other txns
- Equivalent schedules: for any DB's state, the effect (on a set of objects in the DB) of executing the first schedule is the same as doing the second schedule
	- I'd think this is preferred?
- Serializable schedule: "Equivalent" to serial execution of the transactions, but not directly serial.

#### Bugs with Interweaved Execution
![[Bugs with Interweaved Execution.png]]
1.  You cannot write, then read right after. You have to close the file you're writing into! It erases all written changes (dirty read)
2. Unrepeatable reads
	1. T1 is reading A, but T1 reads, then writes into A, thereby changing what T1 sees
3. You cannot write twice. Opening for write the second time erases the first's content (dirty write)


#### Lock-based Concurrency Control
We can ensure concurrency while avoiding the bugs before via this method!

Two-Phase Locking (2PL) Protocol:
1. Each txn must obtain an $S$ (*shared*) lock on an object before *reading*, and an $X$ (*exclusive*) block on an object before *writing*
	1. S = shared = reading. X = exclusive = writing
2. If a txn holds an $X$ lock on an object, no other txn can get a lock (neither $S$ NOR $X$) for that locked object
3. The system can get these locks automatically
4. *Two phrases*: Getting the locks, and releasing them
	1. No lock is ever acquired UNTIL one has been released.
	2. There's a "growing phase" adding more and more locks, and a "shrinking phase" where locks are given back
5. A **Lock Manager** keeps track of the request for locks and grants locks on DB objects when they're available

##### Strict 2PL
2PL allows only serializable schedules *but* is subjected to *cascading aborts*

Example:
![[Strict 2PL.png]]
- See here, in order to rollback T1, we have to rollback T2, too!
To avoid this issue, we use **Strict 2PL**
- Same as 2PL, except *all locks held by txns are released **only when** the txn is fully completed*


#### Crash Recovery
- When a DBMS restarts after a crash, the recovery manager MUST bring the db back to a consistent state!
- It ensures the transaction atomicity and durability.
- It undo's actions the txn did not commit
- It redo's actions of committed txns during system/media failure (media = corrupted disk)

#### The Log
- This consists of "records" written sequentially.
- Usually chained by txn id's 
- Stores modifications

#### Logging
Uses *Write Ahead Logging (WAL) protocol*:
- WAL ensures that if a system crash occurs, the recovery manager can use the log on the disk to determine what changes to undo or redo!
- Log record must go disk *before* any page/disk block changes
	- This is done via a handshake between log manager and buffer manager
- All log records for a transaction MUST be written to the disk before the txn is considered "Committed"

The DBMS handles all things logging

#### ARIES Recovery
Has 3 phases:
1. Analysis: Scan the log from the most recent "checkpoint" to figure out all txsns that were active and all the dirty pages in the buffer pool at the time of crash
2. Redo: redo all updates to the dirty pages if needed to make sure all logged updates were indeed carried out and written!
3. Undo the *writes* of all txsns that were active at the crash (it restores the before value of the update given in the log)


WAL + ARIES = recovery system!

### Transactions in PostgreSQL
1. All transactions are serializable
2. The reads are repeatable (no dirty reads, but you can't read data that was written into and not committed)
3. You can read committed txns
	1. Statements can read data that has been modified but not yet committed by the txn.
4. You can read uncommitted txns
	1. or not? Not supported by Postgres?

### Transaction Reads
1. *Phantom reads*
2. *Non-repeatable reads* happen when a transaction re-reads data it already read, finding the data has since changed!
3. *Dirty reads* happen when a transaction reads data that has already been modified, but not committed


### Deadlocks
![[Deadlocks in transactions.png|600]]
A cycle of txns waiting for locks to be released by each other.
I imagine it's like "one guy has lock", "other guy is waiting for lock to end, but has a lock the first guy wants" so it's a stalemate.

You can either prevent them or detect them.

#### Prevention
- Assign priorities based on timestamps. So if table $i$ wants a lock that table $j$ holds, you can do either thing:
	- Wait-Die (if Table $i$ is higher priority, then it waits for $j$, otherwise $i$ aborts)
	- Wound-Wait (if table $i$ has higher priority, then table $j$ aborts, otherwise $i$ waits)

#### Deadlock Detection
We create a "waits-for" graph like above
- Nodes are txns
- The edge from tables $i$ t $j$ would be $i$ waiting for $j$ to release a lock
- You just periodically check for cycles in these graphs


Most systems do the *detection* thing.
- Interesting fact: most cycles' wait cycles are length 2 or 3
- So only very few transactions need to be aborted
- implementation can vary!
	- You can construct the graph and check periodically
	- You can do a "time-out" system where if you've been waiting for a lock for too long, assume you're in a deadlock and abort

