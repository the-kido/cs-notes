```java
String string = "Everything inside these (besides escape sequences and quotes) will be allowed in a string"

```

Methods
```java
String myString = "I love MELONS";

int length = myString.length(); // Gets length
char firstChar = myString.charAt(0); // Indexes start at 0. You are not allowed to use this

int index = myString.indexOf("l"); // Gets index of first instance of a string. if there's none, it will give "-1"
int index2 = myString.indexOf("love"); // Also possible; would be the same as the index above.

String sub = myString.substring(0, 2); // Will get the character at index 0 up to the index before 2. Its range is basically [0, 2)
String sub2 = myString.substring(3) // Will return everything after and including index 3; [3,∞)

String upper = myString.toUpperCase(); // Makes things upper case
String lower = myString.toLowerCase();
```
>[!Note] You can ONLY use these methods for strings:
> * `length()`
> * `substring()`
> * `indexOf()` 
> * `toUpperCase()`
> * `toLowerCase()`
>
>In some contexts you can also use:
> * `charAt()`
### Reading strings as input
```java
Scanner input = new Scanner(System.in);
input.next();
```


## Comparing strings
```java
// You cannot use double-equal signs. it will not work
String temp = "My string";
if (temp.equals("My string")) {
	// Will run this block because every character is the same
}
```

### compareTo
``` java
String s1 = "Apple", s2 = "Boy";
// The method "compareTo" compare every character's ASCII value
if (s1.compareTo(s2) == 0) {
	// S1 has the same ASCII characters as s2
}
if (s1.compareTo(s2) < 0) { // it returns a random negative value
	// s1 comes earlier alphabetically than s2.
	// "A" is index 65 and "B" is index 66. Since 65 < 66, the function returns a value less than 0
}
if (s2.compareTo(s1) > 0) {
	// compareTo will return a positive value because 
}
```

## ASCII ?
```java
char x = 'a' // this i show you dec;are character
int a1 = x; // Will turn the character into its ASCII value

char newChar = (char) (x + 7) // You can cast an integer into a character via the ASCII value

int asciiValue = (int) x // this explicitly shows how the character is casted into a number to get its ascii value!
```


## Concatination

```java
String str = "";

str += "Here's some content";
```