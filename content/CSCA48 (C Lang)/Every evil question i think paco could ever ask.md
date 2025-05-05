aka questions you'll only ever find the MC. If you can answer all of these you're set for it I recon.

They range from very easy (like the first ones!) to ".....*why*?"-inducing ones.

#### Q: How many boxes are there for 'x'?
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


#### Q: For the following code, what value does a assume at the end?
```c
int a;

for (a = 0; a < 5; a++)
{
	printf("%d\n", a);
}
```
A: `a` is 5, since only when a is 5 does the for loop end.

#### Q: What does the below print?
```c
char str[3];
str[0] = 'H';
str[1] = 'I';
str[2] = 0; // Hey hey I didn't use '\0'!!

printf("%s", str);
```
A: 0 is the equivalent of the delimiter, so it'll just be `HI`.

### [[Casting & Type Conversion]]
#### Q: What is each value of x after each line?
```c
int x; // Line 1
x = 2/5;
x = (2.0 / 5.0) * 10;
x = (2/5) * 10;
x = (2.0 / 5) * 5;
x = (8/3) / 2.0; 
x = 1.0 * 21 / 9; // Line 7
```
A: x is:
1. gibberish
2. 0
3. 4
4. 0
5. 2
6. 1
7. 2

#### Q: What are the values of all the variables?
```c
float w = (float) 2 / (float) 5;
float x = (float) 2 / 5;
float y = (float) (2 / 5);
int z = ( (float) 5 / 6 ) * 12; 
```
A:
1. w = 0.4f
2. x = 0.4f
3. y = 0.0f
4. z = 10

### [[CSCA48 (C Lang)/Strings|Strings]]
#### Q: If we have a char array of size 9, how many character can we safely store inside of the string?


A: 8 character. Note the 9th character is reserved for the end-of-string delimiter.

#### Q: What is the result of strings `a` and `b`?
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

#### Q: What happens if you type more characters than the size of the string you pass
```c
char string[10];
fgets(string, 20, stdin);
// Pretend you type "I love melons!"; what would this cause?
```

A: Different things! It will do different things on different operating systems or devices. But that makes it all the more scarier. Always ensure you allocate enough memory for the user's input and don't get `fgets()` read more than the string can handle.

