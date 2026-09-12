>[!note] Def'n of Absolute max and min
> ![[Pasted image 20241215144632.png]]
> 
> My way: f(x) has an absolute max at x = c with value f(c) if  $\forall x \in D, f(x) \leq f(c)$


>[!note] Def'n of local max and local min
>Let $f$ be a function with c in its domain. 
>$f$ has a <span class="emphasis">local max</span> at c if f(x) <= f(x) for all x "near" c.
>
>>"Near" means "on any open interval containing c" 


![[Pasted image 20241122113258.png]]
- Observe this example!
	- The absolute max is also a local max since the surrounding points are all <= to that point, even if it's not continuous
	- Endpoints are probably not extrema. This depends on the textbook though. 

>[!note] Def'n 
>$x=c$ is a <span class="emphasis">critical value</span> of $f$ if
>1. $c$ is in the domain of $f$
>2. $f'(c) = 0$  or $f'(c) \text{ DNE}$
>
>then $(c, f(c))$ is a <span class="emphasis">critical point</span>

### Fermat's Theorem
Assume we have a function f with c in the domain of f.

>[!note ]
>If f has a local max or min at $c$ and $f$ is differentiable at $c$, 
>then $f'(c) = 0$ (and therefore it's a critical point!)
>
> > tl;dr: "local extrema (max/min)" $\implies$ "critical point" 

> Note that "critical point" $\cancel{\implies}$ "local extrema (max/min)". Ex: $f(x) = x^3$ has a critical point at $(0,0)$ but no max/min

### Proof time
>[!note] This is just for local max. Local min is very similar!!
>Assume $f$ has a local max at c and f is differentiable at c.
>(WTS $f'(c) = 0$. That is, $f'(c) = \lim \limits_{x \to c} \frac{f(x) - f(c)}{x-c}=0$
>Then there is an open interval I containing c such that $f(x) \leq f(c)$ for all $x \in I$, by def'n of local max. (\*)
>And, $f'(c)$ exists, that is, $\lim \limits_{x \to c} \frac{f(x) - f(c)}{x-c}$ exists. 
>Then one-sided limits are equal, so $f'(c) = \lim \limits_{x \to c^-} \frac{f(x) - f(c)}{x-c} = \lim \limits_{x \to c^+} \frac{f(x) - f(c)}{x-c}$
>
>For $x \to c^-$.
>When $x \in I$ and $x < c$, then $f(x) - f(c) <= 0$ (\*)
>So, $\frac{f(x) - f(c)}{x-c} \geq 0$ 
>So, $\lim \limits_{x \to c^-} \frac{f(x) - f(c)}{x-c} \geq 0$
>
>For $x \to c^+$.
>When $x \in I$ and $x > c$, then $f(x) - f(c) \geq 0$ (\*)
>So, $\frac{f(x) - f(c)}{x-c} \leq 0$ 
>So, $\lim \limits_{x \to c^+} \frac{f(x) - f(c)}{x-c} \leq 0$
>
>Since $f'(c) \leq 0$ and $\geq$ 0, we have $f'(c) = 0$.
>f'(c) = 0. Boom.
>

 >> Important to note! If you put limits on both sides of an inequality, the inequality is preserved. 


# Cards #calc-10 
What is the definition of absolute max vs local max?
?
Absolute max:
- A function f has an absolute maximum value of f(c) at x=c if $\forall x \in D, f(x) \leq f(c)$
Local max:
- A function f has a local max value of f(c) at x = c if for all values of x *near* c, $f(x) \leq f(c)$
- Note: for the values near c, we are talking about an open interval containing c! it is not punctured or closed. 


What is the definition of a critical point?
?
A critical point is a point c on f(x) such that
1. f(c) exists (or 'c is in the domain of f(c)')
2. Either f'(c) = 0 or f'(c) undefined.
Then (c, f(c)) is a critical point.


What is Fermat's theorem? What is it useful for?
?
Format's theorem states: If you have a function f with a local extrema at x = c and f at c is differentiable, then f'(c) = 0.

#todo Idk when Fermat's theorem is used. 

