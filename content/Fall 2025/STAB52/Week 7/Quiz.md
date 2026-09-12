## 1.
#### a)
$P(X_1 \geq 3 | X_1 \geq X_2) = \frac{P(X_1 \geq 3, X_1 \geq X_2)}{P(X_1 \geq X_2)}$

Using the table we can compute $P(X_1 \geq X_2)$ to be $0.65$ by adding all the probabilities where $X_1 \geq X_2$.
$X_1 = 1$, then $P(1 \geq X_2) = P(1, 1) = 0.1$ 
$X_1 = 2$, then $P(2 \geq X_2) = P(2, 1) + P(2, 2) = 0.1$
$X_1 = 3$, then $P(3 \geq X_3) = P(3, 1) + P(3, 2) + P(3, 3) = 0.2$
$X_1 = 4$, then $P(3 \geq X_4) = P(4, 1) + P(4, 2) + P(4, 3)+ P(4, 4) = 0.25$

$0.1 + 0.1 + 0.2 + 0.25 = 0.65$ 

Then to find $P(X_1 \geq 3, X_1 \geq X_2)$ we again use the table, but this time intersecting the two outcome sets. 
$P(X_1 \geq 3, X_1 \geq X_2) =P(X_1 =3 , 3 \geq X_2) + P(X_1 = 4 , 4 \geq X_2) = 0.45$ using the answers from the previous part.

Therefore $P(X_1 \geq 3 | X_1 \geq X_2) = \frac{0.45}{0.65} = 0.692307692 = \frac{9}{13}$

#### b)
Want to find $p_{X|Y}(X = x| Y = 3)$. We just iterate through all cases
$p_{X|Y}(X = 1|Y = 3) = \frac{p_{X, Y}(X = 1, Y = 3)}{p_{Y}(3)} = \frac{0}{0.25}$ ($p_Y(3)$ is found via table)
$p_{X|Y}(X = 2|Y = 3) = \frac{p_{X, Y}(X = 2, Y = 3)}{p_{Y}(3)} = \frac{0}{0.25}$
$p_{X|Y}(X = 3|Y = 3) = \frac{p_{X, Y}(X = 3, Y = 3)}{p_{Y}(3)} = \frac{0.15}{0.25} = 0.6$
$p_{X|Y}(X = 4|Y = 3) = \frac{p_{X, Y}(X = 4, Y = 3)}{p_{Y}(3)} = \frac{0.1}{0.25} - 0.4$

So $$p_{X|Y}(X = x, Y = 3) = \begin{cases}
0.6,&x = 3\\
0.4, & x=4\\
0 &\text{o/w}
\end{cases}
$$

#### c)
Let $g(X, Y) = X/Y$
Then $E[g(X, Y)] = \sum_x \sum_y g(x, y) \cdot p_{X, Y}(x, y)$
And we iterate through $x=1,2,3,4$ and $y = 1,2,3,4$
$g(1, 1)p(1, 1) = 1 \cdot 0.1$
$g(1, 2)p(1, 2) = \frac{1}{2} \cdot 0.1$
$g(1, 3)p(1, 3) = \frac{1}{3} \cdot 0.0$
$g(1, 4)p(1, 4) = \frac{1}{4} \cdot 0.05$
okay I'm not tryna write all this i'll just give the numbers.

$0.1 + 0.05 + 0.0125$
$+2 \cdot 0.05 + 1 \cdot 0.05 + 0.5 \cdot 0.15$
$+3 \cdot 0.05 + 1 \cdot 0.15 + \frac 3 4 \cdot 0.05$
$+4 \cdot 0.05 + 2 \cdot 0.1 + \frac 4 3 0.1$
$=\frac{151}{120}$ or $1.258\bar3$

## 2
#### a)
We know that $f_X(x) = \int_{-\infty}^\infty f_{X, Y}(x, y)\;dy$
Let $x, y$ be arbitrary. Suppose $0 < y < x$
Then $f_X(x) = \int_{0}^x \frac{2y}{x^2}e^{-x}\;dy$ (since $y$ is bounded now and by def'n of given PDF)
$= \frac{2e^{-x}}{x^2} \int_0^x y \;dy$
$= \frac{2e^{-x}}{x^2} \frac{y^2}{2} |_0^x$
$= \frac{2e^{-x}}{x^2} \cdot \frac{x^2}{2}$


#### b)
$f_{Y|X}(y|2) = \frac{f_{X, Y}(2,y)}{f_X(2)}$ since $x=2$
$f_X(2) = \frac{2e^{-2}}{2^2} \cdot \frac{2^2}{2} = e^{-2}$ (using the PDF found in part a.)
$$f_{X, Y}(2, y) = \begin{cases}
\frac{2y}{4}e^{-2}, &0 < y < 2\\
0, &\text{o/w}
\end{cases}$$
So $$\frac{f_{X, Y}(2,y)}{f_X(2)} = f_{X, Y}(2, y) = \begin{cases}
\frac{\frac{2y}{4}e^{-2}}{e^{-2}}, &0 < y < 2\\
0, &\text{o/w}
\end{cases}

= \begin{cases}
\frac{y}{2}, &0 < y < 2\\
0, &\text{o/w}
\end{cases}$$
#### c)
We find $P(Y < 1 | X=2)$ using the fact that $P(X \in A, Y = y) = \int_Af_{X|Y}(x|y)\;dx$

$P(Y < 1 | X=2) = \int_{-\infty}^1 f_{Y|X}(y|2)\;dy$
$= \int_{0}^1 f_{Y|X}(y|2)\;dy$ since $y < 0$ results in $0$ integral
$=\int_0^1 \frac y 2 \;dy$ from part b)
$=\frac{y^2}{4} |_0^1$ by difficult math
$=\frac{1}{4}$ by even difficulter math


