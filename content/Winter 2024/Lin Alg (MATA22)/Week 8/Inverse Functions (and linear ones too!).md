>[!defn] Inverse functions
>Suppose $S : V \to W$. The inverse of S is $T : W\to V$ such that 
>$$T(S(\vec v)) = \vec v\; \forall v \in V \text{ and } ST(\vec w) = \vec w\; \forall w \in W$$

>[!thm] Injectivity, Surjectivity, and Inverses
>A function $S : V \to W$ has an inverse $T : W \to V$ iff S is injective *and* surjective
>
>>[!proof]
>>$\Rightarrow$ Suppose S has an inverse T.
>>Suppose S(x) = S(y). Then $T(S(x)) = T(S(y)) \Leftrightarrow x=y$
>>Pick $w \in W$
>>Then $ST(w)) = w \implies S(T(w)) = w$ so clearly $w$ is an output of S
>>
>>$\Leftarrow$ Suppose S is injective and surjective.
>>Define $T(\vec w) = \vec v$. We needa show T is "well-defined" #todo WHAT DOES THAT MEAN
>>1. T is defined for all $w\in W$ as every $w \in W$ is an output of S by surjectivity so we have a $T(w) = v$ for each $w \in W$
>>2. T is a function
>>Every $w\in W$ is the output of a unique $v \in V$ by injectivity. So T is a function.
>>
>>Therefore T is defined for all $w \in W$ and $T(w)$ is unique for each $w \in W$
>>
>>Now to show that T is an inverse:
>>T(S(v)) = T(w) = v
>>S(T(w)) = S(v) = w
>>So yeah it's an inverse all right.

>[!explanation] Proving a function is well-defined
>1. It needs to have an output for all values in its domain
>2. It needs to accept a unique input (two inputs cannot result in the same output)

>[!thm] Inverses are Unique
>
>If a function S has an inverse T, then T is unique!
>
>>[!proof]
>>Suppose $T_1$ and $T_2$ are inverses.
>>Then consider $T_1(w) = T_1(S(v)) = \vec v$
>>and $T_2(w) = T_2(S(v)) = v$
>>Therefore $T_1(w) = T_2(w)$, for all $w \in W$, so it's unique


>[!thm] Inverses of linear functions are linear
>![[Pasted image 20250309224021.png]]
>I took the ss instead because of the funny drawings
>1. To prove something is linear, we just show that T(cx + y) = cT(x) + T(y)
>2. We rephrase x and y as results of $S$ so we can do inverse magic on it
>3. Then we use the fact that T and S are inverses to cancel things out!
> #todo What is that last part about with the writing x and y as other things. I do not see the purpose of it.


>[!thm] Elementary Row Operations are Invertible Matrices
>I.e. there exists a row operation matrix that undoes a row transformation
>![[Pasted image 20250309224523.png]]
#todo i am not gonna remember any of this so maybe look at it better later :)

The notation for an inverse matrix is just $E^{-1}$ if $E$ was the initial matrix.

left ff at page 16