Basically "covering up" past declarations of instance variables. The variable in the lower scope can have a different value from the one in a higher scope. You can access the value of the higher-scoped one with `super`
```java

public abstract class Fruit {
	int juiciness = 10;
}

public final class Grape extends Fruit {
	// Covers up the "juiciness" from the "Fruit" class. They both co-exist.
	int juiciness = 30; 
	
	public void printJuiciness() {
		// The juiciness within this (the Grape's) scope
		int insideJuiciness = juiciness;
		
		// The juiciness from the parent class's scope.
		int outsideJuiciness = super.this.juiciness; 
	}
}
```