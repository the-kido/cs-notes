Functions you will need:
- `scanf` for numbers
- `getchar` for characters and other weird characters
- `fgets` for strings. "get string"

```c
scanf("expected input formatted with format specifiers", outputed, pointers);

// Here's an example:

int x, y;
scanf("x: %d y: %d", &x, &y);
getchar();
```
If the user doesn't format it correctly, it just safely aborts and continues. 
If you want to know how many fields were successfully retrieved, it is the integer than `scanf` returns.

## Why use `getchar` after `scanf`?
- When the user presses "enter" it adds some residue to the console. `getchar() `will simply get rid of that, so it doesn't mess up future `scanf` calls.
- Here is an example of a mistake you could make:
```c
char test[2];
int int_test;

scanf("%i", &int_test);
fgets(test, 2, stdin);

printf("Your number is: %d", int_test);
printf("You typed: %s", test);
```
![[Pasted image 20240721172117.png]] These are the values when I type "10" in the terminal
- The `\n` comes from when I press "enter". When `fgets` is called, it reads the enter and thinks "oh, we're done here then!" which is why `test` is like that.


>[!note] Remember, always check that the input is sane

