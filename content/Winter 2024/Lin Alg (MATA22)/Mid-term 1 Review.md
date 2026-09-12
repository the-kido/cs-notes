#linalg-midterm-1

What are the 6 field axioms?
?
1. `+` and `*` are associative
2. `+` and `*` are commutative
3. there exists an additive and multiplicative identity.
4. For x \in F, there exists an additive inverse x'
5. For x \in F, there exists a multiplicative inverse x^{-1}
6. Multiplication distributes over addition

What are the 8 vector space axioms?
?
1. + is associative
2. + is commutative
3. There exists a 0 s.t. x + 0 = x.
4. There is a x' such that $x\boxplus x' = 0$.
5. scalar multiplication distributes over vector addition 
6. field addition distributes over scalar multiplication
7. scalar multiplication associates with field multiplication.
8. '1' is the multiplicative identity from F where $1 \boxdot x = x$



Okay again.
1. + is associative
2. + is commutative
3. there is a 0 vector s.t. x + 0 = x
4. for all x, there is a x' such that x + x' = 0.
5. scalar multiplication distributes over vector addition
6. field addition distributes over scalar multiplication
7. Field multiplication associates with scalar multiplication.
8. '1' is the multiplicative identity where x\*1 = x
# Every useful theorem

1. Spans are Subspaces
	1. If $S \subseteq V$, then $Span(S)  \subseteq V$
	2. Useful for questions that ask you to prove if a set is a subspace or something. turn the set into a span (like the set MUST EQUAL the span) and then boom, the span is also a subspace. Isn't that amazing
	3. Likewise: Remember how to represent a subspace as a span
# Mock Test 
### Q1.
3. + is associative
4. + is commutative
5. there exists a zero vector such that 0 + x = x
We gonna prove these

1.
Let x, y \in V. WTS x + y + z = x+(y+z)
(x + y) + z = (x1+y1, ..., xn+yn) + z  by defn of +
= ((x1+y1) + z1, (xn+yn)+zn) by defn of +
= (x1 + (y1 + z1), xn + (yn + zn) ) by associativity of fields (R)
= x + (y1 + z1, .., yn + zn) by defn of +
= x + (y + z) by defn of x,y,z

2.
WTS x + y = y + x
trivial lmao.



3.
Choose $\vec 0$ = (0, ..., 0) 
WTS 0 + x = x.

0 + x = (0 + x1, ..., 0 + xn) by defn of +
= (x1, ..., xn) by A3 of fields
= x as x is in V 

### Q2
a. WTS the thingy is a subspace.
imma call the set W.

1. Consider [0 0 0 0]. As 0 + 0 = 0, [0 0 0 0] \in W. #todo Just internalize this explanation.
2. WTS cx + y \in W.
let x, y \in W and c \in R be arbitrary.
Then cx + y = 
c[x] + [y] = buncha stuff
Since (ca_1 + a_2) + (cd_1 + d_2) = c(a_1 + d_1) + (a_2 + d_2) = c(0) + 0, we have cx + y \in W.

b.
Show that it's not empty
SHow closure by proving cx + y \in W.
But there is a counter example of [0 0 0 1] and [1 0 0 0] so u do that. 


### 3.
Proof.
Suppose x + y = x + z where x, y, z \in V.
Let x' be the additive inverse of x.
We add x' to both sides:
(x+y) + x' = (x+z) + x'
x + (y + x') = x + (z + x') by A1
x + (x' + y) = x + (x' + z)  by A2
(x + x') + y = (x+x') + z by A1
(0) + y = (0) + z by A4
y + z by A3 

and that is it!

### 4
WTS x^3 - 3x + 3 = a(x^3 + x^2) + b(x^2 + x) + c(x^3 + 1) 
it's inconsistent.


### Q5

Suppose {x,y,z} is lin dep. So then $ax + by + cz = 0$ where a = b = c = 0.

Then $ax + by + c = 0$
$\implies ax + \vec 0 + by + \vec 0 + cz + \vec 0 = 0$
$\implies ax + ay + by + bz + cz + ca = 0$ since $a = b = c = 0$, so $ay + bz + ca = \vec 0$
$\implies a(x+y) + b(y+z) + c(z+x) = 0$
So the set $\set{x+y, y+z, z+x}$ is L.I.

We cannot Do this #todo. Idrk why but we can't. instead we have to suppose a2(x+y) + b2(y+z) + c2(z+x) = 0 for some a2 b2 c2 and show that they're all 0 via the previous info.

Study WLOG more (without loss of generality). It seems we can use it when the variable we choose can be replaced by another variable and the same thing could hold. Tom uses it [here](https://www.youtube.com/watch?v=NkBRFnlMaeM&list=PLzG8PXr3gJolAsvqt31BM289Pg0znbgyb&index=3)



#todo 
- For linear dependence, we can choose the constants. We can assume one of them is not equal to 0, as WLOG, any constant could be $\neq 0$
- For linear independence, we show that the constants are all equal to 0 by finding their solutions. 


### Q6

For safety, we are not gonna do bi-directional stuff. Instead, when we're tryna find S we let x \in W be arbitrary and get to x \in span(S).
From there we let x \in span(S) be arb and get to x \in W super easily. 


### Q7

c. 
When we get a solution with a constant vector, we just add it to the span.
Why? Well the entire set of span(S) is also going to be added to by this constant vector. There is no notation to show "each combination + constant vector" in a set that is clean.
So the better solution is to *add the sets*. I.e. have each linear combination be added to the constant vector. 
#todo BIG TODO. Relates a lot with week 4 stuff i think.


### Q8
We will prove the contrapositive.
Suppose S1 U S2 is linearly dependent.
Then $\exists a_1, \dots, a_n, b_1, \dots, b_k \in F$, and  f $v_1, \dots, v_n \in S_1/S_2 and w_1,\dots, w_n \in S_2$ s.t. 
a_1v_1 + \dots + a_nv_n + b_1w_1 + \dots + b_kw_k = 0.
(we are letting one of the w's be the 0 vector).
No $v_i =  w_j$ 
#todo I really do not get this. i will look at it in the morning. 





