Okay I pray these will be light work.
a) Rewrite for loops to while loops using standard format
b) Trace algorithm for a good set of test cases (write a table of values for each iteration)
c) Prove *Validity*
d) Prove *Termination*
e) Prove *Correct Return*

### Review of "standard" things
Remember that $i\in [a, b+1)$ means $i \in \mathbb Z \wedge a \leq i \leq b$
#### Validity
- $I^V$ ($I^S$ in the notes) will be our standard invariant for validity. Means $i \in [a, b+1)$ where the loop starts at $a$ and goes to $b$ 
	- We know this to be true for for loops. It's "standard"
#### Termination
- Define $V = i$ which we claim is increasing and bounded above.
- Using $I^V$ we have that $V = i \in \mathbb Z$ and $i \leq b$
- And at the end of the loop, we show the claim $V_{k+1} = i_{k+1} = i_{k+1} +1 > i_k = V_k$ (not an inductive claim)

#### When loop terminates
- Then $i = b$ (cuz $i \leq b$ by $I^V$ and $i \geq b$ by $\neg C$) at the very end


### 1.
This will be a dry run cuz idk how exactly they want me to write all of this.

a) Rewrite loops
```python
# Pre(A): A is a list 
# Return b s.t. Post(b, A): b \in B and b iff A has an even # of positive elements
def even_pos(A):
	r_0 = True
	
	i_0 = 0
	
	while i_k < len(A):
		if A[i_k] > 0: r_k+1 = not r_k
		else: r_k+1 = r_k
		
		i_k+1 = i_k + 1
	
	return r
```

b) Trace
We trace however many $k$'s until we stop.
If $A = []$
- $k=0$: $r_0 = T, i_0 = 0$
- 0 < 0 so loop ends. Tragic!

if $A = [-1, -2, -3]$
```
k = 0 1 2 3 
i   0 1 2 3
r   T T T T
```

If $A = [1, -2, 3]$
```
k = 0 1 2 3 
i = 0 1 2 4
r = T F F T
```

c) Validity!
- We check for comparisons, indexing (ensure A is a set and i is an index), "not" operator, and addition (given via $I^V$)

Let $I^V: i \in [0, len(A) + 1) r \in \mathbb B$ 
- Basically you can extend the "standard" invariant. You don't have to show the standard parts for the proof, though.
```python
def even_pos(A):
	# (assume Pre)
	r_0 = True
	i_0 = 0
	# I^V_0: r_o = True \in B
	
	while # Assume I^V_k. Valid comparison since i_K \in Z 
	i_k < len(A): # C_k
		# Valid A[i_k] index since A is a list and
		# 0 <= i_k < len(A) by C_k and I^V
		
		# Valid > since A[i_k] is an integer (A is a set of integers by Pre)
		# Valid if since > returns boolean
		
		# Valid "not" since r_k \in B by I^V
		if A[i_k] > 0: r_k+1 = not r_k
		# else: r_k+1 = r_k
		
		i_k+1 = i_k + 1
		
		# I^V_k+1 == r_k+1 \in B
		# Case: A[i_k] > 0, then r_k+1 = not r_k \in B as not returns bool and r_k is bool
		# Else: r_k+1 = r_k \in B by I^V (IH)
	
	
	return r
```

d) Termination
- Nothing special to show. It terminates "standardly" in that the loop is a for loop

e) Correct return values
From the trace, we notice $r$ has the correct return value for $A[0: i)$. We can let $I^C: r \text{ iff } A[0:i ) \text { has even number of positive elements}$

```python
# Pre(A): A is a list 
# Return b s.t. Post(b, A): b \in B and b iff A has an even # of positive elements
def even_pos(A):
	r_0 = True
	i_0 = 0
	
	# I^C_0: A[0:0) has 0 elements, and therefore has an even number of positive elements and is True = r_0
	
	while # Assume I^C_k === r_k is true iff A[0: i_k) has even >0 #'s
	i_k < len(A): # Suppose C_k
		if A[i_k] > 0: r_k+1 = not r_k
		else: r_k+1 = r_k
		
		i_k+1 = i_k + 1
		
		# I^C_k+1 == r_k+1 iff A[0: i_k+1] = A[0: i_k)A[i_k] has even postiive numbs
		# Case: A[i_k] > 0:
			# Then r_k+1 = not r_k is true iff
			# A[0: i_k] has an "odd" number of positive elements (by I_k) iff
			# A[0: i_k)A[i_k] has an "even" number of positive elements (by case)
		
		Okay i get it
	
	# Loop terminates!
	# i = len(A) by standard parts, and by I^C, r is true iff A[0: len(A)) = A has an even number of positive elements. I.e., Post(r,A)
	return r
```

