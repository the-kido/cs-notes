1.1
To solve for $f(2x+3) = ____$ what we do is make a new variabel t = 2x + 3. if there are restrictions (i.e. x != 1) then we must update the restriction on t instead
$x = \frac{t-3}{2}$ 
$x \neq 1$
$t-3 \neq 2$
$t \neq 5$
There ya go

#todo i have NO cluer why I am strugging on 1.7 so much oml




## Ones i skipped cuz they are so aids

1.9
2.8


### Temp answers
#### week 3
a. DNE
b. 2
c. 4
d. 
right f(x-->3) = 6
e. 
right: f(4-->3) = 3
left: f(3) = 6
DNE
f. 
right: f(3-->2) = 3
left: f(3->2) = 3
lim = 3

g.
both sides have f(1-->2) = 1

h. 
left: 
lim = (f(2-->1) - 2)^2 = (1 - 2)^2 = 1
right:
lim = (3 - 2)^2 = 1

Theorem that might be important? #todo
> Let $x, y \in \mathbb{R}$. Then $x=y$ iff $\forall \epsilon > 0, |x-y| < \epsilon$

#### Week 4
In order to bound x^2 + 2x + 4 (it has no sol'ns) you can rewrite it as |x|^2 + 2|x| + 4 by absolute value properties. Then just bound |x| instead of anything else fancy!

Do 4.1 f again if you wanna #todo

"$\exists L \in \mathbb{R}$ is an implicit assumption made in the limit def'n."


#### Week 5


if N is going to infinity, and we choose N to be between 1 and something, we want it to be the MAX between, not the min (as min means $\min{a,b} \leq a$ whereas $\max\set{a, b} \geq a$)

Remember $|\sin \theta | \leq \theta$

#### Week 6
to use piecewise def'n of absolute, we can use the fact that x is sufficiently close to the value it's approaching, so depenidng on its sign we can change the absolute funciton thingy. (like in 6.1.a)

When you apply a limit, you say that it's by limit rules (quotient, constant, etc.)
If VA and going to infty, don't  say x > 0, say x  > VA (so it doesn't cross the VA)


6.2.a
a) 
max = sup = 5
min = inf = -13
bounded abv and below (bounded)

b) max = sup = 1
min = inf = 0
yeayeay

c) max = sup = 1
min = no. inf = no
bounded abv. bounded is yes

d) 
no sup.

e) max = sup = 1
min no exist. inf = 0
bounded abv and below

f) max = sup = 2
min = inf = 1/2
bounded is yes

Assume a and b are two maximums of set S. By definition of maximums, we have that $\forall x \in S, x \leq M_1$ and $\forall x \in S, x \leq M_2$.
Since $M_2 \in S$, we have that $M_2 \leq M_1$. Similarly, $M_1 \leq M_2$. Therefore, M_1 = M_2, so the maximums of a non-empty set must be unique. 


6.7
Since A is a subset of B, B is also non-empty as it contains the elements of A. 
WTS A is bounded above (i.e. A has an upper bound).
We have that B is bounded above, implying B has a supremum by Least Upper Bound Property. Let $x \in A$. That means $x \in B$ since $A \subseteq B$. By definition of supremum, we have that $\forall x \in B, x \leq \sup(B)$. This shows that x has the upper bound of sup(B). Therefore, A is bounded above.
By LUB property, x has a supremum. By definition of supremum, sup(A) is $\leq$ all upper bounds, including sup(B). Therefore, $\sup(A) \leq \sup(B)$ as required to show. 


6.5
Suppose $x \in S$ and x is an upper bound. Then, $\forall y \in S, y \leq s$
WTP x = sup(S). Then
1. $x$ is an upper bound of S by assumption
2. for all upper bounds, x must be smaller or equal to all of them. To derive a contradiction, suppose there is a bound b lower than x. However, $x \in S$, so b < x contradicts that is an b an upper bound. 

This is fine, but u coudl also use x <= sup(S) and sup(S) <= x to show x = sup(S)
- x in S, so x \leq sup(S) by defn (since sup(S) s an upper bound of S)
- Since x is an upper bound, $sup(S) \leq x$ by defn of sup (it is the *least* upper bound)

