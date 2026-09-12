>[!note] What is a function?
> A function $f$, with domain $D$, is a rule which assigns to each element $x ∈ D$, a single real number which we denote by $f(x)$
> You can determine if a graph is a function via the Vertical Line Test. If there a vertical line such that it intersects with the graph 2 or more times, then the graph is NOT a function

> The domain is the set of values allowed to be inputted
> The range is the set of values that could be attained 

### Common places where domain is restricted 
- Division 
	- You cannot divide by 0
	- When dividing by an expression with a variable can cause holes / asymptotes. 
- Square root (You cannot do $\sqrt{-1}$). The argument can only be >= 0
- Logarithms 
	- The argument must be greater than 0
- Trig functions 
	- Inverse trig functions / tan

## Power functions 
$f(x) = a^x$ is an exponential function where $a \in \mathbb{Z}$
if a > 1, then it is increasing. If 0 < a < 1, it is decreasing. a cannot be $\leq 0$

## Rational Functions
- A function which can be expressed as a ratio - numerator over denominator. This means all polynomial functions are rational functions, since $\frac{x^2 + 2x - 1}{1}$ is rational.  
## Polynomial functions
Are in the form $a_nx^n + a_{n-1}x^{n-1}...a_{1}x^{1} + a_{0}x^{0}$
- This includes linear functions, quadratic functions, cubic, even exponential functions (when the exponent is a positive integer)
The exponent of each root cannot be negative. This means power functions are not polynomials since a power function can have a negative exponent. 
### Quadratic expressions
- In the form ax^2 + bx + c. ykykyk
- They are <span class="emphasis">irreducible</span> if it cannot be factored with a real-number coefficient (that includes things like $x-2$ for instance)
	- If it is irreducible, it cannot be written in the form $a(x-r_1)(x-r_2)$
	- You can be sure a quadratic is irreducible via the discriminant $b^2 -4ac$. If it is negative, then $\sqrt{b^2 -4ac}$ will not exist in the quadratic formula, so no solutions can be had! No solutions = no factors.

## Exponential Functions
In the form $x^a$ with nothing else fancy. If a > 0, then it's increasing. if a < 0 then it's decreasing. easy easy.
# One-to-one functions
 A one-to-one function has, for each value of y, 1 value of x.
 These are proven with the horizontal line test OR by showing that f(a) = f(b) where $a \neq b$. 
 $x^2$ is *not* one-to-one since $f(2) = f(-2)$
These, when inversed, will still be functions.
# Functional operations
There is another note specifically for [[Function Operations (like Composition)]]
- $(f+g)(x) = f(x) + g(x)$
- $(af)(x) = af(x)$ where $a \in \mathbb{R}$
- $(f-g)(x) = f(x) - g(x)$ is defined as a combination of both (f+g)(x) and (af)(x) rules
- 

# Cards #calc-1

When is an exponential function increasing, decreasing, and non-existent?
?
if $b^x$ is an exponential function, then
b > 1 --> increasing
0 < b < 1 --> decreasing
b $\leq$ 0 --> Non-existent
<!--SR:!2024-10-07,3,250--> 

What is the form of a polynomial function
?
Check [[Fall 2024/Calc (MATA31)/1️⃣ Pre Calc (Week 0)/Functions|Functions]]
<!--SR:!2024-10-07,3,250-->

When can a domain for a function be restricted? Or, what operations could you do that would make an equation *not* equal since the domain is restricted in some way? (This is important for proofs!)
?
- When dividing by an expression with a variable
- Dividing by 0
- Square rooting
- Logging
- Trig-functioning
<!--SR:!2024-10-07,3,250-->

How do you know if a function is a function via visuals? How do you know if it's 1-to-1?
?
Function? Vertical line test.
1-to-1? Horizontal line test.
<!--SR:!2024-10-08,4,270-->


Point $(a,b)$ is on the graph $y = f(x)$. If $(4,2)$ is on the graph $y = f(x-3)$,$ then what was $a$ and $b$?
?
f(x-3) indicates f(x) was shifted to the right by 3 units. So, to reverse that, we go 3 units to the left of 4. That would mean (4,2) for f(x-3) would be (1,2) for f(x)


# Cards #calc-1 
How would you sketch $y = |\sqrt{ x+2 } - 1| - 1$?
?
Sketch each transformation separately, starting from x!
- sqrt x
- sqrt {x + 2}
- sqrt {x+2} - 1
- |sqrt{x+2} - 1|
- |sqrt{x+2} -1| - 1
That would give it to you.

