#todo Watch the first lecture where he explains the intuition of Moments
Then finish the quiz (high priority) and then do whatever else you want past that point. 

### Moments
- These are "expected values" of the different "power" transformations of $X$

For instance, the first moment is the mean: $E(X^1) = \mu$ 
- This means the "center" of a distribution
Higher orders do other things

>$r^{th}$ <span class="emphasis">moment</span> of $X$ is $E(X^r)$

The <span class="emphasis">central moment</span> of $X$ is $E[(X-\mu)^r]$ (the power of the *distance* between all $X$ and its mean/average)
- For instance, the $2^\text{nd}$ central moment is *variance*
- $E[(X - \mu)^2] =V(X) = \sigma^2$

Also, the $1$st order central moment is $E[X-\mu] = E[X] - \mu = 0$ since $E[X] = \mu$ so yeah. This works for all RV $X$
- We treat $\mu$ as an RV that just takes 1 value (which is $\mu$)

#### Other moments and what they mean

>[!defn] 3rd moment describes *skewness*
>Positive skewness has heavier left and lighter tail on the right

>[!defn] 4th moment describes "Kurtosis" or how the tails behave (how fast they go to $0$)

We don't really care about any moment past $1$ and $2$

### Moment Generating Function (MGF) 
For RV $X$, the MGF is 
$m(t) = E(e^{tX})$ 
- This helps describe all moments
- Note at $t=0$, $E(1)=1$ #todo why (calculate)

You can calculate any expected via derivatives #todo include

#### Proof
The change order step isn't always legal

### Example
Finding the MGF is just one integral
$m(t) = E(e{^{tX}}) = \int_{-\infty}^\infty e^{tX}f_X(x)\;dx = \dots$
- The rest is on the notes. He also pulls out $\lambda - t$ to show that this thing looks exactly like Exponential($\lambda - t$)
- Also remember that the integral of all points of the PMF is $1$ (same with sum). Idk how I forgot this...
- To verify, we can check that when $t=0$, that the MGF is $1$ (which it is!)

Then to find $E(X) = 1/\lambda$ we can verify it via the MGF
$m'(0) = \dfrac d {dt} |_{t=0}$ #todo lowkey idk how he found that derivative



### MGF Method (Unique Characterisation)
- If two RVs have the same MGTs, then they must have the same distribution
- $X \sim Y \neq X = Y$
	- Like if you have two dice, and they have RVs X and Y, these RVs are not the SAME since they roll different values in this universe (they wont always roll the same number as each other). 

- ALSO, you can use MGFs to find the distribution of a function of RV's
	- For instance, if $Y = g(X_1, \dots, X_n)$, then it has $m_Y(t) = E(e^{tY}) = E(e^{t \cdot g(X_1,\dots, X_n)})$
	- Since MFGs characterize distributions, $Y$ follows the distribution of it, if known
	- Also it's very useful for linear functions of independent RVs in particular

> The linear example (with product $\Pi$)

## Inequalities
Using expectations of RVs to make general statements (nothing *exact* but still important)

### Markov Inequality
For all $a$ (usually ones *greater than* or right of $E(X)$), then $P(X \geq a) \leq \frac{E(X)} a$ 
- It shows that the right-tail probability cannot be *greater* than the expression $E(X) / a$ 
- The bigger $a$ is, the more informative. 
- If the $a$ is less than E(X), this statement vacuously holds but it's not that impressive of a statement
##### Proof 
Is very easy. You split the E(X) up between $a$ and the inequality is trivial after that point

##### Example
Commuting! 
$E(X) = 30$. You want to know the chance of being late if you leave 1 hour in advance. 
$P(X \geq 60\text{ mins}) \leq \frac{E(x)}{a} = \frac{30}{60}  = 1/2$
- It'll be *less* than 50% chance of not being late. You are guaranteed it'll be better than a 50% chance

### Chebyshev Inequality
- Also related to tails. Applies to all RVs (including negative ones) and gives extra information!
- Oops I didn't write it down. Oh well
#### Proof 
#todo I dont rlly have time for this `¯\_(ツ)_/¯`

 ##### Example
 Unlike Markov, Chebyshev requires the $a$ to be relative to the $\mu$ 
 So $P(X \geq 60)$ becomes $P(X - 30 \geq 30)$ since $E(X) = 30$ and we can now set $a = 30$ too.
### Jensen Inequality
For any RV $X$ with convex function $g$, then $E(g(X)) \geq g(E(X))$
- Remember convex means second derivative positive. Means $U$ shape.
	- $X^2$ is one such example!
- Opposite inequality holds for concave as well

