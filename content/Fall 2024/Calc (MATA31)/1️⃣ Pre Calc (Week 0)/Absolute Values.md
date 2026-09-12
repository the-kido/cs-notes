## Rules useful when solving for x with absolute values
|x| = a can be split into -x = a or x = a via piecewise
$$
|x| =
\begin{cases}
x, & \text{if } x \geq 0 \\
-x, & \text{if } < 0
\end{cases}
$$
## Important Equivalences to Remember
1. $\sqrt{x^2} = |x|$
	1. Likewise, $|x|^2 = x^2$
2. $|x| \geq 0$
3. $|-x| = |x|$
4. $-|x| \leq x \leq |x|$
	1. In another way, let a be > 0, then
		1. $-a \leq x \leq a$
	2. Example: $|x + 3| < 10$ is the same as $-10 < x + 3 < 10$
	3. $ab \leq |a||b|$ if we assume x = ab (this is true)
5. $|xy| = |x||y|$
	1. $|(x+1)(x-2)| = |x+1||x-2|$
6. $|x+y| \leq |x| + |y|$ (Triangle inequality)
>[!example]
> e.g $x = a^2$ and $y = -5b^2$, then..
> $|a^2 - 5b^2| \leq |a^2||-5b^2| = 5|a^2||b^2|$

7. $|x-y| \geq ||x|-|y||$ (Reverse triangle inequality)
	- For 6 and 7, when using in a proof, specify that you're using Triangle inequality or Reverse Triangle Inequality -- with a triangle!)
>[!example]
> e.g $x = a^2$ and $y = 5b^2$, then..
> $|a^2 - 5b^2| \geq ||a^2| - |5b^2||$

#todo Why doesn't reverse triangle inequality work for things like $|x^2 - (-5x^2)|$ ? I just pulled out a negative!
- It does hold, actually...


Also:
8. x = |x| if x > 0

>[!note] In the properties, $x, y \in \mathbb{R}$, meaning x and y *can be negative!*. I forgot that. So, saying -x <=|-x| is fine (by iv) #card-this

#todo Try and remember the proof for triangle/reverse triangle inequalties

## Solving absolute values
When a > 0
- $|x| = a$ (Has solutions $x \pm a$)
- $|x| < a \implies -a < x < a$ (same with $\leq$)
	- This is cuz $|x| < a$ is the same as $-x < a \implies x > -a$ and $x < a$. Combine them and boom.
- $|x| > a \implies x > -a\ \text{or}\ x > a$ (same with $\geq$)
When a < 0
- $|x| = a \text{ and } |x| < a$ have no solutions
- $|x| > a$ has the solution set $\mathbb{R}$
When a = 0
- $|x| = 0$ means $x = 0$ (Note that $\geq \text{or} \leq$ also apply here)
- Otherwise $|x| < 0$ is impossible, and $|x| > 0$ has solution set $\mathbb{R}$

## Using Rule 1
Example: $|7x-4| - 20 = 6$
- $(7x - 4) - 20 = 6$
- $-(7x - 4) - 20 = 6$

# Cards #calc-1

What are the 8 identities for absolute values
?
[[Absolute Values#Important Equivalences to Remember]]
<!--SR:!2024-10-05,1,210-->

What would the solution for $|x| = a$ be. What values of a would not allow it to be solvable?
?
$x\pm a$ when $a \geq 0$. if a < 0, there are no solutions.
<!--SR:!2024-10-06,2,230-->

#calc-1

If we have a limit $\lim \limits_{x \to \neg \infty} \frac{|x|}{10}$, why is this equivalent to $\lim \limits_{x \to \neg \infty} \frac{-x}{10}$?
?
Since "x" is negative, we have that |x| = -x by the definition of |\*|, specifically the piecewise definition


Are |-10x| and |10x| equivalent?
?
Yes, by rule #3.


Does -10 < |-10| hold? How about -2x < |-2x| for -2x > 0
?
By rule 8, we have that x < |x| for x > 0. If we let -2x be "x" in the definition, we get that -2x < |-2x| and -2x > 0 holds, so this statement is TRUE.

What is the solution set of |x| >= 10?
?
-10 >= x >= 10 does NOT hold. That rule only applies if |x| <= 10.
Instead, we have that -x >= 10, or x >= 10, by piecewise definition. 
That means the solution set is x <= 10 or x >= 10; a union and not an intersection. 


Solve for $0 < |x-5| \leq 7$
?
We can solve 0 < |x-5| and |x-5| <= 7 separately.
- 0 < |x-5| same as |x-5| > 0, which is true for all values except x = 5, so x != 5.
We can solve |x-5| <= 7 since it's equal to -7 <= x-5 <= 7 or -2 <= x <= 12.
Merging those two together, we get the interval of $[2, 5) \cup (5, 12]$


What is the triangle inequality and reverse triangle inequality 
?
The triangle inequality is $|a + b| \leq |a| + |b|$ and 
reverse is $|a -b| \geq ||a| - |b||$
