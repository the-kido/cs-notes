<span class="emphasis">Random Variables</span> (RVs) let us describe events *and* calculate probabilities another way.
- They are a mapping/function from the sample space $S$ to the real line $\mathbb R$
- So really the RV assigns numbers to outcomes. An outcome-to-number function.
- RVs are usually capital letters and their values are lowercase letters
![[RVs.png]]

![[Example RV mapping.png]]

RVs can go "in reverse" to describe events (assigning the "number" outcomes to a subset of the sample space)
$$A = \set{s \in S : X(s) = b} = \set{X = b}$$
- A is an event. It contains all elements in the sample space such that $X(s)$ (so the associated number of the element via the RV) equals some "b" that we're looking for for this particular event. 
	- $\set{X = b}$  is just shorthand for a set of $X$ whose elements are equal to $b$
![[RVs in reverse to describe events.png]]

### Indicator RV
- On an event A, denoted by $I_A$, it takes the value $1$ when A occurs and $0$ otherwise
	- i.e. calling $I_A(s)$ on an $s$ that's in A would return $1$. Otherwise $0$
![[Indicator RVs.png]]
- The indicator RV partitions the sample space into *two events*
- These are the connection between events and RVs: $A \leftrightarrow I_A$

### Functions of RVs
- E.g. $Y(\cdot) = h(X(\cdot))$  for an RV $X(\cdot)$ and real function $h(\cdot)$

![[Functions of RVs.png]]
- All $s$ are assigned numbers on the real line via $X(s)$ but that is also true with $h(X(s))$. So $Y$ is also an RV but it might mutate the result of $X(s)$ in some way.

### Example questions
 Show $1 - I_A$ is an indicator RV and find its characteristic event

$$1 - I_A(s) =
\begin{cases}

0 & s \in A \\
1 & s \not \in A
\end{cases}
=
\begin{cases}

1 & s \in A^c \\
0 & s \not \in A^c
\end{cases}
= I_{A^c}
$$

#todo Watch lecture to see why he wrote $h(x) = 1 - x$
$$I_a(s) \times I_B(s) = 
\begin{cases}
1 & s \in A \cap B\\
0 & s \not \in A \cap B
\end{cases}
= I_{A \cap B}(s)
$$$$ I_{A \cap B^c}(s) = \begin{cases}
1 & s \in A \cap B^c\\
0 & s \not \in A \cap B^c
\end{cases}
$$
1 is only true when I_A() is 1 and I_B^c is 1. So we just multiply:
$I_A(s) \times I_{B^c}(s)$
but since we gotta make it in terms of $I_A$ and $I_B$ we write:
$I_A(s) \times (1 - I_{B}(s))$

### RV Distributions
- Similar to the example above with the single value $b$ via $\set{X = b}$, we can represent events via a range of values:
	- $\set{X \in [a.b ]}$, or $\set{X \geq 4}$, or etc. 
- The <span class="emphasis">distribution</span> of an RV $X$ is the collection of probabilities $P(X \in B)$ for all subsets $B$ of the real line. Let's break that down:
	- $B$ is a set of real numbers. 
	- $X$ is an RV, so it takes an outcome and returns a number
	- If $X \in B$, then X is inside that subset of the real numbers. 
	- $P(X \in B)$ is the chance that RV $X$ is in $B$
	- The distribution is all of those probabilities. It gives the probability of all events defined by $X$ #todo all or any?

### Discrete Distributions
- The distribution of a *discrete* RV $X \in \set{x_1, x_2, \dots}$ (remember $x_i \in \mathbb R$) is uniquely determined by the probabilities of the individual values
$$p_X(x_i) \equiv P(X = x_i) = P(\set{s \in S : X(s) = x_i}), \forall i = 1, 2, \dots$$
$p_X(\cdot)$ is the <span class="emphasis">Probability Mass Function (PMF)</span> of RV $X$ 
- "Viewed as discrete real function" idk what that means. might need lecture #todo 
- It gives the probability that $X$ takes the value of an input value $x$ 

PMF must satisfy two of the axioms of probability:
1. $0 \leq p_X(x_i) \leq 1, \forall i$
2. $\sum_{\forall i}p_X(x_i) = 1$

#### Example
Roll 2 fair dice where RV $X$ is the sum. Find the PMF of $X$
We will let $x$ be arbitrary since there are only 12 total possible sums (including no sum at all) that $x$ could be. 
Let's just give 1 example so I can figure out the abstract version:
$P_X(3) = P(\set{s \in S : X(s) = 3})$
We know $\set{s \in S : X(s) = 3} = \set{(1,2), (2,1)}$
So $P_X(3) = \frac 2 {36}$

