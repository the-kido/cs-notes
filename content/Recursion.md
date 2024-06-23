```java
public static int sum(int intSum) {
	if (intSum == 1) return 1;
	return intSum + sum(intSum - 1);
}
```

### The stack
A [[Stacks|stack]] is a Data Structure. You can only take or remove things from the top or bottom.

Methods are placed on a stack. Calls keep stacking in a recursive method until eventually it overflows. This is why we need to call a base case in a [[Recursion|Recursive function]]

### Use cases to solve recursion questions
- Trees
	- For loops are linear. But iterating though a tree requires splitting

Example question from Jeg
![[Pasted image 20240610125358.png]]
- 11 calls. Returns 6
- the 6th last calls were what returned 1. it's not 17 (i was confusled)

