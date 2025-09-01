1. Each locker has a name and data type
2. There is a locker for every argument, local variable, and return.
3. Always surround boxes inside the function they are local to.
	1. If the memory was dynamically allocated, it won't be in any function!
4. For arrays, the first box will have the name and type of array. then the preceeding boxes are implied to have the same type.
	
#todo if returning void does it return anything / do we make the memory box
ans: NO box if returning void.
