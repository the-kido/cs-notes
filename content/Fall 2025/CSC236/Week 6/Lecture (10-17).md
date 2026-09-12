"Correct return" gets extended to "correct *output*" (sometimes a function might update outside variables, like when it takes an array and mutates it)

![[Lecture 10-17 example for validity and termination.png]]
- The subscripts from last lecture were included to show they are local variables (thru the parameter like $n$ and from body of function like $q$ and it specifies which loop the value is from
- $n_0$ is the initial value. The value we *call* the function with. We update the Post and Pre to use this "initial value" for clarity
	- #todo why is the returned value just $q$ then?
### Loop Invariants
- "We've seen them before". Uh oh... I haven't!
Generally: "An invariant is a statement that is uniformally true about all programmed variables (local, parameter, variables)"

#### 1. Proving *validity* of above program
- $\geq, +, -$ are all valid as long as $n$, $q$ are numbers (and $d$ I guess).

The idea here is: 
1. Given the code, and places where code *could* go wrong, how do we know the code doesn't go wrong?
2. What do we need to know about $q$ and $n$ (*throughout the program*--that's the "uniformity part*) to make sure nothing goes wrong?
The answer to #2 is that we need to know that $q$ and $n$ (and $d$, but it starts as a number and never changes) *are numbers*. That way the $\geq, +, -$ will actually work as intended.

Define invariant $I(n_o, d, n, q): n, q\in \mathbb R$ (depends on all variables--params and local vars)
- Why we have both $n_0$ and $n$ is that $n_0$ is the initial value for the program. It's important. The Post() relies on it.
	- $n_0, d$ are arguments
	- $n, q$ are local variables
- We defined the invariant to just show $n, q \in \mathbb R$. Why real? Because it's more general / vague. Let's be as imprecise as possible for fun. It can be precise too though don't worry. Invariants are flexible!
- *Invariant* means "true" at the end/start of *each* iteration of the loop
	- the "end" or "start" of a loop are both the same. It just changes how you index.
	- We defined $k$ as "the iteration that is currently going on" so $k+1$ is the value at the *end* of iteration $k$.
- WTP: $\forall k \in \mathbb N, \text{if there are} \geq k \text{ iterations, then } I(n_0, d, n_k, q_k) \text{ is true}$
	- Shorthand: $I_k \equiv I(n_0, d, n_k, q_k)$

The code we had was like:
```python
def quotient(n_o, d):
	q_o = 0
	
	# We check the invarient here. Invarient has to be true "before" the start of each iteration
	# I_0: n_o \in N (by Pre), q_o = 0 \in N. Therefore n_o, q_o \in R
	# (not included in lecture but let me state this for my own sake: Let k be arbitrary. suppose there are >= k iterations)
	while # Assume I_k
	n_k >= d: # C_k (label for condition)
		q_k+1 = q_k + 1
		n_k=1 = n_k - d
		# WTP I_k+1:
		#   q_k+1 = q_k + 1 \in R b/c q_k \in R (by C_k)
		#   n_k+1 = n_k - d \in R b/c n_k \in R and d \in N^+ by Pre

Above, we just proved Pre => I_0 and forall k \in N, if there are >= k iterations, then C_k and I_k => I_k+1
```
Note:
- We check the invariant 1 more time than the # of times the loop runs: once for each end of the loop, and once before the first loop (loop #0)
- Loops are kind of like simple recursion: The loop we're at is dictated by the previous loop, dictated by the previous, etc.
	- We can prove loops with this idea. 
	- We assume the invariant of the previous loop is true
		- We first showed $I_0$ is true before the loops even started. Then it's proved than $I_1$ is true. The same logic loops to $I_k$ 
	- We prove it works for some loop. Therefore it should work for any number of loops
Yay, the loop is valid! We were able to prove n_k, q_k are always real in the loop, making the operations legit. But... why does it stop? When does it terminate?
#### 2. Proving *termination* of above program
We know the size is a natural number, it strictly gets smaller, so by WOP it will definitely end.
To show this, we define the *Loop Variant*
- Invariants are a statement that is always true about all programmed variables
- Variants are like quantities/"a measure" that is
	1. Always natural
	2. Strictly decreasing after each iteration

We associate a natural number with each iteration. That shows that it ends with WOP
- The variant cannot include $k$ since there is no $k$ in the code. It's just an annotation we are adding to keep track of loop count.
- Instead we have to use the actual code's variables. What is getting smaller!?

In the program example, we can use $n$, since it's literally being subtracted each time, and we can show that $d$ is positive, probably.

Define $V(n_o, d, n, q) = n$.  For this loop, $n$ is good enough.
- For each $k \in \mathbb N$, if there are $\geq k$ iterations, then $V_k = V(n_o, d, n_k, q_k)$ 
	- Same applies for invariant. He just didn't write it
WTP $V$ is natural and decreasing

```python

... 
q_0 = 0
# V_0 \in N b/c n = n_o \in N (by Pre)
while # Assume V_k \in N
n_k >= d: # C_k
	q_k+1 = q_k + 1
	n_k+1 = n_k - d
	
# V_k \in N b/c
#    n_k \in N and d \in N^+ by Pre, so n_k=1 = n_k - d \in Z
#    since n_k >= d by C_k, n_k - d >= 0 so n_k - d \in N
# V_k+1 = n_k+1 = n_k - d < n_k = V_k 
#    b/c d > 0 by Pre

We just proved that: 
- Pre => V_0 \in N and forall k \in N, if there are >= k iterations, then C_k and V_k \in N => (V_k+1 \in N and V_k+1 < V_k)
```
#todo Remember how he derived that "what we just proved" part.



# Readings (`iterative-correctness-I`)
- Loop init is before the loop (variables n things)
- Loop condition $C$ or $C_k$ (idk which to use #todo)
- Loop body is obvious
- Values *right* after initialisation will have a subscript $0$. Constants from arg doesn't need this as long as it doesn't get updated in the code.
	- For the quotient program, we use $n$ of the argument and mutate it in the loop, so subscript required.
	- Notice `Pre` and `Post` don't have any other subscript but $0$. The code expects the `Post` to rely on the given argument, which is always the *initial value*. Same with `Pre`
- Index = value at the end of each iteration
	- Iteration $0$ is before any iteration. Iteration $1$ is the first iteration. So $n_1$ is the value at the end of iteration `#1`. 
- In English, for every possible $k$, $q_k$ and $n_k$ are the values of $q$ and $n$ after $k$ iterations (if there *are* $k$ iterations). The code therefore "defines" two (potentially infinite) sequences $q$ and $n$ by:
	- $n_0 \in \mathbb N, d \in \mathbb N^+$ and $q_0 = 0$ and for each $k \in \mathbb N$, if $n_k, q_k$ are defined and $n_k \geq d$, then $q_{k+1} = q_k + 1$ and $n_{k+1} =n_k + 1$
		- #todo doesn't include the $\geq k$ iterations specification
	- "if the sequences *are* finite, then the result is the final value of $q$" #todo ?
As always, we want to prove the implementation is correct. That means showing:
![[Proving the implementation is correct iterative.png]]
- Makes sense. For any argument that satisfies the Pre, the call should return a valid value, such that Post is satisfied

We need to show that a valid call of a function has:
- Normal termination, through
	- No errors
	- No executing forever
- Correct return values

For loops, we show normal termination by showing:
1. Validity of calls: Calls are all valid, no stopping for errors
2. Termination: iteration isn't a source of infinite execution

Now how do we show the above without going through all $k$ iterations? We use the "partial" information given from previous loops. This is your *invariant*. Invariants are "uniform" claims that are true after every iteration. It's similar to simple induction

### Showing Validity Example
We will need to invent a Loop Invariant to support us in this proof.

In the loop, we need to show $\geq, +, -$ all work. 

By observation, the reason these operations work is that $n, q$ start as numbers and each iteration are adjusted by operations that only produce numbers. As an Invariant, we state $I(n_0, d, q, n): n \in \mathbb R \wedge q \in \mathbb R$.
- Remember, the invariant encompasses all the changes to the variables in previous loops. $q$ and $n$ aren't "known", but we do know their value was changed by previous loops. This is different from stating a fact *about the loop in the now*

#### The $I_k$ thing
So $I(n_0, d, q, n)$ is general. We use $I_k$ to refer to the value of $I$ at the end of the $k$th iteration.

The definition is as follows: "For all $k \in \mathbb N$, if there are $\geq k$ iterations, then define $I_k$ to be $I(n_0, d, q_k, n_k)$ i.e., $n_k \in \mathbb R \wedge q_k \in \mathbb R$"
- If there are not $k$ iterations, then $I_k$ is not defined (there aren't enough iterations lol)

*If* we prove that $I_k$ is always true, i.e. we're showing $\forall k \in \mathbb N$, if there are $\geq k$ iterations, then $I_k$ is true, *then* the operations will always be valid. THIS is the thing we want to prove to show validity, basically.

#### How the proof looks
Since this is simple induction, we prove the base case ($I_0$) and then we assume $I_k$ and derive $I_{k+1}$ in the loop.

The base case we show right after the Loop Init. The Inductive Step = the part where you use the Inductive Hypothesis ($I_k$ holds) to show $I_{k+1}$ holds

>[!note]
>The body: $k+1$ iteration
>The condition and IH: $k$ iteration ($C_k$ and $I_k$)
>
>If $C_k$ was true, it gives more info for the $k+1$ values. i.e., the condition info

![[Quotient-remainder proof template.png]]
- Note we didn't suppose that $k \in \mathbb N$ where $\geq k$ iterations. It's implicit (right before the while loop... otherwise what defines the $k$ subscripts in a real proof?) 


# Readings (`iterative-correctness-II`)
#### Proving *termination*
- This time we'll use a Loop Variant that represents the "size" of the loop/recursion.
	- (Variants are just measures / quantities)
- So it should be natural and strictly decreases each iteration
- Since $n$ seems to decrease *and* it's natural, let's define $V(n_0, d, q, n) =n$
- Similarly to invariants, we define $V_k$ as
	- $\forall k \in \mathbb N$, if there are $\geq k$ iterations, then $V_k$ is $V(n_0, d, q_k, n_k)$ i.e. $n_k$
- We want to prove two things
	1. $\forall k \in \mathbb N$, if there are $\geq k$ iterations, then $V_k \in \mathbb N$ (the quantity of the Variant should be a natural)
	2. $\forall k \in \mathbb N$, if there are $\geq k+1$ iterations, then $V_{k+1} < V_k$ (strictly decreasing)
		- It's $k+1$ iterations, and NOT $k$ because $V_{k+1}$ must be defined
- The first claim is an Invariant claim, since it's *universal* about a changing variable's value at the end of *each* iteration (wanna ensure by the end, it's still natural, each loop)
- The second claim isn't invariant. It only compares the start and end values of two different iterations. 
	- #todo I can't seem to concretely describe why "this" isn't invariant but the first one so clearly is. I guess "the first one talks about *EVERY* $V_k$" whereas the second only talks about two instances of $V$: $V_k, V_{k+1}$ 

The proof for both of these can be inlined:
```python
def quotient(n_0, d):
	# (implicitly: assume Pre)
	q_o = 0
	
	# Base Case: V_0 = n_0 \in N by Pre
	
	# (implicitly: let k in N, assume there are >= k iterations)
	
	while # Assume V_k \in N
	n_k >= d: #C_k
		q_k+1 = q_k + 1
		n_k+1 = n_k - d
		
		# V_k+1: n_k+1 = n_k - d
		#   V_k, therefore n_k in N, d \in N^+ by Pre, and n_k >= d by C_k, so n_k - d >= 0, so V_k+1: n_k - d \in N holds
		
		# V_{k+1} = n_k+1 == n_k - d < n_k = V_k
		# b/c d > 0 by Pre, so n_k - d < n_k
	
	return q
```

Notes:
- We assume $V_k \in N$ since that's the invariant claim. So that is done "inductively". The second claim isn't inductive. We do that within the loop but by itself it has enough information (no previous calls required)

So what did we just attempt to prove?
Pre $\wedge V_0 \in \mathbb N  \implies \forall k \in \mathbb N$, if there are $\geq k$ iterations, then $V_k \in \mathbb N \wedge C_k \implies V_{k+1} \in \mathbb N \wedge V_{k+1} < V_k$

#### Proving Correct Return Value
- We want the loop to eventually return the value we want. 
- The *postcondition* of a loop will be the negation of the condition (since if we're out the loop, it's cuz the condition wasn't met) *as well as* (conjunction, $\wedge$) whatever invariant property we've accumulated so far. 
- The goal is to prove a certain invariant property, and utilise the condition's negation, to prove the Post for the function as a whole

Conveniently, we observe the loop given to us always holds a part of the postcondition ($\exists r \in \mathbb N, n_0 = q \cdot d + r$).

We need the invariant to be $I(n_0, d, q, n): q \in \mathbb N \wedge n \in \mathbb N \wedge n_0 = q \cdot d + n$ (we already get $r < d$ from $\neg C$)
- We will make $n$ be the witness for Post. We need to ensure it's natural for it to be a valid witness, though

Now we can attempt to prove C.R.V

```python
def quotient(n_0, d):
	# (assume Pre)
	
	q_0 = 0
	while n_k >= d:
		... body
	
	# not C holds, so n < d
	# Also "I" holds. We pretend we showed it above and it's all good.
	# Means we have: q \in N and n \in N and n_0 = qd + n 
	
	# WTS Post(q, n_0, d) where q is returned
	# q \in N by I
	# n \in N and n_0 = q * d + n by I. Also n < d
	# Therefore n witnesses Post
	return q
```
Above we just proved Pre $\implies (\neg C \wedge I \implies Post)$

Now let's update the proof above to include the proof that the invariant is true:
Remember $I(n_0, d, q, n): q \in \mathbb N \wedge n \in \mathbb N \wedge n_0 = q \cdot d + n$. We define $I_k$ such that
$\forall k \in \mathbb N$, if there are $\geq k$ iterations, then $I_k: q_k \in \mathbb N \wedge n_k \in \mathbb N \wedge n_0 = q_k \cdot d + n_k$
```python
def quotient(n_0, d):
	# (assume Pre)
	
	q_0 = 0
	# I_0: q_0 = 0 \in N and n_0 \in N by Pre and n_0 = 0 * d + n_0
	
	while # Assume I_k
	n_k >= d: # C_k
		q_k+1 = q_k + 1
		n_k+1 = n_k - d
		
		# WTP I_k+1
		# q_k+1 \in N b/c q_k \in N by I_k and 1 \in N and >= 0
		# n_k+1 \in N b/c n_k \in N by I_k, d \in N^+ by Pre, and n_k >= d \implies n_k - d >= 0, so n_k - d \in N
		
		# Finally, 
		# n_0 = q_k * d + n_k by I_k
		#     = (q_k+1 - 1) * d + (n_k+1 + d)
		#     = q_k+1*d - d + n_k+1 + d
		#     = q_k+1*d + n_k+1
		
		# So I_k+1 holds!
```
We essentially proved 3 invariants where proving correctness
1. $n \in \mathbb R \wedge q \in \mathbb R$ when showing validity (no errors)
2. $n \in \mathbb N$ when showing termination (we had Variants, but had to prove the variants invariantly held)
3. The really big one we just proved now
We can conjoin these as one big Invariant and prove them all at once via Simple Induction (saves us time)

