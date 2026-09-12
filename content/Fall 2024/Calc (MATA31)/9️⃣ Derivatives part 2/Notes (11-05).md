	### Implicit differentiation

Explicit = have y = "stuff with x". Is defo a function. 
Implicit: have x and y scattered on both sides. May not be a function.
- x^2 + y^2 = 1 is NOT a function, for instance.
- Ensure that the Y value you pick is right when plugging into the derivative of a relation (not a function)
- in Leibniz notation: 
![[Pasted image 20241111220338.png]]
<span class="emphasis">Locally</span>: near a point. Windowing a relation may make it look like a function 
![[Pasted image 20241111220632.png]]
- See, this passes the vertical line test! 

>[!example] Find slope of tangent line to the circle $x^2  + y^2 = 1$ at the point $(\frac{1}{\sqrt{ 2 }}, \frac{1}{\sqrt{ 2 }})$
> Looking at the locality of the point, the formula for the upper half is simply $y = \sqrt{1-x^2}$. The bottom half is $-\sqrt{ 1 -x^2 }$ fyi.
> Treat y like a function and take the derivative.
>
>The above stuff was non-sense useless. He just gets the derivative $\dfrac{dy}{dx} = \dfrac{-x}{y}$ and plugs in the points to get -1 easy.....
>
>>[!example] B-but what if the point is $(1,0)$!? What's the slope!
>>Try plugging it into the derivative formula. I dare you. 
>>You get vertical tangents



## Inverse function derivatives
Inverse function theorem: The formula to get the derivative of an inverse function.
>[!example] Thm
>Let f be a function defined on an interval I.
><span class="emphasis">If</span> f is invertible, f is differentiable (on interval $I$), and f'(x) is non-zero.
><span class="emphasis">then</span> $f^{-1}$ is differentiable *and*  $(f^{-1})'(x) = \dfrac{1}{f'(f^{-1}(x))}$
>

#### Proving just the formula for inverse function theorem
(in this case, we pretend $f^{-1}$ has already been proven to be differentiable)
- We are assuming the 3 hypotheses already.
	- $f, f^{-1}$ are inverse functions
	- $f ,f^{-1}$ are differentiable
	- $f'(x) \neq 0$ for $x \in I$
- Look at [[Inverse Functions]] and the cancelation rule.
	- $f(f^{-1}(x)) = x$
	- Take derivative
	- $f'(f^{-1}(x)) \cdot (f^{-1})'(x) = 1$ (by chain rule since f and f^-1 are diff)
	- $(f^{-1})'(x) = \dfrac{1}{f'(f^{-1}(x))}$ (since f'(x) != 0)


#todo problem 2.8 pset. yeah it was long ago.
#todo go over that last question in 9.a

# Cards #calc-9
Pretend we want to get $[f^{-1}]'(1)$  for $f(x) = x^5 + 2x^3 + 7x + 1$. We know it's invertible but finding the inverse will be VERY painful! How do we get the answer?
?
Use the inverse function derivative theorem!
1. We know f(x) is invertible
2. We know f(x) is differentiable on R since it's a polynomial
Also, f^-1(1) = 0 (we can find this in many ways; plugging in points, using bisection method, etc.)
And, $f'(x) = 5x^4 + 6x^2 + 7$. So, $f'(0) = 7$.
So, 3. f'(1) is non-zero. Yay. 
So, we can apply the inverse function derivative theorem to get the value of $[f^{-1}]'(1) = \frac{1}{f'(f^{-1}(1))} = 1/7$. 

Solve this monstrosity ![[Pasted image 20241215115032.png]]
?
First, note that m = g(x) - 1 / x - 3. 
But, the slope of g(x) is also g'(x), which is $m = g'(x) = f^{-1}(x) = 1 / f'(f^{-1}(x))$ = 1 / f'(g(x)) = 1 / 3g(x)^2 + 2

Now we have $\frac{g(x) - 1}{x - 3} = \frac{1}{3g(x)^2 + 2}$. To get rid of x, note that $g(x) = f^{-1}(x) = y \implies x = f(y) = y^3 + 2y + 1$

So, $\frac{y - 1}{(y^3 + 2b + 1) - 3} = \frac{1}{3y^2 + 2} \implies 3y^3 - 3y^2 + 2y - 2 = y^3 + 2y - 2 \implies y = 0 \text{ or } y = 3/2$ 
When y = 0 we have m = 1/2 and when y = 3/2 we have m = 4/35
#todo this question sucks. Why did he think to use a, b instead of x,y!?
![[Pasted image 20241215120725.png]]


