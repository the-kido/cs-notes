Takes in a remainder and adds the X, Y, and Remainder to get a S and C_out (extra remainder)
- The 3 inputs are $C_{in}, X, Y$ and the 2 outputs are $C_{out}, S$ where X and Y are what are added, S is the sum, and C is the remainder in both scenarios
	- That's what makes it different from the [[Half-Adders|half-adder!]]
Used to create a [[Ripple-Carry Binary Adder]]
### Design
Based on the truth table
![[FA truth table.png]]

We get this:
![[FA clearer design.png]]


However, there is an optimization!
$$C_{out} = X\cdot Y + (X \oplus Y) \cdot Z$$
- Technically this is worse than what the K-map gives, BUT it comes with the optimization since we have the half-adder from before with already calculates $X \oplus Y$.
- We are not required to think about this but it is interesting
The given, optimized design looks like this: 
![[FA best design.png]]