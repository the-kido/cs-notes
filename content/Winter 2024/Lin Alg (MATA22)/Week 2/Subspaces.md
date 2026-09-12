> Parker also goes over this a bit in the first week's lectures. on 01-10

>[!defn] A subset $W \subseteq V$ is a subspace of $V$ if it is a vector space with the same operations as $V$

>[!explanation]
We can understand structures by understanding their substructures.
So a big vector space V has inside it small vector space W and W has the same operations as V. That means the axioms must be sufficient w/ them.
>> [!example]
>> Inside of $R^2 = V$ there can be another vector space $W = \set{(x, 0) : x \in R}$
>> - This is on the x axis btw
>> 
>> Even in some other direction $W = \set{(t,t) : t \in R}$
>> -  On a line we can scale and whatever. it's a subspace of V.


>[!thm] Characterization of Subspaces \[by Closure]
>Let $V$ be a vector space and $W$ be a non-empty subset of $V$. $W$ is a subspace if and only if $c\vec x + \vec y \in W$ for all $c \in \mathbb F$ and $\vec x, \vec y \in W$
>
>My way:
>Let $V$ be a vector space and $W$ be a non-empty subset of $V.$ 
>$W$ is a subspace iff $\forall x,y \in W, \forall c \in \mathbb F, c\vec x + \vec y \in W$
>> [!purpose]
>> This lets us prove that W is a subspace (and therefore a vector space)
> 
>>[!proof]- 
>>
>>
>>$\rightarrow$ The easy direction.
>>Assume $W$ is a subspace.
>>Let $x, y \in W$ and $c \in \mathbb F$ be arbitrary.
>>The note that cx \in W since W is <span class="emphasis">closed under scalar multiplication</span>.
>>Thus $cx + y \in W$ is a vector space as W is <span class="emphasis">closed under addition</span>. #todo Why?
>>
>>$\leftarrow$ The hard direction.
>>Suppose $x, y \in W, c \in \mathbb F$ are arbitrary.
>>We take the operators from V and V is a vector space, the 8 axioms (except for A3 and A4; why? #todo) hold.
>>>[!explanation]
>>>To be clear, we can easily prove the other axioms b/c W is a vector space w/ the same operations as V. So if an operation associative on V, then it's associative on W too.
>>>So if it's satisfied everywhere on V, then it's satisfied everywhere on W. "Inheritance".
>>>HOWEVER, for 3 and 4, we need to check for *specific* elements (0 and 1).
>>>
>>
>>Now we prove A3.
>>>Choose $cx + y$ to be $(-1)\vec x + \vec x \in W$.
>>>Then
>>>$$
\begin{align} 
(-1)x + x &= (-1)+1x \text{ by A8} \\
&= ((-1) + 1)x \text{ by A6} \\
&= 0x \text{ by A4} \\
&= \vec 0 \text{ "as V is a vector space"} 
\end{align}$$
>>>
>>> #todo what does that last line mean
>>>Therefore $\vec 0 \in W$
>> 
>> Now we prove A4 (idk why)
>>> Choose $cx + y$ to be $(-1)x + \vec 0 \in W$ 
>>> Since our $\boxplus$ operator is commutative, $\vec 0 + (-1)x \in W$
>>> Implying $(-1)x \in W$.
>>> As $V$ is a vector space, $(-1)x$ is the additive inverse of $x$. Thus the additive inverse is in $W$.
>>
>>There we proved both directions



>[!thm] Subspaces are closed under Intersection
>If $W_1$ and $W_2$ are subspaces of $V$, then $W_1\cap W_2$ is also a subspace of $V$.
>>[!proof]-  
>> We use characterization of subspaces by closure:
>> 1. Check $W_1 \cap W_2$ is non-empty
>> We know that $\vec 0$ is in both b/c it has V's zero vector, so $W_1 \cap W_2$ will have $\vec 0$ too.
>>  2. Check that $c\vec x+\vec y \in W_1\cap W_2$
>>  Let $x, y \in W_1 \cap W_2$ and $c \in \mathbb F$.
>>  We know $x,y \in W_1$ so $cx+y \in W_1$ b/c $W_1$ is a subspace. Similarly, $cx+y \in W_2$.
>>  Therefore $cx+y \in W_1 \cap W_2$.
>>  
>>  Therefore $W_1 \cap W_2$ is a subspace.
>> 


 


# <span class="cards">Cards</span> #linalg-2

Prove {0} is a subspace
?
We will use characterization of subspaces.
Note first that ${0}$ is non-empty.
Then consider $cx+y$ where $x,y \in 0$.
Then $c\vec x+y = 0 + 0 = 0$ in ${0}$
Therefore 0 is a subspace. wow that was so flipping easy. 


Check that $W  = {(x,y,z) : x + y + z = 0}$ is a subspace.
Then, find S such that $W = span(S)$.
?
>[!proof]
>First, we show that W is a subspace.
>Note that it is not empty since (0,0,0) is in the set (as 0 + 0 + 0 = 0).
>Consider cx + y  where x, y in W and c in R.
>Then cx + y = c(x1+y1+z1) +  (x2 + y2 + z2)
>= c(0) + 0
>= 0 in W
>
>> NOTE: The reason why we try to find what element in W results in the 0 vector is that it usually makes it super easy to solve cx+y into the 0 vector as well. Therefore, cx + y is in W, since 0 (as we've shown before) is also already in W.
>
>Now we find and S, then show that W = Span(S), or rather W \subseteq Span(S) and Span(S) subseteq W.
>
>Span( (0,0,1), (0,1,0), (1,0,0)  ) = a(0,0,1) + b(0,1,0) + c(1,0,0) where a,b,c in R is arb.
>So we let S = abv thing yeah.
>
>>What NOT to do:
>> $\subseteq$
>> Let v in W be arb.
>> Then v = (x,y,z) where x + y + z = 0.
>> = x(1,0,0) + y(0,1,0) + z(0,0,1) which is in the span as x,y,z are arb.
>> So v in Span(S)
>>$\supseteq$
>> Let s in Span(S).
>> Then s = x(1,0,0) + y(0,1,0) = z(0,0,1)
>> = (x,y,z).... but wait there is no restriction!!!!
>
>So to avoid this, we need to integrate the restriction into the set.
"If you *use* a restriction, then you can be sure that the constraint will hold throughout."
>
>x + y + z = 0 $\implies$ -x - y = z
>(x, y, z) = (x, y, -x - y) = x(1, 0, -1) + y(0, 1, -1)
>So let $S = \set{ (1, 0, -1), (0, 1, -1) }$
>Thennnn
>$\subseteq$ Let $v \in W$.
>Then v = (x,y,z) where x = y = z
>= (x,y,-x-y) = x(1, 0, -1) + y(0, 1, -1) 
>which is in Span(S). Easy.
>$\supseteq$ Let $s \in Span(S)$
>Then s = a(1, 0, -1) + b(0,1,-1)
>= (a, b, -a - b) 
>Then to show it's in W, we can add the components
>$a + b - a - b = 0 \in W$

#todo come back to this and really understand why adding the components shows that it is in W, or how I can derive that when i am doing my own test.


Let $F_{odd}(\mathbb R)$ be the set of odd functions in $F(\mathbb R)$.
Prove that $F_{Odd}(\mathbb R)$ is a subspaces of $F(\mathbb R)$
?
Let $f \in F_{Odd}(\mathbb R)$ be arbitrary.
Consider $c\vec f(x)+\vec g(x)$ where $f(x), g(x) \in F_{Odd}(\mathbb R)$ and $c \in \mathbb F$ are arbitrary.
Also, let $h(x) =cf(x) + g(x) \in F(\mathbb R$)  
Then 
$$
\begin{align} \\
h(x) = cf(x) + g(x) &= c(-f(-x)) + (-g(x)) \\
&= -cf(-x) - g(-x) \\
&= -(cf(-x)+g(-x)) \\
&= -h(-x)
\end{align}
$$
Therefore $h(x) \in F_{Odd}(\mathbb R)$, so $cf(x) + g(x)$ is too. Therefore $F_{Odd}(\mathbb R)$ is a subspace by Characterization of Subspaces by Closure.




Proof this: ![[Pasted image 20250124100239.png]]
?
Ans: We assume there does exist a linear combination such that a_1sin(x) + a_2cos(x) = 0 for any $x$. (This implies that the two vecs are dependent.)
(our goal is to show that $a_1 = a_2 = 0$. to contradict this claim)
Choose x = pi/2
- Then a_1 = 0
Choose x = 0
- Then a_2 = 0
Therefore a_1 = a_2 = 0. That contradicts that there is a linear combination where the coefficients are non-zero. Therefore the two vectors are linearly independent. 
#todo i really don't get this one. like the whole proof (and plugging in x).
