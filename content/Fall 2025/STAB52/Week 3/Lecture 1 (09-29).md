We like numbers vs. events and sets!
No more sets. No more set functions (like $P(\cdot)$ Instead we use *real* functions! Like the ones we're used to.
PMF and CDF are the ways to calculate probabilities of discrete RVs

Events = Collections of outcomes. If an event is $A = \set{\text{"Sum of two rolls is 4"}}$ then it has 3 entries (3,1), (1,3), and (2,2)
But instead of using sets, we can use RVs

The defn is kinda technical :(
"A random variable" is a *function* from the sample space $S$ to the real like $\mathbb R$ 
- It takes every outcome of S possible, and assigns a number to the outcome
- Each outcome can be "assigned" a tag that's numerical.
- $X(s_1) = a$ where $s_1$ is an element of $s$ and $a$ is a number. 
- For mappings, for a single input you can only have a single outcome.
	- That's always true for functions. One input cannot have 2 outputs!
	- But 2 inputs can go to the same 1 output.

>Each outcome of S has a unique number output defined by the RV.
>Each number output can represent a set of outcomes of S

You can choose the mappings to be useful to your problem
- For instance, in the case of this question, the outcomes can be mapped to the number associated with *their sum*!

The inverse image of the mapping is also helpful.
- Defining events by looking at the inverse/pre-image of the RV mapping
- It's the set of all inputs which map to an output
- If I want to find the probability that the sum is equal to "3", then you can define the event as:
	- $A = \set{s \in S : X(s) = 3} = \set{X = 3}$
	- It's the set of all outcomes in the sample space, where the value of the RV evaluated w/ "the" outcome is equal to that "3" value.
	- We're using the RV to make a restriction on the sample space, and therefore a event!

RV $X$ is discrete if it as a finite or countably infinite number of values
- You can have orders of infinitely larger than the natural numbers (e.g. real numbers)
- The values of an RV induces a partition of $S$. You can map each RV output to a partition
- The events are not overlapping because there are no outcome that outputs to two RV values (cuz RVs are functions)
	- For instance, let's assume event $A_1$ has outcome $s_1$ and $A_2$ has outcome $s_2$. It's not possible for $s_1 = s_2$ because $A_1 = \set{s \in S : R(s) = \alpha} = \set{s_1}$ and $A_2 = \set{s \in S : R(s) = \beta } = \set{s_2}$ so if $s_1 = s_2$ then the events would have to be the same
	- *So every discrete RV will define a partition of the sample space*

 The simplest example of a discrete RV is one that outputs two values (typically 0 and 1). This is your <span class="emphasis">Indicator</span> RV. It usually is associated with an event. The indicator induces the simplest partition you can have (the event, and its complement)
 
 Looks like $I_A(s)$. The $A$ is the <span class="emphasis">characteristic event</span>. If the outcome belongs to the characteristic event, then it outputs $1$. Else it outputs $0$
They create a connection between numbers (RVs) and events!
- $A \leftrightarrow I_A$ 

This is something in the future but relevant:
- You can take functions of RVs and those would define *new* RVs
- RVs take outcomes (elements of $S$) and outputs a real number.
- A real function takes reals, outputs reals.
- The composition of the two is still a mapping from the sample space to the real line (but with *two* hops, not 1 hop)
![[Functions of RVs.png]]


RV Distributions
- Events can be defined by a range of values of RVs
	- Subsets of the real line (*usually* intervals)
	- Like, the numbers from [2, 5] can turn into an event.
- Remember $\set{X \in [a, b]} = \set{s \in S : X(s) \in [a,b]}$
- We want to be able to calculate any probability for any interval/range of values of an RV. 
	- There are many ways of doing this.
	- We call the collection of all probabilities the *distribution* of an RV
	- Distribution = collection of all probabilities defined in terms of the RV (individual values; subsets of the real line; etc.)
	- It shows how probabilities are distributed over the possible values of an RV

The distribution of any *discrete* RV is uniquely determined by the probabilities of its individual values. 
- For discrete RVs, you can break down an interval of outcomes into individual ones.
- This is an application of the third axiom of probability. The probability of the union of many disjoint outcomes is the probability of those outcomes summed!
- If you know the probability of each possible value of a discrete RV, you effectively have its distribution (you can find the probably of any event w.r.t the RV)
The PMF, Probability Mass Function takes a *real* number and outputs the probability of the RV value. $p_X(x_i)$ 
- Remember $X = x_i$ is shorthand for an <span class="emphasis">event</span>. So $P(X = x_i)$ is the probability of an event. 
- The PMF needs to satisfy the axioms of probability!
To look at PMF means to look at every possible outcome of RV

>[!note] You don't need the subscript in $p_X(x_i)$ if $X$ is the only RV in the question.

We go over the slide 13 example.
$p_X(x) = P(\set{s \in S : X(s)= x})$ 
and this is a piecewise function, explicitly giving each possible outcome (each RV value possible) its own probability
$$P_X(x) = P(\set{s \in S : X(s) = x}) =
\begin{cases}
\frac 1 {36} & x = 2\\
\frac 2 {36} & x = 3\\
\dots\\
\frac 3 {36} & x = 10 \\
\frac 2 {36} & x = 11 \\
\frac 1 {36} & x = 12 \\
0 & \text{otherwise} \\
\end{cases}
= 
\begin{cases}
\frac{6 - |x - 7|}{36} & x = 2, 3, \dots, 12\\
0 & \text{otherwise}
\end{cases}
$$
Having the otherwise is good. Remember $x$ is real so 1.424 is technically a valid input

We can calculate probabilities using CDFs!
- Accumulative
- It's a real function (arg is a real number yet again). It's the probability less than or equal to the input.
	- So $F_X(x)$ is the probability of values $\leq x$ 
	- Alternatively, it's the probably of the event of all outcomes whose $R(\cdot)$ value is less than $x$
- To get the probably of an interval of values, you do some subtraction

CDFs assume some common properties:
- $F_X(\infty) = \lim \limits_{x \to \infty} F_X(x) = 1$
	- The probability of the entire real line should be $1$
- $F_X(-\infty) = \lim \limits_{x \to -\infty} F_X(x) = 0$
	- Obvious
- $\forall x_1 < x_2 \in \mathbb R, F_X(x_1) \leq F_X(x_2)$
	- Function is non-decreasing
- $F_X(\cdot)$ is right-continuous

# Week 3.b (Discrete Distributions)
- Templates to solve problems without starting from scratch!

### Bernoulli
- For experiments with binary (2) results
The RV is simple! 1 for the "yes", "success" outcome (what is "true" to you depends on the experiments) and 0 for the other result.
Similar to indicator variables, but they are associated with characteristic event, but with Bernoulli RVs you just need a description with works (not a specific event)
The distribution (the probability of all results) is just the PMF at $1$ and $0$
- The variable $p$ indicates the probability of the "true" result and $1-p$ is the false probability

Notation time:
$X \sim \text{Bernoulli}(p)$
- $X$ is an RV
- $\sim$ = "distributed as"
- $\text{Bernoulli}$ is the name of the distribution
- $p$ is a sort of "tuning" variable. Like the variable of a constructor
	- $p$ could be, like $\frac 1 2$ for a coin flip, for instance. 

Since it's the same as the indicator variable, $I_{\set{X=1}} \sim \text{Bernoulli}(p)$, too.

### Binomial Distribution
Imagine an experiment is a sequence of $n$ binary experiments
- a.k.a. the overall random experiment is a composition of Bernoulli trials 
and the experiments are *independent* (each result doesn't affect the others)

> Best example: Flipping 5 coins in parallel. 

The "final" result (the composition of these Bernoulli trials) can be thought of as a tuple of binary results. 
- Note, that's $2^n$ possible tuples by multiplication rule

Let RV $X$ be the # of *successes* in $n$ such trials
- E.g. if $n=5$ and we're flipping coins (so $p = 0.5$) then one outcome $s = (0, 1, 0, 1, 1) \implies X(s) = 3$ as we defined it.
- $X$ is a <span class="emphasis">Binomial</span> RV


#### Finding the distribution via the PMF
- For an arbitrary $n \in \mathbb N$, what are the possible values of the Binomial RV $X$?
	- That would be $x \in \set{0, 1, 2, \dots, n}$
To figure things out, let's make an example for ourselves, with $n=5$ and $x = 3$
Then $\set{X = 3} =$ all the outcomes with 3 successes and 2 failures
We know the sample space is *not* discrete uniform (all outcomes are not equally likely... it depends on probability $p$)
But in the set $\set{X = 3}$, all of *these* outcomes are equally likely. We know since the probability of, say $P(1,1,1,0,0) = P(1) \cdot P(1) \cdot P(1) \cdot P(0) \cdot P(0)$ since the event is independent. Since the order of multiplication doesn't matter, all the outcomes w/ the same # of wins/losses *is the same*!

There are ${5 \choose 3}$ total combinations / ways to pick 3 outcomes as "true" out of 5 #todo i dont know why this isn't clicking for me  
So in total $P(X = 3) = {5 \choose 3} \cdot p^3 \cdot (1 - p)^2$


### Binomial Coefficient Properties 
This is the ${n \choose x}$ thing
$${ n \choose 0 } = {n \choose n} $$
$${n \choose 1} = {n \choose {n-1}} = n$$
$${ n \choose k } = { n \choose {n - k}}$$
$${{n+1} \choose {k + 1}} = {n\choose k} + {n \choose {k+1}}$$
- ${ n \choose k}$ is the # of subsets size $k$ that *include* a specific element ($k+1$ )
	- One of the elements are known, so we are choosing 1 less element
- ${ n \choose {k+1}}$ are the # of subsets of size $k+1$ that exclude $k+1$ 

Anyway
### Binomial Distribution

$p_X(x) = P(X = x) = { n \choose x} p^x q^{n-x}, \forall x \in \set{0, 1, 2, \dots, n}$
where $X$ is a Binomial RV (denoted by $X \sim \text{Binomial}(n, p)$

#### Showing the Distribution is valid
First, $\sum_{x = 0}^n p_X(x) = \sum_{x=0}^n {n \choose x} p^x \cdot q^{n-x} = (p + q)^n = (p + 1 - p)^n = 1$
So b/c of that we know $0 \leq p_X(x) \leq 1$ cuz all the probabilities are positive (i guess? #todo)

### Example
You have 6 m/c question w/ 4 choices, each A, B, C, D. Questions are answered *at random*
What's the chance you get a perfect 6/6 score?

Answer: Not $0.25^6$?

Let RV $X$ = # of correct answers, $X \sim \text{Binomial}(n = 6, p = 0.25)$
$P(X = 6) = {n \choose x} p^xq^{n-x} = {6 \choose 6} (\frac 1 4)^6 (\frac 3 4)^0 = \frac{1}{4}^6$
Okay so my intuition was correct!

But here's a harder question: What's the chance you *pass* the test? Get a $3/6$? 
$P(\text{"pass test"}) = P(X \geq 3) = P(X = 3) + P(X = 4) + P(X =  5) + P(X = 6) = 17\%$ 

