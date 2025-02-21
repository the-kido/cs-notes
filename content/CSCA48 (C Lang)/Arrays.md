A [[Containers|container]] which reserves many boxes of 
	- A specific type
	- A fixed size
The `index` is an "offset", or the # of boxes *after* the start of the array.
-  `arr[i]` is equivalent to ``*(arr+i)``

>[!note]
>You can make an array of any type with square brackets after the name (i know, it's a bit cursed compared to Java)
>```c
>int int_array_1[10]; // an int array of size 10
>int int_array_2[] = [1, 2, 3, 4];
>```

There is only 2 things you can do with arrays; get and set data. That is all. No fancy methods like in python
```c
int_array[10];

int_array[0] = 10; // Sets the first value to 10
int_array[9] = 20; // Sets the last value to 20
```

> In memory, arrays are just a bunch of consecutive boxes. Each box is sized depending on the data type of the array.
> 
> When making the memory model, the first box of the array is tagged with the name with the type `char[]`; the succeeding boxes have nothing! 

## Things to remember
- You CANNOT directly set the value of an array to something else. 
	- For instance, if we have an array `int array[10]`, we cannot say `array = other_array`. The only thing we can do is initialize it with the `[]` syntax.
		- ==No assigning things to arrays!==
	- We *can* update what it points to, however!
		- `*arr = *other_array` works!
		- #todo why doesn't `*arr = other_array` work when I thought arrays where just pointers? 
- Just like with other variables, arrays will not set default values and will be full of garbage values.
- In C, you can just access indices **OUTSIDE OF THE RANGE** (whyyy)
	- You can also access negative indices. Pray you don't hit a segfault though.
![[Pasted image 20240719103308.png]]
- The above example is really good at demonstrating junk values. `test` was never set, however the third index of `arr` *was* set (by accident; it's outside of the array's size!), and it spilled over into the container of memory that `test` has now been allocated too! The old data doesn't get reset!!!
### `Segfault`
A `segfault` is caused when you access memory that is allocated to another program. If you fetch an index of an array that is far too big, and it hits memory stored by another program, you'll run into a segfault.
However, if the memory is owned by you, arguably worse things will happen. It will just read that info that you've reserved whether intentionally or not.
> This means you can positively or negatively index
### Array and pointer relation
- The head of an array is just a pointer to the start the list. Using \[]'s after a pointer goes to the bit of memory at that index *after* the head.
```c
int array[3];

int *also_an_array = &array;

// These are ALL the same
also_an_array[0] = 1;
*(also_an_array + 1) = 3; // This uses pointer arithmetic
array[2] = 5;
```
This mean's it is also valid to pass an array with `int *array` instead of `int array[]` because they are the same

## Pointer arithmetic
- Instead of indexing with \[]'s, we can offset pointers by adding onto the pointer of the head of the array.
```c
int array[5]; // Allocate 5 integer's worth of data

```
