Recursive Runtime!

```python
def fact(n):
	if n == 0: return 1
	else: return n * fact(n-1) 
```

Relative to `n` so we use 'vague units' for instructions since their time is 'constant' w.r.t. `n`
- But what about multiplication? The bigger the number, the more instructions
- But for our case we'll assume the numbers are small enough that the time is still constant

There is some work done *before* and *after* the recursive call but we will group it all together for one call.
- For a call of `fact(4)`, we just keep track of the work done in "this" part of the call (ignoring the recursive call's work) and add all of those up!

We just say that all work added together (outside the recursive call, or work respective of the input size) is *constant*, just to *really* simplify
- There is 1 time spent in `fact(4)` (ignoring the rec. calls)
	- You can say it's 3 time instead of 1, and well you'd still get the same "amount of work" assuming 3 'work' truly is constant!
- So clearly `T(4) = 5` adding up all the work of the recursive calls too
	- I think `T`gives 'time'. It's not actually a constant "5"... we'll get to that (i.e. the input is constant `4`, not a variable)

We can create a function that takes the exact structure of the existing function and returns time!
```python
def T(n):
	if n == 0: return 1
	else: return 1 + T(n-1)
```
- This effectively is your 'runtime' function stripping down the other work!

#### Recurrence
We can express the above function algebraically
$$
T(n) = \begin{cases}1 & \text{if }n=0 \\ 1 + T(n-1) & \text{if } n \geq 1 \end{cases}
$$
This is called a '**recurrence**' for 'runtime'. You plug in any `n` to 'unroll' (trace) $T$
$T(3) = 1 + T(2)$
$=1 + (1 + T(1))$
$= 1 + (1 + (1 + T(0)))$
$=1 + 1 + 1 + 1 = 4$

This is nice! 

But it would be even more preferable to have a *closed-form* expression for $T(n)$ where $T(n)$ is just an expression of $n$ and not recursive. In this case we can already predict that $T(n) = n + 1$ is its closed-form expression... but why 🤔

Finding the pattern here was easy, but often it's non-obvious so we have a general method:
![[General way to spot runtime pattern.png]]
- You try to figure out the way the general recurrence relation expands. This means finding what the `k`'th expansion looks like. 
- You can try 1 expansion, 2 expansions, until you figure it out. In this case it's clear! 
	- Note the 'general' recurrence relation doesn't have its base case. We know `T(n-k)` *is* 0 when $T(n - k) = 0 \implies n - k = 0$
- Then you find what `n` expansions looks like using what we've learned 'till the $k$'th expansion:
![[Finding recurrence relation closed-form.png]]
and boom! This is a ***good guess*** but we haven't proved it. But once we have the guess, the proof is far easier.

## Example 2
Merge sort!

We assume all elements in lists are constant size (since python stores them all as references anyway. Pointers galore)
```python
def MS(L):
	# the len and >= operators use constant time, so theta 0 there
	n = len(L) # Hey look a size measure
	if n >= 2:
		# Slicing is theta n in total
		L0 = L[0 : n // 2]
		L1 = L[n//2:n]
		
		# Explained below
		MS(L0) 
		MS(L1)
		
		# Also theta n (linear time) since you loop through all of L0 and L1, and add (constant time) to a new list
		# Nothing crazy
		Merge(L, L0, L1)
```
- Slicing loops through all items in the list from the start to end indices in Python. So the time for those are *linear*. In total, L0 and L1 would have to go from `0` to `n//2-1` and `n//2-1` to `n` so that's just `0` to `n` or $\theta(n)$ time. We use $\theta$ for total time of instructions
- For the MS runtimes... I have a few things to say
	- The time "those" take is not related to the time done "within" the call. In fact, since these are recursive calls they are "separated" from the "local work" (remember `Merge` is technically also local work because its time is fixed)

	- Instead of $\theta$ we use $T$ since we'll need this function to find the total time of recursive functions after all. #todo I do wonder, would saying $\theta (T\lfloor n/2 \rfloor)$ be right? No because $\theta$ is for time of instructions and $T$ is already time. You're passing time into time which makes no sense.
	- For $MS(L0)$ We pass an array of size $\lfloor n / 2 \rfloor$ because that's its length is $n//2$ which always rounds down
	- For $MS(L1)$ it's obviously the rest of the list, but specifically I don't know how to derive that number #todo



![[Example 2 instruction times.png|600]]
#### Summarising this
Let's look at a call tree. Choose $len(L) = 8$. There is time spent *within* the call, and some time *in the recursive calls*. We let $t(n)$ be that total time just in the call. It's clearly similar to $\theta$ 
$t(n) =$ work/time/steps done at **one node** in the call tree (so that's the slicing, merging, comparisons, etc.)
($T(n)$ is total work for the entire subtree)

In this case, $t(n) \in \theta(2n +1) = \theta(n)$
- $\in$ !? #todo What the heck? I'm at 43:00

We just assume (for some reason) that $t(n) = n$
and we find that $T(8) = 4 \cdot 8$ (8 per floor)


# Readings (`recursive-runtime-I`)
```python
def fact(n):
	if n == 0: return 1
	else: return n * factorial(n-1) 
```

For $\Theta$ we consider all "constant steps" as "1" unit of work relative to $n$. Things like addition, returning, evaluating `==`, you get the idea. 

We split the amount of work for EACH call depending on the code block executed (considering we have an "if" statement)
- For the `n == 0` case, we say that's a constant `1` amount of work
- For the `n >= 1` case, we say it's 1 work (for all the arithmetic and constant-work operations) PLUS the work done by `factorial(n-1)` which we "don't know"
We can use these findings to create a function that returns the "number of steps" (i.e., work) writing as both code and with math notation
```python
def T(n):
	if n == 0: return 1
	else: return 1 + T(n-1)
```
$$
T(n) = \begin{cases}
1 & n = 0\\
1 + T(n-1) & n \geq 1
\end{cases}$$
These "recursive functions" are called "recurrences" in math

Now, we want a "closed form" version of $T(n)$ that clearly gives us a function that might belong in $\Theta(g(x))$

Let's start with a **running-time tree**
1. You call, say, $T(4)$, and instead of writing all that just write $4$. From there, write all the branching paths via recursion (in this case there is only 1 recursive call!) and for each new recursion, note that it is "1" more "work" per step.
	1.  The work per node is given as the work done "inside" the call but not the recursive call. In this case that's the $1$ part of $1 + T(n-1)$
Finding that closed-form $T(n)$:
2. We "unroll" by repeated substitution until we do so "n" amount of times, therefore hitting the $n=0$ argument input base case

$T(n) = 1 + T(n-1)$ for some "big" $n$ (meaning $n \neq 0$ for sure) (this is the "FIRST" unroll)
![[Unrolling for recursive time.png]]
See we get $T(n) = n +1$ which clearly shows that $T(n) \in \Theta(n)$. That's the time complexity!

### Example #2: Merge sort
```python
def MS(A):
	# the len and >= operators use constant time, so theta 0 there
	n = len(A) # Hey look a size measure
	if n >= 2:
		# Slicing is theta n in total
		L = A[0 : n  // 2]
		R = A[n // 2 : n]
		
		# Explained below
		MS(L) 
		MS(R)
		
		# Also theta n (linear time) since you loop through all of L0 and L1, and add (constant time) to a new list
		# Nothing crazy
		Merge(L, R, A)
```
We are given the measure, which is the "length" of the input.
Don't worry about best-case or worst-case time. $\Theta$ accounts for all of that (?)

First, we determine the time "within each step"
- We use sub-$\Theta$'s for each operation that depends on the size of $A$ 
	- "Splitting" and "Merging" do. Both, added up, are $\Theta (n)$ so that's that work given.
From there we can derive the new recurrence
```python
def T(n):
	if n >= 2: return n + T(n//2) + T(ceil(n//2))
	else: return 1
```
- In this case, the return is still time. It sort of feels unintuitive to me for some reason though #todo
- Also the two recursive calls take a smaller-sized input of size L and R (which you can figure out the sizes of them with some brainpower).
	- #todo I'm kind of worried this will come back and bite me, so I should really figure out WHY the sizes are the way they are. We'll see

The recurrence in math looks like
$$T(n) = \begin{cases} 
n + T(\lfloor n/2 \rfloor) + T(\lceil n/2 \rceil) &n \geq 2\\
1&n= 1
\end{cases}$$
Again we want a recurrence tree and a closed-form description of $T(n)$
- Let's choose $L$ such that it's size is $8$ and trace $T(8)$
![[Tree for 8 size input example 2.png]]
See that the time starts at $8$ (since the size is also $8$ and the work done takes $n$ time per call)
- Then in the child calls, there is only $4$ work done per call, but there are two calls, so in total those calls do $8$ work.
- We continue until we hit the leaves, which are all just $1$ work as given in the recurrence.
Clearly this pattern works for all inputs that are powers of $2$ because they can be divided by $2$ a lot of times. 
Let's work with all $n$ such that $n = 2^k$ for some $k$. That is, we try to find $T(n) = T(2^k)$. The power of choosing $2^k$ is that we can rewrite the recurrence to use this fact to make it FAR simpler:

$$T(n) = T(2^k) = \begin{cases} 
2^k + 2T(2^{k-1}) &k \geq 1\\
1&k= 0
\end{cases}$$
- Because floor/ceiling doesn't change an integer (which n/2 is since n is $2^k$ which is divisible by 2)
- Also we updated the conditions:
	- $n \geq 2 \implies 2^k \geq 2 \implies k \geq \log_2 2 =1$
	- And $n = 1 \implies 2^k = 1 \implies k = \log_2 1 = 0$

Also here is the RTT:
![[RTT for merge sort example.png]]
- For this RTT we just do the first two levels. The third layer's time, generally, is $T(2^{k-2})$ so we use that. We don't split the tree more so we use a vague "triangle" to represent the time.


Now we can finally unwrap to get a closed-form description of the sequence:
$T(2^k) = 2^k + 2 \cdot T(2^{k-1})$ (unwrap #1)
$= 2^k + 2\cdot (2^{k-1} + 2T(2^{k-2}))$ (unwrap #2)
$=2 \cdot 2^k + 2^2 T(2^{k-2})$ (just algebra)
$=2 \cdot 2^k + 2^2 (2^{k-2} + 2T(2^{k-3}))$
$=3\cdot 2^k + 2^3 T(2^{k-3})$
It seems if we unwrap $k$ times (such that $k-k = 0$ so $T(2^{k-k}) = T(1)= 1$) that...
$= k \cdot 2^k + 2^k\; T(1)$
$=(k+1)\cdot 2^k$ (closed form!)
Also, $2^k = n \implies k = \log_2 n$ 
$= (1 + \log_2 n) \cdot n$ in terms of $n$ which is more useful for us than $k$ is. 
In all, it seems this algorithm belongs such that $T(n) \in \Theta(n \log_n)$

#### But this isn't the case for ALL $n$. 
> Our goal is to show that $T(n) \in \Theta(n \log n)$ for any $n$. We did the case where $n = 2^k$, but not for the case where it's NOT that!

First, we just take for granted that $T$ is non-decreasing. Means $T(1) \geq T(2)$ and so on. It's obvious just looking at $T$ everything is positive and added together.

For any point, say, 236, it's bounded between $128 = 2^7$ and $256 = 2^8$ by the non-decreasing fact.
So $2^k \leq n \leq 2^{k+1}$ for some $k$ 

We can show our desired result via the *definition of $\Theta$*. It's a long proof but it's not CRAZY bad.
You do a direct proof. You split $n$ into cases ($n = 2^k$ and not) and show that $c_1\; n \log n \leq  n \log n  \leq c_2\; n \log n$

And that's it! We've shown the $\Theta$ class of $T(n)$ and by extension this algorithm


### Proof (My own practice)
We're tryna show that, given $T(n) = (1 + \log_2 n) \cdot n$ that $T(n) \in \Theta(n \log_2 n)$
That means showing $\exists c_1, c_2$ such that $\forall n \geq n_0$, $c_1 f(n) \leq f(n) \leq c_2 f(n)$

Let $n\geq2$ be arbitrary

We have that $2^{k-1} \leq n \leq 2^k$ for some $k$
$\implies n/2 \leq 2^{k-1}$

Then $t(n) \leq t(2^k)$
$=(k + 1)\cdot 2^k$
$= (1 + \log_2 n) \cdot n$ 
$=n + n\log_2 n$
$\leq 2 n \log_2 n$ (because $n \leq n \log_2 n$ when $1 \leq \log_2 n \Leftrightarrow  2 \leq n$)

And $t(n) \geq t(2^{k-1})$
$= ((k-1) + 1) \cdot 2^{k-1}$
$=k \cdot 2^{k-1}$
$= \frac 1 2 \log_2 n \cdot (n)$ (by fact $k = \log_2 n \Leftrightarrow 2^k = n$)
