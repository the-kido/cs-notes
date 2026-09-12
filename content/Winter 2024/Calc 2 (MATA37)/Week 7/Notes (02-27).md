#  Tutorial (lecture is below!)
polynomials yayay

pfd
- remember top deg must be lower than bottom deg
- divide to get the $r(x)/h(x)$ where h(x) is what we divide by/
Practice doing $\frac{2x^5 + 2x^4 + 0x^2 + 7x^2 + 6x - 7}{x^2 + x - 1}$


Also try doing
$\frac{B}{(x-2)^2}$ has the integrand of $\frac{-B}{x-1}$
interesting...


#todo Look at the photo i took to rEALLY see what the pfd technique is meant to look like. 

Try doing $\sum_{k=2}^n \frac{-1}{k(k+1)}$ like the abv photo
You get a telescoping sum. 
### example #1

$\int \frac{1}{x^2 + 1}\;dx$ via trig sub for fun.
Let $x = \tan\theta$ where $\theta \in (-\pi/2, \pi/2)$
Then $dx = \sec^2\theta\;d\theta$
- look at the arctan function to remember that range. 
- This is all basically u-sub! 

$\int \frac{1}{1+tan^2(\theta)}$
$\int \frac{1}{sec^2\theta}\sec^2\theta$ by trig id's 
$\int 1 d\theta$
$\theta + C$
$\tan^{-1}x + C$

### example #2 
$\int \ln(4+x^2)$ 
- two things bad. we turn it into 1 thing.
$\int \ln(2^2 + 2^2\tan^2(x))$
- let x = 2tan

$2\int \ln(4 + 2\ln(\sec\theta)) \sec^2\theta \;d\theta$ as $2 \in \mathbb R$ and is constant
- what is going on


#todo integrate all 6 of the trig functions and their squared version. 
- Perhaps also their inverses. That would be 24 questions lol.


When finding the anti-derivative via IBP, we can add any constant (the derivaitve will be $dv$ anyway, yes yes?). Perhaps ask chatgpt to give a question where that is the case.



# Okay now lecture time yayaya
>[!example] Let f(x),g(x),h(x) be cont on interval I. 
>Consider the improper integral $\int_I f(x)\;dx$.
>If $0 \leq f(x) \leq q(x) \forall x \in I$ (i.e. $f(x)$ is trapped )
>*and* $\int_I g(x)\;dx$ converges.
>THEN $\int_I f(x)\;dx$ also converges

>[!proof]

Alright proof time. 
WLOG, we consider $I = [a, \infty]$ for any $a \in \mathbb R$ (type 1)
Suppose $0 \leq f(x) \leq g(x) \forall x \in [a, \infty]$  (we call this `(1)`)
and $\int_a^\infty g(x)\;dx$ converges (we call this `(2)`)
WTS $\int_0^\infty f(x)\;dx$ converges. We do this by definition (i.e. we evaluate the limit show it exists and stuff yayaya)
$\lim \limits_{A\to\infty} \int_a^A f(x)\;dx$.
(we are trying to bring up `A` into our given info)
Let $A \in [a, \infty]$ be arbitrary.
Note, by (`1`), $0 \leq f(x) \leq g(x) \forall x \in [a, A]\subseteq[a, \infty]$
$\implies \int_a^A 0 \;dx \leq \int_a^A f(x)\;dx \leq \int_a^A g(x)\;dx$
$\implies 0 \leq \int_a^A f(x)\;dx \leq \int_a^A g(x)\;dx$ by geometry (rect w/ zero height) $\forall A\geq a$ !!
$\implies \lim \limits_{A\to\infty} 0 \leq  \lim \limits_{A\to\infty} \int_a^A f(x)\;dx \leq  \lim \limits_{A\to\infty} \int_a^A g(x)\;dx$ by limit laws as they preserve inequalities.
> Since the g limit from a to infty converges, it evaluates to some finite number by `(2)`
 
$\implies \lim \limits_{A\to\infty} 0 \leq  \lim \limits_{A\to\infty} \int_a^A f(x)\;dx \leq  \lim \limits_{A\to\infty} \int_a^A g(x)\;dx$ 
- Just knowing there are numbers sandwiching is NOT enough. If f is an oscillating then the limit will also not exist
- We know the center expression looks like an area accumulation function and that it's continuous on $[a, \infty]$ by FTOC II
- This is INCREASING!? As $0 \leq f(x) \forall x \in [a, \infty]$, the area is always increasing (so that integral is always increasing). Therefore the function cannot oscillate. 
Therefore by blue and yellow, $\lim \limits_{A\to\infty} f(x)\;dx$ exists i.e. $\int_a^\infty f(x)\;dx$ converges.

The proof for divergence is a lot easier yayay.