### 1.
$n$ seems to be the size

#### a)
The size of $n$ for $count(L, x, s, e)$ is $n = e -s$
For $count(L ,x , s, s + (e-s)//2$), the new size is $= s + m - s = (e-s)//2 = n//2$
For $count(L, x, s + (e - s)//2, e)$, $size = $e - (s + n//2) = e - s - n//2 = n - n//2$

```python
def T(n):
	if n >= 2: return 1 + T(n//2) + T(n - n//2)
	else: return 1
```
You must derive the new sizes passed into the recursive calls with math.
- I look at the "count" code and see what the "n" is when you call $count(L, x, s, s + m)$ and the same for the other one. I replaced $m$ with $n//2$ since it helps write the new size w.r.t the $n$ of the old size. We want new size *form* old size.
	- Old $n$ from $count$ call becomes $n//2$ for the recursive call. That's what we're getting at.

As a recurrence
$$T(n) = \begin{cases}
1 + T(\lfloor{n/2}\rfloor) + T(\lceil n/2 \rceil ) & n \geq 2 \\
1& n = 1
\end{cases}$$
NOO why is it ceil!?
1. It should make intuitive sense that this is a divide-and-conquer algorithm, so it's not outlandish to think that for the first n/2 half, there is another n/2 half (but that one is ceiled)
2. Just... **remember** that $n - \lfloor n / 2 \rfloor = \lceil n/2 \rceil$ for all $n$

#### b)
count(0, 5) = 2
- count(0, 2) = 1
	- count(0, 1) = 1
	- count(1, 2) = 0
- count(2, 5) = 1
	- count(2, 3) = 0
	- count(3, 5) = 1
		- count(..., 3, 4) = 1
		- count(..., 4, 5) = 0

That's a CALL TREE. We ignored the repeated stuff.

T(5) = 9
- T(2) = 3
	- T(1) = 1
	- T(1) = 1
- T(3) = 5
	- T(1) = 1
	- T(2) = 3
		- T(1) = 1
		- T(1) = 1
That's the tree alright.

Call tree can be written the "branch"-y way as well

#### c)
"Without performing any additions" means keeping `1+1` as is and not doing `2`

T(5) = 1 + (1 + 1 + 1) + (1 + (1) + (1 + 1 + 1))
- T(2) = 1 + 1 + 1
	- T(1) = 1
	- T(1) = 1
- T(3) = 1 + (1) + (1 + 1 + 1)
	- T(1) = 1
	- T(2) = 1 + 1 + 1
		- T(1) = 1
		- T(1) = 1
That's it!

But also this:
![[I dont see the point of this running-time tree.png]]
I don't get why this is useful. It's very... obvious.

This is a "running-time tree". It shows the work done per node and how it adds up to get the total amount of work.

#### d)
T(16) = 1 + T(8) + T(8) (#1)
$= 1 + 2T(8)$
$= 1 + 2(1 + 2T(4))$
$= 1 + 2 + 4T(2)$
$=1 + 2 + 4(1 + 2T(1))$
$=1 + 2 + 4 + 8T(1)$
$=1 + 2 + 4 + 8$
Looks very geometric to me >:)

$T(2^k) = 1 + 2T(2^{k-1})$ (Unroll #1)
$= 1 + 2 + 4T(2^{k-2})$ (Unroll #2)
$= 1 + 2 + 4 + 8T(2^{k-3})$ (Unroll #3)

$= 1 + 2 + 4 + \dots + 2^{i-1} + 2^iT(2^{k-i})$ for $i$ unrolls
$=1 + 2 + 4 + \dots + 2^{k-1} + 2^k$
Wow it's LITERALLTY a geometric series to the bone
$=\frac{2^{k+1} - 1}{2 - 1}  = 2^{k+1}-1$ using a special formula given in [[Exercise Set 9#g)|Question 2]]


For $n =2^k$, then the recurrence is 
$$T(n) = \begin{cases} 1 + 2\;T(n/2) & n \geq 2\\
1&n = 1
\end{cases}$$
The tree "they" drew was just a line. Literally 
T(16) -> T(8) -> T(4) -> T(2) -> T(1)
Which I mean I guess so? But there's 2 recursive calls, not $1$, so that's a bit confusing ?

### 2.
#### a)
Okay I wasn't expecting *that* as the answer. It's literally 1 node going to 3 nodes all going to 3 nodes each
- Shows T(9) splitting to 3 T(3)'s splitting to 9 T(1)'s
#### b)
Running-time tree!!
First level: 1 work (sizes are 9)
Second: 3 work (sizes are 3)
Third: 9 work (sizes are 1)

#### c)
That's what I did in my head basically.

The RT tree is the same. The sizes of each node is the same. The # of nodes is 1, 3, 9 respectively, and the work of each level is also 1, 3, 9 respectively.

#### d)
$T(9)$ counts the total times added up from all 3 levels?
But since the work done is $1$ per node, it *also* represents the number of nodes in the tree, too.
- Bruh this is not the obvious answer (and my previous answer was right `😒 x1`)

#### e)
$T(9) = 1 + 3T(3)$
$= 1 + 3(1 + 3T(1))$
$1 + 3^1 + 3^2$

$T(81) = 1 + 3T(27)$
$= 1 + 3(1 + 3T(9))$
$= 1 + 3(1 +  3(1 + 3T(3)))$
$=1 + 3(1 + 3(1 + 3(1 + 3T(1))))$
$=1 + 3(1 + 3( 1 + 3 + 9))$
$=1 + 3( 1 + 3 + 3^2 + 3^3)$
$=1 + 3 + 3^2 + 3^3 + 3^4$

#### f)

$T(3^k) = 1 + 3T(3^{k-1})$
$=1 + 3(1 + 3T(3^{k-2}))$
$= 1 + 3 + 3^2T(3^{k-2})$ (2nd unroll)

Running-time tree time! Alternatively they just don't include the symbol for the call but I'LL do it!

$T(3^k): 1$
- $T(3^{k-1}):+1$
- $T(3^{k-1}):+1$
- $T(3^{k-1}): +1$
	- (Bigg $3^{k-2}$ triangle) x3: +1 each

Also
- Sizes: $3^k, 3^{k-1}, 3^{k-2}, \dots$
- Number of nodes: $1, 3, 9, \dots$
- Time: $1, 3, 9, \dots$

Then $T(3^k) = 1 + 3 + 3^2 + \dots + 3^{k-1} + 3^{k}$  after $k$ unrolls
- Number of "terms" is the number of levels.
- The term itself represents the number of nodes at each level
	- AND FOR THIS CASE IT"S ALSO TIME
	- Bruh this is so aids. When it clearly wants number of notes, it answers with "time". When it clearly seems to be asking for time, it answers with "# of nodes" `😒 x2`
- The last level represents the number of leaves (the last level)


#### g)
We know $T(3^k) = \frac{3 \cdot 3^{k} - 1}{2} \in \Theta(3^k)$ (we also know that $3^k$ dominates over all other terms so this reaffirms that)

Also $T(n) \in \Theta(n)$ as a consequence! 

So $g(n) = n$. That is all.


### 3.
Redoing a)

We'll use input T(4)
It splits 
1 to 3 to 9 
That is all

Redoing b)

The RT has sizes 4, 2, 1
it looks like 
1
- +1
	- +1
	- +1
	  +1
- +1
	- etc.
- +1
	- etc.

You get the idea.

for c) we show the "node # and time"

For size 4, 2, 1, the # of nodes is 1, 3, 9
Time is `4*1`, `2*3`, and `1*9`


e)
Let's unroll T(4):
$T(4) = 4 + 3T(2)$
$= 4 + 3(2 + 3T(1))$
$=4 + 6 + 9$ ?
$=2^2 + 2^13^1 + 2^03^2$

$T(16) = 16 + 3T(8)$
$= 2^4 + 3(8 + 3T(4))$
$=2^4 + 3\cdot 2^3 + 3^2T(4)$
$=2^4 + 3\cdot 2^3 + 3^2(2^2 + 2^13^1 + 2^03^2)$
$=3^02^4 + 3^12^3 + 3^22^2 + 3^32^1 + 3^42^0$
It's turning the 2's into 3's each level!
$=2^k \cdot \frac{3}{2}^k + 2^k \cdot \frac{3}{2}^{k-1} + \dots$


f)
The tree is like

Size: $2^k, 2^{k-1}, 2^{k-2}, \dots$
Number of nodes: $1, 3, 9, \dots$
Time: $2^k, 3^1 2^{k-1}, 3^22^{k-2}, \dots$

g)
$\frac{3 \cdot 2^3}{2^4} = \frac{3}{2}$ is the ratio, which is positive (bottom heavy!)
$T(2^k) = 2^k(1 + r + r^2 + \dots + r^k) = 2^k \cdot \frac{\frac{3}{2}^{k+1} - 1 }{3/2 - 2/2}$ 
$=2^k \cdot (3 \cdot 2 \cdot \frac{3}{2}^k - 2)$
$\in \Theta(3^k)$!!
So $T(2^k) \in \Theta(3^k)$
Now we need the transform such that $g(2^k) =  3^k$ to write this $\Theta$ in terms of $n$!
- The only way to change bases like that is with exponentials!
- $(2^k)^x = 3^k$
- $\implies kx = k\log_2 3$
- $\implies x = \log_2 3$
- So $g(n) = n^{\log_2 3}$
Okay I'm kind of goated >:)

So that means $T(n) \in \Theta (g(n)) = \Theta(n^{\log_2 3})$

FINALLY

### 4.
oh god
![[Question 4 Exercise Set 9 236.png|800]]

#### a)
Size 9 was chosen because of the $a$ factor. Let's do a number like $a^2$
The tree would start at 1
Then split into $a$ different pieces
and those pieces split into $a$ more pieces

This one will have a nicer geometric series since size and # of recursive calls is same
#### b)
It would just be
- 1
	- +1
		- +1
		- (...a times...)
		- +1
	- .... (a times)
		- same as above
	- +1
		- same as above
You get the idea


#### c)
For size $a^2, a^{1}, 1$
There will be $1$, $a$, $a^2$ nodes
And the time per level is also $1, +a, +a^2 \cdot T(a^{k-2})$

#### d)
Time = # of nodes

#### e) and f)
Let's just unroll $a^k$ to get this over with
$T(a^k) = 1 + a \cdot T(a^{k-1})$
$=1 + a(1 + aT(a^{k-2})))$
$= 1 + a + a^2T(a^{k-2})$
This is so geometric-series-coded it's unbelievable
$=1 + a + a^2 + \dots + a^k$

