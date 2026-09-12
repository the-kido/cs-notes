# Week 1
*Random Experiment* = Rolling a die. It's the "process" whose result is unknown (what number do we roll?)

Outcome = Elementary result of an experiment.

Sample Space = All possible outcomes

Event = A subset of the sample space

Universal set $S$ (think of it like the sample space/universal set)
Outcomes are samples and Events are sets

For the slide 11 example, the set $S$ is all possible outcomes. The outcomes are sets. You can easily enumerate over them all!

But for tuples (which are ordered) there are far more permutations. For instance, in the "3" egg situation, w/o tuples (sets) it would be 4 possible ways (0, 1, 2, 3 males) but with tuples (ordered) it's $2^3  = 8$ ways

Venn diagram can have big "areas" for events which are the outcomes IN the event. Everything outside is not.

Complements:
- $A \cup A^C = S$
- $A \cap A^C= \emptyset$
- $S^c = \emptyset$

Disjoint sets = intersection is empty. Means no common elements at all.

#flag
Probability axioms!
- A probability function $P$ must satisfy:
	- $\forall A \subseteq S, P(S) \geq 0$
		- For all events, the probability is >= 0
	- $P(S) = 1$
		- The sample space (everything) is $1$
	- $\forall$ disjoint $A_1, \dots, A_n$, then $P(A_1) + \dots + P(A_n) = P(A_1 \cup \dots \cup A_n) = P(\cup_i^n A_i)$

#flag
*Law of total probability*
- Has to do with "partitioning"
For all $A_1, A_2, \dots$ *partitions* of $S$, and some event $B$, then 
$P(B) = P(B \cap S) = \sum_i P(B \cap A_i)$
Because $S = \cup_i A_i$

Complement rule: $P(A) = 1 - P(A^C)$
Or also $P(A^C) = 1 - P(A)$

#flag Inclusion-exclusion principle
$P(A \cup B) = P(A) + P(B) - P(A\cap B)$
- Remember that it's $\cup$ at the start

(Referring to the slide 21 example)
If two sets A, B are disjoint, then $P(A \cup B) = P(A) + P(B)$ since $P(A \cap B) = 0$ 

Countably infinite = map-able 1-1 to the naturals

For discrete probability, $P(A) = |A|/|S|$ 

#flag 
Multiplication rule: If you have two sets of elements of size $n$ and $m$ (think n has 3 elements and m has 5) then there are $n \cdot m$ total "ordered pairs" (tuples)

For $n$ coin flips, there are in total $2^n$ total outcomes possible

#flag PERMUTATIONS
$P_k^n$ where $k$ is # of total elements and $n$ is number of elements to choose from $k$.
- Gives the # of ordered pairs of size $n$ from $k$
- Useful example: Selecting 5 people for different (different roles = order is differentiable) roles out of 10 people
Given as $P_k^n = \frac{n!}{(n-k)!}$

Combinations = unordered collection of $k$ objects chosen from $n$ total objects.
Generally: # combinations < # of permutations

# Week 2
Conditional probability means $A|B$ stuff
$P(A|B) = \frac{P(A\cap B)}{P(B)}$
- Reads as "The chance of A given B holds is the same as the probability of A and B holding where the sample space is just B"
- $P(B) > 0$ must be true
- Uses fact: $P(A) = \frac{P(A \cap S)}{P(S)} = P(A|S)$

They follow probability axioms
1. All probabilities $P(A|B)$ are >= 0 (and $\leq 1$)
2. $P(S|B) = 1$
3. For all partitions, $P(\cup_i A_i | B) = \sum_i P(A_i|B)$

#flag Other way to write cond. probability:
$P(A \cap B) = P(B|A)P(B)$ OR $=P(A|B)P(A)$

#flag 
Total law of probability for conditional
$P(B) = P(B|A_1)P(A_1) + P(B|A_2)P(A_2) + \dots$

