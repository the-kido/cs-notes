>[!quote]
>To make sure your assertions are adequately justified, you must be skeptical about every inference in your proof. If there is any doubt in your mind about whether the justification you have given for an assertion is adequate, then it isn’t. After all, if your own reasoning doesn’t even convince you, how can you expect it to convince anybody else?

It's structured a funny way where all lines are numbered so they are easily referrable.
Some things to note
- When using "suppose", it is the beginning of a implication. Suppose is synonymous with 'if'.

# Names for certain steps
##### Switching a sign from > to <= or >= to < could be described as a step "definition of $\leq$" or "defn of <="
- (1) $n^2 \leq 9$
- (2) $\neg(n^2 > 9)$   (1, defn of $\leq$)

##### Universal and existential instantiation
To introduce an arbitrary constant, it should be a separate step!
- `Let x be arbitrary`. (For universal instantiation)
	- Could also be "Take arbitrary (thing in universe of discourse) x"
	- This indicates 'x' is *any* arbitrary element. A specific element 'y' spawned by an existential instantiation would be enveloped by a universally instantiated one!
- `...for some (thing in universe of discourse) c`
	- This is for existential instantation for a specific element 'c'


## Proving bi-conditional
To prove $p \leftrightarrow q$, you need <span class="emphasis">two proofs</span>. One for $p \to q$ and one for $q \to p$
