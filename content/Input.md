```java
Scanner input = new(System.in);

int __ = input.nextInt(); //-- Int
double __ = input.nextDouble(); //-- double
String __ = input.nextLine(); // string
String __ = input.next(); //-- string, but only 1 word (no spaces)
```

```java
Scanner scanner = new Scanner(System.in);
String a = scanner.next();
String b = scanner.next();
String c = scanner.nextLine();
System.out.println(a + "|" + b + "|" + c);

// If inputted "Hello I am George", 
// would print "Hello|I| am George"
```