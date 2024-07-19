`Math.random()` has a range of `[0, 1)`

```java

int x = (int) (Math.random() * 10)
// Will give a number from 0 to 9, or [0, 9]. It "floors" the number b/c of the type cast
```