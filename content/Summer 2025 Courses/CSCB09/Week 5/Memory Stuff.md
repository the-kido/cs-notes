- Each bit of memory is an array of bytes 
	- Each byte is 8 bits
- An integer is 4 bytes. That should give some context!
![[Pointers and things.png]]
- The `i` takes up 4 bytes and pointers take up `8` bytes. Pointers point to the first address in the bigger "array" that a whole variable occupies

#### Automatic `sizeof` when adding

Doing this:
```c
int a[2]
int* p = a + 2
```
The "2" is actually `2 * sizeof(int)` which C does automatically cuz it knows the array type


### Memory regions:
- Text
	- Stores "code" (function pointers point here!)
- Global
	- Stores global variables
- Stack
	- Stores function calls + local variables + return addresses
- Heap
	- Where manual (de)allocation is done. For data that will task outside of functions
- 