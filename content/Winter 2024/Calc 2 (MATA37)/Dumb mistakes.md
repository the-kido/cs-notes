1. Eval not has u doing final - initial. not final + initial. dumb.
2. For CT, you can have $a_n < b_n$ and not just $\leq$. yeah
	1. #todo see if kathleen did this ever
3. I know that $\frac{n}{\ln(n+1)}$ is increeasing. so clearly it should go to infinity. SO, div test MUST work! tehrefore, use lhopitals rule. am dumb.

==EVERY QUESTION==: I forgot to show $a_n \geq 0$ for CT, I am a bozo.
- For safety, show that $0 \leq a_n \leq b_n$ holds explicitly. 
- Also make sure i do this for $c_n$ too though.

A11
- a) div test ONLY REQUIres the limit goes to NOT 0. I dont need to explain why the limit doesnt exist. as long as its not 0, div test applies
- g) #todo go back to this honestly. it's a bit of a doozy
- h) if i see $A^{-1}$ and its for limits, i should put it in the denom so i dont mess up limit calculation :p
- k) is good
- n) i'm not even sure how that's possible

A12
- 3.c) $\lim \limits_{n\to\infty} \frac{3}{\sqrt{1 + \frac 1 n}} = 3$, NOT 0
	- U gotta send n to infty, which does NOT make the whole sqrt 0. its acc 1
- 3.d) Remember if the top and bottom have the same degree, then there WILL be a HA.
- 4.a) I DIDNT READ THE QUESTION PROPERLY :((( 
	- I missed a VERY pivotal $!$ and it messed me up.
- 4.b) Make sure if we have a multiplying thing, that when we write out $a_{n+1}$ that we add the extra multiplying thing and *not just replace n with n+1*
- #todo 4.e you CAN use CT instead of RT. It's fine to use RT though, to be fair. 
- #todo For q6, i thought we needed to find $f^{(n)}$. Why is finding $f^{(2n+1)}$ sufficient?!
	- Otherwise i already knew the answer but whyy
doing 6.b.ii)
- Expand the sum
- Find a $f^{(n)}$ or equivalent (in this question's case, we need a $f^{{(2n)}}(0)=(-1)^n$) so f(x) = cos(x) worked for that purpose)
- Then replace and get the desired MS form with $c_n$ and $x^n$ in the right places.
#todo Do 6.b.iii for practice


## A12 Q2 practice
- For 29, we can use piecewise functions that still arent equivalent to 0, to show divergence! No cases needed.

page 670
- Q41: make sure to do piecewise for limits even if going to infinity!

# Mock exam
Q3:
- Do not decrease the denom TOO much, otherwise your g(x) will go into the negatives. In that case, the function 
	- The idea is that I can decrease the denom to as close as 0 as I want, but DONT go past 0.
	- This is an important lesson.
	- Check discord [here](https://discord.com/channels/@me/1252403409492119684/1362243728517103740) where I learn this
- #todo!
Q5:
- c) Make sure to simplify AND to make sure i don't say wrong inequalities
	- ![[Screenshot 2025-04-17 090853.png]]
	- the third inequality DOES NOT HOLD cuz if the second factor is negative and the first one gets big, it'll be *less than*, not greater than.
	- Instead i need to bound such that both factors are positive. I use what I suppose for that
Q6
- integration is still a weak point of mine
- I should remember circle things!

Q9:
- For the sequence limit proof questions, make sure that you do $$a_nb_n - ab = a_nb_n-ab_nn+ab_n-ab=b_n(a_n-a)+a(b_n-b)$$
- NOTE: you cannot choose an epsilon that is in terms of $n$. That means you need to somehow bound $b_n$ if you wanna get rid of it by instancing a known limit *twice*. 
	- Observe [[03-06]]



# Misc
Finding what a recursive sequence goes to after we show it converges
- We know $\lim \limits_{n\to\infty} a_n = \mathscr l$ for some l
- So consider lim for a_n+1 and solve for $\mathscr l$ with that 
