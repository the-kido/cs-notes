Also useful for solving homogeneous systems of equations.
1. Use the conditions to create a [[Homogeneous Systems|homogenous]] [[Linear Systems|linear system of equations]]
2. Create an [[Augmented Matrices|augmented matrix]].
3. Use it to solve for the basic variables in terms of free variables.
4. Express an arbitrary vector replacing the basic variables with free ones.
5. Get the form of a scalar multiplying a vector. 
6. The vectors are used to create the [[Spans|span]].

>[!example] Represent the subspace $W = \set{(x,y,z) : x + 2y + 3z = 0 \text{ and } x + y + z = 0 }$ as a span
>$$\begin{cases}
 x + 2y + 3z &= 0 \\
 x + y + z &= 0
\end{cases}
\implies
\left[\begin{array}{ccc|c} 1 & 2 & 3 & 0\\ 1 & 1 & 1 & 0 
\end{array}\right] \implies
\left[\begin{array}{ccc|c} 1 & 0 & -1 & 0\\ 0 & 1 & 2 & 0 
\end{array}\right]$$
>So the basic variables are x, y and the free one is z.
>
>Then (x,y,z) = (z, -2z, z) when replaced, which gives us z(1, -2, 1). The vector part goes into the span, so we have $Span{(1,-2,1)}$ yay.
>
>>[!explanation] Reads as: For some arbitrary $(x,y,z)$ we get that it $= (z, -2z, z)$. Factoring the z gives us $z(1, -2, 1)$. Since z is arbitrary, we can say this is equivalent to $span(\set{(1,-1,1)})$. Thus, that will be the span that represents every $(x,y,z)$
>
>>If you want to compare solving for the span with the traditional way, refer to the same example in [[Solving Linear Systems]].

