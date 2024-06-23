Similar to **Dictionaries** in literally every other programming language. Java likes being special.

A HashMap is a generic type which, when created, specifies it's Key and Value data type. It inherits Map, which is an *interface* and cannot be instanced. 

#### Why does Jeg use Map and HashMap like that?!
```java
// Map here                    // HashMap here!?
Map<String, Integer> map = new HashMap<String, Integer>();
```
There are many implementations of Maps, so in order to keep your code maintainable, it is best to use the *interface type* everywhere you can (besides when instancing, of course) so that in the future you can use different types of maps *easily*.

Map's are inherited by:
- HashMap (the simplest one)
- TreeMap
- LinkedHashMap
- etc!

That's why Jeg makes the type for Maps a "Map" but instances it with "HashMap"
> Map = Interface (Not instantiable, can *mean* many classes)
> HashMap = Class (Instantiable, only has 1 meaning -- to be a *HashMap*)

## Creating a Map
```java
// The String is the key type, and the Integer is the value type
Map<String, Integer> ages = new HashMap<String, Integer>();
```
Every key is mapped to 1 value. You cannot have more of the same key, but you can have several of the same value. Observe the table below

| Key     | Value |
| ------- | ----- |
| Michael | 26    |
| Jodi    | 26    |
| Jeremy  | 32    |
## Methods
### `.put()`
>[!note] "put()" is like "add()" for [[Array Lists]]. Requires a key, then value
```java
ages.put("John", 26);
```
### `.containsKey()`
>[!note] Returns true if the key exists, or false otherwise
```java
if (ages.containsKey("Jeremy")) {
	// Runs if jeremy is a key (it is)
}
```
### `.get()`
> [!note] Gets the value from a key
```java
int johnsAge = ages.get("John");
```
### `keySet.()` 
>[!note] Returns a "Set" of all the keys, which update when the map updates. NOT an array or arrayList because you cannot add to it, only remove. Weird
```java
for (String name : ages.keySet()) {
	System.out.println();
}
```