> D latches are the easiest way to store a bit, and control if it can be changed or not (with C)

The design of the [[Clocked (Gated) SR Latch]] is good but those "forbidden states" really suck. Lets get rid of them!
- We force S and R to be opposites of each other (i.e. D being on means out is on; D being off means out is off)
- D = *Data*
D latches are always clocked (otherwise why would you have all that tomfoolery going on for a straight line from [[Intuition Behind Storing Values]])
- The clock lets you change the data once during the rising edge, and store it on the falling edge. 
- And, unlike unclocked latches, we know exactly how many times the data has changed (once per clock!)

Finally, a solution to our storing issue…

![[D latch.png]]
…but not for our *retrieval issue*

## Problem: Retrieving D-latch data (and Transparency)
When the D-latch is clocked, the data Q also changes immediately depending on D. However, if Q changes immediately, and we have something like this:
![[D-latch nooo.png]]
Then $D$ is set to $\bar Q$, So Q = $\bar Q$ and Q flips. However, C is still *true* and therefore changes can still be made... uh oh we have unstable behaviour again :( 
![[D latch unstable.png|500]]

This makes the D-Latch **transparent**:
> Any changes to its inputs are visible in the output when Clocked (C=1), like a regular wire

$\therefore$ the *output* of D latches should not have a connected to its own input if the logic going from out-to-in is on the same control (clock) signal
- The path from out to in could be as simple as the inverter from above, or a proper combination circuit. Regardless, the same problem can arise

How to fix this? [[Flip Flops]]