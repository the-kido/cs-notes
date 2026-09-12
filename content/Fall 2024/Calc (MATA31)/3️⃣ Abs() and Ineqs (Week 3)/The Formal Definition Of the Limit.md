🥶🥶🥶
The most common written form:$$\forall \epsilon > 0, \exists \delta >0 \text{ such that } 0 < |x - c| < \delta \implies |f(x) - L| < \epsilon$$ However, for a version which includes some implied parts, you can use:
$$\exists L, c \in \mathbb{R} \text{ such that } \forall \epsilon > 0, \exists \delta >0 \text{ such that } \forall x \in \mathbb{R}, 0 < |x - c| < \delta \implies |f(x) - L| < \epsilon$$
So only the L, c, and x are implicit.
## Explaining the definition

![[Pasted image 20240924122427.png|400]]

#### 0. 
The informal definition of a limit is, as x gets close to c (but $x \neq c$), then f(x) gets close to L
- c is the "center"
- $\delta$ is the x-tolerance
- $\epsilon$ is the y-tolerance
Graphically, we omit the very ends (c + delta, or c - delta) of the *range* of the window.
#### 1. $|x-c| < \delta$
We want the [[Distance]] from c and x to be as small as possible. We show that with $|x - c| < \delta$ where delta represents a small number. It should be *smaller* than that number!
- It is not accurate to say that delta is the "smallest number possible" since that doesn't exist. 
Since |x-a| = 0 may not be defined (think holes), we exclude it with $0 < |x-a| < \delta$
- This is a <span class="emphasis">Punctured Interval</span>
#### 2. $|f(x) - L| < \epsilon$
If the distance from a to c is small, then the distance from f(x) to L is also small (as per the informal definition).

#### 3. $\forall \epsilon > 0$ and $\exists \epsilon > 0$
ALL values of epsilon must work! This is because some values of epsilon will allow the function to pass the statement (i.e. the function does not touch the grayed-out area). Look at the graph below. For the specific epsilon chosen, the function has a limit.

For all values of f(x) within $c - \delta < c < c + \delta$, f(x) must be between $f(x) - epsilon < f(x) < f(x) + epsilon$. 
If there is one value of epsilon where f(x) is not windowed, then the choice of $\delta$ failed. If every value of delta doesn't work, then lol that limit DNE.

f(x) has to exist for all x in the window.
![[Pasted image 20240924130047.png|400]]
 
# Resources
[2.5 The formal definition of limit](https://www.youtube.com/watch?v=eCBM1tVHDqo)
