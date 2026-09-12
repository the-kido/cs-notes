> If you can do questions related to these, you can do *anything*

### Transformations
Let $X$ follow some transformation and $Y = h(X)$ be a function $h$ of $X$ (as in, a transformation)


We want to find the distribution of $Y$ given the distribution of $X$!
How do we do this generally?
#### General approach
- Remember: A distribution is anything that lets you calculate probabilities given conditions  on some RV (for instance, $P(X \in B)$ is a distribution). 

Let $X$ be some RV with a known distribution $P(X \in B)$. Let $Y = h(X)$. 
- The probability of $P(Y \in A) = P(X \in h^{-1}[A])$
	- We know how to find probabilities of $X$ so this is useful
	- $h^{-1}[A] = \set{ x \in \mathbb R : h(x) \in A}$ is the inverse image
	- So $P(Y \in A) = P(h(X) \in A) = P(X \in h^{-1}(A))$


### 1. CDF Method
> Lets you find that $F_Y(y) = F_X(h^{-1}(y))$ so long as the transform is 1-to-1 (increasing or decreasing) and continuous

1. We know the CDF of $X$. We're trying to find the CDF of $Y$ (and therefore its distribution)
2. We know $F_Y(y) = P(Y \leq y)$. If we express this set of values, it's a half-line of the real line. That is, $\set{Y \leq y} = A = (-\infty, y]$ where $y \in \mathbb R$ 
3. In order to represent the real function $h(X)$ we use a cartesian space
	1. You can represent real function $h$ as a line of all coords that represent inputs and outputs. Like, $(x, y) \leftrightarrow (x, h(x))$
4. We want the probability of the set from $-\infty$ to $y$ 
5. We use the distribution of $X$ instead to represent the probability (since we have its distribution)
6. **Only if $h$ is one-to-one** (every input has a unique output and vice versa) **and continuous**, then the inverse image is also a half-line but w.r.t $X$ instead
	- "The inverse image of a half-line corresponds to a half-line in terms of $X$"
	1. $F_Y(y) = P(Y \leq y)$
	2. $=P(X \in h^{-1}(-\infty, y])$
	3. $=P(X \in (-\infty, h^{-1}(y)))$
	4. $= P(X \leq h^{-1}(y)) = F_X(h^{-1}(y))$

(for instance, if $h$ is strictly increasing, we can use this!)

- Idk why he mentioned this, but if you take a $y$ value, then its inverse (i.e. the value w.r.t. $X$) will be within $(-\infty, h^{-1}(y)]$ 
- Also, *if the function is increasing, then the inverse is increasing*

