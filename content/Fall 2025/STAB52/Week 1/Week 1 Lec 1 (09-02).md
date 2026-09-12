Basic models = use discrete values

Technically you could deterministically model "uncertain" events (like die roll) but we don't have infinite accuracy... yet.

There are things like in physics that are proper random though.

numbers [0, 1] are probabilities. Not arbitrarily chosen; numbers 0 to 1 multiplied will still be 0 to 1

PoP = precipitation

Worry about cognitive bias (we are bad at intuitively thinking about chance)

<span class="definition">Random Experiment</span>

<span class="definition">Outcome</span>
- Elementary = cannot be broken down.
	- e.g. rolling an even number is a set of 3 possible outcomes (2, 4, 6)
	- #todo if the sample space is simply "even" and "odd", then would "even" as an outcome be valid? OR is the sample space itself not defined properly (i.e. the set should be 1,2,3,4,5,6)

<span class="definition">Sample Space</span>
- All possible outcomes

<span class="definition">Event</span>
- A sub-set of outcomes
- So rolling an even number is an event.
- $A=\{2, 4, 6\}=\text{"Rolling an even number"}$

"Probabilities are assigned to events"
- You are trying to find the probability of an "event" or specifically a subset of the outcomes


#### Set Theory

#todo There is a TB handout thingy with all the math stuff you needa know for the course

(not all items have to be distinct even though by def'n sets should have distinct items)

$A=\set{1,2, 3} = \set{n \in \mathbb{N} : 1 \leq n \leq 3}=\text{"Roll less than 3"}$

Sets are *unordered*
- $\set{a_1, a_2} = \set{a_2, a_1}$
- (tuples are though)

<span class="definition">Universal Set (S)</span>
- Contains all elements (same as sample set)

<span class="definition">Null / Empty Set</span>
- $\emptyset$
welp
Anyway $\set{\set{}}$ is not null cuz it's a set of the null set

#### Example
First, what be the sample space?
Since order doesn't matter, the set was made of 9 sets (we use sets cuz ORDER DOESN'T MATTER)
$\set{M, F} = \set{F, M}$

But what if order *did* matter?

<span class="definition">Tuple</span>
- An ordered collection of items
- $(M, F) \neq (F, M)$
- In the situation where order does matter, the set $\set{M, F}$ cannot be an outcome because it can be broken down into $(M, F)$ and $(F, M)$


### Sets n stuff
Set operations go crazy
Union/intersection are commutative, associative, distributive (with $\cup$ and $\cap$)

#### Complement
<span class="definition">Complement</span> The negation.
- All items *not* in the set
- $A \cup A^c = S$
- $A \cap A^c = \emptyset$
- $S^c = \emptyset$

De Morgan's laws apply to these (LOL WHAT)
- $(A \cap B)^c = A^c \cup B^c$

#todo Note on those and/ors that go on infinitely

#### Event "Relations"
- $A \subseteq B$ if every element in A is also in B
	- In TB if you see $\subset$ they prolly mean $\subseteq$
- Sets with no common items is *disjoint* or *mutually exclusive*

<span class="definition">Partition</span>
- If two or more events disjoint & union-ed overlap the *entire* sample space, they are partitions.
#todo is it trivial to say that $A$ and $A^c$ form a partition of S?

#### Probability! 
- Remember you should be able to assign a probability to every event.
- Formally, if we want to assign numbers to something, we use functions. Except for probability, it takes a set/event and that outputs a number (range is $[0, 1]$)

<span class="definition">Probability Axioms</span>
- $P(A) \geq 0, \forall A \subseteq S$ 
	- Means probabilities cannot be negative
- $P(S) = 1$
	- Means every outcome has a probability
- $\forall$ disjoint events $A_1, A_2, A_3, \dots$ $\implies P(\cup_i A_i) = \sum_i P(A_i)$

If you don't satisfy these guys, then your model will be all wrong.



### Probability Model
It's defined by a triple: $(S, \set{A, B, \dots}, P)$
- S is the sample space
- The middle set are all *events*
- P is the probability function


#### Probability Rules
<span class="emphasis">Law of Total Probability</span>

If you have an event B and a partition, you can cut up the probability from each partition and just add them up.
It's intuitive!
$$\forall \text{ partition } A_1, A_2, A_3, \dots \text{ and arbitrary event } B, P(B) = P(B \cap S) = \sum_i P(B\cap A_i)$$

There's even a proof

> [!proof] 
> Remember intersection of disjoint set is still disjoint (is there a proof of that though)
> 
> $P(B) = P(B \cap (\cup _i A_i)) = P(\cup _i(B \cap A_i)) = \sum P(B \cap A_i)$

<span class="emphasis">Complement Rule</span>
- $P(A^c) = 1 - P(A)$


<span class="emphasis">Inclusion-exclusion</span>
- More general
	- If A and B are disjoint, we know $P(A \cup B) = P(A) + P(B)$
	- If we don't know if it is, then it's $P(A \cup B) = P(A) + P(B) - P(A \cap B)$

#### Subtracting
(not in notes. But should be in problem set)
$A - B = A \cap B^c$
$S - A = A^c = S \cap A^c$

