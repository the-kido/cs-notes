To remove [[Design Anomalies]], we decompose our big, hulking, clumsy, clunky, cumbersome table. To do that, we must satisfy the following:
1. **NO anomalies** should not exist anymore (that's the point)
2. We can recover the original information by manipulating pieces (**Lossless Join**)
	- ![[C43 -- Something's wrong.png|600]]
	- The above has an issue since R1 and R2 don't share any attribute, so how do we know how to merge them back?
3. **Dependency Preservation**
	- The FD's enforcing the decomposed schema should also be recovered when merging them all back and get the original FD's
	- If you had the rule that $A \to B$, but $A$ and $B$ are now in separate tables, you've lost a dependency!

## Decomposition
- Let R be some relation with attributes $A_1 \dots A_n$
- A decomposition of R means replacing R with two or more relations such that
	1. Subsets of the attributes of R are contained in these sub-relations. Nothing new. 
	2. Every attribute of R has to show up at least once between all of the relations

We will then store the relations made by the decomposition, instead of just $R$

Problem is now knowing "when" to decompose and "how. We use [[Normal Form|Normal Forms]] to diagnose when we have a problem (sometimes our eyes aren't reliable!). We use [[Decomposition Algorithms]] to actually decompose and solve these issues!
