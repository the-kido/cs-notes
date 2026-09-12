The $\max$ is the largest element of a set. However, there are times where there is no largest element (like in $[0,5)$. "5" is not a max since it's not in the set and $5^-$ is arbitrary). That's where the supremum comes into play.
<span class="definition">Supremum</span> The least upper bound of a set. It does not need to be in the set, though.

>[!note] For these examples, we are referring to a set S
![[Pasted image 20241030210745.png]]

### Definition of maximum and minimum
Let $S \subseteq \mathbb{R}$ and $M \in \mathbb{R}$. We say that M is "the"^[1] <span class="emphasis">maximum</span> of S if
1. $M \in S$, and 
2. $\forall x \in S, x\leq M$
^[1] when using "the" in a definition, that implies it is unique.

#### Definition of minimum

### Definition of upper and lower bounds
> Let $S \subseteq \mathbb{R}$ and $b \in \mathbb{R}$. We say b is <span class="emphasis">an upper bound</span> of S if $\forall x \in S, x \leq b$

For lower bound, it's just $x \geq \mathscr{l}$ instead.

### Definition of supremum

>Let $S \subseteq \mathbb{R}$ and $M \in \mathbb{R}$. We say that M is the <span class="emphasis">supremum</span> of S if
>1. $\mathscr{s}$ is an upper bound of $S$ (i.e. $\forall x \in S, x \leq S$), and
>2. If $b$ is an upper bound of $S$, then $\mathscr{s} \leq b$

### Definition of bounded above
>A set $S \subseteq \mathbb{R}$ is <span class="emphasis">bounded above</span> if it has at least one upper bound.

### Definition of bounded 
> Def'n: A set $S \in \mathbb{R}$ is bounded if above it is bounded and below.
## Relation between supremum and maximum
>[!note] 
>If the maximum exists, then the supremum will exist. 
>If the supremum is in the set, then it is also the maximum.
>
### When doesn't a Supremum / Infinium exist?
>When set set is not bounded above/below, like in $[0, \infty)$ or $(-\infty, 0]$

### Least Upper Bound Property (Completeness axiom)
> Every nonempty set of real numbers that is bounded above has a least upper bound.

It is obvious. 

>[!note] 
>We specify real numbers because it's not valid for rational numbers 
>>[!example] $S = \{r \in \mathbb{Q} : r^2 < 2\}$
>>For all rational upper bound, there is a number that is smaller than any possible supremum.
>>
>>If we assume $\mathscr{s} = 1.415$, well 1.4143 is smaller, and so is 1.41421356.

#### Approximating sup(S)
> You can approximate sup(S) as close as you want using elements in S

![[Pasted image 20241022205850.png]]
>[!example] Let $S = \{\frac{n}{n + 1} | n \in \mathbb{N}\}$. Approximate the supremum.
>The set is roughly equivalent to $\{\frac{1}{2},\frac{2}{3}, \frac{3}{4}, \frac{4}{5}, \dots\}$. By intuition, sup(S) = 1
>If we use $\epsilon = 0.01$, the, there should be an x such that $1 - \epsilon < x \leq 1$ (or basically $0.99 < x < 1$) that would also be in the set. x could be $\frac{999}{1000}$ for instance, where n = 999.
>

### "Approximating supremum theorem" (ig that's what we'll call it)
> For s = sup(S) to exist, then there must be a point arbitrarily close to the supremum from the left. 
> Let s be an upper bound of a nonempty set on R. Then,
>  $s = \sup(S) \text{ iff } \forall \epsilon > 0, \exists x \in S \text{ s.t. } s - \epsilon < x$

> [!check] Proof
> Since $S \subseteq R$ and S is non-empty and s is an upper bound of S, then S has a supremum by Least Upper Bound property.
> (=>)
> Suppose s = sup(S)
> Let epsilon > 0 be arbitrary
> To derive a contradiction, assume for all $\forall x \in S, s - e >= x$
> Then s - e is an upper bound (by definition of upper bound using b = s - e)
> But s - e < s, since e > 0 by inequality properties.
> $e > 0 \implies -e < 0 \implies s - e < s$. This contradicts that s is the supremum (for all upper bounds b, s <= b isn't holding!)
> This, there exists an x in S such that e - s < x.



 


# Cards #calc-6
Find the max / min / sup / inf of
a) $A = \{x \in \mathbb{R} | x^2 \leq 2\}$
b) $B = \{x \in \mathbb{R} | x^2 < 2\}$
c) $C = \{x \in \mathbb{Z} | x^2 \leq 2\}$
?
a) 
$\max(A) = \sup(A) = \sqrt {2}$
$\min(A) = \inf(A) = -\sqrt {2}$

b) 
There is no max or min for ($-\sqrt{2}, \sqrt{2}$)
$\sup(A) = \sqrt {2}$
$\inf(A) = -\sqrt {2}$
c) $C = \{-1, 0, 1\}$
$\max(A) = \sup(A) = 1$
$\min(A) = \inf(A) = -1$


T/F: The sup of a set of rational numbers is rational
?
False. $sup\{3, 3.1, 3.14, 3.146,\dots\} = \pi$. Pi is irrational.

T/F: The sup of a set of irrational numbers is irrational
?
False. $sup\{\frac{1}{\pi}, \frac{1}{2\pi}, \frac{1}{3\pi} \dots\} = 0$. 0 is rational.

When doesn't a supremum/infimum exist?
?
If the set S is not bounded above or below. That means, there is no biggest or smallest number of the set for supremum or infimum to assume.

if a supremum exists, will a maximum exist? 
?
No, there can be a set such that a sup exists but not a max. Think of 1/x for all x > 0 in Z. 
The smallest possible number approaches "0" as x gets bigger, but never equals it, therefore there is no element that reaches this biggest value. No minimum. There is an infimum though!

If a *max* exists, then the supremum will also exist since the max(S) = sup(S) in that case. okay good.