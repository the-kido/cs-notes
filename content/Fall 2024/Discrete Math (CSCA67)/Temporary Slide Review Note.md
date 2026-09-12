# Week 4 and a bit of 5 (Quantifiers)
- $\exists x, P(x) \to R(x)$
	- Reads as 'there is an x that is R(x) if it is P(x)'
- $\forall x, P(x) \wedge R(x)$
	- Means everything is p(x) AND r(x)
free = not bounded

"Analyse the logical forms" means turn englih into logic

 ✨ • If A ⊆ B, then A and C \ B are disjoint.
-  <span class="emphasis">disjoint</span> = No elements in the set
	- Can be described with empty set notation, but with quantifiers you can also say $\neg \exists$
 - $(\forall x, (x \in A \to x \in B)) \to (\neg \exists x, (x \in C \wedge x \not \in B))$
	 - GOOD
 - $\forall x, ((x \in A \to x \in B) \to \neg \exists x, (x \in C \wedge x \not \in B))$
	 - WRONG
	 - x is bounded twice and that makes no sense, so there is an obvious issue there.

Solutions = the values of a variable which make something true.
- All solutions of the inequality x^3 − 3x < 3 are smaller than 10.
	- This is asking that all values of x < 10 such that x^3 - 3x < 3
- #todo might be relevant to the discrete assignment (ast 4)


- If there is a number x such that x^2 + 5x = w, and there is a number y such that 4 − y^2 = w, then w is strictly between -10 and 10.
	- "free = not bounded"
	- x and y are NOT free. They are quantified! 
	- In this question, x and y are quantified! Only w is free.

Everything after "if" should be self encompassed. Then, everything after "else" should be self encompassed. If something is specifically told happens to *everything* if \_ then \_, then the quantifier comes before the if-then.
The quantifier *could* be outside and still be logically equivalent, however. Just semantically, it is a bit weird. 
- ![[Pasted image 20241102172548.png]]


1. Someone is a parent of everyone
2. Everyone is a parent of someone. Everyone has a child
3. no.
4. Someone is not a parent of anyone. Someone has no child.
5. Someone is a parent of someone. Someone has a child.
![[Pasted image 20241102173056.png]]
- #3 is just "Everyone is not a parent of everyone" ig?
	- "no one is a parent of no one"
	- $\neg \exists x, \exists y$ reads as "there is no x, and there is no y, such that ----"
	- #todo note this down

Negating English
- Something is funny -->  Everything is not funny.
- hmm there is really no clear pattern.
- Every CS major takes discrete mathematics  --> Some CS majors don't take discrete
- Some pets do not like walks.
	- All pets like walks
- The square of every odd number is odd.
	- The square of some odd numbers is even.

Note: It's better to do the logic negation and then english-ify that for confidence.

Bounded
- forall x e r, P(x) eqv forall x, x e r --> P(x)


If there's no if-then, then do NOT add implication 
- ![[Pasted image 20241102174811.png]]
- The conditions are that x  > 1 and other stuff. and = $\wedge$
- The slides include the 0 < y < x and 0 < z < x since the instructions specifiy "NOT a product of  <span class="emphasis">two smaller positive integers</span>"

#todo i should've asked why they specify x > 0 
because 0 is a natural number. x cannot be 0 because NOT positive. x must be POSITIVE.
![[Pasted image 20241102175220.png]]

if x is a multiple of y and z, that means x = ay and x = by where a and b are some other integers. 

To make something unique, we must show there does not exist any other numbers that pass the condition as seen in [[Unique Quantifiers]].
- Look at this example
- ![[Pasted image 20241102180858.png]]
- Since we specify there are exactly 2 square roots, we must show there is NOT a third. We already know there is either 1 or 2 because of the exists y and exists z. 
- Also, #todo would it not be valid to just use the unique symbol? Like y is unique, z is unique? Maybe not ig? Idk.

Just remember that A ∪ B = B is equivalent to ∀x,(x ∈ A ∨ x ∈ B) ↔ x ∈ B
- If two sets are equal, that means they are subsets of eachother:
	- #todo make sure i've noted this down properly
	- $A = B$
	- $\equiv \forall x, x\in A \subseteq x\in B \wedge x\in B \subseteq x\in A$
	- $\equiv \forall x, x\in A \leftrightarrow x\in B$


Arbitrary c means c represents *anything* in the category. 
Some element c means c can only represent a few things.
- ![[Pasted image 20241102182332.png|500]]
- Note the assumption below. Also note how we let Socrates be an arbitrary person. 


A bit of a brainfart on my part
![[Pasted image 20241102182745.png]]
- Having an email is NOT a necessary requirement to being a UofT student. That would imply someone who has an email is a UofT student lol. 
- Think of it like this: To have a UofT email, you MUST be a UofT student. To have a UofT email means you have an email. So, 
	- U(x) --> UM(x)
	- UM(x) --> E(x)
- So we get back to U(x) --> E(x). I see.


# #todo this is what i wanna prove
"Existential instantiation = fresh variable. This variable cannot be the same as any others in the proof. However, a Universal instantiation can cover up an existential one? Likewise, an arbitrary constant can be existentially generalized as well as universally."
$\forall x, Q(x)$
$\exists y, P(y)$

Proof 
P(c), for some c (existential instantiation)
Q(c) (universal instantiation)
... is this right? I've done it in some assignments already so if it isn't I may be doomed. 


# Week 5 and 6 (Proof strategies)
It's obvious stuff. Nothing new or hard

For cases, make sure that when proving P(x) or Q(x) --> R(x) with cases, that P(x) --> R(x) and Q(x) --> R(x)

