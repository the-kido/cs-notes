> Idea: [[Array Multiplier]] except instead of several rows per addition, we shift what we are multiplying and shift the result, and *add* it to the previous result. 
> Basically you would clock `n` times and output to a result of size `2n` 

We still do partial sums but we store them in a register. This stores the partial result (and where we update the value)
- We call the register $R$
- The algorithm is as follows:
	- R is 000...0
	- We multiply A by $B_0$
		- Add the result *into* R
	- Shift R to the left
		- Move everything right and make the first bit 0.
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