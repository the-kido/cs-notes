Continuous is a whole new world. 

# Continuous RVs
>[!defn] RV $X$ is called <span class="emphasis">continuous</span> if $P(X = x) = 0, \forall x \in \mathbb R$ (so PMF = 0)
> Strange, huh? Intuitively you might be like "but doesn't that mean nothing has a chance to happen". But you *can* have probabilities when $X$ takes an *uncountable* amount of values. e.g., an interval:
> $P(X \in [a, b]) = \alpha$ where $0 \leq \alpha < 1$
> - (If $X$ takes something uncountable, that means something like $\mathbb Q$ or $\mathbb R$, or an unbounded set of $\mathbb Z$)
> 
> Probabilities are 0 at discrete spots for the same reason that integrals are. These and integrals are tightly coupled! 
> - You can only have area over a certain "width"

So for continuous RV X, we are mainly interested in probabilities of intervals of X:
$P(X \in (a, b]) = P(A < X \leq b), \forall a < b \in \mathbb R$
- Interval type (closed/open) *does not matter*
	- Since $P(X \in (a, b]) = P(X \in (a, b)) + P(X \in b) = P(X \in (a,b)) + 0$

We can use CDFs (the ones we already know; works with discrete and continuous) but also <span class="emphasis">Probability Density Functions</span> (PDF) 

## CDF
Same as with discrete:
$F_X(x) = P(X \leq x)$ 
and
$P(a < X \leq B) = F_X(b) - F_X(a) = P(X \leq b) - P(X \leq a) = P(\set{X \leq b} \cap \set{X \leq a})$
$\forall a, b \in \mathbb R$ 

To find CDF, we can use the fact that
$F_X(x) = P(X \leq x) = \int_{-\infty}^x f(u)\;du = \text{ based on what the PDF is}$
- Also confirm that $\lim \limits_{x \to - \infty} = 0$ and $\lim \limits_{x \to \infty} = 1$
## PDF (exclusive to continuous RVs)
- PMF's were easy. Give outcome, get chance. PDFs are similar, but indirect 
- It does *not* directly map to probability. You need to integrate it!
- It's a real function $f_X(\cdot)$ such that it indirectly gives you the probability between two intervals via:
$$P(X \in [a, b]) = \int_a^b f_X(x)\;dx$$
- Remember: the interval doesn't really matter. It can be $[a, b], (a, b), (a, b]$, etc.
### Properties of PDF
1. $0 \leq f_X(x), \forall x \in \mathbb R$
	- PDF must always be $\geq 0$ otherwise the probability can be negative
	- Usually these are tiny tiny numbers. Super close to 0 (because of how integrating works)
	- If $f_X(x)$ is $0$, then that means the chance is literally impossible
	- BTW, $f(x) > 1$ is totally fine!
2. $\int_{-\infty}^{+\infty} f_X(x)\;dx = 1$ ($= P(-\infty < X< +\infty) = P(S)$)
	- This is to enforce that $P(S) = 1$
3. $F_X(x) = \int_{-\infty}^x f_X(u)\;du \implies f_X(x) = \dfrac{d}{dx} F_X(x) = F'_X(x)$
	- $F_X(x) = P(X \leq x) = P(-\infty < X \leq x)$ 
		- Note, not $-\infty \leq$ because cannot be equal to $-\infty$
	- This is the connection with CDF. It can be calculated with PDFs via the above formula
	- PDF $\to$ CDF via integration
	- CDF $\to$ PDF by differentiation


### How do we interpret the PDF besides knowing that, after integrating it, that it's the probability?
- It "gives the rate" at which probability accumulates at $x$ on RV $X$
	- This is implied; it's the derivative of $P(X \in [a, b])$ 
- A higher density $f(x)$ means higher probability for intervals *around* $x$
	- $P(x < X \leq x + dx) = F(x + dx) - F(x) \approx F'(x)\;dx = f(x)\;dx$
	- Where $dx$ is some small number

# Continuous Distributions
## Uniform
A uniform RV $X$ takes values in interval $[l , u], l < u \in \mathbb R$ so that its probability of any subinterval is just its length. $l$ for *lower*, $u$ for *upper*
$$P(a < X < b) = \frac{b-a}{u-l}, \forall l \leq a \leq b \leq u$$$b-a$ is the distance between the two. That is divided by $u-l$, which is the distance for the entire interval.
Denoted as $X \sim \text{Uniform}(l, u)$

> Unlike discrete uniform, where an interval's probability is the cardinality of the subinterval, divided by the cardinality of the entire interval (cardinality being the # of outcomes)

You cannot have a uniform distribution if the interval isn't bounded

