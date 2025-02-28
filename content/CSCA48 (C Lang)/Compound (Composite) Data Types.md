>The bundling of info together into a "compound" or "composite"
- They have "fields" (1 "component" of the data type)
Why is it useful? It simplifies many complicated things into one "thing" via "duct tape".

Although there aren't classes in C, there are Composite Data Types, which are an amalgamation of previously made data types!
```c
typedef struct Restaurant_Score // We are declaring a new type! 
{ 
	char restaurant_name[1024]; 
	char restaurant_address[1024]; 
	int score; 
} Review; 
```
- `typedef` signifies we are defining a new type. 
- The type is a composite (or `struct`). 
- The name of the composite is `Restaraunt_Score` (because we are using typedef this isn't really required though)
- All `Restaraunt_Score`'s contain the 3 fields inside of it (name, address, and score)
- `Review` is the name of the data type (so this is like the class name)

# typedef

```c
typedef struct Restaurant_Score // We are declaring a new type!
{
    char restaurant_name[MAX_STRING_LENGTH];
    char restaurant_address[MAX_STRING_LENGTH];
    int score;
} Review;  

void main()
{
    struct Restaurant_Score a;
    Review b;
}
```
- typedef gives an alias to `struct Restaraunt_Score`. Instead of typing `string Restaraunt_Score` before declaring a variable using that data type, we can just use `Review`
- The reason why we still have to write `struct Restaurant_Score` is for compatibly reasons because, remember, this language is *ancient*.

## Accessing fields
- You can use the `.` operator to access a field from an object
	- `my_object.field`
- However if you are trying to get a field from a pointer to an object, you must use the `->`operator to go to the object and access the field. It is the same as doing the below, too
```c
typedef struct Object
{
    char str[10];
    int number;
} Object;

Object obj = {"test", 10};
Object* ref = &obj;

int number_1 = obj.number;
int number_2 = ref->number;
int number_3 = (*ref).number;
```

Paco says you should use the -> arrow notation instead of just dereferencing and using the `.` syntax as good practice. No real other reason. Semantically `->` just makes more sense.
```c
obj_pointer->item; // Better

(*obj_pointer).item; // Worse
```
# Memory
- The nice thing about C, is that once a new type is declared it gets treated just like any other type. Because structs have a constant size, they are just the size of their fields combined!![[Pasted image 20240721145411.png]]

- Assigning one variable to another of the same data type will "copy" each field
```c
Review r1;  // assume this has all sorts of data
Review r2;
r2 = r1 // Now the name, house address, and score are copied 1:1 into r2 
```
![[Pasted image 20240721155453.png]]
- The entire object is copied. Everything about it!
- This is also the case when you pass it into a function; the parameter is a copy if what was passed in.
- Remember that things like arrays are not fully copied! Only their pointer address is copied (as that is what an array is, a pointer. And what do pointers store? The *address*)

## Useful resources
- https://www.youtube.com/watch?v=CI9dRTvzgqE
	- Explained the point of typedef really well and quickly