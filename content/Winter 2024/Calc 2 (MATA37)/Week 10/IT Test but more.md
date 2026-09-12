aaa a whole lecture
https://play.library.utoronto.ca/watch/fc2cfde97493b0af40ec5cb231e38d0d

# How to solve an IT question
1. Prove that $f(x)$ is positive, continuous, decreasing on $[1, \infty)$, and $f(n) = a_n, \forall n \in \mathbb N$
2. Then $\sum_{n=1}^\infty a_n \Longleftrightarrow \int_1^\infty f(x)\;dx$
	1. To show the series converges, It would be sufficient to prove that the integral converges



>[!example] $\sum_{n=3}^\infty ne^{-n}$. Conv or div?
>looky looky IT IT
>
>>[!proof] 
>>Let $f(n) = f(n), \forall n \in \mathbb N, n \geq 3$
>>- This gets rid of that first hypothesis
>
>So $f(x) = xe^{-x}$ on $[3, \infty)$
>- When defining f(x), i have to specify its domain
>
>Then, $\forall x \in [3, \infty)$, $f(x) = \frac{x}{e^x} > 0$ as the top and bottom are positive
>
>Also, on $[3, \infty), f'(x) = e^{-x} -  xe^{-x}x$
>$= e^{-x}(1-x)$
>$< 0$ as $e^{-x} > 0$ but $1-x<0$ for $x \geq 3$
>$\therefore f$ is $\downarrow$ on $[3, \infty]$
>- You can just say "on x interval" to save time writing
>- Factoring is good when I want to prove something is positive or negative
>
>We use IT:
>Consider $\int_3^\infty f(x)\;dx = \int_3^\infty xe^{-x}\;dx$
>$= \lim \limits_{A\to\infty}\int_3^A xe^{-x}\;dx$ by def'n of type 1
>Choose $u = x$, $dv = e^{-x}$
>$du = 1dx$, $v = -e^{-x}$
>So
>$= \lim \limits_{A\to\infty} \left(-xe^{-x}|_3^A - \int_3^A-e^{-x}\;dx   \right)$
>$= \lim \limits_{A\to\infty} \left(-Ae^{-A} + -3e^{-3} - \left( -e^{-A} + e^{-3}  \right)    \right)$
>$=\lim \limits_{A\to\infty} \frac 4 {e^3} - \frac{A+1}{e^A}$
>We probably have to use l'hopitals rule lol
>$-\lim \limits_{A\to\infty} \frac 4 {e^3} - \frac{1}{e^A}$ by L'H as the top and bottom go to infinity (they are both indeterminant)
>$=4/{e^3}$
>$\therefore$ limit exists
>$\therefore$ the improper integral converges by defn
>$\therefore$ the series converges by IT






