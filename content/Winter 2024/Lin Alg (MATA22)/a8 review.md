q1, q2 are LIGHT

### q3
Contradiction is good for dependence questions cuz you can get some gibberish p easily
Tom does it a far better way:
We have that a_1v_1 + a_2v_2 = 0 for some a_1, a_2 != 0.
WLOG, we choose a_1 != 0
Then $v_1 = \frac{-a_2v_2}{a_1}$
To utilize the given info, we also have that 
$T(v_1) = \lambda_2(\frac{-a_2}{a_1})v_2 = \lambda_2v_1$
We also have taht $T(v_1) = \lambda_1v_1$
Means $\lambda_1  = \lambda_2$ which is NOT true so we made our contradiction


## Q4
Suppose $\lambda = 0$
Then $T(v) = \lambda v = 0$
So $v \in \ker(A)$
Since $\ker(A) \neq \set{\vec 0}$ that means that A is not injective 

Suppose A is not invertible 
Then det(A) = 0
So $\det(A - \lambda I) = 0$ when $\lambda =0$
so $\lambda = 0$ 

Remembering these small details REALLY helps for this kind of thing. 
## Q5 is AIDS
Having something be an isomorphism means for it to be invertible. 
We suppose T is not an isomorphism. That means that T is either not injective or not surjective as $R^n$ is finite dimensional.
However since injectivity => surjectivity for finite dimensional vector spaces (and since T:V->V so dim(V) = dim(V)) we have that T is not injective 

Surjectivity:
forall w, exists v such taht T(v) = w 
negation:
exists w, forall v T(v) != w
choose w = 0. let v be arb. then
<v,v> = <0,0> = 0 but <T(v), T(v)> > 0
so the sides r not equal :(

so contradiction yaya


## Q6
-Let W be a subspace and T : V -> V 

a)
To show non-empty: as W is a subspace, 0 \in W. Also T(0) = 0, so 0 \in U
To close:
let c in F and x, y \in U.
Then T(x), T(y) \in W 
Since W is a subspace, cT(x) + T(y) \in W = T(cx+y)
=>   cx+y \in U 
Therefore U is a subspace.


b) If $W = \set{\vec 0}$, then $U = \set{v \in V : T(v) = 0}  = \ker(T)$

c) If W = V, then $U = \set{v \in V : T(v) \in V} = V$
However T(v) \in V all the time, so the set is just $v \in V$


## Q7
T : V -> V is surjective
Suppose V = span{v_1, .., v_n}
Since {v_1, ..., v_n} is a spanning set, by dim bound, we have that V is finite dimensional.
So T is also injective 
We know that $\set{T(v_1), \dots, T(v_n)} \subseteq V$ cuz obvious
Let v \in V be arb (we try to get it to be a lin comb of the above)
We know v = T(w) for some w \in V
Then w = a_1v_1 + \dots + a_nv_n
T(w) = a_1T(w_1) + \dots + a_nT(w_n) 
v = ---
so clealry v in span. idk why that was so hard



## Q8
Let A be a $n\times n$ matrix with eigenvalue and eigenvector $Av = \lambda v$
Define $A^0 = I$
Suppose p is a polynomial 
Prove $p(\lambda)$ is an eigenvector of $p(A)$
This means we want to show that $p(A)\vec v = p(\lambda)\vec v$

All polynomials p(x) are in the form $p(x) = a_nx^n + a_{n-1}x^{n-1} + \dots + a_0x^0$
Similar is the case for $p(A)$

Then
$p(A)\vec v = (\sum_{i=0}^n a_iA^i)$
$=\sum_{i=0}^n a_iA^i\vec v$
$= \sum_{i=0}^n  a_i\lambda^i \vec v$
#todo Go over this detail maybe? 
$=p(\lambda)\vec v$




## Q9
Suppose S subset Mnxk s.t |S| = (nk) -1
WTS S is NOT a spanning set.
For sake of cotnradiction, suppose it is
then span(S) = Mn\*x (thats the k)
Consider $\alpha$ be the standard basis and therefore linearly independent.
 it's of size n\*k
by dim bound, we should have that $nk \leq nk - 1$ but that's clearly false.

$n \leq k$