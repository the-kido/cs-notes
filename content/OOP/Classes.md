## `new`
`new` will create a new instance of the object

### Constructors
```java
public class Point {
	public int intX, intY;

	// Every time we "new", it will call this now.
	public Point (int intX, int intY) {
		// "this" refers to the object you're in. intX and intY by itself are the parameters
		this.intX = intX;
		this.intY = intY;
	}
	// This constructor has no arguments. If you call new() with no arguments, it will call this constructor instead
	public Point() {
		intX = 0;
		intY = 0;
	}
}
```
* You cannot have two constructors of the same signature
	* A signature is the number and type of parameters

### `this` and `super`
super allows you to access items in the parent classes. this allows you to access items inside of the class you are writing in.
```java
public class Circle {

	Circle() {
		// this is used to access another constructor in the same class 
		this(10,20);
	}
	
	Circle(int x, int y) {
		// this is used to refer to the instance variable inside of "Circle"
		this.x = x;
		this.y = y;
	}
	
	int x, y;
}
```

# Public / private
We don't always want our attributes to be changeable and instead be protected.
```java
public class Point {
	private int intX;
}

//
main() {
	Point pt = new();
	pt.intX = 10; // This will not be allowed because intX is private
}
```


Instead of directly changing the values, we instead give it an interface to mutate / accessor methods (get and set). This is called Encapsulation.
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

### Static
- If the method / field is associated with the object, then it shouldn't be static
- If there is a thing you want every class to be able to access that every object has in common, it can be static. 
- For instance, the # of people could be static, but the individual properties of a person is not static. 
- The X coord of a point cannot be static because each class has a different value


### Override
>[!note] @Override isn't needed but it communicates that you're overriding a method
```java
public class Point {
	int intX, intY;
	
	@Override
	public String toString() {
		return "x: " + intX + " y: " + intY;
	}
	
}
```

# Objects vs Classes
An instance of a class creates objects, which can be manipulated and changed, unlike classes, which are the *blueprint*
### Method signatures

## Misc
- Objects are stored in the stack
	