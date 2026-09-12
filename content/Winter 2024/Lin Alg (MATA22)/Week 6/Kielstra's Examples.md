https://www.youtube.com/watch?v=zH1wEFadk9w&list=PLzG8PXr3gJompZYgR4c3EZ_Wla5CsUBuY&index=1

# Getting the basis  of a kernel
Let $V = R^3$ and $W = R^2$. Suppose $T(x_1, x_2, x_3) = (3x_1 + 2x_2 - x_3, x_1 + x_2 + x_3)$
a) Create a basis for the kernel of T.
Fix the basis of W to be $\set{e_1, e_2}$ (that is the [[Standard Basis]])

Note $T(1,0,0) = (3,2) = 3e_1 + 2e_2 \in W$
$T(0,1,0) = (2, 1) = 2e_1 + 1e_2 \in W$
$T(0,0,1) = (-1, 1)  = -1e_1 + 1e_2 \in W$

So $$[T]_{\set{e_1, e_2, e_3}}^{\set{e_1,e_2}} = \begin{bmatrix} 3 & 2 & -1\\ 2 & 1 & 1\end{bmatrix} $$
yay matrix representation.

To find the kernel, we find the basic solutions of $[T]_\alpha^\beta [v]_\alpha = 0$ where $v= (a,b,c) \in R^3 = V$

It's kinda like $T(av_1 + bv_2 + cv_3) = 0$. We wanna find what a,b,c results in the transformation giving 0 as the output.

we take the linear combination $a[T(v_1)]_\beta + b[T(v_2)]_\beta  =c[T(v_3)]_\beta =  a[3\; 1] + b[2\; 1] + c[-1\;  1] = [0\; 0]$
The above is a linear combination of every possible output of W.

Whatever values a, b, c result in is what the coefficients of the bases vectors of W need to be 


Results in 
$$ \left[\begin{array}{ccc|c} 3 & 2 & -1 & 0\\ 1 & 1 & 1 & 0 
\end{array}\right]
$$
Then you get it to [[Row Echelon Form]]  form
$$
\left[\begin{array}{ccc|c} 1 & 0 & -3 & 0\\ 0 & 1 & 4 & 0 
\end{array}\right]
$$
Gives us the equivalent system 
$$
\begin{cases} 
a - 3c = 0  \\
b + 4c = 0
\end{cases}
$$
Since c is the free variable, we let $c = t \in R$ be some real number. 
This gives $a = 3t$ and $b = -4t$

Sooo (a, b, c) = (3t - 4t, t) = t(3,-4,1)
$(a,b,c) = span(\set{3,-4,1})$

We can confirm the answer by showing that T(3, -4, 3) = (9 - 8 - 1, 3 - 4 + 1) = (0, 0). Yippee! It results in 0.

To turn this into the kernel of T, we write what the vector (a,b,c) represents w.r.t to the original basis.
$3 \cdot v_1 + (-4)\cdot v_2 + 1\cdot v_3 = 3(1,0,0) - 4(0,1,0) + 1(0,0,1)$
= (3, -4, 1) in terms of the standard basis.
So $ker(T) = span(\set{(3, -4, 1)})$

So the dimension of the kernel is 1 (cuz there is only 1 vector in the span, dummy)


> Okay so here are the steps to find le kernel.
> 1. We get the transformation matrix.
> 2. We take a linear combination of every v transformed (represented by the basis of course) and equal it to 0 (we want the a, b, cs that result in the zero vector)
> 3. Get to [[Row Echelon Form]] and then the equivalent system.
> 4. Find what the a, b, c's are all equal to. Then show what set spans them.
> 	1. I.e. if $(a,b,c) = t(1,2,3) + w(4,5,6)$, then $(a,b,c) = span({(1,2,3), (4,5,6)})$
> 5. Rewrite what $(a,b,c)$ represents w.r.t to the original basis. I.e. we find $[(a,b,c)]_\beta$
> 6. We get that, and that will be the solution i terms of the standard basis. 
> 7. So $ker(T)$ = that new span.
> 8. If you want to confirm the answer is right, simply plug in your answer into the transformation and see if you get a zero vector:
> 
> this is pretty ugly. more examples plz

