# Equivalent Inequalities
1. If $a < b$ and $c > 0$, then $ac < bc$
2. If $a < b$ and $c < 0$, then $ac > bc$
3. If 0 < a < b, then $\frac{1}{a}>\frac{1}{b}$ 
	- Applies only if A and B are positive; signs are flipped if negative
4. if a < b < 0, then $\frac{1}{a}>\frac{1}{b}$ 
5. If a < b, then a + c < b + c

If a < b, then $\sqrt{a} < \sqrt{ b }$ since $a < b$. 
- If x > N, 


Also, a < c < b can be written as two inequalities
- a < c
- c < b
And nice versa

Here are  some properties not explicitly shown in the slides
If $a > 0, b > 0$, then a^2 < b^2 is the same as $a^2 < b^2$ so long as the exponent is > 1

### Substituting inequalities into equalities 
If we have y = x + 2, and x < 4, we can substitute that into our first equality.
This can be understood as `x = 4 when it is on the greater side of <`
$$y = x + 2$$
$$y < 4 + 2$$
$$y=6$$
Here's another example: $y = 1/2 (4 + x)$ assuming x < 4. 
How can we show that y < x?
Note that x < 4 can be rewritten as $x/2 < 2$ or $2 > x/2$
 
$$y = 2 + x/2$$
$$> x/2 + x/2$$
$$=x$$


## Simplifying inequalities
- In cases like $x^2 \geq 0$, you may be inclined to reduce an inequality, let's say $x^2 + 3 > 0$ to become $0 + 3 > 0$. While this does hold, the solution set has now *increased* in size and the information of x has been lost. **Be careful when removing x's when you are *solving* for x's!**

## Properties of inequalities
- If AB > 0, then both A and B are > 0, or both A and B are < 0.
- If AB < 0, then either A < 0 and B > 0, or vise versa.


## Why can you not multiply both sides by an expression containing a variable?

Look at theorem a) and b). If you multiply by a negative number, the inequality flips. When multiplying by an expression with a variable we aren't certain if the expression solves to be positive or negative! Therefore, it can flip the inequality
![[Pasted image 20240923171531.png]]
In cases where you KNOW the expression you're multiplying (in the above case, it's `x+4`) is positive, then multiplying is perfectly fine. 

In the above example, you'd have to split the inequality into two, where one side assumes the expression you're multiplying is > 0, and the other < 0 to be 100% sure you're getting all solutions.
![[Pasted image 20240923171640.png]]

# Cards #calc-1 

What is 0 < a < b equivalent to? What is a < b < 0 equivalent to?
?
0 < a < b $= \frac{1}{b} < \frac{1}{a}$
0 > a > b $= \frac{1}{a} < \frac{1}{b}$


Why can't you multiply two sides of an inequality by a variable *all the time*?
?
Because the variable could be negative. We know by these theorems:
1. If $a < b$ and $c > 0$, then $ac < bc$
2. If $a < b$ and $c < 0$, then $ac > bc$
than if you multiply by a negative, the sign flips. We cannot be certain if the variable is negative or not!
<!--SR:!2024-10-07,3,250-->

How can 0 < 12/x < 6/y be rewritten?
?
Using this theorem: If 0 < a < b, then $\frac{1}{a}>\frac{1}{b}$
We can write it as
$x/12 > y/6$
<!--SR:!2024-10-07,3,250-->

if $4x < 8$ and we want to show that $y < \frac{1}{4}x$ is equivalent to saying that $y < 1/2$. How could we do that?
?
$4x < 8 = x < 2$
$y < \frac{1}{4}x \text{ eqv } y < 1/4(2) < 2/4$
So y < 1/2
<!--SR:!2024-10-08,4,270-->

If x > 2, and y < 5x, then is y < 10? If not, what is y > or < to?
?
If you try to do 
x  > 2
y < 5(2)
y < 10 

It is not possible! Since x is always > 2, but not < 2
<!--SR:!2024-10-08,4,270-->


How do you solve for $4 > 3x - 2 \geq 2x - 1$?
This is a case where the solution is of two separate inequalities. We just need to intersect the two solution sets it gives!

$$
\begin{align}
4 > 3x - 2 \geq 2x - 1 \\
4 - 3x > -2 \geq -x - 1 \\
4 - 3x > -2 \\
6>3x \\
2>x \\
-2 \geq -x -1 \\
-1 \geq -x \\
1 \leq x \\
\text{soooo} \\
2 > x \geq 1 \\
\text{or} \\
1 \leq x < 2
\end{align}
$$
And yeah that's how you solve for it!


What is the split point technique?
?
Using a number-line to find when an inequality goes above and below 0.
Chart also works too. Number line better though ig.

