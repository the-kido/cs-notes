Place bounds on the quantifiers via some statement. It's a shorthand but it's pretty obvious. 

- $\forall x \in A, P(x)$ is short for $\forall x, x \in A \to P(x)$
- $\exists x \in A, P(x)$ is short for $\exists x, x \in A \wedge P(x)$
If the universe is implied, it'll look more like this:
- $\forall x, P(x)$ is short for $\forall x, x \to P(x)$
- $\exists x, P(x)$ is short for $\exists x, x \wedge P(x)$

This also applies for bounds
For numbers, ranges can be written like $\exists x < 0$ instead of $\exists x, x < 0$ since x < 0 is a bound. 
This is considered a step, too. Call it `bounded quantifier` if you use it.
$$
\begin{flalign*}
&\neg \forall x \in A, P(x)\\
eqv\ &\neg \forall x, x \in A \to P(x) && \text{Bounded quantifier}\\
eqv\ &\exists x, \neg (x \in A \to P(x)) && \text{Quantifier Negation}\\
eqv\ &\exists x, x \in A \wedge \neg P(x) && \text{Conditional and De-Morgan's}\\
eqv\ &\exists x\in A \wedge \neg P(x) && \text{Bounded quantifier}\\
\end{flalign*}
$$

