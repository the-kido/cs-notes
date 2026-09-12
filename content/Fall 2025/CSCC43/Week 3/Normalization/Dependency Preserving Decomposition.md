After [[BCNF Algorithm|trying to fix anomalies]] you might realise the decomposition doesn't preserve dependencies. Let's fix that.

The simple concept we use is this:
$$\begin{align}
&\text{If R is decomposed into X and Y, }\\
&\text{and we ENFORCE their FDs hold on X and Y,} \\
&\text{then ALL FD's that were held on R will also hold}
\end{align}$$
Reads as:
- We achieve *Dependency Preserving Decomposition* if by enforcing the FDs of X and Y, the whole database is guaranteed to be correct.
$$\text{Decomopsition of X, Y is depedency preserving} \Leftrightarrow (F_X \cup F_Y)^+ = F^+$$
- Closures of FDs returns every dependent FD, as closures of attributes returns every dependent attribute.
	- For instance, if $F = \set{A \to B, B \to C}$, then $F^+$ includes $\set{A \to B, B \to C, A \to C, AB \to C, B \to AC,\dots}$... it goes on forever. 
#### Showing if an FD is preserved or not
![[C43 finding dep preserved.png]]
- Here, at a glance, we know $A\to B$ and $B \to C$ are preserved/enforceable by virtue of the tables having all the required attributes. However $C\to A$ doesn't fit in either table. So is $C \to A$ not preserved???
	- At a closer look, we can use "Closures" to really see what FDs are derived from these tables:
		- In the original ($F^+$) we have $B \to A$ with transitivity
		- In $F_{AB}$ we have $\set{A\to B, B \to A}$ (calculate if you wanna proof-check)
		- In $F_{BC}$ we have $\set{B \to C, C \to B}$
		- In $(F_{AB} \cup F_{BC})^+$, we **have** $C \to A$ because $C\to B$ and $B \to A$ exist in the set we're finding the closure of!
		- So that means $C\to A$ is preserved!
### The ""*Elegant*"" work-around

Basically, you ensure a relation R is in [[3NF]]. This "defines" the problem away.