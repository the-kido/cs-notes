Instead of chaining if-else statements, using a switch is more performant. It also looks like Python.

```java
int value = 3;
switch(value) {
	// You are not allowed to use "break" ANYWHERE ELSE in your code
	case 1: System.out.println("Sunday");
		break; // w/o this break the code will print the rest of the cases for some reason.
	case 2: System.out.println("Monday");
		break;
	case 3: System.out.println("Tuesday");
		break;
	default: 
		System.out.println("Default b/c every other case failed");
		break;
	//etc
	}
}
```