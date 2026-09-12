
### Symmetric Matrices
We did an example question involving them. Yay.
![[Pasted image 20250201160653.png]]
We show that $Symm_{2\times2}(\mathbb R) = Span(S)$ for some set S we choose.
Let $A \in Symm_{2\times2}(\mathbb R)$

$$
\begin{align}
A &= \begin{bmatrix} a \ b\\ c\ d \end{bmatrix} \\
&=  \begin{bmatrix} a\ b \\ b \ d \end{bmatrix} \text{ cuz b=c} \\ 
&=  \begin{bmatrix} a\ 0 \\ 0\ 0 \end{bmatrix} + \begin{bmatrix}  0\ b \\ b\ 0 \end{bmatrix} + \begin{bmatrix}  0\ 0 \\ 0\ d \end{bmatrix} \\
&=  a\begin{bmatrix} 1\ 0 \\ 0\ 0 \end{bmatrix} + b\begin{bmatrix}  0\ 1 \\ 1\ 0 \end{bmatrix} + d\begin{bmatrix}  0\ 0 \\ 0\ 1 \end{bmatrix} \\
\end{align}
$$
So it makes sense to choose $$S = \left\{   \begin{bmatrix} 1\ 0 \\ 0\ 0 \end{bmatrix}, \begin{bmatrix}  0\ 1 \\ 1\ 0 \end{bmatrix}, \begin{bmatrix}  0\ 0 \\ 0\ 1 \end{bmatrix} \right\}  \\
$$
Since the matrix A was arbitrary and is a linear combination, all matrices are elements of the span.
So $Symm_{2\times2}(\mathbb R) \subseteq span(S)$

Then let $x \in span(S)$ be arbitrary.
So
$$x =  a\begin{bmatrix} 1\ 0 \\ 0\ 0 \end{bmatrix} + b\begin{bmatrix}  0\ 1 \\ 1\ 0 \end{bmatrix} + d\begin{bmatrix}  0\ 0 \\ 0\ 1 \end{bmatrix}\\
=\begin{bmatrix} a\ b\\ b\ d \end{bmatrix}
$$
Note that $M_{12} = M_{21}$. This means that $x$ is a element of $Symm_{2\times2}(\mathbb R)$.
Therefore,  $span(S) \subseteq Symm_{2\times2}(\mathbb R)$



