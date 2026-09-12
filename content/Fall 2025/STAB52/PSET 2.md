# Q1

Oh they did events like LC = {lung cancer} and S = {smoker}

P(smoke) = 0.216%
$P(LC|S) = 23P(LC | S^c)$

Remember that $P(B) = P(A \cap B) + P(A \cap B^c) = P(A|B)P(B) + P(A|B^c)P(B^c)$ (this is how you derive the "basic" version of Bayes rule)

We know $S = S \cap S^c$ so they are partitions. We use the partitioned formula for Bayes' rule. 
We want $P(S|LC) = \frac{P(LC|S) \cdot P(S) }{ P(LC)  }$
$P(LC) = P(LC \cap S) + P(LC \cap S^c)$
$= P(LC|S)P(S) + P(LC|S^c)P(S^c)$
$= 23 \cdot P(LC|S^c)\cdot 0.216 + P(LC|S^c)\cdot 0.784$
$= P(LC|S^c)(23 \cdot 0.216 + 0.784)$

So $P(S|LC) = \frac{23 \cdot P(LC|S^c)\cdot P(S) }{P(LC|S^c)(23 \cdot 0.216 + 0.784)}$
$= \frac{23 \cdot 0.216}{23 \cdot 0.216 + 0.784}$
$=0.863699582754$

NICE I DID IT

# Q2
a) There are 6 surfaces in total. 3 of which are red, right?
So it's just $P(R) = 3/6 = 1/2$
I mean that was the answer, but the way they did it was crazy different.
Should be the same with $P(B) = 1/2$

R = Side is red
RR = Sides are both red
B = side is balck
BB = side is both black
RB = side is both red and black

THEN, with Bayes rule. We use the partition $RR$ , $BB$, and $RB$ 
$P(RR|R) =  \frac{ P(R|RR) \cdot P(RR) }{P(R | RR) + P(R|RB)P(RB) + P(R|BB)P(BB)}$
$= \frac{ 1 \cdot \frac{1}{3}}{\frac {1}{3} + \frac {1}{2} \frac {1}{3} + 0}$
$=\frac 2 3$

I *mostly* got this one. I just need to remember that bayes rule uses partitions

# Q3
a) 
A. isnt because of the A, B combo
B. isnt because of B, C combo
C. isnt because of B, D combo
some of the events "concert overlapping flips" so they cannot be mutually exclusive.

b)
C. is since all the events are mutually independent. 



# Q4
a) 
Let A = All spades and B = at least 4 spades
We know $A\cap B = A$ since $B \subseteq A$

P(all 5 spades | at least 4 are spades)
The ways for 4 spades is ${13 \choose 4} \cdot {39 \choose 1}$ over 52 choose 5
The ways for 5 spades is just ${39 \choose 5}$ over 52 choose 5

$P(A | B) = \frac{P(A \cap B)}{P(B)}$ 
$= P(A) / P(B) = \frac{{13 \choose 4} \cdot {39 \choose 1}}{{39 \choose 5}}$ (since the 52 choose 5 gets canceled)
which is "some number"

#todo I should defo review this one

b)

yeah idk about this one chief


# Q5
An actually practical question, hm.
For the partition of the "coin" space, it's either a good coin or bad coin

P(heads) = 1/2
P(bad coin) is 1/100 per flip.
P( 7 heads ) = 1 / 2^7

We dont have the chance of bad coin *and* heads, so let's use bayes' formula
$P(bad coin | 7 heads) = \frac{ P(7 heads | bad coin) P(bad coin) }{ P(7 heads | bad coin)P(bad coin) + P(7 heads | good coin) P(good coin) }$
$\frac{1 \cdot \frac{1}{100}}{1 \cdot \frac {1}{100} + \frac{1}{2^7} \cdot \frac{99}{100}}$

#todo I did 1/2 for "good coin" chance when it should've been 99/100. I also should've known to use bayes. I also need to remember the "partitions" that I can use. 

# Q6
a) 
P(recieve 1 | send 0) = 5%
P(recieve 0 | send 1) = 10%
P(R1|S1) = 90%  i'm pretty sure
P(R0|S0) = 95%

$P(S1|R1) = \frac{P(R1|S1)P(S1)}{P(R1|S0)P(S0) + P(R1|S1)P(S1) }$
$= \frac{0.9 \cdot 0.5}{0.05 \cdot 0.5 + 0.90 \cdot 0.5}$
$=0.947368421053$


