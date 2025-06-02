Adding two 8-bit numbers where the result should also be an 8-bit number might result in a 9-bit number. This is **overflow**
- The "carry out bit' is the bit that would be dropped if there is no enough space to store the value
	- `2^7 + 2^7 = 10000000 + 10000000 = (1)00000000 = 0??`

### Adding chars example
Chars can only store 8 bits (that means the largest number is 255). Adding a char 100 with char 157 would result in a char 1. Here is why:
100 = `01100100`
157 = `10011101 
`01100100 + 10011101 = (1)00000001`

