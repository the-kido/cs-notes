Chapter 4.4 pg. 355
# Definition
>[!defn] Indefinite Integrals
>Suppose $f$ is continuous (on its domain). The indefinite integral of $f$ is an infinite family of antiderivatives of $f$.
>
>It takes the form $$\int f(x) dx = F(x) + C$$  
>where $F$ is some antiderivative of $f$ and $C$ is any constant.
>>[!purpose]
>>Whereas finite integrals resulted in a number, indefinite integrals represent *the family of antiderivatives* of $f$ (remember all anti-derivatives differ by a constant)
>
>>[!explanation] Why is the notation for describing the families of antiderivatives ($\int$) so similar to that of the area under a function ($\int_a^b$)?
>>This is because (when we learn about the [[The Fundamental Theorem Of Calculus I (FTOC I)]]), there is a relationship between the antiderivative and integral. 

>[!example]- If $f(x) = \arctan x$ then $\int f(x) dx = F(x) + C$ would take the form 
>$$\int \arctan x\; dx= \frac{1}{x^ + 1} + C$$
(pg. 357)
# Integral Properties
>[!thm] Properties of Indefinite Integrals
>If f and g are cont. on their domains, then
>i) Sum rule
>$$\int (f(x) + g(x))dx = \int f(x) dx + \int g(x) dx$$ 
>ii) Const mult rule
>$$\forall c \in \mathbb R, \int cf(x) dx = c \int f(x)dx$$ 
>
>(Wow look it satisfies linearity properties!)

>[!proof]- Proof of property (ii)
>We will use the right inequality since that's what we have the most info with.
>Then 
>$$\begin{align}
>c \int f(x)\;dx &= c(F(x) + C)\\ 
>&= cF(x) + cC\\ \\
&= cF(x) + B \text{ for some arbitrary B since cC is some arbitrary constant} \\
&= \int cf(x)\; dx \text{ by def'n since B was arbitrary}
>\end{align}$$
>
 
