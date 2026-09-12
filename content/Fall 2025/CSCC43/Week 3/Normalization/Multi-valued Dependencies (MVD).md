A property most desirable for [[Normal Form|normal forms]] like [[4NF]]

$$X \to\to Y$$
- `\to\to` 😏😏😏

Means if we have two tuples, say $t_1, t_2$ which share the same $X$ values, then if we *swap* the $Y$ values and that new tuple must *still* be in the table! (i.e., no FD is broken)

![[Multivariable Dependency.png|600]]

### Rules for MVDs
1. Every FD *is* an MVD
	1. If $X \to Y$ holds, then swapping $Y$'s between tuples that agree on $X$ *doesn't* create a new tuple (they're the same tuple)
2. **Complementation**
	1. Given `R(X,Y,Z,W)`, if $X \to\to Y$, then $X\to\to ZW$
		1. #todo If i have time, maybe understand further

You cannot split MVDs
like if `name ->-> street, city` holds, that does not mean
- `name ->->street`
- nor
- `name->->city`
- do

