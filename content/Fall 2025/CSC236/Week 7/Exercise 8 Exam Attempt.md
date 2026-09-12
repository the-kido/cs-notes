a) For -> While
- Steps:
	- Create an "i" index.
	- Set it to the start of the range for the for loop.
	- Increment $i$ at the end of the while loop
	- ???
	- Profit
- $I^V$ is the "standard" invariant. It has both that $i_k \in \mathbb Z \wedge a \leq I_k \leq b$ where $a, b$ are the bounds of the loop. Also can be said that $I^V: i \in [a : b+ 1)$ in the "other" notation.
b) Iterate over some $k$. See how the local variables react in a table
c) Prove *validity* (not of the structure; it means showing code is all legal)
d) Prove termination (might require a $V$ variant to show decreasing. If while->for situation, you can site "standard parts")
e) You use all of $Pre \implies (\neg C \wedge I \implies Post)$ to show Post holds at the end.

### 1.
#### a)
```python
# Pre(A): A is a list of numbers
# Return b s.t b \in B and b iff "A contains an even # of positive elements"
def even_pos(A):
	r_0 = True
	i_0 = 0
	
	while 
	  i_k < len(A): # (C_k)
		if A[i_k] > 0:
			r_k+1 = not r_k
		else:
			r_k+1 = r_k
		
		i_k+1 = i_k
	return r
```

That should be good?
- Mistake: $A$ is not mutated, so you don't index it
- Mistake: Before the loop init, the $r, i$ were defined as $r_k = True$ and $I_k = 0$. Should have subscript $0$ instead!

#### b)
Traces
```
A = [2, -4, 6]

k = 0 1 2 3
r = T F F T
i = 0 1 2 3
```
Nice
Okay that's all I'm doing

#### c)
Validity time. Usually i do this in code but this time I'll try to do it outside.
We need a $I^V$ for "validity". $r$ must be a boolean for the `not` operator. 
From the standard invariant we also want that $i \in [0 : len(A) + 1)$ 
- Has to be one more than $len(A)$ because python loops go one above the loop bound.
In total, $I_V: r \in \mathbb B \wedge i \in [0: len(A) + 1)$

Then we show 1. It's proved and 2. that it shows the code is valid:

`[Assume Pre]`
$I^V_0: r_0 = True \in B$ holds
Assume $I_k$. The condition is $C_k$
- Valid A[i_k] indexing since $0 \leq i_k < len(A)$ by C_k and $I_k$
- Valid $>$ since $A$ is a list of numbers by Pre.
- Valid $if$ since $>$ returns bool
- Valid `not` since $r_k \in \mathbb B$ by $I_k$

Then $I_{k+1}$ holds since
- First part is covered by "standard parts"
- Then:
	- In the first if, $r_{k+1} = not r_k$. By post of `not`, $r_{k+1} \in B$
	- In the else, $r_{k+1} = r_k \in N$ by $I_k$
- Therefore $r_{k+1} \in B$

#### d)
Covered by "standard parts". It's just your average for loop, which always terminates

#### e)
We now show the Post.
We wanna show $b \leftrightarrow A[0: len(A)]$ contains an even number of positive elements

We can say that $A[0: i]$ should do that (by the end of the loop, $i = len(A)$)
Our $I^C$ is simply that $r \in B$ is returned and that $b$ iff $A[0:i]$ contains even number of positive elements

