## Data structures
A [[Variables|variable]] holds 1 bit of data at a time.
To hold many values, we can use some data structures:
- 1 dimensional array
- [[2D Arrays|2 dimensional array]] 
- [[Array Lists|ArrayList<>]]  
- Map<> (Dictionaries)

Other structures include:
- Stacks
- Queues
- Linked Lists
- Binary Trees
- etc

# Using arrays
### Declaring
```java
// This declares a 1 dimensional array
int [] intArr1 = new int[5];
// java will default the values in the array to 0 b/c it's a primary type "int"

// To set a value, you just index the position
intArr1[0] = 10; // index 0 will have an int value of 10.

// Another way of declaring an array is via curly brackets
// You do not need to "new" anything; just the brackets work.
int [] intArr2 = {1, 2, 3, 4, 5};
```
### ArrayIndexOutOfBoundsException
```java
int [] intArr1 = new int[5];
intArr1 = 10;
System.out.println(intArr[0]); // Will print 10
intArr1[5] = 10; // Will throw a *runtime error* because 5 is outside the range of [0, 4]. Code before will run, but once it reaches this line it will break.
```

### Array Methods
```java
int [] intArr1 = new int[5];
int length = intArr1.length; // Will be 5
// We use intArr1.length INSTEAD OF "string".length(); because an array has a constant length.

```


# Passing arrays into methods
I made an example. Just look at it; it is very straight forward.
```java
/*
@param intArr is an integer array
@return the sum of all the elements
*/
public static int arraySum(int[] intArr) {
	int intSum = 0;
	
	// This is an example of using "for each"
	for (int k : intArr)
		intSum += k;
	return intSum;
}
```

# Misc info
Some common algorithms we need to know:
- Finding Max / Min
- Sorting

Use [[2D Arrays]] for grids and stuff

Arrays are a constant size. 
Use an ArrayList<> for dynamically sizing array. 
Use a Map to hold a pair of data. Like a dictionary.

## What happens if you literally print an array!?
```java
int[] array = new int[1];
System.out.println(array); // this will print a memory location in hexadecimal (base 16)
```