The simplest form is with the partition $\set{A, A^C}$
where $P(B) = P(B|A)P(A) + P(B|A^C)P(A^C)$

#flag Bayes rule
$P(A|B) = \frac{P(B|A)P(A)}{P(B)}$
Proof is easy.

Also you can rewrite further using Law of Total Probability with $P(B) = \sum_i P(B|A_i)P(A_i)$
In the simplest case you'd replace $P(B)$ with $P(B|A)P(A) + P(B|A^C)P(A^C)$


#flag Independence 
Events A, B are independent if $P(A\cap B)=P(A)P(B)$
- NOT the same as disjoint! 
	- For disjoint, $P(A \cap B) = 0$. Means $A,B$ have no common outcomes.
	- Independent just means result of $A$ doesn't affect $B$
- Also means $P(A|B) = P(A)$ with some math


#flag For *sets* of events (not just 2) where *a subset* of all events are independent from each other is *mutual independence*
Pairwise is != mutual, but
1. Mutual independence *implies* pairwise independence
2. Not the other way around though. Pairwise is weaker
Mutual Indep means $P(A_{k_1} \cap \dots \cap A_{k_n}) = \Pi_{i=1}^n P(A_{k_i})$

#flag Condition with multiple events
$P(A|B,C) = P(A, B\cap C)$ where $P(B \cap C) > 0$

Mutual Vs. Pairwise
- Pairwise = All pairs in a set have $P(A \cap B) = P(A)P(B)$ property for any pair $A,B$ 
- But that doesn't mean you'll get $P(A \cap B \cap C) = P(A)P(B)P(C)$ like with *mutual* independence

#flag Conditional independence
- Means independence when conditioned on (but maybe not when not conditioned)
- So $P(A \cap B|C) = P(A|C)P(B|C)$ should hold if cond. indep.

# Week 3
RVs!
Outcomes are associated with numbers
- So $X(s)$ takes an outcome and returns a number
- $X(\text{roll a 6}) = 6$ for instance
Inverse of RV associates numbers with outcomes
- I.e., $A = \set{s \in S : X(s) = b} = \set{X = b}$
	- For an RV $X$
If an RV is "discrete" then it can return a countably infinite set of numbers

#flag Indicator RVs
Simplest RV you can have. Is defined for some event $A$ and returns number $0$ for "not occur" and $1$ for "occur" outcomes

$I_A(s)$ = 1 for $s \in A$ and 0 for $s \not \in A$
These help connect events to RVs in a simple way.
- The event $A$ can easily turn into RV $I_A$ 

#flag Functions of RVs
They themselves are still RVs.
So $Y(\cdot) = h(X(\cdot))$ is a "composition" where $h$ is a real function (like $e^x$ for instance or something)

Same for multivariate functions.
$Z = h(X, Z) = X + Y$ is also an RV. Refer to [[Transformations]]

$$I_{A \cap B^c} = I = 
\begin{cases} 1 & A \cap B^c\\
0 & \text{o/w}
\end{cases}$$

#flag RV distributions
$\set{X \in [a, b]}$ is a set of numbers which associate with outcomes.
You can also have $\set{X \geq 4}$ for instance, too!

A distribution just gives a bunch of probabilities

You can have two discrete distributions:
PMF: $p_X(x)$ situation. Associates all numbers possible by the RV with a probability.

$p_X(x) = P(X = x) = P(\set{s \in S : X(s) = x})$
- Since it gives probabilities, it must satisfy the axioms of probability
	- $0 \leq p_X(x) \leq 1, \forall x$
		- Bound
	- $\sum_{\forall i} p_X(x_i) = 1$
		- Sum to $1$ (extends to the sample space)

CDF gives probability "before" a certain number. Very important for *ranges* of values.
$F_X(x) = P(X \leq x)$
Also $P(a < X \leq b) = P(X \leq b) - P(X \leq a) = F_X(b) - F_X(a)$