Proof time:
$I^C_0: r_0 = True$ and $A[0:0)$ contains $0$ positive elements (so it's positive!)
Assume $I^C_k$ 
- $I^C_{k+1}:$ $r_{k+1} \in B$ and $r_{k+1}$ iff $A[0:i_{k+1}]$ has even number of positive elements holds!
- $r_{k+1} \in B$ as shown by $I^V$
- Case: $A[i_k] > 0$
	- Then $A[0: i_k)$ contains an odd # of positive elements iff $r_k$ 
#todo maybe try to phrase this differently? I don't like this `iff` questions :(

### 2.
Gotta go fast
#### a)
```python
def second_max(A):

	if A[1] < A[0]:
		a_0, b_0 = A[1], A[0]
	else:
		a_0, b_0 = A[0], A[1]
	
	i_0 = 2
	while i_k < len(A):
		if A[i_k] > b_k: 
			a_k+1, b_k+1 = b_k, A[i_k]
		elif A[i_k] > a_k:
			a_k+1 = A[i_k]
			b_k+1 = b_k
		else:
			a_k+1, b_k+1 = a_k, b_k
		
		i_k+1 = i_k + 1
	return a
```

traces yeyeye

#### c)
Validity.
- We need to show $i$ is a valid index of $A$. We need a_k, b_k to be numbers
- $I^V: a, b \in \mathbb N \wedge$ the standard parts

Proof:

Valid $<$ since A[1], A[0] are numbers by Pre. Valid if since $<$ boolean yea.

$I_0: a_0, b_0$ are both set to values of $A$, which is a number list by Pre, so they are also numbers. 
Also yeah $I$ is geq 2 and leq len(A) or whatever by Pre again

Assume $I_k$ and $C_k$
- Then $A[I_k]$ is valid by $I_k, C_k$
- $>$ valid since $a_k, b_k$ is a number by $I_k$
- If, elif valid cuz $>$ return bool
- and the rest is standard parts stuff

#### d)
Covered in standard parts yet again

#### e)
For valid return, we need to show:
$I^C(A, i_k, a_k, b_k): a_k$ is the second-largest element in $A[0: i_k)$ 

Proof time.

$I^C_0$ holds: If the second element is less than the first, then the second element is the second-largest (behind the first element). Therefore $a_0 = A[1]$ satisfies this.
Similar reasoning holds for the else. If $A[0]$ is smaller than $A[1]$, then within $A[0: 2] = [A[0], A[1]]$, $A[1]$ is the first biggest, and $A[0]$ is the second biggest, and $a_0 = A[0]$ as it should

Anyway...

Assume $I^C_k$ and $C_k$
- Then $I^C_{k+1}$ holds because
- $a_k$ is the second-largest element of $A[0: i_k]$ by $I_k$, and
	- if $A[i_k] > b_k$, then there is a "newest" biggest value at the end of the list, so $b_k+1$ is set to the newest biggest value, and $a_k$ is the second largest
	- if $A[i_k] > a_k$
		- Then there is a value smaller than $b_k$ but greater than $a_k$, which means when $a_k$  assumes this new value, it'll be second largest again
	- else
		- Nothing changes, There are no elements bigger than $a_k, b_k$.

Then after the loop, we have $\neg C$ and $I$ 
Then $I_k = len(A)$.
WTS $Post$: $a$ is the second largest element of $A[0: len(A)]$

By $I$, we have $a$ is the second largest of $A[0: i_k] = A[0: len(A)]$ as required.

Nice I think I did it!

### 3.
#### a)
```python

def put_min_last(A_0):
	i_0 = 0
	
	while i < len(A) - 1:
		if A_k[i_k + 1] > A_k[i_k]:
			A_k+1[i_k] = A_k[i_k + 1]
			A_k+1[i_k + 1] = A_k[i_k]
		else:
			A_k+1 = A_k

		i_k+1 = i_k + 1
```
No return to be had

#### b)
For the traces, you can try using different arrays and see how they change over $k$ and $i$

#### c)
It's all indexing and ensuring $A$ is a number array.
$I^V$: A is a number array and standard parts (for indexing)

Ignoring the standard parts of the proof, we show
$A_0$ is the thing by Pre
$A_k[i_k + 1]$ is valid cuz $i_k$ is in 0 to len(A) and i_k < len(A_k) - 1 by C_k. It works out
Valid > as well, and so valid if too.
Easy peasy

#### d)
Nothing fancy

#### e)
Since $i$ goes up to $len(A) - 1$, we have to adjust the Post a bit to consider that:

We show $I^C: A[0: i + 1]$ contains the same elements as A_0, but reordered so $A[i]$ is the smallest

$I^C_0$ holds since $A[0:1]$ has only one element, and so $A[i_0] = A[0]$ will always be the smallest

Assume $I^C$ and $C_k$
- Then $I^C_{k+1}$ holds because
- $A[i_k]$ is the smallest element of $A[0: i + 1)$ by $I_k$. If $A_k[i_k+1]$ is greater than $A_k[i_k]$, then 
	- $A_{k+1}[i_k] = A_k[i_k + 1]$
	- yeah no brain sugar for this 
	- #todo maybe if you want to.

