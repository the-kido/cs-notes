Woah it's 36% of my grade

==You SHOULD bring a highlighter==

You will get an aid sheet 


If something was stressed, itll be there
Designing based on a story, assume things and design the circuit that solves the story
"what is SRAM, what is DRAM, what is \~~"

Review slides are good. But also skim the full slides. But also don't just go "yeah, i get it" lol
- He doesn't like to write hard exams. He just wants to make sure you remember the things you can actually apply in the future. It's a K map you can solve, and demonstrates your understanding of it, for instance.

=="The datapath and control stuff might be tricky"==
 (as he said)

## Types of questions
- SA's (1 word answers)
- MC (they seem really easy)
- T/F

Gate Cost (# of )
Gate Cost & Inverter (assuming A bar or B bar isn't supplied, we add a cost for each inverter)
- For the TWO C bars, we dont need to add two cost; we can optimize!
	- Just have C inverted, drive that into the two C bar inputs
	- The final answer should be G(Y) = 9 and GN(Y) = 12 
		- Slides should be updated with correct answer (used to be 9 and 14)

For question 12, its true #todo Gotta review!

Drawing transistor circuits aaaaaa 
- We have 3 lines
	- Vcc
	- Output
	- Ground
- We start with pull-down or pull-up network
	- For pull-down, we consider when the output is 0 (easy for NAND! That's when all inputs are all 1)
	- NMOS and PMOS
	- 3 nmos in series = when A B C are all 1's, we have true
	- For pull-up network, we invert below
		- 3 transistors in series --> 3 transistors in parallel 
		- NMOS --> PMOS
- The triangle at the top (the "arrow") means Vcc / Logic-1

Knowing the boolean expressions of things like Muxes are useful for questions (slide 19)


### Second half
Sequential circuits!

#todo We have to include the propagation delay 😨
- We assume we include it, unless explicitly told otherwise

#todo diff between write data and write reg? Oh nvm im slow


"Integer value stored in memory at address $s0" = "RAM memory, not instruction or registers!"
Why didn't we use sll? We only do that when we deal with PC
- cuz we know all addresses we mult by 4. But in memory (RAM), it might not be word aligned (i.e. you could be loading a *byte* for instance!)
	- #todo important detail there

#todo Also gotta review the last lecture (`ALUSrcB` and its two bits, for instance)


##### twos complement question
Invert all bits, then add 1. That's how you do it!
Oh smart, you can do subtraction
`sub $a1, $zero, $a0`


Know all the pseudo-instructions

