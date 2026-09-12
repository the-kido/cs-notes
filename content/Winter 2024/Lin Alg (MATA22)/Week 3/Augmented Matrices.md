
>[!defn] Augmented Matrix Notation
>![[Pasted image 20250128104359.png]]

DON'T start with an augmented matrix. they always come from a system. 
Start with your system, and represent it as an augmented matrix. #todo.

# Row Operations

>[!defn] The Row Operations
> ("Subroutines of the Elimination Algorithm") (think of subroutines like functions)
> Given a linear system, we can apply 3 elementary <span class="emphasis">row operations</span>.
> Each --> implies the left thing replaces the right thing.
> ![[Pasted image 20250128105103.png]]
> ![[Pasted image 20250128105108.png]]
> ![[Pasted image 20250128105115.png]]
> >[!note] The names of these operations and the notation are important!
> >$$\lambda R_i \to R_i \text{ and } R_j + \lambda R_i \to R_j \text{ and }  R_i \leftrightarrow R_j$$

Now we can [[Solving Linear Systems|solve linear systems]] with these row operations! But first, we need a theorem to confirm that it's a valid way of doing so:
>[!thm] Row Operations Preserve the Solution Sets of Linear Systems.
>Applying a finite sequence of elementary row operations to a system produces an equivalent system. For a sketch of a proof and details see (1.5.3) Proposition on p. 34-36 of Little and Damiano.

And here is an example:
>[!example]
>![[Pasted image 20250128110215.png]] 
