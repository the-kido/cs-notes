### Order of operations

```python
** 
- (negation)
*  /  //  %
+  -
```

### What operations return what type?
- In most operations, the type will be int, unless there is any float, in which case it will return a float. 
	- For instance, the expression 10.5 + 2 * 4 will evaluate to 18.5 because adding a float and int will give a float
- The only times where the operation returns a set type is with division (float)

### Order of precedence
- All operations go from left to right, except for exponential and conditional (?) operations.
	- `2**2**3` is like writing `2**(2**3)` and NOT `(2**2)**3`

# Operators
## Division
Division defaults to returning a (imprecise, because these are floating point numbers) float (even when diving two ints)

## `x == (x//y) * y + x % y` 
Learn more about the identity [here](https://docs.python.org/3.3/reference/expressions.html#:~:text=The%20floor%20division%20and%20modulo%20operators%20are%20connected%20by%20the%20following%20identity%3A%20x%20%3D%3D%20(x//y)*y%20%2B%20(x%25y).%20Floor%20division%20and%20modulo%20are%20also%20connected%20with%20the%20built%2Din%20function%20divmod()%3A%20divmod(x%2C%20y)%20%3D%3D%20(x//y%2C%20x%25y).%20%5B2%5D.)
- This identity connects modulo with integer division. So, if you want to know how to calculate modulo without remembering any rules, use the following equation
$$ x \bmod y = x - (x//y) \times y$$
Example: -20.4 % 12
$-20.4 \bmod 12 = -20.4 - (-20.4 // 12) \times 12$
$= -20.4 - (-2.0) \times 12$
$= 3.6$

## Integer Division
`//` will do integer division. It divides two numbers, and returns the floored version of that number. 
This is different from `math.floor(x / y)` because that returns an int every time
>[!example] Here are some examples of integer division
>$14//3 = 4$
>$14//0.5 = 28.0$
>$4.0 // 2 = 0.0$
>
>Negative!
>$-4.0 // 3.0$ = (-1.3333) $= -2.0$    (Remember, it always rounds down!)
>

## Mod
Let us have `a` and `b` in the expression `a % b`

|        | $$b+$$                                                   | $$b-$$                                                         |
| ------ | -------------------------------------------------------- | -------------------------------------------------------------- |
| $$a+$$ | Subtract b to a until left with smallest positive number | Subtract `abs(b)` to a until left with biggest negative number |
| $$a-$$ | Add b to a until left with smallest positive number      | Add `abs(b)` to a until left with biggest negative number      |

Here are some examples:

| Expression | Logic                   | Result |
| ---------- | ----------------------- | ------ |
| 13 % 7     | 13 - 7                  | 6      |
| 15 % -4    | 15 - 4 - 4 - 4 - 4      | -1     |
| -7 % 3     | -7 + 3 + 3 + 3          | 2      |
| -39 % -12  | -39 + 12 + 12 + 12 + 12 | -3     |
### Scientific notation
- You can do $number \times 10 ^{digits}$ with the format `(number)e(digits)`
	- 6.022e23 is $6.022\times10^{23}$
	