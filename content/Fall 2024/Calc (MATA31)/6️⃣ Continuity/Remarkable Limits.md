When doing squeeze theorem limits, there are some common limits that we've proven automagically
1. $\lim \limits_{x\to 0} sin(x) = 1$
2. $\lim \limits_{x\to 0} \cos(x) = 0$
3. $\lim \limits_{x\to 0} \frac{sin(x)}{x} = 1$
4. $\lim \limits_{x\to 0} \frac{\cos(x)}{x} = 0$

Proof for 3 (by applying squeeze theorem)
- We need to show that (i) and (ii) are true
- (ii) is easy since lim x --> 0 cos(x) is 1 and lim x --> 0 1 = 1 by previously proved limits and limit rules
- (i) is trickier, and utilizes geometry.
	- Choose d  = pi/2
	- Show that 0 < x < pi/2:
		- area of sector OAD <= area of triangle OCD (look at the pictures on [[Trigonometry]])
		- $1/2 \cdot (1)^2 \cdot x \leq  1/2 \cdot 1 \cdot \tan x$
		- $x \leq \frac{\sin x}{\cos x}$
		- $\cos x \leq \frac{\sin x}{x}$ (only cuz x > 0)
	- Show that -pi/2 < x < 0
		-  he didn't show us :( 
		- $\frac{\sin x}{x} \leq 1$  


To prove  1-cos(x) / x, you can multiply by 1 (that is, 1 + cos(x)) and then get 1 - cos^2 x which is just sin ^2 x and use the theorem for proof 3 above. (35:00 on lecture 5b if you wanna do that)

# Cards #calc-6 
Prove that $\lim \limits_{x \to 0} \frac{\sin x}{x} = 1$
?
It's on the lecture. i need to remember it.... #todo


Evaluate $\lim \limits_{x \to 0} \frac{\tan^{-3} 2x}{x^2 \sin7x}$
?
The answer is 8/7. Explanation in week 6a slides