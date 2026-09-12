Page 63 to 69

>[!defn] Bases
>A subset $S \subset V$ is a basis of $V$ if $V = Span(S)$ and $S$ is linearly independent.  
>>[!purpose]
>>Bases represent the most economical spanning set of a set S

>[!note] The standard basis of $R^n$ is $S = \set{\vec e_1, \dots, \vec e_n}$ where $S \subset R^n$.
> Conveniently, any vector $(a_1, \dots, a_n) = a_1\vec e_1 + \dots + a_n\vec e_n$ 
>>[!explanation]
>>Think of $R^3$ and a vector $(1,0,1)$. Then $S = \set{\vec e_1, \vec e_2, \vec e_3}$ and $(1, 0, 1) = 1 \vec e_1 + 0 \vec e_2 + 1 \vec e_3$
>>
>> Clearly $e_1 = (1,0,0), e_2 = (0,1,0),$ and $e_3 = (0,0,1)$; that's what the basis is for $R^3$.

>[!example] Consider $S = \set{(1,2), (1,-1)} \subset R^2$. Prove $S$ is a basis of $R^2$
>First, we show that S is linearly independent (i.e. the only solution to Span(S) = 0 is if a = b = 0).
>> $x_1 + x_2 = 0$
>> $2x_1 - x = 0$
>> $x_1 = 0$
>> $x_2 = 0$
>> So the trivial solution is the only solution, meaning S is linearly independent.
>
>Then we see that S spans $R^2$
>> To do that, we show 
>> $x_1 + x_2 = b_1$ and
>> $2x_1 - x_2 = b_2$ 
>> where $(b_1, b_2) \in Span(S)$ #todo I cannot remember this tbh i am kindba dumb.
>
> Anyway $x_1 = (1/3)b_1 + (1/3)b_2$ and $x_2 = (2/3)b_1 - (1/3)b_2$. Since there are n equations in the form $0 = c_1b_1 + c_2b_2$, we see that there are solutions $(x_1, x_2)$ for all $(b_1, b_2) \in R^2$. Hence $Span(S) = R^2$
 >^ex1


>[!example] Proving that $S = \set{(1, x, x^2, \dots, x^n)}$ is a basis of $P_n(\vec R)$ 
>To contradict that S is linearly independent, we can say it's dependent.
>Then $a_0 + a_1x + a_2x^2 + \dots + a_nx^n = 0$ where at least one of the a's are not 0 for any x. However this cannot be the case as the coefficient of the highest-degree term, call it $a_k$, will be non-zero. Therefore it must be that $a_i = 0$ for all $i$. So, S is as a basis of $P_n(\vec R)$


The theorem where S is a basis of V iff every vector in V can be written unique has a linear combination of the vectors in S.


>[!Note] The coefficients of a linear combination of a basis set can be thought of as the "coordinates"

