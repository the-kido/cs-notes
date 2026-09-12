- Geometric series time
	- if we multiply by the same thingy each time, yeah\
	- If |r| < 1, then it'll converge to $\frac {a} {1-r}$
- Div test
	- if $\sum_{n=1}^\infty a_n \neq 0$ 
	- l'hopitals rule may come in handyyy
- Integral test
	- non-negative
	- decreasing 
	- integral converges.
	- bazinga
#todo ONLY defn and geometric series gives the exact value we converge tooooo.

>[!example] Prove $\sum_{n=1}^\infty \frac 1 n$ diverges
>$a_n = \frac 1 n$
>Let $f(x) = \frac 1 x$
>Note for $n \geq 1, a_n = f(n)$
>Then $f'(x) = \frac{-1}{x^2}$
>Note $f'(x) < 0$ on $[1, \infty]$, which implies f is decreasing on $[ 1,\infty]$
>Note for $x \geq 1$, $f(x) = 1/x > 0$
>We have continuity on $[1, \infty]$ as $f(x)$ is diff on $[1,\infty]$
>Now we show $\int_1^\infty \frac 1 x \;dx$ diverges. 
>It's simple, you do things.
>Then by I.T., $\sum_{n=1}^\infty \frac 1 n$ diverges


>[!example] $\sum \frac{2^n}{3^{2n+1}}$ prove it diverges
> 
> 
>$$\frac{2^n}{3^{2n}\cdot 3} = \frac{2^n}{3\cdot 9^n} = \frac 1 3  (\frac{2}{9})^n$$
>- Exponenttt lawsss
>This is a geometric series, with $r = \frac 2 9$
>So as $|\frac 2 9|< 1$, it converges to $\frac{}{2/3}$
>$a = \frac 1 3 (\frac 2 9)

>[!example]
>$\sum_{n=1}^\infty    n^2 e^{-n}$
>We are doing IT
>Let $f(x) = x^2e^{-x}$, so $\forall n \in \mathbb N, a_n = f(n) by def'n
>Note for $n \geq 1, x^2 \geq 0$, and $e^{-x} \geq 0$
>So  $f(x) \geq 0$
>Boom non-negative is true
>Also $f'(x) = 2xe^{-x} - x^2e^{-x}$ by diff rules
>$= xe^{-x}(2 - x)$
>But now we have the issue that x is not > 2
>So we consider the "tail" of the series. For instance, $\sum_{n=3}^\infty n^2 {e^{-x}}$ would work pretty well!.
>Then, for $\forall x \geq 3, f'(x) < 0$ as $n^2e^{-n} > 0$ but $2 -n \leq 0$ as $x \geq 3$
>So we also have decreasing.
>We got cont, dec, and non-negative. yay!
>
>We show that $\int_3^\infty x^2e^{-x}\;dx$ converges. We use CT i think?
>- nO WE do not. We just do IBP twice
> but eventually we get that 
$\int_3^\infty f(x)\;dx$ converges.
>Therefore $\sum_{n=3}^\infty n^2e^{-n}$ converges, so $\sum_{n=1}^\infty n^2e^{-n}$ also converges the split sum $\sum_{n=1}^3 n^2e^{-n}+ \sum_{n=3}^\infty n^2e^{-n}$ converges





>[!example] $\sum_{k=1}^\infty (-1)^ke^{-k} + \frac{5^{k+1}}{10^k}$
>Splitting this up in this direction is FINE, but you cannot go the other direction without proving both parts converge.
>Consider  $\sum_{k=1}^\infty (-1)^ke^{-k} +\sum_{k=1}^\infty   \frac{5^{k+1}}{10^k}$ individually.
>The second series is a geometric series with $r=1/2$, so it converges by geometric series test
>The first one is also geometric:
>$-1e^-1 + 1e^-2 - e^-3 + \dots$
>The $r = \frac{-1}{e}$
>So $\sum_{k=1}^\infty (-1)^ke^{-k} +\sum_{k=1}^\infty   \frac{5^{k+1}}{10^k} = \sum_{k=1}^\infty \left[(-1)^ke^{-k} + \frac{5^{k+1}}{10^k}\right]$ converges by series props since both series converge 


>[!example] $\sum_{n=0}^\infty  \frac{5\cdot 3^{-n} + 4}{4^n}$
>
>Consider the sepereat things
>Both will be geometric. 


>[!example] Prove that $\sum_{n=1}^\infty a_n = \int_1^\infty f(x)\;dx$ where f is dec, cont, and non-negative where $a_n = f(n)$. OR give counter example
>Ye this false tho so counterexample time
>Choose $a_n = e^{-x}$ as it is both easy to prove converges via series and integral tests
>So $\sum_{n=1}^\infty e^{-x}$
>
>U can show that one side will be $\frac{1}{e+1}$ and the other side will be $\frac 1 e$ and yeah that is it!