6.8
First we show that B has a supremum. For that, the supremum, call it s, must be:
1. a upper bound of B
2. The least upper bound
1.Since A is bounded above, subset of R, and nonempty, by completeness axiom we have that sup(A) exists. Let $x \in A$ be arbitrary. by defn' of supremum, $x \leq sup(A)$. Then, $cx \leq c\cdot\sup(A)$ since c > 0 by inequality properties. Since $ca \in B$, $c\cdot \sup(A)$ is an upper bound of B.
2.
Let b be an upper bound of B. Also, let a \in A be arbitrary. Then $ca \leq b$ since b is an upper bound. 

sup(B) <= b
WTS $s \leq b$

#todo 6.8 is WEIRD


#### Week 7
WTS N does not have a max. In fact, N does not have a element such that it is >= every other element.
To derive a contradiction, assume N has such element, call it m for max ig. 
Then $m \in N. So, M > 0. By Archimedean property (take x = 1> 0, y = M > 0), there is a number n such that 1n > M. This contradicts that M is the maximum of N since $n \in N$

7.2
WTS inf(S) = 0.
To do that we show:
1. inf(S) is a lower bound
2. For all lower bounds, it is the largest

1.We know 0 is a lower bound since 1/n < 0 for all $n \in N$.
2.
To derive a contradiction, suppose there is a lower bound L > 0. 

Ln > 1
L > 1/n
It's not a lower bound though.

By Archimedean property (let)


7.4
To derive a contradiction, assume the function is continuous.
Then, for all x, $\forall \epsilon > 0, \exists \delta > 0, |x-c| \leq \delta \implies |f(x) - f(c)| < \epsilon$
Basically choose c to be in Q, and choose an x that isnt in Q by density of rationals in R
Choose c to NOT be in Q, then choose x to be in Q by density of irrationals in R

7.5
Let f(x) = x^3 - 5x + 1. We want to show that f(c) = 0 holds for some c in R.

First, note that f(0) = 1 > 0 and f(1) = -3 < 0. By IVT (a = 0, b = 1, N = 0), there is a number $c \in (0, 1)$ such that f(c) = 0. Therefore, there is a root!

Using bisection method, f(0.5) = -11/8 < 0. By IVT, there is a root between [0, 1/2] since f(0) > 0
f(0.25) < 0. By IVT, there is a root between [0, 0.25] since f(0) > 0 still.
f(0.125) > 0. This means, by IVT, there is a root between [0.125, 0.25] by IVT since f(0.125) > 0

7.8
Let $f(x) = g(x) - x^2$. Note that f(x) is continuous by continuity theorem (sums of functions) since g(x) is continuous on R by assumption and $x^2$ is a polynomial.
Then, f(1) = 4 - 1 > 0 and f(2) = 1 - 4 < 0. By IVT (since f(x) is continuous on R), there is a number $c in (1, 2)$ such that f(c) = 0.
Then, $f(c) = 0 \implies g(c) - c^2 = 0 \implies g(c) = c^2$ as required to show.

#### Week 8
If continuous, then limit will existence!! 
(f+g)'(x) != f'(x) + g'(x)
- Think of a function that, when *summed* is differentiable, but separately is not (|x|!!!)

if ab = 2, then neither a nor b can be 0

#### Week 9

![[Pasted image 20241218221718.png]]
- For these inverse questions, sometimes the inverse is guessed. i.e $f^{-1}(1) =0$ could be found if by guessing f(0) = 1.

x/|x| denotes a sign change as x > 0 or x < 0

#### Week 10
Don't skimp on case work ! Especially for inequalities (a = b, a < b, a >b)
For questions requiring you to prove there's only 1 solution, use f(a) = f(b) = 0, and a < b

#### Week 11
11.5 is wack
For a slant asymptote, only 1 of the sides has to work. Both sides? nah. 

To show a VA exists, the left and/or right *limit* at that point must be +- infinity. If it does, then lol it's defo not a VA.


### Memorizing the proofs
MVT guarantees a point is parallel to the secant line

MVT proof (idea)
1. Turn your head 
2. We want g(x) = f(x) - secant line from a to b
	1. the formula for it is $\frac{f(b)- f(a)}{b-a}\cdot(x-a) + f(a)$ 
	2. it's kinda like rolles cuz g(a) = g(b) = 0
