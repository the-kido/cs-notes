## wordSwapper (from Will Song's lecture 4 problem)
```c
#include <stdio.h>
#include <math.h>
#include <string.h>

void word_swap(char* w1, char* w2)
{
    for (int i = strlen(w1) - 1; i >= 0; i--)
    {
        if (w1[i] != ' ') continue;
        char* pos = &w1[i + 1];
        strcat(w2, pos);
        strcat(w2, " ");
        w1[i] = 0;
    }
    strcat(w2, w1);
}

void main()
{
    char w1[25] = "I love the colour green!";
    char w2[25];
  
    printf("Before:|%s|", w1);
    word_swap(w1, w2);
  
    printf("After:|%s|", w2);
}
```
- A string is 1 size more than the # of characters because you MUST include the pointer!
- You cannot update string literals (A pointer to a string literal = you cannot update. An array, you can?)
```c
char *w1 = "I love the colour green!"; 
w1[24] = '?' // This will cause a seg fault

char[] w1 = "I love the colour green!"; 
w1[24] = '?' // This doesn't do anything bad
```
