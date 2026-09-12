### Solution Sets
A linear system can have:
1. No Solution (inconsistent system of equations)
2. One solution (independent consistent system of equations)
3. Infinite solutions (dependent system of equations)
tl;dr: $0, 1, \infty$

### Ways to solve Linear Systems
1. Using the equations and equivalences to find each variable's value (like in high school)
2. Using [[Augmented Matrices]] and [[Augmented Matrices#Row Operations|row operations]].
3. Using [[Row Echelon Form]] and basic / free variables to easily solve for the free variables in terms of basic variables.

## A bunch of example questions related to solving systems!
>[!example] Determine if the set {(1,2,3),(0, -1, 0), (1,1,0)} is dependent or not.
>Essentially this question is asking to find the # of solutions! Since dependent systems have a solution at any point, let's choose a_1(1,2,3) + a_2(0,-1,0) + a_3(1,1,0) = (0,0,0)
>So $(0,0,0) = (a_1 + a_3, 2a_1 - a_2 + a_3, 3a_1)$
>
>
>$$
\begin{cases}
a_1 + a_3 &= 0 \\
 2a_1 - a_2 + a_3 &= 0 \\
 3a_1 &= 0 
\end{cases}$$
>So $a_1 = 0$, $a_3 = 0$, and $a_2 = 0$. Therefore the solution is $(a_1, a_2, a_3) = (0,0,0)$, which isn't dependent on any variables! Therefore there is only 1 solution, so the system is independent.
>
>>[!help]- 
>>![[Pasted image 20250127203621.png]]

>[!example] Determine if (1,1,1) is in the span of the vectors {(1,1,2), (-1,1,3), (0,1,0)}
>We are asked to show that $(1,1,1) \in Span( \set{(1,1,2), (-1,1,3), (0,1,0)} )$
>We can (for sake of clarity) rewrite this as $(1,1,1) \in \set{a_1(1,1,2), a_2(-1,1,3), a_3(0,1,0) : a_1, a_2, a_3 \in \mathbb R }$
>We basically want to show that (1,1,1) can equal a linear combination in the set.
>So we want to solve $(1,1,1) = a_1(1,1,2), a_2(-1,1,3), a_3(0,1,0) = (a_1 - a_2, a_1 + a_2 + a_3, 2a_1 + 3a_2)$
>
>That's a lot of rambling for what is a pretty obvious conclusion but I AM LEARNING.
>$$\begin{cases}
 a_1 - a_2 &= 1 \\
 a_1 + a_2 + a_3 &= 1 \\
 2a_1 + 3a_2 &= 1 
\end{cases}$$
>In the end you get $a_1 = \frac{4}{5}, a_2 = \frac{-1}{5}$, and $a_3 = \frac{2}{5}$.
>So there is a solution (it's not inconsistent), which means that there indeed is a set of coefficients (as stated above) for the arbitrary linear combination representing the span such that it will equal $(1,1,1)$. Therefore $(1,1,1) \in Span(S)$ as required.
>
>>[!help]-
>>![[Pasted image 20250127205812.png]]


>[!example] Represent the subspace $W = \set{(x,y,z) : x + 2y + 3z = 0 \text{ and } x + y + z = 0 }$ as a span (i.e. a set of linear combinations)
>This set consists of solutions where x + 2y + 3z = 0, and x + y + z = 0. 
>
>Eventually you find $y = -2z$, $x = z$, and $z = z$.
>Soooo $(x,y,z) = (z, -2z, z) = z(1,-2,1)$. And since that looks like a linear combination with an arbitrary coefficient, it is equivalent to $(x,y,z) = Span\set{(1,-2,1)}$ 
>
>>[!help]-
>>![[Pasted image 20250127210412.png]]

>[!example] Represent the below system via free and basic variables as a span
> 
> ![[Pasted image 20250128191143.png]]
> >
> We can solve linear systems a different way with basic and free variables:
> The above linear system has $(x1, x2, x3, x4, x5) = (-2x3 - x5, -x3, x3, -5x5, x5)$ 
> - This shows us moving the basic variables to the right side, isolating for the free variables.
> - We don't find what the basic variables are in terms of free variables. That just... creates more variables for us... dumb dumb.
> - Then we can use the fact that basic variables have a coefficient of 1!
> = x3(-2, -1, 1, 0, 0) + x5(-5, 0, 0,-5, 1) when factoring out (look it's a linear combination!)
> So look, the solutions are determined by the span of the free variables. span{(-2, -1, 1, 0, 0), (-5, 0, 0, -5, 1)}



