Similar to [[Interfaces]]

Allows for abstraction.  
- e.g: There are many 2D shapes. They all have an area and perimeter but they are all calculated differently. 
- Abstraction gives a blueprint for a class to define some behaviors instead of copying them between several classes 

Note:
- All abstract members **must** be implemented in order to compile (unless the class that implements the abstract class is *also* abstract)
- You cannot instance abstract classes (no "`new`ing") unless it's a class that *implements* it
- The type of a variable can be an abstract class but it must be set to an instance of an implemented class.
```java
// Allowed
Shape a = new Square();
// Not allowed; shape is abstract.
Shape b = new Shape();
// Allowed, too
Square c = new Square();
```

## Abstract Methods
#todo
```java
public class Shape {
	public abstract double getArea();
}
public class Square extends Shape {
	int l = 5, w = 10; // example values
	
	@Override
	public double getArea() {
		return l * w;
	}
}
```

