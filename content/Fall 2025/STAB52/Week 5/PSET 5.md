16 questions

### Q1 
a)
We already know the area will be $0.5*1 + 0.5 * 1/2 = 0.75$

For practice I wanna integrate:
$P(X \leq 1) = F(x=1) = \int_0^1 f_X(x)\;dx$
We can find $f_X(x) = -x/2 + 1$
$=[-x^2/4 + x]_{x=0}^1$
$= (-1/4 + 1) - (-1 +1)$
$=0.75$ yay!

b)
$F_X(x)  = P(X \leq x) = \int_{-\infty}^\infty f_X(x)\;dx = [-x^2/4 + x]_{x=0}^x$ (for $0 \leq x \leq 2$)
$=x + \frac{-x^2}{4}$
and $=1$ for $x>2$ and $=0$ for $x < 0$

### Q2
a)
$c$ has to be the value that makes the sum $1$ for the integrated version of the PDF.

$1 = \int_{-\infty}^\infty c(x + x^2)\;dx = c [x^2/2 + x^3/3]_{x=0}^1$ (we use range $0$ to $1$ since all other points are $0$)
$=c(1/2 + 1/3) = c5/6$ 
So $c = 6/5$

b)
$F_X(x) = P(X \leq x) = c  \int_{-\infty}^\infty f_X(x)\;dx$  for $(-\infty, x]$
$=c  [x^2/2 + x^3/3]_{x=0}^x$ for $0 < x < 1$  
$=\frac 6 5 (x^2/2 + x^3/3)$ for 0 < x < 1
$and = 1$ for $x \geq 1$
and $= 0$ for $x \geq 0$

c)
$P(1/4 < X < 3/4) = F_X(3/4) - F_X(1/4)$
$=$ math


### Q3
I'm on a roll since these are so easy LOL

a) Uhh i'll graph it later #todo 
To show it's a CDF, we need to show that the probability going to infty is $1$ and vice versa is $0$

$\lim \limits_{x \to \infty} F_X(x) = 1$ (look at the horizontal asymptote)
Same for the other way. it just works!

b) 
PDF is the derivative.
$f_X(x) = F_X'(x) = \frac{1}{x^2}$ (for $x > 1$)
I mean it looks right to me

### Q4
a)
So we know X ~ Uniform(0, 1)
That means $F_X(x) = x - l / u - l = x$ (for 0 < x < 1)
We want $P(X >= 3/4)$
$=1 - P(X < 3/4)$
$=1- F_X(3/4)$
$=1 - 3/4$ 
$=0.25$

b)
We want change one of the pieces is $> 3/4$
I mean by intuition that's a 1/2 chance LOL
$P(\set{X \geq 3/4} \cup \set{X < 1/4})$ (if the first piece is 1/4, then the second is >3/4)
$=P(\set{X \geq 3/4}) + P(\set{X < 1/4})$
$=0.25 + (1 - 3/4)$
$=0.5$

c)
$P(\set{X \geq 1/4} \cap \set{X \leq 3/4})$
$=P(1/4 \leq X \leq 3/4)$
$=F(3/4) - F(1/4)$
$=1/2$

### Q5
a)
$1 - P(W < 5)$
$=1 - F_X(5)$
$=0$
Impossible!

b)
$=1 - F_X(2)$
$=1 - \frac{2 -1}{3} = 2/3$

c)
$P(W \leq 3)$ (increasing function on both sides since $W \geq 1$)
$\frac{3-1}{3} = 2/3$

d)
$\frac{\sqrt{2} - 1}{3}$

Okay I might've been TOO smart for this question.
It wanted you to do:
$P(|W| \leq \sqrt 2)$
$=P(-\sqrt 2 \leq W \leq \sqrt 2)$
$=F_X(\sqrt 2) - F_X(-\sqrt 2)$
$=\frac{\sqrt 2}{3} - 0$

### Q6
Valid PDF means showing it sums up (integrates to) 1
Also need to show for all x, the value is > 0

$f(x) > 0$ since $e^x\geq0$ and $e^x \cdot e^x > 0$ for any exponent
Then $\int_{-\infty}^\infty f(x) \;dx$
$= \int_{-\infty}^\infty e^{-x}e^{-e^{-x}}\;dx$
We do u-sub im pretty sure. $u = e^{-x}$ and its derivative is just $-e^{-x}$
$=\int_{-\infty}^\infty e^u \;du$
$=[e^u]_{u={-\infty}}^\infty$
$=e^{-e^{\infty}} - 0$
$=1$
As required!

