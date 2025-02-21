> The process of storing and clearing memory with it persisting outside of the scope we create it in.

This is required when you need to reserve space for some data without having a direct reference to it. Otherwise, once you leave the scope that your volatile memory was allocated, it will be freed!
When would you need this? Well think about creating a [[Linked Lists|linked list]]. 
- You have to temporarily create a node, and then make it pointed to by another node. 
- However, whatever temporary variable you're using is keeping track of the memory it allocated, so outside of scope it will free it. You don't want that! Otherwise, the data will get deleted!!!

#### `void*` calloc(`count`, `size`)
- Allows memory to be reserved on-demand! This memory is not constrained by any scope and will never be freed by itself (you gotta do that lol)
- `sizeof()` gives the size of data structures and compound data structures
- Lose the pointer? Well, that memory is never going to be released then.
- What it does is
	1. Find an available place in the heap of the size requested
	2. Reserves it for the program
	3. Clears out whatever is there (exclusive to `calloc`; `malloc` will be efficient and not clear it out)
	4. It returns the pointer of the new chunk of memory
- Calloc does not store a "variable". There is no attached name, only a pointer (so you can think of the pointer as the means to access the data whereas with variables the "name" of the variable is the alias to access the data)

>[!note] After using `calloc`, check if the returned pointer is `NULL`. If so, that means memory has run out, so ensure the code responds appropriately.

![[Pasted image 20250215115232.png]]
- Observe how the dynamically allocated memory of `9871` is far away from everything else and doesn't have a name. It still has a type, however.
- The only way to access it is via `new_node` as it points to it.
- While the `new_node` pointer may be freed after `new_Review_Node` is done calling, `9871` will have something else pointing to it (i.e. the head node).
	- SO, the head (1 variable) is able to point to *many* variables in different places. That is why we use dynamic memory allocation. Otherwise each locker would need its own variable in main.

#### free(`pointer`)
- If you use `calloc` but don't have a complementary `free`, you're doing something wrong, and are gonna have a memory leak.
- We cannot free memory twice (it'll crash)
- We cannot free unowned variables (i.e. `NULL`)
- We cannot free variables (or pointers that point to variables)


# The heap

The heap is a big pool of memory that is free for programs to use on demand. Somewhere there it will found space of the right size and reserved for my program. `calloc` will return the pointer of the memory stored in the heap.

>[!note] ALWAYS initialize pointers to `NULL`

