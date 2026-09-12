https://q.utoronto.ca/courses/376493/assignments/1452393

# 1.
We will prove the contrapositive: if p is odd, then p^2 is odd
Assume p is odd. Then p = 2k + 1 for some k integer.
We then have that $p^2 = (2k+1)^2 = 4k^2+4k+1 = 2(2k^2 + 2k) + 1$. Note that $2k^2 + 2k \in \mathbb{Z}$ since $k\in \mathbb{Z}$
Therefore, $p^2 = 2i + 1$ for some integer i.
By definition of odd, p^2 is odd. This shows p is odd => p^2 is odd. This must mean the contrapositive is true, that p^2 is even => p is even as required to show. 

# 2.
$P(n) = 0 < x_{n+1} < x_n < 4$

let k >= 1 be arbitrary
Assume P(k) holds
Then 0 < $x_{k+1} < x_k < 4$ holds.

So $x_{n+2} = \frac{1}{4-x_{n+1}}$ 
$x_{n+2} < \frac{1}{-x_{n+1}}$

$x_{n+1} = 3 - 1/x_{n+2} < 3$ with maths
-1 / $x_{n+2} < 0$
1 / $x_{n+2} > 0$
1 / $x_{n+2} > 0$
1. $0 < x_{n+2}$
2. $x_{n+1} < 3$

0 < $x_{n+1} < 3 < 4$
			
$0 < x_{k+2} < x_{k+1} < 4$


(strong induction attempt)
$\forall n \geq 1, \forall 1 \leq i < n, P(i) \to P(n)$
Let n > 1 be arbitrary
Suppose 1 < i < n, P(i)
Suppose n = 1
- $x_2 = \frac{1}{4-3} = 1$
- $0 < 1 < 3 < 4$
- $0 < x_2 < x_1 < 4$
- P(n) holds
Suppose n = 2
- $x_2 = 1$
- $x_3 = \frac{1}{4-1} = \frac{1}{3}$
- $0 < \frac{1}{3} < 1 < 4$
- $0 < x_3 < x_2 < 4$
- P(n) holds
Suppose n >= 3
- $1 \leq n - 1 < 3 \wedge i \leq n - 2 < 3$
- P(n-1) and P(n-2) hold
- $0 < x_{n} < x_{n-1} < 4$ and $0 < x_{n-1} < x_{n} < 4$
- $0 < x_n < x_{n-1} < 4$
- P(n) holds
P(n) 
And yeah we get the thing and we're done.

#todo Confirm this answer is right somewhere and somehow.
# 3.
Very easy. Write it all nice later though.

# 4.

#todo g. Idk why i cannot do g
# 5.
Differentiating is easy

# 6.
First, observe that cos(x) is continuous on R so cos(3t-4) is continuous.
Rationals are continuous where their denominator is not 0. Therefore t != 1.
By continuity theorem (since $\cos(3t-4)$ and $\frac{t^2}{t-1}$ are continuous on their domains), the sum of continuous function is continuous. So, $f$ is continuous everywhere but 1.
Since $[2,6] \subseteq$ {$x \in R | x \neq 1$}, it must be that f is also continuous on $[2,6]$?

#todo idk if this is right. i think i partially got it though. 

# 7.
1 + 1/n (2, 1.5, 1.33, etc.). sup = 2. inf = 1 for sure.
sup proof.
WTS sup(A) = 2. This means both
1. 2 is an upper bound of A (that means $\forall x \in A,  x \leq 2$)
2. If b is an upper bound, then 2 <= b.

For 1: Since n >= 1, 1/n <= 1 so 1 + 1/n <= 2. Since $1 + 1/n \in A$, it must be that 2 is an upper bound of A. wow that was easy.

For 2: let b be an upper bound. For any upper bound, 2 must be less than it.
Let b be an upper bound. So, for all $n\in \mathbb{N}, b \geq 1 + 1/n$. To derive a contradiction, suppose $2 > b$. So, $2 > b \geq 1 + 1/n$. However, when n = 1, $2 > b \geq 2$ is our inequality and that's totally wrong, right #todo Where am I going wrong. Or is this right? 

# 8.
Should do when I think I need to do it. It does look pretty aids though.

# 9. 
super easy

# 10.
Also very easy

# 11.
Also easy. The proof is also given by mike in week 3 or 4 or something
# 12.
WTS $\forall \epsilon > 0, \exists \delta > 0 \text{ s.t. } 0 < |x| < \delta \implies |g(x) - 0| < \epsilon$
Let epsilon > 0 be arb.
Choose delta = epsilon
Assume 0 < |x| < delta.
same as -x < delta < x

Needa get |g(x)| < epsilon

-g(x) < epsilon < g(x)


By density of irrationals in R, there is a number $y \not \in Q$  such that y
Then g(y) = -x < delta = epsilon
By density of irrationals in R, there is a number $y \not \in Q$  such that y
Then g(y) = x > delta = epsilon

So we have both g(y) < epsilon and g(y) > epsilon. this makes no sense!

#todo 

# 13. 
Probably not too hard

# 14.
Suppose there does not exist an L such that the limit exists.





# Ones i think will be easy:
- 
Ones i think will be hard:
- 2, 6?, 7?, 12~, 14
So 5/14. Not bad.

1/x_n+1 = 4-x_n
$x_n = 3 - 1/x_{n+1}$

$x_{n+2} = \frac{1}{4-x_{n-1}}$