To prove a CDF is a CDF it must satisfy that
1. $F_X(\infty) = 1$
2. $F_X(0) = 0$
3. For any $x_1 < x_2$ then $F_X(x_1) < F_X(x_2)$
4. $F_X(\cdot)$ is "right continuous"

# Week 4 
Other Distributions
I did these in [[All Distributions]]

Expected Value
Aggregates behaviour of $X$. Specifically it's the average!

For discrete, you just add up the "value" of the result with the chance of it happening, and divide by the total number of results.

$E(X) = \sum_{i=1}^n x \cdot p_X(x)$  
Remember that the chances of each result are divided by $n$ so technically you can factor that out to get something that makes more sense. 


For transformations (like $Y = g(X))$
Then $E(Y) = E(g(X)) = \sum_y g(x) \cdot p_X(x)$ <-- same PMF

#flag Maybe go over slide 19 on the "key matching" problem

Variance is the "spread" of data from the mean.


# Week 5: Continuous!

Means $P(X = x) = 0$

$f(x)$ gives "line height" (or surface "shape" in multivariate) and integrating it gives "area" below the line (or the "volume" in multivariate)

The only way to get probabilities is via CDFs and PDFs

CDFs are similar to in discrete. It gives the chance for the value "or less". 
$$F_X(x) = P(X \leq x)$$
Also $P(a \leq X \leq b) = F_X(b) - F_X(a)$

Also, $F_X(\infty) = 1$ and $F_X(-\infty) = 0$ (goes to negative infinity because discrete capped at $0$ but not here!)
Also $F_X$ must be non-decreasing


PDFs are what "get" you CDFs. Denoted as $f_X(x)$, they have NO meaning by themselves. They should be greater than $0$ at all points (to avoid integration $< 0$) but it can be $>0$ for sure. The *integral* of $f_X$ from $-\infty, \infty$ should be $1$ in total. It's like saying $F_X(\infty) - F_X(-\infty) = 1- 0 = 1$

#flag
Also, $F_X(x) = \int_{-\infty}^x f_X(u)\;du$
and $f_X(x) = \dfrac{d}{du} F_X(x) = F'_X(x)$

To get CDF from PDF, you integrate it from $-\infty$ to $x$

Slide 13 example: 
$P(X \geq 20 | X \geq 10) = \frac{P(\set{X \geq 20} \cup \set{X \geq 10})}{P(X \geq 10)}$

# Week 6: Multivariate Distribution
Each outcome maps to two participating RVs, say $X, Y$ so you can map $(X(s), Y(r))$ on a graph for any outcome $s, r$ 

The "Joint" distribution $P_{X, Y}(x, y) = P(\set{s \in S, X(s), Y(s) \in B)}$ where $B \subseteq \mathbb R^2$

For the x_min x_max question, consider the cases to deal with. When both rolls are the same, it's easy and the chance is simply 1/36 for each of those cases.

When the x roll is <= the y roll, that can happen two ways (since x = x_min and y = x_max). You can roll (4, 6) but also (6, 4) so there are two ways to get all of those outcomes. Which is why the final probability turned out to be whatever that was

Joint PMF is $p_{X,Y}(x, y) = P(X = x, Y = y)$

Marginal PMF is the PMF of just one variable.
You "expand out" the other variable through summing.
$p_X(x) = \sum_y P_{X,Y}(X = x, Y=y)$

#flag Multinomial Distribution (and Coefficients and Theorem)
Gonna ignore for now. Seems like a small detail anyway.
#todo However that RPS question is kind of dense so reconsider if there is time.

Joint CDF time!
$F_{X, Y}(x, y) = P(X \leq x, Y \leq y)$ 
Visually, it gives the chance of all numbers left and below $(x, y)$ like a rectangle.
![[Joint CDF looks like.png]]

Also the Marginal CDFs are just:
$F_{X}(x) = F_{X, Y}(x, \infty) = \lim \limits_{y\to\infty}F_{X, Y}(x, y)$
- You send $y$ to infinity to get just "$x$".
Similar for $F_Y(y)$

