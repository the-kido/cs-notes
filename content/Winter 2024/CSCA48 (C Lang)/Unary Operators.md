`++` and `--` are the two most common unary operators! They take 1 number and return 1 number (the number incremented).
They are NOT equivalent to `+=` or `-=` 1.

```c
int a = 10;
a++; // The expression returns '10', then sets 'a' to '11'

int b = 4;

printf("%d %d", b++, b); // Prints '4 5'
```

# So how do I evaluate these ?
Simple, if the unary operator is *before* the variable (so `a++` or `a--`) then the expression itself will return the value of `a`, but the next time `a` is accessed, it will have the increment/decrement .

if we have `++a` or `--a`, the the value is incremented/decremented, and the expression returns that changed version of `a`

```c
int a = 10;
int b = 10;

printf("Before: %d. After: %d\n", a++, a); // Will print 10, then 11
printf("Before: %d. After: %d\n", ++b, b); // Will print 11 twice

// Same applies for --
```

# Priority / precedence

The unary operators have the highest precedence in an expression!

So doing `*(p)++`  is equivalent to `*(p++)` since precedence, yeah.

# Pain
(From Tutorial)

Observe this bit of code
```c
int x = 5;
int y = 10;
int *p = &x;

__insert_something_here__

// x = __
// y = __
```
What would x and y be if we replace the `__insert_something_here__` with each of the below examples?
#### Example 1
`p++`
`++p`

It doesn't behave how you expect it to. In that (for me), it doesn't crash but also nothing changes. Strangely, if I instead do `p = p + 4`, it consistently updates `y`. Why is that? #todo
#### Example 2
`(*p)++`
`++*p`
`++(p*)`

All of these increment the *value* by of `x` by 1, so `x = 6`

`*p++`

This one is special because, remember, `++` has highest precedence. That means `p++` is called first, which increments the position on `p` by 1, altering where it points. Then the `*` is evaluated and by then it's just fetching the value of the data `p` is now pointing to.

#### Example 3
`++p*`

This doesn't even compile!
 