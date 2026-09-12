### Pulling out negatives
Let's say we want to prove that $a \not \in A \backslash B$. We could rewrite this as $\neg(a \in A \wedge a \not\in B)$ since a is NOT in A\B. This is equivalent to $a\in A \to a \in B$, which gives us another assumption: that $a \in A$, which will be useful in our proof!

The proof: Suppose $A ∩ C ⊆ B$ and $a ∈ C$. Prove that $a \not ∈ A \backslash B$
![[Pasted image 20241031163022.png]]

### Proving 3 equations are equivalent
>Look at page 147 for more details.

I want to prove that
1. A(x)
2. B(x)
3. C(x)
are equivalent, all I need to prove is
1. $A(x) \to B(x)$
2. $B(x) \to C(x)$
3. $C(x) \to A(x)$