Therefore its CDF is $F_X(x) = e^{-e^{-x}}$

### Q7
We show that it's valid via the whole limits deal.
lim as x goes to infty means $1 - 0 = 0$
and lim x goes -infty is 0 by default

To find PDF we take derivative.
$f_X(x) = F'_X(x)$
$=-x \cdot e^{-x^2/2}$ for $x > 0$

waht why was that so easy

### Q8
holy moly
WTS valid PDF. We show it integrates to $1$

It's integration by parts (which i need to refresh myself on so yay)

$F_X(x) = \int_{-\infty}^{\infty} k\lambda(\lambda x)^{k-1}e^{-(\lambda x)^k} \;dx$

If we chose $-e^{-(\lambda x)^k}$ as the anti-derive, then the derive would be:
$-\lambda^k*kx^{k-1} \cdot -e^{-(\lambda x)^k} =k \lambda \lambda^{k-1}x^{k-1}e^{-(\lambda x)^k}$
 $=k \lambda (\lambda x)^{k-1}e^{-(\lambda x)^k}$
 Holy moly that was aids

Anyway yeah anti-derivative we have that now we evaluate.
$[-e^{-(\lambda x)^k}]_{x = 0}^\infty$
$= 0 - (-1) = 1$
Good
The CDF is then $F_X(x) = P(X \leq x) =  [-e^{-(\lambda x)^k}]_{x = 0}^x$
Which is just math after that

I was so lost on the integral for no reason LOL


### Q9
We want the chance that both clerks finish before Alice finishes. It's possible one clerk finishes with either person *and* Alice before the other clerk does.

When either leaves, then Alice will be served. Then the clock starts again between the two. Remember though that it's memoryless. Alice could be done in $0$ seconds for all we know. On average it's $\lambda$ though.

>This hurts my head. If alice and bob are both at the clerk at the same time, they both have an equal likelyhood in time to leave because of memoryless? So between alice and bob (where bob has clearly been waiting for much longer supposedly), there's a 1/2 chance either finishes first
>
>Not realistic but a properly of the memoryless property indeed. A 100% chance one finishes so Alice gets served, and a 50% between the two for who finishes first.


### Q10
a) 
$\int_{-\infty}^\infty 2F(x) f(x) \;dx$
$=\int 2u\;du$ by u-sub
$=[u^2]_{x = -\infty}^\infty$
$=[F(x)^2]_{x = -\infty}^\infty$
$=1 - 0$ (since $F(x)$ is a CDF)

b)
I think we use even-ness for sure

$\frac{1}{2} \int_{-\infty}^\infty f(-x) + f(x)\;dx$
That expression above is the "even" part of $f$. AH HA YES I REMEMBER.
So because it's even, if you add it it's gonna be $2f(x)$
$=1 \cdot \int_{-\infty}^\infty f(x)\;dx = 1$ 

### Q11
a) 
To find average you add up everything (integrate) then divide by size of region integrated right?
Nah it's $E(X)$ of course.
$E(X) = \int_{l}^u x \cdot f_X(x)\;dx$
$=\int_l^u \frac{x}{u - l}\;dx$
=$\frac{1}{u-l}  (\frac{u^2}{2} - \frac{l^2}{2})$
$= \frac{u^2 - l^2}{2(u-l)}$
$=\frac{(u+l)(u-l)}{2(u-l)}$
$=\frac{u+l}{2}$

Then we need $E(X^2)$ coz variance is $E[X^2] - (E[X])^2$

$E(X^2) = \int_l^u x^2 f_X(x)\;dx$
=$\frac{1}{u-l}  (\frac{u^3}{3} - \frac{l^3}{3})$
$=\frac{ (u-l)(u^2 + ul + l^2) }{3(u-l)}$
$=\frac{u^2 + ul + l^2}{3}$
Then variance you do math it's not hard

b)

$E(X) =\frac{\lambda^a}{\Gamma(a)} \int_0^\infty x  \cdot x^{a-1}e^{-\lambda x} \;dx$

Yeah absolutely no way #todo Unless??

