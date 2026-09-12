We take our given FDs and we derive new ones through relational algebra!

We use this fact: any arbitrary tuple $(a, b, c)$ can represent a relation $R(A, B, C)$ where $a, b, c$ are instances of the attributes.

Consider the following method:
![[Pasted image 20251017162042.png]]
- To show $A \to C$ holds, we consider the two tuples **with the `a`'s shared** to show that the `c`s are also shared! 
- If a thing is implied shared between the two, make them no longer distinguished (drop the subscript)

Btw, to clarify, if $A \to C$ "does" hold, then that means (a, b_1, c), (a, b_2, c) holds


