So you can have two approaches
## 1. We can choose a $K$ to be the superkey for a table
- That means the only FDs we can definitely derive is that $K \to (\text{Any or all attributes of R})$. So $K \to A$, or $K \to B$, or $K \to AB$. These all hold by virtue of what a "key" is (its [[Keys of Relations|uniqueness property!]] )

## 2. We can state some FD's and deduce the keys *from* them.
- This uses the [[Closure Algorithm]] for instance. 
- We simply use the E/R diagram. That will give a BUNCH of FDs (by the keys, many-one relationship declarations, and even known facts)
	- Keys simply give $K \to A$ relations. Easy peasy. Just like in method #1 
	- Many-to-one relationships also give FDs. The key for the "many" implies the attributes for the "one"
		- Like how $StudentID→DepartmentID$
	- "No two courses in the same room at the same time" gives us the FD $Room, Time \to Course$

