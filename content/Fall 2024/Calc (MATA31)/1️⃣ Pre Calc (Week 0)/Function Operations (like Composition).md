# Domain of a function composition
$D_{f\circ g} = \set{x \in D_f\ |\ g(x) \in D_f}$

Easier way to find $D_{f\circ g}$
Get:
- $D_g$ (domain of input function)
- Domain of $f\circ g$ (Like, input g into f, find domain of the literal function you get)
- Get the intersection of above 

# Operations
There is functional addition/subtraction, multiplication, and composition

>[!example]
>- Functional multiplication
>   -  $f \cdot g = fg$
>- Functional addition / subtraction
>   - $(f + g)(h) = f(h) + g(h)$
>- Functional division
>	- $\left( \frac{f}{g} \right)(h) = \frac{f(h)}{g(h)}, g(h) \neq 0$
>
>Examples using a function $f:\mathbb{R} \to \mathbb{R}$
>$f(x) \cdot g(x) = (fg)(x)$
>


# Cards #calc-1
How do you find the domain of $D_{f\circ g}$?
?
Mnemonic: Get the inside, get the outside and inside, and merge those with an intersection.
Specifically:
1. Get the domain of the input function ($D_g$)
2. Find the domain of $f\circ g$ (input g into f; find the domain of what you get)
3. Get the intersection of both of them.

How do you find the domain of $(f+g)(x)$, $(f\cdot g)(x)$, or even $\left( \frac{f}{g} \right)(x)$?
?
It is simply the intersection between the unions of f and g. For f/g, we must also ensure that g(x) is not 0.
So, they would look like this: $\{ x \in D_{f}  \cap D_{g} \}$ (include $: g(x) \neq 0$ for division)

Write out all 4 operations for functions (addition, subtraction, multiplication, and division). 
?
It should be obvious, but reference [[Function Operations (like Composition)]]


Is it true that $f(x) + g(x) - h(x) = (f+g-h)(x)$ ?
?
Yes, as this is just a rewrite after applying function addition and subtraction. 


What is the domain of $f(g(x))$ if $f(x) = x^2$ and $g(x) = \sqrt{x}$
1. $D_g = \set{x \in \mathbb{R} | x \geq 0}$
	1. Let $h(x) = \sqrt{ x}^2 = x$
2. $D_h = \set{x \in \mathbb{R}}$
Thus, $D_{f\circ g} = \set{x \in \mathbb{R} | x \geq 0}$
