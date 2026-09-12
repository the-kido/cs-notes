Comparison Theorem is the GOTO if we have an ugly improper integral that's too difficult to integrate

Prove $\int_1^\infty \frac{cos^2(x)e^x }{x + e^{2x}}$ conv or div
First we know the whole thing $\geq 0$ since each term is $\geq 0$ for x > 1

2. Find a good and explicit comparison
By observing the dominant terms we can see if it converges or diverges (i.e. finding the HA)
It looks like cos^2(x) won't contribute much as it is periodic. but $e^{2x}$ is definitely controlling! 
It seems to me that this is going to diverge.

From there we will construct a function that is bigger, just like in delta epsilon proofs
To make a function bigger, we maximize the numerator and shrink the denominator :>

For $x \in [1, \infty]$ $f(x) = \frac{cos^2(x)e^x}{x + e^x} \leq \frac{1e^x}{x + e^x}$
- Yay now we got rid of that ugly cos :D
$\leq \frac{e^x}{e^{2x}}$ as $x+e^{2x} > e^{2x}$
$=g(x)$ yay!
(wow what a coincidence the integral is the same)
Consider $\int_1^\infty g(x)\;dx =\int_1^\infty e^{-x}\;dx = \lim \int_1^A e^{-x}\;dx$
$=\lim -e^x|_1^A$
$=\lim (0 + 1/e) = 1/e$
So the limit exists; the area exists! $\therefore \int_a^\infty g(x)\;dx$ converges.
Therefore by CT (comparison theorem) $f(x)$ converges as $0 \leq f(x) \leq g(x)$ and g(x) converges.


# Example #2 

> $\int_0^1 \frac{1}{sin^2(x)x^{3/2}}$ conv or div?

This be a type 2 integral. The problem point is at $x=0$
- Oh the problem for a type 2 must be at an endpoint #todo :))

1. Show that f(x) is bounded by the x-axis
$\forall x \in [0,1], f(x) = \frac{1}{sin^2(x)x^{3/2}} \geq 0$ yay

2. Figure out how this guy is behaving
$x^{-3/2}$ seems to be the denominating factor. And we know that has a VA at 0, so clearly this guy diverges (??)

>[!warning] If $\int_0^1 \frac{1}{x^P}$ and $P < 1$ then it will converge. If $P \geq 1$ then it will diverge

3. Find a good and explicit comparison (again!)
$\forall x \in [0, 1], f(x) \geq \frac{1}{x^{3/2}}$ by maximizing the denominator b/c $sin^2(x) \in [0, 1]$
$= h(x)$

Consider $\int_0^1 h(x)\;dx = \int_0^1 x^{-3/2}\;dx$
$=\lim A \to 0^ -x^{-1/2}/1/2$
$= \lim \limits_{A \to 0^+} -2(1/\sqrt(1) - 1/\sqrt(A))$
$=\infty$
Therefore the limit does not exist; therefore the integral diverges, so f(x) diverges:
Since $0 \leq h(x) \leq f(x)$ and $h(x)$ diverges, by CT, F diverges



# EXTRA NOTES FOR MYSELF
#todo 
When finding a good and explicit comparison, try to keep the determining factor, otherwise the new guy might not actually converge :( ![[Pasted image 20250311220310.png]]
- it was a terrible idea to use $e^x$ cuz it doesn't diverge when going to negative infinity ;-;
- frick. use x^2 instead then