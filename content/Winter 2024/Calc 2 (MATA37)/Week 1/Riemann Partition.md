`pg 318`
# Partitions
>[!quote] Definition
>Let $a, b \in \mathbb R$, $a < b$. A partition $P$ of $[a, b]$ is a finite collection of points in $[a, b]$, one of which is '$a$' and the other is '$b$'

> For an example of a partition, consider $I:[0, 1]$
> Then $P = \set{0, \frac1 5, \frac 1 2, 1}$ is a partition of $[0, 1]$

Generally speaking, P can look like $\set{x_1, x_2, \dots, x_{n-1}, x_n}$ where $n \in \mathbb N$ 
OR
$P = \set{x_i}^n_{i=0}$

> $n$ is the number of elements in a partition. But there are $n - 1$ intervals in said partition.

Note that the above is just a regular partition. Those subintervals (the distance between elements) can be huge or small. What makes a Riemann Partition special is that each subinterval is equally sized.
# Riemann Partitions
>[!quote] Definition of Riemann Partition
>Let $a, b \in \mathbb{R}, a < b$. Let $I = [a,b]$. A Riemann partition of $[a,b]$ is $P = \set{x_i}^n_{i=0}$ for some $n \in \mathbb{N}$ s.t. $x_i = a + i \Delta x$ where $\Delta x = \frac{b-a}{n}$ for $i = 0, 1, 2, \dots, n$

Let's break this down:
- Let $a, b \in \mathbb{R}, a < b$. Let $I = [a,b]$
	- Helps define the interval and clarifies that a is the start and b is the end of said interval. In MATA31 it was usually not included.
- A Riemann partition of $[a,b]$ is $P = \set{x_i}^n_{i=0}$ for some $n \in \mathbb{N}$ s.t. $x_i = a + i \Delta x$ where $\Delta x = \frac{b-a}{n}$ for $i = 0, 1, 2, \dots, n$$
	- The first part defines a partition of interval $[a, b]$
	- The `s.t.` helps specify what makes this a Riemann Sum!
		- Indeed, excluding everything after the `s.t.` would simply be us defining a partition (minus the word `Riemann` of course) 
	- $\Delta x$ represents the length of each subinterval. Specifically, it is a constant. Therefore each piece is equally sized. 
	- $x_i = a + i \Delta x$ means each element in the partition is equal to the starting point (a) plus a couple of the partition lengths. Kinda like splitting a health bar into partitions, $\Delta x$ would be 0.5 where health goes from $[0, 10]$ in Minecraft. If $i = 7$, we would have 3.5 hearts. 

What make these "R partitions" special?
- They have $n$ equal width pieces!
- It makes the expression $x_i = a + i \Delta x$ become obvious:
	- When $i = 0$, we have $x_0 = a$ (as expected by the definition of a partition!)
	- When $i = n$, $x_n = a + (b-a) = b$ (again, as expected!) 
	- Any choice of $i$ between $0$ $(a)$ and $n$ $(b)$ are just intermediate partitions
- They can be used to <span class="emphasis">estimate the signed area</span> of a function via rectangles with width $\Delta x$ and height $f(x_i)$

## Estimating Area of a Function
$x^*_i$ is the sample point.
If $x^*_i = x_i + 1$ then the sample point is from the left endpoint.
If $x^*_i = x_i$ then the sample point is from the right endpoint. 
![[Pasted image 20250111114555.png|300]]  ![[Pasted image 20250111114603.png|300]]
Left endpoint ^^                                          Right endpoint ^^

It can be said that 
$A \approx f(x_0) \Delta x + f(x_1) \Delta x + f(x_2) \Delta x$
$= \sum_{i=1}^3 f(x_{i-1}) \Delta x$
for our example with 3 bars. This is for the left [[Riemann Sum]].
For the right, I think it would be $= \sum_{i=1}^3 f(x_i) \Delta x$


# Cards #calc2-1 
What is the exact definition of a Riemann Partition?
?
Let a, b, in R s.t. a < b. Let $I = [a,b]$. 
$P = \set{x_i}_{i=0}^n$ is a Riemann partition of $[a,b]$ for some $n \in \mathbb N$ if for $i = 0, 1, 2 \dots n$, $x_i = a + i \cdot \Delta x$ where $\Delta x = \frac{b-a}{n}$

Explain why i goes from 1 to n in the sum
?
It's kinda just the way it is. In fact, we can write the left sum like this instead:
$\sum_{i=0}^{n-1} f(x_{i}) \Delta x$
and right sum as this:
$\sum_{i=0}^{n-1} f(x_{i+1}) \Delta x$

 We can go a step further:
$\sum_{i=10}^{n+9} f(x_{i-10}) \Delta x$ would *still* describe the right sum. We just shifted some indices around 
 

What is the exact definition of a Riemann Sum?
?
Let $a, b \in R s.t. a < b$. 
Let P be a Riemann partition of $[a,b]$ so that $P = \set{x_i}_{i=0}^n$ and $\Delta x = \frac{b-a}{n}$ for some $n \in \mathbb N$
A Riemann sum is $\sum_{i=1}^n f(x_i^*) \Delta x$ where $x_i^* \in [x_{i-1}, x_i]$

#todo this isn't the same as the def'n given in the tb but arguably this is better. 

In a Riemann sum, if we have an interval $[5, 10]$ with 10 sub-intervals, what are the possible values of $x_4^*$?
?
Remember that $x_i^*$ can be any number from $[x_{i-1}, x_i]$. This means $x_4^*$ is between $[x_3, x_4]$.
$\Delta x = \frac{b-a}{n} = \frac 1 2$
$x_3 = a + 3 \Delta x = 5 + 1.5 = 6.5$ and $x_4 = 7$.
From that, we find that $x^*_4$ can be any number between $[6.5, 7]$

Explain why $x_0^*$ can't assume any value.
?
The way we define the subintervals in a partition is that for some partition $x_k$, the subinterval would be $[x_{k-1}, x_k]$. This means if k = 0, the interval would be $[x_{-1}, x_0]$ which cannot exist since $x_0$ is the smallest element by definition and $x_{-1}$ is not contained in the set. 

Visually speaking, $x_1 \to x_n$ are the only ones with a corresponding sub-interval, those of which start at $x_0 \to x_{n-1}$ respectively. Essentially the point we choose is the endpoint of the subinterval.

#todo 


What are the subintervals of a partition that contains the element 3 and is of the interval $[-1, 10]$ 
?
 The partition would be $P = \set{-1, 3, 10}$ so the subintervals would be $[-1, 3]$ and $[3,10]$

This is from EE1. 
![[Pasted image 20250123091024.png]]
?
We *could* repartition such that $n = 8$ so a = 0.0 and b = 3.2.
Then $\Delta x = \frac{3.2}{8} = 0.4$ which is the distance between each interval as expected.
Then we calculate the midpoints via $f( \frac{x_i + x_{i-1}}{2})$.
However consider i = 1. then $f( \frac{x_i + x_{i-1}}{2}) = f(\frac{0.4}{2}) f(0.2)$ which we do not have.
So we must instead choose to eliminate either 0.0 or 3.2 from the interval.
Now, let a = 0.4, b = 3.2, and n = 7. Then $\Delta x = 0.4$ and we can calculate the midpoints.
