```c
#include <stdio.h>
void map(int arr[2048], int (*f)(int x)) {
    for (int i = 0; i < 2048; i++) {
        arr[i] = f(arr[i]);
    }
}

int add(int x) { return x + 6; }
int multiply(int x) { return x * 6; }

int main() {
	// Another way of representing the map function
	void (*map_func_1)(int x[2048], int (*f)(int x)) = map;
    // Using typedef instead
	typedef int (*control_func)(int x);
	void (*map_func)(int x[2056], control_func func) = map;
	
	// Drop the int or the int x for no return / no args
    int (*func)(int x) = add;
    int new[2048];
    new[0] = 10;  new[1] = 31;  new[2] = 0; 
    map_func(new, func); // 16, 37, 6
    for (int i = 0; i < 3; i++) printf("%i\n", new[i]);
    new[0] = 10;  new[1] = 16;  new[2] = 0; 
    func = multiply;
    map_func(new, func); // 60, 96, 0
    for (int i = 0; i < 3; i++) printf("%i\n", new[i]);
}
```
The all in one example!
#goes-in-cheat-sheet-DONE 