To find the probability of $P(x_1 < X \leq x_2, y_1 < Y \leq y_2)$ (whose support is a rectangle!) you can use geometry
It's $= F_{X, Y}(x_1, y_1) - F_{X, Y}(x_1, y_2) - F_{X, Y}(x_2, y_1) + F_{X, Y}(x_2, y_2)$


The reason the uniform distribution had a probability of $x\cdot y$ for $0 \leq x, y \leq 1$ is because of the shape, and the fact that the CDF is simply $x$ or $y$ when the range is from $0$ to $1$ or $[0, 1]$. Multiplying those gives $xy$

Also consider if the shape is CDF: $x$. Then the probability from $Y$ is irrelevant since it's already > 1. The chance is simply $x$. 
![[Visual of CDF uniform nonsense.png|300]]

What is $P(x_1 < X < x_2)$ given $F_{X, Y}(x, y)$? 
- $P(x_1 < X < x_2) = F_X(x_2) - F_X(x_1)$
- $=\lim \limits_{y \to \infty} [F_{X, Y}(x_2, y) - F_{X, Y}(x_1, y)]$

Joint PDF time.
So Joint CDF gave area quite easily. Now we use $f_{X,Y}(x, y)$ and integrate it to get probabilities as *volumes*

To get the probability over a certain region, say $P((X, Y) \in R)$, then we must integrate $\iint_R f_{X,Y}(x,y)$ over $R$ as well!
Region $R$ tells you the shape of the floor we're integrating over, and $f(x, y)$ is the blanket that the floor goes up to.

Properties that still hold: 
1. $f_{X, Y}(x, y) \geq 0$
2. The whole integral but over $\mathbb R^2$ integrates to $1$

You go between Joint CDF and Joint PDF by integrating from -infty to x and -infty to y, or differentiating relative to x, and then y

For slide 18 where it asks to find $P(X < Y)$ you can use the PDF and integrate depending on the shape that $X < Y$ gives when you graph it.
- For any "X" from 0 to 1, you "fix" it. The line has to be integrated again, by integrating Y from x to 1

Marginal PDF can be found by just integrating away the part you don't want.

Expected values are all the same. For discrete you add for the entire domain of X, Y and for continuous you integrate from -infty to infty.
Linearity still holds

# Week 7
Conditional PMF is $P(X = x, Y = y | (X, Y) \in B) = \frac{{X = x, Y = x} \cap \set{(X, Y) \in B)}}{P((X, Y) \in B)}$

But ignore that cuz $p_{X|Y}(X = x| Y = y) = \frac{p_{X, Y}(x, y)}{p_Y(y)} = \frac{P(X = x, Y=y)}{P(Y = y)}$ is the WAY more common situation

Of course $p_{X|Y} > 0$ and adding all the x's up should give a probability of $1$.
Btw it's more accurate to think of this as a marginal PMF than anything

#flag
"Joint = Marginal x Conditional"
$p_{X, Y}(x) = p_X(x)\cdot P_{Y|X}(y|x)$
or you can swap x and y ykykyk

For continuous RVs you cannot condition on a specific point (since probability of that is $0$) so conditions are ranges.
You can use CDFs and PDFs though.
$f_{X|Y}(x, y) = \frac{f_{X, Y}(x, y)}{f_Y(y)}$
Also you can rewrite that too. 

tl;dr there are equations and you can rewrite them. Nothing special about this chapter.

I'm gonna do the given example
$f_{Y|X}(Y|0.5) = \frac{f_{X, Y}(0.5, Y)}{f_X(0.5)}$
The given PDF gives us that $f_{X, Y}(0.5, Y) = 3 \cdot (1/2) = 1.5$ for $0 \leq Y \leq 0.5$ (for $Y \geq 0.5$ the chance is just $0$)
The rest is obvious. You find the marginal for X and boom.

