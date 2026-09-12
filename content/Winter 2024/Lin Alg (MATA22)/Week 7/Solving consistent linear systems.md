
# Ways to represent linear equations
>[!example]
>$$
>\begin{cases}
>x + y + z =1 & \\
 y + z = 2 &\\
 z = 3 & \\
\end{cases}
>$$
>This can be written as a 
>1. Augmented matrix $[M | 1\ \ 2 \ \ 3]$
>2. Matrix-vector equation $[T_M]_\alpha^\alpha[x\ \ y\ \  z]_\alpha = [1\ \ 2\ \ 3]_\alpha$
>3. A statement about the image of a linear transformation 
>   
> ![[Pasted image 20250305160117.png]]



Similar to affine sets from [[Solving Linear Systems]] we have affine subsets
>[!defn] Affine Subset
>An subset of $V$ where $\vec v + S = \set{\vec v + \vec s : \vec s \in S}$ for some subspace $S \subseteq V$.
>
>>[!explanation] An affine subset is like a subspace but shifted by a vector
>
>>[!example]
>>
>>
>>![[Pasted image 20250305164924.png]]
>>
>>

>[!thm] Solution Sets of Consistent Linear Systems
>(for some context, $A$ is a transformation and $A\vec x = \vec b$ is a matrix-vector equation)
>
>The solution set $S$ of a <span class="emphasis">consistent linear system</span> (not just [[Homogeneous Systems]]) $A\vec x = \vec b$ is an affine subset $\vec x_p + \ker(T_A)$.
>
>If $A\vec x = \vec b$ has no solutions then the system is inconsistent and the solution set is $\emptyset$
>
>All solutions can be written as $\vec x = \vec x_p + \vec x_h$ where $x_p$ is a <span class="emphasis">particular solution</span> such that $A\vec x_p = \vec b$
>and $x_h$ is a [[Homogeneous Systems|homogeneous solution]] of $A\vec x_h = \vec 0$
>
>>[!explanation]
>
>
>>[!proof] Proving that $x_p + x_h$ represents all solutions
>> #todo seems useful but nah i am not doing this
>>![[Pasted image 20250305171059.png]]

>[!thm] Solution Sets of Linear Systems and Kernels
>The solution set S of $A\vec x = \vec b$ is a subspace $\Longleftrightarrow$ $\vec b = \vec 0$.
>
>(Note, if $S$ is a subspace then it is a kernel $ker(T_A)$ as that makes up all the solutions of a [[Homogeneous Systems|homogenous system]])
>- #todo Where is this from!?
>
>>[!proof]
>>$\Rightarrow$ Suppose that the solution set of $Ax = b$ is a subspace. Then the solutions have the form $x_p + \ker(T_A)$.
>>So, $\vec x = x_p + x_h$ where $\vec x$ is some arbitrary solution.
>>Since the solution set is a subspace, there is a $\vec 0$ solution: $A\vec 0 = \vec b\implies \vec 0 = \vec b$
>>
>>$\Leftarrow$
>>Suppose that $\vec b = \vec 0$. The solution set $S$ has the form $x_p + \ker(T_A)\implies \vec 0 = \ker(T_A)$
>>(we needa somehow show that $x_p$ is $\vec 0$ such that the solution is the kernel as we'd like)
>>$x_p + \ker(T_A) = \vec 0 + \ker(T_A)$ (we pick $x_p = \vec 0$ to be the solution so $Ax_p = \vec 0$)
>>Therefore the solution set is a subspace (as given in the note above)



>[!example]
>
>
>![[Pasted image 20250305173353.png]]
- i am just guessing in this scenario that a and b are both free (so they end up in the kernel)

>[!example] Solve the System and represent it as an affine subset.
>
>
>My way: We want the form $x_p + x_h$ where $x_p$ is some solution and $x_h$ is any homogenous solution.
>We can already figure out naturally that $x_p = (0, -2, 3)$ is a viable solution!
>Now for $x_h$
>We write the linear system as a split between homogenous system ( #todo how would you describe this step!?) and solve it. This will give all the solutions that result in $\vec 0$, which so happens to be the $\ker(T_A)$ 
>![[Pasted image 20250305173929.png]]

