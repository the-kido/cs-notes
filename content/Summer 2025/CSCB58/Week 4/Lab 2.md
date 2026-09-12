
# Part 1
## A: Muxes
-  ✅ Create a 4-bit 2-to-1 Mux
-  ✅ Design and Implement an 8-to-1 Mux
## B: Add/subtract
-  ✅ 
## C: ALU
-  ✅ 

# Part 2

##  ✅ Truth table 
###  ✅  Implementation
⚠️ do i gotta use the button or nah? #todo 
## D Flip-flop

| C   | S   | R   | Q      | $\bar Q$      |
| --- | --- | --- | ------ | ------------- |
| 0   | X   | X   | Prev Q | Prev $\bar Q$ |
| 1   | 0   | 0   | Prev Q | Prev $\bar Q$ |
| 1   | 0   | 1   | 0      | 1             |
| 1   | 1   | 0   | 1      | 0             |
| 1   | 1   | 1   | ?      | ?             |
- The last one should just be 0 0 but that makes no sense so we put ? ? instead?

in [[Clocked (Gated) SR Latch]] the ? ? implies QT+1 is 1 and not Q is also 1 so thats why we use the ?

you must be able to show the TA an example where it’s clear the gated SR latch is NOT edge-triggered:
- Yeah, just play around with S and R while the clock is high; the output is changing even though we aren't on the falling or rising edge of C

