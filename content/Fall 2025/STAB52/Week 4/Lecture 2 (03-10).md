For each variable, there is a distribution, and vice versa. So the words are often used interchangeably 

Random things are random, but they *should* converge to some number (not all the time)
An expected value exists if this series (the result value times its probability) does indeed converge. 

### Expected value of Functions of RV
If $Y = g(X)$
then $E(Y) = \sum_{y} y \cdot p_Y(y) = \sum_x g(x) p_X(x) = E(g(X))$

>Vocab: $E(g(X))$ = The expected value of the function of X

#### For multivariate
If $Z = g(X, Y)$
$E[Z] = E[g(X, Y)] = \sum_x \sum_y g(x, y) P(X = x, Y = y)$

### Linearity of expectations holds!
So you can do $E(aX + bY) = aE(X) + bE(Y)$
#todo proof is in the textbook.

#### Processor Question
The time it takes for a program to finish is "random". It "takes a geometric time"

Answer:
Let $X, Y ~ \text{Geometric}(p = 1/2) => p_X(x) = p_Y(x) = (1/2)^x$
- I still don't get this. Why are we using geometric
- Oh the two programs are run simultaneously. The chance of either winning is 1/2? Doing this many times is a geometric. We want the *average* time that both processes complete.
X, Y are the times that the first/second processes complete. Z is the time that both complete

Let $Z$ be time until *both* processes complete:
 $Z = g(X, Y) = max(X, Y)$
 - This is the time that *both* complete. If X isn't done, we wait for Y, and vice versa
$E(Z) = E[max(X, Y)] = \sum_{x=1}^\infty \sum_{y=1}^\infty   P(\set{X = x} \cap \set{Y = y})$
And we know $\set{X=x}$ and $\set{Y=y}$ are independent., so 
$P(\set{X = x} \cap \set{Y = y}) = (1/2)^{x+y}$
soooo
$E(Z) = \sum_{x=1}^\infty \sum_{y=1}^\infty   P(\set{X = x} \cap \set{Y = y})$

just... do this later

#### Serial version
- completion time for each process is "a geometric"
	- BRUH. ITS "THE TIME" THE PROCESSOR TAKES
	- So there is a 0.5 chance that the process finishes in the first time step, and then 0.75 it finishes in the second.
	- The expected time it takes for a process to finish is E(X) = $\frac 1 {\frac {1}{2}} = 2$

Let X be the time process 1 finishes.
Let Y be the time process 2 finishes. (independent of X)
X, Y ~ Geometric(1/2) => p_X(x) = p_Y(x) = (1/2)^x 
Let Z be the time both processes complete. Then....
Z = g(X, Y) = X + Y (the time of X plus the time of Y)
E(Z) = E(X+Y) = E(X) + E(Y) (by linearity)
= 2 + 2 = 4
thats math

### Expected Value and Indicator RV
$$E(I_A) = P(A)$$
proof:
$E(I_A) = \sum_{x=0, 1} x \cdot P(I_A = x) = 0 \cdot P(I_A = 0) + 1 \cdot P(I_A = 1)$
And we know $\set{I_A = 1} = A$
so $=P(A)$ 

### Drunk
n keys in a box. Average # of people who get their keys back?

Let X = # of people who get their key back 
- Since this RV is a "count" we can express them as *sums of indicator values*
lets define $I_K =$ 1 if kth person gets their keys back, and 0 otherwise, $\forall k = 1, 2, \dots, n$ 
X is the sum over all $k$ people for whether they got their key back
$X = \sum_{k=1}^n I_k \implies E(X) = E(\sum_{k = 1}^n I_K) = \sum_{k=1}^n E(I_k)$ (by linearity)
$=\sum_{k=1}^n P(I_k=1) = \sum_{k=1}^n P(\text{"k"th person gets their key back})$
The chance the $k$th person gets their key back is $1/n$ ??!?
- Doesn't it get smaller as people take their keys?
- Like if there is 2 people, 1 person has a 1/2 chance, then the other person has a 100% chance? Idk #todo 

