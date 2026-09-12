In a storage unit, you should be able to store a 0 or 1 *and be able to change it*.

![[and storage unit bad.png]]
- This doesn't store "Q" since if the top input is 1 or 0, the Q will always be false. This means we cannot store 1. This means this is not a valid storage unit.
- However if, somehow, Q and the top input are 1, well if we switch the top input, Q becomes false, and now we can't make it true again. Frick. stuck!
![[and storage bad part 2.png]]

> The story is similar with OR, except it stores a `1` permanently. 

### NAND and NOR
NAND and NOR are better:
![[NAND store state.png]]
- In the case were A=1 and Q is false, then Q becomes true. When A=Q=1, then Q=0. This oscillates and is therefore an unsteady state.
	- ![[NAND Oscillation.png]]
- But the input turning $A=0$ "locks" the gate, therefore keeping the output stable (at 1)

These ideas are used to create [[Latches]]