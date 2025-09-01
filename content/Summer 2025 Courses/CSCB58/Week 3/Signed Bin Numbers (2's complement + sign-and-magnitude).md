Can either be represented with 
1. Sign-and-magnitude
	- There is a separate bit that determines the sign for the rest of the number
	- 1 = negative. = 0 positive.
	- For an 8-bit number, the range would be from $[-255, 255]$
2. Signed numbers (2's complement)
	- For an $n$-bit number, the $2^n$ term is negated. This is the **Most significant bit (MSB)**
		- For an $8-$bit number, the number $10000000$ is actually $-256$
	- Every other digit is positive

>[!example] Represent $-18$ as a 6-bit number via Sign and magnitude + two's complement (signed)
>
>For sign-and-magnitude, the sign would be 1 (it's negative). The other 5 bits would be `10010`
>
>For 2's complement, it would be `101110`
>`100000` = -32
>`01110` = 14
>-32 + 14 = -18, as required!
>

## Shortcut to converting a binary number to two's complement
> Taking the 2's complement of a number negates it!

Idea: $\text{2's complement} = \text{1's complement} + 1$

To get 1's complement, you invert every bit
![[1s complement.png]]
Then you just add 1
![[2s complement from 1's.png]]

> Corollary: $X + \operatorname {2'scomplement}(X) = 0$

So to be clear, the 2's complement of $X$ is just $-X$

### Shorter shortcut
> Start going through each number from the right side. Once you hit a 1 from the right side, you keep that number and flip everything left of it.

## Common negative values
For an $n$-bit number:
-  `-1` is always gonna be `111111...`
- $2^n -1 = 0111\dots11$
- $-2^n = 1000\dots11$
- $0 = 000\dots00$

