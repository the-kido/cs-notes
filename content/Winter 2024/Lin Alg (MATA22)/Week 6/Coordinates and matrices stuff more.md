>[!defn] Coordinate Vectors
>Let $\beta = \set{v_1,\dots, v_n}$ Any vector $v \in V$ can be written uniquely by its basis vectors as
>$$v = b_1v_1 + \dots + b_nv_n = \sum_{i=1}^n b_iv_i$$
>We define the coordinate vector with respect to the basis $\beta$ to be 
>$$[v]_\beta = \begin {bmatrix} b_1\\ b_2\\ \vdots\\ b_n  \end {bmatrix} $$
>
>$[v]$ is any vector. $\beta$ is the specific basis we want to represent $v$ with. The coefficients make up the coordinates.
 

>[!example] Let $v = (2,0)$. Represent it w.r.t $\alpha = \set{(1,0), (0,1)}$ and $\beta = \set{a_1, a_2} = \set{(1,1),(1,-1)}$
>This example shows how a vector can have <span class="emphasis">many coordinate vectors</span> depending on the specific basis.
>
>First let's find $[v]_\alpha$
>$v = (2,0) = 2(1,0) + 0(0,1)$
>So  
>$$[v]_\alpha = \begin{bmatrix} 2\\0 \end{bmatrix}$$
>
>
>Second we try to find $[v]_\beta$
>$v = (2,0) = 1(1,1) + 1(1,-1)$
>So
>$$[v]_\beta = \begin{bmatrix} 1\\1 \end{bmatrix}$$
>
> >[!question] How would you go from a coordinate (i.e. a vector written w.r.t. some basis) back to the vector given the basis?
> >
> >Same process; opposite direction
> >
> >Suppose we had $[\vec v]_\beta =\begin{bmatrix} 1\\1 \end{bmatrix}$.
> >Then $\vec v = 1a_1 + 1a_2 = 1(1,1) + 1(1,-1) = (2,0)$
> >
> >Very easy! The coordinates tell you what the coefficients on the basis are. 
> 

# Matrix-Vector Multiplication
Simply put, we apply the transformations given by the columns of the matrix to the individual coordinates. I honestly don't know why this works anymore (totally forgot) #todo 

>[!defn]
>![[Pasted image 20250224105512.png]]
>
>>[!explanation]
>>$b_i$ multiplies into each column, so there will be in total $n$ number of items to sum. That is why the sums at the end go up to $n$. Since the number of rows does not change (there are $k$ rows in the matrix), there will be $k$ rows at the end too for the coordinate.
>>
>
$b_1$ is the coefficient of the first basis vector. The column $1$ is the transformation of that basis vector. So $b_1\cdot v_1$ where $v_1$ is the basis vector becomes 
$$b_1\cdot\begin{bmatrix} a_{11} \\ a_{21} \\ \vdots \\ a_{k1} \end{bmatrix}$$ Okay never mind. I remember now! You just do that for all the coefficients in the coordinate. 
#todo memorize the equivalence at the very top with the sum notation.
>




>[!thm] Matrix-Vector Multiplication in Coordinates: $[T(v)]_\beta = [T]_\alpha^\beta[v]_a$
>
> Fix bases $\alpha = \set{v_1, v_2, \dots, v_n}$ of V and $\beta = \set{w_1, \dots, w_k}$ of W.
> If $T : V \to W$ is a linear transformation, then $[T(v)]_\beta = [T]_\alpha^\beta[v]_a$
>
>>[!explanation] First let me make sense of that above expression:
>>$[T]_\alpha^\beta$ is the transformation matrix. It turns alphas into betas and the matrix shows what coefficients to assume. 
>>We pass in $[v]_\alpha$ which is the coordinates of $v$ with respect to the $\alpha$ basis.
>>This will turn the $v$ w.r.t $\alpha$ into $v$ but w.r.t $\beta$
>
>>[!proof]-
>>Note that in the second step they just magically start using $b$ because... why not! Tbh they should have used b in the first step but OK whatever. 
>>
>>In step 4, $b_i$ is constant w.r.t. $j$
>>
>>![[Pasted image 20250224185941.png]]



