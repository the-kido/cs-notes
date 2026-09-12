# Gamma Distribution
Closely related to Poisson distribution

- A sum of independent exponential values.
- Usually for "waiting time until a certain number of independent random events, where each event has an *exponential* (memoryless) waiting time"
- So $X = X_1 + X_2 + \dots + X_a$ where $X_1, \dots, X_a \sim \text{Exponential}(\lambda)$ and, by definition, $X \sim \text{Gamma}$
	- Similar to how Binomial is a sum of Bernoulli trials

- No closed-form **CDF** exists, but there is a closed-form **PDF**. We will derive it in the future. For now, the formula is given.
$$ f(x) = \begin{cases}
\frac{\lambda^a}{\Gamma(a)} \cdot x^{a-1}e^{-\lambda x}, &x > 0\\
0,& x \leq 0
\end{cases}$$
> Note: the term $\frac{\lambda^a}{\Gamma(a)}$ at the front is a "normalizing constant" and is required to scale the distribution so the total integral is $1$ 

- Gamma is the continuous interpolation of a "factorial" function
	- $\Gamma(a) = \int_0^\infty x^{a-1}e^{-x}\;dx$
	- and
	- $\Gamma(a) = (a-1)!$
- Denoted $X \sim \text{Gamma}(a, \lambda)$
	- $a$ = the "number of times event should happen before success" and $\lambda$ is the unit of time the thing happens each time (independently!)
- "Analog of negative binomial" #todo
- $X$ gives time until $a^\text{th}$ event
- Increasing rate means smaller expected value ($\frac 1 \lambda$ as per exponential)
- Special case: when $a = 1 \leftrightarrow \text{Exponential}(\lambda)$
	- Means sum is just one exponential. It's pretty obvious


### Example
- The relation: The setup for Poisson is the same as gamma. The time/space that an event occurs is Exponential($\lambda$) which is the *exact same* as the Poisson. You have several of these events occurring over the continuum. On average, it's $\lambda$ times, but you can get lucky and have each exponential happen faster!
	- (Remember that Poisson is a discrete RV that counts # of events over some continuum--time/space)
	- Generally, Poisson can take any value from $0$ to $\infty$ (Bigger $\lambda$ would make larger numbers more likely, of course)
![[Poisson Gamma relation.png]]
Also $P(\text{2nd event occurs "after" time "1"}) = P(Y \geq 1) = P(X \geq 1)$

>[!explanation] The intuition.
>$X \sim \text{Poisson}(\lambda)$ gives the # of times an event occurs, with the average being $\lambda$ over 1 "time". (For illustration, think of time as "10 seconds") 
>$Y \sim \text{Gamma}(2, \lambda)$ gives the *time* until $2$ events occurs. There are various times possible. It depends on how fast the individual Exponential events occur (if they fast, you're lucky!)
>
> 

# Normal (Gaussian) Distribution
- If you take sums of events and divide by the number of events, it converges to the *normal*. It's the iconic bell shape
	- This can be a Binomial PMF, Gamma, etc. 
- Denoted as $X \sim N(\mu, \sigma^2)$
- It's centered around the *mean* value
- Bigger variance = more spread = $\sigma^2$ 
PDF has a BIG formula!
$$f(x)=\frac{1}{\sqrt{2\pi}\sigma}\cdot\exp\left\{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^{2}\right\}$$
- $\exp \set{x}= e^x$
- $\frac{1}{\sqrt{2\pi}\sigma}$ is a normalizing constant
- $\frac{x - \mu}{\sigma}^2$ is parabolic. This gives the "bell shape". It's then flipped by -1/2

Denoted: $X \sim N(\mu, \sigma^2)$
- $\mu \in \mathbb R$ is the *mean* (represents the center)
- $\sigma > 0$ is the standard deviation / spread 
When $\mu = 0$ and $\sigma = 1$, that's your standard normal.

#### Example and **Mnemonic** to remember
68-95-99 rule:
- $P(\mu - 1\sigma \leq X \leq \mu + 1\sigma) = 68.27$
	- This applies to *all* normal distributions. It's a powerful thing to remember
	- Reads as: The chance of the outcomes $\sigma$ away from the center
![[Normal mnemonic.png]]
- It applies no matter the shape nor size!
# Quiz
a)
We know that, for PDFs, $F'(x) = f(x)$

So, for $t < 0$, $F'(x) = (0)' = 0$ 
For $t \geq 0$, $F'(x) = (1-e^{-(\lambda t)^k})'$
$=-e^{-(\lambda t)^{k}}\cdot(-k\lambda^{k}t^{\left(k-1\right)})$
$= e^{-(\lambda t)^{k}}\cdot k\lambda^{k}t^{\left(k-1\right)} = f(t)$

b) 

