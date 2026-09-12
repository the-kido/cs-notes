>Chapter 4.5

THE FUNDAMENTAL THEOREM OF CALCULUS.
This is very fundamental, very calculus.

>[!thm] FTOC (part #1) (page 364)
>Let $a, b \in \mathbb R, a < b$.
>IF 
>1. $f$ is continuous on $[a,b]$, and
>2. $F$ is any anti-derivative of f of $[a,b]$.
>
>THEN
>$$\int_a^b f(x)dx = F(x) \vert ^b_a = F(b) - F(a)$$
>>[!Proof]-
>>Suppose $f$ is continuous on $[a,b]$ and $F$ is some anti-derivative of $f$ on $[a,b]$.
>>Let $P = \set{x_i}^n_{i=0}$ be a Riemann partition of $[a,b]$
>>So $\int_a^b f(x)dx = \lim_{n\to\infty} \sum^n_{i=1} f(x_i^*) \Delta x, x_i^* \in [x_{i-1}, x_i]$ by def'n of definite integral (by using #1)
>>(now we want to get rid of the sigma notation to hopefully get us closer to our result. We gotta use our assumptions somehow.... what about #2? F'(x) = f(x) by def'n of anti-derivative.)
>>> (side stuff to get some more info to help us)
>>> By 2, F is differentiable on [a,b].
>>> This means F is continuous on [a,b] too.
>>> Specifically, F is cont on each $[x_{i-1}, x_{i}]$ is differentiable on each $(x_{i-1}, x_i)$. 
>>> Look the hypothesis work for MVT. yeah. MVT....
>>> Therefore  by MVT, (applied F on $[x_{i-1}, x_1]$), $\exists c_i \in (x_{i-1}, x_i) s.t. F'(c_i) = \frac{ F(x_i) - F(x_{i-1})}{x_i - x_{i-1}}$
>>> $\Leftrightarrow F(x_i) - F(x_{i-1}) = F'(c_i)(x_i - x_{i-1})$ 
>>> $\Leftrightarrow F(x_i) - F(x_{i-1}) = f(c_i)(x_i - x_{i-1})$ by assumption #2
>>> $\Leftrightarrow F(x_i) - F(x_{i-1}) = f(c_i)(\Delta x)$ by our Riemann partition. 
>>
>>Choose $x_i^* = c_i$, since $c_i \in (x_{i-1}, x_i)$ 
>>Then $\lim_{n\to\infty} \sum^n_{i=1} f(x_i^*) \Delta x, x_i^* \in [x_{i-1}, x_i] = \lim_{n\to\infty} \sum^n_{i=1} f(c_1) \Delta x$ 
>>Notice how the sum is a telescoping sum! Or you can think of it as the length of all segments added together!!!1
>>$$\begin{align*}
>>\lim_{n\to\infty} \sum^n_{i=1} f(c_1) \Delta x &= \lim_{n\to\infty} (   (F(x_1) - F(x_0)) + (F(x_2) - F(x_1)) + \dots + (F(x_{n-1} - F(x_{n-2}))) + (F(x_n) - F(x_{n-1}))  ) \text{ by defn of sum}\\
>>&= \lim \limits_{n\to\infty} F(x_n) - F(x_o) \text{ by telescoping series}\\
>>&= \lim \limits_{n\to\infty} F(b) - F(a) \text{ by def of P (the riemann partition)} \\
>> &= F(b) - F(a) \text{ by limit laws}
>>\end{align*}
>>$$>If $f$ is continuous on [a,b] and F is any anti-derivative of f, then
>
>>[!purpose]
>>It explicitly relates anti-derivatives with signed area!
>
>>[!explanation] Why the continuity on $[a,b]$?
>>Because we can't be sure the function is well-defined without it. And it's gonna be a while before we learn how to deal with functions like $\frac{1}{(x+1)^2}$ with a vertical asymptote, for instance.

# Evaluation Notation
>[!defn] 
>For any function F on an interval $[a,b]$, the difference $F(b) - F(a)$ is the "evaluation" of $F(x)$ on $[a,b]$. It's notated like below
$$F(x)\vert_a^b = F(b) - F(a)$$
>>[!purpose]
>>It lets us do this:
>>$$\int_1^4 x^2\;dx = (\frac{1}{3}x^3)\vert_1^4 = \frac{1}{3}4^3 - \frac{1}{3}1^3 = 21$$ without an intermediate anti-derivative function
>
>>[!explanation] Where is the C?
>>You can add it, but it is quite useless as it'll get cancelled out when evaluating.
>>$$\int_a^b f(x)\;dx = (F(x) + C)|_a^b = (F(b) + C) - (F(a) + C) = F(b) - F(a)$$

### Evaluating [[Indefinite Integrals]] 
$$\int_a^b f(x)\;dx = \left(\int  f(x)\; dx\right) \Bigg| _a^b $$
These are equivalent!

# <span class="cards">Cards</span> #calc2-4

In your own words, what is [[The Fundamental Theorem Of Calculus I (FTOC I)]]?
?
If f is continuous on $[a,b]$ and we have any anti-derivative of $f(x)$, $F(x)$ of $[a,b]$, then
$$\int_a^b f(x)\;dx = F(b) - F(a)$$

