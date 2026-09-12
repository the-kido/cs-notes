### Geometric Distribution
- Consider an infinite sequence of *independent Bernoulli trials* w/ the same $p$ probability of success
- This vs. Binomial Distribution is that this never ends! It's a sequence
- Let RV X/Y count # of failures OR the # of trials until the $1^\text{st}$ success. (Y = X + 1)
	- There are two ways to define these so geometric could use $X$ or $Y$. # of trials till first success is always $+1$ the # of failures
- e.g. $s = (0, 0, 0, 1, 0, 1, \dots) \implies X(s) = 3$ OR $Y(s) = 4$
- $X/Y$ called Geometric RV <span class="hide">again, we use both defns cuz they are both popular</span>

What are the possible values of RV $X$?
- $x \in {0, 1, 2, 3, 4, \dots} = \mathbb N_0$ 
	- The notation $\mathbb N_0$ means the naturals including $0$
	- You can always have $n$ failures before the $n+1$ trial is a success. 

How do we get the probability of $X=3$, though?
- $P(X = 3)= P(F_1 \cap F_2 \cap F_3 \cap S_4)$
	- $F_1$ is the event that the first trial is a failure <span class="hide">same for the others</span>
	- $S_4$ is the event that the 4th trial is a success
- $= P(F_1) \cdot P(F_2) \cdot P(F_3) \cdot P(S_4)$
	- By independence of trials
- $= q \cdot q \cdot q \cdot p$


#### General Formula
For # of failures:
$$P(X = x) = p\cdot q^x, \forall x \in \mathbb N_0$$
For # of trials:
$$\Leftrightarrow P(Y =y) = p\cdot q^{y-1}, \forall y \in \mathbb N_+$$ 

where $X, Y$ are Geometric RVs. Alternatively $X \sim \text{Geometric}(p)$
#### Verifying validity
$0 \leq p_X(x) \leq 1$ holds since $0 \leq pq^x \leq 1$ since p, q are probabilities. Multiplying nums from 0 to 1 is still 0 to 1.

$\sum_{x=0}^\infty p_X(x) = \sum_{x=0}^\infty p\cdot q^x = p \cdot \sum_{x=0}^\infty q^x$
$q^x$ is a geometric series! $0 \leq q \leq 1$ as well so $\sum_{x = 0}^\infty q^ x = \frac{1}{1-q}$
$= p \cdot \frac{1}{p} = 1$ 

#### Finding its CDF
You can find it! Makes sense cuz the probability accumulates in a predicable way. 

We *want* a $F_X(x) = P(X \leq x) = \sum_{k=0}^x P(X = x)$
$= \sum_{k=0}^x pq^k$
- $k$ goes up to $x$ since we need the chance of $0, 1, 2, \dots x$ failures summed
$= p \cdot \frac{1-q^{x+1}}{1-q} = 1 - q^{x+1}, \forall x \in \mathbb N_0$

### duck 🦆🎯 shoot........ duck shoot
> There is a 5% chance of success. We assume the shots are independent.  

>[!question]  What's the probability of hitting the target on the 5th try?
>These are binary trials (miss, hit) and the chance of each is the same. We can use geometric!
>
>Let $X$ be # of failures until 1st success, $X \sim Geometric(p=0.05)$
>We need 4 failures so that the 5th shot is a success!
>
>$P(X = 4) = p \cdot q^4 = 0.05 \cdot 0.95^4$

>[!question] What's the probability of not hitting the target in the first 10 shots?
>Same RV $X$ def'n as above. 
>Question is asking for chance to fail 10 times or more before hitting a shot.
>
>(Note $\set{X \geq 10}^c = \set{X \leq 9}$ since $X$ assumes natural numbers)
>$P(X \geq 10) = 1 - P(X \leq 9)$ (by complement rule)
>$= 1 - (1 - q^{9+1}) = q^{10}$
>
>Oh but of course. The chance of getting 10 failures in a row is simply $q^{10}$ 
>

#### The "memoryless property"
>[!question] What is the (conditional) probability of not hitting the target in the first 20 shots, given you don't get the first 10 shots.
>
>We've already taken 10 shots; they were all failures. What this question is asking is for the chance of wasting *another* 10 shots ($10 + 10 = 20$. That's math)
>
>
>$P(\set{X \geq 20} | \set{X \geq 10})$ is what we're working with
>- Let's say there are two events A ($X \geq 20$) and B $(X \geq 10)$
>
>$=\frac{P(\set{X \geq 20} \cap \set{X \geq 10})}{P(\set{X \geq 10})}$
>- Ah ha! What is the intersection of $\set{X \geq 20}$ and $\set{X \geq 10}$ ? It's $\set{X \geq 20}$ since that's the smaller event. 
>
>$= \frac{P (X\geq 20)}{P(X \geq 10)} = \frac{q^{20}}{q^{10}} =q^{10}$
>
>The probabilities of this question (and the one above) are independent of what happened in the past. This invokes *the memoryless property*!

