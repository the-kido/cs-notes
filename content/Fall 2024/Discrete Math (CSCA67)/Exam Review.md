# Week 1 (where tutorial 1 is)

An argument is valid if the premises cannot be true without the conclusion being true as well. The conclusion being true is a necessary condition for the premises being true. Conclusion true --> Premises true

An argument is invalid if all premises are true but the conclusion is false. like an implication

The statements to english will be fun.

Truth tables!
- Remember to do the intermediate F or T between conjunctions/disjunctions/negations (and, or, nots)
- if two statements are logically equivalent, their tables will look the exact same.
P v Taut = True
P and Taut = P

antecedent vs consequent.
# Week 2
- 
R - raining
W = windy
S = shining
a) R --> (W and not S)
b) (W and not S) --> R
c) R --> (W and not S)
d) (W and not S) --> R
e) (S or not W) --> Not R
R --> not (S or not W)
R --> (W and not S)
f) R --> (W and not S) 
g) (W --> R) or (not S --> R)
not W or R or S or R
R or (not W or S)
converse of a.

Only c, e, f are eq

Rules of Inference work because the hypotheses and conclusion form an implication which is always a tautology. 
e.g. p --> (p V q) (this is addition)
not P or (p v q)
not p or p or q
Tautology or q
Tautology.
boomazinga

1. E --> F
2. not E --> S
3. S --> R
4. not F --> R
not F --> not E
not F --> S
not F --> R
doom

#### Variables and sets
Bound vs free variables
Bound variables can be replaced (dummy values)
- {x | x^2 < 25}. The x could totally be swapped out with anything. it's bounded by the { x | ... } notation. 
Free variables cannot be replaced
- in x^2 < 25, x is NOT bound

$2 \in \set{w | 6 \not \in \set{x | x \text{ divisible by w} }}$
- w and x are bounded.
- To evaluate it, just put 2 in and yeah
- $2 \in \set{2 | 6 \not \in \set{x | x \text{ divisible by 2} }}$
- $2 \in \set{\neg(2 | 6 \in \set{x | x \text{ divisible by 2} )}}$
- $2 \in \set{\neg(2 | 6 \in \set{6 | 6 \text{ divisible by 2} )}}$
- $2 \in \set{\neg(\text{tautology} }$
- $2 \in \set{false }$
or something like that... #todo how to evaluate sets. On piazza most likely.

REMEMBER that natural numbers include 0.


Truth set: the set of x values that make P(x) true.
The truth set of "x is real and $5 \in \{  y \in \mathbb{R} | x^2 + y^2 < 50 \}$"
- eqv to $ \{ x^2 + 5^2 < 50 \}$
- eqv to $ \{ |x| < 5 \}$
- {x | -5 < x < 5}


The truth set of arbitrary statements like P(x) can be discribed as "All elements x for which P(x) is true". In that case, we have
- $P(x) \wedge Q(x)$ has a truth set of "All elements x such that P(x) and Q(x) are true"
- other obvious examples

Intersection, union, difference,
$A \cup B = \{ x | x \in A \vee x \in B\}$
$A \cap B = \{ x | x \in A \wedge x \in B\}$
etc.

They did not do the forall x thing here cuz we didn't learn quantifiers at the time.
$A \setminus (A \cap B) \equiv x \in A \wedge \neg (x \in A \wedge x \in B)$
$\equiv \forall x x, \in \mathbb{N}$
#todo do I add the forall quantifier or nah?

#todo idk how to do the symmetric difference questions on the slides for week 3

disjoint = no shared elements.


Symmetric different
$A \triangle B = (A \setminus B) \cup (B \setminus A))$
- IDK if we *really* have to remember this but it's good to anyway.
- #todo try to re-remember this!.

![[Pasted image 20241205210951.png]]
- There is no equivalence for x not in A u B --> x not in A or x not in B. You gotta pull out the "not" first and then do your magic. 

$\neg \exists$ means no one. So $\neg \exists x, \forall y$ means for no x and for all y, 

# Week 3
![[Pasted image 20241204215602.png]]
- This question's answer is A because.... get this nonsense... T or H is also $\neg T \to H$ and then you use modus ponens. Bruh.
# Week 4
TT2
![[Pasted image 20241205103546.png]]
- Don't skimp out on the in-between steps for sets!

![[Pasted image 20241205103638.png]]
- After line 7 i shoulda had "let a = z^2", show that z is in the universe of discourse to then get x^2 = au^2 and existentially generalize the 'a' as 'z' instead. 

# Week 5
## Quantifiers
$A \subseteq B \equiv \forall x, x \in A \to x \in B$

"Nobody likes a sore loser".
- being unliked only happens if you're a sore loser, so S(x) --> neg L(x,y)

x and y are free, not bound

In "All solutions of the inequality x 3 − 3x < 3 are smaller than 10.", x is bounded (not free) since it has a quantifier attached to it. 

for all prime numbrs != 2, they are odd
All prime numbers that aren't 2 are odd.
There is a perfect number that, for all perfect numbrers, it is greater than or equal to.
There is a greatest perfect number

