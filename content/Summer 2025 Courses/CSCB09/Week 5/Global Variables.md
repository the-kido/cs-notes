Two kinds of global variables:
1. Top-level
	1. Whole program
	2. Module only (makes a difference when you split code into many files)
2. Function private
	1. Whole program (not static...?)
	2. Module only (static... I think idrk)

```c
int public_var = 10; // Top-level + whole program
static int module_var = 50; // Top-level + module only

void f(void)
{
	static int private_var = 0; // function private + module only
	// In a sense it's "global" since it lives forever and is not reset until your program finishes.
	private_var++;
	public_var++;
}
```
- That static int is both "global (i.e. static)" and "(function) private"
	- `private_var` is static but for every function call of the type

#goes-in-cheat-sheet-DONE Just the one example cuz it's clear from there what is what. 