>[!note] 
>Consider the Basis $S = \set{(1,2), (1,-,1)}$ for $R^2$. Then  $(b_1, b_2) = ((1/3)b_1 + (1/3)b_2)(1,2) + ((2/3)b_1 - (1/3)b_2)(1,-1)$ for any vector $\in R^2$ as shown (as found [[Bases and Dimensions (textbook)#^ex1|here]])
>
>Therefore any vector of R^2 can be described by the vector coordinates $((1/3)b_1 + (1/3)b_2, (2/3)b_1 - (1/3)b_2)$.

#todo What is $C^1(\textbf R)$
- The vector space of (x) where x is a complex number. Similar to $C^3(\mathbb R)$
- oh and it's a function ig? idrk

>[!thm]  Extending an Independent Set to a Basis
>For a linear independent subset $S$ of $V$, there exists a basis $S'$ of $V$ where $S \subseteq S$'
>>[!purpose] This shows that every linearly independent set may be *extended to a basis* (by adding more vectors)
>
>>[!proof]
>>First, we need [[#^lemma|this]] lemma
>>Then it's the coding thing from tom's lecture


>[!thm] Linear Dependence Extension Lemma
>Let $S \subset V$ be linearly independent and let $x \in V$ but $x \not \in S$.
>Then $S \cup \set{\vec x}$ is linearly independent iff $x \not \in Span(S)$
>>[!proof]
>>-->
>>>(by contradiction) Suppose $S \cup {\vec x}$ is linearly independent but $x \in Span(S)$
>>>Then $x = a_1x_1 + \dots + a_nx_n$ for $a_i \in \mathbb F$ and $x_i \in S$ as x can be represented by the span. Rewriting this, we get $$0 = (-1)x + a_1x_1 + \dots a_nx_n$$. Since this takes the form of a linear combination for $S \cup \set{x}$ and $(-1) \neq 0$, $S \cup \set{x}$ is linearly dependent $\Rightarrow \Leftarrow$. So $x \not \in S$ 
>>
>><--
>>> Suppose $x \not \in Span(S)$. Consider the potential [[Linear Dependence]] of $S \cup \set{x}$: $0 = ax + a_1x_1 + \dots + a_nx_n$ with $a, ai \in \mathbb F$ and $x_i \in S$. Suppose $a \neq 0$. Then 
>>> $x = (-a_1/a) _1 + \dots + (-a_n/a) x_n$. But this contradicts that $x \not \in Span(S)$, so $a = 0$. And since S is linearly independent, $a_i = 0$ for all $i$ as well. Hence, $S \cup \set{x}$ is linearly independent.
>>>^lemma

Let $W \subset R^5$
In this example, we found that set $S = \set{ (-1,1,1,0,0), (0,-1,0,-1,1)} = Span(W)$. Note S is lin dep, so S is a basis of W. Note that we *know* $R^5$ has a basis with 5 vectors (the standard basis). W is not the whole space of $R^5$ though, and W has a basis with only 2 vectors. The two bases satisfies that $2 < 5$, and this reflects that $W \subset R^5$ but $W \neq R^5$


#todo clarify what it means for a set to be a "spanning set" for a super set

#todo what is a dimension

>[!thm] The Dimension Bound
>
>>If $T \subseteq V$ of size $k$ spans V and $S\subseteq V$ of size $n$ is lin. indep, then $n \leq k$
>>"No possible basis $T$ can be smaller than a linearly independent set $S$"
>>Useful for showing "No possible basis $T$ can be larger than a basis $S$" 
>
>
>My Way: If $S' = \set{y_1, \dots, y_k}$ where Span(S') = V, and $S = \set{x_1, \dots, x_n}$ is linearly independent, then $n \leq k$. Equivalent to saying $dim(S') \geq n$
>
>Let $V$ be a vector space and let $S$ be a spanning set for $V$, which has $m$ elements. Then, no linearly independent set in V can have more than $m$ elements. 
>i.e. $n \leq k$ where n is the elements in the other linearly independent set.
>
>> [!proof]-
> >It' sufficient to prove that every set in V with more than $m$ elements is linearly dependent (and therefore not a basis). 
> >We let $S = \set{y_1, \dots, y_m}$ and suppose $S' = \set{x_1, \dots, x_n}$ where n > m (so S has less vectors than S').
> >Consider $a_1x_1 + \dot + a_nx_n = 0$ where $x_i \in S'$ and $a_i \in \mathbb F$. 
> >Since $x_i \in S'$ and $Span(S) = V$, then any element in $S'$ is in $Span(S)$
> >$x_i = b_{i1}y_i + \dots + b_{im}y_{m}$
> >Substituting gives $$a_1(b_{11}y_1 + \dots + b_{mi}y_m) + \dots + a_n(b_{1n}y_1 + \dots + b_{mn}y_m) = \vec 0$$
> >Then rearranging and things gives $$(b_{11}a_1 + \dots + b_{1n}a_n)y_1 + \dots + (b_{m1}a_1 + \dots + b_{mn}a_n)y_m = 0$$
> >
> >We can solve for the coefficients of $y_1$ to $y_m$, and the system will be [[Homogeneous Systems|homogeneous]], so there will always be a trivial solution. But, since there are $m$ things to solve and $n$ unknowns, and $n>k$, then there will exist a non-trivial solution.  
> >![[Pasted image 20250224100928.png]]
> >(refer to [[Homogeneous Systems#^nandk|this theorem]])
>
> >[!purpose]
> >This theorem answers the following question:
> >>[!question] Do we know if the basis of a subset will always have the same number of elements?
> >
> >Yes, it is! Every basis will have the same number of elements
> ^dimbound

From the above theorem, we have this corollary:
>[!thm] ✨Bases are the same size
>If $S = \set{x_1, \dots, x_k}$ and $S' = \set{y_1, \dots, y_n}$ are two (finite) bases of V, then $n = k$. 
>>[!proof]
>>We can utilize the [[#^dimbound|above theorem]]. 
>>
>>In the case where S is the spanning set, implying S' is independent, then $n \leq k$
>>In the case were S' is the spanning set, implying S is independent, then $k \leq n$
>>So $n = k$
 
>[!defn] Dimension
>The # of elements in the basis of a finite dimensional vector space V.
>Represented has $\dim(V)$ 

>[!defn] Finite Dimensional Vector Space
>A vector space that has a finite basis.

>[!thm] Independent sets of the right size are bases.
>Let V be a finite-dimensional vector space, where $\dim(V)=n$ . Let $S$ be a linearly independent subset of $V$ and $|S| = n =\dim(V)$. Then $S$ is a basis for $V$.
>
>> [!proof]-
> >Let S be a linearly independent subset of $V$ and $|S| = n$. 
> >WTS S is a basis of V. i.e. $Span(S) = V$ since we already have that S is independent.
> >Suppose for sake of contradiction that S does not span V ($Span(S) \neq V$). Then, there exists an $x \in V$ such that $x \not \in Span(S)$ 
> >By the linear independence extension lemma, $S \cup \set{x}$ is linearly independent.
> >Let $\beta$ be a basis for $V$. As $\beta$ is a spanning set of V and $S \cup \set x$ is linearly independent subset of V with $n + 1$ elements, $\beta$ must have at least $n+1$ elements. Therefore $\dim(V) \geq n + 1$.
> >This contradicts that $\dim(V) = n$. So S is a basis of V.


>[!example] Given two basis, how do we get the transformation matrix?
>![[Pasted image 20250224103051.png]]


>[!example] Let W be a subspace of a finite-dimensional vector space V. 
>Prove $dim(W) \leq dim(V)$ 
>#todo when I want to
