> For all of the below, we are trying to prove that $P \to Q$ or just $P$ (for contradiction) 
## Currently we know:
### Direct
![[Pasted image 20241031150259.png|500]]

We assume the hypothesis / antecedent and whatever we can conclude while assuming that can *only* be true if the antecedent is true. Therefore, if I say
```
y = x + 4
Suppose x = 2
	y = x + 4
	y = 6
x = 2 -> y = 6
```
If x = 2, then y = 6!

This can go further: Suppose P → (Q → R). Prove that ¬R → (P → ¬Q)
```
P -> (Q -> R)
Suppose not R
	Suppose P
		not P V not Q V R
		not Q
	P -> not Q
not R -> (P -> not Q)
```

 ✨ *subarashii* ✨ 

![[Pasted image 20241031150314.png|500]]
### Contrapositive
![[Pasted image 20241031150347.png|500]]

Useful when the negative of the consequent/conclusion matches with some other assumption. Look at the card example below.

### Cases
 ![[Pasted image 20241031152224.png|500]]

#### Alternative to cases
- To prove P v Q, we could instead prove $\neg P \to Q$ instead, giving us


### Contradiction
 ![[Pasted image 20241031152314.png|500]]
 - You assume the opposite, lead to some garbage, which shows that P must be true.
 - This comes with the bonus of letting us assume $\neg P$ where otherwise we would have nothing to work with!
	 - This is useful when you are trying to prove that something exists, but are not sure what elements exist *exactly*. Think $\exists x, x \in S$ where S is a set and $S \subseteq \mathbb{R}$. We have NO clue what S holds *exactly* so by contradicting, we know that x is some arbitrary value.
 - 
### Induction
 ![[Pasted image 20241031153920.png|500]]
I go over it in more detail [[Induction Proofs|here]]

### Proving bi-conditions
![[Pasted image 20241031150521.png|500]]

## Ways to NOT prove
- Counterexample!
 ![[Pasted image 20241031150220.png|500]]
  
# Cards #discrete-6

Suppose a, b, and c are real numbers and a > b. Prove that if ac ≤ bc then c ≤ 0.
?
Use contrapositive. 

a  > b by assumption
Suppose c > 0
ac > bc (since c > 0)
c > 0 --> ac > bc
ac <= bc --> c <= 0
easy

Suppose $A \backslash B ⊆ C ∩ D$ and x ∈ A. Prove that if $x \not ∈ D$ then $x ∈ B$
?
1. $x\in A$
2. $(x \in A \wedge x \not \in B) \to (x \in C \wedge x \in D)$
3. Suppose $x \not \in B$
	4. $x \in C \wedge x \in D$
	5. $x \in D$
6. $x \not \in B \to x \in D$
7. $x \not \in D \to x \in B$
boom



Prove that for any real numbers a and b, $(a + b)^2 − 4(a − b)^2 = (3b − a)(3a − b)$
?
The form of this question is $\forall a, \forall b, (a + b)^2 − 4(a − b)^2 = (3b − a)(3a − b)$, so we would need to do universal instantiation twice.
```
Let a be an arbitrary real number
Let b be an arbitrary real number
WTS (a + b)^2 - 4(a-b)^2 <--> (3b − a)(3a − b) 

Suppose (a + b)^2 - 4(a-b)^2
	a^2 + 2ab + b^2 -4(a^2 - 2ab + b^2)
	-3a^2 + 10ab - 3b^2
	-3a^2 + 9ab + 1ab - 3b^2
	3a(3b - a) - b(3b - a)
	(3b - a)(3a - b)
(a + b)^2 - 4(a-b)^2 --> (3b - a)(3a - b)

Suppose (3b - a)(3a - b)
	....
Then you use biconditional law and boom.
```


Suppose that A, B, and C are sets. If A ⊆ C and B ⊆ C then A ∪ B ⊆ C.
?
We have: A subset C, B subset C, and since x in A u x in B --> x in C, we also have A u B
```
Suppose A ⊆ C and B ⊆ C
	x in a --> x in c
	x in b --> x in c
	Suppose x in A or x in B
		Case 1: x in A
			x in c (modus ponens)
		Case 2: x in B
			x in c (modus ponens)
		x in C (by case 1 and case 2)
	A u B ⊆ C
A ⊆ C and B ⊆ C -> A u B ⊆ C
```
boom

 Prove that for every real number x, if x^2 ≥ x then either x ≤ 0 or x ≥ 1
 ?
Note that $x \leq 0 \vee x \geq 1$ can be written as $x > 0 \to x \geq 1$
```
Let x be arbitrary
Suppose x^2 >= x
	Suppose x > 0
		x >= 1 (by dividing both sides by 'x' since x > 0)
	x > 0 --> x >= 1
	x <= 0 or x >= 1
x^2 >= x -> (x <= 0 or x >= 1)
```
boom.

