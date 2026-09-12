Covariance/correlation measures *linear dependence* as well as conditional distributions

$E(X)$ is always the centre of a distribution.
Variance is the expectant value (the square distance of X from its mean)
- Describes how spread out the distribution is

Covariance is *an expected value* defined on two RVs (joint distribution) and the `cov` of these two RVs is the expected value of a function.
 - We multiply the distance of X from its mean by the distance of Y from *its* mean
 - It describes the aggregate behaviour of these two variables. Relations!
 - And it's somehow related to linear dependence
	- If independent, one variable doesn't affect the other's value

Correlation is the same thing as covariance but "easier to interpret"
- Covariance's magnitude depends on the variability of *both* X and Y (how far away we are affects the mean/variance)
- But for correlation we divide by the standard deviation of both X and Y (i.e., the average spread) such that the covariance is bounded from -1 to 1


### The disc example
We assume that X and Y are uniform. That means the imaginary surface is a flat plane. That means the PDF is a cylinder. Because of that, the "mean" for $X$ and $Y$ is the center of the circle (just by symmetry right)
- Think: The marginal of $X$ will look like a bell, 0 at the sides of the circle and tallest at the center of the circle
![[Covariance disc example.png]]
- For covariance, we look at the distance of $X$ from its mean, and $Y$ from its mean
- We can find this covariance (remember, $E$ expected is the sum of all possible points) just by geometry.
	- ![[Disc example defeated via geometry.png]]
	- For each positive distance, there is a negative distance. Averaging all of those gets you $0$. So the covariance is $0$
	- Which means that the variables $X$ and $Y$ are not correlated (since it's $0$) but they *are* **dependent**! Linearly dependent, actually
		- For instance, the range of $Y$ depends on which $X$ you choose. This wouldn't be the case of the area was *rectangular*

![[Positive Covariance.png]]
- For this example, the covariance is positive because for the top right and bottom left quadrants, the product will be positive. For the other 2 quadrants, the products are negative BUT they are smaller than the positive quadrants.
	- So when adding all together, positive wins
- If covariance is positive, if one value is greater, then the other is probably also greater
	- #todo Go back to the intuition for why this is at 30:00


### Example
Im just listening
But for the variance of p = 0.5, doesn't that imply dependence? Yes, I think so, but the contrapositive does not hold. 
Positive correlation means if one is bigger then the other will tend to be bigger. 
- If they *are* correlated, the variance should be greater

The variability increased by a lot! If one is small the other tends to be small and vice versa. This relation gets "exacerbated"
- Expected value stays the same though.
- What changes (when correlation changes) is the strength of the concentration for the distribution

![[Variance and Covariance relation.png]]

## Covariance Properties
For the sum one, remember that the sums of the coefficient and $X_i$ combined is just "another" RV but the RV is a sum of other RVs
- Anyway sums like those in a covariance supports linearity. "Linearity of covariance"

#### Example
Test with T/F questions
- Not independent, but *positively correlated*. Think of it as a "momentum effect" where if you answer the first right, you do the next right. But if you get the first wrong, you sorta panic and struggle on the next one too. So the correlation coefficient is $1/2$
The score is a sum.
We can use an indicator RV $I_k = \begin{cases} 1, \text{ with probability} \frac 3 4 & \text{Correct answer} \\  0 \text{ with probability } \frac 1 4 & \text{o/w}\end{cases}$

The mean of Bernoulli / indicator is $E[I_k] = 3/4$ and $V(I_k) = p \cdot q = \frac{3}{16}$

Total score is $X = \sum_{k=1}^{10} I_k \implies E(X) = E(\sum_{k=1}^{10} I_k) = \sum_{k=1}^{10}E(I_k) = 7.5$
- This just uses regular linearity of $E(X)$, nothing new yet

Then $V(X) = V(\sum_{k=1}^{10}I_k) = \sum_{k=1}^{10} V(I_k) + 2 \sum_{k=1}^{10} \sum_{j=k+1}^{10} Cov(I_k, I_j)$
and $Cov(I_k, I_j) = \sigma \sqrt{V(I_k)V(I_j)} = \frac{1}{2} \cdot \frac{3}{16}$
Sooo $=10 \cdot \frac{3}{16} + 2 \cdot \_\_\cdot(\frac 1 2 \times \frac 3 {16})$
- The blank is some coefficient. What is the value though 🤔
- It's $\frac {10 \times 9} 2$ using the fancy visual he made... i don't totally get it yet #todo 
	- Generally it's $\frac{n(n-1)}{2}$ where $n$ is the width (10 in this case)

Anyway in total $V(X) = \frac{165}{16}$

## Conditional Expectation
$$E[Y|X] = \begin{cases} \sum_y y\;p_{Y|A}(y) \\ \int_{-\infty}^\infty y\; f_{Y|A}(t)\;dy\end{cases} $$
Top for discrete. Bottom for continuous. We just fix a certain $A$ and find the probability by adding up all the $Y$'s

#todo include the expression for $E[Y | X = x]$


### Example 
Take-out restaurant 

$E(X | Z= 1)$
 He made an awesome diagram and fixed $Z = 1$ Also important to know he didn't draw $X, Y$ and instead $X, Z$ cuz they also define $Y$ which is kind of irrelevant here
 #todo I do NOT remember how he got the joint for $f_{X, Z}$ 
But finding $f_{X|Z}(x|1)$ is easy since we already have $f_Z$ and $f_{X, Z}$
so $E[X | Z = 1] = \int_{-\infty}^\infty f_{X|Z}(x|1) \;dx = \int_0^1 x \cdot 1 \;dx = [x^2/2]_0^1 = \frac 1 2$

Which makes sense. The average is just half the wait time.

Also $E(Z | X=1)$ is very similar. We KNOW the time will be more than 1 minute. The time *should* be $2$ because they take the same time and the prep time is independent *and* the tuning parameter is $1$ minute as well.
Similarly $E(Z | X  =1/2) = 1/2 + 1 = 1.5$

> If you want "average income" Y based on "educational level" X, then $Y|X$ models that
> $E[Y | X]$ is the estimate of $Y$ based on $X$ 

Also $E(Z | X) = E(X + Y | X) = x + E(Y|X) = x + E(Y) = x + 1$
$\implies E[Z | X] = X + 1$ 
#todo Really think about

#### Properties
1. $Y \perp X \implies E[Y|X] = E(Y)$
2. "Taking what is known"
3. Conditional expectations are like regular expectations (linearity)

### Law of Total Expectation (LoTE)
AKA "Tower Law"
Helps with painful calculations
$$E(Y) = E[E(Y | X)]$$ It lets us find the expected of $Y$ via the RV $X$ instead!

