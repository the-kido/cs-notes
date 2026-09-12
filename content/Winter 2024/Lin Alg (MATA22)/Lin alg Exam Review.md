✨ $R^n$ is finite dimensional!
✨To prove subspace, show non-empty and if $x, y \in V$, then $cx+y \in V$
- for non-empty, ALWAYS show the 0 vector is in there
✨$T(v) = \lambda \vec v$ means v is an eigenvector for T with an eigenvalue of $\lambda$
- I mention this cuz $p(A)\vec v = P(\lambda)\vec v$ means v is an eigenvector of $p(A)$ with an eigenvalue of $p(\lambda)$


[[Spans]]
- Spans are spaces

[[Sum Of Substructures]]
- For $x, y \in A, B$, we have that $x + y \in A + B$
- Sums of subspaces thm
- Sums of subspaces part 2

## Week 3
[[Linear Systems]]
- A bunch of equations of a certain form. We usually say there are `n` equations / rows with `k` variables

[[Representing a Subspace as a Span (Back substitution)]]
- Easy; we've been doing it several times now!

[[Row Echelon Form]]
1. Each row starts with 1
2. where each 1 is, there should be nothing else in that column.
3. Each row makes it form a staircase

- There is also the elimination algorithm, which is pretty neato!
- Thm: Every linear system has a REF

[[Solving Linear Systems]]
All kinds of solutions:
1. No solution (inconsistent)
2. 1 solution (independent)
3. infinite solutions (dependent -- on the free variables!)

Types of questions
1. "show a set of vectors is lin dep / indep or not"
2. "show a vector is in a span"
3. "represent a set of vectors as a span"

[[Homogeneous Systems]]
- The constants for every linear system is 0. i.e. the row in REF is all 0's
- Always have [[Trivial Solutions]]
- Thm: if the # of equations < # of variables, then we have a non-trivial solution. 

[[Augmented Matrices]]
- A matrix with another column that represents several linear systems
- You can do row operations on them; they preserve *the solution sets of linear systems*. It doesn't preserve everything (the only example so far being eigenvalues -- those get messed up after row operations!)

## Week 4
[[01-29]]
- S is a basis of V if V is uniquely represented by Span(S)
	- #todo is there a question that uses this? It might be useful but i cant think of how i would be
- Bases are not unique

[[Bases and Dimensions (textbook)]]
- A subset of V, S is a basis if S is lin indep and span(S) = V
- We also have the standard basis and those are cool.
	- Note that $P_n(\mathbb R)$ which is the polynomial space has infinite elements in its basis. 
- Proving sets are bases
	1. Show linear independence
	2. Show spanning: i.e. we show $a_1\vec \alpha_1 + a_2\vec \alpha_2 = \vec b$ for all b. Of course you split into components and solve the linear systems.
	3. #todo Do an example or two
- Thm: Extending an independent set to a basis:
	- Any linearly independent set can be extendend to a basis by adding more linearly independent vectors
- Thm: Linear Independence Extension Lemma
	- The set $S\cup \set{x}$ is linearly dependent if S is and $x \in V$ but $x \not \in S$
	- #todo i hate this theorem idk why
- Thm:The dim bound
	- If we have a spanning set T (of size k) and a linearly independent set S of size $n$. THEN, $n \leq k$
	- "no possible basis (T) can be smaller than a linearly independent set"
- Thm: basis are the same size
	- The size of a basis is unique!
- A dimension is the # of elements in a basis of a vector space.
- A finite dimensional vector space has a finite # of elements in any basis
- Thm: independent sets of the right size are bases
	- I.e. if S is independent and $|S| = n = dim(V)$, then S spans V *and* is therefore a basis of V
	- #todo Try to prove this my memory. it is very doable, quite easy, and good practice

[[Solving Non-Homogeneous Systems]]
- So basically you solve the homogeneous part *and* find a particular solution. The sum of those solutions will be the solution set.
	- For instance, if for any (x,y,z) we get that (x,y,z) = (-2x, 2y -1x) with a particular solution of (5,10,1), then the solution set is $\set{(5,10,1)} \cup \vec V_n$ where $\vec V_n \in \set{x(-2,0,-1) + y(0, 2, 0) : x, y \in \mathbb R}$
	- (the above could also be a span equivalently)
	- #todo these notes seem very underdeveloped
