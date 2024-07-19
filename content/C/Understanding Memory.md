When declaring variables, the computer's memory allocates a container for the size of the variable. The container might still have garbage values inside of it, but it's now owned by the variable.
When we set a value to the variable, the old data is overwritten and our variable now has the expected value!

#self-note in my basic testing, declaring an int just sets its value to 0, although I thought it was supposed to be garbage? Maybe it *is* garbage and I'm just unlucky
```c
#include <stdio.h>
int main(int argc, char* args[]) {
    int x; // There is now a container created for 'x'
    printf("%d", x); // Because we didn't update x's value, this will print some garbage
    return 0;
}
```


## When is memory allocated?
Here are some examples:
- When declaring a variable.
- When returning (the variable is stored temporarily before everything within the method is release/freed)
```c
#include <stdio.h>

int pow(int);

int main() {
    int y = pow(10); // For a bit, the value returned by pow(10) is stored in memory before being copied into "y".
}

int pow(int x) {
    return x * x;
}
```

## References
- https://www.cs.utoronto.ca/~strider/docs/CSCA48_Unit2_Notes.pdf
	- Has useful diagrams too. 
- 