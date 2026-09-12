Subscript is for us. No one else can see it. Not in the code

The loop sort of implements the fact that the equality and inequality of the return Post holds ?
### Showing Correct Return Values
Try invariant: $I(n_o, d, q): n_0 = q \cdot d + n$ 
- Note $r$ in the Post is $n$ in our code
- If we show the invariant, it should lead us to proving the Post, so it's important *we ensure that the invariant lets us prove the Post*
	- In our example, is our invariant enough to prove Post?
	- At the very end, after the loop finishes, we *know* that $n < d$ (by $C$ -- loop condition) and $I : n_0 = q \cdot d + n$ (by I) is true 
		- Remember the invariant is true *right before* the next loop. It's not false if the condition is false. 
	- We have that $n_0 = q \cdot d + r$ and $r < d$; fantastic. But for completeness, we also need to show $q \in \mathbb N$ and $\exists r \in \mathbb N$ (those are all part of the $Post$)
	- So to the invariant, we add $\wedge q_k, n_k \in \mathbb N$
		- $I(n_o, d, q): n_0 = q \cdot d + n \wedge q_k, n_k \in \mathbb N$
	- Therefore the Post is true because we've proved the invariant and the while case also helps
- Now that we've realized the invariant will work, we now show that the invariant is true
- So far we've proved $Pre \implies (I \wedge \neg C \implies Post)$
Proof of $I$

```python
def a():
	q_0 = 0
	
	# I_0: q_0, n_0 \in N and n_0 = q_0 * d + n_0 
	# holds because q_0 = 0 by init, n_0 \in N by Pre, and n_0 = 0*d + n_0
	while # Assume I_k: q_k, n_k \in N and n_0 = q_k * d + n_k
	n_k >= d: # C_k
		# ... body ...
		# WTP I_k+1
		# q_k+1 = q_k + 1 \in N b/c q_k, 1 \in N and q_k + 1 >= 0
		# n_k+1 = n_k - d \in N b/c n_k \in N and d > 0 (by Pre) so n_k - d >= 0
		# n_k+1 = n_k - d
		#       = (n_0 - q_k * d) - d
		#       = n_0 - d(q_k + 1)
		#       = n_0 - d(q_k+1)
		# so n_0 = q_k+1 * d + n_k+1
	
```
Note: 
- Since we showed $n_{k+1} \in \mathbb N$ when proving the Variant, we can lean on that and just say `(see proof for Variant)` instead of re-proving it like I did #todo 


## Okay we're done
Invariants used:
- For validity, we showed $n, q \in \mathbb R$
- For termination, we showed $n \in \mathbb N$ (the measure thing, using a *variant*)
- For valid return values, we showed $\text{Post(correct return values)}: n, q \in \mathbb N \wedge n_0 =  qd + n$ holds
	- We really only needed this one since it's stronger than all the others

Overall, other than showing the Post, the proof of each invariant *is inductive* (after each iteration) with the form: 
1. Base Case: Invariant holds after init, before loop. 
2. Inductive Step: Assuming $\geq k$ iterations and $C_k$ holds and $I_k$ holds, we show $I_{k+1}$


# Example #2!
- Comparable elements are objects that have $<, >, \leq, \geq, =, \neq$ work between two items. Classes wouldn't work. Lists wouldn't work. 
This bit of code uses a for loop. Not to worry, for loops are just cooler while loops.

Loops generate a sequence of values. Let's "consider the sequence of values":
- Initially $m_0 = b$
- $i_0 = b+1$ 
	- True it doesn't have a value before the loop body, so we use the range init value. Otherwise that would be a problem
