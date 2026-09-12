Compiler and Linker Stages.
Your first.c turns into a first.o object file (machine code). A bunch of `.o` files and libraries are combined by the linker to make an executable. `printf` is in a .h yes, but the implementation is in machine code elsewhere (provided by, say, `gcc`)

Compilation is split into preprocessor (for # directives. `#include`, `#define`, etc.) and the actual compiler (turns C code into machine code)

Macros: `#define MY_FLAG` for flag. `#define TABLE_SIZE 131`for const. Text substitution. `#undef MY_FLAG` removes a macro.

`#include <foo.h>` inserts `foo.h` content here (preprocesses it too). 
`<>` will look for `foo.h` system-wide.
`""` will look in same directory as current file.
using `gcc __ -ImyDir` adds more dirs to search
`.h` has macros, structs, typedef, funcs, and gbl vars.

#### Conditional Compilation
```c
#ifdef MY_FLAG
	fprintf(stderr, "stuff");
#endif
// Add `-DMY_FLAG` flag to gcc to enable the fprintf!
```
#### Splitting
(function) declarations, `typedef`s are in `.h`
- You can do `struct myStruct;` and postpone fields later. sizeof this struct is unknown
implementations (definitions) are in `.c`


```c
typedef struct node nodetype; // Tells C that we are defining a struct node. Typedef names it nodetype. This is OK cuz the struct is "abstract"
struct node {
	int i;
	nodetype *next; // Look, we can use nodetype!
} // No longer abstract "node"
```

#### Header File Stuff
```c
extern int myvar; // in .h can be in many .c files. Shared, too! This is a "declaration" of existance. You must define it ONCE somewhere. Linker will catch too many instances
int myvar; // only in one .c. This is a "definition"; allocates address
```

Conditional Compilation
```c
#ifndef _FOO_H
#define _FOO_H
defining stuff goes here. Yay, safe!
#endif
```

Separate compilation
- What if we want to compile .c files only if necessary? (a change is made?)
- Then after we do that, we need to link them too, but only if a change was made!

```makefile
mainprog: mainprog.o bb.o rect.o
	gcc -g mainprog.o bb.o rect.o -o mainprog

mainprog.o : mainprog.c bb.h rect.h
	gcc -c mainprog.c

bb.o : bb.c bb.h rect.h
	gcc -c bb.c 

rect.o : rect.c rect.h
	gcc -c rect.c

clean : 
	rm -f *.o mainprog
.PHONY: clean
```
1. Word b4 colon is ***target***. Name is anything, but file name is better.
2. Indented stuff = recipe
3. `gcc -c bb.c` will output `bb.o` (no need to `-o` like with `exe`; y'know, `a.out`)
4. `make` starts at top; if dependency out of date, finds rule to make it.
5. `.PHONY` means `clean` is not a file. Just label for command. Ran when target called: `make clean`
```c
//`make CFLAGS='-g -DMY_DEBUG_FLAG`
CFLAGS = -g

bb.o: bb.c bb.h rect.h
	gcc $(CFLAGS) -c bb.c
```

```makefile
`$^` = all prereqs after colon. `$@` = target (b4 colon). `$<` = first prereq after colon

mainprog: mainprog.o bb.o rect.o
	gcc -g $^ -o $@

%.o : %.c
	gcc -g -c $<

mainprog.o : bb.h rect.h
bb.o : bb.h rect.h
rect.o : rect.h
```

```
.depend: mainprog.c bb.c rect.c
	gcc -MM $^ > .depend
include .depend // include contents of .depend (the dependencies look like the above code example's 3 last lines)
```



gcc -E does NOT include stuff like `fprintf(~~~)` between # directives cuz that is dealt with later.

for `extern`, you can only actually declare the variable in `1` `.c` file.The compiler will enforce that there is only 1 instance of the variable

Doing `gcc -E` is very useful for seeing when to use `#ifndef`, etc.


For the slide `DoubleUnGoodPlusPlus`:
- Its inconvenient to ensure that we don't do `#include rect.h` to avoid the whole duplicating thing. Of course, removing it may work, but not all the time.
- #todo Just to confirm, if the example given, I cant just remove `#include rect.h` cuz its used in the rest of the script right?
 
