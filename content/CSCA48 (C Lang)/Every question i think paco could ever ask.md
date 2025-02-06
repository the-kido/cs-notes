Q: How many boxes are there for 'x'?
```c
int f(int x)
{
	x = 5
	return x
}
int main(void)
{
	int x;
	f(10);
}
```
A: 
There are *two* boxes for 'x'. There are two `x`'s in this code


Q: For the following code, what value does a assume at the end?
```c
int a;

for (a = 0; a < 5; a++)
{
	printf("%d\n", a);
}
```
A: `a` is 5, since only when a is 5 does the for loop end.


What does the below print?
```c
char str[3];
str[0] = 'H';
str[1] = 'I';
str[2] = 0;
```
A: 0 is the equivalent of the delimiter 

### [[Casting & Type Conversion]]
```c
int x; // Line 1
x = 2/5;
x = (2.0 / 5.0) * 10;
x = (2/5) * 10;
x = (2.0 / 5) * 5;
x = (8/3) / 2.0; 
x = 1.0 * 21 / 9; // Line 7
```
Q: What is each value of x after each line?
A: x is:
1. gibberish
2. 4
3. 0
4. 2
5. 1
6. 2

```c
float w = (float) 2 / (float) 5;
float x = (float) 2 / 5;
float y = (float) (2 / 5);
int z = ( (float) 5 / 6 ) * 12; 
```
Q: What are the values of all the variables?
A:
1. w = 0.4f;
2. x = 0.4f;
3. y = 0.0f
4. z = 10;

### [[CSCA48 (C Lang)/Strings|Strings]]
Q: If we have a char array of size 9, how many character can we safely store inside of the string?
A: 8 character. Note the 9th character is reserved for the end-of-string delimiter.

Q: What is the result of strings `a` and `b`?
```c
char[1024] a;
char[1024] b = "Banana ";

strcpy(a, b);

b = "Bazinga ";

strcat(a, b);

b = a;

strcat(b, " 123");
```
A:
- Both a and b will be `Banana Bazinga 123`