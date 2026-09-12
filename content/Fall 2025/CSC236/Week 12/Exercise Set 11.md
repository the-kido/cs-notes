For NFA -> DFA, it might be useful to make the table. Then you'll know how many unique sets there are.
![[NFA to DFA but with table.png]]
You start at $q_0$. You write out what a and b do. You find out what new states to make. You recurse through that algorithm

Anyway question time

Oh wtf (frick) this is exam review

### 1.
Uhh yeah I'm not doing this.
#todo 

### 2.
We wanna show $\forall n \in \mathbb N, P(n)$, where $P(n): \forall m \in \mathbb N, m \leq n \implies T(m) \leq T(n)$

We use strong induction: $[\forall n \in \mathbb N, (\forall k \in \mathbb N, 0 \leq k < n \implies P(k)) \implies P(n))] \implies \forall n \in \mathbb N, P(n)$Right

Let $n$ be arbitrary.
Assume $\forall k < n, P(k) \equiv \forall k < n, \forall m \leq k \implies T(m) \leq T(k)$ (IH)
WTP $P(n) \equiv \forall m \leq n, T(m) \leq T(n)$ holds
Suppose $m \leq n$
- Case: $m = n$, then $T(m) = T(n)$
- Otherwise, $m < n \implies m \leq n - 1$
	- By IH $P(n-1)$ holds
	- I don't know how they get $k = n-1$
- Case: $n = 0, 1$
	- Then $m = 0 \leq 0 = n$, so $T(m) = 1 \leq 1 = T(n)$ holds
- Case: $n = 2$
	- Then
#todo try again later?


### 3.
#### a)
The cases from n = 0, 1, 2 are all $1$ work. No slicing or the like
The "else" case is more complex. The work done in the function is $\theta(n^2)$ because of the two for loops that are respective of $n$
And then there are slices but those don't matter. $n^2$ dominates

There are two recursive calls. $n - t = n - n//3$ which i think is ceiling'd? Specifically $n-t = 3n//3 - n//3 = ceil(2n//3)
- I guess I can see why now. When subtracting by $n//3$, $n//3 < n/3$ in all cases, so when it's by itself, it's floored, but when you do $n - n//3$, the subtraction is "smaller" so the result is "bigger" (i.e., ceiling)
- So it's two ceilings.

$$T(n) = \begin{cases}
1 & n = 0, 1 , 2\\
n^2 + 2\cdot T(\lceil 2n/3\rceil) & n \geq 3
\end{cases}$$
Yay

#todo I didn't think that "this" would be the base for the power.
Special values of $n$ would be the ones where $n = (3/2)^k$.
Then  
$$T(n) = \begin{cases}
1 & n = 0, 1 , 2\\
n^2 + 2\cdot T( \frac{n}{3/2} ) & n \geq 3
\end{cases}$$
#todo also in the question they make the condition $n>1$ instead of $n\geq 3$. Why?

Runtime tree:

