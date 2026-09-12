Proofs time

Strong induction!
- $P : \mathbb N \to B$ 
	- $P$ is the predicate
- $b \in \mathbb N$ is the bound
- WTP $\forall n \in N, n \geq b \implies P(n)$
	- We're proving the predicate holds for all $n \geq b$
	- It's hard to prove this directly without any fancy machinery, though!
The "complete induction" proof form:
- Strong induction is like recursion. You're given surrounding data and want to prove the thing "at" holds

1. Let $n \in \mathbb N$. Assume $n \geq b$
2. (WTP $P(n)$)
3. Assume I.H. (inductive hypothesis): P is true for each natural number $<n$ and at least $b$. aka....
	1. $\forall k \in \mathbb N, b \leq k < n \implies P(k)$
	2. (we assume everything "before" $n$ holds, to help us show $P(n)$!)
4. ...prove $P(n)$ here...
5. done!

#### Example proof with the infamous change question
As an expression, $\forall n \in \mathbb N, n \geq 12 \implies \exists a, b \in \mathbb N, n = 3a + 7b$
- This should look very similar to the algorithm. Magical!

Proof by C.I. 
Let $n \in \mathbb N$ be arb. Assume $n \geq 12$
Assume IH: $\forall k \in \mathbb N, 12 \leq k < n \implies P(k)$
Expanded: $\forall k \in \mathbb N, 12 \leq k < n \implies \exists a, b \in \mathbb N, k = 3a + 7b$
WTP: $P(n) : \exists a, b \in \mathbb N, n = 3a + 7b$ 
- Note, the a, b in the expanded and WTP are *different*. That's weird #todo 

Case n = 12
- Then `12 = 3*4 + 7*0`, therefore P(12) 
- BTW `(4,0)` is the "witness" of $P(12)$. It's kind of like a counterexample for a universal quantifier, but instead the "positive" version, and for existential instead
Case n = 13 ..
Case n = 14 ..
Case n >= 15
- Since we have $n \geq 15$ we have  $n - 3 \in \mathbb N$ and $n-3\geq 12$ also holds and $n -3 < n$ 
- So $P(n-3)$ by IH
- Let a, b **witness** P(n -3) (i.e. $a, b \in \mathbb N$ and $n-3=3a + 7b$)
- So $n = 3  + 3a + 7b = 3(a+1) + 7b$
- So $a+1, b$ witness $P(n)$ because $a+1, b \in \mathbb N$ and $n = 3(a+1) + 7b$

#### Prime Factorization Example
WTP $\forall n \in \mathbb N, n \geq 2 \implies \exists a_0, \dots, a_m \in \mathbb N, a_0, \dots, a_m$ are prime and $n = a_0 \times \dots \times a_m$

###### Proof:
Let $n \in \mathbb N$ and assume $n \geq 2$
Assume IH: $\forall k \in \mathbb N, 2 \leq k < n \implies P(k)$ 
> We don't specify the base case yet. We will figure it out later!

Case where $n$ is prime: n = n so $n$ is a witness of $P(n)$ 
Case where $n$ is not prime:
- (fact: $\forall n \in \mathbb N, n \geq 2 \wedge \neg prime(n)) \implies \exists a, b \in \mathbb N, 2 \leq a, b < n \wedge n = ab$)
	- This is true for numbers $\geq 2$ that are composite
- Then $P(a)$ and $P(b)$ since $a, b \in \mathbb N$ and $2 \leq a, b < n$ ! 
- Let $a_0, \dots, a_m$ witness $P(a)$
- Let $b_0, \dots, b_l$ witness $P(b)$
- Then $a_0, \dots, a_m, b_0, \dots, b_l$ is a sequence of primes and $n = ab = (a_o \times a_m) \times (b_o \times \dots \times b_l)$ 
- So $a_0 \times \dots \times a_m \times b_0 \times \dots \times b_l$ witnesses $P(n)$



# Readings

Useful to prove things in this structure: $\forall n \in \mathbb N, b \leq n \implies P(n)$
- $b$ is the starting point. 
To make proving this easier, we "assume the IH" after quantifying $n$. IH is just "for all numbers before the one we at, the predicate holds."

For instance, in $\forall n \in \mathbb N, n \geq 12 \implies \exists a, b \text{ s.t.} \; n =3a + 7b$
$P(n) = \exists a, b \text{ s.t. } n = 3a+7b$
$b = 12$ 
And boom, it becomes $\forall n \in \mathbb N, n \geq b \implies P(n)$ which is the structure that we can utilize CI on.
I,e, We can prove $(\forall n \in \mathbb N, n \geq b \wedge (IH)) \implies P(n)$ to prove the above
Here, IH is $\forall k \in \mathbb N,  2 \leq k < n \implies P(k)$
- #todo I keep forgetting the IH def'n for some reason 


The structure for CI proofs is:
```
Let n in N be arbitrary.
Assume n >= b
(special) Assume IH (that is, for all k, b \leq k < n implies P(k)) (you can use english, like P is true for 12, 13, ... n-1)
WTP P(n) via cases (especially base cases)
```

### The prime example
Basically, the P is simple. It also gives the fact that for composite numbers, it can be the product of two natural numbers. 

> When we have a P(k) and want to use some of the variables defined in it (say, there's an `a,b` there) then you say that $a, b$ is a witness of $P(k)$ 
> ![[The thing i keep forgetting about 'witnesses'.png]]

