PROCESSORSSSS

finite state machines - implement "sequences" of operations?

Processors have
1. Something to store values (Registers)
2. Ways to process data (adders / multipliers / calculators)
3. Finite State Machines to control the process

MIPS = a type of processor 
- we may need to trace the whole thing @\_@
- But abstracting, the 3 thingys that processors have just communicate w/ each other
	- The "arithmetic thing" = ALU (also does logic operations)
		- That was Lab 2

## Arithmetic thing (ALU)
- Looks like a chipped trapezoid
- Takes A and B (of the same size $n$), a `func` (of varying size; should be 2 bits in our ALU from lab 2).
- Outputs G of size $n$ and **flags**
	- Overflow 
	- Result is zero
	- Result is negative
> The "control unit" is what uses the flags

- There is no "standard" ALU. Our lab 2 ALU is just "an" ALU but different ALUs may do different things

#### Making a "simple" ALU
- Not a full-fledged one like a MIPS-32 ALU (that we will use after this point)
- Should support Arithmetic and Logical operations
- The $C_{in}$ is the *same* as the one for addition / subtraction. Since the ALU has an adder, we will connect $C_{in}$ to the adder 
- VCNZ are 4 "flags" where each bit has its own meaning
	- V = overflow (did the addition overflow? Is the $C_{out}$ 1?)
	- C = Carry out $C_{out}$
		- We will talk abt V and C later; they *are* different. There are times where we discard a carry out but the result is still valid ( #todo )
	- N = result is negative (easy to make!)
	- Z = if the result is zero (if the out is ALL zeros)

>The "adder" part of the `A`LU  = Simply a computer
>The ALU = A computer and logic to output more stuff with the computer

#### B-input logic 
- A and B are the two inputs; remember!
- Affects how B "changes". We don't touch A though.
	- Similar to how, in just the adder, B was either itself, or *inverted* when subtracting.
	- This "B" input logic lets us do more things with B too!
- G is the result of this mini component. A and B is what we pass.
	- If Y = B (i.e. if sending B through "as is" means addition):
		- G = A + B
		- **Addition**
	- If Y = 111....1 (i.e. Y = -1):
		- G = A - 1
		- **Decrement**
	- If $Y = \bar B$ 
		- Then B is negated but NOT its negation. Remember: $-B = \bar B + 1$ to get the 2's complement
		- G = A - B - 1
		- **Subtraction - 1**
	- If $Y = 0000....0$ 
		- G = A
		- **Transfer**
But the above ignores carry in. Let us now include that: G = A + Y + Cin
#todo Look at the table (When $C_{in}$ is 1 it's basically totally different wow)
- Only 5 of them "mean" something
Okay now we have our B. But what about those outputted flags?

### Flags
#### Overflow
- For unsigned numbers, if $C_{out} = 1$, then there is overflow
- For signed numbers (either A or B are negative):
	- For G = A + B, we have overflow when
		1. A and B have the same sign
		2. G has opposite sign
	- For G = A - B, we have overflow when
		1. A and B have different signs
		2. G has the same sign as B
		- E.g: A = -2 and B = 15. A - B = -17. B is negative; -17 is negative. We have overflow!
	- For G = A + B and A, B have different signs
		- It can never overflow!

> If two numbers added together with different signs can NEVER overflow!
#### Zero Flag (not on the slides)
$Z = \bar G_3 \bar G_2 \bar G_1 \bar G_0$
=$\overline{ G_3 + G_2 + G_1 + G_0}$

#### The "L" flag
- These are for your logical operations. 
- Depending on your select bits S, we choose between the 4 logical operations and *select* between the operations via a MUX
	- $S_1$ and $S_0$ select between the 4 logical operations
	- $S_2$ is another bit that selects between using *logic* operations and *arithmetic* operations
	- So S really carries a lot of weight here!
		- So we have an "Arithmetic Circuit" and "Logic Circuit" with $S_2$ controlling between which two we are using. 

#todo take SS of the block diagram (remember all I/O's and what they mean)

## Multiplication / Division
- Many implementations: We go over the simple ones
#### Array Multiplier method
Multiplication by 1 bit = ANDs
We do Grade 3 multiplication and use the *partial sums* again
- We are NOT reusing one adder: We just have a million FA's
This is your *array multiplier*
- Each column gives 1 bit 
- Happens in 1 cycle! Combinational circuit indeed. O(1) clock cycles
- The size is square though: $O(N^2)$
	- One 4-bit multiplier already needs 12 FA's. That is a lot!
	- 32 bits would be even crazier

#### Accumulator Circuits
- We still do partial sums but we store them in a register. This stores the partial result (and where we update the value)
- We call the register $R$
- The algorithm is as follows:
	- R is 000...0
	- We multiply A by $B_0$
	- Add the result *into* R
	- Shift R to the left 
	- Repeat, but R is no longer 000....0
- More specifically
	- We need a shift register with *parallel load* (as we will update every value simultaneously taken from the adder)
	- Register X and Y are your numbers to add
		- Register Y shifts left by 1 each cycle (that is because thats how u multiply!)
		- The AND gates are your sum
		- Register R and the new sum are added!
		- That updates R 
		- #todo why shift left 1 after the register R? 
	- $1 \times n$ AND gates
	- O(N) steps and O(N) size

#### Booth's Multiplier / Algorithm
- Consider X * 9999 = X * 10000 - X * 1 
- Booth's algorithm tries to find "these" simplifications
- `X * 001111 = X * 010000 - X * 000001`
#todo it is a stand-alone topic and gets its own video.



### What does this mean in the ALU?
- You just kinda place it in there somewhere lol. One of the functions should determine if you're doing multiplication of course
### Datapath
- The ALU and the Storage Unit
	- Registers, computers, things that connect em
- The Control Unit
	- The "mind" of the processor that decides what's going on

### Example: Make a processor that calculates $x^2 + 2x$
- Only 1 input: X
- LdRA = load *something*
	- If on, then RA is stored. Otherwise its not
- The sequential parts are the MUX's and possibly the ALU (depends on how we're multiplying)
	- We assume we're using the fat multiplier
