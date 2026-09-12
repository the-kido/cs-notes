Say we have a relation $ABCD$ (which basically means we have `R(A, B, C, D)` defined). Say `ABCD` has a bunch of FDs. We'll throw them into the set $F$.

Now, what if it's advantageous in our DB to decompose ABCD into ABC and AD? (This can be important to satisfy [[BCNF]] or [[3NF]])

Well that's great. We totally could split them, but now we need the FDs that follow for each of the split relations to preserve our dependencies!

Hence, *projection*.

>Projection gives us the list of ALL FDs that are required for a subset of a relation. All FDs are w.r.t the attributes of the subset. 
>I.e., if there's a subset `X = ABC`, then $F = \set{AB \to D}$ is not an FD in the projection. It's not in $F_X$
## Actually Projecting FDs
The projected FDs for a subset of a relation R are the FDs that hold for that subset.
- Seems obvious, eh?

### Algorithm to get all FDs that hold for an R
>Note: Interesting FDs = FDs *implied* and not explicitly given. Something we didn't already have!
>To clarify, it's all FDs $X \to A$ where $A \in X^+ - X$


Algorithm to find $F_X$: the projection of $F$ onto relation $X$
- Loop: Find $X^+$ for all $X \subseteq S$ where $S$ is all attributes of some "partition" of a relation.
	- If $X \to A$ holds and it's "interesting" (as stated above), then we **add** it.
	- If $X^+$ in any instance is *all* attributes, then there's no point in checking, say, $(XY)^+$ since we know it'll also be all attributes., too.
		- This is the algorithms important "*optimization*"
- Finally, select *only the FDs that involve the attributes of subset $S$*.
- That should be your $F_X$ set.

Note: It gets **exponentially** worse the more attr's there are in the relation

Note: The reason why we ONLY take the "interesting" FDs is because the given ones from before might not give relevant new information. For instance, we might find that $A \to C$ is interesting, and therefore $AB \to C$ is sort of redundant since $A\to C$ already covers that FD.

*This algorithm is designed to smartly give every FD for a decomposed relation!*

Example #1:
- We have a relation $ABC$ with FDs $F = \set{A \to B, B \to C}$.
- We want to project onto $AC$ in this case.
- To find the FDs of AC, we *project* by computing the closures of *every* subset of AC from (smallest to biggest)
	- $A^+ = ABC$ (start at A, get B, which gets C)
		- Since $A \to C$ is new, we add it to our projection of $AC$
	- $C^+ = C$ (nothing new)
	- $AC^+$ is skipped since it's a superset of $A$, which determines all attributes (reference the optimization)
	- So our projection of AC is simply $A \to C$

![[Example of projection relations.png]]

Example:
> **NOTE**: For the closure $C^+$, $C \to D$ is *still important* when we're computing the projection of $F = ACD$ onto relation $S$ 
![[Closure example to find basis of relation.png]]

- IF AC is the thing we want to project from ABC, then clearly only $A\to C$ is generated with the algorithm. 

## Note: Projection does NOT give a [[Minimal Basis of FD|minimal]] basis!
