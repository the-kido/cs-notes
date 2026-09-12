
### Ways to show invertibility:
- Show surjective and injective of a transform
- (with matrix)
	- Solve for the inverse. if there isn't one it's obvious
	- Solve for det(M). if != 0, then it is invertable!

### Way to show diagonalizability:
1. We show that, with a different bases, most matrices can look WAY better!
	1. Find the eigenbasis via the eigenvalues and eigenvectors. 
	2. We have $[T]_\alpha^\alpha$ and we *want* $[T]_\beta^\beta$ : form the "D" diagonal matrix
		1. Shortcut: The eigenvalues will make up the diagonal matrix. 
			1. Make sure the order in which you use the eigenvalues is the *same* order as the eigenvectors are in the eigenbasis $\beta$
		2. Longcut: You plug in the eigenvectors (they are w.r.t the std basis) into the og matrix and see how they transform and re-write it w.r.t. $\beta$.
			2. news flash, they don't transform much at all; it's just a scalar multiple by the *eigenvalue*, *by definition!*
	3. Then we solve for $[I]_\beta^\alpha$ (cuz it's easier)
		2. Pass in $\beta$, bases write the output w.r.t $\alpha$ standard bases
		3. The output is what the matrix will look like of ocurse
	4. Lastly we know $[I]_\alpha^\beta = ([I]^\alpha_\beta)^{-1}$. We're done! We've shown there is a diagonal 
2. Show that $\dim(V) = \sum_{i=0}^n Geo(\lambda_i)$ AND $Alg(\lambda_1) = Geo(\lambda_1)$ for all eigenvalues
	1. Still requires you to find the eigenvectors and things, but this is nicer to look at.


## Ways to prove invertibility
1. Show that a function is the inverse of another function
	1. I.e. by definition: show ST(v) = v and TS(w) = w forall v,w
2. By showing T is injective and surjective

## Ways to show injectivity
1. By definition (suppose x=y, get T(x) = T(x) and vice versa)
2. by $\ker(T) = \set{\vec 0}$
3. By $\dim(\ker(T)) = 0$

## Ways to show surjectivity
1. By definition (let w be arbitrary, show T(v) = w for any choice of v)
2. By showing $\dim(image(T)) = \dim(W)$
3. By showing $image(T) = W$
