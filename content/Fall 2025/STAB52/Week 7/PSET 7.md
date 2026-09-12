15 questions (okay!)

I have *about* 20 minutes per question if I'm gonna completely ignore PSET 8. So, let's not do that! I want to get GOOD progress into PSET 8 so then I can finish the other half tomorrow >:)
### Q1

WTS $P_{X_1, X_2}(x, y) = P_{X_1}(x)P_{X_2}(y)$

$P_{X_1}(x)$
= 0.2 when x = 1
= 0.5 when x = 2
=0.3 when x = 3

Then 
$P_{X_2}(y)$
=0.3 when x = 1
=0.1 when x = 2
=0.2 when x = 3
=0.4 when x = 4

They are conditionally dependent. Just try any of the points... it'll work

### Q2
We have that 
For uniform RVs,
the $$f_X(x) = \begin{cases} 
1,& x \in [0, 1]\\
0,& o/w\end{cases}$$
### Q3
a)
$f_X(x) = cx \int_0^1 y  \;dy$
$= cx/2$
$f_Y(y) =cy \int_0^1 x \;dx$
$=cy/2$
Clearly, they are *not* the same

But it's better to use the range explanation (range is not rectangle. Range dependence implies no probabilistic independence!)


b)
$1 = \int_0^1 cy \int_0^y x \;dx \;dy$
$=c\int_0^1 \frac{y^4}{2}\;dy$
$=c \frac{1}{8}$
$c = 8$
I am goated i am just not goated at math though :( 

c)
$f_X(x) = \int_{x}^1 f_{X, Y}(x, y)\;dy$ 
$= cx \int_x^1 y \;dy$
$=8x(1/2 - x^2/2)$
$=4(x-x^3)$

$f_Y(y) = cy \int_0^y  x \;dx$
$=cy^3 / 2$
$=4y^3$

lazy

### Q4
In all cases the RVs take values in the unit square (so cartesian space) which is good.
We want to show that $f_{X, Y}(x, y) = f_X(x) f_Y(y)$ which means we need to show the expressions can be factorized to be in terms of $x$ or $y$ respectively.

in c), we can see that $cx^5 y^5$ can be separated into $cx^5$ and $y^5$ which are two functions that the marginal's could be. The other examples... not so possible

### Q5
This is discrete LOL. I was confused how you're supposed to derive this...

Series of $n$ surgeries. Each with $p$ chance. $X$ is number of "successful" surgeries. 
PMF represents chance of, say, $p(1, 4)$ out of 6 total surgeries. Then the chance that *4* surgeries are successful is given via binomial

Reads as "probability that some H is h and some X is x"
- What I have below is "chance of x, given h" which is wrong. I did evaluate $p_{X|H}(x|h)$ effectively, though, and $P(X = x | H = x) = \frac{P(X = x \cap H = x)}{P(H = x)} \implies P(X = x | H = x)\cdot P(H = x) = P(X = x \cap H = x)$  $$p_{H, X}(h, x) = \begin{cases}
{n \choose x}a^{x}(1-a)^{n-x} , &h = 1\\
{n \choose x}b^{x}(1-b)^{n-x}, &h = 0
\end{cases}$$
So look at the answer *they* wrote instead #todo. Mine is wrong. Theirs is right

b) 
$P(X = x) =$ the average of the two cases since there is a $p$ and $1-p$ chance that either happens.
I was right. They factored the coefficient though (so weird!)

c) 
$P(H = h | X = k) = \frac{P(X = k, H = h)}{P(X = k)}$
it's big



### Q6
a)
$p_{X|Y}(x | 2) = cases right? 
- if x is 1, then the PMF is 2/16
- then 1/16 for x = 4 
- and 0 otherwise
#todo The above i just showed was for the *joint*. NOT conditional (what's the difference?)

$p_{X|Y}(x | 2) = \frac{P(X = x, Y = 2)}{P(Y = 2)}$
$= (2/16)/(3/16) = 2/3$ (when x = 1)
$=1/3$ when x = 4
0 otherwise


