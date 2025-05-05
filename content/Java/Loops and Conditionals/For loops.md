
```java
// This will loop so long as i, which is declared *inside* the for loop, is less than 10. If it isn't, the loop will not continue.
for (int i = 0; i < 10; i++) {
	// I will be the values between [0, 9]
}
```

```java
int i;
// This for loop doesn't have a body, so it just makes i equal to 9 at the end of the loop.
for (i = 0; i < 10; i++);
s.o.p(i); // Will print 9
```

```java
// Similarly to conditionals, if you don't add the curly braces or semicolon, it will only loop the line right after it.
for (int i = 0; i < 10; i++)
	s.o.p(i); // Prints 0 to 9
	s.o.p("This is only printed once!");
```

## For each
To iterate over every item in an [[CSCA48 (C Lang)/Arrays|array]] without needing the index, you can use a for each loop
```java
int[] intArr = {1,2,3,4,5};
// The variable represents 1 item in the array.
for (int k : intArr) {
	// do whatever you want with k, and the loop will continue until all "k"'s are used up.
}

```

## Semantics with ++
The "++" operator can be written two ways:
```java
int variable = 0;
variable++; // First way
++variable; // Second way
```
...and there is a big difference between the two of them!1
1. `var++` will get the value of `var`, and *then* increment by one
2. `++var` will increment the value, and then will give that incremented value of `var`
>[!help] Yes. it doesn't make much sense at first. Bear with me

```java
int first = 0;
System.out.println(first++); // "0" is printed, then "first" increments by 1. 

int second = 0;
System.out.println(++second); // "second" will be incremented, and then "1" is printed.
```
>In both cases, `first` and `second` increment by 1, but the time at which the variables "update" is different


