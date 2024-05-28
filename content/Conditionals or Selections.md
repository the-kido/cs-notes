if statements n stuff

### Short-circuit evaluation
```java
int x = 10;
int y = 0;
// It will skip the second condition b/c the first condition is true
if (x < 20 || x / y == 0) {
	// It will print this; no runtime error
}
if (x < 20 && x / y == 0) {
// This will throw a run-time error because && will run both conditionals.
// The conditional for x / y will give an arithmetic error
}

```

### Syntactic sugar
```java
// Will call the line directly after if there's no curly brackets '{}'
if (true) System.out.println("This will print if true!");

System.out.println("This will print regardless!");

```