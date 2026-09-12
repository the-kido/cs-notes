We're going over all 3 machine types: DFA, NFA, Regex

#### 1. DFA's
DFA = ($\Sigma, Q, q_{start}, F, \sigma)$
- Sigma is your "alphabet" (in our case, it's finite)
- Q are all your states
- $q_{start} \in Q$ is the state you start in
- $F \subseteq Q$ are your "accepting" states
	- Funny name but F is the standard
- $\delta$ maps every state and alphabet to another state
	- $\delta: Q \times \Sigma \to Q$ 

#### 2. NFA's
NFA = $\Sigma, Q, Q_{start}, F, \sigma)$
- Differences:
- $Q_{start} \subseteq Q$ is a *subset* of the states (a set of the initial states) instead of one state like in DFA's
- $\delta: Q \times \Sigma \to \mathscr P(Q)$
	- $\mathscr P$ is a "power set" = set of all subsets of $Q$
	- In other words, delta maps the current state and alphabet, and returns a subset of $Q$
#### 3. R.E.:
- [[Lecture 1 and 2 (09-26) and (09-29) and (10-03)#Structural Induction|Defined Recursively]] Recursive structure:
	- $\emptyset, \epsilon, c \text{ for each } c \in \Sigma$
	- For each RE $R,S$, 
		- $(R + S), (RS), R^*$ are RE's too

But these all define "languages"
- DFA A -> Language $\mathscr L(A)$
- NFA A -> Language $\mathscr L(A)$
- RE R -> Language $\mathscr L(R)$

**Definition**: A language $L \subseteq \Sigma^*$ is "**regular**" 
iff $L = \mathscr L(A)$ for some DFA $A$
iff $L = \mathscr L(A)$ for some NFA $A$
iff $L = \mathscr L(R)$ for some RE $R$
- "regular" expressions are one of the "regular" ways to define languages, which is how it gets its name

Basically a language is "regular" iff there is a DFA, NFA, or RE for it.

You can go between these machines:
- DFA's are basically like NFA's. Almost a subset
- For NFA's, you're always in a "set" of states. So you can translate that into DFA's with that concept (and a million states)
- RE's... they are trickier

As a consequence: every regular language is "recognised" by some DFA (i.e., their language is the same as that one)

#### Then what is NOT a regular language?
There do exist non-regular languages. 

Idea: We use the Myhill-Nerode Theorem:
- \[Recall: If $S = \set{s_1, s_2, \dots}$ are pairwise dist. strings w.r.t to $L$, then *EVERY* DFA  for $L$ contains at least $size(S)$ states] 
- EX: $L_1 = \set{a^nb^n : n \in \mathbb N}$
	- The ^ just means "$n$ repetitions" but it's not part of our regex
	- $= \set{ \epsilon, ab, aabb, aaabbb, \dots}$
		- \[`a*b*` is not a valid regex. $L_1 \subseteq \mathscr L(a^*b^*)$ but $L_1 \neq \mathscr L(a^*b^*)$. In fact, there might be NO valid regex!]
	- We define $D = \set{\epsilon, a, aa, aaa, \dots}$
	- $= \set{\mathscr a^*}$
- We claim that $D$ contains pairwise distinguishable strings w.r.t $L$
	- **This is the hard part**. Requires insight. You need to *think* of a set that's piecewise dist. 
- WTP $|\forall s_1, s_2 \in D, s_1 \neq s_2 \implies s_1 \text{ is dist. from }$ $s_2 \equiv \exists \text{ suffix } t \in \Sigma^*\text{ s.t. } s_1 \cdot t \in L \wedge s_2 \cdot s \not \in L$ (or vice versa) 
	- Let $a^n \in D, a^m \in D$ with $n\neq m$. (so think $aa \text{ vs. } aaaa$)
	- Then $a^nb^n \in L_1$ 
	- BUT
	- $a^mb^n \not \in L_1$
	- $\therefore n \neq m$ (looking at the superscript)
	- Which means the suffix $b^n$ distinguishes $a^n$ from $a^m$
- Therefore, by the theorem, each DFA for $L_1$ must have $|D| =\infty$ states. 
- Which means there is no DFA that recognises $L_1$
	- Intuitively, you'd lose count in a DFA when trying to calculate, which is why it's not possible
> We say a DFA "recognises" a language if they match it

#### Example 2:
$L_2 = \set{s \in \set{a, b}^* : |s| \text{ is a power of }2}$
$=\set{a, b, aa, ab, ba, bb, aaaa, aaab, \dots}$
We claim this language is not regular. Makes sense, 

Set $D = \set{aa, aaa, aaaa, aaaaa, \dots}$
Then for aa,aaa, you add epsilon. one is in. one isnt
for aaaaa, aaaaaa (5 and 6), if you add 2 characters then the first is 7 but the second is 8. one is in. other isnt
Yep I've done it. I sure am the best! Ah. oh. oof. wait no.
- If i compare aaaa with aa they're both in with epsilon.
- OKAY EASY FIX. The set is all strings sized NOT a power of 2. boom!
- His advice was to *iterate* and gosh darn that worked for me!
Another guy suggested the set $D = \set{a^{2^n}: n \in \mathbb N}$
- The set looks like a, aa, aaaa, aaaaaaaa, etc.
- For the record, by default, all of these are in (like when you add epsilon). But there is a case where it's not:
	- Proof:
	- \[Define D]
	- Let $a^{2^n}, a^{2^m} \in D$ with $n \neq m$
	- Then $a^{2^n} \cdot a^{2^n} = a^{2^{n+1}} \in D$
	- BUT $a^{2^m} \cdot a^{2^n} = a^{2^{n} + 2^m}$ and if you add, say, 4 and 8, then "12" isn't a power. If you add 1 and 2, "3" isn't a power of 2 either.
	- So yeah this set works


> To show a language is regular, you just give a DFA, NFA, or RE.
> To show not regular, you gotta do the above (showing piecewise dist. set is infinite, so no machine can recognise it)