### 2.
"b" is the 'current largest' and 'a' is the 'second current largest'
#### a)
```python
# Pre(A): A is a list of "distinct" numbers and len(A) >= 2
# Return a s.t. Post(a, A): a is the "second largest" element in A
def second_max(A):
	if A[1] < A[0]: a_0, b_0 = A[1], A[0]
	else: a_0, b_0 = A[0], A[1]
	
	i_0 = 2
	
	while i_k < len(A):
		if A[i_k] > b_k: a_k+1, b_k+1 = b_k, A[i_k]
		elif A[i_k] > a_k: a_k+1, b_k+1 = A[i_k], b_k
		else: a_k+1, b_k+1 = a_k, b_k
		
		i_k+1 = i_k + 1
		
	return a
```
bazinga!

#### b) 
Let's do $A = [2, 1]$ and $A = [1, 2, 4, 3]$ (these both follow Post--distinct and >= 2 size)
```
k = 0
_______________
i = 0
a = 1 
b = 2 
```

```
k = 0 1 2
_______________
i = 2 3 4
a = 1 2 3
b = 2 4 4
```

#### c) Validity
Nothing fancy. We use the standard $I^V$ invariant: $I^V: i \in [2: len(A) + 1) \wedge a, b \in \mathbb R$

```python
# Pre(A): A is a list of "distinct" numbers and len(A) >= 2
# Return a s.t. Post(a, A): a is the "second largest" element in A
def second_max(A):
	# Valid < and indexing since 0 <= 0, 1 <= 2 <= len(A) are valid indicies of number set A
	if A[1] < A[0]: a_0, b_0 = A[1], A[0]
	else: a_0, b_0 = A[0], A[1]
	
	i_0 = 2
	 
	# Valid by standard
	while # Suppose I^V
	i_k < len(A): # C_k
		# A[i_k] is valid by I^V and C_k. 0 <= i_k < len(A).
		# Valid compare since A is a set of numbers and b_k \in R by I^V  
		# Valid if since < returns bool
		if A[i_k] > b_k: a_k+1, b_k+1 = b_k, A[i_k]
		# Valid compare since a_k \in R by I^V
		# Valid if cuz < returns bool
		elif A[i_k] > a_k: a_k+1, b_k+1 = A[i_k], b_k
		else: a_k+1, b_k+1 = a_k, b_k
		
		# Valid standardly
		i_k+1 = i_k + 1
		
		# I^V_k+1 == a_k+1, b_k+1 \in R: 
		# Case: A[i_k] > b_k:
			# a_k+1 = b_k \in R by I^V
			# b_k+1 = A[i_k] \in R (as explained above)
		# Case: A[i_k] > a_k:
			# a_k+1 = A[i_k] \in R
			# b_k+1 = b_k \in R by I^V
		# Else:
			# a_k+1 = a_k \in R
			# b_k+1 = b_k \in R
		# Therefore in all cases, a_k+1 and b_k+1 are real numbers.
	return a
```

#### d)
- It's a normal for-to-while loop, so termination is covered by the "standard case"

#### e) 
We need Post. That is, we need "a" to be the "second largest element" in A.
From the traces we can already say that at any $k$ iteration, the $a$ "is" the second largest element. But what does that look like logically
Maybe like, $\exists s \in R, \forall n \in A[2, len(A)), n \neq max, n > s$ 
- $s$ for second. hmm

Okay, invariant might be: $I^C: b = max(A[2, len(A))) \wedge \forall n \in A[2, len(A)), n \neq b \implies a >n$ 
- plz be close to this
- Okay they just used a lot of "English".
	- What mine really just says is, $b$ is the largest of $A[0, i)$ and $a$ the second largest.
