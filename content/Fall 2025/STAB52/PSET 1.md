# Q1
i) S = {1, 2, 3, 4, 5, 6}
ii) S = pairs of the two dice
like (1,1), (1,2), etc.


# Q2
i) $A \cap B$
ii) $A \cup B$
iii) $(A \cup B)^c$
iv) $A \cap B^c$
v) $(A \cap B^c) \cup (A^c \cap B)$

# Q3
To recall, the probability axioms (there are 3) are:
1. $0 \leq P(X), \forall X \subseteq S$
	1. all event probabilities can't be negative
2. $P(S) = 1$
	1. This implies that all probabilities are $\leq 1$ too, since no subset of $S$ is larger than $S$
3. $\sum{i=0} P(A_i) = 1, \forall\text{ disjoint event} A_i$ 

a) 
$P(A) = P(A-B) + P(A \cap B)$
$P(A) = P(A \cap B^c) + P(A \cap B)$
$P(A) = P(A - B) + P(A \cap B)$
$\implies$
$P(A-B) = P(A) - P(A \cap B)$

b)
$P(A \triangle B) = P(A - B) + P(B-A)$
$= P(A \cap B^c) + P(B \cap A^c)$
$= P(A) - P(A \cap B) + P(B) - P(B \cap A)$
$= P(A) + P(B) - 2(A\cap B)$

$P(A) = P(A \cap B^c) + P(A \cap B)$ 

#todo add more justification?

# Q4
a) $F = A \cap B^c \cap C^c$
b) $G = A \cap B \cap C^C$
c) 
$P(A \cap B) = P(A \cap B \cap C^C) + P(A \cap B \cap C)$
$P(B \cap C) = P(A^C \cap B \cap C) + P( A \cap B \cap C )$
$P(A \cap C) = P(A \cap B^C\cap C  ) + P(A \cap B \cap C )$

#todo idk abt this one....


# Q5
i) P(watched only gymnastics) = G - G cap B - G cap S + S cap B
= 28 - 14 - 10 + 12 = 16

ii) 1 - P(G or B or S)
= 1 - (P(G) + P(B) + P(S) - P(G cap B) - P(B cap S) - P(G cap S) + P(G cap B cap S) )
=1 - (.28 + .29 + .19 - .14 - .12 - .10 + .08)
= 0.52

# Q6
a) Each $n$ players verses $n-1$ players. But two players won't verse each other again, so we exclude that possibility
so that would be $\frac{n\cdot (n-1)} 2$ games in total. 

b) 
- For each game, there are 2 outcomes
- The games are independent, so we use multiplication rule:
- $2^{\frac{n(n-1)}{2}}$

#todo i didn't get the answer for this immediately. oof.


# Q7
a) $n$ rounds
b) $\sum_{i=0}^{n-1} 2^i$ total games
$\frac{1-2^{n}}{1-2}$
$=-1+2^n$

c) 
There are $2^n$ players to start with. We want $1$ player left.
Each match knocks out $1$ player
Means we must remove $2^{n}-1$ players overall.
Which means that's the # of matches we play.... #todo it doesn't make sense to me

d) 

I missed a key detail: These godlike players will beat *everyone* they verse.
The top and bottom halves are whittled down to 1 player each before that final match.
The question is asking for the chance that the two players get on either "halve"
8 choose 4 * 4 choose 1 type deal? Apparently not 
There are $2^n$ spots in total. There are $2^{n-1}$ spots the first player can go (for the first half)
the second player can go anywhere else. So there are $2^{n-1}$ ways to get this desired pattern.
There are $2^n-1$ available spots in general (excluding the spot for the first best player)
#todo again, very aids. Maybe i'll understand it when i come back to it 


# Q8
a) 
There are 3 undiscernible teams.
Order doesn't matter. These are combinations, not permutations. 
1 time has 2 people. So from the pool of 12 people, we choose 2. 
Then from the pool of 10, we choose 5. again
That gives $\frac{12!}{2!5!5!} \cdot \frac 1 {2!}$
With the binomial notation, it's ${12 \choose {2,  5, 5}} \cdot \frac 1 {2!}$

b) 
${12 \choose {4, 4,4}} \cdot \frac {1} {3!}$
because we are choosing the teams in a certain order (first team, second team, third team) but we should be choosing these teams at random! So we need to remove the extra counts for the reordering of the teams (i.e. second team, first team, third team permutation) and we do that with division.



