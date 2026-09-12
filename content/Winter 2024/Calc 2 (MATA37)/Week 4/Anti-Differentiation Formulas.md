**	# Power Functions

>If $k \neq -1$, then $$\int x^k\;dx = \frac{1}{k+1}x^{k+1}+C$$
>Else (if $k = -1$) then 
>$$\int x^{-1}\; dx = \int \frac{1}{x}\; dx = \ln|x| + C$$

>[!explanation] Why the $|x|$ for the antideriv of $x^{-1}$? 
>Go to page 355
# Exponential Functions

> If $k \neq 0$ then $$\int e^{kx}\;dx = \frac{1}{k}e^{kx}+C$$
> If $b > 0$ and $b \neq 1$ then $$\int b^x\;dx = \frac{1}{\ln b}b^x  +C$$
 
>[!note] Remember $\ln b$ is a constant!

# [[Trigonometry|Trig]] Expressions

> Obvious
> $$\int \sin x \;dx = -\cos x+C$$$$\int \cos x \;dx = \sin x + C$$$$\int \sec^2 x\; dx = \tan x + C$$
> Not Obvious 
> $$\int \csc^2x\; dx = -\cot x + C$$$$\int \sec x \tan x \;dx = \sec x + C$$$$\int \csc x \cot x \;dx = -\csc x + C$$


# Integrals whose solutions are [[Derivative of sin inverse, secant inverse, etc.|trig inverses]]

>1. $\arcsin x$
>$$\int \frac{1}{\sqrt{1-x^2}}\;dx = \arcsin x + C$$
> 
>2. $\arctan x$ $$\int \frac{1}{x^2 + 1}\;dx = \arctan x + C$$
>3. $\sec^{-1} x$
>$$\int \frac{1}{|x|\sqrt {x^2 - 1}}\; dx = \sec^{-1}x +C $$


# [[Hyperbolic Functions]]

>1. $\sinh x$ $$\int \sinh x \;dx = \cosh x + C$$
>2. $\cosh x$ $$\int \cosh x \; dx = \sinh x + C$$
>3. $sech^2 x$ $$\int sech^2 x \; dx = \tanh x  +C$$


# Integrals whose solutions are inverse [[Hyperbolic Functions]]
>1. $\sinh^{-1}$ $$\int \frac{1}{\sqrt{x^2 + 1}}\; dx = \sinh^{-1}x + C$$
>2. $\cosh^{-1}x$ $$\int \frac{1}{\sqrt{x^2 - 1}}\;dx = \cosh^{-1}x + C$$
>3. $\tanh^{-1}x$ $$\int \frac{1}{1 - x^2}\;dx = \tanh^{-1}x + C$$
