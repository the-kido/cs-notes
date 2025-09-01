Design patterns yayayayaay

Design patterns = solve specific engineering problems!
- Design "principles" are far more high level
- Think of them like *recipies*

Types
1. Creational
	1. Factory Method
	2. Singleton
	3. Others:
		1. Abstract Factory
		2. Builder
		3. Object Pool
		4. 
2. Structural - Composition of classes
	1. Adapter
	2. Facade
	3. Others:
3. Behavioural - Specifies how classes/objects interact
	1. Observer
	2. Strategy
		1. One example was for OCP that he gave in code #todo maybe i should try and find it! 
	3. Other:


#### Singleton (Creational)
- Ensures you only have *one instance* of a class with global accessibility 
```java
// Disable the ability to extend this class; they might try to make it "not" a singleton. We don't want that!
// BUT, it's not required in Java! Why? Well the constructor of any child class must call the private constructor. Won't be possible to construct = no extendable children
final class Singleton {

	private static Singleton instance;
	
	public static Singleton getInstance() {
		if (instance == null) instance = new Singleton();
		return instance;
	}

	private Singleton() {}
}
```
Example: You wouldn't want more than 1 instance of a database manager class. You'd want to read and write to it *everywhere* and ensure you cannot write to two of the same database (that doesn't make sense)
- This also lets you ensure that only 1 object can access the database at a time



#### Factory Pattern
- Avoids duplicate code!
	- If you want, say, a list of a certain type of object and add it to a list. Instead of adding the object to the list *in every constructor of every child class*, we could abstract things instead.
Product = Shape
ConcreteProduct = Shape, Circle, Triangle
ConcreteCreator = GraphicalApp, TriangleApp, CircleApp
Creator = GraphicalApp


#### Facade
- The devs of the complex system are also who create the facade, because they understand all of the complexities! You don't want the client to create the facade of course!

#### Adaptor
- (targets are abstract/interfaces all the time? #todo)
- Client uses t.add(2,3).
- Adaptee has a convinient concrete implementation for this add function that we kinda want to use
- How do we let that happen?
	- We "could" just implement Target for Adaptee. But now we adapted Adaptee. We want to *avoid* modifying existing code! Conform to OCP!
	- Solution: create new concrete class. Make it implement Target. Create an instance of Adaptee and use it's implementation of `add`


Refer to date.java refactored code for Strategy Pattern

Conforms to OCP cuz you do not edit a class w/ every kind of behaviour. You create new classes with new behaviours. You didnt need to change any of the code of any other class to create a new behaviour.