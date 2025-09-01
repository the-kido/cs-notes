> A small number of fast memory units
> Lets multiple values be read and written simultaneously (wait what #todo)

- A collection/array of registers
- Each register has an address (a number for the register)
- Depending on the total number of address bits we can handle for reading or writing, say `k`, then we can have at most `2^k` registers!
	- i.e. if k is 5 bits, you can store 32 registers
- Each register also has a certain `n`-bit width (i.e. each register can hold `n`-bits of info)
	- Each register might be 64 bits in, say, x86-64
	- In MIPS it's `32` bits!

# Functionality
- We can read two registers with this implementation! Register A and B draw from the `Q` outputs of all registers and uses a one-hot decoder to get the selected output. This results in `n`-bit outputs
- For writing we have a `n` bit input to override a register's data with.
- For writing we also have a `k` bit input as well. This is our `Destination Reg.` 
- To know if we are writing we have a `WriteEnable` input. We don't need a `ReadEnable` because we can just decide not to read the data...
![[Functionality.png]]
Reading is trivial. You pass in `k` bits and that represents the address. You can decode that to select the right register's output `Q` and output that. Double that for A and B to read many data simultaneously

As for writing you need write enable true. The destination register address is decoded to enable writing for the specific register. We want to load when `WriteEnable` *and* the decoder agree on a register, so we need `k` AND gates as well. Then the `n` bit input, passed into all registers, finally gets to change the register value.

![[Register File Structure.png]]
