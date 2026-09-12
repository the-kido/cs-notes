For discrete RVs $X$, $Y$, the conditional probabilities can be found via:
$$P((X, Y) \in A | (X, Y) \in B) = \sum_{(x, y) \in A} P(X = x, Y = y | (X, Y) \in B))$$
where $$P(X = x, Y = y | (X, Y) \in B) = \frac{P(\set{X = x, Y= y} \cap \set{(X, Y) \in B} )}{P((X, Y) \in B)}$$
is the *conditional PMF* of $X, Y$ given $(X, Y) \in B$

![[Conditional Distributions.png]]
- See how $A$ and $B$ are both events. 

### The common case
> We fix a specific value. We usually condition on an event that is fixed (i.e., fixing RV $Y$) so the conditioning set $B$ is a "line" where the points all have the same value of $y$ but different $x$'s
> ![[Fixing Y to conditionally find X.png]]

***Usually*** you condition of a *specific value* of one RV to look at the probabilities of the other.
For instance, the PMF of $X$ given $Y = y$ is: $$p_{X|Y}(x | y) = P(X = x | Y = y) = \frac{P(X = x, Y = y)}{P(Y = y)} = \frac{p_{X, Y} (x, y)}{p_Y(y)}$$
- $Y=y$ is the conditioning event. 
- $P(X=x, Y=y)$ is a joint probability. $P(Y=y)$ is the marginal PMF of $Y$
- The subscript $X|Y$ is just notation to let us easily interpret the arguments
- $y$ is what we know! Effectively this function is 1-dimensional
### Satisfying the axioms of probability 
$p_{X|Y}$ is a distribution like any other.
Therefore, $p_{X|Y}(x|y) \geq 0$ and $\sum \limits_{\text{all }  x} p_{X|Y}{(x|y)} = 1, \forall y$

#### Defining Joint PMF via Conditional PMF

This goes from `Joint` $\to$ `Marginal` $\times$ `Conditional`
$$p_{X, Y}(x, y) = P(X = x, Y = y) = P(X = x)P(Y = y | X = x) = p_X(x)\cdot p_{Y|X}(y | x), \forall x, y$$
 q
>[!example] The Dice Question part 2
>Find the conditional PMF of $X_{max} | X_{min}  = 3$
>
>PMF = Usually cases
>
>$P_{ X_{max}| X_{min}}(x | 3) = \frac{P_{X_{min}, X_{max}}(3, x)}{P_{X_{min}}(3)}$
>
>We know $P_{X_{min}}(3) = 7/36$ from the diagram (or the PMF, summing all possible $y = 1\dots 6$)
>
>Also $P(X_{min} = 3, y = 0, 1, 2) = 0$ since $3 \not \leq y$ (and from the diagram we know the probability is $0$)
>
>With that, we know we need to find the probabilities when $x$ is $3, 4 ,5, 6$
>
>We can do cases to account for all variances of $x$, and use $o/w$ for the $0$ probability cases
>
>![[Finding Conditional PMF with Dice question.png]]
>
>We check the sum: $(1 + 2 + 2  + 2) / 7 = 1$!