### Q12
a)
$P(3 < X < 5) = F_X(5) - F_X(3)$
$= e^{-5^{-\alpha}} - e^{-3^{-\alpha}}$

b) PDF of X is just dividing the CDF?

$f_X(x) = F'_X(x) = (ax^{-a - 1}) e^{-x^{-a}}$ for $x >0$ and $0$ otherwise

c)
$P(X > s +t | X > s)$
$= 1 - P(X \leq s +t | X > s)$
$=1 - \frac{ P( s < X \leq s + t) }{P(X > s)}$
$= 1 - \frac{ F_X(s + t) - F_X(s) }{1 - P(X \leq s)}$
$= 1-  \frac{F_X(s+t) - F_X(s)}{1 - F_X(s)}$

And $P(X > t) = 1 - P(X \leq t)$
$= 1 - F_X(t)$

Okay wow I overcomplicated this. No need to complement in the first half

Also answer given is slightly wrong but whatever....

### Q13
a) $c(x + x^2 + x^3)$ for 0 < x < 1. x > 1 is 1. x < 0 is 0
b) We need $1 = F_X(1)$ ? Oh right because $1$ is the max before the CDF fizzles out
Anyway c = 1/3 yippee
c) Why is this so easy..
$P(1/4 < X  < 1/2) = F_X(1/2) - F_X(1/4)$
$= \frac{1}{3}(0.5 + 0.25 + 0.125) - \frac1 3 (1/4 + 1/{16} + 1/{64})$
$=\frac{35}{192}$

### Q14
a)
We want $1 = c\int_2^3 \frac{1}{x} \;dx$
$1 = c (\ln(3) - \ln(2))$
$c = \frac{1}{\ln 3 - \ln 2}$
$c = \frac{1}{\ln(3/2)}$ log laws my beloved

b) 
We want $F_x$. We must integrate!

$F_X(x) = P(X \leq x) = \int_{-\infty}^\infty f_X(x) \;dx$
$= c \cdot \int_2^x 1/x \;dx$ (for 2 < x < 3)
$=c \cdot \ln|_2^x$
$=\frac{\ln(x/2)}{\ln(3/2)}$
For x < 2, the thing is just 0
for x > 3, the thing is 1

c)
Nah cuz it integrates to infinity. It doesn't converge (harmonic series)

d) It probably is cuz it converges by p-test (and therefore converges to $1$) so $c$ is just 1

### Q15
It doesn't matter where the first point goes. Also, the "shortest" arc formed by any two points is *at most* half the circumference of $2\pi$ so distance goes to be at most $\pi$ 
We want the chance the length is $\pi/3$ so it's probably 1/3 but let's math it?
NVM my intuition was correct. ah ha! I loved that hint

Let the first point be at point "0" WLOG.
Let $X$ be the distance of the "other" point from the first point. 
Then $X \sim \text{Uniform}(0, \pi)$
We want $P(X \leq \pi/3)$ 
$=F_X(\pi/3) = \frac{\pi/3}{\pi}$
$=1/3$
I just defined it more `GOATED-ly` than the solution did 

### Q16 
Carbon isotope? This has exponential written all over it 
$X \sim \text{Exp}(\lambda = 1/8267$) years. $\lambda$ is RATE
 a) $P(X \leq 5000) = F_X(5000) = 1 - e^{1/8267 \cdot -5000}$
 $=0.45$

b) $P(X \leq m) = F_X(m) = 1 - e^{1/8267 \cdot m} = 1/2$
$\implies e^{-1/8267 \cdot m} = 1/2$
$-\frac{m}{8267} =\ln(1/2)$
$m = \ln(0.5^{-8267})$ (but calculator can't even evaluate this so just do the obvious version without the fancy laws)

# Notes
1. 
for b) I need to remember the "range" of $x$ that I am working with. Usually these questions end up with cases. I often get excited and forget that.

b) I should use the total form where the int goes from neg infty to infty because it's clear to see what I am doing and I can justify it better for my tiny, tiny brain


2. 
a) we use range $0$ to $1$ since all other points are $0$

9)
- Exponential is often counterintuitive!

16)
==Lambda is *rate*== 
- It's the likelihood an event happens out of some odd.
- Like if the rate is 1/1234 occurrences of the event every year, then lambda is 1/1234 occurrences/year