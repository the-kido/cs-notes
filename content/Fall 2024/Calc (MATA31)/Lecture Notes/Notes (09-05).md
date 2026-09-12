### Misc
Proofs are 1.5 in the tb
Proficiency assignment released (figure out how to hand it in)
- There are many attempts
We start with the question
$$\frac{2-x}{2+x}\geq 1$$
They use the sign table method (They call it the split point technique)
- sign table is good
- number line is good
	- You make the line, find when the inequality equals 0, and then plug in intermediate points in the function (that is quite tedious tho; might be safer?)
- Computation isn't as formal as proofs; this is computation/evaluation
$-2 < x \leq 0$ is not a set! The solution asks for a set
\
Solution is (-2, 0] or $\set{x\in\mathbb{R} : -2 < x \leq 0}$

> Unlearn this:
> $x\in(-2, 0]$ is NOT a set! Don't include the $x\in$ part

To have an inverse, it must pass the inverse line test

arcsin is used since sin must be restricted to be inversed. $\sin^{-1}$ doesn't really make sense 

### The $tan(sin^{-1}x)$ question
- Try to replace $sin^{-1}x$ with something like theta $\theta$
- Now $\tan(\sin^{-1}x) = tan(\theta)$
	- Since theta is passed into tan, theta is restricted to being between $(-\frac{\pi}{2}, \frac{\pi}{2})$
	- Likewise, x is restricted to being between $[-1, 1]$
- $\sin^{-1}x = \theta$ can be rewritten as $sin\ \theta = x$
- We can use sin x = ops / hyp, where x is the ops and 1 is the hyp.
	- $sin\theta = \frac{ops}{hyp} = x / 1$
- We can then draw the triangle and find that the missing side lying on the x axis is $\sqrt{1 - x^2}$
- Conveniently, \tan(\sin^-1x) also represents $\tan\theta$. Since we have the relation for $\sin\theta$, we can apply that to $\tan\theta$
- $\tan\theta=\frac{x}{\pm \sqrt{1 - x^2}}$
- The answer is positive sqrt because the range of theta is $\theta\in(-\pi/2, \pi/2)$ since $\theta = \sin x$. By drawing the two possible triangles you see that it is $+\sqrt{1 - x^2}$
- ![[Pasted image 20241029173607.png|600]]


I get it now, but I would like to know what ways I can get to the final answer. Try rewriting it again for practice.


### Find (natural) domain on $f(x) = \sin^{-1}(2x-1) + tan^{-1}(3x-1) + \ln(3x-1)$
- You can represent the domain of a function with $dom(f)$
- \-=+/Easiest way to solve is to find each set and then intersect them all
	- This is because each function depends on x. X must satisfy all of them.
	
- Be very careful when simplifying because when you use functions with a limited domain (like in q3 of the assignment) in a solution, then domain will change!
- $\sqrt{x^2}$ is always positive for the same reason $\sqrt{9}$ is. 
	- So the root of an ALWAYS positive number will always be an absolute value

Look over the log situation with the log laws. Very interesting in deed. 

##### Composed functions
- Write restrictions to variables when you change the equation to carry previous restrictions. This applies to any question, really.

let $f(x) = x^2$ and $g(x) = \sqrt{x}$

> $(f\circ g)(x) = f(\sqrt{x})$  <-- x must be > 0
>  $=\sqrt{x}^2$                    <-- x must still be > 0
>  $=x$                         <-- x must **still** be > 0

Therefore, $(f\circ g)(x) = x, x\geq0$

> $(g\circ f)(x) = g(x^2)$     <-- $x\in\mathbb{R}$
> $=  \sqrt {x^2}$                      <-- $x\in\mathbb{R}$ still, since $x^2$ will always be positive
> $=|x|$                         < The value of x will always be positive because of the \^2

 