- $\forall k \in \mathbb N,$ if $m_k, i_k$ are defined and there are $\geq k+1$ iterations, $i_{k+1} = i_k + 1$ and $m_{k+1} = \begin{cases} i_k & \text{if } A[i] < A[m] \\ m_k & \text{otherwise}  \end{cases}$
	- $m$ gotta use cases because of the if statement. Tragic
	- Also remember that $m_{k+1} = i_k \text{ or } m_k$ and not $i_{k+1}$ or $m_{k+1}$ because we are setting the *next* $m$ in the $k$th loop. In other words, the value of $m$ at the *end* of the loop (i.e., $m_{k+1}$) is equal to the values of $i$ or $m$ given at the *start* of the loop.

At this point we can rewrite our code to use a while loop instead of a for loop. All `if` statements should explicitly define their `else` counterpart if not done already? It makes things more explicit, which is good.
#### Showing Validity, termination, and correctness. Validity first
We see that the comparisons for $i$ and $len(A)$ work when $i$ is a number. Also $i_k+ 1$ works if $i$ is a number. Therefore, for validity, we need to just show $i \in \mathbb Z$ 
By observation, $i\in \mathbb N \wedge b+1 \leq i \leq len(A)$
- BTW, key detail is that $i \leq len(A)$ since the loop stops *when* $i = len(A)$

#### Termination
We just use the fact that there a bounded increasing sequence of integers is finite. We use the measure $V = i$ and show each loop increases and is bounded above by some number.

>[!note] Standard invariant for for loops syntactic sugar
>"Standard" invariant for (transformed) for loop: $a \leq i \leq b$ 
>Notation: $i \in [a:b+1)$ made up for this course. Means $i \in \mathbb Z \wedge a \leq i < b + 1 \equiv i \in \mathbb Z \wedge a \leq i \leq b$

Claim: $i \in [a : b+1]$ is an invariant. You prove that with code. #todo exercise!
#todo What is the below showing?
- $V_k \in \mathbb Z$ from invariant which I assume we've proven
- $V_{k+1} = i_{k+1} = i_{k} + 1 > i_k = V_k$
- So $V_0 < V_1 < \dots$ is a bounded increasing sequence of integers. $\therefore$ finite

If we wanted to formally use WOP directly, instead we'd define $V = b - i$ (b is the start of the list?) #todo wtf. minute 20:00 if u wanna look again


