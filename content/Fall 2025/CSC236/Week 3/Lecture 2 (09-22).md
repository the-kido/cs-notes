"proofs are traceable"
He did an example w/ prime factorization:
P(3) is equiv to the whole existential thing i don't wanna type it
- so it holds since 30 is not prime and P(3) holds, since 3 is prime and 3 = 3
- and P(10) holds b/c ... existential goes here ...
	- because 10 = 2 x 5 and P(2), P(5) holds (explain)
- So 10 = 2 * 5
So $30 = 3 * (2 * 5)$

## Bin Trees
- We only worry abt the structure (no "values" in the tree)
- Also we can define an "empty" tree as "x" ("not a node")
- And "not empty" with a "\*" dot for the root of the tree.
- For leaves, it's just a node where the left and right are empty (we draw the "danglers" that point to nothing)
- height = # of "levels" (only counting nodes)
	- As such, $\text{height}(x) = 0$
	- So height is always a $\mathbb N$ natural number
	- for brevity, $h(T)$ for the height of a tree $T$
- $nn(T)$ for number of nodes in $T$
- Also $nn(T) = nn(T_r) + nn(T_l) + 1$; the number of nodes of a tree is the sum of its sub-trees plus itself
- The height of a tree T is the maximum between the height of its children + 1
	- So $h(T) = \max{(h(T_l), h(T_r)} + 1$
### Showing the number of nodes in a tree must be less than $2^{h(t)}$
WTP $\forall  t \in \text{BT}, nn(t) \leq 2^{h(t)}$
- We wanna use complete induction! So we need "the form"
- Observe that the above expression is equivalent to:
$$\forall n \in \mathbb N, \forall t \in \text{BT}, h(t) = n \implies \text{nn}(t)\leq 2^n$$
- This "orders" the heights via the quantifier #todo 
- The $P(n)$ becomes everything after the first universal

Proof time

Let $n \in \mathbb N$. Assume I.H. 
Means we have $\forall k \in \mathbb N, k < n \implies P(k)$
$\equiv P(0) \wedge P(1) \wedge \dots \wedge P(n-1)$
- Basically saying "P is true for each tree whose height is less than n"
But we're tryna prove $P(n)$, or $\forall t \in BT, h(t) = n \implies nn(t) \leq 2^n$
- let $t$ be a bin tree. Assume its height is $n$
- (WTS $nn(t) \leq 2^n$)
- case: n = 0 
	- Then $h(t) = 0$, so $t = x$ 
	- And $0 \leq 2^0$ holds
- case: $n \geq 1$:
	- t has a node and two sub-trees, $t_1$ and $t_2$, whose heights are less than their root's parent node
	- So $h(t_l) < h(t)$ and $h(t_r) < h(t)$
	- P is true for each tree whose height is less than n by I.H., so $P(t_l)$ and $P(t_r)$ hold 
		- Means $nn(t_l) \leq 2^{h(t_l)}$
		- and 
		- $nn(t_r) \leq 2^{h(t_r)}$
	- also $nn(t) = nn(t_l) + nn(t_r) + 1$
	- $\leq 1+ 2^{h(t_l)} + 2^{h(t_r)}$
	- Also note $h(t) =1 + \max{(h(t_l) , h (t_r))}$
	- $\leq 1 + 2^{\max{(h(t_l) , h (t_r))}} +2 ^{\max{(h(t_l) , h (t_r))}}$
	- $=1 + 2^{h(t) - 1} + 2^{h(t) - 1}$
	- $= 1 + 2^{h(t)}$
and now we're stuck. he suggests "Table" to better understand the question. The thing we want to prove was a bit wrong. 
- We make our predicate *stronger* (such that it technically proves the old version of the same problem, too)
- So the thing we prove is now
$$\forall n \in \mathbb N, \forall t \in \text{BT}, h(t) = n \implies \text{nn}(t)\leq 2^n - 1$$
This is "more" precise

Anyway the proof becomes easier after that. Just update the two cases

# Readings

### Tracing proofs
We can say P(19) because we know P(16). We can say we know P(13) because `3*2 + 7*1 = 13` 

```
P(19) equiv exists a,b s.t. 19 = 3*a + 7*b [is true]
	because P(16) equiv exists a,b s.t. 16 = 3*a + 7*b [is true]
		because P(13) equiv exists .... you get it 
```
![[witnessing.png]]
- You can include the witnesses of the predicates in the trace #todo

### Bin trees
The definition is easy to remember. Now for the example:
We want to show $\forall t \in BT, nn(t) \leq 2^{h(t)}$ 
- There are a discrete number of BTs. For instance, we can have a 1 to 1 correspondence with the "number of items in the tree" and naturals. This isn't in the notes. It's just for myself 
Since $t$ is not a natural number, and we want the form $\forall n \in \mathbb N, P(n)$, we have to somehow "index" all trees. We can do this via a measure, just like the $size$ we were using before. Let $size(t) = h(t)$, basically.
Anyway we can cleverly *reframe* this as $\forall n \in \mathbb N,$ if bin tree $t$ has height $n$, then $nn(t) \leq 2^{h(t)}$
That becomes $\forall n \in \mathbb N, \forall t \in BT, h(t) = n \implies nn(t) \leq 2^{h(t)}$
$P(n) \equiv \forall t \in BT, h(t) = n \implies nn(t) \leq 2^{h(t)}$

>  Also what the frick the whole statement we were proving was totally false!?

Let's prove it:

Let n be arbitrary
Assume IH. All trees whose height is less than $n$ satisfy the rest of the predicate
- That gives, $\forall k \in \mathbb N, k < n \implies \forall t \in BT, h(t) = k \implies nn(t) \leq 2^{h(t)}$
Case: n = 0
- Then tree height is 0, so h(t) = n. Means t is empty.
- So nn(t) = 0 <= 2^0 = 1
- Yippee
Case: n >= 1
	- WTS P(n). specifically that when h(t) = n, nn(t) \leq 2^h(t)

- So for all t' where h(t') = n - 1, nn(t') \leq 2^h(t)
- Since the size is not 0, the tree is non-empty, so it has a left/right side with a height less than $n$ 
- So nn(t_l) <= 2^h(t_l) and same for right side
- finally nn(t) = 1 + nn(t_l) + nn(t_r)
- <= 1 + 2^....
- $= 1 + 2^{h(t) + 1} + 2^{h(t) + 1}$


### Traces part two
For CI, if we want to show, say P(3), we need to show that P(3) holds since P(0), P(1), and P(2) holds. This is just nature of the IH since the tree is arbitrary (we have no info on what's left and what's right)
However for particular trees, we can be specific
> This is for some tree $t_0$ 
![[Specific proof trace.png]]

Otherwise it would look like this:

>Note in the above, the predicate is expanded. Below, it is not expanded. Also the above doesn't need the "for all trees whose height is = 3" since the tree given, $t_0$, has the height $3$ at the start and it's just 1 tree!
>![[Verbose CI proof cuz no extra info.png]]

### PCI (principle of complete induction)
![[PCI.png]]

Obvious stuff up above there! However, we kind of "assumed" this was true. Why is it true? Here's le proof:

![[Proof of PCI.png]]
- P(0) holds vacuously 
- P(1) holds since P(0) holds (the AND enforces the first thing happens... let's ignore transitivity?)
- etc.


# Exercises

q3. 

$G_0 = \set{[X]}$
- it's just the X
$T_0 = \set{[X]}$
- no L shapes used
Every element in $T_n$ maps to a $G_n$
- A $G_n$ might have many $T_n$


"without loss of generality"; you can rotate the grid so that the X is in the top right quadrant. 
- By the IH, we can fill a 2^i by 2^i grid with a crossed out `[X]` tile. We can choose that `[X]` to be in the middle. The middle ones form another L

q4.
Its asking how to get $b_h$ given a lesser $h$ (like $h-1$)
We know if a tree has height $h$, then its sub-trees have height $h-1$

the left tree can be $h-1, <h-1$ and the same for the right side
The $\times 2$ is for the mirroring


b)

when rewriting the summation you get a telescoping series
that should help