> TL;DR: FTOC II shows that $F(x) = \int_a^x f'(t)\;dt$ implies $F'(x) = f(x)$; it lets us take the derivative of anti-derivatives to get back the original function
### Area Accumulation Functions
>[!defn]
The function who gives the area under a curve is describe as 
$$A(x) = \int_a^x f(t)\;dx$$
> For each $x \in [a,b]$ where f is continuous, A(x) will find the area underneath the curve on $[a, x]$. 
> 
> Observe the variable we pass into the area accumulation function isn't inside of $f$, but rather the upper integration limit
> 
> >I don't know if I am recalling this correctly but $t$ is still dependent on $x$ (and also $a$) as changing those will change what values $t$ will assume at the end
> 
> And yes, you can define functions with integrals inside of them (like with derivatives!)
> 
> 
> >[!explanation] Think of this as any other function ($b^x$, $\log$, $\operatorname {floor}$, etc.) but it just so happens to have similar syntax too that of integrals (and for good reason!)

>[!example]  Let $F(x) = \int_a^x t\; dx$
>Use geometry to evaluate these: F(3) and F(5)
>Then F(3) = 9/2 and F(5) = ?
>#todo

## MVT for integrals
In chapter 4.6 pg. 379.

>[!def] MVT for (definite) Integrals
>Let $a, b \in \mathbb R, a < b$.
>IF $f$ is cont on $[a, b]$
>THEN $$\exists c \in [a, b]  \text{ s.t. }  \int_a^b f(x)\;dx = f(c)(b-a)$$
>
>>[!explanation]
>>The $f(c)$ represents the average height of $f$ from $a$ to $b$. $b-a$ is the distance (therefore the length).
>>
>>- The left side, $\int_a^b f(x)\;dx$ is the actual area between $[a,b]$. 
>>- The right side finds an *equivalent area* (with the height of $f(c)$ and width of $\operatorname{length}([a, b])$) 
>>
>>The theorem just concludes that there will always be that point $c$ between $[a,b]$ where the equivalence occurs!
>![[Pasted image 20250211084742.png]]
>
>#todo proof: exercise)
 
## FTOC II

