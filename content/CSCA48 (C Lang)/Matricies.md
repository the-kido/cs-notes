#### 2d arrays yayayaya
```c
int array_2d[2][3]; // 2 rows and 3 columns.
```
- In memory it's read left to right line by line

#### Offset formula

$$\text{Offset = (column \#} \times \text{column size}) + \text{row \#}$$

# Example

```c
char array[2][3] = {
	{'A', 'B', 'C'},
	{'D', 'E', 'F'},
};
```

| A   | B   | C   |
| --- | --- | --- |
| D   | E   | F   |
In memory would just be A, B, C, D, E, F. 

I think you could technically do something like
```c
int arr[2][3];

*(*arr+3) = 4; // This would be the second row, first column!? !?!?!?
```

>[!note] Note!
>For the above code, there is a difference between 
>`*(arr + 3) = 4`
>and
>`*(*arr + 3) = 4`
>
>The top example doesn't work. Why? Because we cannot "manipulate arrays" as it says by the compiler. What does that mean? Well consider `matrix[2][3]` and `array[i] = *(array + i)`
>Using the literal definition of `[]`, we see `matrix[2][3] = *(matrix + 2)[3]`. Clearly `*(matrix + 2)` is still an array as we can index [3] from it. That should explain why it gives the error: `*(arr + 3)` is 
>
>
