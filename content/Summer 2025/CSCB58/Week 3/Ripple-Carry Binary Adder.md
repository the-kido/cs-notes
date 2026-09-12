Chain a bunch of [[Full Adders]]. Each full-adder is another digit in the result, starting at $S_0$ where S is the final result number.
![[Ripple-Carry intuition.png]]
- The $C_{in}$ is important when trying to do subtraction!

> For addition, that first Full Adder could be a Half-adder since we don't need a carry (the carry will be 0, and as we discussed if Z = 0 then an FA is equivalent to an HA)
> However this makes extending to *subtraction* trivial!

