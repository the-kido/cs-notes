`if` does the thing yeah you get the idea mhmhm

if statements run so long the number is NOT 0. "True if not 0"

There are no bools in c but you can use defines to define true as 1 and false as 0. 
```c
#define TRUE 1
#define FALSE 0
```
# Assignments in if statements
```c
int x = 10000;

if (x=0) printf("%d", x); // Prints... nothing! 

if (x=1) printf("%d", x); // Prints 1
```
The above code is totally valid. Note that after an assignment is evaluated, the whole expression is equivalent to the final value of whatever variable you evaluated.

> [!example] Observe this simpler example!
> ```c
>int x = 10000;
>int y = (x=4) + 10;
>printf("%d", y); // y will be 14!

So for the first `if`, `x=0` and so the whole expression is `0` which implies the code within the `if` is not executed. The other one has `x=1` so it does run.

Why is this a thing you can do in c? Excellent question. The reason is because