
We are given relation $R$, a set of FD's $F$, and a key $Y$ of R
1. Find the [[Minimal Basis of FD|minimal basis]] of $F$ (we'll call it $G$)
2. For every FD $X\to A$ inside of $G$, output $XA$. Let $\rho$ be the resulting *schema* (basically a set of relations)
3. When that's done, if none of the relations in $\rho$ have attributes that are a superkey of $R$, add a relation consisting of attributes $Y$ (i.e., a key for $R$)
	1. If a relation is a proper subset of another, we can eliminate it (it's useless)
	2. Since [[Keys of Relations|keys define uniqueness of a relation]], a subset is not unique.
4. The resulting schema is a 3NF decomposition of $R$ that is *dependency preserving* and whose data is recoverable.

>[!example] Example #1
>
>Consider `R(A, B, C)` with $AB \to C$ and $C \to B$ (this was problematic for [[BCNF]]!)
>We [[Keys of Relations|find the keys]] to be $\set{A ,B}$ (since $AB \to C$ gives all attributes) and $\set{A, C}$ (since $C$ gives $B$ so we get all attributes again)
>
>1. The basis is already minimal
>2. $AB \to C$ creates relation $R_1(ABC)$ and $C \to B$ creates $R_2(BC)$
>3. Nothing to add. $R_1(ABC)$ consists of attributes of the key $\set{A,B}$ so we're good
>	1. We can remove $R_2(BC)$ since $BC \subseteq ABC$
>4. So the 3NF here is simply $R_1(ABC)$. The original was already in 3NF!

>[!example] Example #2 
>
>Consider `R(A, B, C, D, E)` with $AB \to C$, $C \to B$, and $A \to D$.
>The keys would be $\set{ABE, ACE}$
>
>1. The given FDs are a minimal basis
>2. The relations would be $S_1(ABC), S_2(BC), S_3(AD)$
>3. None of these are a superkey of $R$ so we add, say, $S_4(ABE)$ (any of the keys would be fine)
>	1. Also $BC \subseteq ABC$ so $S_2$ is not needed
>4. The decomposition is $S_1, S_3, S_4$


