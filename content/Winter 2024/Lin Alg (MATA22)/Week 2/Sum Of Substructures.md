Refer to page 30 of [this](https://q.utoronto.ca/courses/375808/files/35714644?module_item_id=6502220) slide

> If an element x is in A, and y is in B, then $x + y$ is in $A + B$
> OR
> $x\in A$ and $y \in B \implies  x + y \in A +B$ 

>[!purpose]
>Union and Intersection does not ensure that A or B is a subset so we define the sum of subsets such that $A + B$ is also a subset. Sum of subsets.
The addition we use is of course the "addition of the vector spaces". 
> - If we have a set `{chocolate, vanilla, mint}` and a set `{sprinkles, whipped cream, none}` then the addition of the two sets will be *all* combinations of the ice creams (that's 9 combinations / elements for ya)

## Sums of subsets
>[!quote] Sums of Subsets
>Given two subsets $A, B \subseteq V$, we can form the sum of subsets:
>$A + B = \set{ a + b : a \in A \text{ and } b \in B}$
>
- That is, A + B is every combination of the two elements in the subsets.
	- If A = {red, blue, yellow} and B = {truck, yoyo, ball} then A + B = {red truck, red yoyo, red ball, blue truck, blue yoyo, blue ball, yellow truck, yellow yoyo, yellow ball}

>[!thm] Sums of Subspaces
>If $W_1, W_2 \subseteq V$ are subspaces then their sums $W = W_1 + W_2$ is also a subspace

>[!proof]
We check $W_1 + W_2$ is non-empty.
$W_1$ and $W_2$ are vector spaces. So, $W_1$ and $W_2$ are nonempty. 
We pick $a \in W_1$ and $b \in W_2$. These give $a + b \in W_1 + W_2$
(now we show $cx+y \in W_1 +W_2$)
let $x, y \in W_1+W_2$ and let $c \in \mathbb F$
Then $x = x_1 + x_2$ and $y = y_1 + y_2$ for $x_1,y_1 \in W_1$ and $x_2,y_2 \in W_2$
Consider $cx+y = c(x_1+x_2)+(y_1+y_2)$
$=cx_1+ cx_2 + y_1 + y_2$
$=(cx_1 + y_1) +( cx_2 + y_2)$
Note that $cx_1 + y_1 \in W_1$ and $cx_2 + y_2 \in W_2$ since $W_1$ and $W_2$ are subspaces. Therefore,  $cx+y  \in W_1 + W_2$ and $W_1 + W_2$ is a subspace by Characterization of Subspaces.

#todo Go over this "set" arithmetic 
> Let $a \in W_1$ and $B \in W_2$, then
> $a + b \in W_1 + W_2$
> That makes sense i suppose. 


>[!thm] Sums of Subspaces p.2
>If $W_1 = span(S_1)$ and $W_2 = span(S_2)$, then $W_1 + W_2 = span(S_1 \cup S_2)$
>>[!check]- Proof
>> Let $W_1 = span(S_1)$ and $W_2 = span(S_2)$,
>>WTS $W_1 + W_2 \subseteq span(S_1 \cup S_2)$ and $span(S_1 \cup S_2) \subseteq W_1 + W_2$
>>We do the first one first:
>>> Let $a \in W_1$ and $b \in W_2$ be arbitrary. (needa show $a + b \in span$)
>>> Let $x = a + b \in W_1 + W_2$
>>> Then $a = \sum_{i=1}^n a_iv_i \in span(S_1)$ 
>>> and $b = \sum_{i=1}^n b_iw_i \in span(S_2)$ 
>>> So $x = a + b = \sum_{i=1}^n a_iv_i + \sum_{i=1}^n b_iw_i$
>>> $\in span(S_1 \cup S_2)$ since all the linear combinations are in the union. I.e. $\set{\vec v_1 \dots \vec v_n, \vec w_1 \dots \vec w_k} \subseteq S_1 \cup S_2$
>>
>>Now for the other direction
>>> Let $\vec x \in span(S_1 \cup S_2)$
>>> then $x = a_1\vec  v_1 + \dots a_n\vec v_n$ where $a_i \in \mathbb F$ and $\vec v_i \in S_1 \cup S_2$.
>>> Let $v_1 \in S_1$ and $w_i \in S_2$
>>> Then $\vec x = (c_1\vec  v_1 + \dots c_k\vec  v_k) + (d_{k+1}\vec w_{k+1} + \dots d_n\vec w_n)$
>>> - We assume the first half of the sums are from $S_1$, and the other sums are from $S_2$. "We re-arranged the sum so that the first $k$ elements are in $W_1$ and the last $n-k$ are in $S_2$"
>>> 
>>> We have $\vec x = span(S_1) + span(S_2) \in W_1 + W_2$.
>>> Therefore, $span(S_1 \cup S_2) \subseteq W_1 + W_2$
>>
>>So in all $span(S_1 \cup S_2) = W_1 + W_2$ as required.
