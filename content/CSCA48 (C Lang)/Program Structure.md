This is suggested by Paco of course
```c
// 1. The top is for libraries that we use
#include<stdlib.h>
#include<stdio.h>
/// 2. After the libraries, we write functions for the beef of the program.
int scuffed_sum(int x, int y)
{
    return x + y + 10;
}
  
void a_func(int x, int y)
{
    // Variables are declared at the top of a functions scope
    int w = scuffed_sum(x,y);
}

// 3. Include main()
void main(void) // `void` specifies you expect to take in nothing
{
    printf("%d", scuffed_sum(10, 20));
    // This prints 40 btw.
}
```