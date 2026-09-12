### 1.
#### a)
The important things
`WOP`: $\forall S \subseteq N, S \neq \emptyset \implies \exists m \in S \text{ s.t. } \forall s \in S, m \leq s$ 
`QRT`: $\forall n \in \mathbb N, \forall d \in \mathbb N^+,  \exists q, r \in \mathbb N, n = q\cdot d + r \wedge r < d$ 

WOP instances and proofs?
- Something like $S = \set{2^k : k \in \mathbb N} = \set{1, 2, 4, 8, 16, \dots} \neq \emptyset$
	- Means by WOP there is an $m \in \set{1, 2, 4, \dots}$ s.t. $\forall s \in S, m \leq s$
		- This is true because $m=1$ witnesses the above. $1 \leq 1 \wedge 1\leq 2 \wedge \dots$ 
- Another example: $S=\set{2, 3, 5} \neq \emptyset$
- $\exists m \in {2, 3, 5}, \forall s \in \set{2,3,5}, m \leq s$ is true since $m=2$
- Also works for singleton sets

QRT instances and proofs!
- Generic instance: $n=5$ and $d=2$
	- Then $q=2$ and $r=1 < 2$ witnesses $\exists q, r, \in \mathbb N, 5 = q\cdot 2 + r \wedge r < d$ so it's true!
	- In the WOP proof, the $R$ set used to find the minimum was every $r$ remainder in witness pairs. That means $R = \set{r \in N : \exists q \in \mathbb N, 5 = q\cdot 2 + r}$
	- It's not empty because when $q=0$, $r=5$ is an element
	- In fact we can list that $R = \set{5, 3, 1}$
#todo this question references the "lemma" proof which I didn't really go over, so maybe that's a good idea?
- The lemma is $\forall r \in \mathbb R, r \geq 2 \implies \exists r' \in \mathbb R, r' < r$
	- I think $r'$ is the "minimum" given by WOP

#### b)
- Let $n = 1$. Then $a=1$ and $b=0$ is a witness since $1 = 1 \cdot 3^0$ and $3 \nmid 1$ 
- Let $n = 36$. Then $a = 4$ and $b=2$ is a witness since $36 = 4 \cdot 9$ and $3 \nmid 4$ 
- Let $n = 81$. Then $a = 1$ and $b = 4$ is a witness. 

#### c)
WTP $\forall n \in \mathbb N^+, \exists a, b \in \mathbb N, n = a\cdot 3^b \wedge 3 \nmid a$ 
We'll do the half that stays common, then we'll show the contradiction / contrapositive stuff.

`~~Proof~~`
Let $n \in \mathbb N^+$

Let $S= \set{a \in \mathbb N,  \exists b \in \mathbb N, n = a\cdot 3^b }$
- They define the "$R$" in the notes' proof as $S$ here. We prove the simpler claim first via WOP, then we'll add on to it later.
Note $S \subseteq N$
Also $S \neq \emptyset$ because $n \in S$ (with witness $b=0$) since $n = n \cdot 3^0 = n$ 
Now, by WOP, there is an $a_m \in R$ s.t. it's $\leq$ every element in $S$. Let $b_m$ witness $a_m$, so $n = a_m \cdot 3^{b_m}$

We now show the "hard part". Let's do the contrapositive first.
##### Contrapositive
Lemma: $\forall s \in S, 3 \mid s \implies \exists m \in S, m < s$
Proof of lemma:
- Let $s \in S$ be arbitrary where $3 \mid s$ 
- Let $b$ witness $s$'s property that $\exists b \in \mathbb N, n = s\cdot 3^b$
- Then $n = \frac s 3 3^{b+1}$ since $3 \mid s$
- Since $\frac s 3 \in \mathbb N$ and $b+1 \in \mathbb N$, $\frac s 3 \in S$ 
- Also, $3s < s \implies \frac s 3 < s$ 

Using the contrapositive of the lemma, since $s_m$ is the minimum (there is no smaller element), then $3 \nmid a_m$ 

Therefore $a_m, b_m$ witness $\exists a,b \in \mathbb N, n = a \cdot 3^b \wedge 3 \nmid a$ 
>[!note] Notes
>- By the set def'n, all elements of $S$ have witnesses. So if $a \in S$, then there is a witness $b$ s.t. $n = a\cdot 3^b$ 
>- Use names that closer match the variables we're working with. I should use $a_m$ for the $a$, not $s$.


##### Contradiction
(we want $a_m$, $b_m$ to be our witnesses, remember!)
For sake of contradiction, suppose $3 \mid a_m$
- Then $n =  a_m \cdot 3^{b_m}$
- $= \frac{a_m}{3} \cdot 3^{b_m + 1}$
- Note $a_m / 3 \in \mathbb N$ since $3 \mid a_m$, and $b_m + 1 \in \mathbb N$. Therefore $a_m / 3 \in S$
- However, $a_m / 3 < a_m$, which contradicts that $a_m$ is the minimum.
- Therefore it must be that $3 \nmid a_m$