# Variance
Used to measure the *spread* of a random variable
It has a formula!
$V(X) = E((X - E(X))^2) = E(X^2) - \mu^2$
where $\sigma^2$ denotes Variance and $\sigma = \sqrt {\sigma^2}$  is the Standard deviation "SD"

# Quiz
### Q1
a)

We know $(1 - I_A) = I_{A^c}$
So $I_{A \cup B \cup C} = 1 - I_{A^C} \cdot I_{B^C} \cdot I_{C^C}$ without loss of generality.
Also $$
I_{A^C} \cdot I_{B^C} \cdot I_{C^C} = 
\begin{cases}
1, & A^c \cap B^c \cap C^C \\
0, & \text{o/w}
\end{cases}
\implies
1-I_{A^C} \cdot I_{B^C} \cdot I_{C^C} 
 = \begin{cases}
0, & A^c \cap B^c \cap C^C \\
1, & (A^c \cap B^c \cap C^C)^C
\end{cases}
$$
So, $I_{A \cup B \cup C} =I_{(A^c\cap B^C \cap C^C)^C}$
$=I_{A \cup B \cup C}$

$\therefore I_{A \cup B \cup C} = 1 - (1 - I_A)(1 - I_B) (1 - I_C)$

b)
We want to show that $P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A \cap B) - P(B \cap C) - P(A \cap C) + P(A \cap B \cap C)$
knowing that 
$I_{A \cup B \cup C} = 1 - (1 - I_A)(1 - I_B) (1 - I_C)$ holds from (a)
We can expand to get 
$I_{A \cup B \cup C} = 1 - (1 - I_B - I_A + I_AI_B)(1 - I_C)$ 
$=1 - (1 - I_B - I_A + I_AI_B - I_C + I_BI_C + I_AI_C - I_AI_BI_C)$
$= I_B + I_A - I_AI_B + I_C - I_BI_C - I_AI_C + I_AI_BI_C$

Then $P(A \cup B \cup C) = E(I_{A \cup B \cup C})$
$=E(I_B + I_A - I_AI_B + I_C - I_BI_C - I_AI_C + I_AI_BI_C)$
$=E(I_A) + E(I_B)  + E(I_C) - E(I_AI_B) - E(I_BI_C) - E(I_AIC) + E(I_AI_BI_C)$
$=E(I_A) + E(I_B)  + E(I_C) - E(I_{A \cap B}) - E(I_{B \cap C}) - E(I_{A \cap C}) + E(I_{A \cap B \cap C})$
$=P(A) + P(B)  + P(C) - P(A\cap B) - E(B \cap C) - E(A \cap C) + E(A \cap B \cap C)$

as required

### Q2
refer to pset 4 q12

a)

We need $E(X)$. We can make $k=0$ to $k =n-1$ guesses
$E(X) = \sum_{k=0}^{n-1} P(X > k)$
$=\sum_{k=0}^{n} (1 - P(X \leq k))$
$=\sum_{k=0}^{n-1} (1 - \frac k n)$
$=(n) - \frac 1 n\sum_{k=0}^{n-1} k$
$=(n) - \frac 1 n \cdot \frac{(n-1)n}{2}$
$=n - \frac{n-1}{2}$
$=\frac{n+1}{2}$
$=\frac{10001}{2} = 5000.5$

b)

Let $X^2 = g(X)$

$V(X) = E(X^2) - \mu^2$ where $\mu = E(X) = 5000.5$
$E(X^2) = E(g(X)) = \sum_{x=0}^{n} g(x) p_X(x)$
$= \sum_{x=0}^{n} x^2 \cdot \frac{1}{n}$
$= \frac{1}{n} \cdot \sum_{x=0}^{n} x^2$
$= \frac{1}{n} \cdot \sum_{x=1}^{n} x^2$ since $0^2 = 0$ 
$= \frac{1}{n} \cdot \frac{n(n+1)(2n+1)}{6}$
$=\frac{(n+1)(2n+1)}{6}$
$=\frac{(10^{4}+1)(2\cdot10^{4}+1)}{6}$
$=33338333.5$

So $V(X) = E(X^2) + E(X)^2$
$=\frac{(n+1)(2n+1)}{6} + (\frac{n+1}{2})^2$
$= 33338333.5 + 5005.5^2$
$=8333333.25$


