```java
int p = 6;
int m = 20;
int j;

// Will run until j is 6. When it becomes 6, the for loop is like "nah, too big" and stops at 6. That's why j is 6
for (j = 1; j < p; j++);

m += j * j;

System.out.println(j);
```