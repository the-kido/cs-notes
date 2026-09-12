Thm: if f is differentiable at a, then f is continuous at a.
"diff $\implies$ cont" 
##### Called diff $\implies$ cont theorem
	
Consider f(x)
Then f is not continuous at 0 but not differentiable at 0 so it's not bi-directional.
So "cont" does not imply "diff"

### Derivative Rules
Most of them are shortcuts.
### $(c)' = 0$
Proof is in slides. 
Note that it uses cancellation theorem (the function 0/h is NOT the same as 0 since h = 0 is not defined. However, for limits, the point it's at doesn't matter.
### $(cx)' = c$

### $(x^n)' = nx^{n-1}$

### $(\sin x)' = \cos x$
Proof:
Use the $sin(x+h)$ identity and the remarkable limit that $\lim \limits_{x\to 0} \sin x = 0$
### $(\cos x)' = -\sin x)$

### $(\tan x)' = \sec^2 x)$

### $(cf)' = cf$ 

### $(f\pm g)' = f'\pm g'$
Thin k of $\lim_{ } (f+g) = \lim f + \lim g$, which is only true when f and g are continuous.

### Product rule: $(f\cdot g)' = f' \cdot g + f \cdot g'$
Thm:
> Define h = f\*g
> If f and g are diff at a, then h is diff at a, and further: $h'(a) = f'(a) \cdot g(a) + f(a) \cdot g'(a)$
- Proof. Assume f, g are diff at a.
- ~~ def'n of diff~~
- ~~ WTS h diff~~
- Then
- $h'(a) = \lim \limits_{x \to a} \frac{h(x) - h(a)}{x - a}$
- $h'(a) = \lim \limits_{x \to a} \frac{f(x)g(x) - f(a)g(a)}{x - a}$
- $h'(a) = \lim \limits_{x \to a} \frac{f(x)g(x) + f(a)g(x) - f(a)g(x) - f(a)g(a)}{x - a}$
- $h'(a) = \lim \limits_{x \to a} g(x) \cdot \frac{f(x) - f(a)}{x - a} + f(a) \cdot \frac{g(x) - g(a)}{x-a}$
- $h'(a) = \lim \limits_{x \to a} \frac{f(x) - f(a)}{x-a} \cdot \lim \limits_{x \to a} g(x) + \lim \limits_{x \to a} f(a) \cdot \lim \limits_{x \to a} \frac{g(x) - g(a)}{x-a}$
	- This step uses limit rules (remember that for limit rules to work, every component must have a limit tho. Justifying the limit rule step is important)
	- $\lim \limits_{x \to a} \frac{f(x) - f(a)}{x-a}$ exists since f is diff at a
	- $\lim \limits_{x \to a} g(x)$ exists since g diff at a *so* g cont at a (by thm "diff" => cont)
	- $\lim \limits_{x \to a} f(a)$ exists by limit rule $\lim \limits_{x \to c} a = a$ 
	- $\lim \limits_{x \to a} \frac{g(x) - g(a)}{x-a}$ exists since g diff at a.
- $h'(a) = f'(a) \cdot g(a) + g'(a)\cdot f(a)$
##### Short-short cuts
- $(\sqrt{ x })' = \frac{1}{2 \sqrt{ x }}$
- $\left( \frac{1}{x} \right)' = \frac{-1}{x^2}$

##### possible important thing idk 
> If you have $f'(x^2)$, you would have to plug x^2 into the original function, and then find the derivative of *that*. I think chain rule might simplify that tho?

 
### Leibniz notation
It is a think. 
D represents a small number. It's similar to the slope formula.


What is the derivative of Optimus?
Optimus prime


1 eq solves 1 unknown
2 eqs solve 2 unknowns 
etc.
Is this true? Could be useful