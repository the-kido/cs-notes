Takes a bunch of inputs of "one language" and outputs a bunch of other outputs in "another language"
- In a sense, the first lab we did was a decoder 

> You can have ANY # of inputs and outputs
 - 5 inputs and 13 outputs is totally valid.
 ![[Decoders.png]]

## One-hot decoder
A common type of decoder!

- Maps binary numbers to one particular output and zero's the rest out
- This means if there is $n$ inputs (think $S_2S_1S_0$) then there are $2^n$ outputs
![[One-hot.png]]
- Technically this makes this "injective" lol (not surjective because the output's domain is far larger than the input)

## 7-segment decoder
- Turns binary number into instructions to display number on a seven-segment display
	- To represent 0 to 9, you would need 4 bit inputs (overshooting to get 16 total input options; 8 is too less)
- The "input" would be the number you want to display; the decoder would output the correct segments to display that number

> Some devices (like the segments in a 7-segment display) are "active-low" meaning they need LOW / 0 input to be on / light up. 
> - It's like... inverted idk why
> - Unlike lab 1 where the 7-segmment displays used active-high, strangely.


### Design
- For the 7-seg display, we only need 10 of the 16 possible inputs. If making a k-map to display numbers, what do we do about the numbers past `0110`? For now, let's label them as `?`
	- Well since those inputs will never occur (and therefore they will output "nothing"), you can choose the output to be WHATEVER YOU WANT. We don't care! They'll never happen. [[Dont Care values|"Don't care"]]
- 
