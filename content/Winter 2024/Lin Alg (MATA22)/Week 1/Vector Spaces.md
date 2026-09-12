![[Pasted image 20250113150640.png]]
- This shows how the set can be *anything*. The identities can be *anything*. Anything flies so long as it follows the axioms.

>[!quote] Axioms of a Vector Space
>A vector space is a set V with two binary operations. Often notated with $(V, \boxplus, \boxdot)$ for the set, vector addition, and scalar multiplication operations.
>1. $\boxplus : V \times V \to V$ (vector addition)
>2. $\boxdot : \mathbb F \times V \to V$ (scalar multiplication)
>
>such that the following 8 axioms hold:
>
>#### 1. $\boxplus$ is [[Commutativity and Associativity|associative]]
>
>#### 2. $\boxplus$ is [[Commutativity and Associativity|communicative]]
>
>#### 3. There exists an element $\textbf 0 \in V$ such that $x + \textbf 0 = x$ for all $x \in V$. $\textbf 0$ is the <span class="emphasis">zero vector</span>
>
>#### 4. For each $x \in V$, there is an <span class="emphasis">additive inverse</span> x' such that $x' \boxplus x = \textbf 0$
>
>#### 5. Scaling by $c \in F$ distributes over addition. We can foil/factor
>$$c \boxdot (x\boxplus y) = (c \boxdot x) \boxplus (c \boxdot y)$$
>#### 6. The field addition in F distributes over scalar multiplication in V. Similar to above
>$$(c+d)\boxdot x = c \boxdot x \boxplus d \boxdot x$$
>
>#### 7. $\boxdot$ associates with scalar multiplication on $\mathbb{F}$
>($c, d \in F$; $x \in V$)
>$$(cd) \boxdot x = c \boxdot (d \boxdot x)$$
>
>#### 8.  $1 \boxdot x = x$. "1' is the multiplicative identity from $\mathbb{F}$
>
>

Notes:
- Why isn't scalar multiplication communicative? Because: 
> You cannot do $\boxdot : V \times F= V$ since it is not defined that way and F and V are two different types.

## Defining Vector Spaces
> To define a vector space, you must have the set V, the definition of addition, and the definition of scalar multiplication
> e.g. to define The Vector Space $\mathbb R^n$ we would show:
> 1. The vector space of real <span class="emphasis">n-tuples</span> is given as: $V = R^n = \set{(x_1, x_2, \dots, x_n) : x_i \in R}$
> 2. Addition on $R^n$ ($\boxplus$) is
> $$(x_1, x_2, \dots, x_n) + (y_1, y_2, \dots, y_n) = (x_1+y_1, x_2 + y_2, \dots, x_n + y_n)$$
> 3. Scalar multiplication on $R^n$ ($\boxdot$) is
>$$c(x_1, x_2, \dots, x_n) = (cx_1, cx_2, \dots, cx_n)$$    4. Then you show all the 8 axioms hold. (Most are true because "the
>real numbers form a field")

> By our definition above, we use the + to represent $\boxplus$ so whenever we use $\boxplus$ in the context of vector spaces, we can use the + that we assigned in our definition. 
#card-this

#todo what does it mean for a field to "form a field"? Does it mean R "is" a field? Whereas Z cannot form a field because its axioms do not hold?

## Other vector spaces
### The vector space of Functions: $\textbf F (\mathbb R)$
> $\textbf F (\mathbb R) = \set{f : \mathbb R \to \mathbb R}$
> So addition looks like this:
> $$(f+g)(x) = f(x) + g(x)$$
> and scalar multiplication is just $$(cf)(x) = cf(x)$$

Notes:
1. Here's what the notation represents:
	1. R shows the domain and range of the function. It could be any field though, if i'm not mistaken. #todo 
	2. F represents the set of functions taking in R.
	3. ig...

### The vector space of $n \times k$ matrices ($M_{n\times k}(\mathbb R)$)
![[Pasted image 20250126212534.png]]
###### Mario is the vector 🍄🪙

# <span class="cards">Cards</span> #linalg-1 
What are all 8 vector axioms
1. Addition is associative
2. Addition is commutative
3. There exists an element \vec 0 such that for all $x \in V, x + \vec 0 = 0$. "there exists a zero vector"
4. For each x there is an additive inverse
5. You can distribute over addition
	1. $a \boxdot (b \boxplus c)  = (a \boxdot b) \boxplus (a \boxdot c)$ 
6. You can distribute over scalar multiplication. 
	1. $(a+b)\boxdot(c) = (a \boxdot c) \boxplus (b \boxdot c)$
7. $(cd)\boxdot x = c \boxdot (d \boxdot x)$
8. x = 1x

What is a vector?
?
An element of a vector space. You can think of it as a point.

What is the smallest vector space?
?
$\set{0}$. The empty set.

What does a vector space F(R) represent?
?
It represents a vector space with the set {$f : R \to R$} with the two addition and scalar multiplication operators 
$(f+g)(x) = f(x) + g(x)$
and
$(cf)(x) = cf(x)$.
These operators apply for all $x$. So if anything describes a vector space of $F(R)$ (i.e., it's [[Linear Dependence|linearly independent]]|) then for any x that attribute holds. 


What are the kinds of vector spaces we know as of yet?
?
Vector spaces of 
- tuples
- functions
- `n * k` matrices.


https://q.utoronto.ca/courses/375808/discussion_topics/2839102
