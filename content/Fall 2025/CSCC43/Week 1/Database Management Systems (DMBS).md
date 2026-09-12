A software *system* that manages data. Allows you to access data "declaratively" (by stating what you want, not *how* you want it).
It is super efficient, concurrent, atomic, and secure!
- Concurrency = back account updates. 
	- "Concurrency control" manages several operations at once
	- From one, $10 account, someone might draw $2 while another draws $3. They both see the account at $10, so their withdrawal would look like $8 and $7 individually, which is not right! (It should be $5 by the end, not two contradicting amounts)
- Atomic = There's no "partial competition". Things will either happen or not. There's no unreliable behaviour
	- You can think of "atomic" as "indivisible" like how "atom" is derived from "átomos" which means "unable to be divided"

>PostgreSQL, MySQL, Microsoft SQL Server, and Oracle are all DBMS's 

![[DBMS overview.png]]
- *Transactions* add
- *SQL parser* just "queries"
