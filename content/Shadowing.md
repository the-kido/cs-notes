```java

public abstract class Fruit {
	int juiciness = 10;
}

public final class Grape extends Fruit {
	int juiciness = 30;
	public void printJuiciness() {
		System.out.println(juiciness); // The juiciness within this (the Grape's) scope
		System.out.println(super.this.juiciness); // The juiciness from the parent class's scope.
	}
}
```