# Old lecture notes
N = 0, 1, 2, 3..
0 is included in this course

I like the way the slides do it
To get A(4), you need A(3) and A(2)
What's A(3) and what's A(2)?
Well you need A(1) and A(2)
Solving is easy at that point

Call tree is also good

#2. #todo do at home

#3. the `maybe()` is nondeterministic. Think of it like a variable $a$
- The result can be *many shapes!*
- We can make assumptions to get certain results

## Next slides

principle of recursion
- for any function call, its recursive calls return a valid value

RH = recursive hypothesis


The confusing slide (16/20) is meant to "kind of be like" actual induction.

Remember $a_n$ is a function. It takes an n, returns something
For the witness thingy, $a_n = n/3$ basically if i understand correctly


Assume no memory/stack overflow/errors
We do worry about invalid calls though.

#todo Does this mean number can't be too large?

something abt measure idk watch the lecture again #todo 
- "The change satisfies the precondition still"
- When n >= 5, then n-3 >= 12. Means Change(n-3) (which is what we have in the code) will satisfy the precondition. Yay.

# My annotations from the "better" lecture
Pre(n) can specify limits just so the induction works nicer (e.g. $n \geq 12$ for the coin problem)

The "formulation" for a function has
1. Pre
	1. "I only need to make the code work for these values that satisfy the precondition"
		1. I can ignore the other values (errors could happen, return a meaningless value, etc. if the pre doesn't hold)
2. The `return`-ed values
3. The post condition
	1. e.g. t and s are natural, and $n = 3t + 7s$
	2. We have to make sure that it's true at the end when returning
4. Then u define the function

Correctness = proving the algorithm works

In 1 sentence: $\forall n \in \mathbb N, n \geq 12 \implies n = 3 \cdot a_n + 7 \cdot b_n$
But the algo returns $t$ and $s$!? Well fret not, $a_n$ and $b_n$ are just names for those.
This sequence of values / witness / example, shows that $\forall n \in \mathbb N, n \geq 12 \implies \exists a, b \in \mathbb N, n = 3a + 7b$
- Saying the above is true is sort of $\equiv$ to saying the algo is correct
- EXCEPT this doesn't check for infinite chains of recursion / errors (like when calling `change(11)`)
	- Showing *that* is **validity**. Validity of recursive structure vs. Correctness

So to say a algo is "**correct**" means we satisfy
1. It terminates correctly and returns an actual value
	1. No stopping b/c of an error
	2. No stack-overflow from looping forever!
2. The value it returns is what we want

There are two things to check for the "**validity**" of the recursive structure:
1. Check that every (recursive) call of the function is *valid*
	1. (args of new call satisfy precondition for the function)
	2. e.g. gotta show $n-3 \in \mathbb N$ and that $n-3 \geq 12$ as per the `pre`
2. Validity for recursion / "valid recursively" (i think you also do this *for each call*)
	1. This is the "inductive thinking" part.
		1. "how do you know that you wont recurse "infinitely?" = You show that you recurse on a *smaller* input!
	2. To do this, we:
		1. "Define a measure of input *size*" (done so the $size  \in \mathbb N$). This was the thing i was so confused about!
		2. Make sure each recursive call that has a *strictly less* size than the current arg does. 

The structure looks like this:
```python
def f(v):
	# Let size(v) = ....
	# Valid measure since size(v) \in N since....
	
	...
	
	# Valid call b/c (and show that Pre(a) holds)
	# Vaid recursively because (show size(v) > size(a))
	f(a)
```

Let's do one of the proofs i think:
```python
# Pre ... 
# Post ...
def change(n):
	# let size(n) = n ('n' is the thing that we will now show decreases. "n" is good because when "n" changes, "size(n)" will also change. Think 'hashing'. We are trying to 'hash' the input!)
	# valid measure b/c n \in \mathbb N (n is natural) (by precondition!)
	if n == 12: ... # Valid b/c n is natural. Otherwise nothing else can really go wrong....
	elif n == 13: ... # same as abv
	elif n == 14: ... # and again
	else:
		# We know n is natural and >= 12 (from pre)
		# but since its != 12, != 13, and != 14, n >= 15 ✨"by case"✨
		# (c) n >= 15 b/c of above 
			# Note that (c) is a label. A pointer, if you will, to a truth here
		(a, b) = change(n-3)
			# We gotta show this is a "valid call" (the "1." for checking validity of the algo)
		# This is a "valid call" i.e. Pre(n-3) holds
		# n-3 \in \mathbb N because n \in \mathbb N and n \geq 15 > 3 by (c)
			# Note, we just need to show n >= 0. So the above does that effectively
		# n - 3 >= 15 - 3 = 12 also holds
		# so Pre(n-3) does hold!
			# Now to show it's valid recursively!
		# Its valid recursively b/c size(n-3) = n - 3 < n = size(n)
			# and that's strictly decreasing
		... # for the rest of the code. it's stuff we didn't have to validate 
```
But did we show that it never loops?
if an algo has a valid recursive structure, then 
- there *is* a `size` (that can be defined, and that's always natural)
- each call is *valid* (valid pre condition)
- each call is valid *recursively* (the size gets strictly less)
So of those criteria are true, then it guarantees each valid call terminates normally. Means:
1. No error!
2. No infinite recursion!

So it's kind of the opposite of the normal way you'd think about recursion.
> "Why do I know my recursion will work?". "Well, because I know it'll hit a base case"

But that's backwards for our proofs
>"We know we are guaranteed to hit a base case because we have the valid structure". Not the other way around.

Structure being good doesn't say anything about the post condition, though. That has to be done separately. 
- You'll have to show the valid structure + valid return types (the precondition) 

### Example #2 
Let's show that every natural number >= 2 can be factored into a product of prime numbers
- Even a number by itself is a product: $\prod^0_{i=0} P_i = P_0$ shows that $P_0$ is still a product even if the top number is 0.
- 1 isn't a valid factor
Let's do some numbers and see if there's a pattern!
.... okayyy we so didn't see a pattern. Great.
Anyway we made two helper functions. We made prime(n) which takes a number and returns a "b" boolean.
We also made `two_fact(n)` that returns two factors of a not prime number. 
- We are returning "nondeterministically" in that when we call it, it gives a "random" output. You will always get something that satisfies the post condition (that it returns two numbers smaller than the passed n, but greater than 2)


# Readings
In week 1 we exclusively went over justifying an algorithms *structure* is valid!

If you see $\mathtt{def\ Pre}(\bar v):$ that means "v" is a set of parameter variables
- These are the variables you actually do things with
If you see $\mathtt{Pre}(\bar a)$ that means "a" is a set of argument expressions 
- Like what you'd see in a function signature.


# EX0

1.  ✅
A(4) = 34
- A(3) = 14
	- A(2) = 6
		- A(1) = 2
		- A(0) = 2
	- A(1) = 2
- A(2) = 6
	- A(1) = 2
	- A(0) = 2


> Note: I should write out the branches even though I know the values that they return (e.g. A(2))

2. ✅
B(5) = -1
- B(2) = 0
	- B(1) = 1
	- B(1) = 1
- B(3) = 1
	- B(1) = 1
	- B(2) = 0
		- B(1) = 1
		- B(1) = 1

3. ✅
E() $\stackrel{8}{=}$ '1^2'
- E() $\stackrel{5}{=}$ '1'
- E() $\stackrel{6}{=}$ '2'
> The fancy syntax above is for nondeterministic questions. You can also use derivation trees

# EX1
A "trace" has the results
A "call tree" just has the calls, branching out

1. ✅
a(7) = 21
- a(5) = 15
	- a(3) = 9

2. ✅
a(4)
- a(3)
	- a(2) = 4
- a(1)
	- a(0)
		- a(-1)
			- ... uh oh!

3. ⚠️I could've easily done this w/o help but I was rushing. Don't rush the math. I was doing good!
	1. Also, I only need to write the variables that *did* change, just for my convenience 
c(3, [3,1, 4, 1, 5, 9], 0, 5) (c = 2) = 2
- c(3, [3,1, 4, 1, 5, 9], 0, 2) (c = 1) = 1
	- c(3, [3, 1, 4, 1, 5, 9], 0, 1) = 0
	- c(3, [3, 1, 4, 1, 5, 9], 1, 2) = 1
- c(3, [3,1, 4, 1, 5, 9], 2, 5) (c = 3) = 1
	- c(3, [3,1, 4, 1, 5, 9],  2, 3) = 0
	- c(3, [3,1, 4, 1, 5, 9],  3, 5) (c = 4) = 1
		- c(3, [3,1, 4, 1, 5, 9],  3, 4) = 1
		- c(3, [3,1, 4, 1, 5, 9],  4, 5) = 0 
4. ✅
x and l stay the same. I'm not gonna write them

`x = 41, L = [31, 41, 63, 92]`

b(0, 4) (m = 2) = True
- b(0, 2) (m = 1) = True

5.
x and L don't change, again

b(0, 10) ( m = 5) = False
- b(0, 5) (m = 2) = False
	- b(3, 5) (m = 4) = False
		- b(5, 5) = False 

6. ⚠️ `(0) != (0,)`. I should remember python semantics. The trace for r(0,1) returns `(0,)`, and NOT `(0)`! 

r(11, 5) = (1, 1, 0, 1, 0)
- r(5, 4) = (1, 0, 1, 0)
	- r(2, 3) = (0, 1, 0)
		- r(1, 2) = (1, 0)
			- r(0, 1) = (0,)
				- r(0, 0) = ()

7. 
One potential trace:
$V() \stackrel{5}{=} 3$
- Boom. Lol. No requirement says this isn't allowed....

I should practice drawing the trees though (they just the same as the traces but no answer and I use lines) #todo 

8. 

T() $\stackrel{8}{=}$ ('1', '\*', '2')
- T() $\stackrel{5}{=}$ '1'
- T() $\stackrel{6}{=}$ '2'

>[!question] Note
>The exercise asks to "explore a range of behaviours it exhibits" so I can infer that for the non-deterministic questions, that they would prefer I covered every branch at least once.


# EX3
1.
```python
# Looks valid to me! No large issues there w/ the structure.... now let's prove it's good!
# ...
def algo(n):
	# Let size(n) = n
	# valid measure b/c n \in N (by Pre)
	if n == 2: return 6
	elif n == 3: return 9
	elif n == 4: return 12
	else: # (C) n >= 5 as n != 2, 3, or 4, n \in \mathbb N, and n >= 2 by Pre  
		# valid b/c n - 2 is natural since n >= 2 so n - 2 >= 0, means n - 2 \in \mathbb N
		# and n - 2 >= 5 - 2 = 3 >= 2 
		# valid recursively b/c size(n - 2) = n - 2 < n = size(n)
		a = algo(n - 2)
		
		return a + 6 
```
- Just to reiterate
	- There is a size
		- The size is a `valid measure`
	- For each call
		- It's a `valid call` because the precondition w/ the new args holds
		- It's `valid recursively` because the size measure decreases
2.
```python
wait a second, this wont hold!
```
a(3) # valid since $3 \in \mathbb N$ and $3 \geq 2$
- a(2) = 4
- a(1) # invalid call: $\neg Pre(1) \because 1 \not \geq 2$

>[!note] Note-to-self
>To show a counter-example, the predicates must hold, dummy.
>So I have to show a(3) is a valid call, but it leads to an invalid one.
>The algo won't be wrong if I call a(-1), because I'm not using it as intended anyway
>
>Then to show invalid call, you show Pre(x) doesn't hold. That's trivial

3.
```python
#...
def aa(n):
	# let size(n) = n
	# valid measure b/c n \in N (by Pre)
	if n == 1: return 1
	else: # (C) n >= 2 as n \in \mathbb N^+ (by Pre) and n != 1.
		# valid call b/c n >= 2 > 1. So sqrt(n) >= sqrt(2) > 1. Means floor(sqrt(n)) \geq 1 
		# also floor(sqrt(n)) \in Z, so \in N^+, too
		# valid recursively as sqrt(n) < n (by C) 
		# so size(floor(sqrt(n))) = floor(sqrt(n)) <= sqrt(n) < n = size(n)
		...
```
#todo maybe clarify if u wanna. My answer is correct but the answer is... I'll just say "different"

4.
- I can add returns for values that I know can happen (just the amount required)
- Just read the question. "add base cases" is obvious
aa(2) = 3
aa(3) = 3
```python
def ab(n):
	...
	# let size(n) = n
	if n == 2: return 3
	elif n == 3: return 3
	else: # (C) n >= 4 as n \in \mathbb N and n >= 2 (by Pre)
		# valid call b/c sqrt(n) >= 2 (by (C)) => floor(sqrt(n)) >= 2
		# also floor(sqrt(n)) \in Z and >= 1, so floor(sqrt(n)) \in \mathbb N
		# valid recursively because sqrt(n) < n as n >= 1 by Pre, so 
		# floor(sqrt(n)) <= sqrt(n) < n = size(n) 
		r = ab(floor(sqrt(n)))
		...
```

5.
I accidentally drew the "trace". I was supposed to draw the "call tree"
s(3)
- s(0) = 0
- s(1) = 0
	- s(0) = 0
- s(2) = 0
	- s(0) = 0
	- s(1) = 0
		- s(0) = 0
- (should go to s(2))

Oops i forgot to finish this question
```python
def s(n):
	# let size(n) = n
	# valid measure b/c n \in N (by Pre)
	r = n
	for k in range(r):
		# We will let (C) just specify what "k" is since it is pretty useful
		# (C) k \in N  and k < N 
		
		# valid call as k \in N by (C)
		# valid recursively b/c size(k) = k < n = size(n) by (C)
		r = r + s(k)
```


6.
f(12) (factor = 6) = (2, 3, 2)
- f(6) (factor = 2) = (2, 3)
	- f(2) = (2, )
	- f(3) = (3, )
- f(2) = (2,)

f(12) (factor = 3) = (3, 2, 2)
- f(3) = (3, )
- f(4) = (2, 2)
	- f(2) = (2,)
	- f(2) = (2,)

```python
# ...
def factored(n):
	# let size(n) = n
	# valid measure b/c n \in \mathbb N
	if prime(n): return(n,)
	d = a_factor(n)
	# valid call b/c d \in N and d >= 2 by Post of a_factor
	# valid recursively b/c  size(d) < n = size(n) by Post of a_factor 
	as = factored(d)
	# valid call b/c d \in N and d divides n (b y a_factor Post) so n/d \in Z
	# and since d < n, n/d > 1 >= 2, so n / d \in N and n/d >= 2
	# valid recursively since d >= 2 by a_factor Post, so n/d <= n/2 < n
	bs = factored(n // d)
```
#todo Maybe do again cuz I did have to look at the answer. It's very straightforward though

7.
To show that size doesn't witness the validity of the structure, we basically show that it's "irrelevant"; it can't let us show that the structure really recurses. Likewise, we show that it's invalid recursively (the size doesn't decrease as the recursion gets deeper)

With $size_0(n,m) =n$
r(1, 3) # valid since 1, 3 in N and 0 < 8
- r(0, 2) # Valid since 1, 3 in N and 0 < 4
	- r(0, 1) # Valid call, but invalid recursively since $size_0(0,1) = 0 \not \lt 0 = size_0(0, 2)$

Clearly as m decrements, it's the better choice for the measure. 
>[!note] In math, n // 2 = $\lfloor  n /2 \rfloor$

```python
...
def r(n, m):
	# Let size(n, m) = m
	# valid measure b/c m \in N by Pre
	if m == 0: return ()
	else: # (C) m >= 1 as m \in N by (C) and m != 0 by case
			# (wts n // 2 < 2** (m-1))
		# valid call b/c n // 2 \in Z and n >= 1 by Pre, so n // 2 \in N
		# m - 1 \in Z and m - 1 >= 1 - 1 = 0 by (C) so m \in N
		# lastly n/2 < 2^(m)/2 by Pre, so n/2 < 2^(m-1)
		# valid recursively b/c size(n//2, m - 1) = m - 1 < = size(n, m)
		
		
```

8.
A strange question indeed.

>[!question] Note: A valid measure does NOT mean it's a *meaningful* measure

off the bat, m-n is invalid since if n is 1 and m is 0, then the size is no longer natural.
s(1,2) (a(1) returns (1,1))  --> size(1,2) = 1 # valid call as $1,2 \in \mathbb N$ and $1 \neq 2$ 
- s(1,1) --> size(1,1) = 1 # invalid recursively, as $1 \not \lt 1$ 

I will now format it the way *they* did:
strategy(1, 2) # valid call as $1,2 \in \mathbb N$ and $1 \neq 2$ 
- adversary(1, 2) = (1,1) # a possible return value
- strategy(1, 1) # invalid recursively, as $size_a(1,1) = 1 \not \lt 1 = size_a(1,2)$ 

I think c and d might be valid though so let's try to prove them. We'll do it at the same time
No need to show pre stuff twice, but `size` stuff we do gotta do twice
```python	
def strategy(m, n):
	if m == 0 or n == 0: return True
	else: # (C) m, n \in \mathbb N by Pre and m != 0 and n != 0 by case. So m >= 1 and n >= 1
		# valid call b/c m,n \in N by Pre and min(m, n) >= 1 by C
		(c, d) = advesary(min(m, n), min(m, n))
		# valid call b/c c, d \in N by Post of advestary, and either:
			 # c = min(m, n) and d < min(m, n) (therefore c != d)
			 # c < min(m, n) and d = min(m, n) (therefore c != d)
		# valid recursively w/ size_c because
			# size(m * n) = m * n >= min(m, n) * min(m, n)
			# when c = min(m, n) and d < min(m, n), min(m, n) * min(m, n) < c * d = size(c, d)
			# likewise for the other case
		# valid recursively w/ size_d because
			# if d < c = min(m, n), then max(m, n) > max(c, d)
			# if c < d = min(m, n), then max(m, n) > max(c, d) also
			# so size(c, d) = max(c * d) < max(m * n) = size(m, n) b/c
		return strategy(c, d)
```

### Redo-ing a few questions for confidence!

B(5)
- B(2)
	- B(1)
	- B(1)
- B(3)
	- B(1)
	- B(2)
		- B(1)
		- B(1)

EX3
For non-deterministic questions, we specify which "line" we say is satisfied or nah
E() $\stackrel{8}{=}$ '-1^2'
- E() $\stackrel{7}{=}$ '-1'
	- E() $\stackrel{5}{=}$ '1'
- E() $\stackrel{6}{=}$ '2'


Derivation tree, though:
```
   '1^2'
  /    \
'1'    '2'
```


x = 3, L = [3,1,4,1,5,9]

c(0, 5) = 2
- c(0, 2) = 1
	- c(0, 1) = 0
	- c(1, 2) = 1
- c(2, 5) = 1
	- c(2, 3) = 0
	- c(3, 5) = 1
		- c(3, 4) = 1
		- c(4, 5) = 

yippee