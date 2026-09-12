19 questions
### Q1
Let $X, Y \sim \text{Uniform}(0, 60)$ be the time past noon they arrive.
Then we want to find the chance that $|X-Y| \leq 15$ 

Total area: $3600$ (these are ALL the possible time pairs (minutes) the two could arrive)
$A_{meet}$ = total - 2 (negative triangles)
$= 3600 - 2 * (45 * 45 /2 )$
$=1575$

So $P(meet) = \frac{1575}{3600}$


### Q2
a)
There are $3$ dice rollable with 3 options each. That means there are $3 \cdot 3 \cdot 3$ total permutations. Interesting!

The value pairs can be:
- $(1, \set{1,2,3})$
- $(2, \set{2, 3})$
- $(3,3)$
So there are only 6 *total* options here

b) We want this PMF (discrete YAYY).
This means mapping every kind of pair to a *chance* compared to the rest of the options. There are 27 total triplets and 6 options to sort them into

$$p_{X_\min, X_\max}(x, y) = \begin{cases}
1/27, &(x, y) \in \set{ (1,1), (2,2), (2,3)}\\
6/27, &  (x, y) = (2,3) \\
6/27, & (x, y) = (1,2)  \\
12/27, & (x, y) = (1,3) \\
0, & o/w
\end{cases}$$
1. First case they got since if the triplet is (2, ?, 2) then it must be (2,2,2) to have max = min. Basically the triplet needs to be homogenous, and that's a 1/27 chance for each 3 possibiliites
2. Then (2,3) means min must be 2 and max must be 3. There are only 6 instances of that in the sample space we listed before (thanks, question, for giving it)

c) 
To get the marginal, we sum the auxiliary variable away
$p_{X_\min}(x) = \sum_{y=1}^3 p_{X_\min, X_\max}(x, y)$
$=p_{X_\min, X_\max}(x, 1) + p_{X_\min, X_\max}(x, 2) + p_{X_\min, X_\max}(x, 3)$

$$= \begin{cases}
1/27 + 6/27 + 12/27 = 19/27 , &x = 1\\
0/27 + 1/27 + 6/27 = 7/27 , &x = 2\\
0/27 + 0/27 + 1/27 = 1/27 , &x = 3\\
0, &o/w
\end{cases}$$
- Remember I can list the $x$'s since there's so few of them which makes life very easy

### Q3
Discrete my beloved.
Nevermind this question is strange. It uses similar logic to some of the continuous stuff of later-time but yeah it's weird.
#todo 

### Q4
a)
We find $c$ from the CMF
$1 = F_X,Y(x,y) = \sum_{x=1}^{10} \sum_{y=1}^\infty cx(1/2)^y$
$= c\sum_{x=1}^{10} x \cdot 1$ <span class="emphasis">sum_1^infty (1/2)^y = 1</span>
$=55c$
So $c = \frac{1}{55}$

b)
$p_X(x) = \sum_{y=1}^\infty cx(1/2)^y$
$= cx \cdot 1$
$= \frac{x}{55}$ for x = 1, 2, ... , 10

$p_Y(y) =\sum_{x=1}^{10} cx(1/2)^y$
$=c (1/2)^y \cdot 55$
$= (1/2)^y$ for y = 1, 2, ...


### Q5
a whole essay

a) Okay so we use first principle.
For questions like these you only need 2 RV's because the 3rd one is made up of the other two. The number of independents is 10 - X - Y.

Then $P(X = x, Y = y)$ is the chance that there are $x$ democrats and $y$ republicans
We can use first principles to determine this

it's out of ${ 120 \choose 10}$ total combos
You choose "x" democrats out of 50, "y" republicans out of 40, and "10 - x - y" out of 30 independents. 
Thats x * y * z ways in total, divided by the total combinations you could have.

Then for just $P(X= x)$, it's even more trivial (it's a hypergeometric distribution)
$P(X = x) = \frac{ { M \choose x } \times { N - M  \choose n - x }  }{  {  N \choose n  } }$
The rest is pretty easy. We'll just do the democrat one.
$M = 50$. $N = 120$ and $n = 10$ 


b)
Okay so like we know $X_3 = n - X_1 - X_2$ and $p_3 = 1 -  p_1 - p_2$
$p_{X_1, X_2}(x, y) = { n \choose x, y, n - x - y} p_1^{x} p_2^y (p_3)^{n - x-y}$

### Q7
a)
$X + Y + Z = 5$ 
$p_X  = p_y = 4/52$ and so $p_z = 1 - p_x - p_y = \frac{44}{52}$

