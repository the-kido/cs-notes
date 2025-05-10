> "true" and "false" (1's and 0's) are physically represented by *electrical voltages* (low and high values). 

 0 volts represents:
- Logic-0
- false
- LOW / logical low  
5 volts represent 
- Logic-1
- true
- HIGH / logical high

> Low and high refer to the amount of voltage
> Logic-0 and Logic-1 refer to the engineer's representation of 1's and 0's within circuits. 
> These are equivalent to your *true* and *false* booleans!

Refer to [[Vcc and Ground]]
$V_{cc}$ = logic high (5V's)
Ground = logic low (0V's)

These give "context" for the rest of the circuit connected to them. I.e. the wire connected to ground has a "reference point" to 0V (and likewise for $V_{cc}$)

HOWEVER, if a wire is neither connected to ground or $V_{cc}$, it is said to *not be connected to "anything"* and does not have a "defined" voltage. 

![[Vcc, ground, etc.png]]