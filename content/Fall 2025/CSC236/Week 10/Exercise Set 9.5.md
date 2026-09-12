### 1.
#### a)
We want $T(n)$

n=1 case is easy. It's just 1 work
But the "else" is split into two returns. God forbid we have 3 cases in our recurrence, so we need to somehow consolidate them.
If the $L[m - 1] < L[m]$, means $L[m]$ is larger so we look in the smaller half
Likewise for the other case. Regardless we are doing "ONE" of them per run, so we can say the time for the `else` is the "maximum" between the two recursive calls BECAUSE this is the *worst-case* runtime! The worst case takes the longest, uses the maximum time, by choosing the wrong choice every time. 

Also the work done in the call is $\Theta (n)$ because of the slicing
$$\begin{cases} 
1 & n = 1\\
n + \max {T(\lfloor n/2 \rfloor ), T(\lceil n/2 \rceil)} & n \geq 2
\end{cases}$$

#### b)
The nice values are when the inputted list is of size $n = 2^k$
So $$T(n) = T(2^k) = \begin{cases} 
1 & n = 1\\
n + T(n/2 ) & n \geq 2
\end{cases}$$
There is no worst case. We'll always remove one half of the work each time.

#### c) but wrong

Size: $2^k, 2^{k-1}, 2^{k-2}$

RTT: 
1:
- +1
	- Two Death triangles
- +1
	- Two Death triangles

Number of Nodes: $1, 2, 4, \dots$

Time: $1 \cdot 2^k, +2 \cdot 2^{k-1}, +2^{k-2} \cdot T(2^{k-3})$

#### c) but correct
Obvious mistake: There is only $1$ recursive call each call.
What is wrong with me

Size: $2^k, 2^{k-1}, 2^{k-2}, \dots, 1$
RTT:
- $2^k, + 2^{k-1}, +2^{k-2},\dots, 1$
Number of Nodes: $1, 1,1, \dots, 1$ 
- No splitting going on!
Time: $2^k, +2^{k-1}, +2^{k-2}, + \dots, 1$

#### d)
Top-heavy. The most work is done at the start. Every subsequent effort will always pale in comparison to the magnitude of the first 📃✒️🔥

#### e)
Well we know $r < 1$ for sure:

$T(2^k) = 2^k + T(2^{k-1})$
$=2^k + 2^{k-1} + \dots$
$r = 1/2$

Alternatively:
$T(n) = n + T(n/2)$
$= n + n/2 + T(n/4)$
$= n + n/2 + n/4 + \dots$
Although this isn't as accurate. It's sloppy!
#### f)

Since $T(2^k) \in \Theta(2^k)$, $T(n) \in \Theta(n)$

### 2.
Okay time to LOCK IN!!!

The for loop goes from $0$ to $n - n//3 = 2n//3$ 
And for all of those items, it goes from $n//3$ to $n$ which is another $2n//3$ 
- So in total that's like 4n^2//9 work?
- $\Theta(n)$ there

