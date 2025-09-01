> Moore machines -> Outputs only rely on the state you're in
> 
> Mealy machines -> Output relies on current state *and* current input
- Problem: the output's delay is not constant (reading from the flip flops and doing things depending on that... that is all "constant" time)
	- Combinational logic's output changes instantly, but flip flops are not. You'd have to wait for the flip flops. 
	- Therefore you might take more than 1 cycles and have unknown times
![[Moore vs Mealy.png]]
- Note that Mealy machine diagrams include outputs for certain inputs. With many kinds of inputs, you may have different outputs while going to another state. 
	- The input may change the state *alongside* the output whereas with Moore Machines, the input only changes the current state. 