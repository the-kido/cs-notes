>[!check] Steps!
>We WANT to find the 3 matrices for our *known* $[A]_\alpha^\alpha$ such that 
>$$[A]_\alpha^\alpha = [I]^\alpha_\beta[D]_\beta^\beta[I]^\beta_\alpha$$
>1. Find the eigenvalues and eigenvectors (i.e. eigenspaces). This part is easy!
>2. The eigenvectors you get for each eigenvalue you conglomerate into an ***eigenbasis***. THE ORDER MATTERS.
>3. We can create our D matrix as it will be every single eigenvalue in order of what our eigenbasis is. If you're a baby, you can create it by seeing how the bases characterize it. So you plug in T(b_1), T(b_2) etc for all the eigenbasis vectors, and write them w.r.t the eigenbasis as well. 
>4. Then we solve for $[I]_\beta^\alpha$ (cuz it's easier)
>	- Pass in $\beta$, bases write the output w.r.t $\alpha$ standard bases
>	- The output is what the matrix will look like of occurs
> 5. Lastly we know $[I]_\alpha^\beta = ([I]^\alpha_\beta)^{-1}$. We're done! We've shown there is a diagonal matrix


>[!example] Diagonalize a Matrix
>![[Pasted image 20250329152525.png]]
