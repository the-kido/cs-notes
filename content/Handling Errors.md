Handling Errors is important to deal with *runtime* errors. It safely tries to run some code, and if it doesn't work, then it'll run the "catch" body

```java
int int1 = 10;
int int2 = 0;

try 
{
	int int3 = int1 / int2;
} 
catch (Exception exception) 
{
	System.out.println("You cannot divide by 0!");
}

```

```java

boolean isValid = true;
int int1 = 10;
int int2; // This will be set by the user
int int3 = 0;
while (!isValid) {
	try 
	{
		int2 = input.nextInt();
		int3 = int1 / int2;
		isValid = true;
	} 
	catch (Exception exception) 
	{
		System.out.println("You cannot divide by 0!");
	}
}
System.out.println("You can divide " + int1 + " by " + int2);

```
