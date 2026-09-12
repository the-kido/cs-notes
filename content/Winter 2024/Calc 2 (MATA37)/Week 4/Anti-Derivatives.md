
>[!defn] Anti-derivative
>Suppose $f$ is continuous on an interval $I$. An antiderivative of $f$ on $I$ is a function $F$ s.t. $\forall x \in I, F'(x) = f(x)$

 Consider $f(x) =  on 
$F(x) = e^{x+1}$ is an antiderivative.

so going from $x^n$ to $nx^{n-1}$ has us subtracting the exponent by 1 and multiplying by n
the opposite could be $\frac{x^{n+1}}{n+1}$
then we let any x in [a,b] and see $(\frac{x^{n+1}}{n+1})' = x^n$ 


When we find the antiderivative of $\int \frac{1}{4x^2 + 1}$, we cannot say $F(x) = tan^{-1}(2x)$ because we didn't consider chain rule / composition.

> [!note] If your anti-derivative guess is wrong by a multiple of a constant, simply *divide by that constant*. 

#todo attempt to find deriv of wrong antideriv and see the const mult thing. then try to find the new one. it is
$F(x) = \frac{tan^{-1}(2x)}{2} + C$ (MAKE SURE TO ADD THAT +C)