```python
# Pre(A): A is a list of "distinct" numbers and len(A) >= 2
# Return a s.t. Post(a, A): a is the "second largest" element in A
def second_max(A):
	if A[1] < A[0]: a_0, b_0 = A[1], A[0]
	else: a_0, b_0 = A[0], A[1]
	
	# I^C: 
	# Case: A[1] < A[0]
		# Then in A[0: 2) = A[1]A[0], A[0] is the maximum = b_0 and a_0 is the second max
	# Case: A[0] < A[1]
		# Similar to above, but A[1] is the max, which b_0 is, and A[0] is the second max.
	
	i_0 = 2
	
	# Suppose I^C_k == b_k the max and a_k the second max
	while i_k < len(A):
		if A[i_k] > b_k: a_k+1, b_k+1 = b_k, A[i_k]
		elif A[i_k] > a_k: a_k+1, b_k+1 = A[i_k], b_k
		else: a_k+1, b_k+1 = a_k, b_k
		
		i_k+1 = i_k + 1
		
		# I_k+1 == b_k+1 the max and a_k+1 the second max
		# Let's do them cases
		# A[0: i_k + 1] = A[0:i_k]A[i_k]
		# Case: A[i_k] > b_k
			# Then the new max is A[i_k] (b_k+1) and the old max becomes the second max
		# Case: A[i_k] > a_k
			# Then the max stays the max, but the second max updates to a larger value still less than b_k (by cases)
		# Case: else:
			# Nothing changes since the value is less than both the first and second maxes
	return a
	
	# i = len(A) by standard case
	# I^C = b is the max of A[0:len(A)) and a is the second largest. I.e., Post(a, A)
```

### 3. 
This is like bubble sorting but we're just bubbling up 1 value, and it's the smallest one. 
#### a)
```python
# Pre(A_0): A_0 is non-empty list of distinct #'s
# Post(A, A_0): A has same elements as A_0, but reordered so A[len(A) - 1] is the smallest
def put_min_last(A_0):
	i_0 = 0
	
	while i_k < len(A_k) - 1:
		if A_k[i_k + 1] > A_k[i_k]: 
			A_k+1[i_k], A_k+1[i_k + 1] = A_k[i_k + 1], A_k[i_k]
		else: A_k+1 = A_k
		
		i_k+1 = i_k + 1 
		
```

#### b)
We've traced this a million times in Jeg's class 

#### c)
Validity.
We can extend the standard invariant:
$I^V: i \in [0: len(A)) \wedge A \text{ is a number array with length A}$

Okay i am PRETTY sure the answer given is wrong. The pre, doesn't decide how the array $A_k$ changes in further loops. What if $A = 142$ in the loop. Well that would go under the radar.

Otherwise you just explain $A[i_k + 1]$ is valid b/c $1 \leq i_k  + 1 <  len(A)$ by $I^V$ and $A_k$ is a number list. Then $>$ works cuz yes, and $>$ is a bool so `if` works

#### d)
- Termination covered by standard parts

#### e)
This should be easy.
$I^C: A[i]$ is the minimum of $A[0: i + 1)$

```python
# Pre(A_0): A_0 is non-empty list of distinct #'s
# Post(A, A_0): A has same elements as A_0, but reordered so A[len(A) - 1] is the smallest
def put_min_last(A_0):
	i_0 = 0
	# I^C_0: A[0: i_0 + 1) = A[0] whose max is A[0] (its only element)
	
	while # Suppose I^C_k: A_k[i_k] is the minimum for A_k[0: i_k + 1) 
	i_k < len(A_k) - 1: # C_k
		if A_k[i_k + 1] > A_k[i_k]: 
			A_k+1[i_k], A_k+1[i_k + 1] = A_k[i_k + 1], A_k[i_k]
		else: A_k+1 = A_k
		
		i_k+1 = i_k + 1 
		
		# Showing I_k+1: A[i_k+1] is the min of A[0: i_k+1 + 1]
		# Note A_k[0 : i_k+1 + 1) = A_k[0 : i_k + 1)A_k[i_k + 1]
		# Case A_k[i_k + 1] > A_k[i_k]:
			# Then A_k[i_k] is the new min of A_k[0: i_k+1 + 1) so it's bubbled up via swapping
		# Else: The added item is "smaller" than the old minimum, so A_k[i_k + 1] is the new minimum
	
	# i = len(A) - 1 by standard part
	# By I^C: A_k[len(A) - 1] is the minimum of A[i : len(A)). I.e., the Post!

```

