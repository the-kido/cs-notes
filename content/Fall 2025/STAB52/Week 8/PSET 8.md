20 questions

### Q1
WTS that $F_X(x) = F(x)$

$F_X(x) = P(X \leq x)$
$= P(F^{-1}(U) \leq x)$ 
$= P(U \leq F(x))$ 
$=F_X(F(x))$
$=\frac{F(x) - 0}{1 - 0}$ (look at the uniform distribution)
$=F(x)$

#todo I think I should come back to this one

### Q2
The largest area is $\pi r^2 = \pi$ (cuz $r = 1$). Smallest is $0$
So $X \in [0, \pi]$
We know $X = \pi R^2$. Hey that's a transformation >:)

We want $F_x(x) = P(X \leq x)$
$= P(\pi R^2 \leq x)$
$= P(R \leq \sqrt{\frac{x}{\pi}})$
$=\sqrt{x / \pi}$ (by uniform) (for $0 < x < \pi$) (for $x > \pi$ it's 1, and for $x < 0$ it's 0)

### Q3 and Q4 are textbook solution answers = I don't wanna do them

### Q5
We can show this via the CDF?
WTS $F_Y(y) = \frac{y - cl + d}{cu + d - cl - d} = \frac{y-cl - d}{c(u - l)}$
$=P(Y \leq y)$
$=P(cX + d \leq y)$
$=P(X\leq \frac{y - d}{c})$
$=F_X(\frac{y-d}{c})$
$=\frac{ \frac{y-d}{c} - l }{u - l}$
$=\frac{1}{c} \frac{y - d - cl}{u - l}$
$=\frac{y-cl - d}{c(u - l)}$
Which is yeah the thing. Yay!

### Q6
We want $F_Y(y) = P(Y \leq y)$
We have $P(X \leq x) = F_X(x) = 1 - e^{-\lambda x}$

$P(Y \leq y) = P(X^{1/4} \leq y)$
$=P(X \leq y^4)$
$= 1 - e^{-\lambda y^4}$
Then $F'_Y(y) = 4\lambda y^3 e^{-\lambda y^4}$ which is the answer ....

But they used the PDF method which lets you find the PDF of a transformation with the formula 
$f_Y(y)= \dfrac{f_X(h^{-1}(y)) }{|h'(h^{-1}(y))}$

$h(x) = x^{1/4}$
so h'(x) = $\frac 1 4x^{-3/4}$

$x = y^{1/4} \implies h^{-1}(x) = x^4$ 

so 
$f_Y(y) = \frac{ \lambda e^{\lambda y^4} }{\frac 1 4 y^{-3}}$
$= 4y^{3}\dots$ 
yeah its good

### Q7
a) 
pdf method right
$h(x) = x^2$ (takes the old one, squares it, gives new transform)
$h'(x) = 2x$
$h^{-1}(x) = x^{1/2}$

$f_Y(y) = \frac{ y^{3/2} / 4 }{| 2y^{1/2}  |}$ where $0 < x < 2$
$=y/8$

b)
$h(x) = \sqrt x$
$h'(x) = \frac{-1}{2\sqrt x}$
$h^{-1}(x) = x^2$

i. have. to. type. z. and. not. x.
$f_Z(z) = \frac{z^6 / 4}{ | \frac{-1}{2z} | }$
$= \frac{z^7}{2}$

### Q8
Convolution? 
Because independent, $f_{X, Y}(x, y) = \frac{5x^3y^4}{128}$ for $0 < x < 2$ and $0 < y < 2$ (0 otherwise)

$f_Z(z) = \int_{-\infty}^\infty  f_{X, Y}(x, z - x) \;dx$ 
okay. this gets WEIRD. 
First of all... what's the support for $z$? Right? So we have bounds for $x$ and $y$
$z$ can technically go from $0$ to $4$ in all. 

$= \int_{0}^2 \frac{5x^3(z - x)^4}{128} \;dx$
- We use the PDF when both inputs for x and y are within range. That means we need both $0 < x < 2$ *and* $0 < z -x < 2$ which means $

### Q9
a)
This is sort of continuous-y which is quite strange? I guess CDFs are always on $[0, \infty)$

$F_X(x) = P(X_i \leq x) = \frac{\lfloor x \rfloor}{6}$ where $x \in [0, 6]$ 
- #todo maybe look over? Notice interval
$P(\max{X_1, X_2, X-3}) = F_X(x)^3$ = (we do cases to avoid dealing with the "floor" non-sense)
- When $x = 1$, that's the least likely. It means $F_X(1)^3 = \frac{1}{6^3}$
- When $x = 2$ it's better: $F_X(2)^3 = \frac{2^2}{6^2}$ 
- etc. etc
- until x >= 6. Then it's always $1$ 

b) 
- Similar. We want $F_{X_{(1)}}(x) = P(X_{(1)} \leq x)$ coz that's the minimum
$= P(X_1 \leq x \cup X_2 \leq x \cup X_3 \leq x)$
$= 1 - P(X_1 > x \cap X_2 > x \cap X_3 > x)$
$=1 - P(X_1 > x)^3$
$1 - (1 - P(X_1 \leq x)^3)$

$1 -( 1 - F_X(x)^3)$ (since they all have the same CDf)
$=1 - (6 - x)^3/6^3$

ehhh same thing but god it looks bad. It is the opposite of the maximum though

#todo...... maybe

### Q10 
They're tryna confuse you by not using $X_1, X_2, X_3$ but im having NONE of that!
Okay that's not the confusing part.
They rewrote the probabilities like
$P(X < \min{Y ,Z}) = P(X = \min{X, Y ,Z})$
First of all, I am never thinking about that. Second of all, you had to know that between the 3 options the chance should be 1/3 per since they are all i.i.d so have equal probability amongst the 3

