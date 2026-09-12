![[Pasted image 20250307131835.png]]
- Findinging 2 vectors that span it is easy. Why are the vectors that span the thingy linear independent though? How am I meant to explain that.
- Like for a, (-1,2,0,1) and (0,0,1,0) are part of the basis. However what gives the fact that they're lin indep? "as they are the coordinates that "

#todo Prove that if $S\subseteq V$ and $T\subseteq V$ are fin dim, and $S = T$. Then is $dim(S) = dim(T)$?
This seems true, but how 2 prove? 
Since they are the same, the same basis, say $\alpha$ would span both and be sized n. Therefore the dim of both is $n$



#todo Read the tb for sums of subspaces stuff. Seems important. 
#todo also for inverse transformations

#### How i am gonna remember when alpha or beta goes up or down 
Easy. If we have 
$[something]_\alpha$, then the something is a coordinate vector.
If we have $[something]_\alpha^\beta$, then it takes in form a and gives out b. So it's for transformations only. 

# Mid-term mock test
Q1: Mostly light. 
I should use the notation $[T]_\alpha^\beta$ for transformations since yeah.. it makes sense. Also, I should represent the resulting vectors after shoving them into the transformation with their basis vectors (that way it's explicit what goes into the matrix)

Question 2a.
Okay, this is a bit spicy. Before we can even say anything about $dim(W_1 \cap W_2)$, we have to show that it's a subspace. That isn't difficult, but it's still a nuisance:
- You let cx+y in w_1 and w_2
- You show cx+y in w_1 cuz it's a subspace
- U show cx+y in w_2 cuz it's a subspace
- Wow look cx+y is in both of em! So that part is great
Then to show it's non-empty, we use the zero vector from both w_1 and w_2. okay. not bad.

As for proving $dim(W_1 \cap W_2) \leq dim(W_1)$ and $dim(W_2)$, recall the dimension bound: 
- if V has a spanning set $T$ of size $k$ and $S$ of size $n$ is lin. indep, then $n\leq k$
- We let $dim(W_1 \cap W_2) = n$. Or more succinctly, we say $\theta$ $We know that $\alpha \subseteq W_1$ (the basis of W_1) is linearly independent and of size $k$. 
- Let dim(W_1 cap W_2) = a (as its a fin dim subspace, it has a basis to span it)
- Let dim(W_1) = b
- Let dim(W_2) = c
- Then dim(W_1 cap W_2) \leq dim(W_1) by the dimension bound, as b spans W_1 and a is linearly independent. Boombazinga.  
- It's not the worst. Recite this in memory #todo 
![[p559jnwo.bmp]]


2.b
Let's do cases:
We use the standard basis of $R^4$, call it $\set{e_1, e_2, e_3, e_4}$

if $\dim(W_1 \cap W_2) = 0$, we use (w,x, 0,0,) and (0, 0, y,z)
Then to show that the only place they overlap is 0,0,0,0, we can let $x \in W_1 \cap W_2$
and you'll end up with x = $\vec 0$

if dim = 1, we can do
(w, x, 0, 0) and (0, x, y, 0)
let x \in W_1 \cap W_2
then x = ae_1 + be_2 and x = ce_2 + de_3
$\implies 0 = ae_1 + be_2 - ce_2 - de_3$
$\implies a  = 0, b - c = 0, -d = 0$
Since a and d are free variables, 
You can do [[Row Echelon Form]] and find that (a, b, c, d) = (0, c, 0, 0) for any arbitrary input, so the vector is spanned by (0, 1, 0, 0) i guess? #todo lowkey kinda lost on this.  

Question 3
a) since dim(V) = 5 < 6 = dim(W). So it is defo not surjective.
but it could be injective !

3.b
You do row echelon. They are somehow all basis vectors.   
#todo Just attempt this again w/o help to internalize this. 

Also, cuz dim(ker(T)) = 0, the function is injective (remember: dim(ker(T)) = injective; dim(image(T)) = dim(W) --> surjective)

q4 is pretty easy.

q5
#todo Remember the matrix for the fricking notation thing, and all of those rotation-related things / properties
- standard inner product = dot-product = the sum of each component 
- The wierd properties:
	- $<v,w> = <w,v>$
	- $<v, w + a> = (v + a, w + a>$
- the norm ||v|| is just the squareroot of the inner product of itself $\sqrt{<v,v>}$

>[!note] Notice how every result of a transformation has resulted in a coordinate
>
>So $[(1,2,-3,-4)]_\alpha = [1 \ \ 2\ \ -3\ \ -4]$


q6
he outplayed me. He used the properites of injectivity and surjectivity (i.e. the dimensions $dim(V)  \leq dim(W)$ if T:V->W is injective)

q7
- fricking.. aids.
- The idea is S', which we make. It keeps adding vectors it doesn't yet have from S until it can totally span in.
Let s' = {}
While span(S') != span(S)
	assume exists an $x \not \in span(S')$
	$=> {s} \cup S' is$ linearly independent
	Let $S' =  S' \cup \set{x}$
End while

- Now we show that the algorithm does end and that we do get a nice $S' \subseteq S$:
	- As S' is a subset of V by construction and linearly independent, $|S'| \leq |\alpha$| as alpha is a spanning set (this by the dimension bound). So this while loop definitely ends

Now to show that if $span(S') \neq span(S) => \exists x \in S$ s.t. $x \not \in span(S')$
For sake of contradiction, suppose $\forall x \in S, x \in span(S')$
Since S' \subseteq S, span(S') \subseteq Span(S)
let x \in span(S). then 
$x = \sum a_iv_i$ s.t. ai in field and vi in S
since x also in span(S'), $v_i = \sum b_{ij}w_j$ where $v_i \in S'$
=> $x = \sum a_i(\sum b_{ij} w_v)$
then u do maths and show $x \in span(S')$
So span(S) \subseteq span(S'), which is a contradiction, where the span != span

so that predicate is true. yay. i hate this question so much.  #todoll

# Notes I've made
STEPS WHEN HEARING "FIND MATRIX"
1. Matrix? That's how the *basis vectors are changed*. We find the transformations of the bases.
2. then you map it. never forget! 

STEPS WHEN HEARING "FIND IMAGE BASIS"
1. We do this: $[T]_\alpha^\beta = [\vec 0]_\beta$
2. The vectors corresponding to the basic variables form a basis for the image. 
	1. $span(\set{[T(v_1)]_\beta, \dots, [T(v_n)]_\beta})$
3. These variables (which happen to be bases) when passed into the transform to result in a coordinate like $[T(v_1)]_\beta$, will give us our beautiful span.

STEPS WHEN HEARING "FIND KERNEL BASIS"
1. We do $[T]_\alpha^\beta[\vec v]_\alpha = [\vec 0]_\beta$
2. Let $[\vec v]_\alpha$ = [a  b  c  d] be the solution of this system. These values of $v$ will be our kernel's elements.
3. We find the [[Row Echelon Form]] if we haven't already
4. Rewrite $[v]_\alpha = [a, b, c, d]$ using your free variables (assuming we are in $R^4$; otherwise it'll be different!)
5. Turn it into vectors, then into a span.
6. All values of v are your values for the kernel. Congratulations.
