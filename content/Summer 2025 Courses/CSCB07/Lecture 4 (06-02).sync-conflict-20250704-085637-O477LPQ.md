for super, if there is no override in the current context, u wouldnt need to do super.method cuz there's no ambiguity

All classes extend Object. 

Object == Object compares the pointer values, not any kind of "value" like primitive types
- `.equals` can be overridden and changes how an object can be compared to another one
	- For instance, Strings (which are reference types -- objects -- by the way).
	- Doing str1 == str2 compares the addresses. Doing str1.equals(str2) compares the *values* of the strings depending on how `.equals` is implemented

By default `.equals` takes another object and will have the `==` implementation and return reference equality.
However you can make it your own by overriding `.equals`

You cannot call methods / fields on `null` objects.

```java
//Within pointer.java
@OVerride
public boolean equals(Object obj) {
	// ensure the object is not null so we can access its properties
	if (obj == null) return false;
	// To make typecasting safe to do!
	if (!(obj instanceof Point)) return false;
	// Typecast to access "point" related fields
	Point other = (Point) obj;
	return x == other.x && y == other.y;
}
```

any call of `.equals` from a object of type `Point` will use the overridden implementation. 
- Remember the "ladder"; if Point doesn't implement .equals, Java will check the parent, then it's parent, etc. etc. until *something* implements `.equals`. If nothing does, it will be a syntax error (but that's not possible since classes all implement `Object` and thus always has some implementation of `.equals`)

### Equals method contract (General Contracts)
What be the equals method contract?
- Reflexive: For any *non-null* x, `x.equals(x)` should be True
	- 🧠The thing should equal itself
- Symmetric: `x.equals(y)` is the same as `y.equals(x)`
	- 🧠Swapping = same thing
- Transitive: If `x.equals(y)` is true and `y.equals(z)` is true, then `x.equals(z)` MUST be true
	- 🧠It's like Hypothetical Syllogism
- Consistent: Calling `x.equals(y)` several times should give a consistent result
	- 🧠Self-explanatory
- `x.equals(null)` *should* return false

### Hashing with `.hashCode()`
- Used for retrieval (think *hash tables*)
	- Think "indices"
- By default, `Object` returns the memory address of the object
- You can override it in all classes that overrides `equals`
	- And you *should* override it when you override `equals` because you might get unintended behaviour with `hashCode` in future scenarios
	- Because equal objects should have equal hashcodes
- A good `.hashCode()` usually gives an unequal hash for unequal objects
	- Instead of sequentially searching for an object, you can index it with the hashcode. 
	- However, Iif many different objects return the same hash code, it would not be an easy O(1) index-and-done.  
		- So it's best to avoid collisions

```java
@Override
public int hashCode() {
	return 0;
}
```
The above is legal, but lousy (no better than sequential searching)

### toString()
yayayayayaya
## Polymorphism
- Every instance of a subclass is also an instance of its superclass (not the other way around though)
- Has to do with "an object assuming many shapes"
> Polymorphism: A object of a subclass can be used wherever its superclass object is used



## Dynamic Binding
- A method is dynamically binded to an object depending on what instance the object is a type of. 

## Encapsulation
- Details of implementation are *encapsulated* / hidden from outside. Information hiding.
	- I.e. by using `private` access modifier, a method cannot be accessed from outside of the object
- There are 4 visibilities and 3 keywords:
	- Public: Accessible anywhere
	- Private: Only accessible in the object
	- Protected: Only accessible in children
	- Package-private (a field can be accessed anywhere within the package; otherwise private. This is the default)

- Rule of thumb: Keep things as private as possible

## Abstract Classes
- Cannot have private members #todo iirc. But maybe virtual methods?

Concrete = not abstract

- Abstract methods have no implementation / they are *abstract descriptions* of methods.
- If there is at least one abstract method, declare the class as abstract
	- You can still have concrete methods though.


## Interfaces
- All methods are abstract so you dont need the `abstract` keyword

```java
public interface Edible {
	public abstract void foo();
	
	final int x = 5;
}
```

- You can have `final` fields though (basically constants)

- Usually is a high-level description of "a behaviour"
- When implementing an interface, you must define every abstract method (same w/ abstract classes)


## UML diagram
- dotted line and triangle = implements
- solid line and triangle = extends
- Italics = abstract (so animal and edible are abstract)
- + = public
- - = private
- \# = protected