#### d)
Let's do the proof for $n = 1$. The only answer should be that $a = 1$ and $b = 0$
- $S = \set{1}$ (the element $1$ has witness $b=0$ )
- Note $S \subseteq N$
- Also nonempty cuz 1 is there
- By WOP, there is an $a_m$ (clearly it's $1$) that is $\leq$ all elements with witness $b_m$ s.t. $n = a_m\cdot 3^{b_m}$ 
- (contradiction)
	- We suppose $3 \mid a_m$
	- Then $a_m / 3$ and $b+1$ witness the claim and $a_m / 3 \in N$ cuz of stuff
	- But oh boy, a_m/3 is not min. contradiction!
- So actually $3 \nmid a_m$ 

### 2.
So the arrows mean "team beats other team"
Intuitively this makes sense. A tournament can't have 1 or 2 teams because no "cycle" is possible with < 3 teams. 
Therefore there are $\geq 3$ teams in a simple cycle.
Lets consider an arbitrary cycle.
(we want to use WOP. Means we need a set, show it's non-empty)

Let $S$ be the set of lengths of simple cycles for the tournament. Lengths are natural. Also there is at least 1 simple cycle of some length "by assumption".

So by WOP, there is a length $a_m$ that is the minimum. Again, $a_m \geq 3$

`WTS` $a_m \leq 3$ 
For sake of contradiction, suppose $a_m > 3$
- Then consider a cycle $(i_1, \dots, i_{a_{m-1}}, i_{a_m})$
	- (We need to derive a contradiction)
- In the case that $T_i$ beats $T_{i_{a_{m-1}}}$ 
	- Then there is a cycle $(i_1, i_{a_{m-1}}, i_{a_m})$
	- So $3 < a_m$ 
- In the case that $T_i$ doesn't beat $T_{i_{a_{m-1}}}$, then it's the other way around (remember, they always play against each other)
	- Then the cycle is $(i_1, \dots, i_{a_{m-1}})$ which is of length $a_m - 1 < a_m$
- In both cases we contradict that $a_m$ is the min
- So it must be that $a_m \leq 3$
So $a_m = 3$ 
#todo I needa wrap my head around this more, honestly...


### 3.
#### a)
Given: $s$ is a finite, non-empty sequence of naturals (indexed from $0$)
Also $\sum s$ is the sum of its elements. Also if $s'$ is a sequence w/ the same length as $s$, then $s \leq s'$ to mean $\forall i \in \mathbb N, i<len(s) \implies s_i \leq s'_i$
- Means sequence $s'$ is smaller than the entire other sequence. Coolio (e.g $\set{1,2,3}$ vs. $\set{1,3,6}$)

Question: Let $t$ be a natural number and $c$ be a sequence w/ length $l$ s.t. $\sum c \geq t$ 
WTS exists $c'$ w/ length $l$ s.t. $c' \leq c$ and $\sum c' = t$ 

Symbolically, $\forall t \in \mathbb N, \forall c \in Seq, len(c) = l \wedge \sum c \geq t \implies \exists s' \in Seq \text{ s.t. } len(s') = l \wedge c' \leq c \wedge \sum c' = t$

Let $t=6$ and $c = \set{1, 6, 3}$ (means $l = 3$). Note $\sum c = 10 \geq 6$. Then there is a set, $\set{1,3,2}$ whose length is also $l=3$, $1 \leq 1, 3 \leq 6, 2 \leq 3$, and $\sum c' = 6 = t$. Yay

#### b)
Let's plan this proof a bit, then.
- We let t be arb
- we let c be arb.
- We assume $len(c) = l$ and $\sum c \geq t$ 
- Okay good. Now the hard part is finding a set whose sum is $\sum c' = t$. For now let's just have a set w/ $\sum c' \geq t$ because that *should* also have the elusive, desired $\sum c'=t$
Let $S = \set{ \sum a : \exists a \in \text{Seq} \wedge len(a) = l \wedge a \leq c \wedge \sum a \geq t}$
We know $A \subseteq N$ since sums of natural seq's are all natural
Also, $c \in S$ since $len(c) = l, c \leq c$ and $\sum c \geq t$ 
So $c \neq \emptyset$ 
by WOP, there is a minimum sum $t_m$ with witness sequence $a_m$. Means $len(a_m) = l$ and $a_m \leq c$ and $\sum a_m \geq t$ 

(WTS $\sum a_m \leq t$ )
For sake of contradiction, suppose $\sum a_m > t$, i.e. $\sum a_m \geq t+1$ 
WTS there is another sum, somehow? Yes, that's right.
We know that $\sum{a_m}$ is one more than $t$, which means we can remove a $1$ from one of the largest elements to make a $a'$ and still have $\sum a' \geq t$
However $\sum a' \in S$ and $\sum a' \leq \sum a_m$
so $\sum a_m$  is NOT the minimum. 

so yeah, must be opposite.

For the lemma version, we show:
$\forall k \in S, k > t \implies$ there is an element of $S$ smaller than $k$ 
- Proof of lemma:
	- Let $k \in S$ be arbitrary where $k > t$. 
	- Let $a_k$ witness $k$ s.t. $len(a_k) = l$ and $a_k \leq c$ and $\sum a_k \geq t$ 
	- $k = \sum a_k$ 
	- Since $k > t$, $\sum a_k = k \geq t + 1$  
	- If you remove 1 from the largest element of $a_k$, you get an $a'$ such that $\sum a' = t$ 
	- Which means $\sum a' \in S$. Also, $\sum a' < \sum a_k$, so $\sum a'$ is smaller than $k$
By contrapositive of lemma, $k \leq t$, means $\sum a_m \leq t$
Therefore $\sum a_m = t$

