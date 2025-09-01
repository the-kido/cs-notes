## The bad way
> Idea: Load register + Ripple Carry Adder that adds `...000001` every time.

![[Adder idea.png]]

### 4-bit counter example
![[4 bit adder.png]]
#todo I should try to remember how exactly this thing works (tracing)
...hmmm this is quite expensive

HOWEVER, like in Minecraft (think of copper bulbs), chaining T-flip flops is a better way!
## The better way
![[Chaining t flip flops.png]]
- The out of the d-flip flop goes into a XOR gate. If Q is true, then T has precedent
	-  If T is on, then the flip flop will alternate from 1 and 0 every clock.
		- Remember, if 1 input in a XOR gate is on, then the other that is passed outputs in its *negation*
- The chain follows this pattern: when a Q falls, its next Q rises

![[Flippy Floppy Counter Implementation Bad.png]]
- Since the flip flops aren't relying on the clock directly, the timings are *asynchronous* (the computation is not done at the same time as when the clock pulses)
Let us make it synchronous! 
![[Synchronous Counter.png]]
- Each flip flop is connected to `Clk`
- The first flip flop will *always* invert each clock. The second flip flop will invert only if the previous flip flop is going from 1 to 0. (i.e. `10` to `01`). 
	- Why? Well if Q is 1, write = 1, then T will flip from 1 to 0, and the AND gate will be satisfied, so the second bit will flip from 0 to 1. Wow.
![[T flip flop, sync, intuition.png]]
- The idea is that if Q1 and Q2 are high, then the AND gate going into Q3 will be high, and Q1 and Q2 will go to low after Q1 flips, causing Q2 to flip.
#todo I still do not get this @\_@
