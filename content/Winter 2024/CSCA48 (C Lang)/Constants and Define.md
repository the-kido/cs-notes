```c
#define NAME "THING_ITS_REPLACED BY"
``` 
`#define` will, when the code is compiled, replace any mention of name with anything proceeding it.
# `#define` is low key crazy 

```c 
#define TOES = 1024;

void main()
{
	int test;
	// This is actually real. This is a thing you can do. This is crazy
	test TOES
	printf("%d", test);
}
```
- In this case, TOES is equal to "`= 1024;`" *literally*. The line `test toes` is actually just `test = 1024;`
- So not only can you declare some constant values. You can essentially store lines of code with `#define` with no regulations at all.


>[!note] Unlike variables, define dies NOT take extra memory! That can be useful for cases where you have a constant like $\pi$ that you use everywhere

**