##### Idk what's going on here LOL
- He just states that $i \in [b+1, len((A) + 1)$ is a "standard" invariant we can use. And termination is also "standard" 
- Validity: 
	- $i$ is a valid index for $A$ by "standard" invariant, and C (loop condition)
	- $m$ is a valid index for $A$: invariant $m \in [b, len(A))$
		- We use the fact that $m \leq i$ and $i < len(A)$ 
	- You prove it BY YOURSELF #todo 

#### Correct Return Values / Post
- We're trying to figure out, globally, after some $i$ iterations, what the value of $m$ is at the moment
- We can say for sure that $I : m < i$
	- Remember invariants have to summarize several loops, not just state info about the loop we're in
	- We... don't need subscripts?
- $A[m] = \min(A[b:i])$
	- We use $=$ and not $\leq$ because if it's $<$ then we won't be showing that $m$ "is the minimum", but instead "less than or equal to the minimum" which isn't the same

Let's check if this is enough info: 
- Post: end of loop: $i = len(A)$
- $I: A[m] = min(A[b:len(A)])$ (this is literally the post)

>[!note] Alternate notation
>$A[m] \leq A[b:i]$ same as $\forall j \in [b:i], A[m] \leq A[j]$

>[!note] Another alternate notation
>$m'$ or $i'$ for values at *end* of iteration (instead of using subscript)

Proof:
- Base: 
	- $m=b, i = b + 1$
	- $A[m] = A[b]$ from the first step
	- Also $A[b:i] = A[b:b+1] = A[b]$
	- So $A[b] \leq A[b]$; base case holds
- Assume $A[m] = min(A[b:i])$ and $i < len(A)$
	- #todo read the write-up. It'll have the finished proof

# Readings (`iterative-correctness-III`)
This is the new example w/ a for loop & not a while loop

In python, the $i$ index variable persists after the loop (so weird!) so we generalise and say $i$ increments *every loop*.

IDK why we do this but we "express the sequence of values for $m$ and $i$ in inductive mathematical notation by:"
- $Pre(A,b)$ (this one is the most confusing. #todo)
- $m_0 = b$ (the init)
- $i_0 = b+1$ (loop init. Look at the "while" loop version for it to make more sense. Btw $I_1 = b+2$. My suspicion was correct!)
- for $k\in \mathbb N$, if $m_k$ and $i_k$ are defined *and* $i_k < len(A)$, then $i_{k+1} = i_k + 1$ and $m_k+1 = \text{cases thing}$
	- This one is the second most confusing (why do we need $i_k$ and $m_k$ to be defined?)
> I think we do all this just to show what we're proving. We're showing that $i_{k+1} = i_k$ and that $m_{k+1}$ can equal two things depending on the branch

#### Explicitly write the "else" branches out
Just to show their mathematical implications. It's helpful
#### Proving Validity
- Looking at the loop, we can easily show that $i \in \mathbb Z$ (or $\mathbb N$) and that $b+1 \leq i \leq len(A)$ ($i$ starts at $b+1$ and goes *up* to $len(A)$ before the condition stops it)
	- It might be useful to prove this for the 3 correctness components
- $I^{for}: i \in \mathbb Z \wedge b + 1 \leq i \leq len(A)$
	- The invariant of this form will be true for *any* for-loop over a valid range (the start is $\leq$ the end)
	- (It wouldn't always be $i \in \mathbb N$ cuz the loop can start negative `:D`)
- For the validity of the body components that *aren't* about iterating through the range (so not just $i$), we need $i$ and $m$ to be valid indices for $A$.
	- We expect that $b \leq m < len(A)$ looking at how $m=b$ at the start and $m$ is updated while $i_k < len(A)$ so $m$ can never be $len(A)$ 
	- So $I^m: m \in \mathbb N \wedge b \leq m < len(A)$ 
		- $m$ has to be natural to be an index

Validity proof! We included both "why" the code is valid alongside proving the Invariants hold.
```python
# Pre(A, b): A is a list of comparable elements, b \in N and b < len(A)
# Return m s.t. Post(m, A, b): m \in N, b <= m < len(A) and A[m] is minimum of A[b:]
def index_of_minimal(A, b):
	# (Suppose Pre)
	m = b
	
	# Valid + since b, 1 \in N 
	i_0 = b + 1
	
	# I^m_0, since b \in N and b <= b < len(A) by Pre
	
	# (Let k be arb where i_k, m_k are defined)
	# (We have that I^for_k holds)
	while # Assume I_k^m: m_k \in N and b <= m_k < len(A)
	# Valid comparison since i_k \in Z by I^for_k and A is iterable by Pre and len(A) \in N
	i_k < len(A): # C_k
		
		# A[i_k] valid index of A since 0 <= b+1 <= i < len(A) by I^for_k and C_k
		# A[m_k] valid index of A since 0 <= b <= m_k < len(A)
		# Also A is a list of size len(A) by Pre
		if A[i_k] < A[m_k]: m_k+1 = i_k
		else: m_k+1 = m_k
		
		# Valid + since i_k \in Z by I^for_k and 1 \in Z
		i_k+1 = i_k + 1
	
		#i^m_k+1 equiv to m_k+1 \in N and b <= m_k+1 < len(A), i.e., m_k+1 is a valid index for A
		# We know m_k+1 = i_k or m_k, both of which are indicies as shown above.
		# so i^m_k+1 DOES hold!
	return m
```

Note:
- I think we use the fact that $I^{for}_k$ will be true, so we don't assume it, we just *know it*
	- Yeah I think so. See how we showed $I^m_{k+1}$ and not $I^{for}_{k+1}$
- So all I had to do was show $I^m$ was a valid invariant, and show that the code is valid

#### Termination
For loops always terminate. But for fun let's show the while loop does, too.
- The $i$ increases but is bounded above by $len(A)$ so it should terminate by WOP.
- That means making a Variant/measure and showing WOP works on it. Let $V = i$

WTS $V$ is a integer and bounded above (by $len(A)$) and that it's increasing ($V_{k+1} > V_k$).
- The first claim is Invariant. But also it's identical to $I^{for}$ so basically, we already have it.
- All we need now is to show that second claim, of which *isn't* invariant!
```python
def index_of_min(A, b);
	m_0 = b
	i_0 = b + 1
	
	while i_k < len(A):
		
		if A[i_k] < A[m_k]: m_k+1 = i_k
		else: m_k+1 = m_k
		
		i_k+1 = i_k + 1
		
		# V_k+1 = i_k+1 = i_k + 1 > i_k = V_k 
		# So V_k+1 > V_k
```

#### Correct Return Value
Again, we want to show Post holds, which means we need another Invariant that helps as well as the power of $\neg C$.

> Remember our post:
> Return m s.t. $\operatorname{Post}(m, A, b): m \in \mathbb N, b \leq m < len(A)$ and $A[m]$ is minimum of $A[b:]$

We know that $i = len(A)$ right after the loop. We use this to make our invariant easier to prove: 
- Let $I^{Post}:$ for some $m, A[m]$ is a minimal element of $A[b:i]$
- Remember they also suggested the notation that $[b:i)$ be the indices of $A[b:i]$ (so $[b, i)$ is all x $\in \mathbb Z$ s.t. $b \leq x < i$)
- Also $A[m] \leq A[b:i)$ would mean $A[m]$ is smaller than all items of $A[b:i)$ 
These new notations let us define $I$ to be a more specific $I^{Post}: m \in [b: i) \wedge A[m] \leq A[b:i)$

Now we show Post holds with this!

```python
def index_of_min(A, b);
	m_0 = b
	i_0 = b + 1
	
	while i_k < len(A):
		
		if A[i_k] < A[m_k]: m_k+1 = i_k
		else: m_k+1 = m_k
		
		i_k+1 = i_k + 1
		
	# Proving the Post holds
	# We have not C (i >= len(A), I^Post, and I^for
	
	# Post(m, A, b): m \in N, b <= m < len(A) and A[m] is minimum of A[b:]
		# m \in N by I^Post since m \in [b: i) and b  \in N by pre
		# b <= m < i = len(A) by I^Post and not C
		# A[m] is the minimum of A[b:] = A[b:len(A)] by I^Post
	
```
Yay! The invariant we created perfectly proves our Post.

To *prove* the invariant, we do more work...

```python
def index_of_min(A, b);
	m_0 = b
	i_0 = b + 1
	
	# I^Post_0 holds. m \in [b: b + 1) = m \in {b} holds by init. Also A[m_0] = A[b] = A[b:b+1] so A[m] <= A[b:i_0]
	
	while # Suppose I^Post_k: A[m_k] <= A[b:i_k)
	i_k < len(A): # C_k
		
		if A[i_k] < A[m_k]: m_k+1 = i_k
		else: m_k+1 = m_k
		
		i_k+1 = i_k + 1
		
		# I^Post_k+1: m \in [b: i_k+1) and A[m_k+1] <= A[b:i_k+1]
		# They just ignored the whole "m" thing so let's leave it like that.
		# A[b:i_k+1] = A[b:i_k]A[i_k]
		# Case: A[i_k] < A[m_k]
			# Then m_k+1 = i_k
			# Of course, A[i_k] < A[m_k] <= A[b:i_k] by IH (I^Post_k)
		# Case: A[i_k] >= A[m_k]
			# Then m_k+1 = m_k
			# A[m_k] <= A[b:i_k] by IH
```


The cases were a goated idea. I guess it makes sense since there was an if statement in the code.

