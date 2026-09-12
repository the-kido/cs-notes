We're gonna use this example:
$L_a = \set{s \in \set{a, b}^* : s \text{ ends with an } 'a'}$
$L_a$ is definitely regular:
- $L_a = \mathscr L( (a+b)*a)$
- I mean he even made a DFA for it
![[Pasted image 20251214084754.png]]
- This is both a DFA and an NFA
	- NFA is not required to have non-determinism. It's just "allowed" to have it. So yeah.

We said $L_a \subseteq \mathscr L(\set{a, b}^*)$ and the complement $\bar{L_a}$ is the other subset of the language.

Question: Is $\bar{L_a} = \set{a, b}^* - L_a$ regular?
$=\set{s \in \set{a, b}^* : s \text{ does NOT end with an } a}$
- How do you turn a regex into the inverse of it? It's not obvious.
- But DFA's are clear! Just swap the "accepting" and "not accepting" states. That gives you the opposite system! And since there is a DFA, the language is regular.
- He talks about how the "wavy line" signifies a "boundary" and that $L_a$ and $\bar{L_a}$ are otherwise very similar. $L_a$ could very well match $\bar{L_a}$ but we just chose this direction. Intuitively that means the other half should be describable regularly, too.
![[Regular expression boundry.png]]

#### Conclusions:
- Taking complements *preserves* regular languages
- For a DFA, if you make the accepting states rejecting, and the rejecting ones accepting, you get the complement of the language.
- This doesn't hold for NFA (because of the whole "ending up in many states at once" ordeal)

#### Corollaries
- If $L_1, L_2$ are regular, then $L_1 \cup L-2$ is also regular because
	- $L_1 = \mathscr L(R_1), L_2 = \mathscr L(R_2)$
	- so $L_1 \cup L_2 = \mathscr L(R_1 + R_2)$
- This is the most obvious with "regular expressions" but with DFA's it's not as obvious. Wow, some models are easier to show some things vs. others!
- Is $L_1 \cap L_2$ regular?
	- Well $L_1 \cap L_2 = \overline{ \overline {L_1} \cup \overline {L_2}}$ and go from there (easy!)
	- Another way: *Product Construction* for DFA's
Product Construction stuff:
Example: $L_2 = \set{e \in \set{a, b}^*, s \text{has an even \# of } b\text{'s}}$
- Then $A_e$ and $A_a$ is given below
	- $A_e$ is even strings, $A_a$ is "ends with $a$"
![[Product Construction for DFAs.png]]
The "product", $A_a \times A_e$ is the product of all the states. The transitions are the work of both machines. 
- So for instance, at $r_0q_0$, how do we know what $b$ does? 
	- We see what $b$ does from $r_0$ in $A_a$. It goes to $r_0$ still. 
	- We see what $b$ does from $q_0$ in $A_e$. It goes to $b_1$
	- So for $A_a \times A_e$, the transition is $\delta(r_0q_0, b) = r_0q_1$ in total
- So look, we derived a DFA and therefore the product (the intersection of the languages) is *also* regular

### Part 1 done! Talked about what is regular. What isn't
## Part 2 of the lecture. The equivalences between $NFA - DFA-RE$
- We already sort of know $DFA \to NFA$ 
- What about $NFA \to DFA$?
![[Example NFA.png]]
- Taking $b$ at $r_0$ grows the number of states you're in.
- What was just done above was a "*subset construction*"
	- Per action, there is exactly $1$ "set of states" you can transition to. This is the property we bring to DFA
### Subset Construction
Idea: Each state of the DFA corresponds to one *subset* of the NFA. 
- Technically "all" subsets are possible (but some are redundant)
- So, start with the subsets of the initial state and add more as needed.

Doing the algorithm:
1. Start with the subset of the initial state. Go through all characters of the state to see what states to go to.
2. Start with $q_0$ where $q_0$ corresponds to $\set{r_0}$
	1. When we read $a$, we go to $\set{r_0}$, which is still $q_0$ (loop!)
	2. When we read $b$, we go to $\set{r_0, r_1}$ Since that's not a state we have, we create $q_2$ that corresponds to that
	3. And now $\delta{q_0, b} = q_1$
3. From $q_1$, you can either be in $r_0$ or $r_1$
	1. When you read an $a$ in $r_0$, you go to $r_0$. When you read an $a$ in $r_1$ you go to $r_2$. So in total $\delta(q_1, a) = \set{r_0, r_2}$ represented by the new state $q_2$!
	2. When you read $b$ it goes to all of $r_0, r_1, r_2$ so that's *another* state, $q_3$
		1. Since both $q_2, q_3$ have $r_2$, they will be *accepting!*
4. Since $q_2$ (and $q_3$) have an $r_2$, we can safely ignore it since it doesn't go anywhere in the NFA. 
	1. For $q_2$, taking either $a, b$ it's the same behaviour as $r_0$ (which is $q_0$). Means when we read $a$, we go to $q_0$ and when we read $b$ we go to $q_1$
5. etc., etc.
![[Creating DFA from NFA.png]]
- Typo: There is no "a" for the arrow going from $q_3$ to $q_2$
### $RE \to NFA$


My annotations
- $\mathscr L ( \emptyset) =$ 
	- For the empty set, there is no way to "get" to the state. The only state that exists is accepting but since the initial state is $\set{}$ you'll end up in the abyss at the start.
- $\mathscr L ( \epsilon) =$ 
	- You "start" in the accepting state. Taking *any* character will send you out of that accepting state into the void.
- $\mathscr L ( c) =$ 
	- You start at an unaccepting state. If you do take $c$, you go to accepting. But if you take anything else, it's unaccepting again (in that you're sent into the void)
Now that we have THESE, we can show, recursively:
Let $\mathscr L(R_1) = \mathscr(A_1)$ and $\mathscr L(R_2) = \mathscr(A_2)$ 
- Then $\mathscr L(R_1 + R_2) =$
![[Regex to NFA for Union.png]]
- The $A_1$ atop $A_2$ is a machine I guess?
- And $\mathscr L(R_1 \times R_2) =$ 
![[Regex to NFA for Intersection.png]]
	- KEY idea: For all transitions that *would* have been accepting for $A_1$ now get duplicated into the initial states for $A_2$