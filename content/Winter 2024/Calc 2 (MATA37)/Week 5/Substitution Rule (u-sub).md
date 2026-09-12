Part of Integration Techniques

Utilizes the fact that $$\int f'(g(x))g'(x)\;dx = f(g(x)) + C$$


#### chapter 5.1 Substitution rule 
pg. 408 & 411

she writes it diff than the tb
>[!thm] Substitution rule
>IF f(x), g(x), and f(g(x))g'(x) are continuous (realize the interpretation depending on (in)definite integrals).
>THEN
>- (for definite integrals) $$\int_a^b f(g(x))g'(x) dx = \int_{g(a)}^{g(b)} f(u)du$$
> 
> Let u = g(x)
> du = g'(x)dx
> 
> - (for indef) $$\int f(g(x))g'(x) dx = f(g(x))$$
>   
>  
>>[!proof] Proof of definite integral form.
>>Suppose f(x), g(x), f(g(x))g'(x) are continuous on $[a,b]$.
>>(we use the right side, not the left side as we cannot use the orange box stuff... we are trying to prove the orange box stuff is what leads us to our result!)
>>(our goal is to COMPUTE both sides separately and get to some conclusion)
>>(we cannot use geo, cannot use Riemann, but we can use FTOC I)
>>
>>RHS 
>>Let F be an antiderivative of f on $[\cdot, -]$. (this exists by FTOC II) (we use the dot and bar so we can reuse it on the LS and RS)
>>
>>Let u = g(x) and du = g'(x)dx
>>
>>RHS = $\int_{g(a)}^{g(b)} f(u)du$
>>$=F(u) |_{g(a)}^{g(b)}$ by FTOC 1
>>$=F(g(b)) - F(g(a))$
>>
>>LHS = $\int_a^b f(g(x))g'(x)dx$.
>>Let's claim F(g(x)) is an antideriv of $f(g(x))g'(x)$ on $[a,b]$
>>To check, let $x \in [a,b]$ be arbitrary, then $(F(g(x)))' = F'(g(x))g'(x) = f(g(x))g'(x)$ since by FTOC II, F'(-) = f(-)
>>=$F(g(x))|_a^b$
>>=$F(g(b)) - F(g(a))$
>>SO LHS = RHS


# Differentials
The "independent variable" is the variable we are integrating with respect to.

$$\dfrac{du}{dx} = u'(x) \implies du = u'(x)\;dx$$




## A bunch of examples
#todo I took a bunch of photos .
 While we use substitution, things should start to look simpler. When ANYTHING gets harder, then you're probably doing something wrong.

Find the integral of $\frac{e^{tan^{-1}}(x)}{1+x^2}$
First, we kinda notice the 1 + x^2 as part of the derivative for arctan.
$= \int e^{arctan x} \frac{1}{1+x^2}$ to make the pattern more noticeable.
Let $u = arctan x = "g(x)"$
= $\int e^u du$
$= e^u + C$
(we're not done yet; we must write the expression in terms of x as that was what the integral was with respect to)
$= e^{arctan x} + C$

for the definite integral thingy, the RS integration limits are in terms of x, whereas the LS integration limits are in terms of u. "Do not mix these up you will loose a lot of marks" she says.


### Example #2 

Compute $\int_a^{\pi/2} sin^5(x) cos^3 (x)dx$
= $\int_0^{\pi/2} sin^5x cos^2 x cos x\;dx$
$\int_0^{\pi/2} sin^2(x)(1-sin^2x)cos(x)\;dx$ by that one hypotenuse trig property.
> Let u = sin(x)
> du = cos(x)dx
> $x=0 \implies u = sin(0) = 0$
> $x = \pi/2 \implies u = sin(\pi/2) = 1$

$=\int_0^1 u^5 (1 - u^2)du$
=$\int_0^1 (u^5 - u^7) \;du$
=$\frac{u^6}{6} - \frac{u^8}{8}|^1_0$
=$1/24$ Yay

Exercise for this question (do it again but you MUST use a different substitution; $u = cos(x)$)
#todo.

### Example #3 
We can conveniently choose u to get rid of things that are a nuisance.
Evaluate $\int \sqrt{2 - x}dx$

Let u = 2 - x
du = -dx
-du = dx

=$\int \sqrt u (-du)$
=$\int -u^{1/2}du$
= $\frac{-u^{3/2}}{3/2} + C$
(then replace u with something equivalent to u in terms of x)


### Example #4 (i took a photo)
You can move constants around derivaties.
i.e. $du = 2x dx \implies \frac{du}{2} = x dx$

x^2 = u - 3
x^4 = (u-3)^2
So we are trying to write x in terms of u using yeye

We don't have to say "by algebra" but anything else u still do ye.

make sure to sub x back into the u sub.
