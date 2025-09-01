I love methods !11 
#### Methods with a return type
Before the method name, specify the return type. To return nothing, use `void`
```java
// int is the return type; now we MUST call "return" in the method
public static int sum(int intA, int intB) 
{
	return intA + intB;
}
```

Every branch of your code must have a `return` if the return type is not `void`
```java
public static boolean isEven(int intA)
{
	if (intA % 2 == 0) return true;
	// this will throw an error b/c there is no return statement for when the if statement is "false"
}
```

### Naming
- Camel case (lower case first letter)
- It should always be named some sort of "action"

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

# Method Signatures
>[!note] Essentially, it's just the name and its parameters' data types

A signature just shows everything that makes the method unique. I.e, you cannot have two of the same signature. For instance, if you had a method "drive" like this:
```java
public void drive(String driverName, double time) {
	System.out.println(driverName + " drove for " + time + " hours");
}
```
The signature would be 
```java 
drive(String, double)
```
The signature does *not* include:
- [[Accessibility modifiers]] because you cannot have a private and public method in the same class. 
- You also cannot have a static *and* non-static method simultaneously, either.
- Neither can you have the method return two different types. Java can still get confused by that

