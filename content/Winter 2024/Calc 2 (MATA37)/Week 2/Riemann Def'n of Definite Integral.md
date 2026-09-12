#todo Read chapter 4.3

> [!quote]
> let $a, b \in R$, a < b. Let $[a,b] \subseteq dom(f)$
> let  $P = \set{x_i}_{i=0}^n$ be a Riemann partition of $[a, b]$.
> The definite integral of $f$ on $[a, b]$ is $$\int^b_af(x)dx = \lim \limits_{n \to \infty} \sum^n_{i=1}(x_i^*)\Delta x, x^*_i \in [x_i-1, x_i]$$

> The Reimann def of definite integral geometrically represents the exact signed area of f between $[a, b]$! 
>This is because the lim going to n implies these rectangles are getting even thinner to the point where it should be the exact area under the function.

### Breaking down the components
- Left-hand side:
	- We have a Riemann Sum which is inside of a limit letting n (the number of slices) go to infinity. This effectively lets us get the area of the integrand
		- When n goes to $\infty$, *any* Riemann sum will be equal!  In this context, we can choose $x_i^*$ to whatever is most convenient. So the right is usually the easiest ($x_i^* = x_i$)
- Right-hand side: 
	- Uses the integral sign $\int$. 
	- The bottom number $a$ is the bottom limit, and top number $b$ is the upper limit.
	- $f(x)$ is the integrand.
	- $dx$ is the differential 
		- "it tells us what to treat as variables" "tells you what to integrate with respect to what"

# Cards #calc2-2 
Break down Riemann's Def'n of Definite Integral. Then, give an example integral and represent it with Riemann's def'n.
?
Riemann's defn is as follows
- Let a, b \in R
- Let [a, b] \subseteq dom(f)
- Let $P = \set{x_i}^{n}_{i=0}$ be a Riemann partition of [a,b]
	- This means there is a delta x 
- So, the definite integral is:
	- $\int_a^b f(x)dx = \lim \limits_{n\to \infty} \sum_{i=1}^{n} f(x_i^*) \Delta x$
	- Note

Prove geometrically that the Riemann Def'n of Integrals accurately describes the area underneath $f$
?
#todo

Why must we create a P partition when writing out the definition of the Riemann int?
?
By definition, we let there be an $a, b \in R$ and a Riemann Partition P. From there we then have the expression. This means that if there is no a, b, and P to reference, the definition 