### Q11
a) I can just calculate them with my big brain
- We need all the diagonal $Z = X + Y$ lines. That means, for instance, when $Z = 2$, that $X = Y = 1$, and that has a probability of 1/16!
So you can just do cases. Urrgh this is so annoying how did I not figure that out?

b)
Basically the same thing


### Q12
a)
This was in the example
$f_Z(z) =$
1. $\int_0^z 1\;dx = z$ (for $0 < z < 1$)
2. $\int_{z-1}^1 1 \;dx = 2-z$ (for $1 < z < 2$)
BINGO!

b)
$Z = X - Y$ means $Z$ can go from -1 to 1
I think it's basically the same thing but instead the intervals are 0 to 1+z (for -1 < z < 0) and $z$ to $1$ for $0 < z < 1$
- Okay bingo. But I did mess up 1+z. I wrote 1-z even though mentally I added $1$.


### Q13
Aw it's not like the previous questions :(
X + Y can go to infinity

a) 
$f_{X, Y}(x, y) = \lambda^2e^{-\lambda x + -\lambda y}$

$f_Z(z) = \int_{-\infty}^\infty f_{X, Y} (x, z-x)\;dx$
which you can integrate

b) Yeah i got it. I will totally forget this tomorrow though >:(

### Q14

$f_{Y|X}(y|x)= \frac{1}{x}$ for instance....
and $f_X(x) = \frac{1}{2}$ cuz uniform again

via cont = joint/marg --> joint = marg $\times$ cont: $f_{X, Y}(x, y) = \frac{1}{2x}$

a)
The range of $z$ should be interesting.... $x$ is a real number i think
$0 < x < 2$ and $0 < y < x < 2$ i am pretty sure
The range of $z$ is the interesting part. $-y < 0 < z < 2 - y$
So $z$ is also bounded between $0$ to $2$. That makes life really easy.

We integrate from z to 2? YESSS I DID IT. I AM SO GOATED. HOLY FRICKING HELL (hmm... holy hell... quite contradictory, eh?)

$f_Z(z) = \int_{-\infty}^\infty \frac{1}{2x} \;dx$
$= \int_{z}^2 \frac{1}{2x} \;dx$
$=\frac{1}{2} [\ln 2 - \ln z ]$
Oh wait we want the *CDF*. No convolution method. Wait but lowkey that's not much harder

We want the area depending on $z$. The $z$ gives the line whose area we want (we integrate over the line to get the area)
$F_Z(z) = $P(Z \leq z)$
$= P(X - Y \leq z)$
$=1 - P(Y \leq X-z)$


### 15
a) FRICK NOT THIS

X goes from 0 to infinity
Y goes from 1 to 4
$f_{X, Y}(x, y) = e^{-3x}\cdot$ where x >= 0 and 1 < y < 4

b)
We find $X$ and $Y$ isolated!
Then we find inverse (?) but there's two... things...
$h^{-1}(X, Y) = [(Z+W)/2 , (Z-W)/2 ]$
- This *is* the inverse. What the heck? I'm so slow (it was easy because it's simple operations)
- Before it was: Z returns X + Y. Now it's X returns Z and W

c) 
We want joint density. We can use PMF method but since this is two variables we have to use "the other" formula
$f_{Z, W}(z, w) = \dfrac{e^{-3( \frac{z+w}{2})}}{|J(z, w)|}$
$J$ = 2

### Q16
oh no not B&H
$P(X = x|X < Y) = \frac{P(X = x \cap X < Y)}{P(X < Y)}$ ?

$f_{X, Y}(x, y) = \lambda^2e^{-\lambda (x + y)}$
$P(X < Y) = \int_0^\infty \int_0^y f_{X, Y}(x, y) \;dy \;dx$
- By symmetry we know it should be 1/2 but im not tryna remember that LOL
Then the top is also pretty easy. You integrate!
- y goes from 0 to infinity
- x goes from "0" to "x"


# Notes

1)
- "If the CDF's of two RVs are the same, then they have the *same* distribution"
	- Same for PDFs
- When it is said that the "RV X" has the distribution defined by CDF F(X), it means to say that the distributions of both are the same. That means $P(X \leq x)$ (continuous means intervals) = $F(x)$ (the distribution of $X$)

2)
- I should define the range of the RV because it defines the CDF's range, too.
	- For instance, X goes from 0 to pi, which means the interesting part of the CDF goes from 0 to pi. The rest is 1 and 0 of course.

7)
- When using PDF method, I have to plug in "y", not "x"


13)
- The main thing is integrating "the line" that we create. For a), the "line" goes from 0 to "z" which is what $x$ has to integrate over (with $z$ fixed, we can get the line area which can be further integrated to get a 2D area = probability)
- For b), note that $z$ goes from negative infty to infity, since if y goes to infity z is negative, and if x goes to infty z is postive.
	- Then if you draw the diagram, we still have "two cases". One where the line starts on the $y$ axis, and one where the line starts on the $x$ axis. So you integrate using those
	- There are two cases still (if you draw the diagram)

14)
- hell
- #todo... if I DARE

15)
- Not so bad
	- Finding inverse is quite easy.
	- Finding Jacobian = following formula and replacing $z$ and $w$ with what is given in the question
	- The top part with the $f_{X, Y}(h^{-1}(z, w))$ means replacing all $x$ and $y$'s of $f_{X, Y}(x, y)$ with the inverses of $x,y$ which we found in part b)


