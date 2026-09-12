Eliminates *redundancy* due to multiplicative effect of MVDs.

Formally:
- $R$ is in 4NF if whenever an MVD $X \to\to Y$ is non-trivial 
	- Non-trivial for MVD $\equiv$ $Y$ is not a subset of $X$, and $X \cup Y$ is not *all attributes*
	- Remember $X\to Y$ implies $X \to\to Y$
- Decompose $R$ using 4NF violation $X\to\to Y$ into $XY$, and $X \cup (R-Y)$

#todo here's an example
![[4NF example.png|600]]

