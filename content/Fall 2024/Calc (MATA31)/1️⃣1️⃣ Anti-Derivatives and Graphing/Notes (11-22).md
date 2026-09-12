## Intervals of Increasing and Decreasing (Inc / Dec test)
Let f be a function that is diff on interval I.
> If f' is positive on I, then f is <span class="emphasis">increasing</span> on I
> If f' is negative on I, then f is <span class="emphasis">decreasing</span> on I

<span class="emphasis">The converse is NOT true!</span>. Kinda goes against the convention of other definitions lol
### Critical Point
>[!note] Definition 
>An input x = c is a critical point on f(x) if
>1. c is in the domain of f(x)
>2. either f'(c) = 0 or f'(c) is undefined
>The pair (c, f(c)) is a critical point

## Max and Min
### First Derivative Test
Classifies critical points as local max, mins, or neither.
- If f'(x) is positive, for x in (a, c) and negative for x in (c, b), then it is a local max
- Same idea for all 4 options. The first and second derivatives are left and right of c respectively:
	- f' < 0 and f' < 0 --> neither
	- f' < 0 and f' > 0 --> min
	- f' > 0 and f' < 0 --> max
	- f' > 0 and f' > 0 --> neither

## Concavity
Slope increase = CU
Slope decrease = CD

So, our definition is:
>Let f(x) be a function on an interval I and suppose both f and f' are differentiable on I.
> f is concave up on I if f' is increasing on I
> f is concave down on I if f' is decreasing on I

## Inflection Points
> We say that f has an inflection point at $x = c$ if 
> - f is continuous at c and 
> - f changes in concavity at c
#todo Why does f have to be continuous at c? What if it's in the asymptote? It would never be an inflection point.
### The Concavity Test
> [!note] Def'n
> Suppose f and f' are differentiable on I.
>  - If f'' is positive on I, then f is <span class="emphasis">concave up</span> on I.
>  - If f'' is negative on I, then f is <span class="emphasis">concave down</span> on I
- this is similar to the increasing/decreasing tests above
- These go both directions unlike the inc/dec tests like most definitions are.

If we want to prove that f is concave up or down somewhere, we can write a proof like this:
1. Show f'' positive --> (f' increasing (by inc/dec test) <-> f concave up (by def'n))
2. Show f'' negative --> (f' decreasing <-> f concave down)

### Points of inflection
To show these exist, you must find *possible* POI first via f''(x) = 0 or DNE, and then check the concavity changes at the point.
## Asymptotes
>[!note] Def'n of HA
>Let $L \in \mathbb{R}$. The line y = L is a HA of f if either
>1. $\lim \limits_{x \to \infty} f(x) = L$ or
>2. $\lim \limits_{x \to -\infty} f(x) = L$

>[!notes] Def'n of VA
>x = a is a VA if at least one hold:
>1. x --> a f(x) = inf or -inf
>2. x --> a- f(x) = inf or -inf
>3. x --> a+ f(x) = inf or -inf

>[!note] Def'n of Slant Asymptotes (OA's)
>Let $m, b \in \mathbb{R}$. The line y = mx + b is a slant asyptote to the graph of f if either
>1. $\lim \limits_{x \to \infty} (f(x) - (mx + b)) = 0$
>2. $\lim \limits_{x \to -\infty} (f(x) - (mx + b)) = 0$
>
^^ As x gets big, the difference between f(x) and the OA should be close to 0.

>[!question] What is the equation for the OA of $\pi x + 7 + e^{1/x^2}$?
>Note that $\lim \limits_{x \to \infty} e^{1/x^2} = 1$, so the OA looks to be $\pi x + 8$. We can prove our guess is right with the definition!
>
>$\lim \limits_{x \to \infty} ((\pi x + 7 + e^{1/x^2}) - (\pi x + 8)) = L$
>= -1 + e^1/x^2 
>= 0
>got lazy but you get the idea. This works for both x --> inf and x --> -inf
>

# Increasing on $(1,2)$ and $(4, 5)$ vs increasing on $(1,2) \cup (4,5)$
- The first version is correct. The second is NOT correct. That is because the increasing/decreasing test only applies to a specific interval, but not unions of intervals (that would have to be a separate proof).


## Second Derivative Test
- Relates to finding out if a critical point is a max or min.
- A bit more useless compared to the first derivative test, because if you get the case where f''(c) = 0, then we cannot confirm/deny if it's a max/min
- Anyway here it is:
> Suppose x = c is a critical point of function f. Suppose f and f' are differentiable and f'' is continuous on the interval around x = c. 
> If f''(c) > 0, then f(c) is a local minimum
> If f''(c) < 0, then f(c) is a local maximum
> If f''(c) = 0, then use the first derivative test cuz we cannot be sure. 
# Cards #calc-11

How do you find critical points?
?
x = c is a critical point of f if c is in the domain of f and f'(c) = 0 or DNE

What is an inflection point? Where are possible inflection points?
?
An inflection point is where concavity swaps from up to down, or from down to up. They possibly exist where f''(x) = 0 or DNE. 



What is the difference between the first and second derivative test? What are they both used for?
?
They are both used to classify critical points. 
For the first derivative test, you check the two sides of the critical point and see if it goes from increasing to decreasing via the first derivative. 
For the second derivative test, you just plug in the critical point into the second derivative and if it's <span class="emphasis">positive</span>, it's <span class="emphasis">local minimum</span>, and if it's <span class="emphasis">negative</span>, it's a <span class="emphasis">local maximum</span>. But, if f''(c) = 0, it says nothing.


What is the definition of HA, VA, and OA?
?
HA:
Let L in R. y = L is the HA if $\lim \limits_{x\to \pm \infty} f(x) = L$. Either plus or minus infinity works.
VA:
Let a in R. x = a is a VA if $\lim \limits_{x\to a^\pm} f(x) = \pm \infty$ (or when the full limit goes to $\pm \infty$)
OA:
Let m, b in R. The line y = mx + b represent the OA if 
$\lim \limits_{x\to \pm \infty} [f(x) -(mx + b)] = 0$


If f''(x) > 0, is it concave up or down?
?
Concave up! Negative is concave down.