b)
They say: P(R100|S1) = P(R1|S1) x P(R1|S1) x P(R0|S1)
so you use that to find
P(S1|R110) 
holy it's ugly though. im gonna ignore it for now. #todo 


# Q7
#todo An interesting question for sure. It's "weird" though and certainly not test material

# Q8
To show dependence, i show *not* independence.

Means P(A \cap B) != P(A)P(B)

$P(A) = 1/2 \cdot 1/6 + 1/2 \cdot (2/6) = 1/4$
$= P(B)$ (the chance of choosing either die is the same!)

$P(A_1 \cap A_2) =$  There isn't an easy way to know this event... we have to pull out other facts somehow
Let B = { chose biased die}

Then $P(A_1 \cap A_2) = P(A_1 \cap A_2|B

b)
Conditional independence is when
$P(A \cap B | C) = P(A | C) \cdot P(B |C)$

# Q9

nah

# Q10
$P(A)P(B)P(C) = P(A \cap B \cap C)$ we know this

We want to show that $P(A^c)P(B^c)P(C^c) = P(A^c \cap B^c \cap C^c)$
$P(A^c)P(B^c)P(C^c) = (1-P(A))(1-P(B))(1-P(C))$
$=(1 - P(B) - P(A) + P(A)P(B))(1 - P(C))$
$=1 - P(C) - P(B) + P(B)P(C) - P(A) + P(A)P(C) + P(A)P(B) - P(A)P(B)P(C)$
$=1 - P(C) - P(B) + P(B \cap C) - P(A) + P(A \cap C) + P(A \cap B) - P(A \cap B \cap C)$ (by mutual independence, and therefore pairwise independence, too)
$1 - (P(A) + P(B) + P(C) - P(A \cap B) - P(B \cap C) - P(A \cap C) + P(A \cap B \cap C)$
$=1 - P(A \cup B \cup C)$
$= P(A^C \cap B^c \cap C)$
as required!

Wait but we are not done yet. We need to show each *sub-combo* i guess, also holds.
So we need to show that $P(A^c)P(B^c) = P(A^c \cap B^c)$
We know $P(A^c \cap B^c) = P(A^c) + P(B^c) - P(A^c \cup B^c)$
$= 1 - P(A) + 1 - P(B) - (1 - P(A \cap B))$
$= 1 - P(A) - P(B) + P(A)P(B)$
$= P(B^c) - P(A)(1 - P(B))$
$= P(B^c) - P(A)P(B^c)$
$=P(B^c)( 1 - P(A))$
$=P(A^c)P(B^c)$
and that goes for the other 2 combos, too.


# Q11
Remember that $P(A|B,C) = P(A | B \cap C)$

Independence: $P(A \cap B) = P(A)P(B)$
Cond. Indep: $P(A \cap B | X) = P(A | X)P(B | X)$
You can have cond indep and *not* mutual indep?



$P(A | B \cap C) = \frac{P(A \cap B \cap C)}{P(B \cap C)}$
$=\frac{P(A|C)P(B|C)P(C)}{P(B|C)P(C)}$
$=P(A|C)$

$P(A |C) = \frac{P(A \cap C)}{P(C)}$
$=\frac{P(A|C)P(C)}{P(C)}$
$=P(A|C)$

$P(A \cap C) = P(A|C)P(C)$ 
$P(A \cap B \cap C) = P(A \cap B|C)P(C)$
$=P(A|C)P(B|C)P(C)$

yeppers i got it


# Q12

T_1 = + in Test 1
T_2 = + in Test 2
Partition: $T_1 \cap T_2, T_1 \cap T_2^c, T_1^c \cap T_2^c$
That's 3 thingys
But oh ho -- alas! We are not partitioning those events at all! We do $HB$ and $HB^c$ instead

$P(HB | T_1 \cap T_2) = \frac{ P(T_1 \cap T_2 | HB)P(HB) }{P(T_1 \cap T_2|HB)P(HB) + P(T_1 \cap T_2|P(HB^c)P(HB^c)}$ 
$= \frac{ P(+|HB)^2 \cdot 0.02  }{ P(+|HB)^2\cdot 0.02 + P(+|HB^c)^2 \cdot (0.98) }$ (using fact that $T_1, T_2$ are cond. indep)
$= \frac{ 0.96^2 \cdot 0.02  }{ 0.96^2\cdot 0.02 + 0.02^2 \cdot (0.98) }$
$=0.979175520612$
(Using fact that) $P(+|HB^c) = 1 - P(-|HB^c) = 0.02$
Nice i got it 😎



# Q13
i) There is a 1/5 chance for any coin to be chosen
P(ith coin chosen) = 1/5
P(heads | ith coin chosen) = p_i

$P(ith coin was selected|Heads) = \frac{P(heads | ith coin chosen)P(ith coin chosen) }{1/5 *  1/4 + 1/5 *  1/2 + 1/5 *  3/4 + 1/5 *  1}$
$=\frac{p_i \cdot 0.2}{0.5}$
$=p_i \cdot 0.4$ i guess?
Yeah i went a bit extra lol. But yes I was right. Yippee


ii)
weirdly phrased. "What is the probability of getting a heads, given you got a heads" implying you're flipping the same coin.
$P(H_1) = (0 + 0.25 + 0.5 + 0.75 + 1 ) / 5 = 0.5$ 
- Okay, the chance for the *first* heads is always this. The ones after are dependent on H_1 though 

