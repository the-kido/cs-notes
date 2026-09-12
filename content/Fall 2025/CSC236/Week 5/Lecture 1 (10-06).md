Last time (10-03) we did an exercise to get us into the well-ordering principle!
- It was the quotient-remainder one

### WOP
$\forall S \subseteq N, S \neq \emptyset \implies \exists m \in S, \forall n \in S, m \leq n$
"Each non-empty set of naturals contains a minimum element"
- The naturals themselves start at $0$, so clearly there will always be a counting number that has a number less than it.
- The fancy part is that it includes *infinite subsets*. It will guarantee there is a minimum number even in that case.
- Not true for integers
	- For a subset like $\set{-1, -2, -3, \dots}$ There is no minimum. You can always subtract $1$ again
- Not true for rationals either
	- For a subset like $\set{1, 1/2, 1/3, 1/4, \dots}$ there is no minimum since you can always divide the number slightly more

### Quotient Remainder Theorem Proof
- Uses WOP and Contradiction!
- Oh I just... didn't write it out at all.

### Variations of WOP

#### Integers 
- Your set of $\mathbb Z$ needs to have a lower bound (that way it "always" has a lowest value, a *minimum*)
- Likewise, every subset of $\mathbb N, \mathbb Z$ that is *bounded above* has a *maximum*

### How WOP ties to recursion
- We had to define a "size" (natural) that got smaller that every argument generated. i.e. every args' size decreased and was natural
- Means we have arguments like $a_0 > a_1 > a_2 > \dots$ where $a_0, a_1, a_2, \dots \in \mathbb N$
	- But we don't ever know if it stops.... we sort of just *assumed* the sequence is not infinite using "proof by *look-with-your-eyes*"
	- Now we can justify it
- $\set{a_0, a_1, a_2, \dots} \subseteq \mathbb N$
- and not empty $\because$ $a_0 \in \mathbb N$ for first call
- So we call WOP. $\therefore$ there is a min element, $\therefore$ sequence is finite $\therefore$ no infinite recursion!

# `WOP-I`
- "each non-empty subset of the naturals contains a minimum element such that all other elements are $\leq$ to it"
	- Stated as $\forall S \subseteq \mathbb N, S \neq \emptyset \implies \exists m \in S \text{ s.t. } \forall s \in S, m \leq s$
We are tryna prove the quotient-remainder theorem okay amazing.
$$\forall n \in \mathbb N, d \in \mathbb N^+, \exists q, r \in \mathbb N, n = q \cdot d + r \wedge r < d$$

For the instance where $n = 236,$ $d=17$, we'll look for a set of naturals where the *minimum* will be the answer to the problem (the remainder).
It's easiest to prove $\exists q, r \in \mathbb N, 236 = q \cdot 17 + r$ since, when $q = 0, r = 236$. When $q=1, r = 236 - 17 = 219$. etc. We leave out the $<17$ part. We be more general to encompass a big set of witnesses. The $< 17$ gets reintroduced later. 

Why are we doing this? So we can use WOP to perhaps find a minimum, which perhaps will have the $r$ that's actually $<17$.

So we let $S$ be the set of "witness pairs" for this weaker claim. 
$$S = \set{(q, r) : q, r \in \mathbb N \wedge 236 = q\cdot 17 + r } = \set{(0, 236), (1, 219), \dots)} $$

We use $r$ as the "size" for all pairs in the set $S$. So $R = \set{r : (q, r) \in S} = \set{r \in \mathbb N : \exists q \in \mathbb N, 236 = q \cdot 17 + r} = \set{236, 217, \dots}$
- We think the minimum of this set will be the answer.

We know $R \subseteq N$ and $R \neq \emptyset$ since $236 \in R$. So, *by the WOP*, it has a minimum element. Let's call it $r_m$. This is our golden boy which we use to show that $r_m < d$ as required in the final part... but doing this directly is hard :/

To generalize the proof, we'll start directly: 
Let $n \in \mathbb N, d \in \mathbb N^+$.
Let $R = \set{r \in \mathbb N : \exists q \in N, n = q \cdot d  +r}$
Then $R \subseteq \mathbb N$ and $n = 0 \cdot d + n \in \mathbb N$ is a witness, so $R \neq \emptyset$ 

By WOP, there is an $r_m$ element of $R$. Means $r_m \in \mathbb N$ and $\exists q \in \mathbb N, n = q\cdot d + r_m$
#### Contrapositive Way
The idea is to prove this lemma, then use it's contrapositive:
- $\forall r \in R, r \geq d \implies \exists s \in R, s <  r$ 
	- In English: For all elements in $R$, if $R$ is bigger than $d$ (means can be divided again), then there is another element in $R$ s.t. it is smaller.
	- If you take the contrapositive of this, you get $\forall s \in \mathbb R, s \geq r \implies \exists r \in R, r < d$
	- "There is a element of $R$ smaller than $r$"
We first prove the lemma (direct proof):
- Let r in R. Suppose r >= d
- let $q$ witness $R$ so that $n = q\cdot d + r$
- Then $n = (q + 1) \cdot d - d + r$
- $= (q+1)\cdot d +(r - d)$
- Since $q + 1 \in \mathbb N$ and $r \geq d \implies r - d \geq 0$, $r-d\in \mathbb N$ 
- Therefore $r-d \in R$. 
- Finally, $r-d < r$ since $d \in \mathbb N^+$.
	- In this case $s = r-d$ 

Then with that, we can use the contrapositive. Using the fact that $r_m$ is the minimum (means no other elements are smaller than it--the negation of the consequent of the lemma) we can easily derive that $r_m < d$

And that gives us the final part of the `QRT` proof.

#### Contradiction Way
Let's derive a contradiction. Let's suppose $r_m \geq d$ 
- We know that there is no other element in $R$ less than $r_m$. Let's try to break that by showing, idk, $d \in R$? Which means $n = (something)  + d$ 
Let $q$ witness $\exists q \in \mathbb N, n = q \cdot d + r_m$
$\implies n = (q+1)\cdot d - d + r_m$
- Here, $(q + 1, -d + r_m) \in S$ since $q+1 \in \mathbb N$ and $r_m - d \in \mathbb N$ since $q \in N$ and $r_m \geq d \implies r_m -d \geq 0$
- That means $-d + r_m \in R$, but that contradicts that $r_m$ is the minimum of R since $r_m - d < r_m$  
- Therefore it must be that $r_m  < d$

Okay the way I did that, I like **WAY** more