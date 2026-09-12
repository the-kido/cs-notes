A table is in 3NF if for every non-trivial FD $X \to A$, you either have
1. that $X$ is a superkey, or
2. That $A$ is prime. That is, a *member of at least one key* (not necessarily the same key)

This gives us two things.
1. Recoverable data after decomposition.
	1. BCNF does this too, though
2. FDs of the original relation are satisfied in that they exist in the projections of the FDs of the decomposed relations.
	1. BCNF does NOT have this. This ensures [[Dependency Preserving Decomposition|dependencies are preserved]]

And from there we can [[3NF Decomposition|decompose in 3NF!]]
