Back to generics
yayay

Better than using Objects since they are loose and the types of the two variables could be different. 

Generics allows types as parameters

```java

// T is a "generic"
public class MyEpicClass<T> 
{
	T var1;
	T var2;
	// Var 1 and Var 2 will be of the same "type"
	T[] arrayOfGenericType;
	
	public MyEpicClass(T var1, T var2)
	{
		this.var1 = var1;
		this.var2 = var2;
		arrayOfGenericTypes = { var1, var2 };
	}
}

// Inside of main

public static void main(String[] args)
{
	MyEpicClass<Integer> thingy = new MyEpicClas<Integer>(10, 42);
	
}
```

### The best object in java (`ArrayList`'s)

[[Array Lists]]


#### `HashSet`'s
- Doesn't allow duplicates
	- Depends on your .equals method. If the object exists again but you try to add it, java will simply ignore your `.add` call (no throwing errors)
- Oh also foreach loops yay
	- The order in which things are added will not necessarily be in order when iterated over!
	- To make the sequence to the same as when you add it, you use a `LinkedHashSet` instead.

### The `Comparable` interface
- A generic interface
- Makes you implement `int compareTo(T t)`
	- Returns negative if the calling object is *less than* the argument and positive if *greater than*
		- Not necessarily -1 or 1 btw. It can be anything
- Very useful for sorting generic types 
- You should implement it if comparing two of an object "makes sense".

### Exceptions
- Error handling but good 
	- Like in C, you'd have `if` statements to catch wacky inputs or outputs and throw something into the console
- Happens at runtime
- Make them by extending `Exception`

```java
public class SomeException extends Exception {
	String msg;
	public SomeException(String msg)
	{
		this.msg = msg;
	}
}
```

#### Checked vs unchecked exceptions
- If a exception is a `RuntimeException` (or any other subclass of it), then it is an unchecked exception.
- Otherwise it is a checked exception
	- Unchecked exceptions are not FORCED to be handled. Checked exceptions have you be forced to handle them (i.e. you gotta `throw` your exception and `catch` it wherever it is called) 
```java
public SomeMethod(int number) throws SomeException;
{
	if (number < 0)
	{
		throw new SomeException();
	}
}
///

main()
{
	SomeMethod(10); // This owuld throw a syntax error right here. You gotta catch it

	// This is good!
	try {
		SomeMethod(-1);
	} catch (SomeException exception) {
		System.out.println("oopsies: " + exception.message);
		return -1;
	} /*catch () {
		// Another catch for if the exception has exceptions lol
	} */
}
```

since `SomeException` is checked, i gotta add all that boillerplate.
`RuntimeException`s, which are unchecked, can still be caught with error handling but it is not required. Likewise you do not need to add the `throw` to the signature of the method. 
- Think of when you do 1 / 0 (dividing by 0 is an `ArithmeticException`). The program "crashes" in that every statement below the exception in a method will NOT be run. The outside method, if it doesn't handle it, will also not run. #todo i think this is right.

## Testing

### Types of testing
- Acceptance Testing
	- Quite high-level (involves the entire system)
	- More user-oriented
- System Testing
	- More technical
- Other kinds, but unit testing is our focus

## Unit testing
- Test a single unit *in isolation*
- The process is as follows:
	- Write one or more test and make sure the behaviour is correct.
		- Each unit test is written by specifying an input and expected output or state.
- Make things automated!
	- Pressing 1 button should run hundreds of tests.
	- But for now "writing tests" are done manually

Units are quite general.
- In this course we will assume a "unit" is a "method"

#### JUnit
- A testing framework (supports automated test execution!)
- Uses the annotations `@Test` and `@BeforeEach` (this is for initialization)

> If creating in eclipse, add JUnit 5 library to path or something yeah lol


- `assertEquals` takes two thingys and calls .equals between them.
- `assertTrue` takes a boolean and if it's true u good but if false uh oh!

### Building Tests
#### Black/White Box approach
- Black-box approach: writing tests based on the description of the method
	- Doesn't matter how it's implemented; just check if the output is what you would think is expected
	- Black-box = a box you cannot see *inside of*
- White-box
	- Writing tests based on the code of the method
		- I.e. writing a test depending on how you're splitting a string or something like that
	- May still result in the same tests as the black-box approach.


#### Criteria-based Test Design
- "how do you know how many cases is enough!?"
- There is a more objective way to determine how much you've tested:  *coverage*!
	- When running tests by coverage, we see what methods / lines of code we've actually run. If we haven't run a line, we probably need to write a test to check that it works
	- 