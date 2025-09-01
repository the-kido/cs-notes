> A larger than [[Register File]] grid of slower memory cells
> Stores most info to be processed by the CPU (Almost like a 2D array)

Problem: We can't store 1 billion registers with a register file!
- I.e a phone can store a billion 32-bit numbers!
- Too many wires and flip flops; each flip flop has too many gates

### RAM! (Main Memory)
- *Main Memory* is a collection of *addressable* memory units
	- Each cell is in units of bytes
	- bytes = 8 bits
	- A word is 4 "sections in memory" or 4 *bytes*.
	- For us, a word is 4 bytes / 32 bits
- Like a register file
- You have at most `2^m` rows where `m` is the bit-length of the address you're passing.
- Each row is `n` bits.
	- So the size of memory is `2^m * n` bits in total
- Different from a register file cuz instead of an array of registers, we have rows of memory units / storage cells
![[Storage Cells.png|300]]
-  DRAM cells are for big memory cuz they are so tiny
	- SRAM is fast tho
### Organization
![[Main Memory Array.png|600]]
- For this example assume `n=3` even though it's not very practical. Usually it's `n=8`(a byte)
	- Usually 4 of the 8 bit rows are accessed as `words` as we defined above
- Anyway the *wordline* determines which row (a *byte*, 8 bits, in MIPS, that we we are reading from)
- The *bitline* is attached to the cells of the wordlines and sends them to their output all nicely.
- Cells by default output 0 when the wordline connected is inactive (refer to the diagrams above), but if a wordline is active and a cell outputs `1` into the bitline connected already to `0`, we get a short circuit.
	- Solution? [[Data Bus]]
	- If we want to read from the cell, we pull, from the bits into the bitline, through a tri-state buffer
		- If reading, we set `EN` for the buffer to true such that everything else is disconnected = no short circuit!
- 
