1. What matrix are you given?
	1. If you're given $[T]_\alpha^\alpha$ for instance, this will be key to figuring out what you need to solve
2. What matrix do you want?
	1. Most likely something along the lines of $[T]_\beta^\beta$
3. What to do?
	1. Solve for $[T]_\beta^\beta = [I]^\beta_\alpha[T]^\alpha_\alpha[I]^\alpha_\beta$
	2. Note how the top left is the same as the above basis and the bottom right is the same as the below basis that we're solving for

> [!example] Example. Given $[T_A]_\beta^\beta = \begin{bmatrix} 1 & 3 \\ 3 & 1 \end{bmatrix}$ where $\beta$ is the standard basis, solve for $[T]_\alpha^\alpha$.
> We are given that $\alpha = \set{(1,1), (1,-1)}$
> 
> 1. We know we are solving the equation $[T]_\alpha^\alpha =[I]^\alpha_\beta[T]_\beta^\beta[I]_\alpha^\beta$
> 2. We can easily solve for $[I]_\alpha^\beta$ by plugging in the $\beta$ basis. I'll spare you the details, it is $[I]_\alpha^\beta=\begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$
> 3. Then we solve for $[I]^\alpha_\beta[T]$. Using some algebra, we know that $$I(1,0) = (1,0) = \frac 1 2 (1(1,1) + 1(1,-1))$$ and $$I(1,0) = (1,0) = \frac 1 2 (1(1,1) + 1(1,-1))$$ so clearly $[T]^\alpha_\beta \begin{bmatrix} \frac 1 2 & \frac 1 2 \\ \frac 1 2 & \frac {-1} 2 \end{bmatrix}$
> 4. Then you do matrix multiplication! The final answer will be $[T]_\alpha^\alpha = \begin{bmatrix} 4 & 0 \\ 0 & -2 \end{bmatrix}$


