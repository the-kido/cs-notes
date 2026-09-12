Validity = checking for infinitely chains of recursion or errors.
Correctness = showing, given Pre, that Post holds
- Means all calls need to be legal as well iirc
- #todo I'm confused. Isn't this for validity? And correctness is just RH and returns? 


[[Exercise 5 Exam Attempt]]
- Remember how to do the "trace of proof". It's in `complete-induction-ii`
I'm skipping 3, 4, 5 for now while i'm tired #todo


[[Exercise 6 Exam Attempt]]
- For the structures I should always 
	- Make the PCI
	- Make a list of example elements

[[Exercise 7 Exam Attempt]]
- Remember the lemma and expanding the "witnesses" of the set
- State "by contrapositive of the lemma" when I am done with said lemma
- Maybe review the "instancing a proof" stuff. It could be on the exam? Maybe?
- Skipped Q3. Very long

[[Lecture (10-17)]]
- (NVM WE GOOD!) Why do we only assume $V_k \in \mathbb N$? What about $V_k < V_{k-1}$? Or is that not required?
	- I think it has to do with the fact that showing $V_{k+1} \in \mathbb N$ requires an *invariant* but the other one is provable with a variant? 
	- LOL Okay i actually noted that down in the readings
- Related to that, if V proved an "invariant" thing, why is it a variant? Is that a dumb question idk

[[Lecture 1 and 2 (10-20 and 10-24)]]
- You use $V$ for showing termination (like the $V_k > V_{k+1}$ measure thing in the loop)
	- For the *actual* variant problems, we don't need to assume anything.
	- It's just like showing size(n) < size(m), but this time right before the loop ends
- The $A[b:i)$ notation that means all element of A over indices $b \leq x < i$

[[Exercise 8 Exam Attempt]]
- Do 3 and 4 when you wanna

[[Exercise 9 Exam Attempt]]
- Definition of $O$ is as follows: $O(g(x)) = \set{f(x) : \exists c \text{ s.t. } \forall n \geq n_0, f(n) \leq cf(n) }$
- Remember the Big-O proof set-up with the "smallest power greater than x" deal

[[Lecture 2 (11-21)]]
- You say a string is distinguishable w.r.t. *a language* every time

#### New stuff
[[Lecture (11-24)]]
- pairwise-dist. sets
- Myhill-Nerode theorem

[[Lecture (11-28)]]
- A language is "regular" if there is any of DFA, NFA, or regex
- To show a language is NOT regular, we use the Myhill-Nerode
	- Then you show there is an *infinite* pairwise dist set which means you'd need an infinite # of states
	- You create a set, idk, $D$ (and we claim by adding suffixes to the elements of this set, we'll get some strings in $L$)
	- Then we show for all two elements in this set, $s_1, s_2 \in D$ where $s_1 \neq s_2$ (so we're comparing all pairs here) then $s_1$ is distinct from $s_2$ (this is what pairwise dependent means).
	- In that case, you determine what $s_1, s_2$ look like. For instance, if your $D$ is a set of all strings $a^n$, then you'd have two strings, $a^x$ and $a^y$ for some $x\neq y$ and show they're distinct 
	- With suffix $b^x$, $a^x \cdot b^x  \in L$ but $a^x \cdot b^y \not \in L$. Boom. This set is pairwise distinct w.r.t L, so L must use $|D|$ states = $\infty$ states. YAY!

[[Lecture (12-01)]]
Subset Construction
- If a NFA has $x$ number of states, then the $DFA$ must have at MOST $x^2$ states because that's the total number of subsets you can have
	- For instance, if you had 3 states 1,2,3, then you would have 8 total possible subsets: $\set{}, \set{1}, \set{2}, \set{3}, \set{12}, \set{23}, \set{13}, \set{123}$

[[Exercise Set 11]]
- For the pairwise dist. sets, you first compare the obviously IN things with the obviously OUT things.
	- Then between all the "in" things you do the gradually decreasing algorithm between them until you show they're all dist between each other
	- Same for the "out" things
	- *The first step with the big obvious comparison makes the rest FAR easier*


### Types of illustrations
Gosh there are so many things you can draw
- Trace
- Call tree
- Proof trace
- [[Lecture 1 and 2 (09-26) and (09-29) and (10-03)]]
	- Derivation Tree
	- Parse tree
- `size, RTT, # of nodes, time` "diagram"
	- **Shape** = just "dots" representing nodes. Refer to `EX9 Q2 a)`
	- For the RTT, and time, add `+`'s in front of the values
- Regex Trace and State machine
- Trace for NFA's like in [[Lecture (11-24)]]

#### c)
Regex is super easy
`1*2 + 2*1`

Okay now for the NFA
I think i can do this in 3 states.

One for start, one for "1s" and one for "2s"

$q_e$ = not accepting
Goes to $q_1$ or $q_2$ depending on 1 or 2 input. Both are accepting
for $q_1$, if you do 1 again, stay inside. If you do 2, then don't go anywhere (i.e., give up)
Isn't that just a DFA? hmm something's wrong?

Okay nevermind it's cuz I wasn't *understanding*.
So the regex we made means we can start in either 1 or 2. And depending on that, if we get 2 or 1, we're "accepting" but anything after that and we're rejecting again.

So we can have TWO starting states. $q_1$ or $q_2$. 
If in $q_1$ you get a 2, then you go to $q_s$ which is accepting.
if you get $1$, then stay in $q_1$

Same for $q_2$. 
This isn't hard, but I forgot about the whole "starting" state thing

#### e)
"Use as few states as possible". We know we need 7 states. yikes

$q_e$ for start. $q_1$ and $q_2$ for the "single" situation (these are both accepting). And they also go to $q_3$ and $q_4$ for the "rejecting" scenario when you have `11` or `22`. But from 11 or 22 you can keep looping (stay in the state) but if you leave you go to $q_5$ which is accepting (for strings like 1111112 or 2222221). But if you do either 1 or 2 at q_5 you're sent to $q_6$ purgatory.

### 6.
