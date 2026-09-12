>[!defn] Composition
>Given $T : U \to V$ and $S : V \to W$, the composition would be $ST : U \to V$ 
>by $ST(\vec x) = S(T(\vec x))$. We also use the notation $ST = S\circ T$; "S of T"
>Observe how the inputs match as we go from $$U \xrightarrow{T}  V \xrightarrow{S} W$$
>Notice that $image(T) \subseteq domain(S)$ 

>[!thm] A composition of linear maps is linear
>The proof is trivial ngl. Nothing special about it. 

>[!defn] Adding and Scaling
>$$(S+T)(v) = S(v) + T(v)$$
>Where $T:V\to W$ and $S:V\to W$

>[!thm] Composition has nice properties!
>1. Composition is associative: 
>$$(TS)R = T(SR)$$
>2. Composition is distributive:
>$$(T+S)R = TR + SR$$
>
>>Note that the input and output of T and S would need to match for the distribution to make any sense
>
>
>>[!proof]
>>Suppose $U \xrightarrow{R} V \xrightarrow{S} W \xrightarrow{T} X$ are linear.
>>#todo Proofs seem easy to finish but we might as well go over them later. 


>[!thm] Kernels, Images, and Composition
>Suppose $S : U \to V$ and $T : V \to W$ are linear maps.
>1. $\ker(S) \subseteq \ker(TS)$
>2. $image(TS) \subseteq image(T)$
>   
>>[!proof]
>>Proving #1:  We use the fact that even the composition will have the same output of $\vec 0$
>>Pick $\vec v \in \ker(S)$
>>Then $TS(\vec v) = T(S(\vec v))$
>>$= T(\vec 0_v)$ since transforming any element in the kernel results in 0.
>>$=\vec 0_W$  (by linearity of T; zero identity)
>>$\in ker(TS)$
>>
>> Proving #2: 
>> Pick $w \in image(TS)$
>> Then $w = TS(\vec u)$ for some $\vec u$
>> $= T(S(\vec u))$
>> $T(\vec v)$ for some $v \in V$ as $S(u) \in V$
>> $\in image(T)$

>[!defn] The Matrix Product 
>
>Let $\alpha, \beta, \gamma$ be bases for $U, V, W$ respectively.
>If $S : U \to V$ and $T : V \to W$ then the product of $[T]_\beta^\gamma$ and $[S]_\alpha^\beta$ is
>$$[T]_\beta^\gamma[S]_\alpha^\beta = [TS]_\alpha^\gamma$$
>
> (Remember to read from right to left. The S happens first, then T. Funny eh?)

>[!thm] The matrix multiplication formula
>If $T = [t_{ij}] \in M_{\mathscr l \times k}(\mathbb F)$ and $S = [s_{ij}] \in M_{\mathscr l \times k}(\mathbb F)$, then we have $TS = [p_{ij}]$ where
>
>$$p_{ij} = \sum_{N=1}^k t_{iN}s_{Nj}$$
this is fricking ugly as frick

>[!explanation]
>Instead we can calculating a logical way.
>What is the matrix of T? It's the columns describing how the input is affected by the transformation!
>
>So we would solve for every column like this:
>>[!example]
>>Let $T \text{ and } S : R^2 \to R^2$
>>Let $[T] = \begin{bmatrix}a&b\\c&d \end{bmatrix}$ and $[S] = \begin{bmatrix}p&q\\ r& s \end{bmatrix}$
>>
>>The standard basis is $\alpha = \set{e_1, e_2}$ where $T(x, y) = (ax + by, cx + dy)$ and $S(x, y) = (px + qy, rx + sy)$ generically!
>>
>>$TS(e_1) = T(S(e_1)) = (T(S(1,0))) = T(p, r) = (ap + br, cp + dr) = (ap + br)e_1 + (cp + dr)e_2$
>>And... that is what the whole column is gonna look like :) 
>>And... you gotta do that again for the second column :DD
>>
>>$TS(e_2) = (aq + bs)e_1 + (cq + ds)e_2$ btw
>>So the whole matrix is $[TS]_\alpha^\alpha = \begin{bmatrix} ap+br & aq +bs \\ cp +dr & cq +ds \end{bmatrix}$

>[!explanation] Swoopy up!
>The left row swoops down and UP to the right columns
>Thats how I remember matrix multiplication :p

![[Pasted image 20250309214440.png]]- If you wanna do it the arguably nicer but harder way, you'd have to solve for T(S(1,0)) and T(S(0,1))
So T(3, 1) = 3T(1,0) + T(0,1) = (2,1)
However with worse basis, this would be at least 1000x slower :)

As for the "trick" you do, for each nth column of S, the dot product into each kth row of T to get the $i_{kn}$th item in the matrix... i guess

> Notice how we get the # of rows from $[T]$ and the # of columns from $[S]$
> Also notice how the row we're on while multiplying is also the one that's affected in the result 

# More row things :DD
![[Pasted image 20250309221641.png]]
- Not sure if i have to remember this but this is pretty wack.
- Node for the second one, depending on where the $\lambda$ is the row will be different (first column = first row; second = second row; etc.)
