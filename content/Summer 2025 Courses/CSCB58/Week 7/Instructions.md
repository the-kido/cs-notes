Composed of the `opcode` and then everything else
in MIPS the `opcode` is 6 bits and the "everything else" is `26` bits.

Each instruction has the info needed to decode the instruction (know which kind it is) *and* execute the operation (with the args given)

### There are 3 types!
The `opcode` determines the type. If the `opcode` is `000000` then it is *always* R-Type. Otherwise you need a lookup table

Then the [[Instruction Register]] takes in the 32-bit instruction fetched from memory and splits it.

1. R-Type = Register Type Instructions 
	1. Operations on registers
	2. opcode is `000000`
	3. `rs` and `rt` are two source registers
	4. We have 1 destination register `rd`
	5. `shamt.` is shift amount and required if we're doing a shift operation
	6. `funct.` specifies addition, subtraction, etc.
2. I-Type = Immediate field
	1. rt becomes the destination
	2. rs is still the first number
	3. `immediate` is some constant number
	4. If you want to, say, branch (i.e. when u have an `if-else` and you skip the if) if you want to store the next instruction to go to, you use the *signed* difference.
		1. Cuz the immediate field is 16 bits but the address is 32 bits!
		2. Example is on slides
			1. Because all instructions are divisible by 4, you can ignore the first 2 zeros since they are always like that. Boom 18 bits ? #todo
			2. The `Sign Ext.` part turns the 16 bits into 32 bits
3. J-type instructions
	1. Jump + Jump and Link
	2. Jump is literally "jump to an exact place in memory". All of `address` is used to store the address (which are 32 bits)
	3. But we can only manage to store 26 bits (2 to 27) and miss out on the highest 4 bits
		1. So you cannot jump to values with the last 4 bits not all 0



## Linear Datapath abstraction & Instruction Decoding
![[Linear Data Path Abstraction.png|400]]

### R-Type
![[R-Type instruction datapath.png]]
- The instruction goes into the register file (we don't sign extend -- that's for type-I)
- That instruction decides what data to pull from register file. Then we do some MUX stuff, ALU stuff, and the output is chosen to go back into the register file to (but for writing!)
	- We don't need to use Data Memory -- that's for repeating an instruction instead of incrementing. Incrementing PC is also not included



![[I-Type instruction datapath.png]]
- Instruction, sign extension (for the immediate) register file, muxes, alu, mux to store result.


![[J-Type instruction datapath.png]]
- Instruction, sign extension (add 0's cuz the instruction is too short), both muxes (remember we gotta shift by 4 to get the OG operation!), ALU, the right mux, the PC.
