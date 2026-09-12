> The closure of something reads as "everything derivable from".
> $A^+$ is "everything derivable from $A$"

The closure $Y^+$ of attribute set $Y$ is ***all*** attributes that are *determined* by $Y$ throughout all your relations! (and by relations, I mean FDs).
- So if $Y = \set{ A, B, C}$, then all attr's that are functionally dependent on any of $A, B, C$ (i.e., $A \to EF$), are included in the closure.
- Means $Y^+ \to ABCEF$

This algorithm is used to find the set of attributes $Y^+$ functionally determined by $Y$ 
![[The closure infer algo.png]]
- Repeating in my own words:
	- **Base** case: Start with $Y^+ := Y$
	- **Induction**: Then add to $Y^+$ *every* attribute dependent on *any* subset of $Y^+$
		- For instance, if $AB \subseteq Y^+$ and $AB \to G$, then we add $G$ to $Y^+$
	- **Terminate**: We keep repeating until $Y^+$ can no longer be changed!
 
>[!example] $A \to B$ and $BC \to D$ holds.
>
>What is $A^+$? Well $A^+ = A$ is trivial. But since $A \to B$ we get $A^+ = AB$
>$C^+ = C$ only. 
>$(AC)^+$ = everything determined by A, C, and AC = $ABCD$ ABCD doesn't determine anything else, so we're done

>[!example] Another example
>![[FD example.png]]
>$(CG)^+ = CGHI$
>$(BG)^+ = BGH$
>$(AG)^+ = ABCGHI$

