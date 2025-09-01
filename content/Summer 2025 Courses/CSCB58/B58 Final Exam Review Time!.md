pMOS looks like line with circle (cuz negation of gate). nMOS no circle

10. b (a isn't multiplied. scam!)
11. 


# Week 5 (FSM!)

State takes an input to go to another state
The input goes into the FSM, changes which d-flip flops are on / off in whatever way, and yeah.
You have a combinational circuit that sets the right D values for the d-flip-flops. The Q's from the flip flops are sent back to the combinational circuit, ready to change depending on the next input

Means 

# Assembly
#todo Remember the order of rs, rt, rd (basically go back to that one quiz I failed miserably on)



# Week 11
Example on slide 31
We doin `addi $t7 $t0 42`
This is a type I instruction. 15-0 is gonna be 42.
This is for the EX step (the math and things)

PCWrite is 0 (we aren't writing into it yet)
PCWriteCond is also 0
IorD is X
MemRead is 0
MemWrite is 0
IRWrite is 0

PCSource i... X? Oh mb im blind
ALUOp is... idk. Okay you can literally say "Add". Great. Yes we are adding
ALUSrcA is 1 (reading from Read Data 1 of register file)
ALUSrcB is 10 (reading the immediate! So that comes from 15. We DONT take the shifted version!)
RegWrite is 0 (we are NOT writing)