>[!example] RPS Conditional PMF question
>We define 3 RVs.
>We assume players guess at random. 
>We can say $(X_W, X_D, X_L) \sim \text{Multinomial}(n = 10, p_W = p_L = p_D = 1/3)$
>We know, for instance, $X_D \sim \text{Binomial}(n=10, p=1/3)$ (where the other results is $2/3$)
>
>We have that $X_w + X_d + X_l = n - 10$
>So we can rewrite it as $X_L = 10 - X_W - X_D$ (reads as "number of losses is 10 - number of wins and draws")
>Which basically makes this a *2D* distribution since the values of wins/draws can determine losses!
>
>We *want* $P_{X_w | X_D}(x  |  3)$ (we let $x$ be the number of wins)
>$=p_{X_W, X_D, X_L}(x, 3, 10 - x-3 = 7-x) / p_{X_D}(3)$ (using the conditional to "joint divide by marginal" formula)
>$= {10 \choose { x, 3, 7- x } } \frac 1 3^{x_W} \frac 1 3^{3} \frac 1 3^{7 -x} / {10 \choose 3}\frac 1 3^3 \frac 2 3 ^7$ 
>$= \frac{7!}{x! \cdot (7 - x)!} \cdot \frac{(1/3)^x \cdot (1/3)^{7-x}}{(2/3)^x \cdot (2/3)^{7-x}}$
>$=\frac{7!}{x! \cdot (7 - x)!} \cdot (1/2)^x \cdot (1/2)^{7-x}$
>Which is $=$ to the PMF of Binomial$(n = 7, p = 1/2)$
>
>#todo Maybe try again
>
>>Logically makes sense. If we know there were $3$ draws, then the rest of the rounds were wins or losses, which has a 1/2 chance each, with 7 rounds left.

### Continuous Conditional Distributions (PDF)
If you condition on a specific value, the probability is $0$! It turns the area into a line, which has no volume. We need to talk about areas instead. 

When we condition on $\set{Y = y}$, the sample space effectively becomes a *line*
#todo He mentions this but then Idk what happens after??

$$f_{X|Y}(x,y) = \frac{f_{X, Y}(x, y)}{f_Y(y)}$$ for $f_Y(y) > 0$
$f_{X|Y}$ cuts a slice of $f_{x, y}$ (which defines a surface) at $Y = y$ and scales it by $1 / f_Y(y)$ so that it integrates to $1$

#### Random stuff go
Properties:
- $f_{X|Y}(x,y) \geq 0$
- $\int_\mathbb R f_{X|Y}(x, y) \;dx = 1, \forall y$

You can integrate the conditional PDF to get conditional probabilities 
- $P(X \in A | Y = y) = \int_A f_{X|Y}(x |y)\;dx$ where $A \subseteq \mathbb R$

$f_{X|Y}$ can define joint PDF's ($f_{X, Y}$) via multiplication rule
$$f_{X, Y}(x, y) = f_X(x)f_{Y|X}(y|x)$$

(Also technically $f_{X, Y}(x, y) = f_Y(y)f_{X|Y}(x|Y)$ holds too so don't forget that!)

##### Weird Example
>[!example]  ![[Finding Joint PDF of Conditional.png]]
>
>
>We draw a diagram. The red area is the "support" $0 \leq  y\leq x \leq 1$ which is triangular. Then, the density at $x=1$ is $3$. When it's $x=0.5$, the density is $1.5$. So it's like a wedge-shaped volume. The surface (PMF, in dark green) is sloping down
>
>![[Conditonal PDF 3D better.png|500]] 
>ah that's better. Notice any cross-section conditioned on ${X = x}$ is rectangular (and therefore uniform) so we should get something like that
>
>Anyway we want $f_{Y|X}(y | 0.5) = \frac{f_{X, Y}(0.5, y)}{f_X(0.5)}$
>$= \frac{3 \cdot 1/2}{f_X(0.5)}$ (we find the top number by considering $y \in [0, 1/2]$ and ignoring $y \in [1/2, 1]$ since the probability is $0$ as per the PDF)
>
>> $f_X(0.5) = \int_{-\infty}^\infty f_{X, Y}(0.5, y)\;dy = \int_0^x 3x \;dy$ (since that's how $y$ is bounded to get a number not 0. Otherwise the area is $0$... why would we want to deal with that?)
>> $= 3x \cdot \int_0^x 1 \;dy = 3x \cdot [y]_{y=0}^x = 3x^2$ for $x \in [0, 1]$
>> (this is also given in the diagram. The width is $x$ and the height is $3x$)
>
>$= \frac{3 \cdot (1/2)}{3x^2}$
>We didn't finish it LOL




