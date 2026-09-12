### What are some patterns I can follow?
- $\delta$ and/or $\epsilon$ are always > 0 in the definition. 
- $|\cdot|$ is only used when $\lim_{ x \to c}$  and/or $\lim = L$
- $0 < x - c < \delta$ when $x \to c^+$
- $0 < c - x < \delta$ when $x \to c^-$
	- Also written as $-\delta < x - c < 0$ 
- $N > 0$ if $x \to +\infty$. 
	- Also x  > N
- $N < 0$ if $x \to -\infty$
	- Also x < N
- $M > 0$ if $f(x) \to \infty$
	- Also f(x) > M
- $M < 0$ if $f(x) \to -\infty$
	- Also f(x) < N
### What are M and N?
You cannot *plug in* infinity into inequalities (whether $\lim_{ x \to \pm \infty }$ or $\lim_{ x \to c} = \pm \infty$ or both). So, you'll have to use a different formal definition of a limit that accommodates for that. That's where N and M come in.

> N applies to which way x is approached (the cousin of $\delta$)
> M applies to which way y is approached (the cousin of $\epsilon$)


>[!check] If $\forall M > 0$ and $f(x) > M$, then $f(x)$ is arbitrarily big. This logic applies to M and N going to $\pm \infty$.

![[Pasted image 20240924132826.png]]




In lecture 3.b we showed the one where f(x) goes to inf.... other ones
In 4.a we showed the 4th last one


# Cards #calc-4
What does the limit look like if $\exists M < 0$ and $\forall N > 0$?
?
It would be x --> infinity and y --> negative infinity
<!--SR:!2024-10-08,4,270-->


Explain why for limits where $x\to c^+$, the first assumption is that $0 < x - c < \delta$, and for $x \to c^-$, it's $0 < c - x < \delta$
?
For regular limits where $x \to c$ we have that x goes to c from the left and right. Therefore, the distance from x and c will be |x-c|. This distance must be less than delta for the definition.

With this, consider when $x \to c^+$. This means x is to the right of c and is moving left (shrinking). The distance from x and c is final - initial = x - c. This distance must be less than epsilon. Therefore, we get $0 < x - c < \delta$

For the $x \to c^-$ limit, x is on the left and moving to the right towards c. That means final - initial = c - x instead, or $0 < c - x < \delta$. That is how you derive those components of the limit def'n.