[[Spanning Sets]]
- A spanning set is a set that spans a vector space.
- And that set happens to be a basis if it is also lin indep
- A basis is a "minimal spanning set"
- For the proof it's lin indep, just do the forward direction n show the $a_i's$ are all 0. 
$\newcommand{\norm}[1]{\left\lVert#1\right\rVert}$

## Week 5
[[Direct Sum]]
- A sum $W_1 + W_2$ is a direct sum if every $v = w_1 + w_2$ is unique. 
	- For instance, if $W_1 = W_2 = R^2$ and $V = R^2$, then $W_1 + W_2$ is NOT a direct sum since $(2,0,0) = (1,0,0) + (1,0,0)$ *and* $(2,0,0) = (0,0,0) + (2,0,0)$ or something like that.
	- Essentially this usually only checks out if $W_1 \cap W_2 = \emptyset$
- #todo REALLY practice this and refer to tt2 for that one proof question i failed

[[Linear Transformations notes]]
- A linear transformation T preserves distribution of vector addition and scalar multiplication 
	- It's sufficient to show that $cT(x) + T(y) = T(cx +y)$ to show linearity!
- $\vec 0_V$ represents the zero vector of the vector space V
- Thm: Linear transformations preserve additive identities
	- So $T(\vec 0_V) = 0_W$
- Special transformations $Z$ and $I$
	- Z = zero transformation. Sends any input to zero. 
	- I = identity transformation. Input is returned as the output. Therefore $I:V\to V$ all the time
- Inner product:
	- $\langle u, v \rangle$
	- $u, v \in V$. You just multiply each component and add em together.
	- The norm / length between two vectors is also $|| \vec v || = \sqrt{\langle \vec v, \vec v \rangle}$
	- inner product is multilinear!
		- $\langle \vec x + \vec y, c\cdot\vec z\rangle = c\cdot\langle \vec x, \vec z\rangle + c\cdot\langle \vec y, \vec z\rangle$
	- Also you can swap the params just fine: $\langle \vec v, \vec u \rangle = \langle \vec u, \vec v \rangle$
	- ALSO $\langle u, u \rangle \geq 0$ and $\langle u, u \rangle = 0$ IFF $u = 0$
- Inner products for angles
	- $cos(\theta) = \frac{\langle \vec u, \vec v \rangle}{||\vec u||\ ||\vec v||}$ 
		- idk if i should remember this or not :p
		- #todo 
	- IF $\langle \vec u, \vec v \rangle =0$, then those vectors are orthogonal (forms a right angle)
- Rotation transformations
	- $R_\theta = (x \cos(\theta) - y\sin(\theta), y \cos(\theta) + x \sin(\theta))$
- Projection
	- $P_\vec a(\vec v) = \frac{\langle \vec a, \vec v \rangle}{\langle \vec a, \vec a \rangle}\vec a$
		- "both v's are on the top, and the order of the v's doesn't matter"
## Week 6
[[Coordinates and matrices stuff more]]
- All vectors can be represented as a linear combination of their basis.
	- Using the coefficients of a basis $\beta$, we say the coordinate $[v]_\beta = \begin {bmatrix} b_1\\ b_2\\ \vdots\\ b_n  \end {bmatrix}$
	- is the vector $v$ represented by this basis $\beta$
	- Then what does $v = (1,2)$ mean? Is it not a coordinate?
	![[Pasted image 20250408152821.png]]
	- 
- Matrix vector multiplication
	- Each component of the coord gets multiplied its respective column of the matrix. Very easy indeed.
	- Notation would be like $[T]_\alpha^\beta[\vec v]_\alpha = [\vec v]_\beta$
- Matrix-vector multiplication in coordinates (?) Terrible name for sure
	- Basically says $[T(v)]_\beta = [T]_\alpha^\beta[v]_a$
- $T_M(\vec v)$ is the transformation defined by a matrix. It takes in any v (of standard basis though) and returns the transformed version in standard basis as well (but for the other vector space)
- Thm: FTOM (fundamental theorem of matricies)
	- Transformations defined by matrices are linear
	- If a matrix can represent at transformation (i.e. $M = [T]_\alpha^\beta$), then $T = T_M$
	- Every matrix can represent a transformation defined by that matrix. 
- #todo I still don't understand the notation of 
	- Okay so $[T]$ is the matrix representation of the transformation. We already know that we can represent every transformation as a matrix from the theorem "matrix-vector mult in coordinates" or whatever garbage.
- Also by that logic $[T(\vec v)]_\beta$ is a single coordinate. Idk why i didn't realize that before lol.

[[Kernels and Images]]
- Two naturally occuring subspaces
- $ker(T) = \set{ \vec v \in V: T(\vec v) = \vec 0_W}$
- $image(T) = \set{\vec w \in W: T(v) = w \text{ for some v} }$
- So if we have T((a,b,c)) = (x,y,z), then (a,b,c) is in the image of T.
- Likewise, if T((a,b,c)) = (0,0,0), then by definition (a,b,c) will be in the kernel.
- Both the kernel and image are subspaces! Proof is easy; use characterization of subspaces!
- Thm: Kernels in coordinates:
	- $T(\vec x) = 0 \Leftrightarrow [T]_\alpha^\beta[\vec x]_a = [\vec 0]_\beta$
		- In your head, if you were to use matrix vector multiplication on the left expression, you'd  get a big linear system with each coefficient just being the respective entries of the matrix. That is what we turn into an augmented matrix to solve #todo write this out visually. 
	- Solving $\left[ [T]_\alpha^\beta \,\middle|\, [\vec{0}]_\beta \right]$ for $x$ will give the values in the kernel! x is always in the standard basis as we've described before. 
- Thm: Images and spans
	- If we have a spanning set for V, then transforming each entry by $T$ will give a spanning set for $\operatorname {image}(T)$
- Procedure 1: Finding a basis of the image(T)
	- The columns of the basic variables (in REF!) will be the coordinates, that span the image. Why? Well the free variables are what affec the kernel. I.e. if we solve for the kernel and get that (a,b,c) = b(2, 1, -1) then clearly ker(T) = span(2,1,-1). Any variable that *doesn't* effect the kernel will effect the image instead.
	- #todo do examplo
- Thm: Rank-nullity: $\dim(V) = \dim(\ker\; T) + \dim(image\; T)$
- Procedure 2:
	- Okay maybe i kinda know: Use the basis, find the free variables. The leftover basis vectors, throw them into the transform (i.e. just the row of the matrix) and the span of those will be the image.
	- #todo do examplo
- #todo [[Kielstra's Examples]]

## Week 7
[[03-04 notes (Injectivity and Surjectivity)]]
- Injective: T(x) = T(y) iff x = y
- Surjective, w = T(v) forall w, for some v
- Kernels & injectivity
	- if dim(ker(T)) = 0, then the function is injective
	- the abv is true iff $ker(T) = \set \vec 0$
- Images n injectivity
	- if dim(image(T)) = n = dim(W), then T is surjective
- Dim & injectivity / surjectivity:
	- Let $T : V\to W$
	- IF dim(V) < dim(W) (i.e., input < output) then T can never be surjective
	- IF dim(W) < dim(V), then T not injective
- IF dim(V) = dim(W), then T is injective  <=> T is surjective
	- I think this relates to isomorphisms too. 
[[Solving consistent linear systems]]
- #todo IDK what that first part is about
- Affine subset: A subset (NOT a subspace) of V where $\vec v + S = \set{\vec v + \vec S : \vec S \in S}$ for some subspace $S \subseteq V$
	- A subspace shifted by a vector.
- Solution sets of consistent linear systems (consistent = acc has solutions)
	- Can ALWAYS be expressed as $\vec x_p + \ker(T_A)$
- The solution set of linear systems are kernels
	- this is kinda obvious..
- #todo as exercise maybe do that last example to exercise

## Week 8
[[Composition!]]
- ST is a composition
	- #todo might be important: $image(T) \subseteq domain(S$) (?)
- thm: Compositions r linear functions
- thm: (TS)R = T(SR) and (T+S)R = TR + SR
- #todo Prove thm: Kernels, Images, and Composition
- Products of matricies (light)
- matrix mult (ew)
	- remember, SWOOPY UP (left row to right column)
- Each row operation masks a composition with a matrix!
- prolly dont have to remember this tho

[[Groups, Isomorphism & Automorphism]]
- An invertible transformation is:
	- Isomorphism if T : V -> W
	- Automorphism if T : V -> V
	- #todo What is the point of automorphisms?
- $Aut(T)$ is a group (a set of every automorphism)
	- I severely doubt this is on the exam
- The Gauss-Jordan algorithm for Finding Inverses of matricies
	- Create [M|I]
	- Reduce to try and get [I|M']
	- If you can't get I on the left, then it's not invertible. If you did, then M' is the inverse!
- T is an isomorphism if it is 1. linear 2. injective 3. surjective
	- injective + surjective = invertible too, btw
- ✨The Classification of Finite Dimensional Vector Spaces
	- All n-dimensional vector spaces are similar in "structure" to other n-dimensional V.S's
	- You can make a function like $T : \mathbb R^4 \to P_3(\mathbb R)$ if you wanted to cuz they are both "similarly shaped"
- Corollary: Two fin-dim vector spaces are isomorphic iff dim(V) = dim(W)
	- If there exists a linear transformation $T : V \to W$ that is an isomorphism, then both V and W are isomorphic ✨ (idk why i never thought about this; or did our profs ever say this!?)
[[Inverse Functions (and linear ones too!)]]
- To show T : W -> V is an inverse of S : V -> W, we show TS(v) = v and ST(w) = w forall v,w
- A function has an inverse iff sur and inj
- Inverses r unique ✨
- Inverses are linear ✨
- Elementary row operations have inverses

## Week 9

[[Calculating determinants with multilinearity]]
- matrix is split into rows; the params of det take in a bunch of *rows*.
	- Each param can be factored
	- 3 params, all with a multiple of 3, means we can factor out 27 from the 3 args
[[Change of Basis and Coordinates]]
- You do the funny thing (not hard, fortunately)
- "how to easily go from $[v]_\beta$ to $[v]_\alpha$?" "By solving for $[I]_\alpha^\beta$" 
- This stuff is mostly practice. #todo
- ✨To find $[I]_\alpha^\beta$ we plug in $I[\alpha_1] = (a,b) = c\beta_1 + d\beta_2$ 
	- So plug in the *basis* into the transformation, and find what the result should be in terms of the other basis (that way the transformation inputs alpha and returns beta)
- Thm: Changing coordinates of linear maps:
	- "change of base? nah change of coordinates"
	- $[T]_{\alpha'}^{\beta'} = [I]_\beta^{\beta'}[T]_\alpha^\beta[I]_{\alpha'}^\alpha$
- Oh also $[I]_\alpha^\beta = ([I]_\beta^\alpha)^{-1}$ which can make solving easier sometimes for that flippy transform

[[Determinants Notes]]
- Multilinear (i get this) and alternating (kinda weird but you can switch the args and it'll be the same as the previous call but negative)
- thm: if $T : V^n \to \mathbb R$ (what kinda notation is this) is alternating and has two identical inputs, then the output is zero.
	- The proof makes this obvious
	- So in the case where two rows of a matrix are identical, the determinant will always be 0? Oh yeah acc that makes a lot of sense 
- From there, IF T is multilinear and alternating and is linearly dependent (i.e. one of the args can be written as the other ones) then by that above 
	- IDK what the detecting dependence proof means. honestly. #todo it seems important
	- WHAT. I WROTE IT TWICE. Maybe tom's proof makes more sense
- We probably wont prove if something is the det func cuz we gotta prove alternating and multilinearity which we do NOT know how to do. Also we gotta show f(I) = 1 like nahh we are NOT doing that
- ✨ det != 0 iff a matrix M is invertable
- Diagonal matrices (we love them)
	- if $d_{ij} \neq 1$ for all $i=j$
	- Also the det is just $\prod_i^n d_{ii}$ (easily shown by multilinearity)
- The row operations AFFECT THE DETERMINANT!
	- Or i mean no it doesn't, but you gotta update the determinant as you're doing row operations cuz of wack.
	- ![[Pasted image 20250318130002.png]]
	- #todo ask gang if this is even important or nah
- remember: det formulas for 1x1 and 2x2, minors, recursive formula.
- Finish what i #todo'd at the very end (I think I was just confused)

[[extra determinants stuff]]
- $\det(A) =\det(A^T)$
	- A^T is the "transform version of the matrix" whatever that could possibly mean
- also $\det(AB) = \det(A)\det(B)$
	- #todo I really should prove this highkey
	- prove is WACK
[[HOW 2 CHANGE OF BASIS]]
- Use the matrix you have and the matrix you want. the surrounding $[I]$'s will have their original basis and target bases changed because of that
- Then solve for those surrounding guys and you're good

## Week 10
[[Week 10 notes (Eigenvectors and Eigenvalues)]]
- Idk why "the simplest interesting linear transformation" is interesting. Maybe #todo (textbook might explain it good?)
- The $n-fold$ comparison of T is just $T^n(\vec v)$
	- This is easiest to calculate if the transformation resembles the above one ($T(\vec v_i) = \lambda_i\vec v_i$) because $T^n(\vec v) = \lambda^n_i \vec v_i$
	- The matrix $[T^n(\vec v)]$ has you doing the above for all standard basis vectors (it's very straightforward)
	- N-fold comparisons are best w/ diagonal matricies.
- Note: eigenvectors do NOT get affected by transformations
	- i.e. if you transform an eigenvector, the output will just be a scalar multiple of the eigenvector (that scalar being the eigenvalue!)
- In a diagonal matrix, each entry is an eigenvalue and each column (a standard basis) is its respective eigenvector
	- Diagonal matrices are SUPER easy to calculate the n fold comparison of. Passing any basis of the n-fold comparison will output the same vector multiplied by the eigenvector$^n$
- For any T that satisfies $T(v) = \lambda v$ (for some v), then x are the eigenvectors and lambda are the eigenvalues 
	- To confirm an eigenvector *is* an eigenvector, you plug it into the transform, and get a scalar multiple with the eigenvalue.
		- Given that for $\lambda_1 = 5$ the $\lambda_1$-eigenvectors are in $span\set{(1,2)}$, then passing in $T(1,2) = 5(1,2)$ is what you should expect
- To create a diagonal matrix we can use the eigenbasis!
	- Get all the eigenvectors (the span). Let $\alpha$ be the basis using those eigenvectors
	- Then you solve for $[T_M]_\alpha^\alpha$ (plug in the basis vectors; write it in terms of the basis vectors)
	- Observe that $[T_M]_\alpha^\alpha$ is diagonal! Amazing
- #todo practice change of basis to eigenbasis (its the same as any other change of basis, with the added step of finding the middle diagonal matrix from the eigenvectors)
- All eigenvectors are in $\ker(T - \lambda I)$
	- Cuz you tryna solve $(T - \lambda I)(\vec v) = \vec 0$. By definition v is in the kernel yeah
	- Why is this important? idrk honestly but it's a thing
- The characteristic polynomial looks like this: $\mathcal X_A(\lambda)$ where the bottom is the matrix and it's passing in the lambda as the variable like any other polynomial
	- The roots are the eigenvalues. Solving for $\lambda$ gives you le eigenvalues!
- I think the 4 blue guys show that the same applies for matrices as they do with transformations
	- The last one seems the most important: Where $M = [T]_\alpha^\alpha$, $T(\vec v) = \lambda v \Leftrightarrow M[\vec v]_\alpha = \lambda[\vec v]_\alpha$
	- #todo maybe the tb will make this more obvious why it's useful?
- u should know how 2 get eigenvectors / eigenvalues ezpz

## Week 11
[[LADR eigenstuff]]
- LADR way of finding eigenvalues
	- Goal: Find a dependence (or really just... find a linear combination for the earliest $T^n$)
	- Utilizes the fact that $Z = a_{n\cdot n}T^{n\cdot n} + \dots + a_2T^2 + a_1T^1 + a_0T^0$
	- We are given what $T^1$ and $T^0$ are ($T^0 = I$)
	- We keep finding $T^2, T^3,$ etc. until one of them can be written as a linear combination of the previous
	- The linear combination gives a set of non-zero coefficients and therefore an equation to solve.
	- This equation we solve conveniently is how we find eigenvalues
- LADR way to get eigenvectors
	- The polynomial $p(T) = Z$ can always be factored (by the fundamental theorem of algebra)
	- IDK 
	- I REALLY DONT KNOW #todo HELP

[[Diagonalizability]]
- Any polynomial with real coefficients can be factored 
	- ![[Pasted image 20250329135954.png]]
- An n-length matrix must have at most n eigenvectors
- Eigenvectors for distinct eigenvalue are independent (i.e. the set of all eigenvectors is linearly independent)
	- Means to satisfy $T(\vec v_i) = \lambda_i\vec v_i$ means for the set $\set{v_1, \dots, v_n}$ to be linearly independent. 
	- (note if n = 1 then the only eigenvector cannot be $\vec 0$ so the set is NOT just the $\vec 0$ and therefore dependent)
	- #todo maybe re-write the proof for funzies
- Diagonalizable: if a basis $\alpha$ of V is made up of eigenvectors of $T$
	- If there is a basis $\alpha$ made up of the eigenvectors of T, then T is diagonalizable.
- Characterization of diagonalizable
	- T is diagonalizable iff $[T]_\alpha^\alpha$ is "similar" to a diagonal matrix
	- #todo go over?
	- (I REALLY dont get this proof either)
> For a matrix A to be diagonalizable, the equation $A = PDP^{-1}$ must hold, where D is diagonal and P is invertible
	- Usually the P = I and D is something you solve for or are already given

![[Pasted image 20250409134802.png]]
	- idk if this is important but YEAH It'S a thing


- Thm: The nice case of Diagonalization
	- If V is n-dimensional and T:V->V *has n eigenvalues* then T must be diagonalizable 
- ![[Pasted image 20250409154721.png]]
	- This example is AIDS
- $Alg(\lambda)$ is the power of the eigenvalue in the characteristic polynomial
- $Geo(\lambda)$ is the dimension of $\dim(E_\lambda)$ (the # of eigenvectors for an eigenvalue)
	- $Geo(\lambda)$ also represents the basis of $E_\lambda$! (? waht no it doesnt)
- Thm: For any real eigenvalue, the $Geo(\lambda) \leq Alg(\lambda)$

![[Pasted image 20250409155838.png]]
- How could this possibly be useful.


OKAY AN IMPORTANT THING:
✨✨✨ Thm: Diagonalization via Geo and Alg
- T : V -> V is diagonalizable IFF 
	1. $\dim(V) = Geo(\lambda_1) + \dots + Geo(\lambda_k)$
	2. $Alg(\lambda_i) = Geo(\lambda_i)$ for all i


![[Pasted image 20250410220121.png]]
- For questions like this, you usually want to proceed by definition ()



#todo Find the $PDP^{-1}$ thing during diagonalization


## Misc self notes:
If you have T and two bases, $\alpha = \set{e_1, e_2, e_3}$ and $\beta = \set{(1,2), (1,-1)}$ then 
$T(e_1) = 1e_1 + 4e_2$ represents the transformation $[T_M]_\alpha^\alpha[\vec v]_\alpha$ and its result.
HOWEVER, 
$T(1,2) = 2(1,2) + 5(1,-1)$ represents the transformation $[T_M]_\beta^\beta[\vec v]_\beta$ because we took in beta and returned beta!



Topics on exam:
1. Linear transformations
2. Linear independence
3. Eigenvalues and eigenvectors
4. Matrix inverses
5. Eigenspaces
6. Isomorphisms
7. Matrices
8. Subspaces
9. Dimension
10. Diagonalization