>[!defn] The Transformation Defined by a Matrix.
>Literally a transformation defined by the basis vector transforms of a matrices columns.
>
> Fix bases $\alpha = \set{v_1, v_2, \dots, v_n}$ of V and $\beta = \set{w_1, \dots, w_k}$ of W.
>If $M \in M_{k\times n}(\mathbb R)$, then <span class="emphasis">transformations defined by M</span> is $T_M : V \to W$ such that 
>$$T_M(\vec v) = \vec w \Longleftrightarrow M[\vec v]_\alpha = [w]_\beta  $$ for some $v$ and $w$

#todo Is $M = [M]_\alpha^\beta$. Surely not. If not, why can we say the above notation is a thing? Maybe that's what they mean by "the proof is postponed"


>[!thm] ✨ The Fundamental Theorem of Matrices
>We give a re-statement of (2.2.19) from our tb (pg. 80)
>1. If $M \in M_{n\times k} (\mathbb R)$, then $T_M$ is a linear transformation.
>	1. If there is a real-valued matrix, then it represents a linear transformation $T_M$.
>2. If $T : V \to W$ has a matrix $M = [T]_\alpha^\beta$, then $T = T_M$
>	1. If there is a function that can be described as a matrix, then it is equal to it's matrix-defined version
>3. If $M \in M_{n\times k}(\mathbb R)$, then $M = [T_M]_\alpha^\beta$
>	1. If there is a matrix, then it is equal to the linear transformation's matrix
>	2. #todo What is this notation? $T_M$ is a function, but it's inside a matrix (?)
>
>"Linear transformations between finite dimensional vector spaces behave exactly like matricies"

>[!explanation]- A fancy diagram
>T (transformations) ---$[T]_\alpha^\beta$--> M (matrices)
>M ---$T_M$--> T
>
>![[Pasted image 20250224204148.png]]



>[!example] 
>Consider $T(x,y,z) = (x+y+z, y + x, z)$ (this implies $T : V \to V$)
>with a basis $\alpha = \set{e_1, e_2, e_3}$. Show that $[T(1,2,3)]_\alpha = [T]_\alpha^\alpha[(1,2,3)]_\alpha$
>
>>[!help] Solution
>>![[Pasted image 20250224142923.png]]
>>What do we want? We want to show the two expressions are equal. Ig the easiest way of doing that is by evaluating both of them in a LS = RS proof.
>>First, we gotta find $[T]_\alpha^\alpha$.
>>$T(e_1) = T(1,0,0) = (1,1,0) = 1e_1 + 1e_2 + 0e_3$
>>Do the same for the other 2 basis vectors (note that the result are vectors represented by $\alpha$'s bases!)
>>
>>We get the matrix of 
>>$$[T]_\alpha^\alpha = \begin{bmatrix} 1 & 1 & 0 \\ 1 & 1 & 0 \\ 1 & 0 & 1 \end{bmatrix} $$
>>Therefore $$[T]_\alpha^\alpha[(1,2,3)]_a = \begin{bmatrix} 1 & 1 & 1 \\ 1 & 1 & 0 \\ 0 & 0 & 1  \end{bmatrix} \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix} = 1 \cdot \begin{bmatrix} 1 \\ 1 \\0 \end{bmatrix} + 2 \cdot \begin{bmatrix} 1 \\ 1 \\ 0 \end{bmatrix} + 3 \cdot \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix}6 \\ 3 \\ 3 \end{bmatrix} $$
>>
>>Then for the other half:
>>
>>$$[T(1,2,3)]_\alpha = [(6, 3, 3)]_\alpha =\begin{bmatrix}  6\\3\\3\end{bmatrix}  $$
>>
>>So yeah they equivalent. 

#todo Does $e_i$ always represent the standard basis. idk i just asked
- abinash said yeah so yep that is a thing yayaya

