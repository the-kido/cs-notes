 
# Tutorial
- always initialize pointers to NULL when declaring them!
- always initialize the value of the pointer after you allocate it (if you need to)
- always check if there is enough memory. `calloc` returns NULL if there's no memory.
	- In the assignment there WILL be test cases for memory and null pointers.
	- So check for null pointers everywhere and anywhere, all of the time.

Testing
- Test functions b4 using them. If all the individual functions work then you good.
	- I.e. if function B uses A and B isn't working, it could be A that is wrong.
- Test:
	- Reasonable inputs
	- Unexpected inputs (i.e. NULL)
- Every test should identity the corresponding correct result. 
	- You can't test something you don't know what it would do.


Exercise time:
- test `findPrimes` first

| Test Case          | Input                           | Expected Output               | How to Check        |
| ------------------ | ------------------------------- | ----------------------------- | ------------------- |
| Array of size 0    | a pointer to an array of size 0 | an empty array                | Read over and check |
| Array of size 1    | --                              | [2]                           | \| \| \|            |
| Array of size 100  |                                 | An array of 100 prime numbers | \| \| \|            |
| Array of size 1000 |                                 | 1000 prime numbers            | \| \| \|            |


- then `lastDigit`

| Test Case        | Input      | Expected Output | How To Check        |
| ---------------- | ---------- | --------------- | ------------------- |
| 1 digit          | 0          | 0               | Read over and check |
| medium length    | 102        | 2               | \| \| \|            |
| long length      | 11111133   | 3               | \| \| \|            |
| negative numbers | -12        | 2               | \| \| \|            |
| -                | -1         | 1               | \| \| \|            |
| -                | -123456789 | 9               | \| \| \|            |

- then `countDigits`

| Test Case       | Input                                      | Expected Output                             | How To Check        |
| --------------- | ------------------------------------------ | ------------------------------------------- | ------------------- |
| array is size 0 | `[]`                                       | counts should be empty                      | Read over and check |
| array is size 1 | `[131]`                                    | count should be `[0,1,0,0,0,0,0,0,0,0]`     | \| \| \|            |
| array is medium | `[1,2,3,4,5,6,7,8,9]`                      | count should be `[0,1,1,1,1,1,1,1,1,1]`     | \| \| \|            |
| array is big    | `[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]` | count should be <br>`[1,2,2,2,2,2,2,1,1,1]` | \| \| \|            |
