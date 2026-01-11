The keyword [[Final]] enforces that the class or method can no longer be inherited from. 
```java
public class Fruit {
	public abstract void eat();
}


public final class Strawberry extends Fruit {
	@Override
	public final void eat() {
		System.out.println("I love to eat strawberries!");
	}
}

public class ChileanStrawberry extends Strawberry {
	//Illegal!
}
```

>![Note] If the class is final, then all the abstract members it inherits can optionally also have "final" on it too.