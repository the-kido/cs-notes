I/O = keyboard, networks, or files
- we focus on keyboard and files in b07

`Scanner` is how you get the input from the keyboard w/ the specific constructor that takes in an `InputStream`
> That's the reason why we have to include `System.in` when creating a new scanner; it wouldn't know otherwise what kind of "scanner" we want to make (there are so many types!)

You cannot have the same name w/ the same argument types (same 'signature')

`System.out` is of type `PrintStream` and has a bunch of methods (including `println()` with a bunch of overrides for different arguments of different types) 


Token = one "term" separated by spaces
- `next()` will try to get the next "term"
- `nextLine()` will wait until we press `enter` or create a new line `\n`


### Reading files
```java
File f - new File("abc.txt"); // Assumes abc.txt is in the same directory as this java file
// The object will be constructed whether or not it actually exists
Scanner s = new Scanner(f);

```
- "Files" include files in the sense you know, but also directories
Here are some methods:
- `.exists()`
	- Will determine if the file we created actually exists (if the directory we gave is valid)
- `.isDirectory()`
	- Determines if the file is a dir

Another way we can use `Scanner` (besides user input via `System.in`) is by passing a file like `Scanner(File)`
- You can still use the same scanner methods but they will read the file instead. 

##### Alternative way via `BufferedReader`
- Why use this instead of a scanner? Well because there are different ways to read a file

```java
BufferedReader input = new BufferedReader(new FileReader("C:\\Path\\Goes\\Here.txt"));
String line = input.readLine(); // Getting the first line
while (line != null)
{
	System.out.println(line);
	line = input.readLine();
}
```

### Outputting using `PrintStream`
- Similar to `System.out`, but `System.out` points to the file that represents our terminals output (just like unix. b09!? #todo )

```java
PrintStream out = new PrintStream("outFile\\Directory\\Here.txt");
out.println("First line");
out.println("Second line!");
```

# OOP
- Vs procedural, data *and* operations are bundled (unlike C, where manipulating an *object* involves writing external functions)
	- that then spawns info hiding (encapsulation) and other bazinga
- Reusable! You can use aspects of your code again in other places or other ways
	- If a component works flawlessly, why would we rewrite it again to use similar logic again?
- 
### Inheritance
- `extends` extends a class from another class.
- I have never coded in java or any object oriented programming language, especially C#, in my entire life

- When creating constructors for a class that extends another class, we MUST make a call to a parent constructor via `super()`
	- If you don't include `super()` it will implicitly call the constructor w/ no arguments before any of the other stuff you do!
	- If you don't define a `super()` constructor, java WILL throw a fit (you MUST define an empty-argument constructor for java to implicitly call)
	- the `super(...)` call must be the first line
```java
public class Employee extends Person
{
	public Employee()
	{
		// Will implicitly call super() verbaitem (no constructors!) since it exists in the person
		name = "John Doe";
		address = "xyz";
		salary = 1000;
	}
}

// inside of Person.java
public class Person
{
	public Person()
	{
	}
}
```

#### Upcasting
- Calling a constructor of a child class to instance a parent class. 
```java
// aNything shared by Employee and Person will be accessible. If you implement something differently in emplpyee, it will be reflected when you call p.method() or p.field (it does not "digress" to the Person class's implementation)
Person p = new Employee();
```

**Runtime Type** is defined by the constructor. Whatever is after the `new` dictates what the *runtime type* of a variable is. 
- In the above case, the *runtime type* is **Employee** even though, before runtime while compiling, `p` is treated like any other `Person`
- This is what determines what implementations of methods we use during runtime.
- If the runtime type of an object doesn't define a certain method, it will check its super class to see if it's defined there instead.

**Upcasting** is what we can do in the above scenario. Since we know `p` is of type `Employee`, we can cast *explicitly* and it will work!
```java
Person p = new Employee(...);
Employee e = (Employee) p;

e.EmployeeExclusiveMethod();
```

**`instanceof`** lets you check if a object is a certain type!
```java
if (p instanceof Employee)
{
	System.out.println("p is an Employee!");
}
```


## Overloading and 
- Defining methods w/ the same name but different signatures
## Overriding
- Redefining a method inside of a child / subclass with the same signature. 
- You should use `@Override` above a method to clarify that "Yeah, I am trying to override this method. Don't get confused" to who's reading your code.
	- If you mark a method with `@Override`, java will correct you if the method does not actually override a parent method (e.g. the signature is different, so that wouldn't overriding but sort of like *overloading* instead)
		- So it's not *useless*. It helps catch some errors with your intentions

**Dynamic Binding**
- Relates to *Runtime Type*s
- Starts at the runtime, and tries to find a matching signature of a class. if it can't find it, it will look in the super class, and then *its* superclass. 
	- This is why you get the overriding behaviour, using an Employee's implementation even though the method you're calling is from a Person in `Person p = new Employee()`

## `super.method()`
- Lets you call implementations of parent methods inside of subclasses

```java
class Employee extends Person
{
	@Override void thing()
	{
		super.thing();
		System.out.println("The Parent implementation is run first, then this one!");
	}
}
```
