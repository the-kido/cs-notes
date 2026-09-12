a series unlike a sequence is a sum of every term of a sequence... but what does *that* mean!?

$$S_n = \sum_{k=1}^n a_n$$ a partial sum 

BMCT:
- if bounded below and dec, then it converges
- if bounded abv and inc, then converges
Proof is a good exercise. Proof time

waiiit why does $a_n = tan^{-1}x$ converge.
Its increasing and bounded abv... but 
hmm ig there really is a difference between it and integrals. 

$\sum_{n=1}^\infty \frac{1}{n(n+1)}$  converges.
- The sequence itself converges to 0; what about the series though?
- If u write out the sums u'll see the number creeps to 1 in a clear pattern

Prove convergence for abv: We use definition (means we try to get a telescopic series)
> Define $S_n = \sum_{k=1}^n \frac{1}{k(k+1)}$
> Notice $\frac{1}{k(k+1)} = \frac{1}{k} - \frac{1}{k+1}$ by partial fraction decomposition! #todo Note this nice pattern
> Heyy it looks telescopic!!! 
 So $S_n = (1/1 - 1/2) + (1/2 - 1/3) + (1/3 - 1/4) + .... + (1/n+1 - 1/n) + (1/n - 1/n-1)$
 $=1 - \frac{1}{n+1}$
> SO $\sum_{k=1}^\infty \frac{1}{k(k+1)} = \lim \limits_{n\to\infty} S_n$ by defn
> $= \lim \limits_{n\to\infty} (1 - \frac{1}{n+1}) = 1$
> so the limit exists; it does converge (and to 1!)


> a series converges if its sequence of partial sums converges #todo 

#### Q3.
We know the series is monotone 
See, $S_{n+1} - S_n = a_{n+1} \geq 0$
Which means it increases sorta kinda
BMCT here yeye. #todo 


## EE9 Q7
- Since we cant calculate any limit for the by definition proof, instead we are sort of forced to use BCMT
- a_1 = 1
- a_2 = sqrt 3
- a_3 = \sqrt{1+sqrt3}
- Defo increasing. Now we gotta show it's bounded abv.
- It looks to be bounded abv by $2$
- Proof by induction time! Evan suggests induction for any recursive problem

$P(n): \textbf{0 }\leq a_n \leq 2$ 
Basis: $a_1 = 1 \leq 2$
I.H: Let $n \in \mathbb N$; assume $P(n)$ holds.
I.S: WTS $P(n+1)$ holds.

We know $a_n \leq 2$ by IH
So $2 + a_n \leq 4$ by adding 2 to both sides
so $\sqrt{2+a_n} \leq 2$
but we don't know if $a_n$ is positive!!!! That is why future me adds a lower bound to the predicate.
So $\sqrt 2 \leq \sqrt{2 + a_n} \leq 2$ as $\sqrt x$ increasing on its domain
So $0 \leq \sqrt 2 \leq a_{n+1} \leq 2$ by defn of $a_n$ 
So P(n+1) holds. 
By induction (we say by PMI in this course), we have $\forall n \in \mathbb N, P(n)$!

Now we have that bound, we gotta prove increasing too!

Proof by induction.
P(n): $a_n \leq a_{n+1}$
Basis: when n=1, 
>$a_1 = 1, a_2 = \sqrt{3}$
 So $1 = a_1 \leq a_2 = \sqrt {3}$

I.H: Let $n \in \mathbb N$. Assume P(n) holds.
I.S. 
$a_n \leq a_{n+1} \implies 2 + a_n \leq 2 + a_{n+1}$
$\implies \sqrt{2 + a_n} \leq \sqrt{2 + a_{n+1}}$ because sqrt is increasing and $a_n \geq 0$ from before
$\implies a_{n+1} \leq a_{n+2}$ by defn
so P(N+1) holds.



## anotha exampla
$a_n = [e^{-x} - e^{-n-1}]$ series. profo congeveges
ehh i'll take photos. it seems p obvious how to do them..
$S_n= e^{0}$
- btw if u wanna know if ur  telescoping series is right, notice that the first term is pos and the second is neg -- rather BOTH of the terms cannot be both pos and neg
ans is $1/e$

#todo Tips!
- div test first is good. If the lim as n-->infty is not 0 for that one sequence, then clearly the *series iteslf* will not diverge.

### Geometric series things
Always converges to: $\frac{\text{first term}}{1 - \text{ratio}}$
takes the form $\sum_{n=1}^\infty ar^n$ 
ykykyk

Also a cool thingy 
$\frac{1}{2^n}$
I took a photo. Basically the area of a square is 1.


# Harmonic series
$\sum_{n=1}^\infty \frac1 n$ 
- It looks like it converges
- BUT IT DOESN'T. I've been fooled
- But $1/n^2$ doesn't diverge?

Observe $S_n \geq \int_1 ^{n+1} \frac 1 x \;dx$. To prove it holds:
= $\ln(n+1) - \ln(1))$
then the limit of that goes to infinity!
Prove that the limit goes to infinity with delta epsilon.