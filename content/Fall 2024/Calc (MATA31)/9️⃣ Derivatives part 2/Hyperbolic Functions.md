
| Function                                     | Domain                        | Range                         | Formula                             | Note                                        |
| -------------------------------------------- | ----------------------------- | ----------------------------- | ----------------------------------- | ------------------------------------------- |
| $\cosh x$                                    | $x \in \mathbb{R}$            | $y \in \mathbb{R} : x \geq 1$ | $\frac{e^x + e^{-x}}{2}$            |                                             |
| $\sinh x$                                    | $x \in \mathbb{R}$            | $y \in\mathbb{R}$             | $\frac{e^x - e^{-x}}{2}$            |                                             |
| Restricted cosh x                            | $x \in \mathbb{R} : x \geq 0$ | $y \in \mathbb{R} : x \geq 1$ |                                     |                                             |
| $\cosh^{-1}$ (inverse of restricted $\cosh$) | $x \in \mathbb{R} : x \geq 1$ | $y \in \mathbb{R} : x \geq 0$ |                                     | It's just coshx, except $x \in [0, \infty)$ |
| $\tanh x$                                    | $x \in R$                     | $y \in R : -1 \leq x \leq 1$  | $\frac{e^x - e^{-x}}{e^x + e^{-x}}$ |                                             |
Note: Only cosh (and subsequently tanh) has to be restricted to get their inverses. arccosh gets its domain from cosh's range, but it's domain is $x \geq 0$
## Circle v2
Similar to a circle graph ($x^2 + y^2 = 1), a hyperbolic function can be graphed with $x^2 - y^2 = 1$. Where the point on a circle is $(\cos x, \sin x)$, for hyperbolic functions it's $(\cosh x, \sinh x)$ 
![[Pasted image 20241122094934.png]]

![[Pasted image 20241122100115.png]]
- For circles, the coordinate 't' is twice the area of the sector made.
- The same applies for hyperbolic functions. 't' is twice the area  ![[Pasted image 20241122100224.png]]


### "Every function can be written as a sum of an even function and odd function"
An even function has $f(x) = f(-x)$ and an odd function has $-f(x) = f(-x)$
Observe that $f(x) = \frac{f(x) + f(-x)}{2} + \frac{f(x) - f(-x)}{2}$
			      even             odd
$e^x = coshx + sinh x$ ($coshx$ is the even part; $sinh$ is the odd part)

## Identities
- $cosh^2 x - sinh^2x = 1$
- $1 - \tanh^2 x = sech^2 x$

## Derivatives
$\dfrac{d}{dx} \sinh x = \cosh x$
$\dfrac{d}{dx} \cosh x = \sinh x$
- For both of these, just use the def'n of sinh and cosh.
$\dfrac{d}{dx} \tanh x = sech x$


# Cards #calc-9 
What is the formula for sinhx, coshx, and tanhx?
?
$\sinh x = \frac{e^x - e^{-x}}{2}$
$\cosh x = \frac{e^x + e^{-x}}{2}$
$\tanh x = \frac{e^x - e^{-x}}{e^x + e^{-x}}$

What is the formula of a circle? What is the formula of a hyperbola?
?
Circle: $x^2 + y^ 2 = 1$
Hyperbola: $x^2 - y^2 = 1$

What does cosh x and sinh x look like graphically?
?
sinh x looks like tan x but 


What does the 't' argument in $\sinh t$ represent graphically?
?
Twice the area of the sector formed by the "angle". In other words, area = t/2. This is the *same* as in trig!
![[Pasted image 20241215132734.png]]

Is $\cosh x$ and $\sinh x$ even or odd? What is its relation to $e^x$?
?
sinh x is odd and cosh x is even. Just like how sin x is odd and cos x is even! 
Look at the definitions (let f(x) = e^x)

$f(x) = \frac{f(x) - f(-x)}{2} + \frac{f(x) + f(-x)}{2}$
Notice how that first part is even, and the second part is odd. Also note that 
$sinh x = \frac{e^x - e^{-x}}{2}$ and 

$e^x$ can be split into its even and off components of $\sinh x$ and $\cosh x$!


Some important identities are $\cosh^2 x - \sinh^2 x = 1$, $\cosh(x + y) = \cosh x \cosh y + \sinh x \sinh y$, and $\sinh(x + y) = \sinh x \cosh y + \cosh x \sinh y$

Solve this ![[Pasted image 20241215140225.png]]
? 
The easiest solution is to use $\cosh^2 x - \sinh^2 x = 1$
$\sinh^2 t = 4$
$\cosh^2 x  = 5$
$|\cosh x|  = \sqrt{ 5 }$
Note that $\cosh x \geq 1$
$\cosh x  = \sqrt{ 5 }$

Then,
$\tanh x = \frac{2}{\sqrt{5}}$
boom


What is the derivative of $\sinh t$ and $\cosh t$ and $\tanh x$
?
$\dfrac{d}{dx}\sinh t = \cosh t$ 

$\dfrac{d}{dx}\cosh t = \sinh t$  (Note, it is NOT negative!)

$\dfrac{d}{dx}\tanh t = sech^2 t$ 

What are the inverses of the hyperbolic functions?
?
sech x: $\ln(x + \sqrt{x^2 + 1})$
cosh x: $\ln(x + \sqrt{x^2 - 1})$
tanh x: $\frac{1}{2} \ln(\frac{1+x}{1-x})$

Use these when calculating the derivatives of the inverses (ez pz)