#### 4. 
#### a) 
```python
# Pre(x_0, y_0): x_0 \in R and y_0 \in N
# Return z_0 s.t. Post(z, x, y): z \in R and z = x^y (z = 1 if x = y = 0)

def pow(x_0, y_0):
	z_0 = 1
	
	while y_k > 0:
		if y_k % 2 == 1: z_k+1 = z_k * x_k 
		else: z_k+1 = z_k
		
		x_k+1 = x_k * x_k
		y_k+1 = y_k // 2

	return z		
```


#### b)
Yep I made them they are great (No i didn't but I would if I wanted to / had the time)


#### c)
Okay, y needs to be natural (modulus), z and x need to be real
So, $I^V: y \in \mathbb N \wedge z, x \in \mathbb R$

```python
# Pre(x_0, y_0): x_0 \in R and y_0 \in N
# Return z_0 s.t. Post(z, x, y): z \in R and z = x^y (z = 1 if x = y = 0)

def pow(x_0, y_0):
	z_0 = 1
	
	# Suppose I^V_k
	# Valid > since y_k is a number by I^V_k
	while y_k > 0: # C_k
		# Valid % since y_k \in N by I^V_k.
		# Valid == since 1, y % 2 are numbers (% returns number)
		# Valid if since `==` returns boolean
		# Valid * since z_k, x_k are reals by I^V_k
		if y_k % 2 == 1: z_k+1 = z_k * x_k
		else: z_k+1 = z_k
		
		# Valid * since x_k \in R by I^V_k
		x_k+1 = x_k * x_k
		# Valid // since y_k \in N
		y_k+1 = y_k // 2
		
		# We show I^V_k+1: z_k+1, x_k+1 are reals and y_k+1 is natural
		# Case: y_k % 2 == 1:
			# z_k+1 = z_k * x_k \in R since * returns a real
		# Else:
			# z_k+1 = z_k which is a real
		# Also x_k+1 = x_k^2 which is real (^)
		# and y_k+1 = y_k // 2 is a natural
	return z
```

#### d)
We define $V = y$ since it always decreases (as seen in the traces).
We show that $V_{k+1} < V_k$ (not inductive) and that $V = y \in N$ (inductive)
```python
# Pre(x_0, y_0): x_0 \in R and y_0 \in N
# Return z_0 s.t. Post(z, x, y): z \in R and z = x^y (z = 1 if x = y = 0)

def pow(x_0, y_0):
	z_0 = 1
	# V_0: y is a natural by pre
	
	while y_k > 0:
		if y_k % 2 == 1: z_k+1 = z_k * x_k 
		else: z_k+1 = z_k
		
		x_k+1 = x_k * x_k
		y_k+1 = y_k // 2
		
		# V_k+1 = y_k+1 = y_k // 2 < y_k = V_k (b/c of C_k, otherwise y_k//2 < y_k doesn't always hold. I gotta be more careful!)

	return z		
```

#### e) Post time. 
Need to show that z = x^y. That's the "hard part"
- How do we show progress through each loop, though? What is the invariant?
	- Unlike other programs, the Post isn

```python
# Pre(x_0, y_0): x_0 \in R and y_0 \in N
# Return z_0 s.t. Post(z, x, y): z \in R and z = x^y (z = 1 if x = y = 0)

def pow(x_0, y_0):
	z_0 = 1
	
	while y_k > 0:
		if y_k % 2 == 1: z_k+1 = z_k * x_k 
		else: z_k+1 = z_k
		
		x_k+1 = x_k * x_k
		y_k+1 = y_k // 2

	return z		
```
# Notes
- For rewriting
	- Arrays that mutate each loop should have subscripts (look at question $3$)
- For validity:
	- **If** statements
	- Comparisons
	- NOT the loop or $i_{k+1} = i_k + 1$ cuz that is standard
- Traces
	- $i_k$ isn't always 0,1,2,3,4, etc.
- Validity
	- You almost NEVER use the "standard" invariant by itself. You need to extend it to use / prove things about the other variables that change each loop
- Termination
	- For the for-loop-to-while-loop questions, invoke the "standard case"
- Correct Return Value
	- 