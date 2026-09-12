 Words such as everyone, someone, everything, or something are often used to express the meanings of statements containing quantifiers

## To $\to$ or $\wedge$, that is the question

When referring to everyone with a certain attribute, you can write it like this:
- $\forall x, P(x) \to Q(x)$ where P(x) is a requirement for the x for Q(x) to be true
However, when talking about "some" elements, you would instead write:
- $\exists x, P(x) \wedge Q(x)$

##### Examples
>[!example] "Everything in that store is either overpriced or poorly made."
>Let S(x) stand for "x is in the store", let O(x) be "x is overpriced", and let P(x) be "x is poorly made."
>
>$\forall x, S(x) \to O(x) \vee P(x)$

> [!example] "Something in that store is either overpriced or poorly made"
> Note that it is not the same as just replacing $\forall$ with $\exists$ from the above statement!
> 
>$\exists x, S(x) \wedge (O(x) \vee P(x))$

## Several quantifiers 
"For all x and y..." can be said as $\forall x,y$
"There exists x and y..." can be said as $\exists x,y$

>[!example] "Some students are married to someone else"
>$\exists x, (S(x) \wedge \exists y,M(x,y))$ is a way of writing it
>Another way could be
>$\exists x, \exists y, S(x) \wedge M(x,y)$

## Numbers
- "A" number would use "exist"
- If a variable is included in the question, you probably do not need to quantify it. Likewise, if the question is referring to "a number" it you probably quantify that.

## Common indicators to use "forall" or "exists"
Use $\forall$ when:
- Any
Use $\exists$ when:
- Some
- A few

## Quantifying "nobody" or "nothing"
It can be expressed as either $\neg \exists x, P(x)$ or $\forall x, \neg P(x)$ since they are equivalent
>[!example] Susan likes everyone who dislikes Joe
>Disliking Joe is a necessary requirement for Susan to like you
>L(x, y) stands for x likes y
>$\forall x, \neg L(x, \text{Joe}) \to L(Susan, x)$

This also applies for disjoint sets. If we say A and B/C are disjoint, then it would look like this:
$\neg \exists x, x \in A \wedge (x \in B \wedge x \not  \in C)$

## Two subjects
>[!example] "Everyone likes at least two people"
>We can use $\exists$ twice, for y and z, and ensure that y and z are not the same (we cannot choose the same person and say they like themselves)
>$\forall x, \exists y, z, y \neq z \wedge L(x,y) \wedge L(x, z)$

## Cards #discrete-4 
Write these as quantified statements (the universe is natural numbers)
(a) x is a perfect square. 
(b) x is a multiple of y. 
(c) x is prime. 
(d) x is the smallest number that is a multiple of both y and z.
?
Remember that the x, y, or z given in the question are free! They cannot assume any other meaning.
a) $∃y(x = y^2)$
b) $∃z(x = yz)$
c) $x > 1 ∧ ¬∃y∃z(x = yz ∧ y < x ∧ z < x)$
	- We require that x > 1 since that's part of the def'n of prime (any number > 1 that cannot be formed by multiplying two other numbers)
	- #todo why do we specify that y < x and z < x?
d) ∃a(x = ya) ∧ ∃b(x = zb) ∧ ¬∃w(w < x ∧ ∃c(w = yc) ∧ ∃d(w = zd))
- #todo yeah i do NOT get this one at all. Go to page 71 in the textbook.


