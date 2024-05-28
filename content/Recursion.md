```java
public static int sum(int intSum) {
	if (intSum == 1) return 1;
	return intSum + sum(intSum - 1);
}
```

### The stack
A stack is a Data Structure. You can only take or remove things from the top or bottom.

Methods are placed on a stack. Calls keep stacking in a recursive method until eventually it overflows. This is why we need to call a base case in a [[Recursion|Recursive function]]

### Use cases
- Trees
	- For loops are linear. But iterating though a tree requires splitting


### Tracing
