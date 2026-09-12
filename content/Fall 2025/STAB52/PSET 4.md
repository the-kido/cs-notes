# Q1
Balls can be white or black. Done 4 times. We want the # of balls that were black
This is binomial! 
Specifically, X ~ Bin(10, 0.5) is the # of successes
# Q2
C.

# Q3
D. None of em

# Q4
i) 
Defo Bernoulli trials with p = 0.35
10 tries, X = 3. Screaming binomial theorem
X ~ Bin(10, 0.35)
$P(X = 3) = {10 \choose 3} \cdot 0.35^3 \cdot 0.65^7$

> mult makes a ordered tuple. multiply by permutation number to get permutations!

ii)
X ~ Geometric(0.35)
We want 10 failures before 11th is success. Therefore x = 10
$P(X = 10) = 0.35 \cdot 0.65^{10}$


# Q5
Bernoulli trials and # of trials performed until 1 success... this has Geometric written all over it!

# Q6
Memoryless thing is, like
P(X >= 20|X >= 10) is the same as P(X >= 10) for geometric 

a)
A good application of memoryless! 
We have that P(X = n) = p?
X is number of failures till first win. 
$P(X = n | X \geq n)$
$= \frac{P({X = n} \cap {X \geq n})}{P(X \geq n)}$
$= \frac{pq^n}{ \sum_{i=n}^\infty pq^{i}  }$
$= \frac{q^n}{\sum q^i}$
to get the desired shape, we do substitution: $k = x - n$ and then yeah the rest makes sense okay fine
x
# Q7
a) 
Each trial is a Bernoulli I'd say. 1/10^n chance. 
So the expected *number of trials* is just geometric?
Nah $P(X = n) = 1/10^4$ for any $1 \leq n \leq 10^4$

We want $E(X) = \sum_{x=1}^n xp(x)$
$=  \frac{1}n\sum_{x=1}^n x$
$=\frac 1 n  \frac{n(n+1)}{2}$
$=\frac{10001}{2}$

b) 
Testing each digit seperately! So we find the E(X) of each digit, then multiply by 4 to get the E(X) of all 4 digits

E(X) of 1 digit is just n = 10 so 11/2 = 5.5
so 5.5 * 4 = 22

# Q8

We want E(X)
X is the # of games played.
it can be 4, 5, 6, 7 games in total (at 7 there will always be a winner)

P(X = 5) = ?
If there were 5 games played, either A or B won.
If A won, then they won 3 games and lost 1 of the first 4, and then definitely won the last one
so its like 4 choose 3 times 1/2 times 1/2^3

you continue that. You use LoTP to get P(X=5) and whatnot, then sum those when finding the E(X)

#todo

# Q9
a) E(X) = 16000 for sure. Nothing special there.
Also, just for funzies:
V(X) = E(X^2) - E(X)^2
$= 16000^2 \cdot 1 - 16000^2  = 0$
There is no variance (as expected!) since there is a 100% chance to get this result. Nothing else is possible

b) 
Get 1/2 wrong, and that's 1000
Get 1/2 right, and if you get 3/4 wrong, then that's 32k
Get 1/2 right and 1/4 right, that's 64k
Probabilities add up to 1 so we good. This is exhaustive 

X = {1k, 32k, 64k} possible results
p_X(x) is a case thing
- 1/2 for 1k
- 3/8 for 32k
- 1/8 for 64k
nice
Now for E(X):
E(X) = 1/2 * 1000 + 3/8 * 32000 + 1/8 * 64000
= 20500 wowza

E(X^2) = 1000^2 \cdot 1/2 + 3/8 * 32000^2 + 1/8 * 64000^2 
V(X) = 896500000 - 420250000 = 476250000
Meaningless number lowkey
Results vary by average 21k 


# Q11
Bernoulli distribution is similar to indicator variable
So if X ~ Bernouli(p), then X is either a true or success outcome. Of some sort
then p_X(x) = p when x = True and q when x = False

To find E(X) we do 
= 1 *  p + 0 * q = p

For V(X):
E(X^2) = p still
V(X) = p - p^2
= (1- p)p
= pq
okay why though...

b) 
X ~ Bin(n, p)
p_X(x) = (n choose x) p^xq^{n-x}

so E(X) = sum_{x=0}^n x p_X(x)
= q^n sum x \cdot (n choose x)

etc.

Discrete Uniform ?
- Each probability of outcome is the same. Some "1/n" chance where 1/n

E(X) = sum k \cdot 1/n
= 1/n sum k
= 1/n (n)(n+1)/2
which is something
E(X^2) should be ez to derive

d)
Poisson I have less experience with!
Used to count # of times (so like binomial) but with an unknown number of games
lambda is the expected # of events in the interval
Like, E(X) = lambda, literally.
So too is V(X) = lambda

# Q12
a) 
We know $E(X) = \sum_{x=0}^\infty x \cdot p_X(x)$
F(x) = P(X <= x)

okayy fine i guess i could've got this

$E(X) = \sum_{x = 0}^\infty P(X > x)$
$=\sum_{x = 1}^\infty P(X \geq x)$ *cuz input is integer*
$= \sum_{x = 1}^\infty \sum_{j = 1}^x P(X = j)$ by obvious (since discrete)
The inner sum happens once, then twice, then 3 times, as $x$ increments
this is like the $x$ of the og E(X) formula

the rest is obvious.... UGH


# Q13

LOTUS is the E(h(X)) formula
yeah i gave up.

# Q17
wtf

# Q18
X ~ Pois(lambda = 3.5) is the number of snowstorms.
We want P(X = 4)
= $\frac{e^{-3.5}3.5^4}{ 4!}$

0.188812285409 ? oops no that's not the question
We want $P(X >= 4)$
$1 - P(X < 4)$
$1 - P(X <= 3)$ (# of snowstorms is discrete)
P(0) 

wow no way an actually easy question.
Lambda represents "the average that X value". X is just anything. Okay not baddd


# Q19
We need to somehow show that X's outcomes are.

okay no fricking way.... recursive relation!? What is this nonsense. If I had a day or two sure I'd find this. No way I'm doing this on a test.