$P(H_2 | H_1) = \frac{P(H_1 \cap H_2)}{P(H_1)}$
We lack info, but we do know $A_i$ so we can introduce it via law of total probability (since A has A_i as its partitions -- 5 of them)
$= \frac{ \sum_{i=0}^5 P(H_1 \cap H_2 \cap A_i) }{0.5}$
$2\sum P(H_1 \cap H_2 | A_i)P(A_i)$  by reordering of conditional prob defn
$= 2\sum P(H_1|A_i)P(H_2|A_i)P(A_i)$ because H1 and H2 are conditionally indepedent (if they're the same coin, then they'll have the same probability)
$= 2 \sum P(H_1|A_i)^2 P(A_i)$
$= 2  (1/16 + 1/4 + 9/16 + 1) * 0.2  = 0.75$


no way i'm doing iii)


# Q14
There is not a 50% chance all coins land the same way. That would instead be 25%, not 50%

# Q15
seems easy enough

# Q16
a) 
P(A)P(B^c)P(C)
= 0.3 * 0.6 * 0.5

b)
$P(A \cap B^c \cap C)$
$= P(B^c \cap C | A)P(A)$
$=P(B^c|A)P(C|A)P(A)$
$=(1-P(B|A))P(C|A)P(A)$ (conditional on A, so we multiply by P(A), not P(C) silly)
$= (1 - 0.3)(0.3)(0.3)$ 
which is right 

c)
$P(B | A \cap C) = \frac{P(A \cap B \cap C)}{\cancel{P(A \cap C)}} \implies P(A \cap B \cap C) =  0.3 \cdot 0.3 \cdot 0.5$
$P(A \cap C) = P(A \cap C \cap B) + P(A \cap C \cap B^c)$
$\implies P(A)P(C) = 0.045 + P(A \cap C \cap B^c)$
$\implies P(A \cap C \cap B^c) = 0.105$


d) 
$P(A|B^c) = \frac{ P(B^c|A)P(A)}{P(B^c)}$ (simple bayes rule)
$= \frac{(1 - 0.2)(0.3)}{1 - 0.4}$
$\frac{0.24}{0.6}$
$=0.4$

e)
Bayes rule
We have:
 $P(C|B) = P(C \cap B)/P(B) = 0.4$
- $P(B \cap C) = 0.4 * 0.4 = 0.16$
$P(A|C) = P(A \cap C)/P(C) = 0.2$
$\implies P(A \cap C) = 0.2 *  0.5 = 0.1$
$P(A | B,C) =  P(A \cap B \cap C)/P(B \cap C)$
$\implies P(A \cap B \cap C) = 0.3 * 0.16 = 0.048 $

Need: $P(A \cap B^c \cap C)P(B^c \cap C)$

$P(A \cap C) = P(A \cap C \cap B) + P(A \cap C \cap B^c)$
$\implies 0.1 - 0.048 = P(A \cap C \cap B^c) = 0.052$

Now we need $P(B^c \cap C)$
$= P(B^c | C)P(C)$
$(1 - P(B|C))P(C) = 1 - \frac{P(B \cap C)}{P(C)} = 1-  \frac{0.16}{0.5} = 0.68 \cdot 0.5$

Finally, $P(A \cap B^c \cap C)/P(B^c \cap c) = 0.052 / 0.34 = 0.152941176471$

HOLY MOLY. I did the wrong calculation for the conditional probabilities and it messed me over completely. let's not do that next time. Okay good

# Q17

nah im not doing these. Ill do if i have time

