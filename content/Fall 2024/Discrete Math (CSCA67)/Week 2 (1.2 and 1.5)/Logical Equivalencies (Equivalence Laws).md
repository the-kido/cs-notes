#card-this Make all of these cards to remember 

>[!note] When referring to logical equivalences, make sure to use $eqv$ or $\equiv$ instead of $=$ because logical equivalences are special.

For the below equivalences, P, Q, and R are *any* statement that aren't a tautology or contradiction. 
## De Morgan’s Laws
> Let's you "distribute" the negatives out and flips the logical connective.

$\neg(P\wedge Q)$ eqv $\neg A \vee \neg B$
and
$\neg(P \vee Q)$ eqv $\neg P \wedge \neg Q$

## Commutative Laws
> Deals with operands of an operation not worrying about if it's first or not

$P \wedge Q$ eqv $Q \wedge P$ 
and
$P \vee Q$ eqv $Q \vee P$ 

## Associative Laws
> Deals with grouping with brackets

$P \wedge (Q \wedge R)$ eqv $(P \wedge Q) \wedge R$ eqv $P \wedge Q \wedge R$
Same applies with "or"
## Distributive Laws
> Distribute the first statement and connective into the second statement

$P \wedge (Q \vee R)$ eqv $(P \wedge Q) \vee (P \wedge R)$

$P \vee (Q \wedge R)$ eqv $(P \vee Q) \wedge (P \vee R)$

## Idempotent Laws

$P \wedge P$ eqv $P$
and
$P \vee P$ eqv $P$
## Absorption Laws
> Just... remember it? #card-this

$P \vee (P \wedge Q)$ eqv P 
and
$P \wedge (P \vee Q)$ eqv $P$

## Double Negation Law
> Arguably the hardest one

$\neg \neg P$ eqv $P$

## Conditional Law(s)
> Note how $P \rightarrow Q$ has the same truth table as $\neg P \vee Q$ in [[Conditionals (or implications in calc)]]

- P → Q is equivalent to ¬P ∨ Q
- P → Q is equivalent to ¬(P ∧ ¬Q)

## Biconditional Law
> If p is true, q is true AND if q is true, p is true

$P \leftrightarrow Q \text{ eqv } (P \to Q) \wedge (Q \to P)$

## Contradiction Laws
- $\neg Q \wedge Q$ is always a contradiction. 

$P \wedge contradiction$ eqv contradiction
$P \vee contradiction$ eqv P
$\neg(contradiction)$ eqv tautology
## Tautology Laws
- $\neg Q \vee Q$ is always a tautology.  

$P \vee (tautology)$ eqv tautology 
$P \wedge (tautology)$ eqv P
$\neg(tautology)$ eqv contradiction

# Quantifier ones
### Quantifier Negation law
>$\neg\forall x, P(x)$ eqv $\exists x, \neg P(x)$
>$\neg\exists x, P(x)$ eqv $\forall x, \neg P(x)$

Likewise, 
$\forall x, \neg P(x)$ eqv $\neg \exists, P(x)$
$\exists x, \neg P(x)$ eqv $\neg \forall, P(x)$

>[!example]-
>1. Someone didn't do the homework !!
$\exists x, \neg H(x)$ or...
$\neg \forall, H(x)$

### "Distribution"
We say "The universal quantifier distributes over conjunction" because we can do this:

> $∀x, (E(x) ∧ T (x)) \equiv ∀x, E(x) ∧ ∀x, T (x)$

This does NOT apply to existential quantifiers. 

>[!example] We can use this to show that A = B is logically equivalent to $A \subseteq B \wedge B \subseteq A$$
>
> A = B means $∀x(x ∈ A ↔ x ∈ B)$
> $\equiv ∀x[(x ∈ A → x ∈ B) ∧ (x ∈ B → x ∈ A)]$ (since the universal quantifier distributes over functions)
> $\equiv A ⊆ B ∧ B ⊆ A$

