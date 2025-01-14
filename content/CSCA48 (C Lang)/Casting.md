This topic is pretty annoying, because it's easy to forget when code implicitly casts or when it's required to explicitly cast. 

For example, setting a float into an int variable will implicitly cast and floor the value
```c
// Float to int example
float a = 102.6414;
int b = a; // b will be 102

// Int to float example
int a = 12;
int b = a; // b will be 12.000
```
#todo why does `printf("Int version of float: %d\n", 10.41f);` print out -2147483648!?!?


>[!note] It's good practice to always know when casting is happening; it should be explicity intended to happen!

## When does implicit type-casting happen?
The better way to think about it is \*when must I *explicity* type-cast?*
You only use the () round brackets to explicitly cast when there is a chance of loosing information. 
- [p] Going from and int to float is harmless. Implicit cast! 
- [c] Going from an int to an unsigned int looses the sign! Explicit cast. 

Also, to avoid unintended behaviour, you might need to explicitly cast, too. For instance, 5/2 results in 2, since they are both integers, whereas 5.0f / 2.0f will be 2.5, which is probably what you were intending 
```c
int a = 5;
int b = 2;

int ans_1 = a / b; // Will be 2
float ans_2 = (float) a / b; // Will be 2.5, because a is a float and will carry out regular division
int ans_3 = (float) a / b; // Will be 2 again! The answer is 2.5, but because the variable is of type int, it will implicitly cast it.
```

## Some cool trivia
- There are many important reasons why data types are important, one of those being CPU architecture
	- "Integers and floating point numbers have completely different binary representations. This means that the circuitry inside the CPU that carries out operations with these different types of binary data can not mix and match bit strings for integers with those for floating point numbers.". From [here](https://www.cs.utoronto.ca/~strider/docs/CSCA48_Unit2_Notes.pdf)