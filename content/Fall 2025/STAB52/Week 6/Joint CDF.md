The multivariate version of regular CDFs.

Joint CDFs apply to discrete, contiguous, hybrid, as always

But it's limited because we don't usually have the closed form CDF :(

> For arbitrary RV's $X, Y$, the *joint* CDF are probabilities of the type
> $F_{x, y}(x, y) = P(X \leq x, Y \leq y)$
> $=P(\set{X \leq x} \cap \set{Y \leq y})$

Visually, this gives you the "lower left" quadrant of the cartesian plane (everything left of and below the point $(x, y)$. 
![[Joint CDF looks like.png]]

#### Using it to find Marginal *CDF*
$$F_x(x) = \lim \limits_{y \to \infty} F_{X, Y}(x, y) = F_{X, Y}(x, \infty)$$$= P(X \leq x, Y \leq \infty)$, which matches the visual description

So it's simple! We "fix" $x$ and push $y$ to infinity 


### Cartesian Product
- Finding probabilities of rectangular regions (cartesian products) is found easily by using the CDF.

1. We first use the Joint CDF to get the lower-left quadrant of the top-right corner of the rectangle. So what we can do is subtract *it* by the whole leftmost region, and subtract again the bottom strip, and add back the bottom left CDF again.
	1. With 4 evaluations, we can get the rectangle.
		1. You can figure this out visually
	2. For 3D though, you'd need to do 8 calculations
	3. In general it's $2^d$ calculations where $d$ is the dimension
Anyway that gives the formula
![[Rectangle and Cartesian Product.png]]

### Multivariate Uniform Distribution  
> An example of CDFs in action
![[2D Uniform RV.png]]
- It's "uniform" because any subset you take will have a chance proportional to its size
- We standardize this often whose sides are $0$ to $1$ (total area is $1$). This is a *unit square*
- For any point $(x, y)$ inside the square, the CDF is = $P(x \leq X, Y \leq y)$ (red in image above)
	- Probability is proportional to area!
- Points outside the unit square (i.e. *either* of the coords are negative) will have a CDF of $0$ automatically. If the x and y of a point is both larger than $(1,1)$, then the probability *will* include the entire unit square (so it's $1$) 
	- For the two leftover strips (and this is related to the marginal CDF), if the $x$ is greater than $1$, then the CDF is just the $y$! The height of $y$ is all that matters. Vice versa also applies
![[Visual of CDF uniform nonsense.png|300]]
#### Marginal CDF 
![[Marginal CDF of multi-var uniform.png]]
- Similar to the Desmos image above. When $x$ is maxed out (bounded above by $1$) then only $y$ influences the probability 

#todo you can have uniform disks / circles >_> ?



