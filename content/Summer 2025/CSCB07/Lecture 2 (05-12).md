# review

If you have the head of a list, the user could manipulate the head in unintended ways or uninformed ways, undermining the developer's intentions! Therefore we want to control how much things the user can manipulate.
Also, think of a stack: a stack is like a list, but if you return the head of a stack, the user can technically manipulate the start of the stack even though they shouldn't be allowed to!

cuz oop has encapsulation, we can constrict access to certain parts of a class (i.e. the *head*)
we make the head a field of the class and make it **private**

again: reference data types = NOT a primitive data type

#### memory things
local variables r in the stack
- A collection of FRAMES where each frame is a function call.
objects r in the heap
- `new` will always create something in the heap
- All local variables and whatnot in each object is also stored in the heap.

(slide 11 things from the first slide deck)
#todo u can ask someone for their digitally-drawn diagram but I took a photo too
- but i would personally add a box over the 3 variables to indicate that they are in the same "frame" (the stack is not meant to be 1 frame that is disingenuous)



#todo When using eclipse, u should uncheck that button under "module"
You SHOULD create packages.


```java
public class Test
{
	int defaulted; // This will be 0!
	public static void main(String[] args)
	{
		int a; 
		a += 1; // Will give an error; a was not initialized.
		// However as a field of a class, 
	}
}
```

Slide 17 talks abt primitive types n things




```java
public static void increment(int n)
{
	n++;
}

public static void main(String[] args)
{
	int a = 1;
	incremenet(a);
	System.out.println(a); // This is 1. Why?
}
```

In the stack we have "main" with a as 1.
Then we create a new frame with a new local variable, `n`, with the copied value of `a`. (There is no association between `a` and `n`.) The local `n` is incremented but `a` is chilling in `main` without being touched. 


How about reference types?

```java
public class Driver
{
	public static void increnement(Point p)
	{
		p.x += 1;
	}
	
	public static void main(String[] args)
	{
		Point q = new Point(3,3);
		increment(q);
		System.out.println(q.x); // Will be 4
	}
}
```

First, `q` is stored in the heap alongside it's `x` and `y` values. When we call increment, we copy the value of `q` to `p`, but recall these values are *pointers*. So now within the frame of `increment`, `p` is pointing to the same object as `q` is. Therefore incrementing `p.x` will affect `q.x` within the frame of `main`.


static = common to all instances of a class. mhmhmh
static field: shared between all instances


```java
int[] a = new int[3]; // creates 3 boxes in the heap, all wit h the default value of 0!
System.out.println(a.length); // returns the value of the length of an array!!!!!
// It is a field of the "class" that is an array.

a = {10,2,3,4,5552352,63,63463,41,423,7,97,346,}; /// Also initializes the array but more succinctly

int[][] array2D = new int[3][4]; // 3 arrays of size 4!
int length = array2D.length; // Will be 3: array2D is 3 arrays with their own content
```
Think of `int[]` as one entire "data type". Notice this is NOT primitive, so it is a reference type

#todo where do static variables live in memory (stack, heap, somewhere else?)



## File i/o
#todo I/O examples will be given on quercus

#todo Also you should read the slides cuz they will be far clearer about everything
Scanners get input from le console.
`Scanner scanner = new Scanner(System.in);
