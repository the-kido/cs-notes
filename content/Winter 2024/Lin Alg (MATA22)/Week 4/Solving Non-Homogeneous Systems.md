Suppose the non-homogeneous system has the following augmented matrix:
$$[A|b]$$
where b is a non-zero vector and v_p is a valid solution vector. Then, if $\vec v$ is a valid solution of [A|0], $v_p + \vec v$ is also a solution to $[A|b]$

With these, here are the steps to finding all solutions to a non-homogeneous system of equations:
1. Create an augmented matrix [A|b]
2. Convert to echelon form [A'|b']
3. Solve for the solution to the homogeneous system [A'|0] (this is $S_H$)
4. Solve for a valid solution $x_p$ ("using the following algorithm" what ever that is)
5. Then the set of solutions is $v = \set{x_p + \vec v : v \in S_H}$
	1. I think equivalently you can have $v = \set{x_p} + S_H$
 

>[!defn] Affine set.
>A set of the following form is called an affine set.
>$v = \set{x_p + \vec v : \vec v \in Span S}$
>
>>[!example] High school example
>>$W = 2x = span{(1,2)}$ is a subspace. But $y = 2x + 1$ is an affine set. It can be represented by $\set{(0,1)} + \vec V_n$ where $V_n \in \set{(x, 2x) : x\in \mathbb R}$ #todo why the x and 2x. why not just 2x
>

A plane that hits the origin is a subspace. But a plane that is offset a bit is no longer a subspace. instead, it is an affine set. 

>[!note] Differing number of solutions
>1. No solutions: 
>	1. When $x_p$ does not exist
>2. 1 Solution: When $x_p$ exists and is $S_h = {\vec 0}$ (i.e. no free variables. #todo Why)
>3. Infinite Solutions: When $x_p$ exists and $S_h$ is a span of some non-zero vectors. i.e. we have free variables. 

>[!example] Solving for a particular solution ($x_p$ or $v_p$ idk)
>1. Start 

bolded = vectors
non-bolded = scalars.





prove any 2 vectors in r2 are lin dep.
false, cuz if we choose v1 = (1,0,0) and v2 = (0,0,1), they are lin indep!