#flag Independent RVs
Two RVs are independent if 
$f_{X,Y}(x, y) = f_X(x)f_Y(y)$
Or if the support "isn't rectangular". (means $a< X< b$ and $c < Y< d$ type deal)

Etc. for $F$ or $p$ as well. Means you can ***factorize*** the PDF into two marginal functions w.r.t $x$ and $y$

# Week 8
Goals: 
- To find the distribution of $Y = h(X)$ given $X$ and transformation $h$
- Similar to that but other cases... you'll see!

#### General Approach
- $P(Y \in A) = P(h(X) \in A) = P(X \in h^{-1}[A])$
	- You replace $Y$ with its transform, then isolate for $X$ since we actually know it!
#### CDF Method
#flag
If the transform $h$ is 1-to-1, then we can use $F_y(y) = F_X(h^{-1}(y))$
Specifically you can write $F_Y(y) = P(Y \leq y)$ 
$= P(h(X) \leq y)$ 
$= P(X \leq h^{-1}(y))$ ASSUMING $h^{-1}$ is a *positive* transformation. If it's decreasing, then it's not positive and the sign would **flip**! #todo important
$= F_X(h^{-1}(y))$

So just remember to derive the above every time. That is it. The only tweak you'd have to make is to use complement rule

#### PDF Method
Used when there is a PDF but no closed-form CDF (to use CDF method with)

You use the formula given on the formula sheet.

For multiple RVs it gets confusing but it's not terrible.
- If you have $X, Y$ and $Z, W$ is transformed by a single function $h$, then you use the formula given.
- You find $h^{-1}$ by writing $X, Y$ w.r.t $Z, W$ instead of the other way around. When you get that, you have your inverse. Great!
- For the Jacobian, take the components from the inverse and plug it into the formula, differentiating and absolute-ing the value at the end
- The rest is simple


#Todo <span class="emphasis">Do PSET 8 Q8 for convolution</span>

### Order statistics

$X_{(1)}$ is the minimum, and $X_{(n)}$ is the maximum.


# Week 9: Conditional Expectation (Covariance)
Cov measures linear dependence between RVs.
$Cov(X, Y) = E((X - \mu_X)(Y - \mu_Y))$
- It's AVERAGE of the distances from $X$ to its mean times $Y$ to its mean
	- In the "circle" PDF, all points added together average out to $0$, so you get a Cov of $0$
"Correlation" is covariance but easier to interpret
$\rho_{X,Y} = \frac{Cov(X, Y)}{\sigma_X, \sigma_Y}$
- This gives a number normalised to a $[-1,1]$ range

For the variance of linear functions, formula is given but simple case is $V(A + B) = V(A) + V(B) + 2Cov(A, B)$

If you have the correlation, then *use* the correlation function

#flag
Also remember $V(aX + bY) = a^2V(X) + b^2V(Y)$

