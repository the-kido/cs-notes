`pg. 331 and 333`
>[!quote] Definition 
>A <span class="emphasis">Riemann sum</span> for a function $f$ on an interval $[a, b]$ is a sum of the form
>$$\sum_{i = 1}^n f(x^*_i) \Delta x$$
>where $\Delta x = \frac {b-a} n$, $x_k = a + k \Delta x$, and $x^*_k$ is some point in the interval $[x_{k-1}, x_k]$
> 

Breakdown:
- $x^*_i$ represents where in the sub-interval we are sampling from. Considering that we start our sum at $i = 1$. $x^*_1$ could be any number from $[x_0, x_1]$. 
- $x_k$ will be every "point of partition" I'll call it. This is every point in P except for the *first* ($x_0$) point. 

#### Left, Right, and Midpoint Sums
The <span class="emphasis">general sum</span> formula has the sample point. the less general ones instance the sample point lol
- If $x^*_i = x_{i - 1}$ then the sample point is from the left endpoint. Left sum.
- If $x^*_i = x_i$ then the sample point is from the right endpoint. Right sum.
- If $x_i^* = \frac{x_{i-1} + x_i }{2}$, then the sample point is the midpoint. Midpoint sum.

>[!note] $R_n$ and $L_n$ denote <span class="emphasis">R</span>ight and <span class="emphasis">L</span>eft Riemann Sums of size $n$ ($n$ subintervals)

### Observations
- The larger the n value, the more accurate the Riemann sum estimation to A (area).
- Conjecture: If f is increasing on $[a,b]$, then $L_n \leq A \leq R_n$ 
			If f is decreasing on $[a,b]$, then $R_n \leq A \leq L_n$

### Lastly, some fun
```python
import math
  
a = 0
b = 3
n = 3
delta_x = (b - a) / n
  
estimate = 0
  
P = []

def f(x):
    return math.exp(x)
  
# Riemann Partitions have n + 1 elements
for i in range(n + 1):
    P.append(a + i * delta_x) # This is the formula for each element according to the def'n of R
  
# From the def'n of R sum, the sum notation starts at 1 and goes to n.
for i in range(1, n + 1):
    sample_point = P[i - 1] # This is left sum! Right sum would not have the -1 of course.
  
    rect_area = delta_x * f(sample_point) # Straight from the Riemann Sum formula
    estimate += rect_area # The for loop and this line act as the sum notation
  
print(estimate)
```

# Motivation
>[!check] Motivation 
>Find the signed area A between $f$ and $[-1, 2]$ for the below graph.
>> Note: <span class="definition">Signed Area</span> can assume negative values too
>
>![[Pasted image 20250111084915.png|600]]
>Ans: We can just use simple geometry to find the area is $-1$.
>
>However, what if our function looks like this with an interval of $[0, 3]$?
>![[Pasted image 20250111085224.png]]
>We simply cannot use geometry because of the funky curves. However, we can *estimate it* with some arbitrarily sized rectangles!
>> The given R partition of $[0,3]$ helps us estimate the signed area.
>
>![[Pasted image 20250111111253.png]]
