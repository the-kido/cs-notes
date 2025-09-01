Takes two input vectors (so, like, one or more bits) A and B, and determines if A is less than, greater than, or equal to B.

There are 4 total permutations for 1-bit inputs, which makes 1 bit comparators super easy!
![[1 bit comparitor.png]]

But for more than 1 bit, things get spicy.
- For instance if we're talking about 2 bit inputs, A == B only when $A_0 == B_0$ and $A_1 == B_1$ so that becomes obtuse quite fast
- ![[2 bit equivalence.png]]
- To check if A is greater than B we check if
	1. $A_1 < B_1$. In that case, $A < B$ is a given, or 
		1. This looks like $A_1 \cdot \bar B_1$
	2. $A_1 == B_1$ and $A_0 < B_0$.
		1. This looks like $(A_1 \cdot B_1 + \bar A_1 \cdot \bar B_1) \cdot (A_0 \cdot \bar B_0)$
less than is similar!
![[Comparison.png]]

The expression $A_1 \cdot B_1 + \bar A_1 \cdot \bar B_1$ is true when the first bit is equal (replace the 1's with 0's to get when the *second* bit is equal)

### General comparators
For a "general" comparator we need to define some things:

Equality:
- For equality of any bit, we have $X_i = A_i \cdot B_i + \bar A_i \cdot \bar {B_i}$
- That gives us $A == B : X_0 \cdot X_1 \cdot \dots \cdot X_n$

`>` and `<`
- For any digit, if the previous are equal, and the one we're on, $i$ satisfies:
	- $A_i = 0$ and $B_i = 1$, then $A < B$ no matter what bits after $A_i$ follow it
	- $A_i = 1$ and $B_i = 0$, then $A > B$ for similar reason to above
- That gives us, for any $n$ sized input stream:
	- $A>B : A_n \cdot \bar B_n + X_n \cdot A_{n-1} \cdot \bar B_{n-1} + \dots + \prod_{k=1}^n X_k \cdot A_0\cdot B_0$
		- The first check is your base case (if the first bit of A is bigger than the second of B, then boom you're done)
			- the $X$ is defined from before
		- The second checks if the bits before are equal. if they are, we also compare the bit at. 
		- This repeats until we're checking for every bit before the last bit; if they're *all* equal, then compare the bits we're at. 
	- The same is reflected on $<$ of course

>[!example] Example of 4-bit comparator expressions
>![[4 bit comparator expressions.png]]
>


## Subtraction instead
The more bits you have, the more complex comparing becomes. Therefore, subtracting might be the play. Simply subtract A and B, and if the sign changes, you can determine if A < B or A > B!