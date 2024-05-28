Similar to [[Abstract classes]] except it only deals with methods and constants. it doesn't care about how the method is implemented, only that it *is* implemented. 

Interfaces can stack; you can have many interfaces on 1 class but you can only extend from 1 abstract class. 

```java
public interface Vehicle {
	double rate = 0.088;
	public String getMake();
	public String getModel();
	public double getPrice();
	public double payment();
}

// implements for interfaces
// extends for abstract classes
public class Car implements Vehicle {
	String strMake, strModel;
	double dblPrice;
	int financeTerm;

	public Car(String strMake, String strModel, double dblPrice, int financeTerm) {
		this.strMake = strMake;
		this.strModel = strMode;
		this.dblPrice = dblPrice;
		this.financeTerm = financeTerm;
	}
	
	public String getMake() {
		return strMake;
	}
	
	public String getModel() {
		return strModel;
	}
	
	public double getPrice() {
		return price;
	}
	
	public double payment() {
		return 
	}
}
```