- Implicitly everything is connected by the clock signal


- Algorithm (would this be the datapath? #todo)
	- On the first step, X gets stored into RA and RB. In the second step, we multiply X with itself via the two MUX's 
		- Remember that the ALU has a "pass-through" operation!
	- Now X is in RA and RB *and* the input. Multiply X by itself using any of these sources to get X^2 and store it into RA
		- RA has x^2 now
		- RB still has x (we did NOT toggle LdRB)
	- We can use the X source and RB and add those together to get 2x and store it into RB.
		- But in other scenarios, the source X could be gone! 
		- In that case, we can do x^2 + x, and then x^2 + x + x (i.e. we're adding from RB *twice* into RA)

- For the state table
	- SelAB is "X" for "dont care" since we are not using B when "copying" A
	- The rest are obvious
Okay we have this table great. But what *sends* these signals!!
- The Control Unit 
	- This is just a FSM
	- Always running (synced to clock and reset signals)
	- The outputs are just *control signals*
		- That would be SelxA, SelAB, ALUop, LdRA, and LdRB (possibly *done* as well, to say "the FSM is done!")
		- When *done* is 1, the output assumes its "meaning"
		- Also *go* is another way to control the processor ("hey, processor, do things now" or "don't do anything please")
## The Storage unit thing
- We know of registers

# Logism: Analyze Circuit
- Gives truth tables!!! MAKES CIRCUITS FROM TABLES
- It can even do k-maps ;-;
- AND IT CAN EXPORT TO TeX 

# Lab advice
- Validator and Presence Sensor
- L and R are raise and lower (outputs)
- Wanna make a control system to decide *when* to raise or lower the gate
	- As well as 2 extra circuits for if the gate is at the max or min height
- Edge case
	- I.e. what if you validate a var but no car is there!
	- What if there is a car but it's not validated? 
- Idle state, more states, "car validating state?", "raise the gate state?"
	- What happens if a car left while in the raise the gate state?
	- Think of every possible input change (1 change at a time) for each state.
		- Sometimes a change doesn't matter = we don't care
- Make state diagram, state table, and Logism does the rest!
- 
