#### Summary:
`T(n): code` is your runtime function.
$T(n)$ is your recurrence for runtime. Plug any $n$ and "unroll" o get the time.
- Closed-form of this is desirable. Found from unrolling. This gives a "guess" but we must prove it. #todo like with a formal $\Theta$ proof?
- To find the recurrence (in case form) consider
	- 1. The work done outside of recursive calls. What is the $\theta$?
	- 2. The work done in each recursive calls (add them together in the recurrence). Note the input of the recursive calls should be smaller (be careful what the exact input is!)
- We can rewrite $T(n)$ to something like $T(2^k)$ to make it easier to unroll.
	- Then you rewrite $T(2^k)$ w.r.t $n$ again (with some simple algebra)
	- And it can give us a close-form. Using the fact of non-decreasing, you can fill in the blanks
		- Make sure to change any conditions in the piece-wise if you do rewrite it
- For geometric series there are some commonalities:
	- We don't need $T(2^k)$ to find $\Theta$. We can use geo series.
		- For diagram we do kinda need it though lol
	- If $r > 1$ then the tree is "bottom heavy" so the $\Theta$ depends on the # of leaves. To know the # of leaves depending on input, you find what $2^k$ input becomes via the diagram. If it's, like, $4^k$ at the bottom, then $(2^k)^x = = 4^k \implies x = 2$
	- $\implies$ number of leaves is $n^2$ 
	- That means you effectively have the start and end of the series: $T(n) = n + \dots + n^2$. The middle is easy to find with unrolling
	- In this case, the geo series is bot-heavy, so the # of leaves is more important
- `Karasuba`'s algo is similar to the above, but difference is 3 recursive steps instead of 2. Still bottom heavy, but the # of leaves is $n^{\log_2 3}$ instead.
- And it gives a general theorem which i mean yeah. I'm not memorising that

Generally: $n - n//2 = \lceil n / 2 \rceil$ and $n//2 = \lfloor n / 2\rfloor$

#todo Also redo the [[Lecture 2 (11-07)]] proof (the one i re-did. I wanna redo the redo)

# Okay actual question time
### 1.
#### a)
```python
def T(n):
	if n >= 2: return 1 + count(n // 2) + count(n - n//2)
	else: return 1
```
Nice
One of them is floor. other is ceil.

TRACE. And then also call tree. Okay. I'll do trace for first, and call tree for second

`x = 2. L = [2, 7, 1, 8, 2]`

count(0, 5) = 2
- count(0, 2) = 1
	- count(0, 1) = 1
	- count(1, 2) = 0
- count(2, 5) = 1
	- count(2, 3) = 0
	- count(3, 5) = 1
		- count(3, 4) = 0
		- count(4, 5) = 1
Trace

T(5)
- T(2)
	- T(1)
	- T(1)
- T(3)
	- T(1)
	- T(2)
		- T(1)
		- T(1)


#### c)
nah

#### d)
T(16) = 1 + 2T(8)
= 1 + 2(1 + T(4) + T(4))
= 1 + .....?
yeah u keep going until you get 31

$T(2^k) = 1 + 2T(2^{k-1})$
$=1 + 2(1 + 2T(2^{k-2}))$
$1 + 2 + 4(1 + T(2^{k-3}))$
$= 1 + 2 + 2^2 + 2^3 + \dots + 2^iT(2^{k-i})$
$=1 + 2 + 2^2 + \dots + 2^k$
and u use the other geo formula: $\frac{r^{k+1} - 1}{r-1} = 2^k - 1$
boom.

Then $T(n) =$
$1 + 2T(n/2)$ for n > 1 and 1 otherwise
so goated. so unbelievably goated.

### 2.
#### a)
T(9)
- T(3)
	- ....
- T(3)
	- ...
- T(3)
	- ...
Expands fast.

#### b)
It's just size and the RT tree

sizes: $9, 3, 1$
RT tree +1, +1x3, +1x9

#### c)
Record total contribution. It would be 9 each time
- NO. Of course not, you silly billy. Look at the work done per step!

sizes: 9, 3, 1
RT Tree: +1, +1x3, +1x9
`#-of-nodes`: 1, 3, 9
`time`: +1, +3, +9

