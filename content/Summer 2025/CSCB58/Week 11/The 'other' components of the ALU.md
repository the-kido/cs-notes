ALUOut: For branch instructions, it stores the *new address* for the PC if branch cond is satisfied (i.e. if zero is signaled by ALU)


Shift left 2 - multiply branch offsets / jump offsets by 4 to make em byte addressable 

Sign extend: for I-type, we turn 16-bit into 32-bit

Memory Data Register stores fetched data from memory read! Stays until "register write" occurs!