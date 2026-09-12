Remember: WOP is:
$\forall S \subseteq \mathbb N, S \neq \emptyset \implies \exists m \in S, \forall n \in S, m \leq n$
### 1.
$\alpha$) We will attempt... i am getting seriously distractd by the alpha character... anyway we gotta redo the term test question!

We gotta use WOP to prove for all mostly-increasing functions $f$, if $f(0) > 0$, and $\exists m \in \mathbb N, f(m) \leq 3 \implies \exists n \in \mathbb N, f(n) = 3$ . We can't use induction :( 

Proof
Let $f$ be a mostly-increasing function. That means, $\forall n \in \mathbb N, f(n+1) \geq f(n) - 1$
Then there is an $m \in \mathbb N$ such that $f(m) \leq 3$.

Let $S = \set{n  \in \mathbb N : f(n) \leq 3}$
Oh. This is so obvious.
Right so there is an element in the set because "there exists an $m$" that does that. So it's not empty
And it's a subset of the naturals since $n \in \mathbb N$
So that means there is an $n_m$ minimum element of $S$ where $f(n_m) \leq 3$

For sake of contradiction, suppose $f(n_m) < 3$ (because we know $f(n_m) = 3$??)
Then $3 \geq 2 \geq f(n_m)$
Which by the fact that $f(0) > 3$ means $n_m \neq 0 \implies n_m > 0 \geq 1$ (since $f(0) > 3$ and $f(n_m) \leq 2$, it's not possible to have both)
$\implies 3 > 2 \geq f(n_m) \geq f(n_m - 1) - 1$
$\implies 3 \geq f(n_m) \geq f(n_m - 1)$ 
and since $f(n_m - 1) \leq 3$ and $n_m - 1 \in \mathbb N$ by abv justification, it's in $S$. Since $n_m - 1 < n_m$, $n_m$ cannot be the minimum.
Wow that's like... so crazy! That means, like, contradiction, dude!
Which totally implies that $f(n_m) \geq 3$. bangin' proof my man

a)
For WOP, we need to design a set that gives us a minimum that we want! Think about what you want, make a set that gives that, and prove it holds via contradiction (or the contrapositive situation)

Finite sets have a max. Singletons have a max.
QRT proofs are pretty easy to remember. "instancing" means writing out symbols into numbers, especially for sets (to give a concrete "example")

#### b)
This is a really good question so let us pay attention.
We need to instance! 
- $n = 9$. $a = 1, b = 2$ witnesses
	- (The expression, with $n$ swapped out for $n$, has witnesses $a = 1, b = 2$, where $9 = 1 \cdot 3^2 \wedge 3 \nmid 1$)
- $n = 12$. $a = 4, b = 1$ witnesses
- $n = 7$. $a = 7, b = 0$ witnesses

There's no instance where $a = 0$ 

#### c)
Let $n \in \mathbb N^+$ be arb.
Let $S = \set{(a, b) : \exists a, b \in \mathbb N, n = a\cdot 3^b}$
For $n = 27$, this would look like $(27, 0), (9, 1), (3, 2), (1, 3)$
We want the "largest" "b" possible, which is the "smallest" "a" possible.
Let $R = \set{a : (a, b) \in S}$
Then we know $n \in R$ since $n = n \cdot 3^0$ holds. Not empty! And $a \in \mathbb R$ so this set is all natural.
Then there is a minimum, $a_m$ s.t. $n = a_m \cdot 3^{b_m}$

> To derive a contradiction, suppose $3 \mid a_m$
> - Then $a_m / 3 \in \mathbb N$
> - $\implies n = \frac{a_m}{3} \cdot 3^{b+1}$
> - Which means $a_m / 3 \in R$ since it witnesses $\exists a, b \in \mathbb N, n = a\cdot 3^b$
> Therefore $3 \nmid a_m$ 

> For contrapositive proof, we show $\forall a \in R, 3 \mid a \implies \exists a' \in R, a' < a$
> - Okay so this lemma has the contradiction part at the start, and we show that there exists a smaller number than $a$.
> - Let $a$ be arbitrary with witness $b \in \mathbb N$ s.t. $n = a\cdot 3^b$
> - Suppose $3 \mid a$.
> - Then $n = \frac{a}3 \cdot 3^{b+1}$ holds
> - Also $a/3 \in R$ since it and $b+1 \in \mathbb N$ and the above statement holds. 
> -$\therefore$ $a/3 < a$, $a/3$ witnesses the consequent. 

By the *contrapositive* of the lemma, $3 \nmid a_m$

Therefore the statement holds with witnesses $a = a_m$ and $b = b_m$


#### d)
Basically you said $n = 1$ or something, then use your proof but also the specific number to prove the statement.

Useful to do on any proof, not just this one

### 2.

We show that *if* there is a simple cycle, that there must exist one of length $3$. 
#### a)
I take their illustration for granted since I am lazy
The statement is clearly true with this image. I can't find the pattern though.

#### b)
proof time already?
I think it has to do with cutting. Like, you can't have a loop if everyone only beat eachother once, and lost once. For every subset of the loop, they all must have played against each other. My problem is for the scenerio where team 1 beats both team 2 and 3. Then there is no cycle.

Maybe it's more like: For a cycle >= 4 in size (say `1,2,3,4`), when two teams in the middle fight, like `1` and `3`, then one MUST win. Like if 3 wins, then `1, 2, 3` is a valid cycle. If `1` wins, then `1, 3, 4` is a cycle. You can keep breaking this down recursively. but oh god this is a WOP question don't think about recursion. Our set will have the smallest-sized cycles possible?
I'M GOATED

Okay let's try this proof. We want to show: For all games, if there is a simple cycle, then there is a simple cycle of length 3.
- Let $g$ be the game with a simple cycle $p$
- Let $S = \set{\text{All simple cycle lengths}} \subseteq \mathbb N$ (since lengths are naturals)
- Since there is at least one cycle in $g$, $S \neq \emptyset$
- That means there is a minimum length cycle $c_m$ whose length is $\leq$ all other cycles.
- We know lengths must be at least $> 2$ since you can't have a cycle `(1, 2)` since 1 can't beat 2 while 2 beats 1 simultaneously. Therefore $c_m > 2 \geq 3$
- Now we need to show $\leq 3$. We use contradiction!!!
- For sake of contradiction, suppose $c_m > 3$
- Consider the game `(i_1, ..., i_c_m-1, i_c_m` of length $c_m$
- If $I_{c_m}$ beats $I_{c_m -1}$, then there is a simpler cycle `(i_1, i_c_m-1, i_c_m)` of length 3
- If $I_{c_m -1}$ beats $I_{1}$, then there exists a simpler cycle `(i_1, ..., i_c_m-1)` with length $a_m -1 < a_m$
- In each case, we contradict that $c_m$ is the smallest
