> The Datapath is where all data computations take place
> - Usually registers, computational stuff, and wires and muxes.
> - A big "schematic" that the control unit *actually* controls.
- The ALU and the Storage Unit
	- Registers, computers, things that connect em
- The Control Unit
	- The "mind" of the processor that decides what's going on.
	- Basically a big FSM
		- Going between states that invoke different control signals.
	- Synced to system-wide signals (clock, reset)
	- The outputs are just (datapath) *control signals*
		- These are invoked to do things in the data path; I like to think of the data path as a *schematic*
		- That would be SelxA, SelAB, ALUop, LdRA, and LdRB (possibly *done* as well, to say "the FSM is done!")
			- When *done* is 1, the output assumes its "meaning"
			- Also *go* is another way to control the processor ("hey, processor, do things now" or "don't do anything please")
>[!example] Datapath + Control
>![[Datapath + Control.png]]
### Example: Make a processor that calculates $x^2 + 2x$
![[Datapaths.png]]
- This is the schematic given. The inputs and whatnot come from the FSM!
- Only 1 input: X
	- SelxA, SelAB, ALUop, LdRA, and LdRB are all *control signals*
- `LdRA` = load register A. Same with `LdRB`
	- If on, then RA is stored on the rising edge. Otherwise its not
- The sequential parts are the MUX's are possibly the ALU (depends on how we're multiplying)
	- We assume we're using the fat, combinational-circuit-type multiplier
- Implicitly everything is connected by the clock signal.

> When creating the algorithm to do this, note that 

- Algorithm (would this be the datapath? #todo)
	- On the first step, X gets stored into RA and RB. In the second step, we multiply X with itself via the two MUX's 
		- Remember that the ALU has a "pass-through" operation!
	- Now X is in RA and RB *and* the input. Multiply X by itself using any of these sources to get X^2 and store it into RA
		- RA has x^2 now
		- RB still has x (we did NOT toggle LdRB)
	- We can use the X source and RB and add those together to get 2x and store it into RB.
		- But in other scenarios, the source X could be gone! 
		- In that case, we can do x^2 + x, and then x^2 + x + x (i.e. we're adding from RB *twice* into RA)
Here is the final table; running these in order gets the required result!
![[Datapath Example State Table.png]]
- For the state table
	- SelAB is "X" for "dont care" since we are not using B when "copying" A
	- The rest are obvious
 
## The Storage unit thing
- We know of registers