#### d) 
T(9) is also the # of nodes in the tree (alongside # of leaves)

#### e)
$T(9) = 1 + 3T(3)$
$=1 + 3(1 + T(3))$
$= 1 + 3( 1 + 3(1 + 3)))$
um?
$= 1 + 3 + 9 + 27$

Same for T(81)

#### f)
$T(3^k) = 1 + 3T(3^{k-1})$ 
$= 1 + 3(1 + 3T(3^{k-2}))$
$=1 + 3 + 3^2T(3^{k-2})$ <--- Second unroll


Sizes: $3^k, 3^{k-1}, 3^{k-2}, \dots$
RTT: +1, +1x3, +1$\times T(3^{k-2})$, ...
num-nodes: 1, 3, 3^2, ...
time: +1, +3, +3^2, ...

For any instance of $T(3^{k-2})$, replace with fat triangle.

Number of terms = # of *levels* in the tree. 
Each term corresponds to the time added or the number of nodes in that level.

#### g)
Well the whole thing $T(3^k) = \frac{3^{k+1} - 1}{2} \in \Theta(3^k)$ (cuz that's the fastest growing term there)
And now we need a $g$.

Since $g(3^k) = 3^k$, $g(n) = n$ works just fine. When the input is of size $3^k$, the theta is also $3^k$. It's a linear relation.

Which means $T(n) \in \Theta(n)$
- In other words, the # of leaves. And since # of leaves = input, you get $n$

### 3.
#### a)
Nah. Shape is obvious. Splits into 3 again

#### b-c)

Sizes: $8, 4, 2, 1$
RT Tree: `+8, +4x3, +2x9, +1x27`
num-nodes: `1, 3, 9, 27`
time: `+2^3, +2^2x3, +2x3^2, +1x3^3`

You can remake that more generally with input size $2^k$ if you feel like it.

#### no d). Also e) is easy

#### f)
$T(2^k) = 2^k + 3T(2^{k-1})$
$=2^k + 3(2^{k-1} + 3T(2^{k-2}))$
$=2^k + 3\cdot 2^{k-1} + 3^2\cdot T(2^{k-2})$

Ratio is clearly $r=3/2$. Should be bottom-heavy. So the # of leaves is $3^k$.
$2^x = 3 \implies x = \log_2 3$
so the # of leaves given $n$ input is $n^{\log_2 3}$ which makes sense!
And that's also the theta. yep.

### 4. is easy. We go to 5.
Okay because of the non-decreasing we can assume there is an $x$ that is a power of 3/2
For Big O, it's a bound below:
$\forall n, n \geq n_0, \exists c \in \mathbb R \text{ s.t. } f(n) \leq cf(n)$ 


Proof:
Let $n \geq 1$ be arbitrary. Then by non-decreasing of $f$, there is an $x$ smallest power of 3/2 greater than $n$ such that $x \geq n$ and $(3/2)^{k-1} \leq n \leq (3/2)^k = x$ for some $k$
$\implies (3/2)^k \leq (3/2)n \leq x$

$f(n) \leq f(x)$
$\leq 9x^2$ (cuz the other half is all $> 0$)
$\leq 9(3/2 \cdot n)^2$ 
$= 9 \cdot (9/4) n^2$
$= \frac{81}{16} n^2$
So $f \in O(n^2)$ with witness $c = 81/16$ \[and $n_0 = 1$]



### 6.
More examples! I mean why not. It's not like I need to spend my time studying anything else anyways. Oh... well i guess except for...
let's not worry about that

Okay similar proof.

Proof:
Let $n \geq 1$ be arbitrary. Let $x$ be the smallest power of $4$ such that $x \geq n$ and $4^{k-1} \leq n \leq 4^{k} = x$
$\implies x \leq 4n$ 

Then $f(n) \leq f(x)$
$= 5 (4n)^{\log_6 7} + 8 \cdot (4n)^{\log_6 7}$ 
$= 13 (4n)^{\log_6 7}$

$=(13 \cdot 4^{\log_6 7}) n^{\log_6 7}$
The above witnesses along with $n \geq 1$ 
yeppers


