Yes. We are watching them all before I start lin alg. Yay.
Maybe i should do the same thing with mata37 eh?

I have a feeling I'm gonna love lin alg. 
# Chapter 1

## What is a vector?
- Physics student: Arrows in space. Length and direction is the only thing that matters. Position doesn't matter.
- CS students: "they're an ordered list of numbers". Kinda like a tuple where the first number is area, and thew second is cost; a 2d vector (length 2 array)
	- This is useful when visualizing models
- The mathematician wants to combine these def'ns!
- In our case, we will visualize vectors by having the origin at (0,0) and the arrow will go to some coordinate representing the *cs* representation of a vector (i.e. that ordered pair). 
	- The "coordinate" is the notation that shows how the arrow is formed as it goes from the origin to this arbitrary pair of numbers
	- The top number is the x component; the bottom number is the y component.
- Every vector is only associated with 1 pair of numbers.
- In math, the z axis goes up (pain!)


$$
 \begin{align}
    y &= \begin{bmatrix}
           x\\ y \\ z
         \end{bmatrix}
  \end{align}
  
$$
## Vector addition
- Vector addition represents movement. If $\vec v$ goes to the left, and $\vec w$ goes up, then $\vec v + \vec w$ should combine both of those individual movements.
- To evaluate $\vec{v} + \vec{w}$, you move the second vector to the tip of the first vector. The sum is the new vector formed from the origin to the tip of the second vector
	- This is basically the only time vectors "move" away from the origin
- To evaluate the sum with the components, you just add the x and y components respectively. Super easy.

## Vector multiplication
- Changing the length of a vector. A vector undergoes "scaling"
- $2\vec v$ represents a vector double the length of $\vec v$
- $-3\vec v$  is 3 times the vector $\vec v$ but in the opposite direction.
- Numbers that can scale a vector are called... scalers. Any number (including complex numbers apparently! google said that) is a scaler.
- Multiplication with components simply means multiplying each component by the scaler

