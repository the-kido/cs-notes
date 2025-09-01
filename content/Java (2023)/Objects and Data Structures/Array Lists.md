# YESSSS
- An empty list
- To access it, you use special methods
- The data type between the carets <> must be classes (which are usually uppercase)
- Make sure to import it with `import java.util.ArrayList;`

| `Class`   | `Not a class` |
| --------- | ------------- |
| Integer   | int           |
| Character | char          |
| Boolean   | boolean       |
| String    | -             |
| Scanner   | -             |

# Instancing
```java
// Making an arraylist variable;
ArrayList<Integer> arrayList = new Arraylist<Integer>();

// You can also ignore the type when instancing the array list
ArrayList<Integer> arrayList = new Arraylist<>();
```

# Methods
- add()
- get()
- indexOf()
- remove()
- size()
- set(`int i, T replace`) 
- contains(`T other`)
#### Add
```java
arrayList.add(10); // Adds 10 to the array; now size 1
arrayList.add(20); // Adds 20 to the array; now size 2
arrayList.add(0, 1); // Adds 1 at index 0;
arrayList.add(4, 1); // Runtime error, because the array is only of size 3; it's biggest index is 2 and adding another element could at most be index 3. 
```

```java
String s1 = "Yay";
String s2 = "Boo";
String s3 = s1;
arrayList.add(s1);
arrayList.add(s2);
arrayList.add(s3);
// The arraylist will have 3 "references" but only 2 unique "objects". Changing s1 will change s3. 
```
#### Get
```java
int index1 = arrayList.get(1); // Gets the item at index 1 (arrayLists are also indexed from 0 onwards);
```
#### Index of
```java
System.out.println(arrayList); // printing arraylists works!
int indexOf10 = arrayList.indexOf(10); // Will find the occurance of 10 in array lists
```
#### Remove
```java
// Removes the item in index 2. Everything on the right of index 2 is shifted
arrayList.remove(2);
```
#### Size
```java
// Gets the size of the array. Like length or length() in arrays and strings.
arrayList.size();
```

#### Set
```java
// Sets index 0 to the value of 1000.
arrayList.set(0, 1000);
```

#### Contains
```java
ArrayList<String> myList = new ArrayList<String>();
String s1 = "Hello";
String s2 = "World!";
String s3 = "Hello";

myList.add(s1);
myList.add(s2);
// Will be TRUE since s3.equals(s1) should be true even though their addresses are not the same. 
// .contains uses .equals 
System.out.println(myList.contains(s3))
```
#todo CONFIRM
# Using them in methods
```java
public static int maxValue(ArrayList<Integer> myList) {
	...
}
```
