* Array 1 is the row
* Array 2 is the columns

```java

//5 rows and 6 columns
int[][] 2dArray = new int[5][6];

// The place in row 0, column 2 has the value of 10   
2dArray[0][2] = 10;
```
## Methods
```java
// .length on a 2dArray gives the # of rows. Each item in the row has its own column with it's own size.
int rowCount = 2dArray.length;
// column2Size is the size of second column  
int column2Size = 2dArray[1].length; 
```
## Initializing / reading a 2D array
```java
for (int i = 0; i < 2dArray.length; i++) {
	for (int j = 0; j < 2dArray[i].length; j++) {
		// Every item in the 2d array will have the value of 10
		2dArray[i][j] = 10;
	}
}
// Or you can initialize it where it's declared. Each {} means one row.
int[][] another2DArray = {
 {1, 2, 3},
 {4, 5, 6},
 {7, 8, 9}
};
```