And the RTT looks like

$T(a^k): 1$
- T(a^k-1): +1
	- $a$ BIG triangles with $a^{k-2}$
- ...a times...
- T(a^k-1): +1
	- $a$ BIG triangles with $a^{k-2}$

#### g)
The ratio is absolutely just $a$
$T(a^k) = \frac{a \cdot a^k - 1}{a-1} \in \Theta (a^k)$
and $g(a^k) = a^k \implies g(n) = n$
So $T(n) \in \Theta(n)$ 


### 5.
Doesn't seem so bad!
$x = (3/2)^k \implies f(x)$ thing
$f$ is always increasing or same
$f(x + 1) \geq f(x)$

WTS $f \in O(n^2)$ 

Definition of $O$ is as follows: $O(g(x)) = \set{f(x) : \exists c_1 \text{ s.t. } \forall n \geq n_0, f(n) \leq c_2f(n) }$
- Theta is a "tight" bound. For instance, $x, 5x^2, 43x^3 \in O(x^3)$ BUT only $43x^3 \in \Theta$
- "Big O gives the set of functions who grows no faster than the passed one."

Let $n \geq 1$ be arbitrary (we pick $n_0 = 1$)
Let $m$ such that $m = (3/2)^k \geq n \geq (3/2)^{k-1}$ for some $k$
$\implies 3/2 n \geq (3/2)^k$
$\implies 3/2n \geq m \geq n$

