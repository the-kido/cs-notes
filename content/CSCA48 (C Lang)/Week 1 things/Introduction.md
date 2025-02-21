> This goes over the first half of Chapter 1's material

Why C?
- It is imperative (the structure of the language is familiar)
- It is simple
- It does no hand-holding
- Applicable to the future
- Memory is easy to deal with

C is a [[Low-level and High-level languages|low level]] language as it is compiled from a .c program "text" file.

Code starts in `main()`

### Data
- Refer to [[Variables]]
- Any kind of information used in programs is data. These are stored in "variables" which is in our RAM. 
- In C, we specify the data type of variables and that type cannot change. 
- Fundamental types are `int`, `float\double`, `char`, and `void`
	- Well, `void` is for "lack" of data type and cannot be used for variables.
- He goes over his suggested [[Program Structure]]. A fun 3 step process!

### Hello World
```c
/*
This program prints hello world. Poggers
*/ 
#include<stdio.h>

int main(void)
{
	printf("Hello world!\n");
	return 0;
}
```
^ He just goes over [[printf]] with this fun example ^

#todo How does one do exercise 1.1. lol how am i stuck on the first one.

He then goes over if statements and while/for loops
```c
int i = 0;

for ( ; i < 10; i++)
{
    printf("%d\n", i);
}
```
Wow that is a thing you can do.
```c
for (int i = 0; ; i++)
{
	if (i >= 100)
	{
		break;
	}
}
// Above is similar to a regular for loop, but with more lines.

for ( ; ; )
{
	// This will loop forever since there is no conditional to terminate it.
}
```
So in general
- The first statement lets you initialize a variable if you wanna
- The second states a conditional to check every loop. Will go infinitely if there is none
- The last will run every time the loop reaches the end (kinda like the last line)
```c
// For loop #1
for (int i = 0; i < 10; i++) printf("%d", i);

printf("\n");

// For loop #2
int i = 0;
for ( ; ; )
{
	if (!(i < 10)) break;

	printf("%d", i);    

	i++; // Always the VERY last line in the for loop
}
```
- #1 and #2 are equivalent for loops! The bottom one is just more terse.

# Cards #cs2-1
What kind of language is c? 
?
It is low-level in that it is compiled

What are 5 reasons why c is taught as a beginner language?
?
1. It's very simple
2. No handholding
3. Memory Management is simple
4. It's imperative
5. Applicable to the future
