DSN = decreasing set of naturals

## Proving WOP with complete induction
For each $n \in \mathbb N$, define $P(n):$ every DSN with $a_0 = n$ is finite
Let $n \in \mathbb N$ 
Assume I.H: $\forall k \in \mathbb N, k < n \implies P(k)$
WTP $P(n$)
Let $a_0, \dots$ be a DSN with $a_0 = n$ 
(wts it is finite)
Since $a_0, \dots$ is decreasing, $a_1 < a_0 = n$ and $a_1 \in \mathbb N$. $\therefore$ by IH, $a_1, \dots$ is finite
$\therefore a_0, a_1, \dots$ is finite

... but what if $a_0$ is $0$? Then the statement doesn't make sense! So for that above stuff, we assume that's the case where $a_1$ is actually defined.

Case: $a_0$ is the last number in the sequence
- Then $\set{a_0}$ sequence is finite
- (this covers the scenario where $a_0 = 0$ or any big number, but where the set just *stops* after 1 item. It's more general but that's okay)

Case: Set is finite
- Empty sequence is obviously finite


## More algorithm correctness
Structural terms we use in class
```python
# Pre(n, d): n \in N, d \in N^+
# Return q s.t. Post(q, n, d): q \in N, and exists r \in N, n = q * d + r and r < d
def quotient(n, d):
	q = 0 # Loop initialization 
	while n >= d: # Loop Condition
		# Loop Body
		q = q + 1
		n = n - d
	return q
```

For loops have a fixed number of loops. While loops do not. 

Loops kind of look like this when iterating:
![[What while loops look like.png]]

We use subscripts to describe the certain loop whose value's we're working with. Remember $d$ doesn't change each loop.

$n_k$ = value of $n$ at the *end* of the $k$ iterations
- "The place between loops is always the loop condition"
- So $k$ iterations is right before the line for the loop condition of the *next* iteration

Mathematically, we have sequences:
- $n_0, n_1, n_2, \dots$
- $q_0, q_1, q_2, \dots$
defined as follows:
(we know $n_0 \in \mathbb N$, and $q_0 = 0$ as defined in code). For each $k \in \mathbb N$, if $n_k, q_k$ are defined and $n_k \geq d$ (loop condition is true) then $n_{k+1} = n_k - d$ and $q_{k+1} = q_k + 1$

### Showing correctness
- We claim the code correctly calculates the quotient. How do we show correctness?
	- We show every valid call returns a correct value
- $\forall n_o, d, \operatorname{Pre}(n_0, d) \implies \text{the call} \operatorname{quotient}(n,d) \text{ returns } q \text{ s.t. } \operatorname{Post}(q, n_0, d)$ 
	- (for all arguments, if precondition is satisfied, every call made to the algorithm returns $q$ s.t. the post condition is true)
- "returns" means there's no error, no infinite execution, and the value returned satisfies the post condition
	1. Normal Termination (correct structure/validity)
		- Means every call in code are valid
		- It eventually terminates. No infinite loops
	2. Correct return values
		- When it does return, the value should be right

# Readings (`WOP-II`)
You can have WOP for integers so long as the integer set is bounded below. Doesn't work for rationals or reals though.
Also you can have sets with maximums, so long as it's an integer set bounded above. 

New property: if a sequence of integers is decreasing and bounded below (or just "natural"), then it's *finite* (it ends)
Same with bounded above. If a sequence of integers is bounded above and increasing, then it's finite.

Proof. $\forall$ natural sequences, if decreasing, then finite
Let $n_0, n_1, n_2, \dots$ be a sequence of naturals.
Suppose it's decreasing s.t. $n_0 > n_1 > n_2 > \dots$
(We have to show there is some $n_m$)
If the sequence is empty, then it's finite. 
Else, there must be at least 1 element in the sequence, $n_0$
By WOP, the sequence as a set $S$ has a minimum element $n_m$ 
Suppose for sake of contradiction there is an element after $n_m$. Then there must be an element $n_{m+1}$.
However $n_m > n_{m+1}$ contradicts that $n_m$ is the minimum of $S$


That proof uses contradiction. We could use induction if we wanted to, though.