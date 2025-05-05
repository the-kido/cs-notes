
>[!note] How it's called 
>```c
>printf("message") // For just printing a string
>
>printf("A %s formatted message!", "fancy") // For printing messages with data in between. 
>//For every format specifier, add another argument to the function call
## Control sequences

| Control Sequence | What it does                                          |
| ---------------- | ----------------------------------------------------- |
| `\n`             | New line                                              |
| `\t`             | Tab (indent)                                          |
| `\\`             | Represents `\` (since it's used in control sequences) |
| `%%`             | Represents `%` (since it's used in format specifiers) |


> Remember: Unlike other languages, c will NOT create a new line for you! Use \n always!
## Formatting outputs
The %'s are `Format Specifier`'s and are used to format strings with data from variables concatenated in between in a fancy way. Here are a few common ones

| Format Specifier | Used to format...                   |
| ---------------- | ----------------------------------- |
| %d               | Integers (***D***ecimal)            |
| %s               | ***S***trings                       |
| %f               | ***F***loats                        |
| %p               | ***P***ointers (as hexadecimal)     |
| %ld              | Longs ("***L***ong ***D***ecimals") |
| %lf              | Doubles ("***L***ong ***F***loats") |

### Decimal points and whole number points
- It rounds
- it's weird
- strange times.

Remember that pi question in week 1 lecture notes? Well there is this convenient notation to only print out x number of characters of a variable. 
```c
float x = 1234.5678;
printf("Prints 1234.57: %2.2f\n", x); // Rounds; Prints 2 numbers before the decimal, and 2 numbers after the decimal.  
// Since a has 4 numbers before the decimal, it'll print out all 4 numbers. 
x = 1.5555;
printf("Prints 1.56: %3.2f\n",x); 

// Lastly, for ints, you can decide how many numbers it prints
int y = 4; 
printf("%4d\n", y); // Prints 4 with 3 spaces before it.

y = 24;
printf("%04d", y); // Prints 24 with 2 0's before it.
```
#todo play w/ this more. i wanna print 0's before and after the number.

let `a.b` be the precision.
1. 'a' is the number of characters printed. If there are less characters than `a` is, it'll add spaces at the front. If it's too small, it won't actually do anything (it doesn't cut off numbers)
2. `b` is the number of decimals. It rounds at the decimal or whole number we end at.
	1. So `12.567` with the format of `5.0` would be `   13` 
	2. `12.567` with `2.3` would be `12.567`

# The same thing but for integers

In `a.b`, a has basically the same behavior (it'll ensure there are a characters. If there are not enough numbers, add spaces at the start until we hit `a`. If there's too many numbers, we still print them all).
However `b` is more similar to `a` with integers. No rounding happens though. Instead, if `a < numbers`, then nothing happens. If `a > numbers`, then it will print extra `0`'s

So `1234` with `8.5` would be `   01234`
```c
printf("8.5%d", 1234); // Prints what i said abv
```
And `98` with `3.1` would be ` 98`
And lastly 123 with `0.4` will be `0123`