### PDF
$$
f(x) = \begin{cases}
\frac{1}{u-l}, &l \leq x \leq u \\
0, &\text{otherwise}
\end{cases}
$$
### CDF
$$F(x) = \begin{cases}
0, & x < 1\\
\frac{x-l}{u-l}, & l \leq x \leq u\\
1, & x > u\\
\end{cases}
$$
- The middle is derived by $F(x) = P(l \leq X \leq x) = F(l) - F(x)$ (bounded below by splitting set of second probability)
![[Continuous Uniform Distribution.png]]
#### Example
>[!question] Random bus arrival
>Bus comes every 30 minutes. You wait at a random time. We let RV $X$ be the waiting time.
>
>We can say $X ~ Uniform(l =0,  u =30)$. The waiting time loops between 0 to 30 (you cant wait for 31 minutes)
>
>What's the chance the probability of waiting is *more* than 20 minutes?
>$P(X \geq 20) = P(20 \leq X \leq 30) = \frac 1 3$
>
>What's the chance you've waited more than 20 mins, given you've already waited 10 mins?
>
>Well that's $P(X \geq 20 | X \geq 10) = \frac{P(\set{X \geq 20} \cap \set{X \geq 10}) }{P(X \geq 10)} = \frac{P(X \geq 20)}{P(X \geq 10)} = \frac 1 2$

## Exponential Distribution
<span class="emphasis">Exponential RV</span> $X$ takes *positive values* according to PDF
$$f(x) = \begin{cases}
\lambda e^{-\lambda x} & x \geq 0\\ 
0 & x < 0 
\end{cases} \ \text{ for some }
\lambda > 0
$$

- It's useful for *time* until things happen
	- Bigger $\lambda$ means larger start but faster decline
- Denoted as $X \sim \text{Exponential}(\lambda)$ or $X \sim \text{Exp}(\lambda)$
- It looks funky because it enforces that, when it's integrated, that its area approaches $1$ such that the CDF approaches $1$ too (as it is required to)
- It is very similar to *geometric* (discrete) in that they have the memory-less property
	- Therefore it's used for time since it "resets" #todo Think about that...
		- He used a lot of examples in physics. At any moment, a radioactive isotope like Carbon-14 has a random chance to decay (with a decay rate of $\lambda$). The time that a single nucleus decays follows an Exponential distribution!
	- Think about the [[Lecture 1 (09-30)#My personal Minecraft Example|Minecraft Example]] but instead of discrete ticks, it's smooth time (i.e. each micro-micro-second has a $\frac 1 {10^{100}}$ chance or something really small. <-- Technically this is also discrete (units are in micro-micro-seconds but it's almost imperceivable and therefore model-able continuously) 


>[!question] Web server question
>You send a request to a web server. We wait for things and they take time.
>
>The CDF of service time is $F_X(x) = P(X \leq x) = \int_{-\infty}^x f_X(u)\;du \stackrel {x \geq 0} = \int_{-\infty}^0 0\; du + \int_{0}^x \lambda e^{-\lambda u}\; du = [-e^{-\lambda u}]_{u=0}^x = -e^{-\lambda x} - (-e^{-\lambda 0)}$
>$=1 - e^{-\lambda x}$
>and for $x < 0$ it's just $0$ 
>
>Show Memory-less property: Show $P(X > x +y | X > y) = P(X > x)$
>

Okay I can do this (i think $x > y > 0$)
$= \frac{P( \set{X > x + y} )  }{P(X > y)}$
$= \frac{1 - P(X \leq x + y)}{1 - P(X \leq y)}$
$= \frac{1 - (1 - e^{\lambda(x + y))}  }{1 - (1 - e^{\lambda(y)} )}$
$= 1 - (1 - e^{-\lambda x})$
$= 1 - P(X \leq x)$
$=P(X > x)$
### CDF
(Derived from PDF)
$$ F_X(x) = \begin{cases}
1 - e^{-\lambda x} & x \geq 0 \\
0 & x < 0
\end{cases}
$$


It (and geometric) have the memory-less property

## Expected Value of continuous

The formula is derived by scaling the $g(X)$ result by the density $f_X(x)$ at each infinitesimally small point and add them up 
$$E[g(X)] = \int_{-\infty}^{+\infty} g(x) f_X(x)\;dx$$
$$E(X)= \int_{-\infty}^{+\infty} x f_X(x)\;dx$$
Linearity still holds for $E$ as it did with the discrete case:
$E(aX + bY) = aE(X) + bE(Y)$


 >[!question] What is the expected for $\text{Exponential}(\lambda)$ 
 >
 >$E(X)$
 
#todo If you wanna do this for practice go ahead. Use integration by parts