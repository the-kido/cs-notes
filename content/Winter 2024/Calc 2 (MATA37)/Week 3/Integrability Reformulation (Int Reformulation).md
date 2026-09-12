### aka Darboux for people who don't like sups and infs 

>[!explanation] The idea is that the difference between $U(f,P)$ and $L(f,P)$ for some bounded function and some partition of $[a,b]$ should approach 0.
>
>The reason we use $\exists$ and not $\forall$ is because you could cherry-pick a scuffed partition that would make the upper and lower Darboux sums different. As long as one of them works, we know the area should be calculatable, so the integral exists. 
>

Let $a, b \in \mathbb R, a < b$.
Suppose $f$ is bounded on $[a, b]$.
We say $$\text{f is integrable on }[a, b] \Longleftrightarrow \forall \epsilon > 0, \exists P \text{ partition of } [a,b] \text { s.t. } U(f, P) - L(f, P) < \epsilon$$
- this formula exists b/c we are NOT proving functions are integrable with Darboux. the original definition was intended to prove that f is integrable.
- Basically says the upper and lower Darboux sum can be arbitrarily close to epsilon.

However in this course we will only be using the negation (to prove things *aren't* integrable!)
$$\text{f is not integrable on }[a,b] \Longleftrightarrow \exists \epsilon > 0 \text{ s.t. } \forall \text{P partition of }[a,b], U(f,P) - L(f,P) \geq \epsilon
$$

>[!example]
> let $f(x) = 11$ if $x \in Q$ and $9$ if $x \not \in Q$.
> Prove $\int_0^2 f(x)dx$ DNE. i.e. $f$ is not int on $[0, 2]$ by Int Reformation
> WTS the definition above is false.
> WTS that NOT the Int Reformation is true. Or ~($\forall \epsilon > 0, \exists P \text{ of } [0, 2] \text{ s.t. } U(f, P) - L(f, P) < \epsilon)$ is true.
> WTS $\exists \epsilon > 0, \forall P \text{ of }[0,2] \text{ s.t. } U(f, P) - L(f, P) \geq \epsilon$ holds.
> Choose $\epsilon = \_\_ > 0$ (i am from the future: we choose $\epsilon = e$ for the lols)
> Let P be an arbitrary partition of [0, 2]
> Then
> For i = 1, 2, ... n
> - $m_i = \inf\set{f(x) | x \in [x_{i-1}, x_i] }$
> 	- We need to know what the set is; what the f(x) assumes.
> 	- Note that f(x) = 11, 0 b/c Q and I are dense in R
> 	- = inf{11, 0} = 0
> - $M_i = \sup\set{f(x) | x \in [x_{i-1}, x_i] }$
> 	= sup{11, 0} (for same reasons as above)
> 	= 11
> Then
> $$\begin{align*}
U(f, P) - L(f, P) &= \sum_{i=1}^n M_i(x_{i} - x_{i-1}) -  \sum_{i=1}^n m_i(x_{i} - x_{i-1}) \\
&= \sum_{i=1}^n 11(x_{i} - x_{i-1}) - 0\\
&= 11 \cdot \sum_{i=1}^n (x_{i} - x_{i-1}) - 0\\
&= -x_0 + x_n\\
&= 11 \cdot length([0, 2]) \text{ by solving geometrically}\\
&= 22 \text{ (now we go back and choose epsilon to be something <= 22 and > 0)}\\
\geq e = \epsilon 
\end{align*}$$
> as required.


So yeah if we show that $\exists \epsilon > 0, \forall P \text{ of }[0,2] \text{ s.t. } U(f, P) - L(f, P) \geq \epsilon$ holds then f is not integrable.
