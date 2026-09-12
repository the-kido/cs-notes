To find the area of a rectangle, [[Joint CDF]]'s are good.
But what about... triangles? Like $P(X > Y)$?

>[!defn] Joint PDF
>For continuous RVs $X, Y$, the *joint PDF* is the function $f_{x, y}(x, y)$ such that:
>$$P((X, Y) \in \mathbb R) = \iint \limits_R f_{X, Y}(x, y) \;dx\;dy$$
>Where $R \subseteq \mathbb R^2$
- If we want the probability an outcome is in the region $R$, we need to integrate the density function $f$ *over* this region.
- The density will define an *entire surface* that stands above or equal to the real plane. You *calculate* the double integral, which gives the *volume* between the region and the surface. 
![[Joint PDF.png]]

#### Properties:
You can't integrate over negative cuz you'll get negative probabilities!
- $f_{X, Y}(x, y) \geq 0$
- Also the whole integral over $\mathbb R^2$ thing needs to sum up to $1$ (right since it's probability)
There is a relation between the PDF and the CDF

To calculate double integrals, we apply *unit integrals* iteratively!
1. CDF is the double integral of the PDF
2. Also vice versa (second order derivative over $x$ and $y$) 
![[CDF and PDF relations.png]]

### Finding Joint PDF from CDF (2D uniform!)
We already know $$F_{X, Y}(x, y) = \begin{cases} xy, & 0 \leq x, y \leq 1\\
y, & 0\leq y\leq 1, x \geq 1\\
\dots
\end{cases}$$
..there are 4 total versions if you recall. Anyway, we'll just do the first case for now. 

$f_{X, Y}(x, y) = \frac{\partial^2}{\partial x \partial y} F_{X, Y}(x, y)$
$= \frac{\partial^2}{\partial x \partial y} xy$
(we iterate 1-order derivatives w.r.t one argument first)
$= \frac{\partial }{\partial x} \cdot (\frac{\partial}{\partial y}(xy))$ # We reorder to differentiate $y$ first.
$= \frac{\partial }{\partial x}  x$ # We treat x as a constant. $\therefore$ the derivative of $xy$ w.r.t $y$ is just $x$ 
$=1$ # like taking the derivative of $x$, it's just $1$ 

Weird notation that's for SURE. #todo

Now we want to find $P(X < Y)$
- We want the probability over a triangular region
$P(X < Y) = \iint \limits_R f_{X, Y}(x, y)\;dx\;dy = 1/2$
- Just by looking at the diagram though, we know the density is $1$ over the unit square, and the surface is also a square (?). Anyway it's just 1/2 since unit cube is $1$
- #todo Justification might be misguided idk. I'll ask gpt

If we had to double-int though, we would nest. First we integrate w.r.t $x$:
$\int ( \int_x^1 \dots dy) \;dx$ 
- In general the inner integral will depend on the coordinate of the outer. That's how $y$ is between $x$ and $1$. #todo again, I needa think about it for longer
- I also wanna practice the maths!

### Marginal PDF (From 7.a)
$f_X(x) = \int_{-\infty}^\infty f_{X, Y}(x, y) \;dy$
- Similar to marginal PDF for discrete RVs, but instead of SUM-ing the "other" variable ($y$ in this case) that we wanted to fix, we instead integrate (like summing, but more "fine" if you remember Riemann sums)
