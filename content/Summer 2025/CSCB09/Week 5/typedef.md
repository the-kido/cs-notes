
`enum myEnum variable` becomes `myEnum variable.` A lot more modern looking :))

```c
typedef double temp;
typedef enum coin { HEAD, TAIL } coinType;
typedef union braindead { int a; double b } braindead;

// Declare 3 variables based on abv
temp myTemperature;
coinType curCoinType;
braindead iShouldNotExist;
```

The example w/ the confusing yet legal thing just shows how something might confuse us but for the computer it makes sense.
- The name of the object you're giving an alias to can be the same as the alias's name
To know the "type" a typedef would be, simply do this:
1. Remove `typedef`: `union braindead { int a; double b } x;`
2. What type is `x`? It's a union of a and b
3. So typedef's alias will represent a union of a and b