We're replacing, so each trial is like a binary. The chance is always the same... this is a multinomial question!
So we see that $(X, Y) \sim \text{Multinomial}(5, p_x = p_y = 4/52)$

$p_{X, Y}(x, y) = { 5  \choose x, y, 5 - x - y} p_x^{x} p_y^y (1 - p_x - p_y)^{5 - x - y}$
So that's joint. For marginal that's just a binomial question
$p_X(x) = {5 \choose x })(4/52)^x(48/520^{5 - x}$


b)
Without replacement is Hypergeometric. We can derive the formula using our big brain
We want $P(X = x, Y = y)$
- Bottom: ${52 \choose 5}$
- Top: ${ 4 \choose x} { 4 \choose y}{ 44 \choose 5 - x - y}$ (where 0 <= x <= 4 and 0 <= y <= 4)
I am so GOATED


### Q8
a)
$1 = \int_{-\infty}^\infty \int_{-\infty}^\infty c(x^2 + y)\;dx\;dy$
$1 = \int_{0}^{1 - x^2} \int_{-1}^1 c(x^2 + y)\;dx\;dy$
$= \int_{0}^{1-x^2} c( \frac{x^3}{3} + yx  )|_{-1}^1 \;dy$
$=\int_0^{1 - x^2} (1/3 + y - (-1/3 - y))$
$=\int_0^{1-x^2} 2/3 + 2y\;dx$
$= 2/3y + y^2 |_{0}^{1-x^2}$
$= 2/3(1-x^2) + (1-x^2)^2$
Oops but it's $c = 5/4$ so it's not bad

b)
We probably need the CDF first right. NO. No we don't!

We need the *marginal*, which means sending $y$ to infinity (or i guess $1 - x^2$ cuz that's the upper limit b4 the pdf is just $0$).
In fact we don't even need the marginal. If we're trying to find the area, we use the integral whose range is from 0 to 1/2 
$P(0 \leq X \leq 1/2) = \int_0^{1/2} \int_0^{1-x^2} \frac{5}{4}(x^2 + y) \;dy\;dx$ (again i put the dx inside when it was supposed to be outside. oops)
$=\frac{5}{4} \int_0^{1/2} [x^2y + \frac{y^2}{2} ]_{y = 0}^{1-x^2}$
$=\frac{5}{4} \int_0^{1/2} x^2(1-x^2) + (1-x^2)^2/2 \;dy$
$=\frac{5}{8} \int_0^{1/2} (1-x^2)(2x^2 + (1-x^2))$
$=-\frac{5}{8} \int_0^{1/2} (x^4 - 1)$
$=-5/8 [ \frac{x^5}{5} - x]_{x = 0}^{1/2}$
$= -5/8 ( \frac{1}{160} - 80/160 )$
$= \frac{79}{256}$ YESSS


c) 
$P(X \leq Y)$
wait what the heck

d) is just 0 cuz you can't have an area > 0 for two points \sqrtX and -\sqrtX

### Q9
Skipping but it should be easy
For *discrete*.


### Q10
a)
To show valid, we show at all points it's >= 0 (which it is)
Then we show that integrating it gives value of $1$

$\int_0^1 \int_0^1 f_{X, Y}(x, y) \;dx \;dy$
$= \int_0^1 \frac{1^2}{2} + y \;dy$
$=[1/2 y + \frac{y^2}{2}]_{0}^1$
$= 1/2 + 1/2 = 1$

So yeah

b) 
$F(X =  x, Y = y) = P(X \leq x, Y \leq y) = \int_{0}^x \int_0^y x + y \;dy\;dx$ for $0 < x, y< 1$
$= \int_0^x [xy + \frac{y^2}{2}]_{0}^y \;dx$
$= \frac{yx^2}{2} + \frac{xy^2}{2}$
Yay

c) We find $f_X(x) = \int_0^1 f_{X, Y}(x, y) \;dy$ (we integrate *out* the $y$ value. For CDF we just send $y$ to infinity (bounded above by $1$ of course)) (where $0< x,y < 1$)
$=[xy + \frac{y^2}{2} ]_0^1$
$= x + 1/2$

easy


### Q11

a)
$P(2 \leq X \leq 4, 1 \leq Y \leq 2) = F(3, 2) - F(2, 2) - F(3, 1) + F(2, 1)$
$= 11/78$ with a lot of plugging in (I'm goated!!!!)

b)
We integrate away the $Y$ wait no we just send it to infinity cuz this is CDF!!
$F_Y(y) = F_{X, Y}(3, y)$
$=\frac{1}{156}3y(9+y)$
im GOATED