there is a parent of everyone. false
everyone is a parent of someone. false
everyone is not a child of everyone? false. Some people *do* have a children as someone. 
- there is not a person that is a child of another person. False still
There is a person who has no child. True
a person is not a parent of another person.  True

When negating exists to forall, make sure to turn things into implications. forall usually has implications!
- Opposite of forall is not all. NOT <span class="emphasis">NONE</span>

### uniqueness
Only 1 person likes lemonade
$\exists x, L(x,lemonade) \wedge \forall y, x \neq y \to \neg L(y, lemonade)$
- makes sure to make the objects not equal. or, 

If set A is empty, then $\forall x \in A, P(x)$ is <span class="emphasis">vacuously true</span> #todo note this down!!
Also, $\exists x \in A, P(x)$ is false. 

When given a definition, it's best to stick by it when answering questions. For instance,
>x is a prime number (Recall: a prime number is an integer greater than 1, that is not a product of two smaller positive integers).

The statement would be 
$x > 0 \wedge \neg \exists y, \exists z, y * z = x \wedge 0 < y < x \wedge 0 < z < x$
- something like that yeah..

# Week 6
- Counterexample
	- Instead of taking arbitrary, you can take numbers to show that you can derive the opposite of the statement. Usually worlds are easier though.
	- ![[Pasted image 20241204221329.png]]
- 
Proving direct with a buncha ands? do suppose's in the same level of indent.

Prove the contrapositive and then flip at the end via contrapositive law
So if you needa prove a --> b, assume not B and get not A. Then you flip and bazinga. 
- Make sure to use contrapositive especially when the thing you wanna prove as some extra juicy info that you may want to get.

Cases when you got a buncha 'ors'
A or B or C or D --> F
Easier to show that A-->F and B-->F and C-->F sometimes, yknow? 

You can also split things up like "forall x, x is even" into "forall x, (x < 0 or x = 0 or x > 0), x is even" and that would also be valid. It's just some bounded quantifier work. 

Contradiction
- say something, and if nonsense appears, it means it's definitely not true!
- not P --> balderdash = P is actually true

#todo Go over the sqrt 2 is irrational proof one more time
# Week 7


# Week 8
Induction!
If we know P(k) is true, and for all n >= k, P(n + 1) is also true, then we can say that forall n >= k, P(n) holds. i used the wrong bound variable names but you get the idea lol.

There are four steps:
- Letting things for use in proof (i.e. let P(n) be ...)
- Showing what we wanna prove ($\forall n \geq 18, P(n)$ holds)
- Showing the base case holds (P(18))
- Writing the induction step (the actual proof part)
	- This is where you prove that $\forall k \geq 18, P(k) \to P(k+1)$


When you utilize your induction hypothesis in your proof, label it as IH. Supposing P(k) is the induction hypothesis. 

For summation notation, the init is at the bottom and the number of iterations (inclusive!) is at the top.

Using previous proofs in new proofs

Pretend I want to show that, for all k >= 5, that $k^2 + 2k + 1 < 2^k + 2k + 1$ with the knowledge that I previously proved that $\forall n \geq 3, 2n < 2^n$ (or $\forall n, n \geq 3 \to 2n < 2^n$)
We can then use the fact that $k \geq 5 \geq 3$, so with universal modus ponens we get $2k < 2^n$ as true!


> You can use english in the P(n) definition. Make sure that you don't fumble it!

# Week 9

`Stronk`™️ induction

You don't always need to do k = 1, 2, 3, >= 4 kinda proofs. You can also split k into "k is prime" or "k is not prime" !

The IH is when you use U.M.P on a inequality to get P(k) for whatever i.

For the distinct question, splitting into even and odd makes things easier since you can multiply the IH by 2 and then add 1 to get all distinct exponents.

Make sure to show that a number is an integer before using it as a variable 

# Week 10
Counting!

If A is a set of 4 elements, the |A| = 4

If there is N_1 or N_2 ways to do something, and n ways in common, then the ways to do the task is N_1 + N_2 - n.

|A or B| = |A| + |B| + |A and B|

For circle questions, if there are 4 people and a circle and you choose `4*3*2*1` you'll notice it overcounts the equivalent 4 times

C(52, 5) means we choose 5 items from 52. They are NOT repeatable. They are unique. Order does not matter.

> When talking abt # of something where order matters, you can still use C(). for instance, the number of binary strings with 3 zero's will just be C(10, 3) since from the 10 items we choose which ways we can pull 3 zero's from.

# Week 11
- Experiment = one result in the set of possible outcomes.
- Sample space S is every possible experiment / outcome
- An event is a subset of the sample space S. 

Rolling a die and getting 1 is an experiment. Rolling a die and getting an even number is an event.

P(E) = |E| / |S|

Probability distribution.
- All numbers returnable by a probability distribution are between 0 and 1 probability. Also, the sum of all probabilities in the distribution equals 1 as well. 'x' is an element of the set S




