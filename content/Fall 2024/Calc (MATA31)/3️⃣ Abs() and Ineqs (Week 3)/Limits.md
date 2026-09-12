"How does a function behave at 0?" f(0) = 1
"How does a function behave near 0?" Limits!
- Limits are behavior of f(x) for x close to c
#card-this

If a limit DNE, then it could
- infinity
- negative infinity
- one-sided limits
- oscillate (sin(1/x)) 
	- This doesn't apply if the oscillation slows down

# Important limit theorem
> A limit = L if and only if its left and right limits are equal to L too.

### Limit of a function composition 
$f(x) = x^2$
$\lim_{x\to 2} f(f(x))$ 
- This is easily solvable since x^2 is continuous, so you simply plug in x into f(f(x)) and get 16.

But what about piecewise!? Let's try to solve $\lim \limits_{  x \to 1} f(g(x))$ via the graphs below
1. We first see how g(x) is approached from the left and right of 1.
	1. For the LS, G(x) is returning numbers going from 3 to 2 `(2.5, 2.1, 2.01. etc)`. Now, plugging 3 to 2 into f(x) gets us $f(3\to2) = 3$ (informal notation of course)
	2. For the RS, G(x) returns #'s going from 2 to 1. $f(2\to1)$ is also 3, so the answer is `3`
![[Pasted image 20240929094215.png]]
 
>[!note] If the x value approaches a plateau that is constant, then plug that value into the parent function literally (no limits required, cuz continuous)

>[!note] if $f(x)$ is continuous, use $f(\lim \limits_{x\to 1}g(x))$

For more reference, go [here](https://q.utoronto.ca/courses/362238/files/33326035?wrap=1)
### Cancelation Theorem
> $\lim \limits_{x\to c} \frac{f(x)}{f(x)} = \lim \limits_{x\to c} 1 = 1$
- I cannot remember when I learned this :)
>[!example]
$\lim \limits_{x \to c} \frac{h(2x + h)}{h} = \lim \limits_{x \to c} (2x + h)$ by cancelation theorem  

# Cards #calc-4 

Given $x \in (0, 2)$, find the smallest epsilon for which we can guarantee that $x^2 -4 \in (-3 -\epsilon, -3 + \epsilon)$
?
0 < x < 2
0 < x^2 < 4
$-4 < x^2 - 4 < 0$

Also we have $-3 - \epsilon < x^2 - 4 < -3 + \epsilon$
Now we have bounds on $x^2 - 4$ nice. Good. Yippee.
We can then take the lower bounds and upper bounds for x^2 - 4, and see what values delta could be to satisfy both inequalities 
$-3 - \epsilon \leq -4$ AND $-3 + \epsilon \geq 0$
e >= 1 and e >= 3 (e >=3 dominates)
So the smallest epsilon is indeed 3 (graph it if you want proof)

 