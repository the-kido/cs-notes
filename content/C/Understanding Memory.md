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
- When a function copies arguments (pass-by-value)
- When returning (the variable is stored temporarily before every local variable within the method is release/freed)
	- This means if you return a pointer to a local variable, the pointer will actually point to a freed bit of memory (so it is redirected to NULL)
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

## Dynamic memory allocation
This is required when you need to reserve space for some data without having a direct reference to it. Otherwise, once you leave the scope that your volitile memory was allocated, it will be freed!
When would you need this? Well think about creating a [[Linked Lists|linked list]]. 
- You have to temporarily create a node, and then make it pointed to by another node. 
- However, whatever temporary variable you're using is keeping track of the memory it allocated, so outside of scope it will free it. You don't want that! Otherwise, the data will get deleted!!!

#### `void*` calloc(`count`, `size`)
- Allows memory to be reserved on-demand! This memory is not constrained by any scope and will never be freed by itself (you gotta do that lol)
- `sizeof()` gives the size of data structures and compound data structures
- Lose the pointer? Well, that memory is never going to be released then.
#### free(`pointer`)
- If you use `calloc` but don't have a complementary `free`, you're doing something wrong, and are gonna have a memory leak


## References
- https://www.cs.utoronto.ca/~strider/docs/CSCA48_Unit2_Notes.pdf
	- Has useful diagrams too. 

