Before getting into pointers, just know that what's inside of a [[CSCA48 (C Lang)/Functions|function]] *stays* in a function. Data inside of one's scope cannot be accessed by other functions (unless we *return* the value, or declare the variable in the *global scope* - outside of every method).

>[!note] Global variables are in the global scope. Local variables are in the local scope
>Example of a local scope includes:
>*  Any code within the {} curly brace delimiters are inside its own scope.
>*  Functions 
>* Conditional statements
>
>There's only one example of the global scope. It's the area where your `#includes`  are; it's outside of everything
>```c
>#include <stdio.h>
>// 
>// 
int x; // Global scope 
>//
>//
>void say_hi() {
>	int y; // Local scope 
>}

# Global variables
> Can be accessed by any function

```c
#include<stdio.h>
int global_int = 5;
// Global vars are stored for the entire program

int main(void)
{
	printf("%d%", global_int);
}
```

Somewhere else in memory are global things stored. Not in any specific function (kind of like when allocating memory dynamically)

### Downside of global vars:
- for long programs, you can lose track of how the var is being changed.
- local vars are easier to debug.
- So we try to avoid them.

### Uses
- Having some data that all sorts of methods will need to affect. (i.e. an image)
- Writing bad code