We find $h(t)$

For $t<0$:
$h(t) = \frac{0}{1 - 0} = 0$

For $t \geq 0$:
$$h(t) = \frac{ e^{ -(\lambda t)^{ k }}\cdot k\lambda^{k}t^{(k-1 ) }} { 1 - (1 - e^{-(\lambda t)^k})}$$

$$= \frac{k\lambda^{k}t^{(k-1 ) }}{1} $$
$=k \lambda^k \cdot t^{k-1}$
c)

$h(t) = \lambda \cdot t^0$
=$\lambda$

Since the hazard rate is simply $\lambda$, which is constant w.r.t $t$, the function itself is constant


d) 

To find increasing and decreasing, we will use the first derivative test
For $t \geq 0$: 
$h'(t) = (k-1)(k\lambda ^k)t^{k-2}$
$= k(k-1)\lambda^kt^{k-2}$

$\lambda^k > 0$ since $\lambda > 0$ (as it's the rate parameter). $t^{k-2}$ is a power function and is therefore $\geq 0 , \forall t > 0$. Notice $k(k-1)$ changes signs at $k=1$ and $k=0$ (but $k >0$ so it will only change at $k=1$)

For $k > 1$, $h'(t) > 0$ since $k(k-1) > 1 \cdot (0) = 0$ and $\lambda^k t^{k-2} > 0$
For $k < 1$, $h'(t) < 0 since $k(k-1) < 1 \cdot (0) = 0$  

Therefore, when $k > 1$, it's increasing, and when $k < 1$, it's decreasing


e)
To find the mean, we use $E(X)= \int_{-\infty}^{+\infty} x f_X(x)\;dx$
Let $T$ be a Weibull distribution with parameters $\lambda>0$ and $k>0$  

Then $E(T) = \int_{-\infty}^\infty t \cdot f(x)\;dt = \int_{0}^\infty t \cdot f(x)\;dt$
$= \int_{0}^\infty t \cdot \left[ e^{-(\lambda t)^{k}}\cdot k\lambda^{k}t^{\left(k-1\right)} \right]\;dt$
$= k \lambda^k  \int_{0}^\infty t\cdot e^{-(\lambda t)^{k}}\cdot  t^{k-1} \;dt$

> U-sub:
> $u = (\lambda t)^k \implies \lambda^k t^k$
> $du = k \lambda^k \cdot t^{k-1} \;dt$

$= \int_{0}^\infty t \cdot e^{-(\lambda t)^{k}}\cdot  k \lambda^k \cdot t^{k-1} \;dt$
$= \int_{0}^\infty t \cdot e^{-u} \;du$
To get closer to the $\Gamma(z)$ formula:
$u = (\lambda t)^k$
$\implies u^\frac{1}{k} = \lambda t$ (since $k$ is just a constant)
$\implies \frac{u^{1/k}}{\lambda} = t$

So $\int_{0}^\infty t \cdot e^{-u} \;du$ 
$= \int_{0}^\infty \frac{u^{1/k}}{\lambda} \cdot e^{-u} \;du$
$=\frac 1 \lambda \int_{0}^\infty  u^{1/k} \cdot e^{-u} \;du$
Lastly, $z - 1 =  1/k$
$\implies z = 1/k + 1$
$\implies \frac 1 \lambda \int_{0}^\infty  u^{1/k} \cdot e^{-u} \;du= \Gamma(1/k + 1) \cdot \frac 1 \lambda$
