# Linearization 

"Tangent lines can be used to approximate functions"

> Curves are complex and nasty but lines are super simple to calculate. The idea is to simplify a curve by using a tangent line instead.

Observation: For $x$ close to $a$, $f(x)$ is also close to the tangent line to $f$ at $a$

#### Eq of tangent lines
$y = y_1 = m(x-x_1)$
$y = f(a) + f'(a)(x-a)$ 
- This is a linearization for the function f (you're using a straight line to approximate f)
- Linear approximation
- tangent line approximation
and denoted by
- $L(x) = f(a) + f'(a)(x-a)$

## Observation
For x close to a, $f(x) \approx L(x)$

>[!example] Approximate the value of $\sqrt[3]{8.1}$
> We will use linear approximation!
> Let $f(x) = \sqrt[3]{x}$ (you could do x+1, or 30x+3.... but why)
> and use the tangent line to f at $x = 8$ to approximate $\sqrt[3]{8.1}$
> Note $f(8) = \sqrt[3]{8} =2$ 
> and $f'(x) = \frac{1}{3}\cdot x^{-2/3}$, 
> so $f'(8) = \frac{1}{3}\cdot 8^{-2/3} = 1/3 \cdot 1/4 = 1/12$
> 
> The linearization is $L(x) = 2 + 1/12(x-8)$
> by observation (the closeness one), $\sqrt[3]{8.1} = f(8.1) \approx L(8.1)$
> L(8.1) = 241/120
> 
> We know it's an <span class="emphasis">overapproximation</span> because f(x) is concave down everywhere.
> 
> ![[Pasted image 20241211203934.png]]
> Tangent lines are above for concave down, and below for concave up. #card-this 

Expressing functions as polynomials is just easier

## Figuring out over approximation vs underapproximation

![[Pasted image 20241215210115.png]]
- This purple dot is *below* the actual function, which means it's an underapproximation. How do we know with math? Wellllllllllllllll!
	- If the function is CU at the point , then the line will always be *below it*. Therefore, it would be an underapproximation.
	- If the function is CD, then the line will always be *above it*. Therefore, it would be an over approximation
		- ![[Pasted image 20241215210609.png|400]] 
		- Observe this graph that is always CD
	
# L'Hopital's Rule

> Suppose f and g are differentiable on a punctured interval around a on which g(x) is non-zero.
> If $\lim \limits_{x\to a} \frac{f(x)}{g(x)}$ is an indeterminant limit type (0/0, $\infty/\infty$, etc.), then $\lim \limits_{x\to a} \frac{f'(x)}{g'(x)}$ as long as the second limit exists or is infinite
> 
> This ideally makes the limit easier to compute!
> You just need to show the hypothesis (that the limit is either 0/0 or inf/inf. NOT indeterminant! That is different)
#card-this 

We are NOT proving it!

>[!note]
>It also words for one-sided limits or when x goes to infinity. The preamble for the definition just changes a little bit. No more punctured interval. Instead, f an g need to be differentiable on some interval n to infinity instead
>

>[!example] Find $\lim \limits_{x \to \infty} \dfrac{x^5+\pi e^x}{3x^2 + e^x}$
>
>$\lim \limits_{x \to \infty} \dfrac{x^5+\pi e^x}{3x^2 + e^x} \overset{h}{=} \lim \limits_{x \to \infty} \dfrac{5x^4+\pi e^x}{6x + e^x}$ since $\frac{\infty}{\infty}$ limit type.
>![[Pasted image 20241211211437.png]]
>Eventually you get to pi by applying the constant limit rule!

## Other limit types
There are times you may not obviously be allowed to use L'Hopitals rule!
$0 \cdot \infty$ limit types for instance; these are indeterminant.
This happens if you have $f(x)\cdot g(x)$ where $f(x)$ goes to 0 and $g(x)$ goes to infinity for some limit. Instead, just rewrite it as $\frac{f(x)}{1/g(x)}$. Only the domains change. But now, the limit type is 0/0 or inf/inf!!! We can use L'Hopitals rule now!


## Other other limit types
$1^\infty$. 
- The reason this is the case is because, in limits, the base isn't 1, but *approaching* 1. If the base is $0.9^\infty$, it'll be 0. If it's $1.1^\infty$, then it's infinity!
$0^0$
- Same as above, but with with both negative and positive implications.
$\infty^0$
- Similar to "big\*small"

These happen when we have $f(x)^g(x)$

> $\infty \cdot \infty \text{ or } \infty^\infty$ are NOT indeterminate



#todo Remember a lot of the inverse trig derivatives, like tan^-1 derivative

#todo This question is quite a doozy

- #todo Go over the limit law which lets you apply functions into a limit
- ![[Pasted image 20241211221003.png]]
- ![[Pasted image 20241211221057.png]]
- That was more justification. It's in week 5

#todo "by limit rules (individual limits exist)". Is that all i have to say?


# Cards #calc-12 
What does it mean to linearize at $x = a$ for a function f?
?
It means to make a tangent line at the point x = a from the curve. The tangent line equation is gonna be a linearization of the graph at x = a.

How does linearization help estimate a function?
?
Since $f(x) \approx L(x)$ when x is close to a
(Assume L(x) is a linearization of f(x) at x = a).

How can you approximate $\sqrt[3]{8.1}$ with linear approximation? Is it an overestimate or underestimate?
?
Let $f(x) = \sqrt[3]{x}$. x = 8 is suitably close to 8.1, so let us try to find f'(8). Note that f(8) = 2 so this tangent will go through (8, 2).
By derivative rules: $f'(x) = \frac{1}{3}x^{-2/3}$
f'(8) = 1/12
So, $L(x) = 2 + \frac{1}{12}(x-8)$

Now to approximate 8.1, we use this line and plug in 8.1! 
$L(8.1) = 2 + 1/120$
Thus, $\sqrt[3]{8.1} \approx 2 + \frac{1}{120}$

Wow, this is WAY more accurate than doing $\sqrt[3]{8}$!

Show that $\lim \limits_{x \to 1^+} x^{1/(x-1)} = e$
?
If you plug in 1, you get the $1^\infty$ limit type, which is indeterminant. We gotta for it! 
However, there are variables on the top and bottom, we needa use logarithms!
$\ln L = \lim \limits_{x \to 1^+} \ln (x^{1/(x-1)})$ (by limit rules)
$\ln L = \lim \limits_{x \to 1^+} \frac{\ln x}{x - 1}$ (this is a 0/0 limit type)
$\ln L = \lim \limits_{x \to 1^+} \frac{1/x}{1}$
$1$
Easy peasy.