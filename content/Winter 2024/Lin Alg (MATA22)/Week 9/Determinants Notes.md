>[!defn] Alternating and Multilinear
>![[Pasted image 20250318094133.png]]
>
>>[!explanation]  
>>For multilinear: Note that linear functions only take 1 argument. Multilinear functions take *many arguments*. 
>>$f(c, ax + by) = f(c, ax) + f(c, ay) = af(c,x) + bf(c,y)$


>[!thm] If $T : V^n \to \mathbb R$ is alternating and has two identical inputs, then it outputs zero.
>$$T(v_1, \dots, v_i, \dots, v_i, \dots, v_n)=0$$
>
>>[!proof] The easiest proof in all of existence
>>We have $T(v_1, \dots, v_i, \dots, v_i, \dots, v_n)$
>>$= -T(v_1, \dots, v_i, \dots, v_i, \dots, v_n)$ (by defn of alternating)
>>$\implies  T(v_1, \dots, v_i, \dots, v_i, \dots, v_n)=0$
>>
>>>[!note] This only applies for $x \in \mathbb R$ for $x = -x$ to hold; not complex numbers

>[!thm] Detecting Dependence
>![[Pasted image 20250318094640.png]]
>
>>[!proof]
>>Suppose $\set{v_1,\dots, v_n}$ is lin dep
>>We have $a_1v_1 + a_2v_2 + \dots + a_nv_n = \vec 0$ where some $a_i \neq \hat 0$.
>>We get $v_i = \frac{1}{a_i}(-a_1v_1 - \dots - a_nv_n)$ where $a_iv_i$ is missing
>>$= (-a_1/a_i)v_1 + \dots + (-a_n/a_i)v_n$
>>
>>This gives $T(v_1, \dots, v_i, \dots, v_n)$
>>$=T(v_1 \dots [(-a_1/a_i)v_1 + \dots + (-a_n/a_i)v_n ] \dots v_n)$ by subbing in the $i^{th}$ input
>$=(-a_1/a_i)T(v_1 \dots v_1 \dots v_n) + \dots + (-a_n/a_i)T(v_1 \dots v_n \dots v_n) = 0$ as each term has some repeated entries (the first one has two $v_1$'s for instance)
>
> #todo maybe go over again :( 

>[!thm] Lemma: A function that equals zero if the input vectors are linearly dependent.
>Consider a function $T : V^n \to W$ is alternating and multilinear and the set of input vectors are linearly dependent. Then the output will be $0$.
>
>>My way: IF a function $T : V^n \to W$ is alternating and multilinear and we pass in a set of linearly dependent vectors (or a matrix with lin. dep. rows) called $M$, then $T(M) = 0$
>
>>[!note] This function T is very close to being a $\det$ function as we define below!
>
>>[!proof]-
>>![[Pasted image 20250318111716.png]]
>>^lemma

#todo add the word "singular". a matrix that is not invertible is "singular" (i.e. det(M) = 0 means M is singular)

>[!defn] The Characterization of the $\det$ function
>Consider $M_{n\times n}$ as $(\mathbb R^n)^n$ where the rows of the matrix are thought of as vectors in $\mathbb R^n$. If $f : M_{n \times n}(\mathbb R) \to \mathbb R$ is
>1. Alternating
>2. Multilinear
>3. Satisfies $f(I) = 1$ (recall $I$ is the identity matrix: its diagonal is 1 and multiplying a matrix by it results in the same matrix)
>
>then $f = \det$

#todo does the arguments of det take rows? thats kinda weird... why not columns?

>[!thm] ✨ Determinants and Invertibility
>A matrix M is invertible iff $\det(M) \neq 0$
>
>>[!explanation] Since the determinant represents the change in area, if the change in area is 0, that means the transformation crushes the input down into a smaller dimension, so it couldn't possibly be surjective and therefore invertible.
>
>>[!proof] for now we can only do the $\Leftarrow$ direction by proving the contrapositive.
>>
>> Suppose M is not invertible.
>> Then we have a row of zeroes in the EF (otherwise we would be able to invert it)
>> Therefore one of the rows of M a linear combination of the other rows of M. 
>> Therefore the rows of M are dependent. 
>> So $\det(M) = 0$ by [[Determinants Notes#^lemma|the above lemma]] 


>[!thm] Diagonal Matricies
>A matrix $D = [d_{ij}] \in M_{n\times n}(\mathbb R)$ is <span class="emphasis">diagonal</span> if $d_{ij} = 0$ where $i \neq j$.
>(likewise, if $i=j, d_{ij} \neq 0$)
>The determinant of a diagonal matrix is $\det(D) = d_{11}d_{22}\dots d_{nn}$
>
>>[!proof]
>>Recall det is alternating and multilinear with $det(I) = 1$
>>We calculate 
>>$$\det \begin{bmatrix} 
d_{11} &0 &\dots  &0 \\ 
0 &d_{22} &\dots  &0 \\
\vdots &  & \ddots  &0  \\
0 & &   &d_{nn} \\
>>\end{bmatrix}$$
>>$$= d_{11}\det \begin{bmatrix} 
1 &0 &\dots  &0 \\ 
0 &d_{22} &\dots  &0 \\
\vdots &  & \ddots  &0  \\
0 & &   &d_{nn} \\
>>\end{bmatrix} \text{ as det is multilinear}$$
>>$$= d_{11}d_{22}\dots d_{nn} \det \begin{bmatrix} 
1 &0 &\dots  &0 \\ 
0 &1 &\dots  &0 \\
\vdots &  & \ddots  &0  \\
0 & &   &1 \\
>>\end{bmatrix}  $$
>>$$=d_{11}d_{22}\dots d_{nn} det(I)$$
>>and since $det(I) = 1$, you get your final answer!

>[!thm] Determinants and Row Operations
>![[Pasted image 20250318130002.png]]
>
>>[!proof]-
>>Pretty straightforward
>>![[Pasted image 20250318125842.png]]
#todo Parker's proof might be easier. If you want to see it you definitely have the ability of doing that.
e

>[!defn]
>![[Pasted image 20250318130406.png]]
>If you ever forget, try solving the det with (a,c) = (2,0) and (b, d) = (0, 3) knowing the det should be 6. 
>
>>[!proof]-
>>For (1) make sure to consider the case where $a = 0$ as the below doesn't really work for it i don't think
>>![[Pasted image 20250318130545.png]]

>[!defn] Minors (submatricies)
>![[Pasted image 20250318131242.png]]

>[!thm] The Recursive formula for $\det$
>That's a lot of formulae😔
>![[Pasted image 20250318131258.png]]
>> [!faq] Useful for deriving the determinant formulas as you'll see in the second example below

>[!example] Example #1
>![[Pasted image 20250318134841.png]]
> #todo use the example parker did in class; kielstra's is a bit vaguer 
> Also mention that sense det(M) != 0, the matrix is invertible. 
> 


>[!example] Example #2
>![[Pasted image 20250318135731.png]]
>
>For 2: The fact that the matrix is diagonal really makes solving the determinant wayyy easier.
>
>

>[!example] Isomorphisms and Parallelograms


>[!defn] Geometry and determinants
>![[Pasted image 20250318140617.png]]
>![[Pasted image 20250318140652.png]]
>- Note the expression $[0,1] \times [0,1]  = \set{(x, y) : x\in [0,1] \text{ and } y \in [0, 1]}$. weird i know. But it represents the <span class="emphasis">set of all points</span> in the first area. 
>- The ABSOLUTE value of the determinant would give the area of the basis vectors' formed parallelogram. 
>- This is used to show that a transformation is an isomorphism, too. (i.e. that area will tell you that)



### Change of base / coordinates
#todo ?