3. Before applying rolles to g, make sure hypothesis is good
	1. g is cont on $[a,b]$ by continuity thm cuz f is, and the sec line is cuz it's polynomial. the diff of cont functions are continuous
	2. g is diff on (a,b) cuz
		1. f is diff on (a,b) by assumption
		2. polynomial is diff on R
		3. so by derivative rules, if each function is diff, then g is diff
		4. (a function being diff by diff rules means it's diff on interval)
4. Note g(a) = f(a) - --(blah)--- = 0 and g(b) = 0 as well
5. By Rolle's thm (on g), there is a c in (a,b) such that g'(c) = 0
6. Also, find g'(x)
	1. u get $g'(x) = f'(x) - \frac{f(b)-f(a)}{b-a}$
	2. the rest is EZ


Here, let me try to write it formally.
MVT: 
- If f is continuous on [a,b], and
- f is diff on $(a,b)$
Then there is a $c \in (a,b)$ such that $f'(c) = \frac{f(b) - f(a)}{b-a}$.

Proof.
- Suppose f is cont on [a,b] and f is diff on (a,b).
- let $g(x) = f(x) - \left( \frac{f(b) - f(a)}{b-a}(x-a) + f(a) \right)$
- Note that g(x) is continuous on [a,b] by continuity theorem since f(x) is continuous on [a,b] and the rest is sums and differences of polynomials.
- Also note that since f is diff on (a,b) and polynomials are diff on R, by derivative rules g is diff on $(a,b)$.
- Then g(a) = 0 and g(b) = 0.



Rolle's thm proof (idea)
- Assume 1, 2, 3 hold. 
- Suppose `k` = f(a) = f(b) 
- 3 cases: f(x) = k, < k, and > k for all x in (a,b)
- f(x) = k
	- f'(x) = 0 for x in (a,b)
	- So there a c in (a,b) such that f'(c) = 0
- f(x) > k for some x in (a,b)
	- By EVT, there is a $c \in [a,b]$ such that f has an absolute max on [a,b], say at x = c.  
	- (we show c != a or b for closed interval)
	- c!= a and c!=b since $f(c) >= f(x)$ (abs point) for all $x \in [a,b]$ and f(c) > k *and* $f(a) = f(b) = k$
		- basically, show f(c) > f(b) and f(c) > f(a). therefore, c != a or b
	- Thus, there is an interval I containing c such that f(x) <= f(c) for all x in I (by defn of local max)
	- By Fermat's theorem (since local max at c and diff at c by 2), f'(c) = 0.
- for f(x) < k for some x in (a,b), but max replaced with min and switch inequalities.



Fermat's theorem:
- Let f be defined around open interval around c. If f has a local extrema at c. then f'(c) = 0.

Fermat's Theorem (proof)
- Assume yayaya. It must have either local max or min and f is diff at c
- We have two cases (local max or local min)
- Local min:
	- There is an open interval I containing c such that forall x in I, f(c) <= f(x). 
		- Note that also means f(c) - f(x) <= 0.
	- Since f is diff at c, we have that f'(c) = lim x -c f(x) - f(c) / x-c. That means 1 sided limits also exist. We try to show f'(x) <= 0 and f'(x) >= by cases again! This time, when x < c and when x > c!
	- With the limits we get f'(c) = 0 yippee.
![[Pasted image 20241219223112.png]]
- May be relavent

simplified:
1. defn has a open interval around c such that extrema means f'(c) = 0.
2. Use cases for min and max
3. use def'n of min to show that f(c) <= f(x) for all x in I where I is an interval containing c.
4. Use the fact that f'(x) exists and the def'n of derivative (x-->c one tho) 
5. Use the one-sided limits (noting that $x<c$ and $x>c$ depending on direction) and the fact that f(c) - f(x) <= 0 to show f'(c) <= 0 and f'(c) >= 0. 
6. boom. now for the other side! (nah not really, just say it's the same but some inequality symbols are swapped and we use max instead of min or something OK)


### All together:
- Rolle's has 3 cases (f(x) = k, f(x) > k, and f(x) < k) for some x in (a,b)
	- First is easy cuz f'(x) = 0 lol
	- Gotta use EVT and Fermat's theorem. Must show that c != a and c != b via f(c) <- f(x) for x in [a,b]. ykyk.
- MVT has none (just the fancy g(x); everything else is easy as flip)
- Fermat's has 2 cases (min and max) but we don't needa copy paste for the other one. Really, you gotta just show f'(x) as two limits, use the $x<c$ and $x>c$ to your advantage to get f'(c) = 0.