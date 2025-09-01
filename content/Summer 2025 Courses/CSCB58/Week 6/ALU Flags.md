Different CPUs have different things, including flags.

But for a MIP, we have 4:
- Overflow
- Result is zero
- Result is negative

### Overflow
- For unsigned numbers, if $C_{out} = 1$, then there is overflow
- For signed numbers (either A or B are negative):
	- For G = A + B, we have overflow when
		1. A and B have the same sign
		2. G has opposite sign
	- For G = A - B, we have overflow when
		1. A and B have different signs
		2. G has the same sign as B
		- E.g: A = -2 and B = 15. A - B = -17. B is negative; -17 is negative. We have overflow!
	- For G = A + B and A, B have different signs
		- It can never overflow!
#### Zero Flag (not on the slides)
$Z = \bar G_3 \bar G_2 \bar G_1 \bar G_0$
=$\overline{ G_3 + G_2 + G_1 + G_0}$
- Checks if any number is 1. If it is, it's not zero!
