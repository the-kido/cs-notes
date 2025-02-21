This topic is pretty annoying, because it's easy to forget when code implicitly casts or when it's required to explicitly cast. 
However, I don't think there is ever a time where in C it asks you to explicitly cast with the compiler we have, which just makes things extra tricky.

For example, setting a float into an int variable will implicitly cast and floor the value
```c
// Float to int example
float a = 102.6414;
int b = a; // b will be 102

// Int to float example
int a = 12;
int b = a; // b will be 12.000
```

>[!note] It's good practice to always know when casting is happening; it should be explicity intended to happen!
## When does implicit type-casting happen?
The better way to think about it is \*when must I *explicitly* type-cast?*
You only use the () round brackets to explicitly cast when there is a chance of misrepresenting information. 
- [p] Going from and int to float is harmless. Implicit cast! 
- [c] Printing an integer as a float. Will instead give gibberish! Explicit cast is probably intended. Refer to [[Casting & Type Conversion#"Shoehorning"|the below subsection]]
```c
printf("%f\n", 10); // Some random jargon
printf("%f", (float) 10); // The intended 10.000000
```

Also, to avoid unintended behavior, you might need to explicitly cast, too. For instance, 5/2 results in 2, since they are both integers, whereas 5.0f / 2.0f will be 2.5, which is probably what you were intending 
```c
int a = 5;
int b = 2;

int ans_1 = a / b; // Will be 2
float ans_2 = (float) a / b; // Will be 2.5, because a is a float and will carry out regular division
int ans_3 = (float) a / b; // Will be 2 again! The answer is 2.5, but because the variable is of type int, it will implicitly cast it back.
```

>[!note] Integer division simply chops off the decimal part, similar to type-casting. No rounding up or down! Think of `-15 / 2`. It would be `-7.5` with decimals, but is `-7` as an integer, and NOT `-8`!

So tl;dr. The compiler will implicitly cast from types to other types when assigning. However, there are edge cases where we need to explicitly cast to get intended behavior.
- When doing arithmetic with mismatching types
- When printing data of one type when expecting another type.

## Explicit Type Casting
Uses the `(type)` syntax where the expression succeeding it is asked by the compiler to pretty please perform a type conversion. The above has examples turning ints into floats.
#### "Shoehorning"
```c
char* str = "C";
char c = str; // Implicitly casted.
int x = 10;

printf("%c", x); // Just because the data types don't match it will still run. it'll make due with whatever data is stored at 'x' in RAM and interpret that as a character. 

// The compiler will totally give a warning though.
```
- This code *runs* but doesn't behave as intended. 
## Some cool trivia
- There are many important reasons why data types are important, one of those being CPU architecture
	- "Integers and floating point numbers have completely different binary representations. This means that the circuitry inside the CPU that carries out operations with these different types of binary data can not mix and match bit strings for integers with those for floating point numbers.". From [here](https://www.cs.utoronto.ca/~strider/docs/CSCA48_Unit2_Notes.pdf)


# Things my tutorial talked abt which will defo be on some test
### Float to Int
If you have
float z = 10.01341;
int x = z; // truncates to just the integers. The decimals go bye bye. 

but 
int a = 5;
int b = 10;
float c = 1.4;

a = a + c
a + c turns into a float as it takes the number with higher precision (floats > int in terms of precision) HOWEVER a is an int so 6.4 is stored as just 6. 


BUT 
```c
int a = 6;
float f = 3.14
printf("%f\n", a) // It prints gibberish.

printf("%d\n", f) // It prints gibberish
```

The format specifier goes to the pointer of the data you want to print, and does whatever it can with the data present at that point to print something. That's why it prints gibberish (because 3.14 as an int is totally different)
#todo  note these down somewhere nicerly.