b) $P(X = x | X \geq Y + 1)$

$P(X \geq Y + 1) = 5/16$ (using the chart, we only choose the points where x >= y + 1 which makes a mini-triangle) 
Then you find $p_X(x)$ and use that to find the final answer via Bayes'
- $P(\set{X = x} \cap B)$ is the probability of result "x" occurs and that "x" >= y + 1 which just means finding the marginal via the highlighted? #todo 

c) 
$P(Y \leq 2 | B) = 1 - P(Y > 2 | B)$
$= 1 - P(Y =3|B)$ using the highlighted (there is only 1 highlighted box at Y=3 and nothing after that). Also there is only one outcome $X=4$
So that's how they got their answer (they didn't show all the work but it's easy to figure out)
- It's really weird though

### Q7

If we draw the diagram for $Y > 5$, we see that $X$ is sent from 0 to infinity (exponential doesn't give numbers less than 0) and Y is sent from 5 to infinity, too
$P(Y > 5)  = \int_0^\infty \int_5^\infty f_{X,Y}(x, y)\;dy\;dx$
Then we try to introduce some of our known into via the joint -> marginal x conditional formula (the writing was on the wall for this tbh...)

$=\int_0^\infty \int_5^\infty f_{Y|X}(y|x)\;dy\ f_X(x);dx$ (this is derived by the image that I should ALWAYS make!)
$=\int_0^\infty e^{-3x}  2e^{-2x}\;dx$
$=2\int_0^\infty e^{-5x}\;dx$
$=2\int_0^\infty e^{-5x}/5 \;dx$
$=2 \cdot \frac 1 5$
yeyepepepyeae

### Q8
WTS that oh wait this is easy i think?

If $X$ is a constant RV, then $f_X(c) = F_X(c) =1$ i think?
i dont think that makes sense for continuous though?

i would NEVER derive this... ignore?
#todo I ignored it

### Q9

i)
$f_{X}(x) = \frac 1 4 \int_x^2 (x^2 + y)\;dy$
$=\frac 1 4 [x^2y + y^2/2]_{y=x}^2$
$=\frac 1 8 (2x^3 + x^2  - 8x - 4)$
im gonna assume this is right....

marginal for y is very similar 

ii)
$f_{Y|X}(y|x) = \frac{f_{X, Y}(x, y) }{f_X(x)}$
easy

iii)
same thing but bottom is different

### Q10
Fun question
- On average the smallest point should be 1/4 and the largest should be 1/2 (via my brain logic)

a) 
$f_{X, Y}(x, y) =$ 
$0 \leq y \leq x \leq L$ we know this to be true
What I'm confused about is what the PDF even represents? It's that "blanket" but what is the shape?
Okay well I didn't need to use my brain to figure this out. I had to use previous knowledge.
$f_{X, Y}(x, y) = f_{Y|X}(y|x)f_X(x)$ is something we *could* figure out:
$Y|X = x \sim Uniform(0, x)$ literally. It's the first cut size #todo I would never think about this 
But anyway we know that $f_{Y|X}(y|x) = \frac{1}{x}$ for y in range [0, x] and $f_X(x) = \frac{1}{L}$ for x in the range [0, L]

and multiplying those gives $\frac{1}{xL}$ where $0 < x < y < L$


#todo GO over again

b) 
(look at diagram to figure the range out)
$f_X(x) =  \int_0^x f_{X, Y}(x, y)\;dy$
$=\frac{1}{xL} (x - 0)$ 
$=\frac{1}{L}$ 

c) $f_{Y|X}(y|x) = \frac{f(X = x, Y = x)}{f(X = x)}$
$= \frac{\frac{1}{xL}}{ 1/L}$ where $0 < x < y < L$
$= \frac{1}{x}$

d) 
$f_Y(y) = \frac{f_{X, Y}(x, y)}{f_{Y|X}(y|x)}$

x|y   --> x and y / y
cond = joint / marginal