Then the splitting from 0 to n//3 is $n$ work. Twice!
Two recursive calls are made:
- One goes from 0 to n//3
- the other goes from $n - n//3$ to n
	- $n - (n - n//3) = n//3$
- I'm not scared of the floors and ceilings any more...
$$
T(n) = \begin{cases}
1 &n = 1, 2 \\
n^2 + 2T(\lfloor n/3 \rfloor) & n \geq 3
\end{cases}
$$

#### b)
Nice values are when $n = 3^k$
$$
T(n) = \begin{cases}
1 &n = 1, 2 \\
n^2 + 2\;T(n/3) & n \geq 3
\end{cases}
$$

#### c)
OKAY I CAN DO THIS
WFHWAIPFHAWIUOHF

Size: $3^k, 3^{k-1}, 3^{k-2}, \dots 1$

RTT:
- $3^{2k}$
	- $+3^{2(k-1)}$
		- $\dots$
			- $1$
			- $1$
	- $+3^{2(k-1)}$

Number of Nodes: $1, 2, 2^2, \dots 2^k$

Time: $3^{2k}, + 2 \cdot 3^{2(k-1)}, + 2^2 \cdot 3^{2(k-2)}, \dots, 2^k$
#### d)
Number of leaves is $2^k$ when there is $3^k$ as input.
For each $3$ input, $2$ leaves are given.
$3^x = 2$
$x = \log_3 2$

That means:
$(3^k)^{\log_3 2} = 2^k$ = number of leaves
$\implies n^{\log_3 2}$ = number of leaves w.r.t $n$!
Also definitely top-heavy. Root dominates in time

#### e)
$T(n) = n^2 + 2T(n/3)$
$= n^2 + 2(n^2/3^2 + T(n/9))$
$=n^2 + n^2\frac{2}{9} + 2(n^2/9^2 + T(n/81)$
$=n^2 + n^2\frac 2 9 + n^2 \frac{2}{9^2} + \dots$

Ratio *should* be $r = \frac 2 9$

#### f)
Clearly $T(n) \in \Theta(n^2)$ because top-dominating.
### 3.
a)
First thing to note is that $t = \lfloor n/3 \rfloor$ and $s = \lfloor (n+2)/3 \rfloor = \lceil n/3 \rceil$ (as given in the question, thankfully!)

a: `floor(n/3) - 0 = floor(n/3)`
b: `(floor(n/3) + ceil(n/3)) - floor(n/3) = ceil(n/3)`
c: `n - (n - ceil(n/3)) = ceil(n/3)`
d: `ceil(n/3) + floor(n/3) - ceil(n/3) = floor(n/3)`

> Figuring out the floor and ceiling debacle
> `n//2` in code $= \lfloor n/2 \rfloor$ in math *always*
> 
> `n - n//2` in code $= \lceil n /2 \rceil$ BY DEFINITION!
> Indeed $n - \lfloor n/2 \rfloor = \lceil n/2 \rceil$ and that's just a *fact* you have to know. 

Okay that was annoying

$$T(n) = \begin{cases}
1& n = 0, 1\\
n + 2T(\lfloor n/3 \rfloor) + 2T(\lceil n/3 \rceil)& n \geq 2
\end{cases}$$

#### b)
For $T(n) = 3^k$ 
$$T(n) = \begin{cases}
1& n = 0, 1\\
n + 4T(n/3) & n \geq 2
\end{cases}$$
#### c)

Size: $3^k, 3^{k-1}, 3^{k-2}, \dots, 1$

RTT:
- $3^{k}$
	- $3^{k-1}$ 
		- $\dots$ 
			- 1
			- 1
			- 1
			- 1
	- $3^{k-1}$ 
	- $3^{k-1}$ 
	- $3^{k-1}$ 
...you get the idea

Number of Nodes: $4^0, 4^1, 4^2, \dots, 4^k$ 

Time: $3^k4^0, +3^{k-1}4^1, +3^{k-2}4^2, \dots, +1\cdot 4^k$

#### d)
The input $3$ becomes output $4$. This is bottom-heavy.
$n^x = (3^k)^x = 4^k$
$\implies kx = k \log_3 4$
$\implies x = \log_3 4$

In particular, to solve, $3^x = 4 \implies x = \log_3 4$
so for each $n$ length in the input array, the output is $\log_3 4$ leaves

Number-of-leaves: $4^k$

#### e) and f)
$T(n) = n + 4T(n/3)
$=n + 4(n/3 + 4T(n/9))$
$=n + 4/3n + 16(n/9 +4T(n/27))$
$=n + 4/3n + 16/9n + 64(n/27 + T(n/81))$
$r = 4/3 > 1$ so this is bottom-heavy.
Means the $\Theta$ class is $n^{\log_3 4}$

### 4.
#### a)
$t_1(2^k) = 2^k + t(2^{k-1})$
$=2^k + 2^{k-1} + t(2^{k-2})$
$=2^k + 2^{k-1} + 2^{k-2} + t(2^{k-3})$
$=\dots = 2^k + 2^{k-1} + \dots + 2^{k-(i-1)} + t(2^{k-i})$
$=\dots = 2^k + 2^{k-1} + \dots + 2^{k-(k-1)} + t(2^{k-k})$
$= 2^k + 2^{k-1} + \dots + 2^{1} + 1$
> We can just reorder this the "other" direction to get a nicer looking geometric series. But it doesn't matter when getting the closed-form because the result will be the same!!!

$=1 + 2 + \dots + 2^{k-1} + 2^k$

Now it's *actually* in the desired form.

#### b)
$r = 2$ for the geometric series. 

$t_1(2^k) = \frac{2^{k+1} - 1}{1} = 2\cdot 2^k - 1$
> Writing the expression in terms of $2^k$ lets you replace the argument with any term and substitute the $2^k$

$\implies t(n) = 2n - 1$ (since $n = 2^k$)

> This ONLY applies when $n = 2^k$. No other case!!! So can't assume $t_1(n) = 2n-1$ for any $n$

#### c)
Clearly the upper bound is $n$ 
Our information is that $t_1(2^k)$ is $2\cdot 2^k - 1$
or when $x$ is a power of 2 (i.e., $2^k$) then $t(x) = 2x - 1$

Proof:
We WTS for all n >= n_0, exists c such that $n \leq cn$

Let $n \geq 1$ be arbitrary natural.
Let $x$ be the smallest power of 2 such that $x = 2^k \geq n$ for some $k$.
> In other words, $x$ is the number that most closely approaches $n$ from "above"

Also $x=2^k \geq 2^{k-1} \implies 2n \geq 2^k$ 

$t_1(n) \leq t_1(x)$ (by non-decreasing)
$=t_1(2^k)$ (by `b)` result)
$=2\cdot 2^k -1$ by def'n 
$\leq 2 \cdot 2n - 1$ 
$\leq 4n$

So $t_1(n) \leq 4n$ so $t_1 \in O(n)$ with witness $c=4$


#### d)
Lower bound time!

We WTS for all n >= n_0, exists c such that $n \geq cn$

Let $n\geq 1$ be arbitrary. Let $x$ be the largest power of $2$ such that $n \geq x=2^k$ for some $k$
>In that x is the largest power of 2 that's just smaller than $n$

$\implies 2^{k+1} \geq n \geq 2^k$  
$\implies 2^k \geq n/2$

$t_1(n) \geq t_1(2^k)$
$=2 \cdot 2^k  -1$
$\geq 2 \cdot 2^k - 2^k$
$= 2^k$
$\geq n/2$

So $t_1(n) \geq \frac 1 2 n$ 
$\therefore$ $t_1 \in \Omega(n)$ with $c = 1/2$ as a witness

### 5.

#### a)
$t_2(3^k) = 9^k + 2\cdot t_2(3^{k-1})$
$=9^k + 2\cdot (9^{k-1} + 2\cdot t_2(3^{k-2})  )$
$=9^k + 2\cdot 9^{k-1} + 2^2t_2(3^{k-2})$
$=9^k + 2\cdot 9^{k-1} + 2^2(9^{k-2} + 2t_2(3^{k-3}))$
$=9^k + 2\cdot 9^{k-1} + 2^29^{k-2} + \dots + 2^{k-1}9^1 + 2^k$
$\frac{2 \cdot 9^k}{9^{k+1}} = \frac 2 9$
$r = 2/9$ ?
$a = 9^k$
Alternatively you can have $r=9/2$ and $a=2^k$ 

i am GOATED

#### b)
$t_2(3^k) = 9^k(\text{ geo series with r = 2/9})$
$\implies t_2(3^k) / 9^k = \frac{(\frac 2  9)^{k+1} - 1}{\frac 2 9 - 1}$
$\implies t_2(3^k) =  \frac{ \frac 2 9 \cdot 9^k \cdot (\frac 2  9)^{k} - 9^k}{\frac 2 9 - 1}$
$= \frac{ 9^{k+1} - 2^{k+1} }{7}$
Okay.............
$= \frac{ (3^{k})^2\cdot 9 - 2 \cdot 2^{k} }{7}$

> $3^k$ becomes $2^k$ with some transform $n^x$
> $(3^k)^x = 2^k \implies kx = k \log_3 2$
> $\implies x = \log_3 2$
> So $(3^k)^{\log_3 2} = 2^k$

$\implies t_2(n) = \frac{ (n)^2\cdot 9 - 2 \cdot (n)^{\log_3 2} }{7}$
holy frick that was a lot of work
$n^2$ will dominate here (as would $9^k$ when $n  = 3^k$ because top-heavy)

#### c)

We show for all n > n_0 there is a c such that $n^2 \leq cn^2$ (in that we show cf(n) is an upper bound of f(n))
We know $t_2(3^k)$ is equal to $\frac{ (3^{k})^2\cdot 9 - 2 \cdot 2^{k} }{7}$ (oh god)

Proof:
Let n >= 1 be arbitrary
Let x be the smallest power of 3 such that $n \leq x = 3^k$ for some $k$
Also $\implies 3^{k-1} \leq n \leq 3^k$
$\implies 3^k \leq 3n$

Then $t_2(n) \leq t_2(x)$ by decreasing
$= \frac{ (3^{k})^2\cdot (\frac 9 7) - \frac {2}{7} \cdot 2^{k} }{7}$ by result from `b)`
$\leq (3^{k})^2\cdot (\frac 9 7) - \frac {2}{7} \cdot 2^{k}$ (reducing denominator)
$\leq (3^{k})^2\cdot (\frac 9 7)$
$\leq (3n)^2 \cdot \frac 9 7$
$\leq \frac{81}{7} n^2$

So $t_2(n) \leq \frac {81} 7$
$\therefore$ $t_2 \in \mathcal O(n^2)$ with witness $c = \frac{81} 7$

#### d)
Okay. Time to bottom
I mean find bound below

We show for all n > n_0 there is a c such that $n^2 \geq cn^2$ (in that we show cf(n) is an upper bound of f(n))

Let $n \geq 3$ be arbitrary. 
Let $x$ be the biggest power of $3$ such that $3^k = x \leq n$ 
Then $3^{k+1} \geq n \geq 3^k$
$\implies x = 3^k \geq n/3 \geq 1$

Then $t_2(n) \geq t_2(x)$
$= \frac{ (x)^2\cdot 9 - 2 \cdot (x)^{\log_3 2} }{7}$
$\geq \frac {(n/3)^2\cdot9 - 2 \cdot (1/4)x^2}7$ using the hint and the fact that $n/3 \geq 1$ 
$=\frac{n^2 - \frac 1 2 x^2} 7$
$\geq \frac{n^2  - \frac 1 {2} n^2} 7$
$= \frac{n^2} {14}$

$\therefore t_2(n) \geq \frac 1 {14}n^2$, so $t_2 \in \Omega(n^2)$ with witness $c = 1/14$

### 6.
#### a)
Here we go again

$t_3(3^k) = 3^k + 4t_3(3^{k-1})$
$= 3^k + 4(3^{k-1} + 4\cdot t_3(3^{k-2}))$
$=3^k + 4\cdot 3^{k-1} + 4^2 t_3(3^{k-2})$
$=3^k + 4\cdot 3^{k-1} + 4^2k^{k-2} + 4^3t_3(3^{k-3})$
$=3^k + 4\cdot3^{k-1} + \dots + 4^{k-1}3^1 + 4^k$

$r = \frac {4}{3}$ with $a = 3^k$ 

#### b)

$t_3(3^k)/(3^k) = \frac{\frac 4 3 ^ {k+1} - 1}{\frac 4 3 - 1}$
$\implies t_3(3^k) = 3^k\frac{\frac 4 3 ^ {k+1} - 1}{\frac 1 3}$
$= 3^{k+1} ({\frac 4 3 ^ {k+1} - 1})$
$=({4 \cdot 4 ^ {k} - 3 \cdot 3^{k}})$

> $(3^k)^x = 4^k$
> $\implies kx = k \log_3 4$
> $\implies x= \log_3 4$
> so $4^k =(3^k)^{\log_3 4}$

$\implies t_3(n) =({4 \cdot n^{\log_3 4} - 3 \cdot n})$
yay!

#### c)
Okay
For all n>=n_0, there is a c such that $n^{\log_3 4} \leq c\cdot n^{\log_3 4}$

Proof:
Let $n \geq 1$ be arbitrary.
Let $x$ be the smallest power of 3 such that $n\leq x = 3^k$ for some $k$
$\implies 3^{k-1} \leq n \leq 3^k$ 
$\implies 3^k \leq 3n$

$f(n) \leq f(3^k)$ by decreasing
$=4 \cdot (3^k)^{\log_3 4} - 3 \cdot (3^k)$
$\leq 4 \cdot (3n)^{\log_3 4}$
$\leq 4 \cdot 3^{\log_3 4}(n)^{\log_3 4}$
$= 4^2 \cdot n^{\log_3 4}$

Notes:
- The expression needs to be in terms of $n$ at the end, otherwise I'm not proving the right thing! I want to show $f(x) \leq cf(x)$, but if the thing I show is $f(x) \leq 4f(y)$... that's not what we're looking for

#### d)
Proof
Let $n \geq 81$ be arbitrary.
Let $x = 3^k$ be the largest power of $3$ such that $x = 3^k \leq n$
$\implies 3^{k+1} \geq n \geq 3^k$
$\implies 3^k \geq n/3$

Then $t_3(n) \geq t_3(x)$ by decreasing
$= t_3(3^k)$ by definition
$=4 \cdot (3^k)^{\log_3 4} - 3 \cdot (3^k)$ by previous work
$\geq 4 \cdot (n/3)^{\log_3 4} - 3 \cdot n$ because $3^k \geq n/3$ and $-3^k \geq -n$ 
$\geq n^{\log_3 4} - 3 \cdot n$
$\geq n^{\log_3 4} - 3 \cdot (1/30)n^{\log_3 4}$ by the hint multiplying both sides by $-1$
$=(9/10)n^{\log_3 4}$
finally!
$\therefore t_3(3^k) \geq (9/10)n^{\log_3 4}$ so $t_3 \in \Omega(n^{\log_3 4})$ with witness $n = 9/10$




