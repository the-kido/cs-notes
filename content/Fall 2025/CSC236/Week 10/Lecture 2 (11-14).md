This is an example in the notes, but we are going to show the runtime now.
- When we see something like $n/2$, it's usually good to pick numbers divisible by 2 many ($k$) times. So we used $n=2^k$ for that reason when drawing the tree
(Drawing the runtime tree)
On the first call, $2^k$ nodes are passed. This one node does $n = 2^k$ work (that's from the $T(n)$ definition--within $n + 4\cdot T(n/2)$, $n$ is the only non-recursive part)
- From the first node, there are 4 recursive calls, all with $2^{k-1}$ size inputs, and that's $4\cdot 2^{k-1}$ work for all 4 nodes. For the *next* loop it's $4^2 \cdot 2^{k-2}$, etc.
- Etc., it becomes $4^3, 4^4, \dots$ you get the idea.
- Eventually you do the $k$ loops. At that point, the size of the input is just $2^{k-k} = 1$ and the time is $2^0 \cdot 4^k$ 
So $T(n) = 2^k \cdot 4^0 + 2^{k-1} \cdot 4^1 + \dots + 2^0 \cdot 4^k$

Idk why he's sayin this, but $2^k$ eventually comes $4^k$ 
- Okay, here's what he was saying (explained at 31:00)
- For every 2 numbers in the input, it *eventually* settles to $4$ at the end 
	- For instance, if we have an input of 8, then the tree will split
		- Once: 4, 4, 4, 4
		- Twice: 2, 2, 2, 2, $\dots \times 16$
		- Three times: $1,1,1, \dots \times 64$
		- So the 8 we started with becomes $64$ at the end, and the start was $2 \times 2 \times 2 \times2$ which *becomes* $4 \times 4 \times 4 \times 4$.
		- Now all he was saying was, what function turns the input into the number of leaves? Clearly it's just the input squared, but he was clarifying with this other system.
To turn $2^k$ into $4^k$, we can use the fact that $2^{\log_2 k} = k$ 
So $(2^k)^{\log_2 4} = 4^k$
$\implies n^{\log_2 4} = n^2$ 

So at the top we start at $n$ time and we end up (and the end, with $k$ iterations) with $n^2$ time at the end.
- I THINK this was to count the number of leaves exclusively
So $T(n) = n + \dots + n^2$. The problem is, what is the middle?
We "claim" that $T(n)$ is a geometric series

Let's show it through "one-and-a-half" unrolling. We need to show each term is a constant multiple of the previous one
$T(n) = n  + 4\cdot T(n/2)$
$= n + T(n/2 + \dots)$ 
$=n + 4/2n + \dots$
- The ratio is $\frac 4 2 = 2$
Which means the sum of the geometric series is $\in \Theta (\text{max term})$
$\therefore T(n) \in \Theta (n^2)$
- Think: The last term is always greater than the sum of all terms before it in a geometric series. For instance, in $1, 2, 4, 8, 16$, 16 is bigger than all of $1$ to $8$ added up. Same applies here
- Note: The bottom gets bigger, so $T$ is **Bottom-heavy**. Sometimes the number of leaves is "smaller" than the contribution of the root. 

Then we try replacing this algorithm with "Karatsuba's" which only has 3 recursive calls instead of 4, which doesn't just mean $1/4$'th the cost is removed, since each individual call also has 1 of its 4 calls removed.
The ratio is now $\frac 3 2$ instead of $\frac 4 2$. It's still $> 0$ so by geometric series this new $T$ is still "bottom-heavy" so the # of leaves dominates the running time here too.

What's the # of leaves this time? Each 2 pair in the input becomes a "3" this time:
$2^{\log_2 3} = 3$ so $(2^k)^{\log_2 3} = 3^k$
So $T(n) = \Theta (n^{\log_2 3})$ instead (it's a wacky irrational number which is tragic)
And $1 < \log_2 3  < 2$ so it is indeed faster 

For merge sort it's also very similar:
$T(n) = n + 2 \cdot T(n/2)$
$= n + 2/2 n + \dots$
The ratio is just $1$ and "no" term dominates. Every term contributes SOMETHING, which means $T(n) \in \Theta (\text{ terms * \# levels} )$
$= \Theta (n \log n)$ 
 (we shrink the input a total of $\log_2 n$ times and for each shrink the total runtime added is $n$ each) 

## All of this work derives a general theorem

$T(n) = \begin{cases} n^d + aT(n/ b) & n > 1 \\ 1 & n = 1 \end{cases}$
$T(n) = n^d + aT(n / b)$
$= n^d + a((n/b)^d + aT(n/b^2))$
$= n^d + \frac{a}{b^d} n^d + \dots$ (and it'll always be $n^d$ times some factor)
Ratio = $\frac a {b^d}$
If bigger than 1, then bottom heavy, if smaller than 1, top heavy. If 1, then every term matters


# Readings (`recursive-runtime-II`)
> Investigating the effects of reducing recursive calls to improve the $\Theta$ class of an algorithm

The first algorithm for multiplying two large numbers has $4$ recursive calls, but Karatsuba's has only $3$ calls!
- We use the length of the numbers (number of digits) as the size for the input

We first analyze the "slow" algorithm--the one whose recurrence is 
$$T(n) = \begin{cases} 
n + 4 \cdot T(n/2) & n > 1 \\ 
1 & n = 1
\end{cases}$$
The recursion tree will use an input of $n = 2^k$ since recursively we divide by $2$ each time so it makes life easy.
We see for every 2 in the input, it eventually results in $4$ for the output. We're effectively squaring the input.
Means the input of $n$ will result in $n^2$ leaves. We need the number of leaves to get the "end" of the $T(n)$ algorithm
$T(n) = n + 4 \cdot T(n/2) = n + 4 \cdot (n/2 + 4T(n/4)) = n + 2n + 4n + 16T(n/16) = \dots$
Even just from the first step, we see we go from $n$ to $2n$. I expanded a bit more to show it goes to $4n$ too! This is a geometric series! With the ratio being $\frac 4 2 = 2$. This means the terms are increasing (and note the last term is always larger than all terms before it summed) so it's "bottom-heavy" in that the more steps we do, the bigger the number of leaves becomes relative to the amount of work done.
- Since $T(n) = n + \dots + n^2$, $n^2$ is the term with the highest degree and therefore $T(n) \in \Theta(n^2)$
#### The same, but for Karatsuba's Algorithm
$$T(n) = \begin{cases} 
n + 3 \cdot T(n/2) & n > 1 \\ 
1 & n = 1
\end{cases}$$
After drawing the recursion tree, for every $2$ input we start with, we end up with $3$ at the end:
$(2^k)^x = 3^k \implies x = \log_23$. So $n^{\log_2 3}$ is the "last" amount of items
$\text{\#-of-leaves} = n + \dots + n^{\log_2 3}$

> We don't need $T(2^k)$ because that's only required to find a closed-form version of the function. We are using an alternative proof using Geometric Series

Then $T(n) = n + 3T(n/2) = n + 3/2n + 9T(n/4) = n + 3/2n + 9/4n + 27T(n/8) = \dots$ 
Clearly the ratio is $\frac 3 2$ as that is multiplied each time!
Since it's $>1$, this will also be bottom heavy. The bottom is the number of leaves, which is $n^{\log_2 3}$ so that's our $\Theta$ class.
$$T(n) \in \Theta(n^{\log_2 3})$$
#### The same, but for Merge Sort!
$$T(n) = \begin{cases} 
n + 2 \cdot T(n/2) & n \geq 2 \\ 
1 & \text{ o/w}
\end{cases}$$
Lastly we summarize our Merge Sort analysis using a similar system:
$\text{\#-of-leaves}(n) = n = n^{\log_2 2}$ (for every 1 input, there is one leaf, because it splits by 2 but also strings input by 2)

And $T(n) = n + 2T(n/2) = n + 2((n/2) + 2T(n/4)) = n + n + 4T(n/4) = \dots$
It seems the pattern is just that the ratio is $1$ which means every term has equal significance.
It's just $T(n) = kn$ but we don't know what $k$ is. How many times deep will the algorithm recurse for any given input? 
- Well in our case, if the input is 2 then there are 2 levels (2 to 1) and if 16, there will be 5 levels (16 to 8 to 4 to 2 to 1)
- It's just $\log_2 n + 1$ which is $\approx \log n$ levels
Means $T(n) \in \Theta(n \cdot \log_2 n )$

#### Summarizing these findings 
$$T(n) = \begin{cases} 
n^d + a \cdot T(n/b) & n > 1 \\ 
1 & n = 1
\end{cases}$$
$a$ is the number of recursive calls. $d$ helps define the $\Theta$ for the $n^d$ work done per call. $b$ is the amount that the work is reduced per call as well.
WE see that by unrolling, we get a series--one term per level
We go from $n = b\dotsb b$ to $a \dotsb a$ leaves which means we have $n^{\log_b a}$ total leaves.
The first term of the series is just $n^d$ and it has $1 + log_b n$ total levels 

The *ratio* is $a/b^d$ for the geometric series. That means 
1. If $a /b^d > 1 \implies a > b^d$, then it's Bottom-Heavy with $T(n) \in \Theta(n^{\log_b a})$ (the number of leaves/the last term)
2. If $b^d = a$, then it's balanced with $\Theta(n^d \log n)$
3. If $a < b^d$, then it's Top-Heavy with $T(n) \in \Theta(n^d)$ (the first term)