#todo The P(E|F) notation (conditional / depended events)
- It reads P(E, assuming F is already true) = $\frac{P(E \cap F) }{P(F)}$
> What is the probability of rolling a sum 10 given we know at least 1 once dice has already rolled a 5? Let E be "roll a sum 10" and F be "roll at least once dice that is a 5"
> |F| = 11 (count it!)
> |E| = 6 (count it!)
> |$F \cap E|$ = 1 (just 5,5)
> P(E | 5 rolled) = $\frac{P( \text{sum 10 and 5 rolled})}{P(\text{5 rolled} )}$
> P(sum 10 and 5 rolled) = 1/36
> P(once dice is 5) = 11/36
> P(E | 5 rolled) = 11/36 


For independent events, there is $P(E \cap F) = P(E) \cdot P(F)$ for E and F independent events (they do not depend on each other!)
It comes from the P(E|F) notation except since E and F are not dependent, P(E|F) is equivalent to P(E) since F is irrelevant for E to be true. (like flipping a coin and drawing a card)

> Flip a coin and draw a card. Suppose E is the event that a coin comes up heads and F is the event that the card is an Ace. 
> 1. How do we know E and F are independent?
> Well if P(E|F) = P(E) then we know F is irrelevant! 
> P(E|F) = P(E and F)  / P(F)
>|E and F| = 4 ways (H and ace x4 suits)
>|S| = 102 (2 \* 52)
>P(E and F) = 1/26
>P(F) = 1/13
>P(E|F) = 1/2 = P(E) !
>Therefore E and F are NOT independent.
> 
> 1. What is the chance?!
> $P(E \cap F) = P(E) \cdot P(F)$
> P(E) = 1/2
> P(F) = 1/13
> so it's 1/26

5 + 7 = 12 total steps required to get to the end. No less, no more.
UUUUURRRRRRR <-- Any arrangement of this will work. It's a simple indistinguishable question. 

$|S| = 2^4$
$|E| = 2^3$ 
$P(E) = 1/2$
|F| = any string that has 0, 2, or 4 1's. That is, $(4, 0) + C(4, 2) + C(4, 4) = 8$
P(F) =1/2
|E and F| = |{1100, 1010, 1001, 1111}| = 4
P(E|F) = P(E and F) / P(F)
= 1/4 * 1/2 = 1/2
So P(E|F) = P(F) 
Wow that was not expected. They are actually independent!


# Week 12
Stars and bars
You can think of the 1, 2, 5, 10, 20, 50, 100 question with stars and bars. You can arrange the stars and bars in some way like `**|*|||*||**` to see how many of each bill you need. The stars are indistinguishable, and so are the bars.

n = 7 and r = 5
If we're taking 5 bills, there are 5 stars and 7-1=6 bars. In total we have 11 items and 5! and 6! to remove duplicates. Wow, this question is easy now!
`11! / (5!*6!)`

Given 4 flavours of donuts at Tim Hortons, in how many ways can you select a dozen donuts?
- There are 12 donuts but 4 flavours. You can *repeat* choices of flavours althought the order of the donuts does not matter. That would give us C(15,12) or C(15,3) 
# Questions
Question 10 of the exam prep has a type apparently.

#todo go over when to use IH. What does it mean?


https://cdn.discordapp.com/attachments/1252403409492119684/1314297478878593094/image.png?ex=67534269&is=6751f0e9&hm=c9165b8aa0560ebe7c2e1d745877a52d67285ba00d6809afe7da187fef377b5b& #todo Do this.


## Assignments

1. everyone is a child of someone
2. someone is a child of no one
	1. No one is a parent of someone
3. If for no person x is a child of everyone y, then there exists a person z such that z is a child of y.
	1. No one exists that, if they are a child of everyone, then there is another person that is a child of their parent. 

all numbers that aren't prime have a factor it is smaller than. False
all prime numbers don't have a prime number that, if added, is also prime.
- 2 + 5 = 7. false!

$\forall x,  D(x) \to (\exists y, S(y) \wedge H(x, y))$
- goo

$\exists x, C(x) \wedge A(x) \wedge (\exists y, B(y) \wedge E(x, y))$
- g

$\forall x, S(x) \to (\neg \exists y, H(x,y))$
- 
$\forall x, (C(x) \wedge L(x)) \to (\neg \exists y, (B(y) \wedge H(x,y)) \to \neg E(x,y))$
- 
$\exists x, S(x) \wedge H(M, x) \wedge (\neg \exists y, C(y) \wedge H(M, y))$ 


3.c
- $\exists x, \exists y, C(x,y)$
- \forall x, \forall y, C(x,y) \to \exists z, W(x,y) 
	- For any person who committed any crime, there is a witness of that crime.
- $\forall x, \forall y, T(x,y) \to W(x,y)$
- $\forall x, \forall y, T(x,y) \to \exists z, C(x,y) \wedge J(x)$
	- 
- $\exists x, J(x)$


If you have $\exists x, \forall y, P(x,y)$
you can do
```
forall y, P(c,y) for some c
P(c,c) (with universal instantiation, using the above c.)
You can do that because c is "some c" but we then assume it works on "all" things including c... i guess
```

you can either prove bicond with eqv eqv eqv, or -> and <- proof.