(LOOK AT THE DIAGRAM YOU NITWIT)
$f_{Y}(y) = \frac{1}{L} \int_x^L \frac{1}{x} \;dx$ where $0 < x < y  < L$
$= \frac{1}{L} (\ln(L) - \ln(x))$ where $0 < y < L$
yep


e)
$f_{X|Y}(x|y) = \frac{f_{X, Y}(x, y) }{f_Y(y) )}$ (where $0 < x < y < L$)
= algebra (easy)

### Q11
a)
i am pretty sure it is
$\int_0^1 \int_0^1 x+y\;dx \;dy$
$=\int_0^1 \frac{1^2}{2}+y  \;dy$
$=\frac{1^2}{2} + \frac{1^2}{2}$
$=1$
So yeah it's good

b)
Probably not. You can't separate the x and y arguments such that 
$f_{X, Y}(x, y) = g(x)h(x)$ cuz the x and y are *added*. It does not factorize

c) 
$f_{X}(x) = \int_{0}^1 x + y \;dy$
$= x + 1/2$
$f_Y(y) = \int_0^1 x + y \;dx$
$= \frac{1^2}{2} + y$
$= y + 1/2$ for 0 < y < 1

d)
$f_{X|Y}(x|y) = \frac{x + y}{ y + 1/2}$ for $0 < y < 1$ (we don't bound x though? I guess it's the conditional part after all?)

### Q12
a) I think c is 2 or 4 but im just guessing 

$1 = \int_0^1 \int_0^y cxy   \;dx \;dy$
$= c \int_0^1 y\int_0^y x   \;dx \;dy$
$= c \int_0^1 y \frac{y^2}{2} \;dy$
$= c \int_0^1 \frac{y^3}{2} \;dy$
$= c \int_0^1 \frac{1}{8} \;dy$
$\implies c = 8$
makes sense because of cube law. oops. no 2 or 4 

b)
~~They *should be*, where $f_X(x) = 8x$ and $f_Y(y) = y$ or something like that~~

NO. OBVIOUSLY NOT. Look at the range! That's some range dependence there!!!

c)
(I used the graph but got confused. I needed to label the line $Y=X$ to avoid confusion over what $y$ was integrating over)
$f_{X}(x) = 8x \int_x^1 y \;dy$ 
$=8x (\frac{1}{2} - \frac{x^2}{2})$
$= 4x - 4x^3$

$f_{Y}(y) = 8x \int_0^x y \;dx$ 
$=4y^3$ 

d)
We want pdf that $Y | X = x$ (chance of outcome $Y$ such that $X$ is fixed to outcome $x$)
$f_{Y|X}(y | x) = \frac{f_{X, Y}(x ,y)}{f_X(x)}$ where $0 < x < y < 1$ 
plug and play no?




### Q13
a)
$f_X(x) =15x^2 \int_0^{2(1-x)} y \;dy$ where (add region)
$=15x^2 \frac{4(1-x)^2}{2}$
$= 30x^2(1-x)^2$ where $0 < x < 1$ (by graph)

b)
$f_{Y|X}(y | 1/4) = \frac{ f_{X, Y}(1/4, y) }{f_X(1/4)}$
$= \frac{ \frac{15}{16}y }{\frac{135}{128}}$
$=8/9y$

c)
$P(Y < 1 | X  = 1/4) = \int_0^1 f_{Y|X}(y, 1/4) \;dy$
$= \int_0^1 8/9 y \;dy$
$= \frac{8}{18}$

### Q14
a)

$f_Y(y) = \int_0^{1 - y} (3x  + 3y)\;dx$ where $y > 0$ and $y < 1$ 
$= 3(1-y)^2/2 + 3(1-y)$
$9(1-y)^2/2$

math 
$= \frac 3 2 (1 - y^2)$ for $0 < y < 1$ and 0 otherwise

