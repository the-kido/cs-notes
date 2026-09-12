
- To execute a program we:
	- Load into memory the instructions
	- Get the location of first instruction
	- Go through the instructions sequentially by the CPU
- Instructions = A binary string of bits (a.k.a. control word)
	- For MIPS it's 32 bits.
	- Control Words for the control Unit to know what's up
- The processor's infinite loop is as follows:
	- Fetch instruction from memory
	- Execute it
	- Go to the next instruction
- How 2 know what instruction to run? Program counter!

## Program Counter (PC)
- A special register
	- The program counter holds the *address* of the instruction we are going to run.
- Each instruction is 4 bytes, so to go to the next instruction, PC is incremented by 4.
- PC can only be 0, 4, 8, etc. (word aligned)
	- The *register* has its rows of size `8` each
- It's what loads the new instructions from 
