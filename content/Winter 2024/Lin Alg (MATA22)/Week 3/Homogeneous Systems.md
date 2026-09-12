 >[!defn] Homogeneous Systems
>[[Linear Systems|A system of linear equations]] is <span class="emphasis">homogeneous</span> if all its constants are zero. (i.e. $\hat 0 \in \mathbb F$)

>[!example] Observe how we solve this homogeneous system
>![[Pasted image 20250128210052.png]]

>[!thm] Solutions of Homogeneous Systems and Parameters.
>My way: If the number of equations is less than the # of variables, then there is a non-trivial solution.
>
>If n < k, then every homogenous system with k variables and n equations has a non-trivial solution.
>- $n =$ # of equations
>- $k =$ # of variables
>
> > [!proof]-
> > Let b represent the number of basic variables and f represent the number of free variables. then 
> > k = f + b --> f = k - b.
> > Each row provides at most 1 basic variable (cuz you either have 1 pivot or not) and every basic variable corresponds to a row. Thus $n \geq b$
> > This gives $n - k \geq b - k \implies k - b \geq k - n$.
> > As $k > n, k - n > 0$. Thus  $f= k - b \geq k - n > 0$.
> > Thus $f > 0$.
> > Thus we have some free variable $x_i$.
> > Therefore there exists a solution where $x_i = 1$, i.e. we have a non-trivial solution.
> 
>^nandk


# <span class="cards">Cards</span> #linalg-3 

What is a "non-[[Trivial Solutions|trivial]]" solution of a homogenous solution?
?
It's the solution where all the variables aren't just the zero vector.

Explain simply what the Solutions of Homogenous Systems and Parameters theorem tries to explain.
?
If you have a system with more variables than equations, then there MUST be a non-trivial solution. 

How do non-trivial solutions relate to 