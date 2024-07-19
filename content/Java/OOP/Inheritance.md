### What is inherited?
The things the child class inherits are:
- Public methods
- Public instance variables
They do NOT inherit 
- Private methods
- Private instance variables
- Private constructors 
- Public constructors (but you can still call them with `super()`)
	- They aren't *inherited* because all constructors for each class are unique. 

Every "class" inherits [[Object (The class)||object]] which has attributes and methods!
- `Object.toString()` is one of them and is inherited
- Point is a class, which inherits object, which inherits `.toString()`;
- Some objects like `ArrayList` will print the output nicely because it implements `toString()`
- You don't need to call `toString()` because Java will call it automatically for your when concatenating strings. It's very special
### extends
You use `extends` to inherit from a class
```java
public class Circle extends Point {
	int intR; // Specific to circles.
	public Circle(int xCoord, int yCoord, int intR) {
		super(xCoord, yCoord); // Calls the parent constructor with the same signature (in this case the Point(int, int) constructor)
		this.intR = intR;
	}
}
```
>[!note] Notice: If you do not override toString() in the circle, it will call the toString() of the parent class (Point)!

## Accessing previous implementations of overriden methods
```java
// Inside class Circle

public String toString() {
	// super.toString() will access the toString method of the parent class
	return super.toString() + " r: " + intR;
}
// This method is only in the circle class
public double area() {
	return Math.pow(r, 2) * Math.PI;
}

```

## Reminders
```java
public class Main {
	publc static void main() {
							/**#1**/
		Point circle = new Circle(10,10,10);
		System.out.println(circle); // Will call toString() of the Circle class because it's part of the point class.
		
							/**#2**/
		System.out.println(circle.getArea()); // This will not work and throws a syntax error because "point" does not contain a getArea() methhod

							/**#3**/
		Circle point = new Point(10,10); // Point does not contain everything a circle does, therefore this is illegal.
	}
}
```

==The stuff below is gonna be on the exam for sure==

>To know which `toString()` is called, observe this algorithm:
> 1. Call the `toString()` method on an instance of Circle
> 2. Java will check if` toString()` exists in the class the data type of the variable is
> 3. Then it checks if it's overridden in any child class and calls the most overridden version of the method
```java
Point circle = new Circle(10, 10, 10); // Variable is of type "Point"
String string = circle.toString(); 
/*
It checks if the "Point" class has a toString() method. It does!
It then checks if Circle, which Point is an instance of, has toString(). It does!
It calls the toString() from the Circle.
*/
```

>It won't work if this happens:
>1. You call a method 
>2. Java checks if it exists in the class the data type of the variable is
>3. It's not there.
```java
Point circle = new Circle(10, 10, 10); // Variable is of type "Point"
String string = circle.getArea(); // Point does not have a "getArea()" method, so there is a problem 
```
### Implicitly called Constructors
```java
public class ParentClass {
	public ParentClass() {
		System.out.println("Parent Class Instanced!");
	}
}

public class ChildClass extends ParentClass {
	public ChildClass() {
		//super(); (super is implicitly called *first*)
		System.out.println("Child Class Instanced!");
	}
}
```
In the above example, if you were to call `new ChildClass()` it would call the child constructor *and* the parent constructor **with no argument**.
```java 
> ChildClass childClass = new ChildClass();
```
```
> Parent Class Instanced!
> Child Class Instanced!
```

It does this automatically, but if you explicitly want to call a constructor with arguments in a child class, you have to use super(). Otherwise it defaults to the empty constructor.

If you have no constructor for the child class, it falls back to the parent class.

## When do you *have* to use `super()` when writing a subclass?
- If the parent class has an empty-argument constructor, it will always implicitly run it. If there is only a constructor with arguments in the parent, then you must **explicitly call it in the child classes**.
- It will otherwise throw a compilation error!

```java
public class Fruit {
	public Fruit(int juciness) {
	
	}
}

public class Strawberry extends Fruit {
	// This MUST be implemented because there is no empty-argumented constructor. You MUST include a super() call.
	public Strawberry() {
		super(100);
	}
}
```