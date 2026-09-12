
### Conditional Probability
The probability of an event happening when some fact is already known about said event.
This will always *improve* the chance of an event. If the chance of flipping heads twice is 0.25, but we already flipped heads once, then the chance to get the next head, given we had the first one, would be 0.5, not 0.25!

$$P(A|B)$$
- Reads as "The probability of A, given B" 
Calculated via $$P(A|B) = \frac{P(A \cap B)}{P(B)}, \text{ given that } P(B) > 0$$
The above is because conditioning on an event B *restricts* the sample space to B.
As such, you can think of regular probabilities as conditional on S
So $P(A) = P(A|S) = \frac{P(A \cap S)}{P(S)}$! 

The same probability axioms hold for conditional probabilities (why was this explicitly mentioned in the slides? #todo)

![[Conditional Probability Example Slide 6.png]]
- P(A|B) = 5/11
- P(B|A) = 5/16 
- #todo confirm

Example on slide 7:
- Since $A \subseteq B$ , $P(A \cap B) = P(A)$
- So $P(A | B) = \frac{P(A)}{P(B)}$
When A, B are disjoint, $A \cap B = \emptyset$
$P(A | B) = 0$

<span class="emphasis">Law of Total Probability</span>
We know that for a partition $A_1, A_2, \dots$
$P(B) = P(B \cap A_1) + P(B \cap A_2) + \dots$
But we can also utilize the fact that $P(B \cap A) = P(B | A) \cdot P(A)$ 
to get
$P(B) = P(B | A_1)P(A_1) + P(B | A_2)P(A_2) + \dots$

### Bayes's rule
$P(A | B) = \frac{P(B | A) \cdot P(A)}{P(B)}$

#### Slide 12 example
The probability of you testing positive if you *do* have HB is .96 (pretty accurate! But some people might get negative. Tragic)
The probability of testing negative when you are healthy (no HB) is 98%
The *unconditional* probability of having HB is 2% as given (might or might not be tested)

Note: $P(+ | HB^C) = 1 - P(+^c | HB^c)$  via complement rule.

The unconditional probability of testing positive is different:
$P(+) = P(+ \cap HB) + P(+ \cap HB^c)$ (via LoTP)
$=P(+|HB)\cdot P(HB) + P(+ | HB^C) \cdot P(HB^C)$
$=0.96 \cdot 0.2 + (1 - 0.98)\cdot(1-0.02)$
$\approx 0.04$

Now, find $P(HB | +)$ 
- Reads as the *real* chance of having HB if you tested positive
- Different from the chance of testing positive if you have HB. If you really do have HB, testing positive is likely. But if you tested positive through the screening, it's not always certain if you have HB or not
$P(HB | +) = \frac{P(+|HB) \cdot P(HB)}{P(+)} = \frac{0.96 \cdot 0.02}{0.04} = 50\%$
- Uses Bayes's rule
- Since there's a 4% chance you could test positive for no reason, that hurts the true validity of the positive testing.

Remember independent != Disjoint

#### Pairwise independent
$P(A_i \cap A_j) = P(A_i)P(A_j), \forall i,j$
- Basically, between events $A_i, \dots, A_j$, each *pair* is mutually independent (in that the union of the event's probability is the same as the individual ones multiplied), but anything more than a pair isn't necessarily mutually independent


# Rough answers for Quiz 2
a) P(Email on Thursday) = P(Thursday \cap Accepted) + P(Thursday \cap Rejected)
Note acceptance or rejection are mutually exclusive. Also note we have that P(Accepted) = 0.65, so P(Rejected) = 1 - 0.65 = 0.35
Then P(Email on Thursday) = P(Thursday|Accepted)P(Accepted) + P(Thursday|Rejected)P(Rejected)
$= 0.35 \cdot 0.65 + 0.3 \cdot 0.35$
$=0.3325$

b) $P(\text{Email on Thursday} | \text{Email on Wednesday}^C)$
$= \frac{P(Email on Thursday  \cap Email on Wednesday^C  )}{P(Email on Wednesday)}$
- If we do get an email on wednesday, then it's impossible to get it on thursday. If we get an email on Thursday, that implies we got nothing on wednesday.
- Therefore $P(Email on Thursday \cap Email on Wednesday^C) = P(Email on Thursday)$
Now, P(Email on Wednesday) = P(Wednesday|Accepted)P(Accepted) + P(Wednesday|Rejected)P(Rejected)
$= 0.45 \cdot 0.65 + 0.3 \cdot 0.35 = 0.3975$
So $P(\text{Email on Wednesday}^c) = 1 - 0.3975 = 0.6025$
and $P(Email on Thursday | Email on Wednesday = \frac{0.3325}{0.6025}) = 0.5518$


c)
For succinctness when I refer to a day like W, T, F, I am refering to the event of getting an email on those days (W = email on wednesday. T = email on thursday. F = email on friday)

Note $WedsE^C \cup ThursE^c$  implies $FriE$ since if there's no email on Weds or Thurs, it's got to be Fri. 
$P(FriE | WedsE^c \cap ThursE^c) = \frac{P(F \cap (W^c \cap T^c))}{P( W^c \cap T^c )}$
$=\frac{P(F)}{P(F)}$
$= 1$


d) 
Let A = Accepted and R = Rejected
$P(A|F) = \frac{P(F|A) \cdot P(A)}{P(F)}$ via Bayes' rule
$P(F) = P(F|A) \cdot P(A) + P(F|R)\cdot P(R)$
$=0.2 \cdot 0.65 + 0.4 \cdot 0.35 = 0.27$

So $P(A|F) = \frac{0.2 \cdot 0.65}{0.27} = 0.4815$



2.
a) 
To show that A and B are independent, we show that $P(A \cap B) = P(A) \cdot P(B)$
$P(A) = P(A|C)\cdot P(C) + P(A|C^c) \cdot P(C^c)$
$=0.3 \cdot 0.15 + 0.6 \cdot  (1 - 0.15) = 0.555$
$P(B) = P(B|C)\cdot P(C) + P(B|C^c) \cdot P(C^c)$
$=0.2 \cdot 0.15 + 0.4 \cdot (1 - 0.15) = 0.37$
So $P(A) \cdot P(B) = 0.21$

Then $P(A \cap B) = P(A \cap B | C) \cdot P(C) + P(A \cap B | C^c) \cdot P(C^c)$
$=P(A|C)P(B|C)P(C) + P(A|C^c)P(B|C^c)P(C^c)$
$=0.3 \cdot 0.2 \cdot 0.15 + 0.6 \cdot 0.4 \cdot (1-0.15)$
$=0.213$

Close, but not exactly the same. A and B are not unconditionally independent


b)
$P(A \cup B^c|C) = 1-  P((A \cup B^c)^c|C)$ by complement rule
$1= P(A^c \cap B|C)$
since A and B are conditionally independent, $A^c$ and $B$ are also conditionally independent. 
So $P(A^c \cap B|C) = P(A^c|C) \cdot P(B|C)$
$=(1 - P(A|C)) \cdot 0.2$
$=0.7 \cdot 0.2 = 0.14$

So 
$P(A \cup B^c|C) = 1-  P((A \cup B^c)^c|C)$
$=1 - 0.14$
$=0.86$