#### Q: This is an evil question. Very evil. I do not think paco is this evil.
```c
char w1[10] = "Mangos <3";
char* w2 = "Mangos <3";

w1[5] = '!';  
w2[5] = '!';  
```
What is the difference between the two lines? Which one may result in an error?
A: Refer to [[CSCA48 (C Lang)/Strings#String literals|this]]. TL:DR, string literals CANNOT be updated, so the bottom line is no-go.


### [[Pointers and Manipulating Memory]]
#### Q: What happens if you do this?
```c
int* a = NULL;
a* = 10;
```

A: a segfault, as NULL is a pointer reserved by the system. Of course, you should not be able to change it so that's a segfault for you,

### [[User Input]]
#### Q: Why does the below code not work as intendent? How would you fix it?
```c
char string[100];
int number;

scanf("%d", &number);
fgets(string, 100, stdin);
```

### [[Compound (Composite) Data Types]]
#### Q: Why does an array have several boxes in memory for each item, whereas a composite data type only has "1" box that contains every field? 



A: Because an array is a list of boxes for 1 unit of data; a composite data type is 1 unit of data!

#### Q: What is wrong with the below code? 
```c
#include<stdio.h>

Vector get_sum(Vector first, Vector second)
{
	Vector new;
	new.x = first.x + second.x;
	new.y = first.y + second.y;
	new.z = first.z + second.z;
	
	return new;
}

typedef struct triplet {
	int x;
	int y;
	int z;
} Vector;


int main()
{
	struct triplet red;
	// We let x be 'r', y be 'g', and z be 'b'
	red.x = 255; 
	red.y = 0;
	red.z = 0;
	
	Vector left;
	left.x = 1;
	left.y = 0;
	left.z = 0;

	Vector final = get_sum(red, left);
	printf("%d %d %d", final.x, final.y, final.z);
}
```

A: Only 1 thing! The triplet CDT is declared after it is used in the `get_sum` function. The rest is totally fine. Also, try to guess what the result at the end will be had the CDT been declared at the top.
>[!check]- Answer
>It would print `256 0 0`

#### Q: Answer the below questions after reading the code:
```c
#include<string.h>
#include<stdlib.h>
#include<stdio.h>

typedef struct thing {
	double banananess;
	char name[1024];
	int age; 
} Banana;

int main()
{
	struct thing banana1;
	struct Banana banana2;
	
	banana1.age = 10;
	banana1.banananess = 5.0;
	banana1 = rename_banana(banana1, "Joey the Banana");
	
	banana2.age = 2;
	banana2.banananess = 8.2;
	rename_banana(banana2, "Jill Banana the Senior");

	grow_banana(banana1);
	grow_banana(banana2);
	
	return 0;
}

Banana rename_banana(Banana banana, char newName[1024])
{
	strcpy(banana.name, newName);
	return banana;
}

void grow_banana(Banana banana)
{
	banana.age += 1;
}
```
1. What error(s) is/are there that prevents the code from compiling?
	1. How would you fix it?
2. What is something you would change about the first line of `main`?
3. What is the value of banana1 and banana2's fields right before `return 0` is called? 
4. If any of the values aren't updated as expected, why?
	2. Specifically, what is the logical error with `grow_banana`.

>[!answers]-
>1. The functions `grow_banana` and `rename_banana` are declared after they are used; either add the signature above `main` or move the functions above
>2. Replace `struct thing` with `Banana` as it makes more sense semantically and paco suggests not using it the first way cuz it looks clumsier too.
>3. 
>for banana1:
>	- banananess = 5.0
>	- name = "Joey the Banana"
>	- age = 10
>for banana2:
>	- banananess = 8.2
>	- name = some garbage
>	- age = 2
>1. Here are the fixes:
>	1. The name for banana2 isn't changed since we did not set banana2 to the new banana passed by `rename_banana`
>	2. `grow_banana` doesn't return the newly updated banana. Instead, we could either pass a pointer of the banana we want and update the age with the `->` operator OR just return the newly updated banana.  
### 2D [[CSCA48 (C Lang)/Arrays|Arrays]]

#### Q: What are all the values?
```c
int square[6][6] = {
	{-1, 26, -1, 19, -1, 24},
	{8, -1, 28, -1, 33, 15},
	{3, 21, -1, 23, 7 , 25},
	{30, 12, 5, -1, 34, 16},
	{31, -1, 9, 27, 2 , 20},
	{-1, 13, 36, 18, 29 , 11}
};
    
int value_1 = *(*square + 2 * 6 + 3);
int value_2 = *(square[0] + 5 * 6 + 5);
int value_3 = *(square + 5 * 6 + 5);
int value_4 = *(square[0][0] + 5 * 6 + 5);
int value_5 = *(&square[0][0] + 5 * 6 + 5);
```
Note: It is possible this code has errors or warnings. Point out which lines would give a fit.

#todo fact check
A:
5. value__1 = 23
6. value_2 = 11
7. value_3 does not work (why!?) #todo 
8. value_4 is wrong.
	1. The deference operator does not take ints. it takes `int*`. It would be dangerous for the unary `*` operator to implicitly cast the int to a pointer of type `int*`.
		1. A pointer can be implicitly casted into an integer, but not vice versa ?
9. value_5 = 11
	1. Since we are adding pointers to ints, the type inside the brackets is a pointer.

#### Q: With the same example as above, why does `square = &square[0] = &square[0][0]`?
```c
printf("%d", square);
printf("%d", &square[0][0]);
printf("%d", &square[0]);
printf("%d", square[0]);

// They are all the same!
```
A:
- `square` is a pointer, and `&` gets the pointer of a variable.
- `square[0]` is NOT an array. It's just a pointer to an array without any size or anything like you'd get with arrays. So setting an array to a pointer does not work (?)
```c
int arr[6] = square[0]; // This throws an error. You cannot initialize arrays by using a 2d array. Thats so flipping weird. 
```

