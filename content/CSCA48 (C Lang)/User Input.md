Functions you will need:
- `scanf` for numbers
- `getchar` for characters and other weird characters.
- `fgets(char* out_str_reference, int len_of_array, FILE* file)` for strings. "get string"
	- f --> "file" (but in this case it's for anything. `stdin` is the "file" in our cases)
	- get --> "obvious"
	- s --> "string"

```c
scanf("expected input formatted with format specifiers", many, outputed, pointers);

// Here's an example:

int x, y;
scanf("x: %d y: %d", &x, &y);
getchar();
```
If the user doesn't format it correctly, it just safely aborts and continues. 
If you want to know how many fields were successfully retrieved, it is the integer than `scanf` returns.

## Why use `fgets` for strings but not `scanf`?
?
`scanf` doesn't work with strings that have spaces since spaces are what `scanf` looks for to separate each variable. Even if the string you pass is `"%d$d"`, the two integers are separated by a space.
`scanf` DOES work for inputs of 1 word. 
```c
char word1[1024], word2[1024];
scanf("%s %s", word1, word2);
// Works as intended if you type Hello World
```

## Why use `getchar` after `scanf`?
- When the user presses "enter" it adds some residue to the console. `getchar() `will simply get rid of that, so it doesn't mess up future `scanf` calls.
- Here is an example of a mistake you could make:
```c
char test[2];
int int_test;

scanf("%i", &int_test);
fgets(test, 2, stdin); // Remember "2" implies 1 character for the bulk of the vstring and 1 for the delimeter

printf("Your number is: %d", int_test);
printf("You typed: %s", test);
```
![[Pasted image 20240721172117.png]] These are the values when I type "10" in the terminal
- The `\n` comes from when I press "enter". When `fgets` is called, it reads the enter within the input buffer of `stdin` and thinks "oh, there's already an input. I guess we're done here then!" which is why `test` is like that.

> Input is always in a buffer. When a character is not used, (i.e. the "enter" right after using `scanf`), it will wait until another input function reads it. Only when the buffer is empty does the user "typing into the console" result in the intended behavior. 

## Sanity check

Remember, always check that the input is sane. If the user doesn't type the right thing, it will be junk (i.e. a string when expecting an int, similarly to what happens with `printf`)
To ensure the input makes sense, we do *input sanitization*.


