### Example:
25 tasks
variance is 4

Each X_i

S = sum of X_i = job completion time
Also E(S) = sum of E(X_i) = 2 * 25 = 50
V(S) = V(X_1) + V(X_2) + ... + Cov but that's 0 so $= 25 * 2^2 = 100$

We want P(S >= 60) = P(S - 50 >= 10)
- To use Chebyshev we need to subtract by the mean of "50"
=> $P(|S - 50| >= 10) \leq V(s)/10^2 = 1$
Trivial bound... Nothing useful
But we haven't used the fact that S is at least $0$. It's bounded below
- This lets us use Markov's ineq
$P(S \geq 60) \leq E(S) / 60 = 5/6$ 
- Still not tight but better than $1$

We can also use CLT since these are i.i.d and we have the mean and variance of each variance. The sum will converge to a Normal.
From CLT: $\bar X_{100} = 1/100\cdot S \sim N(\mu, \sigma^2/n) = N(2, 4/25)$
Okay he went from $100$ to $25

So $P(S \geq 60) = P(S/25 \geq 60/25) = P(\bar X_{25} \geq 2.4)$
If $X_{25} \geq 2.4$, then $Z \geq \sqrt{25} \frac{2.4 - 2}{2} = 1$
$= P(Z \geq 1)$
which is 16% 
Because $P(-1 \geq Z \geq 1) = 68$ but for $P(Z \geq 1)$ we're only using one half and it's the bottom half.
So $(1-.68)/2 = 0.16$

## Monte Carlo Integration
Oppenheimer
and approximating integrals!
Tragically it's not on the cheat sheet. This would be a question on a test more than anything else.

You're taking the average of $h(X) = g(X)/f(X)$ where $g$ is the function we wanna integrate and $f$ is a PDF
The two terms are i.i.d. It's the average of i.i.d variables! 
Means with WLLN, $M_n \to^P E(M_n)$ as $n \to \infty$ 

### Statistics Setup
Let's say we have a population and we wanna know something about them. Say, income.
There might be an average or variance for income.

But it's impossible to get data from everyone. We do random sampling vs. censuses 
So each "person" is an RV $X_1, \dots, X_n$ per person with sample size $n$

We "assume" the population is described by a distribution we call $F_X(x)$ (like, say, Bernoulli Distribution)

<span class="emphasis">Sample statistic</span> is any function/transformation of the sample data (like say, mean).
$\bar X_n$ is the "sample mean" and it's a transform of all the RVs in the sample!
- We know that $\bar X_n \to^P \mu$ as $n \to \infty$ by WLLN
- <span class="emphasis">Sampling distribution</span> is the distribution of the sample statistic
- For instance we know $\bar X_n \sim N(\mu, \sigma^2/n)$ by CLT

The accuracy of estimation increases at a rate of $1/\sqrt n$?



Quality Control question.
We want to measure *extreme* results. We want to know if the sample has 500.5 or more and finding its chance.
If the "$p$" is small, then we're good.

For a well-calibrated machine, we know $\bar X_{25} = 1/25(X_1 + \dots + X_{25})$ where $X_i \sim^{iid}$ from $F_X$ with $E(X_i) = 500$ and $V(X_i) = 4^2 = 16$ per sample.

From CLT: $\bar X_{25} \sim^\text{approx} N(500, 0.8^2)$ <-- This is our sampling distribution.

Then $P(X_{25} > 500.5)$
$= P(Z > \frac{500.5 - 500}{0.8})$
$=P(Z > 5/8) = 0.2659$
Not very extreme, right? 26% being below is fine

And also we want a *small* standard deviation. Like imagine each bottle had either 300 or 700ml. The average is 500 but that's no good

We want to measure *variance*!

<span class="emphasis">Sample Variance</span>
Similar to $\bar X_n$ but for variance, not mean.

$S^2_n = \frac{1}{n-1} \sum_{i=1}^n (X_i - \bar X_n)^2$
- It's the expected value of the squared distance of $X_i$ from its mean
	- We use sample mean and not $\mu$ because we might not know the individual means

It's another "function" of our sample.
- We do $n-1$ and not just $n$ to compensate for the "underestimate" of $X_i - \bar X_n$ 
- This makes it "unbiased"
- Let's show that!

We show $E(S_n^2) = \sigma^2$
$E(S_n^2) = E(\dots)$

oh god.
Yeah no not for me.

# Lecture 2
Now we get Sampling Distribution for sample variance!

### Chi-Square distribution
For $Z_1, \dots, Z_n$ (the standardised normals) and you square any of them, then $Z_1^2 \sim Gamma(1/2, 1/2)$ 
And $Z^2_1 + \dots + Z^2_n \sim Gamma(n/2, 1/2)$
- Sums of Gamma's with the same shape added results in a gamma with the shapes added

$Gamma(n/2, 1/2) = \chi^2*(n)$ is your "chi-square" distribution with parameter $n$
NONE of this is on the sheet

And the distribution $\frac{(n-1)S^2_n}{\sigma^2} = \dots$ am giving up.

We first show that $Z \sim N(0, 1) \implies Z^2 \sim \chi^2(1)$

We know $f_X(x) = \dots$ a REALLY big thing for normal distribution. In formula sheet

Also for $X \sim Gamma(a,\lambda)$ has MGF $\lambda/(\lambda - t)^a$
so $\chi^2(1) \sim Gamma(1/2, 1/2)$ means it has an MGF of $\frac 1 2(\frac 1 2 - t)^\frac {1}{2}$

Then for $Z^2$: $m_{Z^2}(t) = E(e^{tZ^2}) = \int \dots$
and you keep finding it. We don't need to brute force anything. We can just find other densities cuz the integral will be $1$
- Very obvious when the integral is super hard to do



# Extra
1. $P(A) = P(A \cap B) + P(A \cap B^C)$ by LoTP
2. $P(A) = P(A|B)P(B) + P(A|B^C)P(B^C)$ by LoTP with conditionals
3. For CDFs, right continuous means you show $\lim{x \to k^+} F(x) = \frac k n$ where $F(x) = \frac k n$ 
