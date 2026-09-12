dar bow something
Conjecture: (let a, b in R where a < b yayeeyay) f is integrable on [a,b] when:
- When f is cont on [a, b], or
- f has a finite # of *jump discontinuities*. Wow.

(the Riemann def'n will always exist if integrable, but it doesn't always let us calculate things)

Definition: Darboux Integral 
- Def: Let $a, b \in R, a < b.$ 
- Suppose f is bounded on [a, b]  (means it must have an upper/lower bound)
	- $\exists c \in R^{\geq 0}, \forall x \in [a, b], |f(x)| \leq C$ (same as $-c \leq f(x) \leq c$)
- Let $P = \set{x_i}_{i=0}^n$ be *any* partition of $[a, b]$ (note we did not specify it's an R.P). Then,
	- The lower Darboux sum of f for P on $[a,b] = L(f, P) = \sum_{i=1}^n m_i(x_i - x_{i-1})$ where $m_i = \inf \set{f(x) | x \in [x_{i-1}, x_i]}$ 
	- The upper Darboux sum of f for P on $[a,b]$ = $U(f, P) = \sum_{i=1}^n M_i(x_i - x_{i-1})$ where $M_i = \sup \set{f(x) | x \in [x_{i-1}, x_i]}$

My summary:
- For interval $[a,b]$ where f is bounded (so above and below bounds), there is a non-negative real number such that for all elements in the interval, the abs value of f(x) is <= C. This kinda looks like this:
- 
#todo review calculating sups and infs. they get crazy.



When graphing it, the partitions might have different sizes but the area is the same. Take L(f, P) for instance with n = 3
then $L(f, P) = m_1(x_1 - x_0) + m_2(x_2 - x_1) + m_3(x_3 + x_2)$
Note that m_1 = inf where f(x) is between x_0 to x_1 *inclusive*. This implies there's a minimum! So m_1 is just the minimum.

#todo draw D(f, P) of the example i took a photo of just for practice. seems easy enough tho!


# Cards #calc2-2 
If a function is integrable on [a,b], can we use either the Riemann or Darboux definition of definite integrals. If so, why would we choose one over the other?
?
You can use either so long as it's integrable.
Using one over the other can be useful depending on the integrand. Riemann's definition makes it difficult to evaluate some integrals. 