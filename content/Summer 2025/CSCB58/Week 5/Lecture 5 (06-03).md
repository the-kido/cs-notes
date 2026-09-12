### Registers
Register = bank of flip flops
- each flip flop stores 1 bit; registers allow you to store more than 1 bit (like 32 bits)
- An n-bit register has n flip flops
- "collection of flip flops"

#### Shift register
To store 16 bits, we can input our 16 values one by one and *shift* them once per new input (once each clock cycle)
- This lets you store the 16 bits we want!

#### Load register
- n parallel inputs to each flip flop. 
- We can store the intended value in just 1 cycle
	- Right on the rising edge, the values will be stored!

But sometimes we just want to *keep* the value and not change it every cycle. How to do that? Multiplexer:
- EN (enable) selects between the two modes
- When EN = 1, we load D (our input D goes into our load register)
- When EN = 0, the previous Q is fed back into the OG register (basically refreshing with the same value, thereby changing nothing)
(in the slide w/ this stuff, it just used 1 d-flip flop but add more and you get a load register)

Shift vs Load
- Shift registers are *serial* (1 bit at a time)
- Load registers are *parallel* (loads bits all at once)
	- This is bad cuz it makes things complexity (and *delay*) or have lack of area 
	- So usually serial is better

PCI uses parallel. PCIe is serial. However PCIe is faster! And yet less pins!!

Registers > Cache > RAM > Disk 
- in terms of speed; opposite way in terms of "max storage"
### Counters
#### Ripple Counter
The first implementation is using an adder and a bunch of registers. But it is very expensive.

We use T flip-flops instead!
- T = 1 means T is inverting the input
Think of copper bulbs

When a Q falls, its next Q rises
- Since the flip flops aren't relying on C directly, the timings are *asynchronous* (the computation is not done at the same time as when the clock pulses)

When a Q is 1, it's basically "loaded" to switch the next number when it's signalled

#### Synchronous Counter 
- Each clock is connected to `Clk`
- But now T will only invert if the previous Q is true *and* the previous bit will invert
	- i.e. on the first clock, when T is 1, Q is 1. 

### Counters w/ Load
#todo lowkey blanked the flip out

## States n things
> State Diagrams

The numbers above the pointy arrows are your inputs.
Then u name the states mhm
- Names are surrounded by "" quotes just for clarity


In State Tables, we give every state name an associated number (a bin num for each state)

## FSM
- A finite number of states and transitions 
- Transitions are triggered by *inputs* in our case
	- But if inputs keep you in the same state, that is *self transition*
- Used for logic circuits that actually perform a behaviour
	- "Tickle me Elmo"

## Designing a circuit *from* a FSM
- 15 states = $log_2(15)$ bits to store them $= 4$ bits
- The flip flops hold the current state
	- the state logic takes the old state + new inputs and *updates* the state in the flip flops
	- Depending on the state, we output something

## Kinds of FSMs
Moore machines -> Outputs only rely on the state you're in


Mealy machines -> Output relies on current state *and* current input
- Problem: the output's delay is not constant (reading from the flip flops and doing things depending on that... that is all "constant" time)
	- Combinational logic's output changes instantly, but flip flops are not. You'd have to wait for the flip flops. 
	- Therefore you might take more than 1 cycles and have unknown times

#todo Define block diagrams (like the blue and green blocky abstract thingys)

## Timing things
- Going from the state 011 to 110 changes *two* bits, one of which can change *first*
	- You might temporarily be in the state of 111 or 010 which is read by the combination circuit (which doesn't rely on clock timings!)
	- This is a *race condition* and are often unsafe 
	- In the example outputting high when`111` occurs, going from 011 to 110 may cause problems, so we have to accommodate that
		- 010 is not a problem cuz it's not the `111` we seek
- 
