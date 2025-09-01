> A pointer is a variable that contains an address to a bit of memory 

#  Address-of operator: &
 >Gets the address of a value.
 >`&` = "address of"

You can only access the address of *variables*. You cannot set or update the address, only values. You cannot get the reference of an expression like `&(a + 1)` since `a + 1` isn't stored in memory 
# Dereference operator: *
> Gets the value from an address. 
> `*` = "contents of "

There are two ways to use it
- `*(a pointer or pointer expression) = expression 
 or
- `variable = *(a pointer or pointer expression)

Here is an example of using both the & and * operators. 
```c
int my_int = NULL;
// Setting my_int with the = operator
my_int = 10; // my_int is now 10

// Setting my_int with pointers!
int *my_pointer = &my_int;
// The below line reads as "Go to my_pointer's value and access it"
*my_pointer = 20; // my_int is now 20
```

Paco uses parenthesis because it makes wacky lines clearer.
```c
int x = 5;
int* p = &x;

*(p) = *p * *p; // This is real.

*(p) = (*(p)) * (*(p)); // This is real.

```
## NULL
- It's 0. Again. There's, like, 3 ways to write 0 apparently (`0`, `"\0"`, and `NULL`). But in this case it shows, explicitly, that a pointer is pointing to nothing
## Passing by reference
- Memory is allocated for the position of the pointer instead of a copy of the argument. 
- ![[Pasted image 20240719142003.png|600]]
	- `my_array` is an array with 10 items, and inside of a function it is being passed. So, a bit of memory has to be allocated for the pointer to point to the original array. 
- You can have functions with a & before an argument to specify that the value will be passed by reference. Updating the value in the method will also update the value of the variable *outside* the method, too!
```c
// The * shows that "passed_by_reference" is a pointer
int test(int *passed_by_reference) 
{
	*passed_by_reference = 20; // This mutates the "x" inside of main
}
int main()
{
	int x = 10;
	printf("Before: %d\n", x);
	
	test(&x);
	printf("After: %d", x);
}
```
#self-note Not including the & causes a seg-fault. Why?

Some things will automatically pass by reference. Strings are one of them, because they are, fundamentally, just a char pointer. Also, arrays are passed by reference, because copying the array into methods would be a waste of memory.
```c
// Array is passed by reference (the pointer!)
int square_array(int array[10]) // the number after "array" doesn't mean anything
{
	int j;
    for (j = 0; j < 10; j = j + 1)
    {
        array[j] = array[j] * array[j];
    }
}
```
 