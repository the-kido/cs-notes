#### My [[Lecture 2 (11-21)]] reviews
When two possible "strings" of a state are possible at the same time, but have different "acceptability" (like `ab` might be in, but `bb` is NOT in) then we don't have distinguishability
- Whenever a character "goes into" a state, we show if the previous state, and this new guy, are indistinguishable

#### Indistinguishability
If $\epsilon$ and $b$ were indistinguishable, then $\epsilon \cdot s, b \cdot s$ for any suffix $s$ are both $\in L_2$ or $\not \in L_2$

This means all strings in, say, $q_1$ are *indistinguishable* as well for this language! $a, ba, bba, bbba, \dots$ are indistinguishable. means both $a\cdot s$ and $bbba \cdot s$ will be accepting or not.

# Okay lecture time
For any language $L \subseteq \Sigma^*$ and strings $t_1, t_2 \in \Sigma^*$.
We say $t_1$ is ***distinguishable*** from $t_2$ with respect to $L$ **iff** $\exists$ a suffix $s \in \Sigma^*$ s.t. $t_1\cdot s \in L$, but $t_2 \cdot s \not \in L$ (or the other way around)
For instance, when we had $L_2 = \set{\text{strings with 2nd last char = a}}$
- $a$ was distinguishable from $b$ w.r.t $L_2$ since
- $aa \in L_2$ (with suffix $s = a$)
- $ba \not \in L_2$

And we say they were ***indistinguishable*** w.r.t $L$ iff $\forall s \in \Sigma^*, t_1 \cdot s \in L \Leftrightarrow t_2 \cdot s \in L$
- Basically the opposite of distinguishablility
We don't need to show "all" suffixes. We can extend common sense depending on our language. 

![[indistinguishable.png]]
Like, if we have "a" and "ba". They are indistinguishable because after some time, all the suffixes will be so long, the second-last char is the same.

#### Pairwise distinguishable
- Means between all elements in its set are distinguishable from themselves.
- For instance, $\set{aa, ab, ba, bb}$ is a pairwise distinguishable set w.r.t $L_2$
	- We already see $aa, ab \in L_2$ and $ba, bb \not \in L_2$ so there is some distinguishing going on there (remember, **$\epsilon$ is a valid suffix**)
	- Between $aa, ab$, they are distinguishable (using suffix $a$ since)
		- $aaa \in L_2$ but $aba \not \in L_2$
		- Same for the `ba`, `bb` situation
	- So yeah this set is pairwise distinguishable!
#### `Myhill`-`Nerode` Theorem (simplified)
- For every set of pairwise dist. strings w.r.t $L$, each DFA for $L$ contains *at least* as many states as the size of the set
	- Ah ha, this can be useful to prove minimality!
- So for the $\set{aa, ab, ba, bb}$ situation, any DFA of $L_2$ must have at least $4$ states.
	- Why? because take $ab\cdot s \in L_2$ and $ba\cdot s \not \in L_2$ (or vice-versa)
	- If the last state of $ab\cdot s$ $\neq$ the last state for $ba\cdot s$, then they aren't the same state
	- $\therefore$ the last state *after* (after?) $ab$ is $\neq$ the last state after $ba$

### Nondeterministic Finite Automata (NFA)
Idea: At any point in the computation, an NFA can be in any *subset* of its states at once (simultaneous states!) or even no state at all!
> This is more general than the usual def'n of NFA (usually you start at "1" state and go to many from there. In our case, we can start at many states too)

Why? Because it lets us more easily model regex!
- For instance, `(a+b)*a(a+b)`, you gotta do a lot of back and forth.
- You can't use a DFA to model this with just $4$ states (this is I think the same as the $L_2$ from before)
#### The example for this regex
This is an NFA. It does start at a single start state (so it has non-determinism only in the highlighted place)
![[Non-deterministic NFA.png]]
$\delta(r_0, a) = \set{r_0, r_1}$
- Now our transitions go to *sets* of states!
$\delta r_0, b) = \set{r_0}$ (like a DFA)
$\delta(r_2, a) = \set{}$. Ah. No set! No more computations
#### Trace example
Using the same above NFA, we trace `abba`
We start at $r_0$
![[NFA Trace Example.png]]
- Basically you do everything in parallel. If ANY of the branches are in an accepting state, then we accept! Otherwise we reject. In the normal blue example, it's a "REJECT" because none of the branches end up in the $r_2$ state. Also note that the red "X" means "empty set. cannot go further"
- 
# Reading (`dfa-distinguishability`)
Example: $L$ is all strings made of {a, b} where the second-last character is a $b$.
