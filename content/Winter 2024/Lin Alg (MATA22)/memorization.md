
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

(i will simply write down every theorem from [[MAT A22 Toolkit (2).pdf]]) that I have forgotten or want to brush up on (i will try to remember them *before* I actually read what it's about)



# Direct sum
[[Direct Sum]]
### The first one: $U \cap V = \set{\vec 0} \implies U + V$ is a direct sum

### The other one: If $V = U\boxplus V$ and $S_1$ and $S_2$are basis of U and V respectively, then $S_1\cup S_2$ is a basis of V.



### 1.14 The vector space of functions
This is the kinda thing that would freak me out on the test
$\set{sin(x) , cos(x) }$ is linearly independent (you cannot write any of the other functions as a linear combination)
how? 
![[Pasted image 20250409222141.png]]
- Refer to this. See how the statement we assume holds for all x? That means we can choose as many x's as we want and the statement *should* hold. Clearly it doesn't; we have a contradiction.

- for functions, addition is (f+g)(x) = f(x) + g(x) and scalar multiplication is $cf(x) = (cf)(x)$
- Therefore, you justify using these by "VS axioms"

### Subspaces are closed under intersection
So if $W_1, W_2$ are subspaces, then $W_1\cap W_2$ is also a subspace of V

### ✨✨✨ $span\set{\emptyset} = \set{\vec 0}$ 
- Means if $V = \set{\vec 0}$, then it's basis is simply $\emptyset$

### For $A \subseteq V$ and $B \subseteq V$, then $A + B = \set{a + b : a \in A, b \in B}$

### The sum of subspaces are a subspace.
### If $W_1 = span(S_1)$ and $W_2 = span(S_2)$, then $W_1 + W_2 = span(S_1 \cup S_2)$
This one i always forget :( 
- This one is actually used in the proof for the direct sum thingy somewhere above! 

# 3

### 3.1 (the acc defn of linear system. sometimes I forget it. maybe #todo?)

### 3.8 ✨✨The Elimination Algorithm = Finding the inverse algorithmically 


### 3.9 (every linear system has a REF)

### 3.11 (if # of equations < # of variables, then there is a non-trivial solution fs) 
- Means the system is dependent
# 4

### 4.2 S is a basis of V iff every vector in V can be uniquely represent by $span(S)$
#todo think of a question that uses this fact

### 4.3
if we have S that is lin indep, and x in V but x not in span(S), then S U {x} is also linearly independent 
- okay this isn't wrong but the acc statement is more general. it the above is better tho. 

### 4.4 If V has a finite spanning set "T" and S is linearly independent, then there is a $S\subseteq S'$ that spans V
- But that S' is gonna be lin indep no? yeah it will be
### 4.7 The dimension is the size of a *basis* of a VS. 
This means the thing we want the dimension of must be linearly independent and spans the VS we want the dim of. 

### 4.8 (if |S| =dim(V), then S is a basis cuz all basis are the same size (4.6))
- "all basis are the same size"

## 4.9 Proper Subspace (meaning $S \subset V$ but not $\subseteq$) Dimension
If $S \subset V$, then $\dim(S) < \dim(V)$
really obvious tho ngl


# 5

### 5.7
$||\vec v|| = \sqrt{\langle \vec v, \vec v \rangle}$

### 5.8 (specifically $\langle \vec v, \vec v \rangle \geq 0$ and = if $\vec v = 0$ )
- defo not getting this on the test cuz it was already in our practice exam

### 5.9 (would they make us remember the formula? $\cos(\theta) = \frac{\langle \vec u, \vec v \rangle}{||u||||v||}$)
### 5.10, 5.11, 5.12 again -- lots of formulas i don't want to remember

### 5.13 If two transformations behave the same way when passing in a basis, then they are equivalent transformations! (transformations are represented by their behavior on a basis) ✨✨

### 5.14 (a more "fundamental thing") a transformation can be represented by $n\times k$ scalars (usually put into a matrix)

### 5.15 in my own terms: 
The matrix represents what happens if you pass in alpha vectors and return beta vectors. The coefficients of that result goes into the matrix to make it look at pretty :>

### 5.16
![[Pasted image 20250410101405.png]]

### 5.18 $[T(\vec v)]_\beta = [T]_\alpha^\beta[\vec v]_\alpha$

### 5.19 $T_M$ is the transformation defined by a matrix M. 
$T_M(\vec v) = w \Leftrightarrow M[\vec v]_\alpha = [w]_\beta$
Notation is wack. $T_M$ is a transformation w.r.t a matrix. $M$ is an actual matrix. 


## 5.20 The fundamental theorem of matrices (i will NEVER remember this)
Basically shows that you can go from matrix to transformation 
#todo i don't know if i need to remember this tho


# 6

### 6.5: solving for $x$ n $[T]_\alpha^\beta [\vec x]_\alpha = [\vec 0]_\beta$ will get you the kernel 

### 6.6: If $\set{v_1, \dots, v_n}$ is a spanning set for V, then $\set{T(v_1), \dots, T(v_n)}$ is the spanning set for $image(T)$

### Procedure 1 and Procedure 2 (I surely don't need to remember these)
The image is the basis vector of $W$ w.r.t the basic variables.

![[Pasted image 20250411124820.png]]
>[!note] the basic variables here are b and c (0c = 0 does not mean anything) so there are actually *2* basic variables, not 1. I keep forgetting this. 

✨ the image is *every* output of a transformation
#todo do the practice questions Keilstra gave

We always want to solve $[T]_\alpha^\beta[\vec v]_\alpha = [\vec 0]_\beta$ where $[\vec v]_\alpha = [a \ \ b \ \dots \ y \ \ z]$
That will keep me on track so I dont forget my coordinates and things :>
# 7
### Injectivity is probably only 1 direction (no biconditional) i am p sure tom made another typo o_o

### 7.2 
I always forget that showing $\ker(T) = \set{\vec 0}$ is sufficient to show T is not injective

### 7.4 dim(W) < dim(V) => T is not injective
- This is hard to remember. But figuring out the surjective one is light work, so I can derive this in my head easily :>

# 8
## 8.420: $T^2(x) = T(T(x)) \neq (T(x))^2$ ✨ 
### 8.5 (look for the proof)
Basically, $ker(S) \subseteq ker(TS$) cuz the composition has $ker(S)$ plus $ker(T)$ new ways of going to zero.
With that, the image we be sure to be less, so $image(TS) \subseteq image(T)$

### 8.7 Matrix multiplication

Means if you have a $T = \left(\begin{bmatrix} -1 & 1 \\ 0 & -1 \end{bmatrix}\right)^2$ then you *matrix multiplication* and NOT just squaring each entry like an utter buffoon (i am the utter buffoon)

### 8.12 
All row operations are invertible

The matrices are obvious except for the $R_i + \lambda R_j \to R_i$, for this one, you go to the ith row and add $\lambda$ to the $jth$ column
### 8.16
$Aut(T) \subset \mathcal L (V, V)$ is every automorphism T : V -> V

## 8.22 Two fin dim VS's are isomorphic iff dim(V) = dim(W)


# 9

### 9.3 If a function is alternating and multilinear, and any input vector is lin dep, then the output will be zero


### 9.6
#todo Ask the gang if there is any questions to practice w/ this theorem. 


# 10

### 10.1 n-fold comparison:
$T^n(\vec v) = T(T(T(\dots (T(\vec v)))))$
Only easily calculatable if T has a diagonal matrix representation
### 10.2 Eigenvalues & Eigenvectors: $\vec x$ and $\lambda$ s.t.  $T(x) = \lambda x$ holds.

### 10.3  if $T(\vec v) = \lambda \vec v$ holds, then $\vec v\in \ker(T - \lambda\cdot I)$

### 10.5  All eigenvalues are roots of $\mathcal X_{[T]_\alpha}$
- this could be useful if i want to go "in reverse" in some way. So just remember it.

### 10.6 $\lambda-$eigenspaces are $E_\lambda = \set{\vec v : T(\vec v) = \lambda \vec v }$
- It's a set of all vectors that are eigenvectors (the "span" of an eigenvector even)
- Any eigenvector is inside of its eigenspace

### 10.7 Eigenspaces $E_\lambda$ are also subspaces
- So really the eigenspace is every eigenvector of a certain eigenvalue
- A certain eigenvector will always belong in $E_\lambda$ 
- When we solve for the eigenvector, we really are actually solving for the eigenspace which is kinda wack.


### 10.8 If A has eigenvalues $\lambda_1, \dots,\lambda_n$ then $\det(A) = \lambda_1 \cdot \lambda_2 \cdot \dots \cdot \lambda_n$


### 10.9 Invertible $\Leftrightarrow$ $\lambda \neq 0$ for any eigenvalue



# 11
### 11.1, 11.2, and 11.3 we "ball" (more like bail but ok)

### 11.4 If $M \in M_{n \times n}(\mathbb R)$ then you can only have as many as $n$ eigenvalues

### 11.5 ✨ T : V -> V (where V is fin-dim) is diagonalizable if there is a basis $\alpha$ of V consisting of eigenvectors of T

#todo Example question to do: the one abi sent https://discord.com/channels/@me/1252403409492119684/1359958041637687447

### 11.6 "similar to a diagonal matrix" i still don't understand.
#todo Maybe watch parker explain it 

### 11.7 This one reeks of AIDS
![[Pasted image 20250410154927.png]]
- not even the proof clarifies it
- i'm assuming each eigenvalue has an individual eigenvector. in that case, since all the eigenvalues and eigenvectors are distinct, the set of them all is lin indep.
- ✨

### 11.11 The union of subsets of two different eigenspaces is linearly independent.  

### 11.8 The Nice (easy) Case of Diagonalization
- For T : V -> V, if there are n distinct eigenvalues and V is n-dimensional, then T is diagonalizable


# Things I will go over if I want to / think it's worth it
- All complex-number related things (at ~1.5)


# Common things 
## Ways to show linear dependence
- thm 2.7, 2.8, 2.9, 2.10

## Invertibility
- Surjectivity + Injectivity (either is sufficient if dim(V) = dim(W))
- 9.7
- 10.9 (if ANY of the eigenvalues $=0$)

## Diagonalizable
1. 11.5 (finding a basis of V that is made of eigenvectors)
2. 11.6 ("similar")
3. 11.8 (the nice / easy case)
4. 11.12 (the general case; Alg = Geo for all eigenvalues, and the sum of all Alg must be the dimension of V
5. If the transform is already diagonal, then it's diagonalizable
6. You can try diagonalizing to show there is a "D" such that $A = PDP^{-1}$ holds
	1. Rather, you attempt to find a D where the diagonal is all of the eigenvalues (this is also a useful fact for proofs!)

✨✨✨ Note: 
$$(PDP^{-1}) = (P^{-1})^{-1}D^{-1}P^{-1} $$
$$= PD^{-1}P^{-1}$$
Could be useful for some proofs!

## Linear Independence
1. Find the determinant of a matrix (by lemma 9.3). If the determinant is not 0, then the set is linearly independent (the contrapositive)
2. Show all $a_i = 0$ where $a_1v_1 + \dots + a_nv_n = 0$ 
	1. Useful to represent a linear combination as another basis (since basis are linearly independent) such that the coefficients can then be set to 0.
3. Prove by contradiction (useful for weird questions often)
	1. i.e. the $\set{\sin(x), e^x }$ type of question



# <span class="cards">Cards</span> #lin-alg-exam

 maybe

# aids

![[Pasted image 20250410164351.png]]
- Tryna do this question
We have that $T^2 = T \implies z = T^2 - T$
$\implies T(T-I) = Z$
✨1 = $I$ as a transformation
$\implies (T-0I)(T-1I)$
Oh so clearly the eigenvalues are $\lambda_1 = 0, \lambda_2 = 1$
- This means T is not *invertible*; not diagonalizable. oops
We WANT a basis of eigenvectors. We can use our eigenspaces for that... why?
Consider $E_0$ and $E_1$



The fact that $U \cup W = \set{\vec 0} \implies U + W\text{ is a direct sum}$  is important by itself!
idk it has something to do with spans and things but i CANNOT see how. 


via the direct sum, we could finish the prove 
we can take a basis of each E_0 and E_1, union them together, and we have a basis of eigenvectors. Yay.

V = E_1 (+) E_1 => every v can be written uniquely by the vectors in E_0 and E_1

We need to show v = x + y where x \in E_0 and y \in E_1 and v is unique. 

We also need to show the union of E_0 and E_1 = {0}, and that is equivalent to the sum being direct (E_0 + E_1 is direct)

We check 2 first:
Suppose v in E_0 and E_1
- by definition, remember $E_0 = \set{ \vec v : T(v) = 0\cdot \vec v }$
Then T(v) = 0v and T(v) = 1v
so v = 0 yeah easy peasy
So $E_0 \cap E_1 = 0$ (also cuz $\set{0} \subseteq E_0 \cap E_1$ since they subspaces)
So $E_0 + E_1$ is a direct sum.


We check 1:


![[Pasted image 20250410164951.png]]
- OH. OHHH. OHHUFHAWOUFHAUOWGHFAO
- Wait no calm down. it does not add up yet.
- No it actually does. We know E_0 and E_1 have basis, and those bases are eigenvectors by definition.
- So the union of the two basis sets will span V
