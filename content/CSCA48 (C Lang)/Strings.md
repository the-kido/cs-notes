>[!note]
>Strings are just an array of characters ended with a string terminator: `\0` (this just represents the integer 0)
>```c
>char my_string[1024]; // We are letting this string be 1023 characters MAX (excluding terminator)
>my_string[0]='H'; 
>my_string[1]='e'; 
>my_string[2]='l'; 
>my_string[3]='l'; 
>my_string[4]='o';
> my_string[5]='\0'; // This indicates the string is over; the rest of the characters will not be read in most cases

>[!note] If you do not have a terminator, the string will continue until it eventually hits a '0' somewhere within memory, which is obviously not an intended behavior. 

## `#include<string.h>`
^^ This is a library with useful string things
#### `strcpy(destination, value)`
- Hard copies the string from `value` into the `destination`.
- You can also use it to initialize strings so that there is no reference between the two strings in memory. If you use the `=` operator and update 1 string, the other will also change! That is most likely not intended behavior.
```c
char cool_string[1024];
strcpy(cool_string, "I am so cool, you guys");
// But it's the same as just doing
char cooler_string[1024] = "I am even cooler, you guys";



// However
char bad_string[1024];
char other_string[1024] = "This is no good. We are sharing!";
// GOOD
strcpy(bad_string, other_string); // There is no sharing.
// BAD
bad_string = other_string; // Changing either string will update both of them.
```
#### `strcat(string_before, string_added)`
- Concatenates the two strings. Yes, you cannot just use `+` between two strings any more. 
- It will extend the original string, so it's destructive...
#### `strlen(string)`
- Gives the length of a string.
#### `strcmp(string_1, string_2)`
- Compares two strings. Returns 0 if they are equal and other numbers if they aren't. Similar to [[Java/Objects and Data Structures/Strings#compareTo()|compare() in Java]]

## String literals
String literals are stored in **read-only** memory. Those are the ones made with quotation marks : ""
You CANNOT change or update them in any way. 

Here's an example:
```c
char w1[10] = "Mangos <3";
char* w2 = "Mangos <3";

w1[5] = '!'; // Allowed
w2[5] = '!'; // Segfault
```
Here's what they look like in the debugger:
![[Pasted image 20240720094735.png]]
- Since string literals are read only, and the char* for w2 is only pointing to the first character in the string literal, you CANNOT change it, which is why it causes the [[Segfault]] (you aren't allowed to edit that bit of memory!)

## Weirdness
1. Character literals and escaping them
```c
int a = '0' // This will be 48 (because ASCII)
int b = '\0' // This will be the integer "0"
```
2. You don't need to use `'\0'` to terminate; `0` works just fine
```C
 char chr[3];

chr[0] = 'h';
chr[1] = 'e';
chr[2] = 'y';
chr[3] = 0; // This will terminate the string, too.

// Also note that, even if the string spills out of the range of the array, when it's treated like a string it doesn't care. It just waits until the escape sequence is hit.
```
