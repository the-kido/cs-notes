On x86-64
![[Integer Types.png]]
Consider the above, and there there are *signed* and *unsigned* versions of them.
- Signed = no negative. Adds 1 more bit (i.e 2x more numbers)
`char` is a number type! (by default it is signed)

### `size_t`
`%zu` is to print vars of`size_t` which is technically different from any other number.
`sizeof()` returns results in *bytes* (not bits)


#### Integer *literal* notation
`sizeof('c') == sizeof(int)` since character literals are integers. 
Also `sizeof(3U) == sizeof(unsigned int)`

```c
int number = 3;
int char = 'c'; // char literal
unsigned int u_int = 6U; // Int doesn't have a letter
unsigned long long ull_int = 13ULL // but longs do (L)
```

Places of contention:
- `printf("lu\n", 3)` would print gibberish since `3` is an integer, not an unsigned long.
- `printf("lu\n", 3UL)` would print correctly since we're passing an unsigned long 