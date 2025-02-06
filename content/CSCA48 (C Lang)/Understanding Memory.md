When declaring variables, the computer's memory allocates a container for the size of the variable. The container might still have garbage values inside of it, but it's now owned by the variable.
When we set a value to the variable, the old data is overwritten and our variable now has the expected value!

### The Locker Analogy
- Lockers are numbered and ordered numerically. 
- They have to be "reserved" such that no other program can them.
- Keys (pointers) are assigned a locker they can access, and are stored in its own locker. 

Details
- By default these lockers have junk values after they are reserved. 
	- `int some_int;` would have some junk value.
	- When a program finishes and that memory is freed, why put in the effort to clean out the junk / zero out the data at pointers?
- Each locker has a name and data type (the name is not stored in the box)
	- The name is like a pseudo-name for the # of the locker but is NOT stored!
- (make sure to reserve data for the returned value!)
- memory for functions are only reserved when we call said function
	- Right when calling a function, it'll reserve:
		- boxes for the parameters, variables, and returns
> When looking at a CPU's L1 or L2 cache, you can see the grid-like locker structure that memory is stored in. 

>Refer to how [[Variables#In Memory (C)|variables in memory]] initially assume junk values
## When is memory allocated?
Per function, memory is automatically allocated to:
1. Variables
2. Local Variables (in order of when they first appear)
3. Return values



Here are some examples:
- When declaring a variable (like in functions).
- When a function takes in parameters to copy in arguments (pass-by-value)
- When returning (the variable is stored temporarily before every local variable within the method is release/freed)
	- This means if you return a pointer to a local variable, the pointer will actually point to a freed bit of memory (so it is redirected to NULL)
`Example showing how memory is stored temporarily`
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

`Example showing how returning a pointer to a local variable really just returns NULL`
```c
int* test(int num)
{
	// This WILL give a warning by the super smart compiler
    return &num; 
}

void main(void)
{
    int* thingy = test(10);
    printf("%p", thingy); // This points to NULL. So, 0000000000000000
}
```

## Dynamic memory allocation
This is required when you need to reserve space for some data without having a direct reference to it. Otherwise, once you leave the scope that your volatile memory was allocated, it will be freed!
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