You can also form a tautology:
If P(x) --> Q(x) can be written as 
If P_1(x) or P_2(x) or P_3(x) --> Q(x)
For instance, to prove "if n is an integer, then $n^2 \geq n$", we can split 'n is an integer' into 3 cases which forms a tautology:
- n is an integer $\equiv$ (n >= 0) or (n <= 0) or (n = 0)

![[Pasted image 20241103090215.png]]
- This would make sense if the question was "for any a natural number, if a^2 is even, then a is even"
	- I suppose I should interpret universe of discourse differently. I.e. "if a is natural" implies the universe of discourse is natural numbers. #todo ask about this one day.


Universal Modus Ponens
- $\forall x, P(x) \to Q(x)$
- P(c)
- Q(c) 
e.g. pretend we've proven that $\forall a, (a^2 \text{ is even}) \to (a\text{ is even})$
Pretend we know that `x^2 is even` in a proof. Then, we can use Universal Modus Ponens to get `x is even`

Okay i will try to type out all i can remember from the $\sqrt{2}$ proof. 
We prove that sqrt2 is rational and then do contradiction.
To be rational, then $\exists p, q \in \mathbb{N}, \sqrt{2} = \frac{a}{b}$ and the gcf(a, b) = 1 (lowest terms).

- If we say `x` is a `y`, then we can use existential generalization on that constant. 
	- in the proof, I have x^2 = 2y^2. I say that `y^2 is an integer`. This means there exists a k integer (y^2) such that x^2 = 2k (the k is y^2).
	- The idea is to show that x = 2i and y = 2j



# Week 7 (Induction)

To prove induction, we need to prove
- P(1)
- $\forall k \geq 1, P(k) \to P(k+1)$
And this will imply that 
- $\forall n \geq 1, P(n)$


Definitions
- Suppose P(x) in induction is the induction hypothesis
- P(1) means the base case is 1. 
- Induction Step shows what we need to prove to use the simple induction rule of inference

e.g. Prove that for all integers $n \geq 1$ that 1 + 2 + 3 + · · · + n = n(n + 1)/2
- Base case: P(1)
- Induction step: $\forall k \geq 1, P(k) \to P(k+1)$
	- This is what we must prove by assuming k >= 1 and P(k), then attempting to derive P(k+1)
	- 
A proper proof that "for every integer $n\geq_{1}$, then $\sum_{i=0}^{n} = 2^{n+1}-1$"
![[Pasted image 20241103104033.png]]
#todo idk how good this really is but i think it is pretty good :)
#todo Why do we specify IH for step 5. IG we are utilizing the IH, but I already realized that in step 4.... Just try to remember to do that, i suppose. 

Note: Remember NOT to assume the conclusion. Go from left to right! Utilize the induction hypothesis to get to the right side. 

i'd rather not worry about the last slides cuz it references a previous proof and that's aids.
0 < 1 eqv $1 \leq 1$ if universe is integers. Good to note that. 
a < b eqv $a + 1 \leq b$


a and not a = contradiction, not a tautology.... silly.

My dog barks at everyone he doesn't like. He is barking at you. That means he doesn't like you.
- This is an invalid argument. It is NOT true by modus ponens...


6. Which of the following is the negation of "Every tall person who jogs has brown hair."? Select ALL correct answers: 
(A) No tall people who jog have brown hair. 
(B) Every tall person who jogs does not have brown hair. 
(C) At least one person who jogs is not tall and does not have brown hair. 
(D) At least one person is tall, jogs, and does not have brown hair. 
(E) At least one person who jogs is tall and has brown hair.

The negation of the statement is $\exists x, T(x) \wedge J(x) \wedge \neg B(x)$
- This means that only C is correct. A is wrong since $\neg \forall x, (T(x) \wedge J(x)) \to B(x)$ implies there *exists* a person with those criteria, not there there is NONE.

$\neg \forall$ means NOT ALL. NOT `NO ONE`UGH,

Let C(x, y) stand for “x is a child of y”
- $\exists x, \neg \forall y, C(y, x)$
	- This means x is a parent of y. However, y represents "not everyone". So, not everyone is a child of someone. Or rather, Someone is not a parent of everyone. 

$\neg \exists$ = no one
$\neg \forall$ = someone. 

for a universe of discourse with just integers, y = x^2 implies y is a perfect square and 'x' is the square root. 

You indent when you take arbitrary.... i guess....


#todo 

$\forall x, Q(x) \to \forall y, P(y)$
is equivalent to 
$\forall x, \neg Q(x) \vee \forall y, P(y)$
since there is an imaginary bracket after the `forall` 





If we have a set that's like 
$A \cap B \neq \emptyset$
$\{ x | x \in A \wedge x \in B \} \neq \emptyset$ by definition of $\cap$
$\exists x, x\in A \wedge x\in B$ by definition of $\emptyset$

Likewise we can say 
$A \cup B = \emptyset$ 
$\{ x | x \in A \wedge x \in B \} = \emptyset$  by definition of $\cap$
$\neg \exists x, x \in A \wedge x \in B$ by definition of $\emptyset$
or
$\forall x, x \not \in A \vee x \not \in B$
#todo put this somewhere.
Same for def'n of subset $\subseteq$



When i ever use contrapositive in a proof, i explain the method i used at the top of the proof.


Let A and B be sets. Show that a) (A ∩ B) ⊆ A. b) A ⊆ (A ∪ B).
- Just use equivalence laws to show that (A ∩ B) ⊆ A is always true (i.e. a tautology)
- To show that a statement is true, you turn it into a tautology. 