Now we do that several times over
$$P_X(x) = P(\set{s \in S : X(s) = x}) =
\begin{cases}
\frac 1 {36} & x = 2\\
\frac 2 {36} & x = 3\\
\dots\\
\frac 3 {36} & x = 10 \\
\frac 2 {36} & x = 11 \\
\frac 1 {36} & x = 12 \\
0 & \text{otherwise} \\
\end{cases}
= 
\begin{cases}
\frac{6 - |x - 7|}{36} & x = 2, 3, \dots, 12\\
0 & \text{otherwise}
\end{cases}
$$
### Cumulative Distribution Function (CDF)
The distribution of any RV $X$ can be determined by a <span class="emphasis">CDF</span> via:
$$F_X(x) \equiv P(X \leq x) = P(\set{s \in S : X(s) \leq x}), \forall x \in \mathbb R$$
Use CDF to find the probability of an RV being in *any* interval $(a, b]$
#todo finish notes

### Properties of CDFs
#todo again. There are 3 properties, and they involve fricking limits

#### Example
![[CDF example.png]]
- The probabilities increase as we include more events.





# Discrete Distributions
There are "certain types of RVs" that come up often.
These are "off the shelf" PMFs

## Bernoulli RV
For experiments with binary results
- Yes/No. Heads/Tails.
Encoding the true/false results in a binary RV $x$ gives us a Bernoulli RV:
$$
X =
\begin{cases}
1,& \text{True} \\
0,&\text{False} 
\end{cases}
$$
The distribution is defined by a single probability $0 < p < 1$. This is the chance for $p_X(1)$. The other chance, $p_X(0)$ must be $1-p$ chance, naturally.

### Bernoulli Distribution
To show an RV $X$ follows the Bernoulli distribution:
$$X \sim \text{Bernoulli}(p)$$
- Tilde means "distributed as"

Also Bernoulli RVs are equivalent to indicator RVs >:)

### Binomial Distribution
- For Bernoulli trials (independent binary experiments either true or false) with the same probability of success "p"
Let RV $X$ count # of successes in $n$ such trials
For instance if there are 5 outcomes and 3 are true, then X(s) = 3

X is called the <span class="emphasis">Binomial RV</span>

X has values from $0$ to $n$ where $x \in \set{0, 1, 2, \dots, n}$

The *probability* that there are 3 successes with 5 trials would be ${5 \choose 3}\cdot p^3 \cdot (1-p)^2$
- It's "that one formula" that I forgot the name of.

### Side quest: Binomial Coefficient Properties
This is the "choosing" thing.

#todo later

### Binomial Theorem
$$(x+y)^n = \sum_{i=0}^n {n \choose i } \cdot x^i \cdot y^{n-i}$$
Oh and also 
$$\sum_{r=0}^n {n \choose r} = 2^n$$
To be general, the PMF of Binomial RV is 
$$p_X(x) = P(X = x) = {n \choose x} p^x q^{n-x}, \forall x \in \set{0, ,1,2, \dots, n}$$
where $q = 1 - p$

## Hypergeometric Distribution
For *not replaced* questions. 
Very similar to binomial, though. You have M of something, and N - M of something else (so in total N items). X is the # of M items that were drawn out (without replacement) out of "n" draws.

N = number of items 
M = number of item we're interested in
N - M = number of other item
n = number of trials / draws

Good example: White balls and black balls. 

$P(X = x) = \frac{ { M \choose x } \times { N - M  \choose n - x }  }{  {  N \choose n  } }$


# Quiz Questions
If i run out of time i'll just submit these answers as photos.
### 1.
#### a)
To find the PMF, we find the size of the jump in the CDF at each integer $\set{0, 1,2, \dots, n}$ using the formula $p_X(k) = F(k) - \lim \limits_{x \to k^-}F(x)$.
For $k<0$, $F(k) = 0$ and $\lim \limits_{x \to k^-}F(x) = F(k-1) = 0$ still!
So $p_X(k) = 0 - 0 = 0$