c)
PDF time. That means derivatives.
$f_{X,Y}(x, y) = F'_{X,Y}(x, y)$
frick i don't know the notation for the partial stuff
$= \frac{\partial^2}{\partial x \partial y} \frac{1}{156}xy(x^2 + y)$ (i think that's similar?) ($xy(x^2 + y) = x^3y + xy^2$)
$=\frac{\partial}{\partial x} ( \frac{\partial}{\partial y} \frac{1}{156} (x^3y + xy^2))$
$=\frac{1}{156} \frac{\partial}{\partial x} ( x^3 + 2xy )$ 
$=\frac{1}{156} (3x^2+2y)$ for x and y in the range u gave b4
nice

d) 
$P(X \geq Y)$ means using le diagram. We use PDF method i think!? Or wait no that's later. WHATEVER
$x$ goes from $0$ to $3$ but $y$ we want to be the same as $x$.
We integrate $x$ from 0 to 3, and $y$ from $0$ to $x$
#todo I saw the answer so I didn't think about it TOO hard but it does make sense to me a tiny bit.

$P(X \geq Y) = \int_{0}^x \int_0^1 f_{X, Y}(x, y)\;dx\;dy$ where x y are in that region range
$=  \frac{1}{156} \int_0^x [ \frac{yx^4}{4} + \frac{x^2y^2}{2} ]_0^1$
$=  \frac{1}{156} \int_0^x   \frac{y}{4} + \frac{y^2}{2} \;dy$
$=  \frac{1}{156} (\frac{x^2}{2} + \frac{x^3}{6})$


### Q12
Okay I'm gonna skim over the solutions a bit more coz I won't have that much time.

LOL it's a DUPLICATE

a) 
$1 = c\int_{-\infty}^\infty   \int_{-\infty}^\infty  (x^2 + y) \;dy \;dx$
$= c\int_{-1}^1 \int_{0}^{1-x^2} (x^2 + y) \;dy \;dx$
$= c\int_{-1}^1 [x^2y + \frac{y^2}{2}]_{0}^{1-x^2} \;dx$
$= c\int_{-1}^1 [x^2(1-x^2) + \frac{(1-x^2)^2}{2}] \;dx$
$= c/2\int_{-1}^1 [2x^2(1-x^2) + {(1-x^2)^2}] \;dx$
$= -c/2\int_{-1}^1 x^4 - 1 \;dx$
$= -c/2( \frac{1}{5} - 1 - (-\frac{1}{5} + 1))$
$=c(4/5)$
So c is 5/4

# Q13
a)
This is like a triangle-shaped region
Integrate!
$1 = \int_{-\infty}^\infty \int_{-\infty}^\infty cx^2y^2 \;dx\;dy$
We'll integrate all of $x$, but we'll integrate $y$ up to $x$
$=c \int_{0}^1 x^2 \int_0^x y^2 \;dy \;dx$
$=c \int_{0}^1 \frac{x^5}{3} \;dx$
$=c  \frac{1}{18}$
$c = 18$


b) 
$F_{X, Y}(x,y) = P(X \leq x, Y \leq y) = c \int_{-\infty}^\infty \int_{-\infty}^\infty x^2y^2 \;dy\;dx$
$= 18 \int_{0}^x x^2 \int_{x}^y y^2 \;dy\;dx$
$= 18 \int_{0}^x x^2 \frac{y^3}{3}|_x^y \;dx$
$= 18 \int_{0}^x (\frac{x^2 y^3}{3} - \frac{x^5}{3}) \;dx$
$=18 (\frac{y^3x^3}{9} - \frac{x^6}{18})$
$=2x^3y^3 - x^6$

c)
$P(X < 1/2, Y > 2/3) = P(0 < X < 1/2, 2/3 < Y < 1)$ 
$= F(0.5, 1) - F(0, 1) - F(0.5, 2/3) + F(0, 2/3)$
$=\frac{19}{108}$ YIPPEE

d)
We gotta marginal up in this house
$P(X > 1/2) =1 - P(X \leq 1/2) = F_X(1/2)$ <-- Preferably
$F_X(x) = F_{X, Y}(x, 1)$
$=2x^3 - x^6$ nice
$\implies 1 - (2\frac{1}{8} - \frac{1}{64})$
$= 0.765625$ 
yes!

### Skipped Q14 and Q15

### Q16
a) 
$1 =\frac{1}{c} \int_{0}^1 \int_0^{2(1-x)} x^2y \;dy \;dx$
Thanks for being unhelpful, question.
$= 1/c \int_0^1 x^2 [\frac{y^2}{2}]_{0}^{2(1-x)}\;dx$
$= 1/c \int_0^1  2x^2(1-x)^2 \;dx$
$= 2/c \int_0^1  (x^2 - 2x^3 + x^4 )  \;dx$
$= 2/c [1/3 - 1/2 + 1/5 ]_0^1$

