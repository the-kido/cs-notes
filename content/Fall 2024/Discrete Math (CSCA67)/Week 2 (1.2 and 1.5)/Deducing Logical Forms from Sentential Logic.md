
<span class="definition">Sentential Logic</span> Logic that can be described in sentences. Sentential means "Related to sentences"

1. Either john is not dumb *and* john is lazy, or john is dumb
2. John is not dumb and john is either lazy or dumb
### Word to Symbol translations
- When brackets are used, it usually represents "either" in English.
- "but" and "and" in English are used interchangeably. 

### Representing statements as variables
Just write "Let (variable) stand for (statement)"

### Common phrases and associated logical form:
- `Neither A nor B` --> $\neg A \wedge \neg B$ --> Both A and B have to be false
	- This means *neither* A or B can be true at the same time. 
- `Not both A or B` --> $\neg(A \wedge B)$ --> A and B cannot both be true. 
	- This means A can be true or B can be true, but not both at the same time.
- `A unless/except if B` can be interpreted two ways
	- $(B \to \neg A) \wedge (\neg B \to A)$ eqv  $\neg A \leftrightarrow B$ (A happens if B doesn't; B happens if A doesn't)
	or
	- $\neg A \to B$ eqv $A \vee B$ (If a does not happen, then B happens)
	The intuition is that A occurs except if B occurs, so when A doesn't occur, B *must have* occurred.

### Can you use sentential logic instead of formulas?
Yes, but it's better practice to use the logical connectives we're learning right now for practice. However, English statements are "Valid"

## What about Implications?
There's another section dedicated to it [[Conditionals (or implications in calc)#How to `engrish`|here]]

## Quantifiers

"if a real number is...." that refers to `forall` and not `there exists`
Similar to a proverb like "if a dog is hungry it should eat", we aren't talking about 1 specific dog, we're talking about *all* dogs!

