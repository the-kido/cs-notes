"*How do we find the minimal basis for a set of functional dependencies?*"

> You need to satisfy 3 rules!

Let's assume we're given the minimal basis of FD's $B$ (B is a set of FD's). To have a minimal basis:
1. All FD's in B have a singleton *right side* (so only 1 attribute determines other attributes)
	1. E.g., $AB \to C$, or $BC \to C$
	2. That second FD doesn't satisfy rule #3 though!
2. If any FD is removed from B, the result is no longer a basis
	1. This proves "minimal"
	2. Can be shown by proving all the *other* FD's can't work together to [[Inferring FDs|infer]] a certain FD. If it can... well then it's not required!
		1. We can easily show this by [[Closure Algorithm|finding the closure]] of the right side.
3. If from any FD in $B$ we remove an attribute from the left side, it's no longer a basis
	1. Means the left sides for all FDs in B are minimal, too.
	2. We only need to check this for FDs whose left side has *2 or more attributes*.

> [!note] Example
> 
> ![[Example to show minimal basis.png]]
> 1. All the FD's in F have right side as singletons. Good!
> 2. We will find the "closure" of all the left-sides of the bases (using all BUT the FD we're interrogating) to see if it's required or not:
> 	1. $(AB)^+$ gives ABD, not C, so we need $AB \to C$. 
> 	2. $C^+ = C$, so we need $C \to B$. 
> 	3. $A^+ = A$, so we need $A \to D$
> 	4. All are required!
> 3. There is only 1 where the left is not singleton: $AB \to C$.
> 	1. A^+ = AD which is not A --> C
> 	2. B^+ = B which is not B --> C
> So this F is a minimal basis!


