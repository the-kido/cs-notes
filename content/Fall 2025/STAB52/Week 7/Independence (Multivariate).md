RV's $X,Y$ are independent (shown as $X \perp Y$) if ($\forall A, B\subseteq \mathbb R$)
$$P (X \in A, Y \in B), P(X \in A) P(Y \in B)$$
(Same as $P(A \cap B) = P(A)P(B)$)

But this also works with CMF, PDF and PMF:
![[Independence other ways multivar.png]]

>[!example] Dice independent or nah
>Well we do, because $p_{X_1, X_2}(x,y) = \frac{1}{36} = p_{x_1}(x) \times p_{x_2}(y) = \frac 1 6 \times \frac 1 6$
>

>[!example] What about the min-max example?
>This is easy to know that it is NOT independent because the "support" $0 \leq X \leq Y \leq 0$ forms a triangle (it's NOT uniform!). But it's "range uniform" which is interesting...
>
>Well, $p_{X_{\min}, X_{\max}}(4, 2) = 0$ BUT
>$P_{X_\min}(4) = \frac{5}{36}$ and $P_{X_\max}(2) = \frac{3}{36}$ so multiplying them gives $\frac{5}{36} \cdot \frac{3}{36} \neq 0$
>
> > Jointly impossible, but marginally possible! 

>[!example] The weird one from [[Conditional Distributions (Multivariate)#Weird Example|here]]. Is $X, Y$ independent?
>> The support is not rectangular, and therefore is NOT independent
>
>$f_{X, Y}(0.5, 0.75) = 0 \neq f_X(0.5)\times f_Y(0.75)$
>Works for *any* $0 < x < y < 0$

>[!thm] Range Dependence $\implies$ No Probabilistic Independence

>[!example] ![[Example 4 for multi-var independence.png]]
>
>We find the marginals via integration:
>$f_X(x) = \int_{-\infty}^\infty f_{X, Y}(x, y) \;dy = \int_0^1 c \cdot x \;dy$
>$=cx(1-0)$
>
>> Cool fact: $c = 2$ because if you make a diagram you'll notice it's shaped like a wedge. The $c$ would need to be $2$ in order for the PDF's double-integrand (volume) to be $1$

