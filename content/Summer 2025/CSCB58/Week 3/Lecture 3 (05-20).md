
#### Hierarchal design
- Building high-level parts from lower-level parts ("black box" small units and building up to bigger units)


#todo go over the example with 4 bits. Always remember -1, 0, 8. -8 since they don't abide by the "slide hit invert" rule
- Acc its in the slide right after. `Shortcuts for signed numbers`


There are two ways to add signed numbers. He says this is a common source of confusion
1. You can either add two signed numbers
2. subtract unsigned numbers
	- We can implicitly negate the number and add them?
	- Uhh i'm lost

### Implementation of subtraction circuit
- Invert all the Y bits. Also $C_{in}$ will be 1 (as we add 1 as per the algorithm above)
- If we're adding, then we *don't* want to invert. We *could* use a multiplexer (so depending on if we're adding or subtraction, we simply don't invert and don't add 1 at the start).
- Alternatively we can use an XOR gate. `X XOR 1 = NOT(X)`
	- Let `Sub` be the bit that determines if we're subtracting or nah. Then you do things mhmmh.

### Problem when adding
- Consider two signed 4-bit numbes `0110 + 0011`. The result would be `1001` but that's a negative number! 9 exceeds the range of 4-bit signed intgers (-8 to 7)
- Same happens if we add two negative numbers. 
	- `1000 + 1111 = 0111` but that's positive. Oh no!
- Positive + Negative number will never overflow
- This is called `overflow` 
- 

## Multiplication / Division
- We can shift left to multiply by 2
	- Works for signed and unsigned numbers
- Shifting to the right divides by 2.
	- But this only works for unsigned numbers
- Shift right arithmetic
	- Will be what we talk about next week. #todo 
	- #todo there is another things we gotta watch outside of class time.
- 



