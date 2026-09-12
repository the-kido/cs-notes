Kernels and Images are two "naturally occurring subspaces". Usually they are easy to validate but teach some important thingys!

>[!defn] Kernel
>The kernel (nullspace) of a linear map $T : V \to W$ is:
>$$ker(T) = \set{v \in V : T(\vec v) = 0_W}$$
>
>>[!explanation] 
>>It is a set that contains every $v$ that when transformed results in the zero vector.
>>The kernel is a subspace of V  
>>
>>>The kernel often represents the solution set of a system of equations, in that the kernel holds every vector / solution that, if passed into the system / transformation matrix, results in a $\vec 0$
>>

>[!thm] The Kernal (or nullspace) is a subspace
>For any linear map $T : V \to W$, then $\ker(T)$ is a subspace of V
>
>
>>[!proof]
>>We apply the subspace test
>>i.e.. we gotta check that it is non-empty and that $cx + y \in W$ for any $x, y \in ker(V)$ and $c \in F$.
>>1. Non-empty: 
>>
>>Note that $\vec 0_v\in \ker(T)$ and that $T(0_v) = 0_W$ for any T transformation. ( #todo by that one theorem. plz find)
>>
>>$T(c\vec x + \vec y) = cT(\vec x) + T(\vec y)$
>>$= 0_w + 0_w \in W$
>>
>>So clearly the kernel is a subspace of V

>[!example] Find the kernals of the following transformations.
>1. $T_1 : R^3 \to R^3$ projection to z-axis.
> #todo lowkey don't really get what a projection here is. Everything gets squished into the z-axis? That's it?
>
>In coordinates, $T_1(x,y,z) = (0,0,z)$.
>Clearly the x and y coordinates aren't very useful (they are always zeroed out!) so the kernel seems to be the entirety of $(x,y,0)$, or the $x,y$ plane.
>
>
>1. $T_2 : R^2 \to R^2$ rotation by $\theta = \pi/2$
> 
> In coordinates, $T_2(x, y) = (x\cdot cos(\pi/2) - y \cdot \sin(\pi/2),  y\cdot cos(\pi/2) + x \cdot sin(\pi/2)  ) = (-y, x)$
>   
> Kernel seems to just be the zero vector. Nothing else. Especially obvious by the drawing.
> This is a "trivial kernel"
> 
> Rotations are invertible (rotate 90 degrees, then go 90 degrees the other way). Projections are not invertible. The bottom example has a trivial kernel where the top does not. #todo 
> 
> 

# Images
>[!defn] Image
>The image of a linear map $T : V \to W$ is:
>$$image(T) = \set{w \in W : w = T(v) \text{ for some } v \in V}$$
>
>It's basically every output of the linear transformation


>[!thm] The Image is a Subspace
>For any linear map $T : V \to W$, $image(T)$ is a subspace of $W$ (NOT V)
>
>>[!proof]
>>We apply the subspace test. 
>>First note that $image(T)$ is not empty since $T(\vec 0_V) = 0_w \in image(T)$ (since every linear map maps the zero vector)
>>
>>Second, for any two vectors $w_1, w_2 \in image(T)$ and $c \in F$, we have
>>Let $w_1 = T(v_1)$ and $w_2 = T(v_2)$
>>
>>We then have $cw_1 + w_2 = cT(v_1) + T(v_2)$
>>$= T(cv_1 + v_2) \in image(T)$ as image(T) contains all outputs of T
>>
>>So yeah by characterization of subspaces, image(T) is a subspace of W
>>

# New things
>[!thm] Kernels in Coordinates
>Kernels are homogeneous linear systems.
>$$T(\vec x) = 0 \Leftrightarrow [T]_\alpha^\beta[\vec x]_a = [\vec 0]_\beta$$
>
>We somehow already proved this. Idk what question in A4 it was though.
>
>This is more relevant for CS, considering the right side is easier to compute than the left side (the left side is very abstract; the right side are grids of numbers)

>[!thm] Image and Spans
>If $\set{v_1, \dots, v_n}$ is a spanning set for $V$ and $T : V \to W$ is a linear transformation, then $\set{T(v_1), \dots, T(v_n)}$ is a spanning set for $image(T)$
>
>This basically means all inputs spans the image (?) #todo
>
>>[!proof]
> >We WTS $span\set{T(v_1), \dots, T(v_n)} = Image(T)$
> >
> >We do $\subseteq$ direction first.
> >Pick $\vec w \in Span\set{T(v_1), \dots, T(v_n)}$
> >$w = a_1T(v_1) + a2T(v_2) + \dots + a_nT(v_n)$ by definition of span
> >$= T(a_1v_1 + \dots + a_nv_n)$ by linearity
> >$\in Image(T)$ by definition of image
> >
> >$\supseteq$ Pick $\vec w \in Image(T)$
> >$\vec w = T(\vec v)$ By definition of image
> >$= T(a_1v_1 + a_2v_2 + \dots a_nv_n)$ by representing it by the spanning set of V
> >LOL it's just the other thing in the opposite direction. Beautiful.
	

>[!thm] Image and Columns ("Procedure 1")
>Fix bases $\alpha = \set{v_1, \dots, v_n}$ and $\beta = \set{w_1, \dots, w_k}$ of V and W.
>The image image(T) is spanned by the columns of $[T]_\alpha^\beta$ which contain [[Basic and Free Variables|basic variables]] of the [[Homogeneous Systems|homogeneous system]] $[T]_\alpha^\beta[\vec v]_\alpha =\vec 0$
>
>>[!explanation] The free variables are what make up the kernel. 
 
My little algorithm:
1. Figure out what the basis vectors are ([[Standard Basis]] is good)
2. We find the $[T]_\alpha^\beta$ matrix by plugging in the basis vectors into the transformation.
3. Then we find the basic solutions of $[T]_\alpha^\beta[\vec v]_\alpha =\vec 0$
	1. Why? 

>[!example] Find a basis!
>Let D be the differentiation function. Find a basis for the image of $D : P_3(R) \to P_2(R)$
>
>We fix bases of $P_3(R) = span\set{1, x, x^2, x^3} = span(\alpha)$ and $P_2(R) = span\set{1, x, x^2} = span(\beta)$
>
>1. Find the matrix $[D]_\alpha^\beta$.
>$D(1) = 0 + 0 + 0$
>$D(x) = 1 + 0 + 0$
>$D(x^2) = 0 + 2x + 0$
>$D(x^3) = 0 + 0 + 3x^2$
>(note the output only has values inside of $P_2(R)$ so there is no 4th $0$).
>
>This gives $$[D]_\alpha^\beta =  \begin{bmatrix}0 & 1 & 0 & 0 \\ 0 & 0 & 2 & 0 \\ 0 & 0 & 0 & 3 \end{bmatrix} $$
>
>
>Find the basic solutions of $[D]_\alpha^\beta [v]_\alpha = 0$
> #todo I do not like this skip. Perhaps I will look at how tom does them!
> and then parker skips to the answer of $\set{D(x), D(x^2), D(x^3)} = \set{1, 2x, 3x^2}$ as the basis that spans the image. (why he shows that first part IDK)
>

>[!example] What's the kernel of the above example?
>Well the constant of the differentiation is always set to 0 and cannot be reversed. However the other terms can be reversed.
>- The free variables relate to the kernel; the basic variables relate to the image. THATS KINDA COOL.


>[!thm] ✨The Rank-Nullity Theorem (The Dimension Theorem)
>If V and W are finite dimensional vector spaces (if it was infinite I couldn't imagine finding a constant), and $T : V \to W$ is a linear transformation, then 
>$$\dim(V) = \dim(\ker\; T) + \dim(image\; T)$$
>
>>[!explanation] The dim of ker is the nullity; the dim of image is the rank


>[!thm] Bases for Image and Kernel ("Procedure 2")
>If V and W are finite dimensional vector spaces and dim(V) = n, then there is a basis
>$$V = span \set{u_1, \dots, u_k, v_{k+1}, \dots, v_n} $$
>such that $\ker(T) = span\set{u_1, \dots, u_k}$ and $image(T) = span \set{T(v_{k+1}), \dots, T(v_k))}$
>
>(This one is better than procedure 1 cuz it gives the proof of the Rank-Nullity theorem)
>
>
>>[!proof] 
>>We pick a basis for $ker(T) = \set{u_1, \dots, u_k}$ (and then extend it)
>>We know that V is finite dimensional and $dim(V) = n$, so we can extend to a basis:
>>$V = span(u_1, u_2, \dots, u_k, v_{k+1}, \dots, v_n)$
>>(Now we gotta show that second half is part of the image; i.e. we show $image(T) = span \set{T(v_{k+1}, \dots, T(v_k))}$ )
>>
>>$\subseteq$ (~~trivial~~ *straightforward*)
>>Pick $w \in Span\set{T(v_{k+1}, \dots, T(v_k))}$. We have 
>>$\vec w = a_{k+1}T(v_{k+1}) + \dots + a_{n}T(v_{n})$ (def'n of span)
>>$=T(a_{k+1}v_{k+1}) + \dots + T(a_nv_n)$ (by linearity)
>>$=T(a_{k+1}v_{k+1} + \dots + a_nv_n)$ (by linearity)
>>$\in image(T)$ (as all outputs of T are in $image(T)$)
>>
>>$\supseteq$ (tricky) (we use the fact that the kernel sends stuff away)
>>Let $w \in Image(T)$
>>Then $w = T(v)$
>>$=T(a_1u_1 + \dots + a_ku_k + a_{k+1}v_{k+1} + \dots + a_kv_k)$ (by representing v by its bases)
>>(Note that one half of this thing is the kernel from our above statement)
>>$=a_1T(u_1) + \dots + a_kT(u_k) + \dots + a_{k+1}T(v_{})$ (can't be asked to write it all out)
>>$=0 + \dots + 0 + a_{k+1}T(v_{k+1}) +  \dots + a_{n}T(v_n)$ (by the fact that the first half are part of the kernel: $T(u_i) = \vec 0$)
>>$\in span \set{T(v_{k+1}, \dots, T(v_k))}$
>>
>>So yeah $image(T) = span \set{T(v_{k+1}, \dots, T(v_k))}$ for sure
>>
>>With that, we then show the set $\set{T(v_{k+1}, \dots, T(v_k))}$ is linearly independent (ig we're showing the set is a basis? OH TO GET THE SIZE. bruhh)
>>
>>For sake of contradiction suppose $0 = a_{k+1}T(k+1) + \dots a_nT(v_n)$ where it has some $a_i \neq 0$
>>This gives $\vec 0 =T(\vec 0) = T(a_{k+1}v_{k+1} + \dots + a_nv_n)$ since $\vec 0 = T(\vec 0)$.
>>Therefore $a_{k+1}v_{k+1} + \dots + a_nv_n \in \ker(T)$
>>We already have a basis for $\ker(T)$ too, so 
>>$a_{k+1}v_{k+1} + \dots + a_nv_n = b_1u_1 + \dots + b_ku_k + 0 + \dots + 0$ (by the basis of $ker(T)$. Note all $a_i = 0$)
>>Since that second half is unique (why?), there is a non-unique representation in the basis $\Rightarrow\Leftarrow$ so it is linearly independent. 
>>
>> #todo we never finished this.... 

# calculation times

>[!example] Rank-Nullity! Example #1: $T : R^3 \to R^2$ Projection to z-axis.
>aka $T(x,y,z) = (0,0,z)$
>
>We know from before that the kernel is $\set{(x,y,0) :x, y \in R}$ and the image is just $(0,0,z)$ for all $z$.
>
>$dim(R^3) = 3$
>$dim(ker(T)) + dim(image(T)) = 2 + 1 = 3$
>The 2 comes from the plane. The 1 comes from the z-axis.

>[!example] Example #2:  $T : R^3 \to R^2$ where $T(x,y) = (-y, x)$
>$dim(R^2) = 2$
>dim(ker(T)) = 0 (there are no elements in the kernal besides 1 singular point)
>dim(image(T)) = 2 (it contains the whole plane)
>So again the Rank-Nullity theorem comes ontop