For $0 < k \leq 0$, $F(k) = \lfloor k \rfloor ^2 / n^2$ and $\lim \limits_{x \to k^-}F(x) = \lfloor k-1 \rfloor ^2 / n^2$
so $p_X(k) =\lfloor k \rfloor ^2 / n^2 - \lfloor k-1 \rfloor ^2 / n^2$
$=\frac{k^2 - (k-1)^2}{n^2}$
$=\frac{k^2 -k^2 + 2k - 1}{n^2}$
$=\frac{2k-1}{n^2}$

And lastly for $k > n$, $F(k) = 1$ 
and $\lim \limits_{x \to k^-}F(x) = F(k-1)$ 
We have that $k-1 \geq n$, meaning it's either $k -1 > n$ or $k - 1 = n$
If $k - 1 = n$, then  $= \frac{n^2}{n^2} =1$
if $k -1 > n$, then $F(k) = 1$ 
Either way, $p_X(k) = 1 - 1 = 0$

So finally, 
$$p_X(x) = 
\begin{cases}
0 & x < 0 \\
\frac{2k-1}{n^2} & 0 < x \leq n \\
0 & x > n
\end{cases}
$$


#### b)

We can find that $P(2 \leq X \leq 4) = P(X \leq 4) - P(X \leq 1) = F_X(4) - F_X(1)$
We have that $n=6$, so the inequalities  $0 \leq 1 \leq 6$ and $0 \leq 4 \leq 6$ hold.
Then:
$F_X(4) = \lfloor 4 \rfloor^2 / 6^2 = \frac{16}{36}$
and
$F_X(1) = \lfloor 1 \rfloor^2 / 6^2 = \frac{1}{36}$
Finally: $P(2 \leq X \leq 4) = \frac{16}{36} - \frac{1}{36} = \frac{15}{36} = \frac{5}{12}$

### 2.
### a)
Since the game has Bernoulli trials where the experiments are independent, we can use the binomial distribution!

If $n=2$ for instance, then $P(Win) = {2 \choose 0}(p)(q)^2 + {2 \choose 2}(p)^2(q)^0$
We must add every other possible "even" event. So $0, 2, 4, \dots, n$ 

$P(Win) = \sum_{k = 0}^{n/2}{n \choose 2k} p^{2k}(1-p)^{n-2k}$

Using the binomials given,
$(q+p)^{n} = \sum_{k=0}^{n} {n \choose k} p^{k}(1-p)^{n-k}$
and 
$(q - p)^{n} = \sum_{k=0}^{n} {n \choose k} (-p)^{k}(1-p)^{n-k}$

Given the hint that $P(Win)$ should be in terms of the expressions, given, consider:  $(q+p)^n + (q - p)^n = \sum_{k=0}^{n} {n \choose k} p^{k}(1-p)^{n-k} + \sum_{k=0}^{n} {n \choose k} (-p)^{k}(1-p)^{n-k}$
$= \sum_{k=0}^{n} {n \choose k}(1-p)^{n-k} \cdot (  p^{k} + (-p)^k)$
In the case that $k$ is off, we have:
$= \sum_{k=0}^{n} {n \choose k}(1-p)^{n-k} \cdot (0) = 0$ since $(-p)^k = -p^k$
- Means at odd $k$'s, the summation would only be adding $0$. We can ignore it!
In the case that $k$ is even, we have:
$= \sum_{k=0}^{n} {n \choose k}(1-p)^{n-k} \cdot (  2p^{k})$ since $(-p)^k = p^k$ 

So we can simplify this (considering "$k$ is even" is the only significant contribution to the probability):
$(q+p)^n + (q - p)^n =  \sum_{k=0}^{n/2} {n \choose 2k}(1-p)^{n-2k} \cdot (  2p^{2k})$ since $k$ is even, so we can half the upper limit
$=2 \cdot \sum_{k=0}^{n/2} {n \choose 2k}(1-p)^{n-2k} \cdot (  p^{2k})$ by $\sum$ laws
$=2 \cdot P(Win)$

Therefore 
$P(win) = \frac{(q+p)^n + (q-p)^n}{2}$
$=\frac{(1 - p + p)^n + (1 - p -p)^n}{2}$
$=\frac{1 + (1-2p)^n}{2}$

### b)
For $p=1/3$ and $n=5$,
$P(Win) = \frac{1 + (1 - \frac 2 3)^5}{2}$
$\approx 0.502057$

For $p = 1/3$ and $n=6$
$P(Win) = \frac{1 + (1-2/3)^6}{2}$
$\approx 0.5006858$

In order to max your chance of winning, you would rather flip $n=5$ coins and *not* $n=6$ coins.