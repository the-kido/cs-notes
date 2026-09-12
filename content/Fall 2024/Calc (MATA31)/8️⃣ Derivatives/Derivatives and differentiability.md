### Definition of the derivative
> Def'n: The derivative of a function $f$ is the function $f'$ defined by $f'(x) = \lim \limits_{h\to 0} \frac{f(x+h) - f(x)}{h}$ with domain where limit exists.
> 
> Swap 'x' for a number 'a' to get the derivative at a specific point.
> Or use the derivative function and plug in x = a like $\frac{df}{dx}\Bigr|_{\substack{x=a}}$

### Def'n of tangent line
> The tangent line to the graph $y = f(x)$ at $x = a$ is the line that passes through the point $(a, f(a))$ with the slope $m = f'(a)$

If a function is left / right differentiable, then the one-sided derivative exists (like in the case of a jump or cusp)
> The left or right derivative of a function f at a point $x = a$ are:
> $f'_-(a) = \lim \limits_{h \to 0^-} \frac{f(a+h) - f(h)}{f(a)}$
> and
> $f'_+(a) = \lim \limits_{h \to 0^+} \frac{f(a+h) - f(h)}{f(a)}$
> 
### Def of differentiable at point
> A function is differentiable at x = c if $f'(c)$ exists (as a limit):
> $\lim \limits_{x \to a} \frac{f(x) - f(a)}{x - a}$
> 
### Def'n of differentiable on an interval
> f is differentiable on an interval I if it is differentiable at every *interior* point of I, right differentiable at any closed left endpoint, and left differentiable at any closed right endpoint

>[!note] We specify "any" left or right endpoint since we could have an interval like $(\infty, 5)\cup (-5, 10]$
>This is similar to the def'n of continuous on an interval as well
##### A function is not differentiable when we have
1. Vertical tangent 
	1.   $x^\frac{1}{3}$
2. Corner point
	1. $|x|$
3. Cusps
	1. $x^\frac{2}{3}$
4. [[Discontinuities]]
![[Pasted image 20241022150402.png]]

#### Thm: If f is differentiable at x = c, then f is continuous at x = c
> Assume f is differentiable at c.
> Then $\lim \limits_{x\to c} \frac{f(x) - f(c)}{x - c}$ exists (by def'n of differentiable)
> WTS f is continuous at x = c; that is $\lim \limits_{x\to c} f(x) = f(c)$
>>Side tracking: To guide us, we can show that $\lim \limits_{x\to c} (f(x) - f(c) + f(c)) = f(c)$ since we can now write it as $\lim f'(x) + f(c) = f(c)$. All we need to do now is show that f'(x) = 0!
>Consider $\lim \limits_{x\to c} (f(x) - f(c))$
>Then $\lim \limits_{x\to c} (f(x) - f(c))$ = $\lim \limits_{x\to c} (f(x) - f(c) \cdot \frac{x-c}{x-c})$ by cancelation theorem.  ✨ 
>= $\lim \limits_{x\to c} \frac{(f(x) - f(c)}{x-c} \cdot \frac{x-c}{1})$
>= $\lim \limits_{x\to c} \frac{f(x) - f(c)}{x-c} \cdot \lim \limits_{x\to c} (x-c)$
>=$f'(x) \cdot 0$ (by continuity)
>= 0
>
>Then
>$\lim \limits_{x\to c} f(x) = \lim \limits_{x\to c} (f(x) - f(c) + f(c))$
>$= \lim \limits_{x\to c} (f(x) - f(c)) + \lim \limits_{x\to c} f(c)$ (limit rules; individual limits exist)
>$=\lim \limits_{x\to c} f(c)$ 
> = f(c) 

# Cards #calc-8 
For the function f(x) = $|x|^3$, it is known that f'(0) DNE. Does that mean that f(x) is not differentiable everywhere?
?
The definition of derivative states that f is differentiable at a point only if the limit at that point exists. Notably, the limit as x --> 0 for $|x|^3$ does exist. It's easier if you rewrite it as $|x|^2 \cdot x$




#todo Is |x^2| and x^2 equivalent?
- Relevant to my term test question.
- I think I am a bit dumb!

Solve the below question ![[Pasted image 20241215101415.png]]
?
Yeah the solution is also there. That is pretty funny. Ha. Ha.

Solve this question ![[Pasted image 20241215101907.png]]Hint: When getting the derivative, what can we replace x with?
?
![[Pasted image 20241215101930.png]]






answers:
1. e
2. e
3. e
4. d
5. c
6. All except 5!?
7. None except for 5?

a. 1
b. 4 times (one for each item)
c. 2 + 2\*4 (look at code)
d. i ?
e. 2 + i * 2 
f. b
g. 

