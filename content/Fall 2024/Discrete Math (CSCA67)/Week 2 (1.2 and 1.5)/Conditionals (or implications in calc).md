>[!note] All of this applies in Calculus, too. Just use the $\implies$ arrow instead of $\to$

$P \rightarrow Q$
- This is a <span class="definition">Conditional Statement</span>, or an "implication"
- P is the <span class="emphasis">antecedent</span> ("hypothesis / premise" in calc) (sometimes called a "precondition")
- Q is the <span class="emphasis">consequent</span> ("conclusion" in calc) #card-this

| P   | Q   | $P\rightarrow Q$ | $\neg P \vee Q$ |
| --- | --- | ---------------- | --------------- |
| T   | T   | T                | T               |
| T   | F   | F                | F               |
| F   | T   | T                | T               |
| F   | F   | T                | T               |
- When P is false, we cannot be certain if Q is true or not. For instance, if our implication was "If I study hard, then I will get good grades", A will be studying hard, and B will be getting good grades. If I don't study, I may still get good grades! Or I might not. We just assume it to be true, though, as explained in pg. 62 #card-this
- The textbook also explains this with P(x) being x > 2 and Q(x) being x^2 > 4 (pg. 59) #card-this

| Value of X | P(x) | Q(x) | $P(x) \rightarrow Q(x)$ |
| ---------- | ---- | ---- | ----------------------- |
| 3          | T    | T    | T                       |
| 1          | F    | F    | T                       |
| No value   | T    | F    | F                       |
| -4         | F    | T    | T                       |

In an implication $P \implies Q$, when P is false, we say Q is <span class="definition">Vacuously True</span> because we can't be sure what Q is 

Note how $P \rightarrow Q$ has the same truth table as $\neg P \vee Q$

Conditional laws #not-confident pg. 61
- P → Q is equivalent to ¬P ∨ Q
- P → Q is equivalent to ¬(P ∧ ¬Q)
## Inverse, converse, and contrapositive
$\neg P \to \neg Q$ is the <span class="emphasis">inverse</span> of $P \to Q$ and they are not equivalent
Q → P is the <span class="emphasis">converse</span> of P → Q, and they are not equivalent.
P → Q is the <span class="emphasis">contrapositive</span> of ¬Q → ¬P and it *is* equivalent #card-this 

Contrapositive law 
- P → Q is equivalent to ¬Q → ¬P.


“If John won then I lose my price” 
and
“If I win my prize then John hasn’t cashed the check I wrote” 
are equivalent

# How to `engrish`
$P \to Q$ can be written as:
- P implies Q
- Q, if P
- If P, Q
- If P then Q
- P only if Q
	- You can run for president only if you are a citizen
		- If "P" is run for president 
		- "Q" is you are a citizen. 
		- it should be $\neg Q \to \neg P$
		- Same as $P \to Q$ by contrapositive.
- P is sufficient for Q
	- When P is true, Q is true.  
- Q is necessary for P
	 - Same as "P only if Q". Q is a requirement. 
	 - You need to unlock the regular conveyor before getting titanium conveyors
	 - Regular conveyors are a necessary condition for titanium conveyors.
	 - Let P be titanium and Q be regular.
		 - If you have P, then you DEFINITELY have Q, so P --> Q for sure.
		 - However, if you have Q, you may not have P, so that is why Q --> P is no.
- If not Q, then not P 
	- Contrapositive
- Not P or Q
	- !(p||q)
