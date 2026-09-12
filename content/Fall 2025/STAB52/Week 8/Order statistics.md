We've been doing transforms like $Z = X + Y$, but what about $\min$ ?

Order Statistics don't deform, but *order* values
- $X_{(1)}$ is first-order statistic (minimum)
- $X_{(n)}$ is nth-order statistic (maximum)
- We can also see second order, or third, whatever.
Note $X_{(1)} \leq X_{(2)} \leq \dots \leq X_{(n-1)} \leq X_{(n)}$

> For this course we only deal with $\min$ and $\max$ only


### Distribution of Maximum
$F_({n})(x) = [F(x)]^n$ and $f_{(n)}(x) = n [F(x)]^{n-1}f(x)$

>[!proof]
>$F_{(n)}(x) = P(X_{(n)} \leq x) = P(\max\set{X_1, \dots, X_n} \leq x)$
>$=P( \set{X_1 \leq x} \cap \dots \cap \set{X_n \leq x}  )$ (Each of the elements in that big "max" must be less than $x$!)
>$=P(X_1 \leq x)\times \dots \times P(X_n \leq x)$ (by independence of the RVs)
>$= F(x)^n$ (by their CDFs...?) (oh because we assume all these RVs have the same CDF and PDF)
>> If the CDFs weren't the same, you'd just have a long product string instead of the ^n
>> If you didn't have independence, you'd use the Joint PDF of $F_{x_1, x_2, x_3, \dots}(x_1, \dots)$
>
>Also $f_{(n)}(x) = \dfrac{d}{dx}F_{(n)}(x) = \dots$ it's just the derivative
>

### Distribution of Minimum

$F_{(1)} = 1 - [1 - F(x)]^n$ and $f_{(1)} =$ its derivative

>[!proof] 
>Very similar to above one
>
>$P(\min \set{X_1, \dots, X_n} \leq x) = P( \set{X_1 \leq x} \cup \set{X_2\leq x} \cup \dots \cup \set {X_n \leq x})$, because if the minimum is less than the $X$, the rest of the elements might still be larger. It's not that all elements are less than $x$ in this scenario.
>Instead we can use complement:
>$=1 - P( \set{X_1 > x} \cap \dots \cap \set{X_n > x}  )$
>And we can do complement rule again
>$=1 - ( (1 - F(x)) \times \dots \times (1 - F(x))  )$
>$1 - (1 - F(x))^n$
>

>[!example] Machine with Exponential (memoryless) lifetime of components
>All parts need to work for it to run. Otherwise it's broken!
>
>"What is the CDF of its lifetime"
>
>We define $X_1, \dots,  X_n \sim Exp(\lambda)$
>And the lifetime is the minimum of these times: $\min\set{X_1, \dots, X_n} = X_{(1)}$
>And its CDF is just $1 - (1 - F(x))^n$
>$= 1 - (1 - (1 -  e^{\lambda x}))^n$ (for $x \geq 0$)
>$=1 - e^{\lambda n x} \sim \text{Exp}(n\lambda)$ which is about $n$ time smaller than the time of each component. Makes sense!

>[!example] Cont. if it breaks down when *all* the components die.
>
>In engineering, we often have many redundant components so if one dies, it could rely on the other ones. Let's think of that. If *all* of these components die, then the thing is dead. 
>
>We want the CDF of this time
>
>Machine Lifetime = $\max{X_1 \dots X_n} = X_{(n)}$
>$F_{(n)} = F(x)^n$
>$= (1 - e^{\lambda x})^n$ (for $x \geq 0$)
>


## Sums of RVs
Something we've already seen! Think Gamma

Used for *aggregate* behaviour.

