# Encapsulation
* Instead of directly changing the values, we instead give it an interface to mutate / accessor methods (get and set).
```java
public class Point {
	private int intX;

	// accesses intX without touching the private variable
	public int getX() {
		return intX;
	}

	// gives an interface to update intX
	public int setX(int x) {
		intX = x;
	}
}
```

# Polymorphism
* Overriding functionality to let child objects have different functionality from parent classes
* Having several implementations of a method (with different signatures)

# [[Inheritance]]
* Using parent objects which pass down information or functionality to child objects

# Abstraction
* Fuzzing the implementation of the parent class so that the child class implements the functionality in its own way
* Seen with abstract methods and interfaces