>[!example] Strictly decreasing also works!
>We start with the half-line of $Y$ i.e. $F_Y(y) = P(Y \leq y)$ which is $(-\infty, y]$
>The half-line for $x$ swaps, though. Now it's $[y, \infty)$ 
>![[CDF method.png]]
>But it's safer to always <span class="emphasis">derive</span> the CDF-method-$X$-half-line. Here's how:
>$F_Y(y) = P(Y \leq y) = P(h(X) \leq y)$ (remember, we must preserve inequalities. If we "apply" a decreasing function on both sides, we change the direction of the inequality)
>$= P(h^{-1}(h(X)) \geq h^{-1}(y))$ (applying $h^{-1}(x)$, which is decreasing since $h$ is decreasing)
>$=P(X \geq h^{-1}(y))$
>Which gives the half-line $[h^{-1}(y), \infty)$
>
>Then to keep deriving the CDF:
>$=1 - P(X< h^{-1}(y))$
>$=1-(P(X \leq h^{-1}(y)) - P(X = h^{-1}(y)))$ (we split the set) (for continuous RV's, the $x =$ thing is always $0$ because it's not an interval--that's like the first thing we learned about continuous RVs!)
>$=x - P(X \leq h^{-1}(y)) = 1 - F_X(h^{-1}(y))$
>>[!note] It's preferable to write the CDF of $Y$ in terms of CDFs of $X$

>[!example] Practice! $U \sim \text{Uniform}(0, 1)$. What is CDF of $X = -\log(1-U)$
>> In math, $\log$ usually means $\log_e$ unless stated otherwise. The graph gets flipped twice, so it's increasing in total. 
>> ![[Uniform CDF find question.png|400]]
>
>We can recall that $F_U(u) = \begin{cases} 0, & u < 0 \\\frac{u - 0}{1 = 0} = u, & u \in [0, 1] \\ 1, & u > 1\end{cases}$
>Now we want $F_X(x)$
>We know $x$ is continuous and 1-to-1 and strictly increasing. 
>
>$F_X(x) = P(X \leq x) = P(-\log(1-U) \leq x)$
>$=P(\log(1-U) \geq -x)$
>$=P(1-U \geq e^{-x})$
>$=P(U \leq 1 - e^{-x})$ (which means $X^{-1}(x) = 1 - e^{-x}$)
>$=F_U(1 - e^{-x})$
>$=1 - e^{-x}$ for $x \geq 0$ (because $1 - e^{-x}$ would be between $[0, 1]$) #todo how do you even think about that...
>(which is the CDF of $Exp(\lambda = 1)$) (bruh imagine remembering that too >_>)



### 2. PDF Method
- Used where there is a PDF but no closed-form CDF.

Assume $Y = h(X)$ where $h$ is **continuous** and **one-to-one** and PDF $f_X(x)$ is known but no closed-form CDF.
- There's a formula to get a PDF of $Y$ given the PDF of $X$:
$$f_Y(y) = \frac{f_X(h^{-1}(y))}{|h'(h^{-1}(y))|}$$
>[!explanation] How was that derived? It has to do with Calculus (change-of-variable formula)
>Remember $f_Y(y)$ gives the "line" that, when integrated, gives the area which is the probability.
>Let $\Delta y$ be pretty small so we can guess the area of the bell-curve (hypothetical PDF) by rectangle: $\Delta y \cdot f_Y(y)$. By the "general approach" we can get the probability by using the inverse of the transform, too: $\Delta x \cdot f_X(h^{-1}(x))$
>That's the top part. What about the bottom?
>
>Depending on the slope of the function (i.e., the derivative) we get a different proportion from $\Delta x$ and $\Delta y$ (note how they aren't the same)
>So it goes from $\Delta y \cdot f_Y(y) =\Delta x \cdot f_X(h^{-1}(x))$
>To
>$f_Y(y) = \frac{f_X(h^{-1}(x))}{\Delta y / \Delta x}$
>And it happens that $\Delta y / \Delta x = |h'(h^{-1}(y))|$
>

>[!Example] The same log example but we use PDF method instead to verify it!
>When it says X = -log(1-U) "follows" Exponential(1), that means X has the same distribution is Exp(1) which we can show via CDF or, in this case, PDF method!
>
>We have that $f_U(u) = \begin{cases} \frac{1}{1-0}, & u \in [0, 1] \\  0, &o/w \end{cases}$
>
>We then find that $h'(u) = \frac{1}{1-u}$ (skipping coz easy)
>and $h^{-1}(x)$ via $x = h(u)$ and solving:
>$x = -\log(1-u)$
>$e^{-x} = 1 - u$
>$1 - e^{-x} = u = h^{-1}(x)$
>
>Formula time!
>
>$f_Y(y) = \frac{f_U(h^{-1}(x)) }{|h'(h^{-1}(x)|}$
>$=\frac{1}{|\frac{1}{1 - h^{-1}(x)}|} = \frac{1}{\left|  \frac{1}{e^{-x}}\right|}$
>$=e^{-x}$
>Which is the PDF of $\text{Exp}(1)$

## Functions of Multiple RV's
![[Functions of Multiple RV's.png]]
- Notation:
	- $\begin{bmatrix}X \\ Y \end{bmatrix}$ is almost like the tuple $(X, Y)$ just written differently. 
		- Note that $(X,Y)$ is itself a random "vector" (made of two RVs) and $(X, Y)(z)$ is valid notation s.t. outcome $z$ is a point $(x, y)$ on the plane 
	- $Z = h(X, Y)$ means $h: \mathbb R^2 \to \mathbb R$. It takes a pair $(X, Y)$ and returns a single scalar RV $Z$ (i.e., the transformed version... is it still 2D? I guess not!)
	- The tuple $\begin{bmatrix} Z \\ W \end{bmatrix} = \begin{bmatrix} h_1(X, Y) \\ h_2(X, Y) \end{bmatrix} = h(X, Y)$ means $h: \mathbb R^2 \to \mathbb R^2$ which is "easier to understand". It transforms   

You can have a single transform that takes two RVs and returns the two transformed, or transform each RV individually (2 dimension to 2 dimension?)
- $\mathbb R^2$ to $\mathbb R^2$ is invertible so we start with that

### PDF Method
> Method for deriving PDF is general (you can apply it to every continuous/1-to-1 function)

- If your transform is differentiable 1-to-1 $(Z,W) = h(X, Y)$, the joint PDF of (Z, W) is given by:
![[PDF method for multiple RVs.png]]
- The first formula is very very similar to the univariate version!
- But in this multivariate case, the way we handle "distortion" is far different. We use the absolute "Jacobian" (multivariate extension of derivative)

>[!example] $X,Y$ i.i.d (independent; identically distributed) and $W = X$ and $Z = X + Y$
>What's the joint PDF of $W$ and $Z$? I.e., what is $f_{Z, W}(z, w)$?
>
>>We can use the $h: \mathbb R^2 \to \mathbb R^2$ version of this transformation for this question, since we output $W$ and $Z$ RV's ? #todo weak reasoning?
>
>We know that $\begin{bmatrix} X \\ Y \end{bmatrix} = h^{-1}(z, w) = \begin{bmatrix} W \\ W- Z \end{bmatrix}$ (We find what $X$ is in terms of $W,Z$ and what $Y$ is in terms of $W, Z$ to [[Finding Inverse of Functions|find the inverses]])
>We also find the Jacobian is constant $1$
>So, $f_{Z, W}(z, w) = \frac{f_{X, Y)(h^{-1}(z, w))}}{|J(\dots)}$ from the formula for this method
>$=f_{X, Y}(h^{-1}(z, w))$ cuz Jacobian is $1$
>$=f_{X, Y}(w, z -w)$ (which is what we found the inverse to be)
>$=\lambda^2e^{-\lambda\cdot z}$ where $w, z-w \geq 0$, which means $z \geq w  \geq 0$  and $0$ otherwise!
>
>Notice the support is triangular
>
>#todo I need to remember this notation
>#todo The diagram is a triangle which makes sense since $Z = X +Y$ and that doubles (think when $X=Y=1$, then $Z = 2$. Kay that makes sense). but why is the $W$ the "y" of the graph and the $Z$ the "x" of the graph??

>[!example] Just finding the *marginal* PDF of $Z = X + Y$ 
>$f_{Z, W}(z, w) = \begin{cases} \lambda^2 e^{-\lambda z}, & 0 \leq w \leq z \\ 0, & o/w \end{cases}$ which we found before. $W$ is an "auxiliary" variable required to find its inverse (you can't inverse R^2 to R^1 functions)
>
>We integrate out the variable we don't want (i.e., $W$).
>We want $f_Z(z) = \int_{-\infty}^\infty f_{Z, W}(z, w)\;dw$ 
>> #todo Note the integral is restricted to values where the middle is *not* 0. For us, $0 \leq w \leq z$ gives the interval of $w$ that is not $0$!
>
>$= \int_0^z \lambda^2 e^{-\lambda z}\;dw$
>$=\lambda^2 e^{-\lambda z} \cdot z$ 
>Which is the same as $\text{Gamma}(2, \lambda)$ 🥲
>But that makes sense since Gamma is the distribution of sums of Exp's!




### Misc.
#### Computer Simulations
- They generate uniform random values from $[0,1]$
- If we want shaped distributions, we need to transform them!

### 3. Convolution Method
Aids
![[Convolution.png]]
(Referencing Q8 of PSET 8)

Given $f_X(x)$ and $f_Y(y)$ which are independent and $Z = X +Y$, the PDF of $f_Z(z)$ is given with a fancy formula (will type later #todo).
However this formula is often split up into cases depending on the shape of the support!
- In the above example, it's square, which means we need a case for the bottom-left and top-left triangles considering that $0 < x < 2$ and $0 < y < 2$ 

For the first case, we can easily find the PDF given a '$z$' for $f_Z(z)$ by integrating $x$ over the length of the line.
- For instance, above, if $z = 1$, then it would be that bottom-left line. To find $f_Z(1)$, we integrate $x$ over $[0, 1] = [0, 1]$

For the case where $z = 3$, though, the line goes *above* the square! We also know it's possible since $0 < x + y < 4\implies 0 < z < 4$ so we must account for it!!!
- Observe the range of $x$ that should be integrated goes from $[1, 2]$ which is $[z - 2, 2]$ generally

So the two cases we integrate depend on if $z$ is $\leq$ or $\geq$ the number $2$ !



# Quiz

6.
$𝑋∼Exp(𝜆)$
$$f(x) = \begin{cases}
\lambda e^{-\lambda x} & x \geq 0\\ 
0 & x < 0 
\end{cases} \ \text{ for some }
\lambda > 0
$$
$𝑌∼Gamma(2,𝜆)$

yeah idk #todo 

I just know ans is gamma(3, \lambda)

8.
Absolute Jacobian is $|J(x,y)|$
