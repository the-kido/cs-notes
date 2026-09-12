>[!defn] Linear combinations
> For a subset $S \subseteq V$, we define a linear combination of vectors from $S$ to be:
> $a_1v_1 + a_2v_2 + \dots a_kv_k = \sum_{i=1}^k a_i \vec v_i$.
> where $v_i \in S$ and $a_i \in F$. We say $\sum_{i=1}^k a_i \vec v_i$ is a linear combination of $\set{v_1, v_2, \dots, v_k}$.
- tl;dr For a subset of vector space S, a linear combination from S looks like $\sum_{i=0}^k a_iv_i$ where $a_i \in \mathbb F$ and $v_i \in S$ 
- #todo i still cannot visualize what it means for there to be a linear combination from a subset of vectors
	- oh i see. For instance if S = {(1,0), (0,1) }, then the combination would look like $a_1(1,0) +a_2(0,1)$. However, were I to write it as $a(1,0) + b(0, 1)$ all of a sudden it's grade 12.
	- So the sum is a bit deceptive. Really, the S is nothing more than 1 to 3 vectors most of the time.
- Note that f must be finite
- Linear combinations are the combinations of the vectors in S formed by addition and scaling. 
- Note that S is not a vector space. 

>[!defn] Spans
>A span is all linear combinations of a subspace.
>
>For a subset $S \subseteq V$, we define the span of S to be
>$$span(S) = \set{\text{all linear combinations of elements in S}}$$
>
- <span class="emphasis">Technical Note</span>: $span(\emptyset) = \vec 0$


>[!thm] Spans are Spaces
>If $S \subseteq V$, then $span(S) \subseteq V$ and span(S) is a subspace of V. 
>
>(Basically, if S is a subset of a vector space, then the span(S) is also a subset of a vector space)
> > [!proof]-
> > We use cases (either S = empty or non-empty)
> > For the case where it's not empty, we can apply the subspace test.
> > We pick $\vec x, \vec y \in span(S)$ and $c \in \mathbb F$
> > By def'n:
> > $\vec x = a_1 \vec v_1 + a_2 \vec v_2 + \dots + a_k \vec v_k$ for \vec v_i \n S and a_i \in F.
> > $\vec y = \sum_{i=1}^k b_i\vec w_i$ for \vec w_i \n S and b_i \in F.
> > 
> > We have:
> > $c \vec x + \vec y = c(\sum_{i=1}^k a_i \vec v_i) + (\sum_{i=1}^k b_i\vec w_i)$
> > = a bunch of vectors added. All of which are in S.
> > Therefore cx+y is a linear combination of elements in S and so $cx+y \in Span(S)$
> > 
> > For case where $S = \emptyset$
> > By the technical remark on the def'n of span, we know that $span(\emptyset) = {\vec 0}$.
> > and $\vec 0$ is *trivial* subspace of V.
> > So $Span(S)$ is a subspace

>Given a subspace, we can write its span as a sum of vectors times an arbitrary scalar which makes up *all* linear combinations

>[!example] Check that $W = {(x,y,z) : x + y + z = 0}$ is a subspace, and find $S$ such that $W = span(S)$
>WTS W is nonempty, then cx + y \in W such that W is a subspace. 
>W is non-empty because (0,0,0) \in W.
>(now we apply the subspace test)
>Let x, y \in W and c \in F.
>We have that x = (x_1, x_2, x_3) and y = (y1, y_2, y_3) where x_1 + x_2 + x_3 = 0 and y_1 + y_2 + y_3 = 0.
>Consider cx + y.
>We have:
>cx + y = (cx_1, cx_2, cx_3) + (y_1, y_2, y_3)
We calculate:
(cx_1 + y_1) + (cx_2 + y_2) + (cx_3 + y_3)
= c(x_1 + x_2 + x_3) + (y_1 + y_2 + y_3)
= c(0) + 0
= 0
> Therefore $cx + y \in W$ so W is a subspace.
> 
> Now we find a set S such that W = span(S) 
> (basically we need to show $span(S) = {(x, y, z) : x + y + z = 0})$
> --> direction
> We have x = -y - z
> Any vector $v \in W$ has the form:
> v = (x,y,z) = (-y - z, y, z)
> = (-y, y, 0) + (-z, 0, z)
> = (-1, 1, 0)y + (-1, 0, 1)z
> This gives $W \subseteq Span\set{(-1,1,0), (-1,0,1) }$
> <-- Direction
> WTS span{(-1, 1, 0), (-1, 0, 1)} \subseteq W.
> \vec x = a_1(-1, 1, 0) + a_2(-1, 0, 1)
> = (-a_1 - a_2, a_1, a_2)
> Now we can add the entries/components to get $-a -b + a + b = 0$.
> Thus, $(x,y,z) \in W$
> ![[Pasted image 20250120182801.png]]

# <span class="cards">Cards</span> #linalg-2 

Describe what a span is, and how to represent one. You may use the set $S \subseteq V$ in your explanation.
?
A span is every possible linear combination of every vector in S.
That means we can write it as the sum of all vectors in S times some arbitrary coefficient. 
This also means we can describe each vector in the span of S as a singular linear combination (i.e. a set of choices for the coefficients).

If we have a set S and Span(S), and a vector $\vec w \in Span(S)$, what can be said about $\vec w$?
?
$\vec w$ is one of the possible linear combinations in the span of S. That means that the vectors of S, in some linear combination, can represent $\vec w$.

Write Span({(1,0), (0, 1)}) as an equivalent set without using the function Span
?
We will write it using the definition of span (i.e. a set of linear combinations) and simplify that.

Span( {(0, 1),(1, 0)}  ) = $\set{ a(0,1) + b(1,0) \text{ where } a, b \in F}$
= {$x(0, 1) + y(1, 0) : x, y \in F$}

What does it mean for $x$ to be in the $Span(S)$ where $S \subset V$?
?
It means $x$ can be represented as a linear combination.