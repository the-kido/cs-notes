I love methods !11 

For now, to declare a method you start it with `public static` and the data type it returns (`void` for nothing)
#### Methods with a return type
```java
// int is the return type; now we MUST call "return" in the method
public static int sum(int intA, int intB) 
{
	return intA + intB;
}
```
* Every branch of your code must have a return
`
```java
public static boolean isEven(int intA)
{
	if (intA % 2 == 0) return true;
	// this will throw an error b/c there is no return statement for when the if statement is "false"
}
```

### Naming
- Camel case (lower case first letter)
- It should always be some sort of "action"

### JavaDoc
```java
/**
@param intA is an integer
@param intB is an integer
@return the sum of intA and intB
**/
public static int sum(int intA, int intB) {...}
```
* They must be super concise; no paragraphs needed