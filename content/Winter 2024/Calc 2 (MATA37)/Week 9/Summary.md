#### Proving series by def'n
- Useful for telescoping series, easily found closed-form versions of $S_n$, or really weird scenarios. Like if it looks flipping weird, it's probably is a def'n proof
- If you have to prove a polynomial like $\frac{1}{x\left(x+1\right)}$ conv/div, it is possible it is a telescoping series; you must be PFD!

$$\frac{A}{x}+\frac{B}{x+1}$$
$$\frac{Ax+A+Bx}{x\left(x+1\right)}$$
$A+B = 0$
$A = 1$
$B=-1$
Boom, we get
$$\frac{1}{x}-\frac{1}{x+1}$$
which is very telescoping!

### Proving a recursive sequence converges
- It's induction, baby.

### Evaluating limits of recursive sequences
>[!example] if $a_1 = 1$ and $a_n+1 = \frac 1 4(2a_n + 3)$, what does this converge to?
>Once we prove it does converge via induction, the limit $L = \lim \limits_{n\to\infty} a_n = \lim \limits_{n\to\infty} a_{n+1}$ will hold.
>Then you do some algebra. Usually you do something like this:
>$a_{n+1} = \frac 1 4 (2a_n + 3)$
>$\implies \lim \limits_{a_{n+1}} = \frac 1 4 (2a_n + 3)$
>$\implies L = \frac 1 2 a_n + \frac 3 2$
>$\implies L = 1.5$
>
>So the sequence converges to 1.5!

