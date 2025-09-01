Has to do with optimizing math problems in your head. 
E.g. 99099 x 5 = 100000 x 5 + 100 x 5 !

Assuming the two inputs are of size `n` and `k`, for the *operand*:*:
1. If digits at i and i-1 are 0 and 1, the multiplicand is added to the result at position i.
2. If digits at i and i-1 are 1 and 0, the multiplicand is subtracted from the result at position i.
The result will always be `n+k` bits

## Calculating w/ Booth's Algorithm
My way of describing it:
1. You have numbers A x B. 
2. Calculate `-B` by 2's complement
3. Within A, for each pair of bits (starting from the *right side*), if it is `10`, then **add** `B` shifted such that the first bit of `B` is parallel to the `1` within `10`. 
4. As for the pair `01`, well you **add** `-B` instead with the first bit of `-B` adjacent to the `0` in this case.
5. Then once you've got through all the pairs, add up all the things you **add**ed and your result is there! So much easier !!

## Implementation
- The circuit to check the 2 bits is *not* duplicated; it's repeated over many cycles! How? By shifting.
	- "Have hardware set up to compare two neighboring bits in the lowest position of A, and looking for mismatched pairs in A by shifting A to the right one bit at a time"

![[bools algo (aids).png]]

