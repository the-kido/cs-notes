#### Linear dependence and independence
>[!defn] Linear Dependence and Independence
>A set of vectors $\set{v_1, v_2, \dots, v_k}$ is linearly dependent if there are coefficients (not all zero) such that:
>$$a_1v_1 + a_2v_2 + \dots + a_kv_k = \vec 0$$ 
>or 
>$$\sum_{i=1}^k a_i v_i = \vec 0$$
>
>It can be said that $\exists a_1, a_2, \dots, a_n \text{ s.t. } a_1v_1 + a_2v_2 + \dots + a_nv_n \neq 0$ and at least one of $a_1, a_2, \dots, a_n$ is non-zero. 
>
>We say that a set of vectors is linearly independent if it is NOT linearly dependent.
>We mostly car abt indep (independence) in this course.




So in the case of showing that $\set{(1,2), (1,0), (0,1)}$ has the redundant vector (1,2), we can show that:
$(1,2) - (1,0) - 2(0, 1) = \vec 0$.
Note that at least 1 of the coefficients are not 0, so this is a valid way of confirming this set is linearly dependent.

>[!thm] Redundant Vectors and Linear Independence
>If a set has a redundant vector then it is linearly dependent. 
>
>> This is biconditional
>
>>[!check]- Proof
>> Suppose $span\set{w, v_1, \dots v_k} = span\set{v_1, \dots, v_k}$ (implies w is redundant) 
>> This gives $1\vec w = a_1\vec v_1 \dots a_k \vec v_k$ for $a_i \in F$
>> $\Leftrightarrow 1\vec w - a_1\vec v_1 - \dots - a_k \vec v_k = \vec 0$
>> This is a linear combination of \set{w, v_1, \dots ,v_k} with a non-zero coefficient. 
>> This is a linear dependence and so the set is linearly dependent. 


>[!thm] ✨ Independence and Uniqueness of Linear Combinations
>Let $S =\set{v_1, v_2, \dots, v_3}$ be a set of vectors. The following are equivalent:
>1. $S$ is linearly independent.
>2. $0 \in span(S)$ is represented uniquely
>	1. Implies there isn't a linear combination where all the coefficients are 0 (which is the def'n of a dependent linear combination)
>3. Every vector in $span(S)$ is represented uniquely
>
>>[!check] Proof
>>We need to prove that 1 --> 2 --> 3 --> 1 (which forms a cycle)
>1 --> 2
>Suppose s is linearly independent.
>If $\vec 0 = a_1v_1 + a_2v_2 + \dots + a_nv_n$, then a_1 = a_2 = \dots = a_n = $\hat 0$ (since if any $a_i \neq 0$, we would have linear dependence). Therefore there is only 1 set of a values that would give $\vec 0$.
>Therefore $\vec 0 \in span(S)$ is unique. 
>2-->3
>Suppose $\vec 0 \in span(s)$ is represented uniquely.
>Then we know $\vec 0 = a_1v_1 + \dots + a_nv_n \implies a_1 = a_2 = \dots = a_n = \hat 0$.
>Let $\vec v \in span\set{v_1 \dots v_n}$.
>(WTS v is represented uniquely. No other choices of a can make the same vector)
>Then $\vec v =  a_1v_1 + a_2v_2 + \dots + a_nv_n$ and
>$\vec v = b_1v_1 + b_2v_2 + \dots + b_nv_n$ (like any other uniqueness proof, we WTS $a_i = b_i$ for all $i$)
>This gives:
>$\vec 0 = \vec v - \vec v = (a_1 - b_1)v_1 + (a_2 - b_2)v_2 + \dots + (a_n - b_n)v_n$. This represents $\vec 0 \in span\set{v_1 \dots v_n}$ so $\hat 0 = a_1 - b_1 = a_2 - b_2 = \dots = a_n - b_n$
>Therefore $a_i = b_i$, so the two representations are the same.
>3 --> 1
>Suppose every vector in span(S) is represented uniquely. 
>Then if we have a "linear dependence" (#todo is this not a linear combination?) \vec 0 = a_1v_1 + a_2v_2 + \dots + a_nv_n then uniqueness of representation gives us $a_1 = a_2 = a_3 = a_4 = \hat 0$.
>Therefore, all coefficients in the linear dependence are zero, so s is linearly independent.
>

#card-this
Q: What is a representation of a vector in a span?
A: Showing how that vector is a linear combination from the span.

<span class="cards">Cards</span> #linalg-2 

What does it mean for the set $\set{\vec x, \vec y, \vec z}$ to be linearly dependent?
?
That means $\exists a, b, c \in \mathbb F$ such that $ax + by + cz \neq 0$ and at least one of $a, b, c \neq 0$