Size: `(3/2)^k, (3/2)^k-1, ..., 1`
RTT: `+(3/2)^2k, +(3/2)^2(k-1) x 2, ... +2^k
num-nodes: `1, 2, ..., 2^k`
Time: same as rtt thing


#### d)
Top heavy. Top determines size

w.r.t starting nodes, there are
\[$(3/2)^{kx} = 2^k$$\implies x = \log_{3/2} (2)$]
$n^{\log_{3/2}(2)}$ leaves

#### e)
It's like (9/2) something but that's me gambling. I was wrong!

$T(2^k) = (2^k)^2 + 2T(\frac{2^k}{3/2})$
$=4^k + 2(4^k\cdot(4/9) + 2T(\frac{2^k}{9/4}) )$
$=4^k + 4^k \cdot (8/9) + \dots$
The ratio is $(8/9)$ with $a = 4^k$ 
And since it's $<1$ it's top heavy

#### f)
For $\Theta$ we know it's the size of the *first* term of the geometric series.
Since $T(2^k)$ starts with $4^k$, then $T(n) = n^2$
So $T(n) \in \Theta(n^2)$

I skipped g and h #todo 

### 4.
#### a) *I DID THIS TOTALLY WRONG*
We use the one theorem. We show there's a piecewise dist. set of strings.
 *at least 5* means "more than 4" as well, if that's helpful

$\epsilon, ab,ba$ so far
ba is dist from both when you add "a", and same for ab but with "b"
So that's good. Uhh what else.
$aa$? and $bb$? 
Wouldn't $aa$ and $bb$ not be distinguishable? OH but they are because
$aa\cdot b \not \in L$, but $bb\cdot b \in L$ 

Okay so we claim the set is $\set{ \epsilon, ab, ba, aa, bb}$
$ab$ is unique to $ba, aa$ (not $bb$ or $\epsilon$) if you add $a$ 
- $ab$ unique to $bb$ cuz $bb$ is in and $ab$ is not.
- Also $\epsilon \cdot b \not \in L$ but $ab \cdot b \in L$
Now we "shrink". We don't need to show $ab$ ever again.
$ba$ is unique to all because:
- $ba \cdot a \in L$ but $\epsilon \cdot a \not \in L$
- $ba \cdot \epsilon \in L$ but $aa \in L$ 
- $ba\cdot b \not \in L$ but $bb \cdot b \in L$
And $aa$ is unique since
- $\epsilon \not \in L$ but $aa \in L$
- $bb \cdot a \not \in L$ but $aa\cdot a \in L$

Okay the set they used was a bit simpler but EHH WHATEVER

The solution is so much tinier but I don't get how that happened.
- Okay so they summarised the 3 x 2 comparisons between e, a, b and aa, bb with the "empty suffix" argument
	- i.e., e and bb are not distinguishable solely using the suffix "e"

#### b)
Regular expression for $L_e$
Oh shoot it's for same first and last characters.

R_e = `a(a+b)*a + b(a+b)*b`
So obvious

#### c)

OKAY I DID IT
I made the diagram! I'm goated!!!!!

So for the "accepting" states in NFAs, they have a "life" to them. A one-round life that is revoked if there are any changes

Okay so instead of doing 0, 1, 2, 3 they did $\epsilon, a, b, s$ 
I will keep this in mind.

#### d)
At r_e = {q_e}
- if you take an $a$ then you go to $r_a = \set{q_a}$
- for b it's $r_b = \set{q_b}$

Currently we have 3 states in our DFA

For $r_a = \set{q_a}$ if you take
- a then you go to $r_{as} = \set{q_s, q_a}$
- b then you go to $r_a = \set{q_a}$ still

for $r_b = \set{q_b}$ if you take
- a then $r_b = \set{q_b}$
- $b$ then $r_{bs} = \set{q_s, q_b}$. This is an "accepting" state

for $r_{as}$:
- $a$ goes to $r_{as}$
- b goes to $r_{a}$ still
for $r_{bs}$
- a goes to $r_b$
- b goes to $r_{bs}$. This is an "excepting" state
and now we've exhausted all our options

The diagram follows from the above!


### 5.
#### a)
Okay I will DEFINITELY have to be succinct for this one

Example strings: `1`, `2`, `1112`, `22221`, `1111112`
etc?
At least 7 states? 

e is one of them FOR SURE since you can add `12` or `21` to all strings which will make them invalid 
$\set{\epsilon, 1, 2, 11, 12, 22, 212}$ 
- By intuition this must be it because the question says $7$ states. That's a big hint
- But i can already see that `11` and `22` won't be distinguishable because they'll always be false. I'll remove... `11`. too too stays.
- Also `12` and `21` are not distinguishable.

We can say each of e, 11, 22, 212 are distinguishable from 1, 2, 12 with empty suffix.
OH so now we do e with 11, 22, and 212.
and then 11 with 22 and 212
and 22 with just 212
and done there

for 1, 2, 12 OAUFHAOGOAWGOAW OKAY I GET IT NOW

#### b)
Not sure? We know one state is for the start as always. One is for being 

AT least means 3 or more. For sake of contradiction, let's suppose you can use 1 or 2 states. 