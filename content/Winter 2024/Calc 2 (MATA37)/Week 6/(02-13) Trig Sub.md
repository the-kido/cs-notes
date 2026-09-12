Chapter 5.6

>Used to rewrite integrands in the form $a^2 + u^2$, $a^22 - u^2$, and $u^2 - a^2$ where $a \in R^2$ and $u = polynomial$ 

There are 3 trig subs
1. $a^2 + u^2$ $\implies$$u = atan(\theta)$ where $\theta \in (-\pi/2, \pi/2)$
2. $a^2 - u^2$ $\implies$ $u = asin\theta$ where $\theta \in [-\pi/2, \pi/2]$
3. $u^2 - a^2$ $\implies$ $u = a\sec\theta$ where $\theta\in[0, \pi/2]$ if $u \geq a$ or $\theta\in[\pi/ 2, \pi]$ if $u\leq -a$ 

> It turns sums and differences into products!

It is very long

Can we apply trig sum? If so why:
1. $\int_0^\pi \frac{3x+1}{\sqrt{x^2+9}}\;dx$
	1. In the square root we see the form $u^2 + a^2$. 
	2. Let $x = 3\tan\theta$ for $\theta \in (-\pi/2, \pi/2)$
2. $\int \frac{(x+3)(4x^2 = 16)^\frac{5}{3}}{\sqrt{x}} \; dx$ where x \geq 4
	1. We see u^2 - a^2 where u = 2x and a = 4
	2. Let $2x = 4\sec\theta$ where $\theta \in [0, \pi/2]$ (by the restriction given in the question!)


When to use:
1. notice the form for trig sub and substitute
2. clean up your integrand
3. evaluate 

seems obvoius tho
##### A big example 
Compute $\int \frac{\sqrt{x^2 - 9}}{x^2}\;dx, x\geq 3$
- We see the form u^2 - a^2
- Let $x = 3\sec\theta, \theta \in [0, \pi/2]$
- $dx = 3\sec\theta\tan\theta d\theta$
- Note $x^2 - 9 = (3\sec(\theta)^2 - 9)$
	- $= 3^2 (\sec^2\theta - 1)$
	- $3^2\tan^2(\theta)$ WOw
- Now we sub that back to clean things up
- $\int \frac{\sqrt((3\tan(\theta))^2)}{3\sec^2\theta}$
	- We use what we solved for before 
> Recall that $|\cdot| = \sqrt\cdot^2$
> So $\sqrt{(3\tan\theta)^2}$ = $|3\tan\theta| = $3|\tan\theta|$ = $3\tan\theta$ as $\theta \in [0, \pi/2]$ so $\tan\theta \geq 0$
- $=\frac{1}{3^2} \int \frac{3\tan\theta \tan \theta}{\sec^2(\theta)} \; d \theta$
- $=\frac{1}{3} \int \frac{\tan\theta \tan \theta}{\sec^2(\theta)} \; d \theta$
- $= \frac{1}{3} \int sin^2\theta \; d\theta$ (with lots of trig stuff)
- $=\frac{1}{3}\int \frac{1-cos(2\theta)}{2}$
- $=\frac{1}{6}\int 1-cos(2\theta)$
- $=\frac{1}{6} (\theta+sin(2\theta)\cdot\frac{1}{2}) + C$
- (Now we need to get back our x answer cuz recall, $x = 3\sec\theta$)
	- Isolating for $\theta$ we get $\operatorname{arcsec} (\frac{x}{3}) = \theta$
	- But that would be ugly.
	- Now we're talking about right angled triangles.
	- For $\frac{x}{3} = \sec\theta$, remember $\sec\theta = \frac{\text{adj}}{\text{hyp}}$
	- (I took a photo of it too)
- $=\frac{1}{6} (\sec^{-1}(\frac{x}{3})+\frac{\sqrt{x^2 + 9}}{x} \cdot\frac{3}{x}) + C$
	- Is the final answer. 


