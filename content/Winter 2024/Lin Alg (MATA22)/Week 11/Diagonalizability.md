
>[!thm] The Fundamental Theorem of Algebra
>![[Pasted image 20250329135954.png]]

>[!thm] A Bound on The Number of Eigenvalues
>If $M_{n\times n}(\mathbb R)$, then $M$ has at most $n$ real eigenvalues


>[!thm] Eigenvectors of Distinct Eigenvalues are Independent
>Suppose that $T(v_1) = \lambda_iv_i$ for $i = 1,2,3,\dots, n$ are *distinct* eigenvalues and eigenvectors of T.
>The set of vectors $\set{v_1, \dots, v_n}$ is linearly independent.
>
>>Note if $n=1$ then the vector MUST be non-zero because it's an eigenvector
>
>>[!suppose]
>>![[Pasted image 20250329140338.png]]
>

>[!defn] Algebraic and Geometric Multiplicity
>The <span class="emphasis">Algebraic Multiplicity</span> $Alg(\lambda)$ of an eigenvalue $\lambda$ is the number of times that it occurs as a root of the characteristic polynomial of $T$.
>
>The <span class="emphasis">Geometric Multiplicity</span> $Geo(\lambda)$ of an eigenvalue $\lambda$ is the dimension $\dim(E_\lambda)$
>- In my own terms:  The geo is the number of linearly independent eigenvectors. 
>	- Remember that eigenvectors are the span of all the vectors represented by the free variables that solve $(A-\lambda_iI)(\vec v) = \vec 0$ 
>	- The number of linearly independent eigenvectors will be the # of free variables.
>- Note that $E_\lambda$ represents the set of eigenvectors for eigenvalue $\lambda$
>
>

>[!example] Example of finding $Geo(\lambda)$ and $Alg(\lambda)$
>![[Pasted image 20250329141152.png]]
>
>>[!explanation]
>>We solve for the eigenvalues. Fortunately this matrix is diagonal ( #todo what is "upper triangular"). We choose to solve for Geo(1). Note Alg(1) = 2 as 1 occurs twice in the number of roots. 
>>Geo means means finding the number of vectors in the set that the eigenvectors span. That is a whole lot of mumbo jumbo
>>Basically find the # eigenvectors. sheesh
>

>[!thm] Geometry $\leq$ Algebra
>Suppose $V$ is an $n$-dimensional real vector space.
>If $T:V\to V$ has a real eigenvalue $\lambda$ then $Geo(\lambda) \leq Alg(\lambda)$
>
>The proof is WACK. #todo
>>[!proof]
>>![[Pasted image 20250329144912.png]]
>


>[!thm] Independent Sets from Eigenspaces
>Suppose B is n-dimensional real vector space with distinct real eigenvalues $\lambda_1$ and $\lambda_2$. If $S_1 \subset E_{\lambda_1}$ and $\lambda_2$. If $S_2 \subset E_{\lambda_2}$ are sets of independent vectors, then $S_1 \cup S_2$ is independent, too.
>
>My way: For independent sets $S_1$ and $S_2$ that are subsets of the eigenvectors of eigenvalues, then the union of the sets is also independent.
>
>>[!example] Think of $E_{\lambda_1} = span({(1,0,0), (0,1,0)})$ and $E_{\lambda_2} = span(\set{(0,0,1)})$.
>>Then we could have $S_1 =\set{(2,0,0),(0,5,0)}$ and $S_2 =\set{(0,0,1)}$. Note that these are both lin indep! The union of two linear indep sets is also indep!
>
>>[!proof]
>>![[Pasted image 20250329145102.png]]

### Finally diagonalization

>[!thm] The General Case of Diagonalization
>![[Pasted image 20250329145846.png]]
>
>>[!defn] T is diagonalizable IFF
>>1. $\dim(V) = m_1 + m_2 + \dots + m_k$
>>2. $\dim(E_{\lambda_i}) = m_i$ (basically saying $geo(\lambda_i) = alg(\lambda_i)$)
>
>>[!explanation]


>[!example]- Show if a matrix is diagonalizable
>![[Pasted image 20250329151118.png]]
>Very easy stuff



>[!defn] Diagonalizable
> linear transformation $T:V\to V$ of a finite-dimensional vector space is diagonalizable if there is a basis $\alpha$ of V with eigenvectors of $T$

>[!thm] Characterization of Diagonalizable
>$T : V \to V$ is diagonalizable IFF $[T]_\alpha^\alpha$ is similar to a diagonal matrix.
>What the flip is "similar?" well
>
>>[!proof]
>>![[Pasted image 20250329152457.png]]


>[!thm] The "Nice" case of Diagonalization
>Suppose that V is an n-dimensional real vector space.
>If $T : V \to V$ has $n$ distinct real eigenvalues, then $T$ is diagonalizable.
>
>>[!proof]
>>![[Pasted image 20250329152634.png]]
>> #todo idek

![[Pasted image 20250329152740.png]]

#todo i dont think parker scanned every page maybe? idrk