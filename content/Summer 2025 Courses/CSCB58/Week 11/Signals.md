Remember:
31-26 is always the opcode
25-21 is rs (R or I)
20-16 is rt (R or I)
15-0 is rd/shamt/funct (R) OR immediate (I)
25-0 is address for J type

## `PCWrite` (Write ALU output to PC) and `PCWriteCond` (Write if ALU's zero is true)
> `PCWrite` and/or `PCWriteCond` lets you write ALU output to the PC

For `PCWrite`, if it's on then it'll let PC be written into. 
If `PCWriteCond` is on, then it will let PC write only if the ALU outputs `0`
- This is done via subtraction (if two nums subbed = 0, then zero flag is emitted)
- I do NOT know about less than / greater than tho

## `PCSource` (Mux key for PC -- math or PC+4)
#todo i think it's 2 bits? 
It signals to the mux at the far right whether we read the PC resulting from a jump (comes through the shift left 2) or from an ALU operation (ALU result OR ALU out)


## `IorD` (Chooses between PC or ALU out)
- "Instruction or Data"
- Indicates whether memory address is from the PC or from an ALU operation (ALU out I'm guessing)
	- Yes it's ALU out considering the data goes leftwards into the cycle = needs another cycle = must be stored in register

## `IRWrite` (Instruction Register Write)
- Lets the instruction register be filled with a new instruction from memory (goes directory into instruction register)

## `MemRead` and `MemWrite`
- Lets you read/write into memory / RAM!
- Write data comes from PC or ALU out (remember these are addresses)

## `MemToReg` (The small mux switching from ALU out or Memory data register)
- The register file receives data from memory (Memory Data Register), NOT from the ALU output.  
## `ALUSrcA` (1 bit, chooses if A for ALU is "A" from reg, or raw PC)
- I needa remember A and B stuff near the registers again.

## `ALUSrcB` (2 bit. Chooses if B takes from reg, 4, sign-extended immediate, or shift-left-2 immediate)


## `RegWrite` (Sets whether we're writing into the register)
- We can only write into the register data from memory or from ALU out, so remember that.

## `RegDst` (Chooses what Write Reg picks. rt or rd)