# Q9
a) There are $6^{10}$ total rolls possible
We need the # of ways to get exactly 2 6's. 
It's similar to $5 \cdot 5 \cdot 5 \cdot \dots \cdot 5 \cdot 1 \cdot 1$ 
There are 5 ways for the regular dice to roll, and 1 way for the dice of "6" to roll.
Order of dice roll doesn't matter, so we multiply by the *ways* or places the "6" dice can go. Of the 10 spots, we choose 2 
So it should be $\frac{5^8}{6^{10}} \cdot {10 \choose 2}$

#todo just go over this one again if i have time



b) at least 2 means 2 or more. Means not 1 or 0
P(at least 2 6) = 1 - P(at most 1 6) 
= 1 - (P(0 6's) + P(1 6))
So that's easy enough:
$P(0\ 6's) = \frac{5^{10}}{6^{10}}$
$P(1\ 6's) = \frac{5^9}{6^{10}} \cdot 10$
$=0.515483251$
Okay i go it. yay!


# Q10
Each ball has 2 options. It can go in 1 or the other box
So $2$ options for the first ball, times $2$ options for the second
So it's literally $2^4$

# Q11
There are 2 places the balls can go. These places are indistinguishable, so we divide by $2$ to remove all the permutations that are just "flipped" 
$2^3$
# Q12
alright buddy.
There can be (0,4), (1,3), (2,2), (3,1), (4,0) total combos.
Nothing else lol. Just 5. 

# Q13
Ah i accidentally answered this question before.
You can have (0,4), (1,3), (2,2) balls. The rest are just duplicates
3 total combos

# Q14
a) from the 15 girls, choose 1, and from the 10 boys, choose 1
so thats 150 total pairs. 

b) 
15 choose 2 * 10 choose 1 

c) 
We are not choosing 2 girls, then 1 boy. We are choosing 3 people, 2 of which are girls, 1 is a boy, but the orders matter. So we need to introduce the permutation factor
${15 \choose 2} * {10 \choose 1} * 3!$
The $3!$ molds the unordered into the ordered


# Q15
nope

# Q16 
yep!

We know that $P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0.6$ by inclusion/exclusion (we don't know if A, B are disjoint)
Isolating for $P(B)$ we get $P(B) = 0.6 - P(A) + P(A \cap B)$
Also
$P(A \cup B^c) = P(A) + P(B^c) - P(A \cap B^c)$
$= P(A) + 1 - P(B) - P(A \cap B^c) = 0.8$
$= P(A) + 1 - 0.6 + P(A) - P(A\cap B) - P(A\cap B^c) = 0.8$

$\implies 2P(A) = 0.4 + P(A\cap B) + P(A \cap B^c)$
$\implies 2P(A) = 0.4 + P(A)$  by law of total probability 
$\implies P(A) = 0.4$

# Q17
E = (A and B and not C) or (A and not B and C) or (not A and B and C)

# Q18
a)
P(sum >= 7) \cdot P(two nums are at least 2 apart)

12/36 (by chart)

b) 
A could be "first number is 1 or 2"
B is "first number is 3"
yep that works

# Q19
All numbers *given* are greater than 0, which is good.
Clearly there's an issue with $A\cup B$
We can play around with some formulas:
$P(A \cup B) = P(A) + P(B) - P(A \cap B)$
$\implies 0.8 = 0.3 + 0.4 - P(A\cap B)$
$\implies -0.1 = P(A\cap B)$ which is WRONG

# Q20
$P(A \cup C) = P(A) + P(C) - P(A \cap C) 
$P(A \cap C) = 0.3 + 0.5 - 0.65 = 0.15$

$P(A \cap B^c) = 0.25$ by magic

lastly, $P(A \cap B^c \cap C)$
$P(A \cap C) = P(A \cap C \cap B) + P(A \cap C \cap B^c)$
$\implies 0.15 - 0.1 = P(A \cap B \cap B^c) = 0.05$ 

$P((A \cup B^c) \cap C)$
$=P((A \cap C) \cup (C \cap B^c))$
$=P(A \cap C) + P(C \cap B^c) - P(A \cap C \cap C \cap B^c)$
$= 0.15 + 0.25 - 0.05 = 0.35$

yay!