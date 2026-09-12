This is from keilstras i think

![[Pasted image 20250324111835.png]]


>[!defn] N-fold comparison
>Very closely related to [[3B1B Linear Algebra Videos#Eigenvalues / eigenvectors]] and the applications of diagonal matrices.
![[Pasted image 20250324124307.png]]
#todo See how parker explained it (thomas's explanations r weird)


>[!defn] Eigenvalues and Eigenvectors
>Suppose $T:V\to V$ satisfies $T(\vec x) = \lambda \vec x$ for some non-zero $\vec x \in V$.
>We say $\vec x$ is the eigenvector and $\lambda$ is the eigenvalue.
>
> In german, eigen = characteristic. So eigenvector/value = characteristic vector/value
> 

>[!example] Examples w/ confirming eigenvectors/values
>![[Pasted image 20250324124700.png]]

>[!explanation] Re-writing M matrix in an Eigenbasis
>
>>[!example] Here is an example
>>Let $M = \begin{bmatrix} 1 & 2 \\ 4 & 3 \end{bmatrix}$
>>We know $$T_M(\vec v) = \vec x \Leftrightarrow M[\vec v]_{\set{e_1, e_2}} = [\vec w]_{\set{e_1, e_2}}$$
>>From the above example, we know that there are two eigenvectors $\set{(1,2), (1,-1)}$. Let that be the *eigenbasis*
>>Then we simply do 
>>$$T_M(1,2) = 5(1,2) = 5(1,2) + 0(1,-1)$$
>>$$T_M(1,-1) = (-1)(1,-1) = 0(1, 2) + (-1)(1,-1)$$
>>So the matrix, after plugging in these new bases, is
>>$[T_M]_\beta^\beta = \begin{bmatrix} 5 & 0 \\ 0 & -1 \end{bmatrix}$ 
>>and it's diagonal!!!!!

>[!explanation] Change of basis to an Eigenbasis
>1. Solve for an eigenbasis; this will be $\beta$
>2. Solve for $[T_M]_\beta^\beta$ (it should be diagonal!)
>3. Apply change-of-basis to find $[T_M]_\alpha^\alpha = [I]_\beta^\alpha [T_M]_\beta^\beta [I]_\alpha^\beta$
>	4. Solving for $[I]_\beta^\alpha$ is light (see how the basis $\beta$ behaves after transformation and use those outputs represented by $\alpha$'s bases to make the matrix.)
>   
>>[!example] Still continuing from the above examples
>>#todo i recon parker explains this better, especially solving for $[i]_\alpha^\beta$
>![[Pasted image 20250324140704.png]]
>

>[!thm] Eigenvectors are vectors in Kernels
>$$T(\vec v) = \lambda \vec v \Leftrightarrow \vec v \in \ker(T - \lambda I)$$
>
>>[!proof]
>>$T(\vec v) = \lambda \vec v$
>>$\Leftrightarrow T(\vec v) - \lambda \vec v = \vec 0$ by additive inverse
>>$\Leftrightarrow T(\vec v) - \lambda I(\vec v) = \vec 0$ by def'n of identity transformation  
>>$\Leftrightarrow (T-\lambda I)(\vec v) = \vec 0$ as $\mathcal L(V,V)$ is a vector space
>>$\Leftrightarrow \vec v \in \ker(T - \lambda I)$ by def'n of kernel

>[!defn] The Characteristic Polynomial
>The characteristic polynomial of a matrix A (why A!?) is $$\mathcal X_A(\lambda)= \det(A - \lambda I)$$ 
>
>>[!explanation] Used to solve for the eigenvalues!
	
>[!example] A Diagonal Example to solve for some $\lambda$'s! 
>![[Pasted image 20250324143217.png]]
>


>[!thm] Eigenvalues are the roots of the characteristic polynomial
>A scalar $\lambda$ is an eigenvalue of $T$ transformation IFF it is a root $\mathcal X_{[T]_\alpha^\alpha}$
>
>>[!proof]
>>I like how it starts with "this proof is left as an exercise" that is not confusing at all
>>![[Pasted image 20250324143548.png]]


![[Pasted image 20250324143858.png]]
- #todo Wanna prove these later today


# The full example!

All the steps:
1. Find the eigenvalues
	1. We can use the characteristic polynomial for that. Expand and factor the expression $\mathcal X_M(\lambda) = \det(A - \lambda \cdot I)$
	2. The roots will be the eigenvalues
2. Find the matrix such that $A - \lambda I = 0$ for each $\lambda$ solved for.
3. Use that new matrix to solve for $\vec x$ via the formula $(A - \lambda I)\vec x = \vec 0$
	1. We let $\vec x = \begin{bmatrix} a\\b\\\vdots\end{bmatrix}$ depending on the dimension of the thingy we're working in
4. Once we solve for that we will get a range of values for $x$. Any vector in that span will be a valid eigen vector 
	1. Precisely, we solve for the basic $\lambda_1$/$\lambda_2$-eigenvectors<span class="hide"> if there are two solutions for lambda</span>
5. 



![[Pasted image 20250324220352.png]]
![[Pasted image 20250324220402.png]]