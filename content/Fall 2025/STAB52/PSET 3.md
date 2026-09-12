Thank god there are less questions in this.
# Q1

a) X can be 1, 2, 3, or 4

b) Y can be 1, 2, 3, or 4

# Q2
a) X can be 0, 1, 2, 3, 4, 5. It can't be 6 since there is no 6>=x>=1 where |x-6| = 6

b) $P(X = 1) = \frac{10}{36}$
but hey that's cheating let's be more specific
$\set{X = 1} = \set{ (1,2), (2,3), (3,4), \dots, (5,6), (2,1), (3,2), \dots, (6,5)}$
$P(X) = \frac{|X|}{|S|} = \frac{10}{36}$ 

c)

$$p_X(x) = 
\begin{cases}
6/36 &x=0 \\
10/36 &x=1 \\
8/36 &x=2 \\
6/36 &x=3 \\
4/36 &x=4 \\
2/36 &x=5 
\end{cases}
$$
# Q3

From the birthday problem, the chance that no one shares a birthday is $\frac{P^{365}_{k-1}}{365^{k-1}}$ 
Then the *kth* person needs to share a birthday, so that's $\frac{k-1}{365}$ chance (increases as theres more people)
Then the chance everyone b4 doesn't share, and that u do is the two probabilities multiplied!
ez done

nah i didnt know how to do this at all

# Q4

$F_X(x) = P(X \leq x)$
Also $p_X(k) = F_X(k) - \lim \limits_{x \to k^-}F_X(x)$  for all $k$
Let $k$ be an integer such that $1 \leq k \leq n$ 
Then $p_X(k) = \frac{k} n - \frac{k-1}{n} = \frac 1 n$
So the PMF is just 1/n for all k integers

To show it's a CMF, we show that as it goes to infty, it goes to 0. as it goes to neg infty, it goes to 0, and it's increasing
We know the first two 
Then also for all x_1 < x_2, the floor |x_1| < |x_2|, too, which means F(x_2) < F(x_2)
Also it's right continuous since $F(x)= \frac{|x|}{n} = \lim \limits_{k\to x^+} F(k) = \frac{x}{n}$ at all integer "x"s

#todo do again, lowkey

# Q5
Skipping
# Q6
When in doubt, list out the results

Ah the $p_X(i) = P(X = i)$ for *discrete random variables* like in this scenario (levels are discrete)

we can say P(X = i) = something to get our PMF
anyway, at level 1, you would have to fail it to be stuck on it
at level 2, you'd have to win level 1, then fail level 2
at level 3, youd have to win lvl 1 and 2, then fail 3

So it's like $P(X = i) = (1 - p_i)\cdot p_{i-1}\cdot p_{i-2}\dots \cdot p_1$

# Q7
we'll be `max`-ing that's for sure

Let X be the RV for getting a prize from 5 to 100 (you can get 1, 2, 3, 4, 5 but 5 is the max between those) 
The chance to get "5" is 1/100 * 99 * 98 * 97 * 96
The chance to get "100" is simply 1/100. All other options are discarded. but no it can become 1/96 if we guess 5 times..... this is tricky

you do 5 draws, with each draw wittling down the things you can choose
max(x1, x2, x3, x4, x5) will be the "most valuable" price

P(X = k) where k is the "most valuable prize" = \frac{k-1 choose 4}{100 choose 5}
k-1 choose 4 is the # of ways to pick the other 4 prizes before the "k"th prize which is our most valuable. 

this one sucks 

# Q8
$\lim \limits_{x \to \infty} F(x) = \lim \limits_{x \to \infty}  (pF_1(x) + (1 - p)F_2(x))$
$=p + 1 - p = 1$
yay
same for other way. 0 * 0 is 0 

okay good 
now $x_1 < x_2$ let those be arbitrary
Then $pF_1(x_1) + (1-p)F_2(x_1) < pF_1(x_1) + (1-p)F_2(x_1)$ since F_1, F_2 > 0 and (1-p), p > 0

okay good

now for the limit one.... errr
Need to show $F(x) = \lim \limits_{k \to x^+} F(k)$
$\lim \limits_{k \to x^+} F(k) = \lim \limits_{k \to x^+}  (pF_1(k) + (1 - p)F_2(k))$
$= pF_1(x) + (1-p)F_2(x)$ since F_1, F_2 are CDFs


# Q9
ignoring

# Q10

Let RV X be the sum of the three numbers drawn.

a) Outcomes are just the sum numbers. the sample space is 1 * 3 to 3 * 3
why did they make the outputs tuples id fricking k
but yeah that would be 3^3 total combos = 27

$$p_X(x) = 
\begin{cases}
1/27, & x = 3\\ 
3 / 27 & x = 4
\end{cases}
$$
its valid cuz sum is defo 1 and all between 0 and 1 chance

# Q11

P(Y = 3) means seeing some like (1,2,3)
these are all distinct. The chance to get a first number is 1/6. Then the chance to get a number that isn't the first is 1/6 times 5/6


a) 6 permutate 3 gives the # of ways to get a 3 combo 
There are 6^3 total rolls possible


b) 
Similar, but the first number has to be anything BUT the first number of the 6 p 3 permutations
oh okay that is NOT what the question was asking
P(Y = 4) = god no

a) 
Let X ~ Bernoulli(10, 0.2) (so $p_X(x) = {n \choose x} p^x q^{n-x}$) be the # of right answers

b) 
There's no CDF :( so we gotta do this manually:
P(X = 8) + P(X = 9) + P(X = 10) = ${8 \choose 10}0.2^8 0.8^{2} + {9 \choose 10}0.2^9 0.8^{1} + {10 \choose 10}0.2^{10}$

c) 
$P(Y = 4) = 0.8^3 * 0.2$
(this should be geometric btw)

d) $p_Y(x) = 0.2 \cdot 0.8^{x-1}$, but also q^10 if x = 0, and 0 otherwise
i should've mentioned that aaa!
Also the range of x values is gonna be from 0 to 9 (it can't be 10 since you cant fail 10 times before an '11'th success)
Then you find the sum with the cases and it just works out


Hypergeometric is for choosing 