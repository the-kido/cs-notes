### Limit Results
There are questions that involve sequences of RVs $X_1, X_2, \dots$ where we're interested in the "limiting behaviour" given as $X_n$ where $n \to \infty$
- Think "Asymptotic Statistics"

This also lets us quantify why more samples gives better statistics.

#### Averages of RVs
- Let $X_1, \dots X_n$ be independent RVs with common mean $\mu$ and variance $\sigma^2$ has an average
$$\overline{X_n} = \frac 1 n ( X_1 + \dots + X_n)$$
$=\bar X_1 +\bar X_2 + \dots + \bar X_n$ (These are linear transformations!)

You collect these RVs with the same distribution (or at least the same mean/variance)

So as long as the RVs have the same distribution and are independent, we can say a lot of things about them.

##### Mean and Variance of $\overline{X_n}$
$E(\bar X_n) = E(\frac 1 n (X_1 + \dots + X_n)) = \frac 1 n(E(X_1) + \dots + E(X_n))$
$=\mu$
- The average of the averages is also their average. LOL
$V(\bar X_n) = V(\frac 1 n (X_1 + \dots + X_n)) = \frac{1}{n^2}(V(X_1) + \dots + V(X_n) + \sum_{i \neq j} Cov(X_i, X_j))$
$= \frac{1}{n^2}(n\cdot \sigma^2)$ (using fact that covariance $= 0$ since independent)
$= \sigma^2/n,\forall n \geq 1$
- $\frac 1 {n^2}$ comes from the fact that variance times number = number squared #todo I forget where from exactly

Observe the variance decreases as $n$ (the number of samples) increases! Which means the result gets closer to the predicted $\mu$ average value.

### Weak Law of Large Numbers
- Literally a formal retelling of the above result.

- <span class="emphasis">WLLN</span>: the average ($\bar X_n$) of independent $RV$'s with finite variance "converges" to their common mean $\mu$ 
$$P(|\bar X_n - \mu| \geq \epsilon) \to 0 \text{ as } n \to \infty, \forall \epsilon > 0$$
- Reads as "The chance that the distance between RV and its mean is greater than a really really small number" gets infinitely smaller"
- Also reads as "The tails of the distribution go to zero"

![[Going to 0 by WLLN.png]]
- Also can be interpreted as "the chance that the distance from the average of the RVs is 0 gets closer and closer to $100\%$"

#### Proof is given by Chebyshev's inequality
$P(|\bar X_n - \mu| \geq \epsilon ) \leq \frac{V(\bar X_n)}{\epsilon^2} = \frac{\sigma^2/n}{e^2}$
$=\frac{(\sigma/ \epsilon)^2}{n}$ (rewriting)
$\to 0$ as $n \to \infty$
And since the upper bound of the probability goes to $0$, then it too must go to $0$

#### Example
Let $X_1, \dots, X_n \sim^{\text{iid}} N(0, 1)$ ($\mu = 0$ and $\sigma^2 = 1$)
$\implies \bar X_n \sim N(0, 1/n)$ ($1/n = \frac{\sigma^2}{n}$)
- Linear transformations of normals is also normal

![[Normal Example of WLLN.png]]
- The $n=25$ one is $\times 5$ more concentrated that $n=1$ one

#### Example
Two *dependent* RVs $X_1, X_2$ with mean $0$ and var $1$.
We use Chebyshev's inequality to their average when:
1. RVs are perfectly positively correlated (i.e., $X_1 = X_2$)

Then $V(\bar X_2) = V(1/2(X_1 + X_2))$
$= 1/2^2 \cdot (V(X_1) + V(X_2) + 2Cov(X_1, X_2))$
$- \frac 1 4 (1 + 1 + 2 \cdot 1) = 1$ 
$P(|\bar X_2 - 0| > \epsilon) \leq \frac{V(\bar X_2)}{\epsilon^2} = \frac{1}{e^2}$ for some epsilon
- Note how you *don't get new information like this*
	- It's like sampling info from the same person 1000 times. You don't get new information, so it doesn't necessarily get closer to the mean. It's actually just the same result as the first sample by itself

> Notes
> - $\bar X_2$ is the notation for the average cuz there are two elements. $n = 2$
> - $\bar X_2 = \frac{1}{2}(X_1 + X_2)$
> - So $E(\bar X_2) = \frac{E(X_1) + E(X_2)}{2} = \frac 0 2 = 0$ (which checks out)
> - But the variance we cannot calculate without the covariance
 
 2. RVs are perfectly negatively correlated (i.e., $X_1 = -X_2$)