b)
$f_{X|Y}(x | 1/2) = \frac{f_{X, Y}(x, 1/2) }{f_{Y}(1/2)}$
$= \frac{24(x + 1/2) }{9} = \frac{8(x + 1/2) }{3}$

c)
$P(X < 1/2 | Y = 1/2)$ (this means using the conditional formula when integrating!!)
$= \frac{8}{3} \int_0^{1/2}  x + 1/2 \;dx$
$=$
Math is easy

### Q15

timmies! 🍁🍁🍁🍁

a)
$f_X(x) = 2e^{x}\int_x^\infty e^{-2y} \;dy$ for $x > 0$
$= 2e^x [\frac{e^{-2y}}{-2}]_{y=x}^\infty$
$= 2e^x [0 - \frac{e^{-2x}}{-2}]_{y=x}^\infty$
$=e^{-x}$ for $x > 0$

b)
$f_Y(y) = 2e^{-2y} \int_0^y e^x  \;dx$ for $y > 0$
$=2e^{-2y} (e^y - e^0)$
$=2e^{-2y}(e^y - 1)$ for $y > 0$

>I can't be too much in a rush for these integrals. It'll be the death of me

c)
Not independent. The range is triangular and therefore has range dependence. 

d)
$f_{X | Y} (x|y) = \frac{ f_{X, Y}( x, y) }{f_Y(y)}$
$=\frac{ e^{x} }{ e^y - 1 }$ for $x > 0$ 
goated 


e) 
$P(X < 1 | Y = 2) = \int_0^1 f_{X|Y}(x, 2) \;dx$ 
$= \frac{1}{e^2 - 1} \int_0^1 e^x \;dx$
$= \frac{e - 1}{e^2 - 1}$ Nice i am goated yet again (oh you could simplify.....)

Okay im gonna do this again but with Bayes' law:
$P(X < 1| Y = 2) = \frac{}{P }


f)
$P(X < 1 | Y > 2) = \int_0^1  \int_2^\infty \frac{e^x}{e^y - 1} \;dy \;dx$ 
Yeahhh i would be stuck in this scenario
- 

They used Bayes rule. Then you can find the probabilities much easier (calculating the separate top and bottom)



# Notes
2)
<span class="emphasis">I have to remember the piecewise functions for these probabilities</span>
- For some reason I assumed they would be given. No, I must memorize.
- Especially the uniform ones

3)
- a) I can just show range is not independent. ($X<Y$ means x and y have a dependence in the Joint PDF. Otherwise it's possible they aren't)
- c) I shouldn't integrate the biggest region possible. I should integrate what makes sense in the question. So, usually that means integrating the "tighter" interval rather than 0 to 1

4)
- <span class="emphasis">To show independence,</span> you can show the Joint PDF can be factored with unique terms #todo I did not know this (or if I did I totally forgot)


6)
- Conditional probabilities are *greater* than without the condition. Also, the condition implies all outputs added becomes $1$. If y = 2, then the outcomes of x = 1,2,3,4 should sum to 1 (the table's column doesn't already do that--you'd need to normalize)

7)
- You can always calculate probabilities with integrals. It can be a worthwhile thing to attempt


13)
- When trying to find the conditional probability (via integration) I should use the conditional formula, not the "and"-ed "Joint" formula

14)
- PAY ATTENTION to the intervals! The integral for x goes from 0 to 1 - y!


15)
- For $P_{X|Y}(x|y)$ it makes no sense to integrate over $y$ since $y$ is the restricting region after all. Integrating past $Y>2$ does not average the chance of "X" divided by the universe of $Y>2$
- As such, I should use Bayes rule (since we're working with conditionals, the Bayes' law analog uses the PDF's.
	- I don't use it for e) because there is no meaning for P(X, Y) / P(Y) in continuous, since $Y$ is just one point and therefore P = 0

# Formulas to remember:
`Joint` $\to$ `Marginal` $\times$ `Conditional`
- $f_{X, Y)}(x,y) = f_{Y|X}(y|x)f_X(x)$ (works with Y and X swapped as well)

