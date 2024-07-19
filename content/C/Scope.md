Before getting into pointers, just know that what's inside of a [[Functions|function]] *stays* in a function. Data inside of one's scope cannot be accessed by other functions (unless we *return* the value, or declare the variable in the *global scope* - outside of every method).

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

