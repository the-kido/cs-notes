Here's a simple function
```c
int square(int x);
```
It REQUIRES a return type, name, and optionally some arguments.

Arguments are *new* local variables, meaning that inside of the function's block, the passed in values are copied into the function's scope. This is when arguments are [[Pointers and Manipulating Memory|Pass-By-Value]]

```c
int my_function(int);

int main() {
	int x = 20;
	int y = my_function(x);
	// the "x" being passed in is different from the one in the function below
}

int my_function(int x) {
	x = 10; // This does NOT change the original X's value. It's totally different from the x inside of main
	return x;
}
```
Once the function's scope is exited, the memory is automatically released (the position where 'x' was held inside of `my_function` can now be used for other data)

## Function Signatures
If you call a function before it's actually declared, C will not know if the function exists and throw errors<sup>note*</sup>
> Below is an example which will throw errors left, right, and center
```c
int main() {
    int y = pow(10);
}

int pow(int x) {
    return x * x;
}
```
> To fix it, you just add the method signature at the top (before you call the method), so C knows that the function will be implemented without panicking! 
```c
int pow(int x); 
// or
int pow(int);  
```

<sup>note*</sup>This is a bit weird but bear with me here:
- C is old, so it doesn't really care if you don't declare the method before using it. However, by compiling with the `-Werror` flag, it will flag the error *correctly*. Refer to [[Compilers and Compiling#GCC|this note]] where I go over the flag.
## Functions which take no arguments
- If you don't include anything inside the brackets, you are still able to add arguments to a function call (which is not what you want) depending on the compiler. So, add `void` instead to signify NO arguments at all.
```c
void my_function() {} // Takes in some arbitrary things; returns nothing
void my_other_function(void) {} // Takes in nothing; returns nothing
```

## Constant Arguments
- Put `const` before a parameter so that the argument will be unable to change within the function.
- This is useful because it'll show whether a function will mutate your values or not.

# Functions in Memory
Take this example Paco gave
```c
#include<stdio.h>
int square(int x)
{
	int s;
	s = x * x;
	return s;
}

int main()
{
	int input;
	int result;
	input = 7;
	result=square(input);
	return 0;
}
```
Here is the order the lockers are stored
1. input
2. result
3. `<return for main>`
4. A set of boxes for `square()` holding params and returned values
	1. x
	2. s
	3. `<return>`
	4. #todo what if memory is allocated dynamically inside `square()`. Then the data wouldn't be under `square()` would it?
5. 