We have $f(n) \leq f(m)$ by non-decreasing
$=9m^2 - 8m^{\log_{3/2} 2 }$ by def'n of $f$ 
$\leq 9m^2$ by algebra
$\leq 9(3/2n)^2$
$\leq 9 \cdot 9/4 \cdot n^2$

so $c = 9 \cdot 9/2$ witnesses $f \in O(n^2)$

Okay... I get it now...
I can do this for sure next time. 

#### Trying again!
We want to show for all $n \geq n_0$, exists c such that $f(n) \leq c \cdot f(n)$

Let $n\geq 1$ be arbitrary. Let $x$ be the smallest power of $3/2$ such that $x=(3/2)^k \geq n$ 
$\implies (3/2)^k \geq n \geq (3/2)^{k-1}$
$\implies 3/2 n \geq (3/2)^k = x$

Then
$f(n) \leq f(x)$
$= f( (3/2)^k)$
$\leq  f(3/2n)$
$=\dots$
The rest is simple algebra

### 6.
Okay similar set up to before!

PROOOF TIMEE
> For each $x = 4^k$, $f(x) = \dots$
> For any $x$, we can say that $4^k \leq x \leq 4^{k-1}$ for some $k$
> $\log_6 7$ is just barely bigger than $1$ 

Proof time:
Let $n \geq 1$ be arbitrary.
Let $x \geq n$ such that $x = 4^k \geq n \geq 4^{k-1}$ for some $k$ 
$\implies 4n \geq 4^k = x$ 

Then $f(n) \leq f(x)$
$= 5x^{\log_6 7} + 8$
$\leq 13 x^{\log_6 7}$
$\leq 13(4n)^{\log_6 7}$
$\leq 13\cdot 4^{\log_6 7} \cdot n^{\log_6 7}$
Boom.
$f \in O(n^{\log_6 7})$ with witness $c = 13\cdot 4^{\log_6 7}$

BRUH WHY WAS THAT SO ANNOYING

### 7.

We foil?
$(x_1 \cdot 10^n + x_0) \cdot (y_1 \cdot 10^n + y_0)$
$= x_1y_1 \cdot 10^{2n} + x_1y_0\cdot 10^n + x_0y_1 \cdot 10^n + x_0y_0$
$=z_1\cdot 10^{2n} + z_0 +  10^n(x_1y_0 + x_0y_1)$
$= \dots + 10^n( z_2 - z_0 - z_1)$


Because $z_2 = x_1y_1 + x_1y_0 + x_0y_1 + x_0y_0$
$(x_1y_1 + x_1y_0 + x_0y_1 + x_0y_0) - x_1y_1 - x_0y_0 = x_1y_0 + x_0y_1$
$= z_2 - z_0 - z_1$


RAAAAHHH
WHY WAS THIS PSET SO AIDS
