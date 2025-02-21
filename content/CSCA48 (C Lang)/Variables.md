An ATM will store data into the RAM, which stores le variable while the program is running. 
It could be stored permanently on a server or something

What is a variable?
- A memory location in the RAM
- Do not fly on the Boeing 373 max 

They store [[Data Types]] and cannot be changed in C during runtime 

### In Memory (C)
- When reserving space for a locker which is "empty", it really has junk values in there the previous [[Understanding Memory#The Locker Analogy|locker]] owner didn't bother to clean out. Sometimes it's there. Sometimes it isn't
```c
#include <stdio.h>
int main(int argc, char* args[]) {
    int x; // There is now a container created for 'x'
    printf("%d", x); // Because we didn't update x's value, this will print some garbage
    return 0;
}
```

- Variables are reserved in memory, yes. However the name is nothing more than a utility from the compiler to you in order to work in English and not bits and bytes. 
- That is, when storing a variable in memory, it is important to remember that the name is NOT stored in memory alongside whatever the variable is storing. 
- The SAME goes for the data type. Compilers will know the type, but it is not stored inside of the locker. It is simply tagged like the name is.

```c
int x;
x = 5
```
- First line:
	- There is a box with the tag name of `x` and it is of type `int`. These details are not stored in said box, however.
- Second line:
	- As Paco says it. "This literally means *go to the box tagged with x, and put a 5 inside it.*"
	- If there was a more complex expression to assign to `x`, it would be evaluated first and should be of type `int` as well.
		- **Assignments** put values (data) inside boxes
