More rules! Look at [[Rules for Functional Dependencies]] for more!
- **Reflexivity**: If $Y \subseteq X$, then $X \to Y$
	- E.g. since $B \subseteq AB$, then $AB \to B$ holds.
	- This will always result in a trivial FD
- **Augmentation** (sort of like multiplying both sides)
	- $X \to Y$ same as $XZ \to YZ$ for any $Z$
	- Creates a *non-trivial* FD, but it's not *completely non-trivial*
- **Transitivity** (you know what this is)
	- $X \to Y$ and $Y \to Z$ means $X \to Z$

>[!example] $A \to B$ and $BC \to D$. Show $AC \to D$
>1. $A \to B$ means $AC \to BC$ by augmentation
>2. $AC \to BC$ means $AC \to D$ by transitivity 

