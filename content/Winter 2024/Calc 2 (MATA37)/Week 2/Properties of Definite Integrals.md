`pg. 344, 346, 347/8`
> For some functions, we cannot use any sum rule to figure them out! So we need new tools. Properties of definite integrals! 

>[!quote] The properties
>Let $a, b \in R, a < b$. IF $f$ and $g$ are integrable (means the Riemann integral definition exists) on $[a,b]$ THEN 
>##### 1. If $f(x) \geq 0$ on $[a,b]$ then $\int^b_a f(x)dx \geq 0$ 
>If the graph is positive, then the area must be positive! 
>Likewise is true for if f is negative on the interval: If $f(x) \leq 0$ on $[a, b]$ then $\int^b_a f(x)dx \leq 0$
>##### 2. f+g is integrable on [a,b] and $\int^b_a (f(x) + g(x)) dx = \int^b_a f(x)dx + \int^b_a g(x)dx$
>This is really two properties so proving it means we need to prove f+g is integrable *and* that the Riemann's def'n integral exists for f+g 
>##### 3. $\forall c \in R, cf$ is integrable on $[a,b]$ and $\int^b_a cf(x) = c \cdot \int^b_a f(x)$
>Wow, integrals are linear!
>##### 4. $\int^a_a f(x)dx= 0$
> True cuz the $\Delta x$ is 0 and $A = l\cdot w$ so $A = 0$. 
>##### 5. $\int^b_a f(x)dx = - \int^a_b f(x) dx$
>Consider $\Delta x = \frac{b-a}{b}$. Were the lower and upper bounds to switch, the partitions would be the same but the $\Delta x = \frac{a-b }{n} = -\frac{b-a}{n}$
>So the lengths are now negative, thereby swapping the sign of the signed area.
>
>We get into details abt this later but basically swapping the direction we integrate will also swap the sign of the area.
>##### 6. Union Interval Property: $\int^b_a f(x) dx = \int^c_a f(x)fx + \int^b_cf(x)dx$ for any $c \in (a,b)$
> This is true also because the area at point 'c' is 0.
> The interval could be closed but... why. One of the integrals you get will be 0 by property #4.

### Proving property #2 
Suppose f and g are integrable on [a, b] (the hypothesis given for all these properties)
(Before stating the Riemann defn of an integral, that we take a Riemann partition)
Let $P = \set{x_i}_{i=0}^n$ be a Riemann Partition on $[a,b]$

Note f is integrable on $[a,b]$. So we have that $\int_a^bf(x)dx =\lim \limits_{x\to \infty} \sum_{}$ ... by R def of $\int_a^b f(x) dx$
Same for g...

WTS f+g is integrable on [a,b].
So, we WTS $\int_a^b (f(x) + g(x)) dx$ exists! (We are killing two birds with 1 stone here by showing f+g is integrable and that the integral exists.)



(this is an extenion of [[01-13]]) (suppose f and g are integrable on [a, b])

it is sufficient to prove $\int_a^b (f(x) + g(x))dx = \int_a^b f(x)dx + \int_a^bg(x)dx$
#todo what were the two things we wanted to prove again?
ik one of them is the identity of course

RHS = $\int_a^b f(x)dx + \int_a^bg(x)dx$
= $\lim \limits_{n\to\infty} \sum_{i=1}^n [f(x_i^*)\Delta x ] + \lim \limits_{n\to\infty} \sum_{i=1}^n [g(x_i^*)\Delta x ]$ by hyp (we know g and b are integrable on [a,b])
= $\lim \limits_{n\to\infty}  \left[ \sum_{i=1}^n [f(x_i^*)\Delta x ] + \sum_{i=1}^n [g(x_i^*)\Delta x ] \right]$ (by limit laws / (linearity of limits?))
= $\lim \limits_{n\to\infty} (\sum_{i=0}^n  f(x_i^*)\Delta x + g(x_i^*)\Delta x)$ by sigma properties (or linearity of sigma notation?)
= $\lim \limits_{n\to\infty} (\sum_{i=0}^n  \Delta x (f(x_i^*) + g(x_i^*)))$ by factoring. axiom 6 of fields, lol. Now this looks like a riemann sum!
Note you can express this to look *exactly* like a riemann sum by letting h(x) = f(x) + g(x). Not required but just note that it helps. 
= $\int_a^b (f(x) + g(x)) dx$ by Riemann defn of definite integral b/c $dom(f+g) = dom(f) \cup dom(g)$ and that $dom(f)$ and $dom(g) \subseteq [a,b]$. SO, $[a, b] \subseteq dom(f+g)$

So let's see what we've addressed so far
- (go over the whole riemann defn of definite integral and see what hypotheses we've addressed. Notice that we didn't address the domain one!)