# Chapter 2
- Each component of a vector is a scaler. But hmm, what does it scale? The basis vectors! Usually written as $\hat i. \hat j, \text{ and } \hat k$ for the unit vectors in the x, y, and z directions
- That means we can do something like this:
$$
\begin{align}
\vec v &= \begin{bmatrix} 
3\\ -2 \\
\end{bmatrix} = 3 \hat i + -2 \hat j \\
\\
\end{align}
$$
 - It is totally possible to have the basis vectors be anything other than the x and y axis-aligned ones they are defined as (so long as the two new basis vectors are not parallel; you'll see why soon!)
 - By having some scalers $a$ and $b$ with some non-parallel vectors $\vec v$ and $\vec w$, we can say that the *linear combination* of $a\vec v + b \vec w$ can represent *any* vector in 2D space. 
	 - We always implicitly choose our basis vectors to be i j k but it doesn't have to be that way.
 - The <span class="emphasis">Span</span> of vectors $\vec v$ and $\vec w$ is the set of their <span class="emphasis">linear combinations</span> ($a\vec v + b \vec w)$
	 - #todo How do you visualize span?
 - There are 3 cases:
	 - 2 vectors are not parallel = the vectors span 2D space
	 - 2 vectors that are parallel = span just 1 line
	 - 2 vectors that are 0 = span just the origin
 - Now for 3D space:
	 - Adding two vectors in 3D space can span a plane -- a plane that each linear combination's tip lies on.
	 - The span of 3 vectors added together is just like with 2 vectors, but 3 vectors instead.
	 - Note if that third vector is already on the span of the first 2 vectors, then you're stuck spanning a plane again. This is the same as saying the third vector is "linearly dependent"
 - A vector is <span class="emphasis">Linearly Dependent</span> on the span of a linear combination if it can be represented as a linear combination of the other 2 spanning vectors. 
	 - This means that if you have a linear combination and if one of the vectors is linearly dependent on the others, it will not unlock any new points in space (cuz it's in the span of the other vectors)
 - Opposite: If you add a vector and makes the span larger, then it is <span class="emphasis">Linearly Independent</span> 
 - So to properly define <span class="emphasis">Basis</span> of a vector space, it is a set of linearly independent vectors that span the full space. 

# Chapter 3
## Transformations
- A linear transformation will take in vector inputs and spit out some other vectors where
	1. Lines remain lines (nothing should be curved). A set of vectors that make a line *will* stay a line after transformations are applied.
	2. The origin must stay fixed in place and not move. So, it can't just be "all vectors y value + 2" as that would move the origin point (0,0) 
		1. #todo Is that the right way to think abt it? (0,0) should stay (0,0)?  
	- "Transformation" is just a fancy word for "function". It's specified that it's a transformation since it has a convenient way to be visualized as well; it describes movement. 
	- Some examples are simple rotations and squishes.
- To describe linear transformations, we only need to describe how the basis vectors move; the rest will follow the same rules:
> Let's say we have $\vec v = -1 \hat i + 2 \hat j$. Then the *transformed* vector will simply be $\text{Transformed }\vec v = -1 \cdot \text{Transformed } \hat i + 2 \cdot \text{Transformed } \hat j$. In our case, transformed $\hat i = [1,2]$ and transformed $\hat j = [3, 0]$, so transformed $\vec v = [5,2]$
> 
> Now let's generalize. Instead of -1 and 2 as the initial point, we will have x and y. Then, the point of any transformed vector will be $x\cdot[1, -2] + y\cdot[3, 0]$. All in all, we have:
> 
> $$
 \begin{align}
\text{Transformed } \vec v &= \begin{bmatrix} 
1x + 3y\\ -2x + 0y \\
\end{bmatrix}
\end{align}
$$
> So with any x and y, we will get the transformed x and y with this formula!
> The "matrix" is a fancy package of the transformed $\hat i$ and $\hat j$.  Our matrix would look like this:
> $$
\begin{bmatrix}  
3 & 2\\  
-2 & 1  
\end{bmatrix}
$$
- So, the <span class="emphasis">Matrix</span> simply packages the info needed to linearly transform a vector given the transformed basis vectors.
- Let's get even more general. If the below is our transformation:
$$\begin{bmatrix}  
a & b\\  
c & d  
\end{bmatrix}
$$
Then the transformation of $[a, b]$ would look like this:
$$
\begin{bmatrix} a & b \\ c & d \end{bmatrix}
\begin{bmatrix} x \\ y \end{bmatrix}
= x\begin{bmatrix}  
a\\   
c  
\end{bmatrix}
+ y \begin{bmatrix} b \\ d
\end{bmatrix} = \begin{bmatrix} ax + by \\
cx + dy
\end{bmatrix}
$$
- That first expression kind of treats the matrix like a function and it's "passing" the vector $[x, y]$
- Remember: $[a, c]$ is where the first basis vector lands, and $[b, d]$ is where the second one lands.  

 ## Visualizing matrix transformations
 - If the two transformed vectors in the matrix are linearly dependent, then you first move $\hat i$ such that all grid lines stay parallel, and then do the same for $\hat j$. He doesn't go into more detail than that.
 - However, in the case that they *aren't* linearly dependent, then they will squish 2d space onto the line that the two vectors sit on. This line is a 1D span.
![[Pasted image 20250102202731.png|600]]


# Chapter 4
## Compositions
- The composition of two linear transformations is... a linear transformation. 
- When applying a composition of a linear transformation, the final transformation will always be the same. Therefore, we should be able to compute what this composition is.
![[Pasted image 20250102203148.png]]
- And we can! With matrix multiplication, we can say that the composition of two matrixes is nothing more than the product of them!
![[Pasted image 20250102203349.png]]
- Note that rotation is applied first, and shear is applied second. This is because of function notation. if g(x) was rotation, and f(x) was sheer, then f(g(x)) would be us applying rotation  first, and then sheer. So, read matrix multiplication from left to right\
![[Pasted image 20250102203523.png]]

- To calculate the product, it is very simple
![[Pasted image 20250102203748.png]]
Simply note that the matrix $M_1$ already contains the *first* transformed $\hat i$ and $\hat j$. That is, $[e, g]$ and $[f, h]$. To find the transformation of $M_2$ applied onto those two intermediate basis vectors, we just calculate the matrix transformation! That's how that first column was calculated. The second one is obvious. 

- The order of matrices matter. Doing one composition will not be the same as another composition. It is SO not like regular product calculations.
- Okay this is silly: "Proving associativity of matrices"
	- To show that $(AB)C = A(BC)$, it is sufficient to *just say* that (AB)C is the same as C being applied to B, then A. And for A(BC), it's the same C being applied to B, then to A. Wow, those are the same thing in english.

# Chapter 5
## 3D transformations
 ![[Pasted image 20250102205033.png]]
 - Almost the same. Those columns represent the transformed basis vectors. That means, if you sum x with the transformed $\hat i$ (and do that for y and z) you will get the same matrix formula thing albeit with more numbers 
 ![[Pasted image 20250102205205.png]]
 - For compositions it's almost the same too. You first use the given transformations from the right matrix, and then apply the intermediate basis vectors into the left one. You'll have a good time crunching the numbers but it's not so bad. 
![[Pasted image 20250102205326.png]]
- I evaluated it on paper 
- #todo REALLY understand what it means for vectors to undergo those transformations above. If i were to explain it to someone right now, I would fail!
- Okay i got it now. 
- Let's look at it one column at a time
	- The first column is the intermediately transformed basis vector. We want to apply *another* transform onto it using the left matrix. We already know how to do that. You just multiply the left matrix's column with the respective scalar component value and add em up. That'll give a *new* vector that is the final transformed basis vector.
	- You repeat that for the other 2. That is all there is to it! 


# Chapter 6
- The determinant of a transformation is the factor by which a linear transformation changes any area.
	- It evaluates to the magnitude change in area of any  "unit square" before and after a transformation.
	- Any shape that is transformed but isn't a square can still be approximated with squares. So, the scalar still holds the same meaning with abstract shapes
	- ![[Pasted image 20250103201634.png]]
- The notation looks like this
$$
\det \left(    \begin{bmatrix} 4 & 2\\
2 & 1 
\end{bmatrix} \right) = 4 - 4 = 0
$$
- Determinants of 0 imply that the transformation squishes the space down onto a line. Notice this occurs when both columns are dependent. 
- Determinants can also be negative. This describes when an area is flipped. That is, if you had a paper, a -1 determinant would be the opposite side of that paper. 
	- Normally $\hat j$ is left of $\hat i$, but a det < 0 would mean $\hat j$ is right of $\hat i$ instead. He says "the orientation of space has been inverted". 
	- This similarly applies to 3D but with volume instead. A 1x1x1 cube will be transformed into another parallelepiped. This implies the determinant of a transformation is the volume of the parallelepiped the cube turns into. 
		- Use your right hand like this
		- ![[Pasted image 20250103203418.png]]
		- If you can still use your right hand to describe the transformed basis vectors, well then orientation has not changed. If you got to use your left hand... well orientated did change and thus the det is negative
- Calculating time!1
For 2D matrices:
$$
det \left( \begin{bmatrix} a & b\\
c & d
\end{bmatrix} \right)
=
ad - bc
$$
- This makes sense as, if b and c are 0, then this is the same as simply scaling the length and width. If only b or c is not 0, then it will just be a parallelogram. If both b and c are not 0, well there is a wacky explanation i'm gonna ignore. ![[Pasted image 20250103203724.png]]

For 3D matrices:
![[Pasted image 20250103203856.png|600]]



# Eigenvalues / eigenvectors
- <span class="emphasis">Eigenvectors</span>
	- Vectors that are only squashed or stretched after a linear transformation
	- For instance, the transformation $\begin{bmatrix} 3 & 1 \\ 0 & 2 \end{bmatrix}$ would have an eigenvector of $(0,1)$ as it, the basis vector, is simply stretched by a factor of 3.
	- The <span class="emphasis">Eigenvalue</span> is the magnitude an eigenvector is stretched after said transformation
- One application is rotation: The eigenvector acts as the "axis of rotation" for the linear transformation that is *rotation*
	- That's pretty neat! Also note the eigenvalue would be 1 as rotation shouldn't stretch anything
- I am 99% sure he implied eigenvalues can represent transformations
- To solve for eigenvectors/eigenvalues, we solve for $\lambda$ and $\vec v$ in the below expression
$$A\vec v = (\lambda \cdot I) \vec v $$
- Any such lambda or v that makes that expression true are valid eigenvalues/vectors!
	- The I is the identity matrix (1's down the diagonal). 
- We can rearrange the expression to 
$$(A-\lambda\cdot I)\vec v = \vec 0$$
![[Pasted image 20250324084547.png|300]]
- (Of course we want a non-zero $\vec v$ solution)
- Recall the only for the product of a matrix with a non-zero vector to equal $\vec 0$ is if $\det(A - \lambda\cdot I) = 0$
	- Reads as "we want to find the lambdas that will make the whole transformation expression squish the vector space into a line"
	- From there, now that we know the lambda values, we can solve for particular eigenvectors!
##### Solving for eigenvalues
- We essentially solve for $\det \left(\begin{bmatrix} a & b \\ c & d \end{bmatrix} - \lambda\cdot I \right)  = \det\begin{bmatrix} a-\lambda & b \\ c & d-\lambda \end{bmatrix} = 0$
	- Why? Well again, we want the lambda that shrinks the transformation down to a line.
	- Then with the eigenvalues you solved for, plug it into the original equation and solve for the $\vec v$ eigenvectors
	- The expression would look like $(a-\lambda)(d-\lambda) - (cd) = 0$; a quadratic 
		- Usually $cd$ is zeroed out
##### But what if no eigenvalues?
- Think of rotation in a 2D plane. You won't be able to solve for a real-numbered solution
##### But what if every vector is an eigenvector?
- Think of scaling out by 2x on both basis, like $\begin{bmatrix} 2 & 0 \\ 0 & 2 \end{bmatrix}$.  There is only 1 eigenvalue, $\lambda = 2$ but every vector has it! 
##### Eigenbasis
- If the new transformation is a diagonal matrix, then each row represents a stretch on the [[Standard Basis]] vectors. As such, each row is a eigenbasis.
##### Change of Basis
- We can use eigenvectors as the new basis of a transformation and have some special things come out of it too!
- [[Change of Basis and Coordinates#^143a46|Here I explained change of basis briefly]]
- Essentially you do these steps:
	- Use the eigenvectors to form a new matrix
	- Use that as the "change of basis matrix" to represent the old matrix in terms of the new basis 
	- Profit, because that outputted matrix will always be diagonal! Neat property of eigenvectors
	- ![[Pasted image 20250324091421.png]]