#### My personal Minecraft Example
In Minecraft, there is are 16x16x16 blocks in a sub-chunk. The random tick speed is the number of blocks that get updated in a sub-chunk every tick. So, the default is 3, which means 3 blocks of the 16x16x16 get updated each tick. What is the average time the grass block grows?

Answer:
- $P =$ successful updates / tries
- $P = 3 \cdot \frac 1 {16 \times 16 \times 16}$ = 3 updates per second, and 1/16x16x16 chance to grow per update. Therefore gives grow chance per second = $\frac 3 {4096}$
- $X\sim Geo(p = \frac{3}{4096})$ be a RV.
- Then $E[X] = \frac{4096}{3} = 1365$ ticks until the first grass update.
- In seconds, that's $68.27$



### Negative Binomial Distribution
- Consider infinite independent Bernoulli trials w/ the same $p$ probability of success
- An extension of binomial distribution. X/Y counts the # of failures/trials until the $r^\text{th}$ success
-  Y is the # of trials of the $r^\text{th}$ success. X is the # of failures until the $r^\text{th}$ success
	- $X$ goes from $0, 1, 2, \dots$  whereas $Y$ goes from $r, r+1, r+2,\dots$ since you must have done at least $r$ trials to get $r$ successes

#### Finding the probability
- For an arbitrary $r \in \mathbb N$, we find the possible values of NegBin RV $X$
	- (# fails) $X \in \mathbb N_0$ 
	- ( # trials) $Y \in \set{r, r+1, \dots}$
	- In general, $Y = X + r$ 
##### Example time to figure out the general formula
What's the probability of having $x=3$ failures for $r=3$ successes?
$P(X = 3) = ?$
$\set{X = 3} =$ a bunch of tuples of size 6 in total that always end in a success and have 3 successes and 3 failures

The chance for $s = (1,1, 0, 0, 0, 1) = P((1,1,0,0,0,1)) = p^3q^3$
And that's the same for all other elements! We just need to know how *many* items are in $\set{X = 3}$ and do a multiplication.
The number of combinations of $3-2$ successes between $6-1$ results is ${ 5 \choose 2}$ 
$P(X = 3) = {5 \choose 2} \cdot p^3q^3$


Generally, the PMF of the Negative Binomial distribution is 
$$p_X(x) = {{x + r - 1} \choose {r - 1}} \cdot p^r \cdot q^x, \forall x \in \mathbb N_0$$
If RV $Y$ counts $ of trials until rth success, $Y = X + r$
Denoted $X \sim \text{NegBinom(r,p)}$

No CDF available

> Functions of random variables are variables. Negative Binomial is the sum of identical/independent Geometrics


# Expected Value
something abt averages

The average = all possible values multiplied by the amount of times they appear divided by the total repeats $n$
It should approximately be the sum of all possible values times their probability

For a discrete RV $X$ with PMF $p_X(x)$, the expected value is defined as 
$$E(X) = \sum_xxp_X(x)$$
assuming the sum does converge. It maps a function to a number. Interesting.
The expected value is the "center of gravity" of a distribution.
![[E(X) is the middle.png]]
It's the middle! It's the average!
It doesn't have to be discrete. It doesn't have to be a value of X

##### Examples of E(X) questions
>[!question] For sequence of independent Bernoulli(p) trials, find the expected # of trials until first success
>
>$Y$ (the # of trials) $\sim \text{Geometric}(p) \implies p_Y(y) = p\cdot q^{y-1}$
>
>$E(Y) = \sum_{y=1}^\infty y \cdot p_Y(y) =  \sum_{y=1}^\infty y \cdot p \cdot q^{y-1}$
>since one of the formulas he wants to use requires the sum to start at $0$, we use $y = x+1$ (we use the # of failures instead)
>$=\sum_{x=0}^\infty (x+1)\cdot p \cdot q^x$
>$=\sum_{x=0}^\infty x\cdot p \cdot q^x + \sum_{x=0}^\infty p \cdot q^x$
>(the idea is to make the first term look like $E(Y)$ so we can sub it back in)
>$=q\cdot \sum_{x=1}^\infty x\cdot p \cdot q^{x-1} + 1$ `(*)`
>So
>$E(Y) =q \cdot E(Y) + 1$ 
>$\implies E(Y) = \frac 1 p$
>
>
>`(*)` Oh thank god he explains $\sum_{x=0}^\infty x \cdot p \cdot q^x = 0 \cdot p \cdot q^0 + \sum_{x=1}^\infty x \cdot p \cdot q^x$ 
>and then that $= \sum_{x=1}^\infty x \cdot p \cdot q^{x-1}q= q\sum_{x=1}^\infty x \cdot p \cdot q^{x-1}$
>wowza






