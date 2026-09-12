
>[!thm] Linear Maps are Determined by their Actions on a Basis.
>Suppose that V is a finite dimensional vector space with basis $\alpha =\set{v_1,  v_n}$. If $S : V\to W$ and $T:V \to W$ are linear maps such that $S(\vec v_i) = T(\vec v_i)$ for each $v_i$ then $S(\vec v) = T(\vec v)$ for all $v \in V$
>Basically saying, a linear transformation can be completely described by how it affects the bases. If two transformations do the same thing to the bases, then they are the same transformation. 
>>[!proof]-
>>Pick a vector $\vec v \in V$
>>We represent $\vec v$ w.r.t. the basis $\alpha$:
>>$$\vec v = a_1v_1 + a_2v_2 + \dots + a_nv_n\ (*)$$ 
>>
>>Then
>>$$\begin{align} T(v) &= T(a_1v_1 + a2v_2 + \dots + a_nv_n)\text{ from (*)} \\
 &= a_1T(v_1) + a_2T(v_2) + \dots + a_nT(v_n) \text{ as T is a linear map} \\
 &= a_1S(v_1) + a_2S(v_2) + \dots + a_nS(v_n) \text{ by assumption that } T(v_i) = S(v_i) \text{ for all bases } v_i\\
 &= S(a_1v_1) + S(a_2v_2) + \dots + S(a_nv_n) \text{ as S is a linear map} \\
 &= S(a_1v_1 + a_2v_2 + \dots +  a_nv_n) \text{ as S is a linear map} \\ \
&= T(\vec v) \text{ by (*)}
\end{align}$$
>> Therefore $T(\vec v) = S(\vec v)$ for all $\vec v \in V$

>[!thm] $T:V\to W$ Characterized by $\dim(V) \times \dim(W)$ Scalars
>Let V,W be finite dimensional vector spaces with $\dim(V) = n$ and $\dim(W) =k$. Any linear transformation $T : V\to W$ is uniquely determined by $nk$ scalars.
>
>>[!proof]
>>Pick any $v \in V$
>>We can write v w.r.t. the basis:
>>$\vec v = a_1v_1 + a_2v_2 + \dots a_nv_n$ for all $v_i \in \alpha$
>>So $T(\vec v) = T(a_1v_1 + a_2v_2 + \dots a_nv_n)$
>>Since $\beta$ is a basis for $W$ we can represent each $T(v_i)$ using a unique linear combination of the vectors in $\beta$
>>$T(\vec v_i) = b_{1i}\vec w_1 + b_{2i}\vec w_2 + \dots + b_{ki}\vec w_k$.
>>
>>So I think $T(\vec v) = a_1T(v_1) + a_2T(v_2) + \dots a_nT(v_n)$
>>$= a_1( b_{11}\vec w_1 + b_{21}\vec w_2 + \dots + b_{k1}\vec w_k) + \dots + a_n( b_{1n}\vec w_1 + b_{2n}\vec w_2 + \dots + b_{kn}\vec w_k)$
>>
>>Since $a_i \cdot b_{ij}$ is some scalar, there are $nk$ scalars that represent the transformation of $\vec v$ as required 
>>
>>Parker shows it like this:
>>![[Pasted image 20250224094106.png]]


>[!defn] The Matrix $[T]_\alpha^\beta$ of a Linear Transformation
>Each column is the transformation of the $v_i$ basis vector
>![[Pasted image 20250210211754.png]]
>
>>[!explanation] $[T]_\alpha^\beta$ says "The T transformation represents a vector represented by $\alpha$ basis vectors and returns a transformed vector represented by the $\beta$ basis vectors"
>
>The "i" in $T(V_i)$ is the $i$'th column of the matrix. Each column tells us what to do with each basis vector.
>
>The top set is what the matrix represents (the transformation with the basis vectors of $\beta$) and the bottom set is what the vectors the transformation taken in are represented w.r.t.
>
>"start in basis $\alpha$; end up in basis $\beta$"
>
>The notation $[T]_\alpha^\beta$ is a big matrix with a linear transformation inside. 


>[!example]
>![[Pasted image 20250224094746.png]]
>How to compute a matrix:
>1. We calculate what happens in our basis.
>	1. $I(v_1) = v_1 = 1\cdot v_1 + 0\cdot v_2$
>	2. $I(v_2) = v_2 = 0\cdot v_2 + 1\cdot v_2$
>	3. (we write it this way to make it easier to see the coefficients)
>2. Then we use these to make the matrix as follows:
>$$[T]_\alpha^\alpha = \begin{bmatrix} 1& 0\\ 0 & 1 \end{bmatrix}
>$$

## Rotation
$R_\theta(x,y) = (x\cdot \cos\theta - y\cdot\sin\theta, x\cdot \sin\theta + y\cdot\cos\theta)$
Choosing the subscript would be choosing a specific kind of rotation. Think of generic functions.

![[Pasted image 20250224095710.png]]
To get the matrix $[R_\theta]_\alpha^\alpha$ we simply do the above calculations on the basis vectors of $R^2$.
Then we bundle it together to get
$$[R_\theta]_\alpha^\alpha = \begin{bmatrix} cos\theta& -\sin\theta \\ sin\theta & \cos\theta \end{bmatrix}$$