Essentially, FTOC II relates anti-derivatives with the Area Accumulation Function, in that some function $F(x)$ (the area function) also happens to be the anti-derivative of $f(x)$ (the function we're getting the area of).

>[!thm] FTOC part 2! (pg. 390)
>Let $a,b \in \mathbb R, a < b$.
>IF 
>1. $f$ is continuous on $[a,b]$, and 
>2. We define $F(x) = \int_a^x f(t)\;dt, \forall x \in [a, b]$ (an area accumulation function)
>
>THEN
>1. F is cont on $[a,b]$, and
>2. F is diff on $(a,b)$, (idrk why) and
>3. $F'(x) = f(x) \forall x \in [a, b]$ ("one-sided derivative"?)
>
>In my way, if there is an area accumulation function $F$ and the integrand $f$  is continuous on $[a,b]$, then $F'(x) = f(x)$ for all x in $[a,b]$
>
>
>3 can also be expressed as: F is an anti-derivative of f on $[a,b]$ s.t.
>$\dfrac{d}{dx}(\int_a^xf(t) dx) = f(x)$ on $[a,b]$
#todo a bit unclear

>[!purpose]
>1. It guarantees we always find an anti-derivative on continuous functions.
>	- Basically "Every function has an antiderivative, and it is $F(x) = \int_a^x f(t)dx$, where $x \in [a,b]$"
>
>1. FTOC II is really good for differentiating integrals.
>i.e. if you have an expression $\frac{d}{dx} \int_4^x f(t) dt$ then it would equal $f(x)$ for $[a,b]$
>
>>[!example]
> > Let $H(x) = \int_x^4 e^{t^2+1}dt$
> > We want to find H'(x).
> > So we will use FTOC #2.
> > Let $f(t) = e^{t^2 + 1}$ is a composition of the polynomial $x^2 + 1$ (which is cont. on R) and $e^x$ which is also cont. on R. Therefore the composition is cont. on R. Specifically, f(x) is cont. on $[4, x] \subseteq \mathbb R$
> > 
> > Let $F(x) = \int_4^x f(t)dx$
> > >[!note] If $f(x)$ has a numerical bound, then use that as the bottom 
> > 
> > Then $H'(x) = \frac{d}{dx}(\int_x^4 f(t)dt)$
> > = $\frac{d}{dx}( -\int_4^xf(t)dx)$
> > = $-\frac{d}{dx} \int_4^x f(t) dt$, by diff rules.
> > = $-f(x)$ by FTOC II since F'(\*) = f(\*)
> > = $-e^{x^2+1}$

### Composition of area accumulation function

>(i made this example)
>How would you evaluate $\frac{d}{dx} \int_a^{u(x)}f(t)\;dt$ ?
>Well consider that we can let $F(x) = \int_a^{x}f(t)\;dt$ be an area accumulation function. So $F(u(x)) = \int_a^{u(x)}f(t)\;dt$ 
>Then we differentiate both sides:
>$\frac{d}{dx} F(u(x)) = \frac{d}{dx}\int_a^{u(x)}f(t)\;dx$
>$\implies F'(u(x))\cdot u'(x) = \frac{d}{dx}\int_a^{u(x)}f(t)\;dx$
>$\implies f(u(x))\cdot u'(x) = \frac{d}{dx}\int_a^{u(x)}f(t)\;dx$
>
>and boom. there ya go. that is the answer 
> #beautify  

## The hardest FTOC II question you could probably get
 She gave $g(x) = \int_{sin(x)}^{cos(x)} tan^{-1}(t) dt$
we wanna find $g'(x)$
soln.
f(t) is an inverse trig function and is continuous on R.
In particular, f is cont "without loss of generality" (Wlog) $[\sin x, \cos x] \subset \mathbb R$
- There are two situations for the interval (cuz sinx can be less or more than cosx).
- So we use WLOG because it would be annoying to do two cases. it's practically the same thing. it's generally the same thing.
define $F(x) = \int^x_c f(t) dt$
- c is some constant.
i cant remember why but we're tryna make g'(x) look like F(x) oh nvm i see.
To get rid of the sin and cos of g'(x), we use union
(we are assuming c is between sinx and cosx).
- $g'(x) d/dx \int_{sinx}^{cosx} f(t)dt = = d/dx \int_{sinx}^c  + \int_c^{cosx}$
	- by union property w/ c between sinx and cosx.
= $d/dx(   -\int_{c}^{sinx}f(t)dt + \int_{c}^{cosx} f(t) dt)$ by int. prop.
(but the upper integration limits are not x; they are sin and cos x!)
- if the only thing that differs between F(x) and g'(x) is that x is a function, we can make a *composition*
- $d/dx (-F(sinx) + F(cosx))$ by hy- (i didn't finish typing oops.)
	- wow

now we just differentiate.
= $-F'(sinx)*cosx + F'(cosx)*-sinx$
= -F'(sinx)cosx - F'(cosx)sinx
= -f(sinx)cosx - f(cosx)sinx (by the FTOC #2)
= -cos(x)tan^{-1}(sinx) - sinx tan^{-1}(cosx) by def'n of f.

tl;dr. FTOC is really good for differentiating integrals.

> Prettifying the above solution:

Given $g(x) = \int_{sin(x)}^{cos(x)} tan^{-1}(t) dt$ find $g'(x)$.
Let $f(x) = \arctan(x)$. Note $f(x)$ is cont on $[\sin(x), \cos(x)]\subset \mathbb R$ WLOG inherently.  
Let $F(x) = \int_c^x f(t)\;dt$ be an area accumulation function of $f$
Then 
$g'(x) = \frac {d}{dx}\int_{\sin(x)}^{\cos(x)} f(t)\;dt$
$=\frac d {dx} (-\int_{c}^{\sin(x)} f(t)\;dt + \int_c^{\cos(x)} f(t)\;dt)$ by union interval property for some $c \in (\sin(x), \cos(x))$ and def'n int props
$\frac d {dx} (-F(\sin(x)) + F(\cos(x)))$ by FTOC II since $f(t)$ is cont on $[c, \cos(x)]\subset \mathbb R$ and on $[\sin(x), c] \subset \mathbb R$
$=\dots$ it's just differentiating at this point. Easy!

I did it again in [[02-03]] why...


[[Proving FTOC 2]]