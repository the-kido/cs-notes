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

## `#include<string.h>`
- This is a library with useful string things
### `strcpy(destination, value)`
- Hard copies the string from "value" into the destination.
- You can also use it to initialize strings (but why would you do that)
```c
char cool_string[1024];
strcpy(cool_string, "I am so cool, you guys");
// But it's the same as just doing
char cooler_string[1024] = "I am even cooler, you guys";
```
### `strcat(string_before, string_added)`
- Concatenates the two strings. Yes, you cannot just use `+` between two things any more. 
- It will extend the original string, so it's destructive...
### `strlen(string)`
- Gives the length of a string.
### `strcmp(string_1, string_2)`
- Compares two strings. Returns 0 if they are equal and other numbers if they aren't. Similar to [[Java/Objects and Data Structures/Strings#compareTo()|compare() in Java]]

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