Example: 10 T/F questions with 3/4 chance and 1/2 correlation (in that if you get one question right, you're more likely to get other ones right too).
We want the expected and variance of the total score

Answer:
- Because of the correlation factor, we define indicator variables (i.e., Bernoulli trials) $X_1, \dots X_{10}$ where they are $1$ with a 3/4 chance and $0$ with a 1/4 chance.
- We want $E(X_1 + \dots + X_{10})$ first
	- $=E(X_1) + \dots + E(X_{10}) = 10 \cdot (3/4)$
	- $E(X_i) = 3/4$ so
	- $V(X_i) = p\cdot q = (3/4)(1/4) = \frac{3}{16}$ (by the formula given for Bernoulli)
- Then $V(X_1 + \dots + X_{10}) = \sum_{i=1}^{10} V(X_i) + 2(\sum_{i=2}^{10} \sum_{j=1}^{i-1}Cov(X_i, X_j))$
\[For any $i,j$ then $Cov(X_i, X_j) = 1/2 \cdot (\sqrt{V(X_1)V(X_2)}) = \frac 1 2 \cdot \frac 3 {16}$]
	- $=10 \cdot (3/16) + 2(45)(\frac{3}{32})$

#flag to get the number of times the sum happens, it's just $\frac{n(n-1)}{2}$ (in the above case, it's $\frac{10 \cdot 9 }{2} = 45$)

Cond. expectation
Formulas are given 
Nothing crazy. It's like any other 1-dimensional expectation but using a conditional instead.

Example w/ restaurant
$E(X|Z=1) = \int_{-\infty}^0 f_{X|Z}(x, 1)\;dx$

$f_{X|Z}(x, 1) = \frac{f_{X, Y}(x, 1)}{f_{Z}(1)}$
- You can find the $f_{X,Z}$ via PDF method LOL
- The Jacobian is very simple though to be fair
- He just skimmed over it like crazy though
	- You just make $W = X$ and $Z = X + Y$ which means $Y = Z-W$.
	- That gives the inverse function: $h^{-1}(w, z) = (w, z-w)$

There is LoTV but i'm skippin' that cuz no time
#todo perhaps?

# Week 10: I love moments!

Gives expected values at different powers!
"Moment": $E(X^r)$ for $r$th power
- The "first" moment is $E(X)$
"Central Moment": $E((X - \mu)^r)$
- The "second" central moment is the variance.
- The first is always $0$ since $E(X - \mu) = E(X) - E(X) = 0$

Bigger central moments give skewness (3) and kurtosis (4) but ignore those

MGF is what gives us moments. Moment generating function!

$m(t) = E(e^{tX}) = \int_{-\infty}^\infty e^{tx} f_{X}(x) \;dx$

- Take $k$ derivatives, then evaluate to $0$ and that gets you the $E$ for a the $k$ moment.
- $E(e^k) = m^{(k)}(0) = \dfrac{d}{dt}m(t) \Big|_{t=0}$
It gives all moments of $X$ (i.e., $E(X^r)$, which is helpful in finding the variance $E(X^2) - E(X)^2$)


Exponential Example. $X \sim \text{Exp}(\lambda)$

$m(t) = E(e^{tX}) =\int_{-\infty}^\infty e^{tx}f_X(x)\;dx$ where $f_X(x) = \lambda e^{-\lambda e}, x\geq 0$
You can also use the fact that for $\int_{-\infty}^\infty f_X(x)\;dx$ that the integral is $1$ in total. Very useful fact


#flag THESE "Characterise" distributions!
so if $m_X(t) = m_Y(t) \Leftrightarrow X \sim Y$
- Doesn't mean $X = Y$ though.

You can use it to find the distribution of transformations of functions. For instance, $Y = g(X_1, X_2)$, then $m_Y(t) = E(e^{t\cdot g(x_1, x_2)})$
- If the resulting MGF is a product of many MGFs, then we can use "MGF method" to give the distribution

If $Y$ is a linear transformation of RVs, so $Y = a_1X_1 + a_2X_2$, then $m_Y(t) = m_{X_1}(a_1t)\cdot m_{X_2}(a_2t)$

Also if i.i.d $Y = X_1, \dots X_n$, then $m_Y(t) = m_X(t)^n$

#todo Defo gonna practice
#### Inequalities
They are already given as formulas. Nothing special about them tbh

I just gotta do the practice (perhaps also the ones on the slides?) #todo 


# Week 11: Results for things that go to infinity
The average of a bunch of RVs is $\bar X_n$ with "n" RVs.
And $\bar X_n = 1/n (X_1 + \dots + X_n)$

If $X_i$ are independent and have common means $\mu$ and variance $\sigma^2$ then:
- The $E(\bar X_n)$ is easy to find b/c of linearity and at the end it $=1/n
- For $V(\bar X_n)$ you do $=1/n^2 \cdot ( V(X_1) + V(X_2) + \dots + V(X_n) + 2\sum_{i=2}^n \sum_{j = i}^{i-1} Cov(X_i, X_j))$ 
- Cov = 0 because "independent"
- $=\frac{\sigma^2 \cdot n}{n^2}$

WLLN.
Applies to independent RVs w/ same avg and variance
Directly derived from Chebyshev's inequality
$P(|\bar X_n - \mu| \geq \epsilon) \to 0$ as $n\to \infty$
- "The tails of the distribution go to 0"

#todo
"If X_1 and X_2 are positively correlated, then X_1 = X_2"

If $\mu = E(X)$ and $X_i$ are samples for $X$, then
$\bar X_n \to^P \mu$ as the number of samples $n$ goes to infinity.

For $\bar X_n$ to converge in **probability** to $Y$, then:
$\lim \limits_{n\to\infty} P(|\bar X_n - Y| \geq \epsilon) = 0$
Also denoted as $X_n \to^P Y$
- Means the probability of $X_n$ converges to $Y$'s
Similarly, for $X_n$ to converge in **distribution** to $Y$ means for:
$\lim \limits_{n\to\infty} P(X_n < x) = P(Y < y)$
or $X_n \to^D Y$ 

#### Central Limit Theorem
For the RVs with common mean and variance, their "standardised" average is
$Z_n = \sqrt n \cdot \frac{\bar X_n - \mu}{\sigma}$
- Means the mean is $0$ and variance is $1$
- Y'know what else has that? $Norm(0, 1)$!!!
Indeed, it *converges in distribution*
$Z_n \to^D N(0, 1)$

And likewise, $\bar X_n \to N(\mu, \sigma^2/n)$ when not standardised

ALSO if $X \sim N(\mu, \sigma^2)$ then $\frac{X - \mu}{\sigma} \sim N(0, 1)$
- Not shown in slides
#### Summary:
Average of RVs
WLLN
Converging in Probability
Converging in Distribution
Central Limit Theorem
- Standardised average

25 coins, 0.6 heads example.
Sum of Bernoulli is binomial dist with $n=25$ and $p = 0.5$ 

Let $Y = X_1 + X_2 + \dots + X_{25}$ where each is an indicator RV that's 1 on head and 0 on tails.
Then $\bar X_{25} = 1/25\cdot Y$

We *want* $P(\bar X_{25} > 0.6)\implies P(Y > 0.6 \cdot 25 = 15)$
Now what is $P(Y > 15)$? Well you just use the CDF for binomial!

However he does it again but by estimation. 
Again: Problem is, we don't know the distribution of $X_{25}$ to find the probability with. We need to turn it to something we *can* estimate with (like normal distribution)! Which is where CLT comes into play:

$X_1, \dots X_{25}$ all have average $\mu = 0.5$ and variance $1^2 \cdot 0.5 - (1 \cdot 0.5)^2 = 0.25$
We want $P(\bar X_{25} > 0.6)$
We know $X_{25} > 0.6$ approximately means $Z > \frac{0.6 - 0.5}{0.5 / 5} = 1$ but note know WE HAVE the distribution of $Z$, and it's $N(0, 1)$ 
So $P(\bar X_{25} > 0.6) \approx P(Z > 1)$ which you can find on table



Other example but i'll only do estimation route
There are 100 trials with each resulting in 1 for "yes" and 0 o/w with chance $0.6$ per vote.

$\mu = 0.6$ and $\sigma^2 = 0.6 - 0.6^2 = 0.24$

We want to find $P(\bar X_{100} < 0.5)$
And again $Z = \sqrt{100} \frac{0.5 - 0.6}{\sqrt {0.24}} = -2.04$
Then you find $P(Z < -2.04)$ on the table again.


He did it using the fact that $\bar X_{100} \sim N(\mu, \sigma^2/n) = N(0.6, 0.24/100)$
which means it has a distribution we can use the calculate with! It's just not standardised

# Week 12