> Keilstra's way of explaining it
> 1. Solve for $[T]_\alpha^\beta$
> 2. Set up $[ [T]_\alpha^\beta \Big| [0]_\beta]$
> 3. The solution space represents the $ker(T)$ using coordinate vectors based on basis $\alpha$
> 	1. Solve for a *basis* of the solution space.
> 	2. Turn each vector of the basis to the corresponding vector in V,  thus creating a basis for the kernel wr.t. $\alpha$ 
> 4. Create a basis span column space $[T]_\alpha^\beta$.  This represents Image(T) using coordinate vectors with basis vectors $\beta$
> 	1. Create the basis
> 	2. Convert the vectors to vectors in $W$ (via $\beta$)
>

# Getting a basis for the image of T.
$span(\set{T(v_1) , T(v_2), T(v_3)})$

> Any vector corresponding with a free variable helps us create a basis. 
> All the basic vectors help with the kernel

(column space) col space = $span(\set{ [3\; 1], [2\; 1] })$

$Image(T) = span(\set{ (3,1), (2,1) } )$
- These vectors are the free variables written in terms of $\beta$ ??

#todo idk what a colspace is but shouldnt the span for the image be 

$span(\set{[T(v_1)]_\beta,[T(v_2)]_\beta})$
and then we get that back to a bunch of vectors? We just use the 
![[Pasted image 20250306214250.png]]





# Example #2 

V = R^2 and W = R^2 and T(x,y) = (x-y, 0)
This time we are GIVEN the bases. THANK YOU.
$\alpha = \set{(2,1),(1,2)}$
$\beta = \set{(1,1),(1,2)}$
$$
[T]_\alpha^\beta = \begin{bmatrix} 2 & -2\\  -1 & 1 \end{bmatrix}
$$


a) Find the big matrix.

We throw in the bases into the transformation:
T(2,1) = (1,0) = 2(1,1) - 1(1,2) 
T(1,2) = (-1, 0) = -2(1,1) + 1(1,2)

>[!question]- Keilstra shows way more work than me. Could be important for a test scenerio
![[Pasted image 20250225131417.png]]

So the matrix is
#### Now create a basis for ker(T)

We doing step 2 now

$$[[T]_\alpha^\beta \big| [0]_\beta= $$
![[Pasted image 20250225131702.png]]- We rewrite it into echelon form.
The basic variable is $a$ and our free variable is $b$
- Remember, the pivots are basis!!
- Let $b = t \in \mathbb R$
- Then $a =t$
let v be a solution vector. 
Then v = (a, b) = (t,t) = t(1,1)
- If we want to span our solution space This t(1,1) represents 
- Our solution space = the span of the vectors we find yeah
- solution space = $span(\set{1,1} )$
- Each vector represents the nullspace. But each vector is  in the *coordinates representation* (i.e. you multipy the coordinate with a bases to get the actual vector!).
- To find the kernel of T is, we need to convert these vectors using the basis of $\alpha$.
This: $$[v]_\alpha = [1\;1]_\alpha$$ is what we currently have. But we want $v$ alone, by itself. To do that, he did $v = 1(2,1) + 1(1,2) = (3,3)$. Idrk
Anyway our basis for ker(T) is the set $\set{(3,3)}$. Nullity(T) = 1.

#### Create a basis for the image(T)
(step 4)
- We remove all the vectors that correspond to our basic variables.
Our free variable "b" corresponds to the vector $(2,1)$

So $span(\set{  (2,-1), (-2,1) } ) = span(\set{(2,1)})$ as $(2,-1)$ is the vector corresponding to our basic variables for the [[Homogeneous Systems]] of equation $[T]_\alpha^\beta][v]_\alpha = [0 \; 0]_\beta$ OR $a[T(v_1)]_\alpha + b[T(v_2)]_\beta = [0 \; 0]_\beta$

We turn $v = 2(1,1) + (-1)(1,2) = (1,0)$
So a basis for $Image(T) = \set{(1,0)}$


Remember: kernal is a subset of V; image is a subset of W