$\implies c = 1/15$

$x^2(1-x)^2 = x^2 (1 -2x + x^2)$
$= x^2 - 2x^3 + x^4$

b) 
$P(X < Y)$ 
$=P(0 < X < 2/3, 0 < Y < 2/3)$ (where $0 < y < x <1$) + $P(2/3 < X < 1, 0 < Y < 2/3)$
We do the first one first

$=1/15 \int_0^{2/3}x^2 \int_x^{2(1-x)} y \;dy\;dx$
$=1/15 \int_0^{2/3}x^2 [y^2/2]_x^{2/3}\;dx$
$=1/15 \int_0^{2/3} [x^4/2 - 2x^2/9] \;dx$
$=1/15 ([x^5/10 - 2x^3/27]_{0}^{2/3})$
$=1/15 ((2/3)^5/10 - 2(2/3)^3/27])$

> [!explanation]
> 
> `ohhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh`
> `OOOOHHHHHHHHHHHHHHH`
> 
> 
> Okay, so for each $x$ we integrate, we integrate a $y$, too, right? So, the $y$ integrates from (bottom) $x$ and to (top) $2(x-1)$ for each point of $x$! IT MAKES SO MUCH SENSE NOW. BRUHH
> 
> So for instance, when x=0.5, y will integrate on interval $\int_{0.5}^{2(1 - 0.5)}$. This should've been more obvious to me before LOL




### Q17
Rough idea:
We want chance that $P(b^2 - 4ac \geq 0)$
which is same as $P(A \geq B^2/4)$
We know $f_{X, Y}(x, y) = f_{X}(x)f_{Y}(t) = 1$ cuz both are uniform  and i.i.d
The hard part is the actual probability... hmm?
Nevermind not hard at all. We just integrate

Okay not bad at all! I just should remember the $f$ for uniform.




### Q18

a)
$p_Y(y) = (1/2)^y\sum_{x=1}^\infty (1/2)^{x}$
$=(1/2)^y$

b)
$P(X > Y)$
$= \sum_{x=1}^\infty \sum_{y=1}^{x-1} p_{X, Y}(x, y)$
$= \sum_{x=1}^\infty (1/2)^{x-1} \sum_{y=1}^x (1/2)^y$ 
$= \sum_{x=1}^\infty (1/2)^{x-1} \sum_{y=1}^x (1/2)^y$  (the second)


$\sum_{y=1}^x (1/2)^y = \frac{1-(0.5)^x}{0.5}$ geometric series yay
anyway the rest becomes trivial after you remember that nuisance.


### Q19
a)
$1 = \int_0^1 \int_0^1 c + x - y \;dx \;dy$ (for $x,y \in [0,1]$)
$=\int_0^1 [c + 1/2 - y]\;dy$
$=c + 1/2 - 1/2 = c$
$\implies c = 1$

b)
$P(X > Y)$
$= \int_0^1 \int_0^x 1 + x - y\;dy\;dx$
$=\int_0^1 [x + x^2 - x^2/2] \;dx$
$=[1/2 + 1/3 - 1/6]$
$=2/3$





# Notes
1)
- Diagrams are powerful for these kinds of questions! 
- Like it would be almost impossible without it 
- I was able to derive it quite easily >:)


2)
- Lowkey #todo Redo it cuz it's a good question and I keep forgetting "what" PMF I want to even get and how


7)
- I gotta remember those ranges for the input variables! Gotta specify what values to allow and what not


8)
- Think harder about the integration limits and what I am integrating
- I integrated "x" using the int limits for "y" 
- <span class="emphasis">Always draw the support for questions like these</span>


11)
- Remember: The CDF is that mysterious blanket that gives the (x, y) areas a "probability" when integrated. Depending on the area you integrate, you get the probability you want.
	- It's actually starting to make so much sense all of a sudden. It's honestly cool!
- Mistake #1: I CANNOT reorder the integral for these kinds of questions. The first integral, the $x$ one, is required for the value of the *y* one. So $dx$ must always go first! 
- Also I messed up the $x$ interval. It goes from 0 to 3

13)
- #todo I don't get why $y$ goes from $x$ to $y$ 
- I guess I can use the fact that the limit for $y$ goes from $x$ up to $1$. so since it's bounded below by $x$, the integral starts at $x$. That's fine to think of i guess
- I forgot to complement $P(X > 1/2)$
