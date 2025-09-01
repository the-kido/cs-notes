This is utilized when [[Creating Gates as (CMOS) Circuits]]

You only really have to look at 1 half of the circuit to know the truth table (i.e. you can look at just the bottom half)
- Looking at the more "parallel" half is easier most of the time. 

>If there is connection between Y and $V_{cc}$, then the output is 1
>If Y and ground are connected, then the output is 0

# Examples
![[Pasted image 20250510103715.png]]
1. For the first one, looking at the bottom half is easier since it's parallel:
	1. When A is false OR b is false, then Y is connected to the ground.
		1. $(\neg A \vee \neg B) \leftrightarrow ground$
		2. $\neg(A \wedge B) \leftrightarrow ground$ via [[De Morgan's Law]] yay
		3. $A \wedge B \leftrightarrow V_{cc}$
	2. it's an AND gate!
2. For the second one, looking at the *top* is easier:
	1. When A or B are true, then Y is connected to $V_{cc}$
	2. So it's simply an or gate
3. For the third one, we have some parallel and some series. Let's look at that bottom half since there's a bit more consistency between the series "sub-circuits" (?):
	1. When A and B are true, Y is connected to ground, or
	2. When A and B are false, Y is connected to ground
	3. $(A \wedge B) \vee (\neg A \wedge \neg B) \leftrightarrow ground$
	4. $\neg(\neg A \vee \neg B) \vee \neg ( A \vee B) \leftrightarrow ground$
	5. $(\neg A \vee \neg B) \wedge ( A \vee B) \leftrightarrow V_{cc}$
	6. Would you look at that; this looks exactly like a [[XOR]] gate!