##### Example
We know $g(x) = X^2$ is convex since $g''(x) = 2 \geq 0$
By Jensen's we get:
- $E[g(x)] \geq g(E(x)$ 

### Cauchy-Schwarz Inequality
- Wow it's crazy looking. 
- For two RVs $X, Y$, you get a funny-looking thing
#todo At 50:00 he starts explaining. Lowkey I am very lost / not paying attention so let's go over it later 

# Quiz
### Q1 
a)
Mean = 1st moment
$m_X(t) = \frac{e^t + e^{2t}}{2 - 2t}$ just expanded to make things easy

$m_X'(t) = \frac{ (e^t + 2e^{2t}) \cdot 2(1 - t) - (e^t + e^{2t}) \cdot(-2) )  }{ 4(1-t)^2}$
$m_X'(0) = \frac{ (1 + 2)(2) - (1 + 1)(-2) }{4}$
$= \frac{10}{4}$
$=\frac 5 2$

b)
Variance = 2nd moment

$m'(t) = \frac{e^t + 2e^{2t} }{2(1-t)}  + \frac{e^t + e^{2t}}{2(1-t)^2}$
$m''(t) = \frac{\left(e^{t}+4e^{2t}\right)2\left(1-t\right)-\left(e^{t}+2e^{2t}\right)\left(-2\right)}{4(1-t)^{2}}+\frac{\left(e^{t}+2e^{2t}\right)\left(2\left(1-t\right)^{2}\right)-\left(e^{t}+e^{2t}\right)\left(2\left(-2-2t\right)\right)}{4\left(1-t\right)^{4}}$
$m''(0) = 15/2$

Then 
$Var(X) = E(X^2) - E(X)^2 = m''(0) - m'(0)^2 = \frac{30}{4} - \frac{25}{4} = \frac{5}{4}$


c)
This question has us using the MGF Method. 

$m_X(t) = e^t \cdot \frac{1+e^t}{1} \cdot \frac 1 2 \cdot \frac{1}{1-t}$
The $\frac{1}{1-t}$ looks exactly like the MGF for Exponential as we covered in class.
Then the rest of the expression, $\frac{e^t + e^{2t}}{2}$ is the MGF for something else. 
Taking the derivative and evaluating to $0$, it gives $\frac{2(e^t + 2e^{2t}) }{4}|_{t = 0} = \frac{1 + 2}{2}$ which looks like the mean for "uniform" from 1 to 2 with 2 items "1" and "2".
So $Y \sim \text{Exp}(\lambda = 1)$ and $Z \sim \text{Uniform}(\set{1, 2})$
These are completely independent as well!

d)
for a) we got the mean, which is $E(X) = E(Y + Z) = E(Y) + E(Z)$ (by independence and linearity of E)
$\implies E(X) = \frac 1 \lambda  + \frac 3 2= \frac 5 2$ (since $\lambda = 1$)
Which is what we got before!

Then for b) we needed the variance which is just:
$Var(X) = Var(Y) + Var(Z) + 2Cov(Y, Z)$ (but covariance = $0$ since independent)

To find, $Var(Z) = E(Z^2) - m_Z'(0)^2$ we first find $E(Z^2)$
$E(Z^2) = 1^2 \cdot \frac 1 2 + 2^2 \cdot \frac 1 2 = \frac 5 2$
Then $Var(Z) = \frac 5 2 - (\frac 3 2)^2 = \frac 1 4$

$Var(Y) = 1/\lambda^2 = 1$ as well

So $Var(X) = Var(Y) + Var(Z) + 0$
$= \frac 5 4$
Again, the same as what we got previously!


### Q2
a)
We use Jensen's, with $g = e^{-x}$ and we know it's convex by graphing.
Then $E(e^{-X}) \geq e^{-E(X)}$
$\implies e^{-E(X)} \leq E(e^{-X})$ as required


b)
We use Cauchy-Schwarz first:
$|E(XY)| \leq \sqrt{E(X^2)E(Y^2)}$
$\implies E(XY)^2 \leq E(X^2)E(Y^2)$
And because X and Y are "identically distributed" and moments discern uniqueness, $E(X^2) = E(Y^2)$ 
$\implies E(XY)^2 \leq E(X^2)^2$
Lastly by Jensen's with $g(x) = x^2$ which is convex:
$E(X^2)^2 \leq E((X^2)^2) = E(X^4)$
So $E(XY)^2 \leq E(X^4)$


c)
We use Markov's where $a = 2$  
$P(|X + Y| > 2) \leq \frac{E(|X + Y|)}{2}$

Now all we have to do is show $\frac{E(|X + Y|)}{2} \leq E(|X|)$, or that $E(|X + Y|) \leq 2E(|X|) = E(2|X|)$

We know $E(|X +Y|) \leq E(|X| + |Y|)$ by triangle inequality since function $E$ is linear
$= E(|X|) + E(|Y)|$ again by distribution
$=2E(|X|)$ since X and Y are identically distributed 
$\implies \frac{E|(X + Y|)}{2} \leq E(|X|)$

Therefore $P(|X + Y| > 2)  \leq E(|X|)$ as required 

