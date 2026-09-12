##### (Self-contained; *formal*) Definition of Continuous
>Def'n: A function $f$ is <span class="emphasis">continuous</span> at c if 
>$\forall \epsilon > 0, \exists \delta > 0\text{ such that } |x-c| < \delta \implies |f(x) - f(c)| < \epsilon$ 
>
>The def of continuous implies that $f(x)$ is between $f(c) - \epsilon < f(x) < f(c) + \epsilon$

>[!note] The definition is very similar to the definition of a limit, but we do not create a punctured interval because we care about what happens at f(c)

##### (Not self-contained) definition of continuous.
>Def'n: A function $f$ is <span class="emphasis">continuous</span> at c if 
>$\lim \limits_{x \to c} f(x) = f(c)$

>[!example] Prove $f(x) = x^2$ is continuous on $\mathbb{R}$
> 
> WTS for all $c \in \mathbb{R}$ that $f(x)$ is continuous at c.
> Let $c \in \mathbb{R}$ be arbitrary.
> WTS $\forall \epsilon > 0, \exists \delta > 0\text{ such that } |x-c| < \delta \implies |x^2 - c^2| < \epsilon$
> Let $\epsilon > 0$ be arbitrary
> Choose $\delta = \min\{1, \frac{\epsilon}{1 + 2|c|} \}$ (note $\delta > 0$ since $\epsilon > 0$ and $1 + |2c| > 0$)
> Assume $|x-c| < \delta$.
> Let us first show that $|x+c| \leq 1 + 2|c|$
> $$
> \begin{align*}
> &|x+c| \leq 1 \\
> &-1 \leq x + c \leq 1 \\
> &
> \end{align*}
> $$
>
> Then 
> $$
> \begin{align*}
> |x^2 - c^2| &= |(x-c)(x+c)|\\
> &=|x-c||x+c|\\
> &<\delta |x+c|\\
> &<\delta \cdot (1 + |2c|)\\
> 
> \end{align*}
> \\
> $$
> the rest is obvious limit stuff. 

### Left continuous and right continuous
> A function is left continuous at $x = c$ if $\lim \limits_{x\to c^-} f(c) = f(c)$
> Same for the right but $c^+$ instead

### Continuous on an interval
A function f is continuous on an interval if it is continuous on every point *inside* the interval and right continuous at the left endpoint and left continuous at the right endpoint.
# The Continuity Theorem

> [!note]
> If f is a function constructed using any finite combination of the following operations:  
> - Sum, difference, product, quotient, and  
> - Composition of functions,  
>
>where the component functions are  
>
>- Polynomial and rational functions  
>- Root functions,  
>- Absolute value functions,  
>- Exponential and logarithmic functions,  
>- Trigonometric and inverse trigonometric functions,  
> 
> then f is continuous on its domain.
### How to prove it?
You'd have to prove that
- The sum/difference/product/quotient of continuous functions are continuous
- and more

>[!example] Thm: The sum of continuous functions is continuous.
>If f and g are continuous at c, then f + g is continuous at c.
>
>Proof.
>Assume f and g are continuous.
>Then $\lim \limits_{x \to c} f(x) = f(c)$ and $\lim \limits_{x\to c} g(x) = g(c)$ by definition of continuity.
>$\lim \limits_{x \to c} (f + g)(x) = \lim \limits_{x \to c}(f(x) + g(x))$ by definition of +
>$=\lim \limits_{x \to c} f(x) + \lim \limits_{x \to c} g(x)$ by limit rules since the individual limits exist.
>$=f(c) + g(c)$
>$=(f+g)(c)$




# Cards #calc-5 
What are the two definitions of continuity at $x = c$?
?
The self-contained one, and not self-contained one:
Self-contained: 
- If $\forall \epsilon < 0, \exists \delta < 0 \text{ s.t. } |x-c| < \delta \implies |f(x) - f(c)| < \epsilon$
Not self-contained:
- If $\lim \limits_{x\to c} f(c) = f(c)$ 
- The 3 part way of thinking abt it (optional):
	- $f(c)$ should be defined
	- $\lim \limits_{x\to c} f(c)$ should exist (i.e. the left and right limits should exist)
	- $\lim \limits_{x\to c} f(c) = f(c)$

What is the definition of discontinuous at $x = c$?
?
If f is not continuous at $x=c$. It's obvious don't overthink it!


What does it mean for a function to have a left/right limit at $x = c$? 

If f(x) is continuous on (a,b), does it mean that it is also continuous on \[a, b]?
?
No, because f must be right continuous at x = b and left continuous at x = a

Using the formal definition of continuous, show that |x| is continuous on $\mathbb{R}$. (hint: use $\epsilon - \delta$).
?
WTS $\forall \epsilon > 0, \exists \delta > 0 \text{ s.t. } |x-c| < \delta \implies |f(x) - f(c)| < \epsilon$
Let epsilon > 0 be arbitrary.
Choose $\delta = \epsilon.$ Note $\delta \geq 0$
Assume $|x-c| < \delta$.
Then
$||x| - |c|| \leq |x-c|$ (by reverse triangle inequality)
$< \delta$ (by assumption)
$= \epsilon$ (by choice of delta)
as required to show.

Prove that $\sqrt{x}$ is continuous on $[0, \infty)$. To make things easier, split 'c' into c = 0 and c > 0.

Prove that $e^x$ is continuous 
?
#todo. Haven't tried it!


Try to prove the following questions
?
![[Pasted image 20241213220236.png]]
(these are in slides for 5b)

