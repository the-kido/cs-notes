### 1.
Tracing things!

#### a)
$a_{236}$ = 255
- $a_{15}$= 15
	- $a_3$= 3
		- $a_1$=1

#### b)
"What is the smallest $b$ so that $a_n$ is a multiple of $3$ for each natural $n \geq b$"
$b = 2$ probably. Any number above $1$ will be divisible by $3$. Just look at our trace to see why.
$a_4 = 15, a_3 = 3, a_2 = 3, a_1 = 1$.
So we posit by saying $b = 2 \in \mathbb N$

Now we prove it. We prove, $\forall n \in \mathbb N, n \geq 2, 3 | a_n$

We use induction!
Let $P(n): 3 | a_n$
Proof:
Let $n \in \mathbb N$ where $n \geq 2$.
Suppose IH. $\forall k \in \mathbb N, 2 \leq k < n \implies P(k)$

Case: n = 2, 3:
- Then $a_n = a_2 = 3$ and $3 | 3$
- Same for $n = 3$
Otherwise:
- Since $n \geq 4 \implies \lfloor \sqrt n  \rfloor \geq 2$, $P(\lfloor \sqrt n \rfloor)$ holds. 
> geez really?

- That means $3 | a_{\lfloor \sqrt 3 \rfloor}$ holds! Or in other terms, $\exists i, 3i = a_{\lfloor \sqrt 3 \rfloor}$ 
- We can commit to that logic:
- $a_n = a_{\lfloor \sqrt 3 \rfloor}^2 + 2 \cdot a_{\lfloor \sqrt 3 \rfloor}$
- $= 9i^2 + 6i$ 
- $= 3(3i^2 + 3i)$ 
- which means $a_n$ is divisible by $3$, with witness $3i^2 + 3i$
#### c
We'll pick a value greater than 15: 16!

"Trace the claims/conclusions made by your proof" means to show why $P(n)$ holds for some $n$. 

$3 | a_{16}$
- $\because 3 | a_4$
	- $\because 3 | a_2$


### 2.
a)
expression expands to $(c_1)(c_n) = x^{n+1} + 1/x^{n-1} + x^{n-1} + 1 / x^{n+1}$
and we write this w.r.t $c_n$ of course
$=c_{n+1} + c_{n-1}$ for $n \geq 1$

and then instance it like:
- $c_1 c_0 =$
im just not doing this.

### 3. RAHHHHH
#todo