$V(\bar V_2) = \frac 1 4(V(X_1) + V(X_2) + 2Cov(X_1, X_2))$
$Cov(X_1, X_2) = Cov(X_2, -X_1) = -1$
$= \frac 1 4 (1 + 1 + 2\cdot (-1))$
$= 0$

He's talking about how if you have two people who are the total opposite, and average their results, you'll get a result that has a variance $0$ by asking barely anyone. True luck!

Problem is, that's unrealistic as heck in real life. Getting more samples is better

### More stuff about Weak Law of Large Numbers
In stats, we guess the mean of an *unknown* distribution by averaging random values $X_1, X_2, \dots$ (these are your "samples") and using the formula:
$$\bar X_n = \frac 1 n \sum_{i=1}^n X_i \to\mu \text{ as } n \to \infty$$Also within simulations: you can guess the probability of an event $A$ by repeating an experiment and counting the average number of times the event occurs:
$$\bar P_n = \frac 1 n\sum_{i=1}^n I_i(A) \to P(A) \text{ as } n\to\infty $$$I_i(A) = 1$ if $A$ occurs, or $0$ otherwise
which implies $E(I_i) = P(A)$


Example:
![[Averages and simulations.png]]
- The average converges to the mean of $0.5$ eventually
- This follows binomial distribution (a bunch of Bernoulli trials)

## Types of Convergence
>We need this ^ result for Centre Limit Theorem among other things.

We looked at the *first* convergence type described with WLLN.
This one is...
### Convergence in Probability
Consider RV's $X_1, X_2, \dots$ and an RV $Y$. We say a sequence of RVs $X_n$ converges in probability to another RV $Y$ <span class="hide">(not a constant or mean, but we $Y$ generalises this definition. $Y$ could be a constant variable with average $\mu$ which is what is converged to)</span> as $n \to \infty$ if:
$$\lim \limits_{n \to \infty} P(|X_n - Y| \geq \epsilon) = 0, \forall \epsilon > 0$$
- The limit of the probability that $X_n$ differs from $Y$ by a factor greater than $\epsilon$ for any $\epsilon$
- Denoted as $X_n \to^P Y$ (which is the same as the result above)
Since the probability uses both $X_n$ and $Y$, it's a joint distribution. The identity line is $X_n = Y$. We want when the chance that $X_n - Y \geq \epsilon \implies Y \leq X_n - \epsilon$ OR $Y - X_n \geq e \implies Y \geq X_n + \epsilon$ 

![[Diagram for convergence in probability.png]]
- Depending on the $\epsilon$, the strip gets thicker or thinner
- IF $Y$ was a constant, then the diagram is very simple and the probability isn't joint anymore.

### Convergence in Distribution
$X_n$ <span class="emphasis">Converges in Distribution</span> to $Y$ as $n\to\infty$ if:
$$\lim \limits_{n\to\infty} P(X_n \leq x) = P(Y \leq x), \forall x \in \mathbb R$$
Denoted as as $X_n \to^D Y$
- Also $P(X_n \leq x) = F_X(x)$ (The CDF of the RV)
- And $P(Y \leq x)$ is CDF $F_Y(x)$
This holds for ANY $x$
- I'm dumb: We can't say $P(X_n = x) = P(Y = x)$ because for continuous variables the chances are both $0$. We gotta use CDF here.

![[Convergence in distribution diagram.png]]
- For the $x$ given there, we see if the CDF's at $x$ are the same among all those distributions

#### What for? For approximating probabilities!
- All we knew was $\bar X_n$ on average resulted in $\mu$. We had a upper bound (because we had variance) via Chebyshev's, but it's not very accurate.

### Central Limit Theorem
- Again it's about a sequence of RVs with common means and variances. We need to "standardise" (means we linearly transform $\bar X_n$ so the mean is $0$ and the variance is $1$)
So $$Z_n = \frac{\bar X_n - \mu}{\sigma / \sqrt n} = \sqrt n \cdot \frac{\bar X_n - \mu}{\sigma}$$
- Yeah i'm not tryna remember why this is the way it is
- $E(Z_n) = E(\dots) = 0$ eventually
- And $V(Z_n) = V(\dots)$
	- Subtracting a constant from a RV does NOT change its variance. So $V(\var X_n)