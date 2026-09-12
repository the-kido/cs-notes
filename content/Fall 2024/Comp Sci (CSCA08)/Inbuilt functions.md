### `max(number1, number2, number3, etc.)`
- Gets the maximum between any number of numbers
- Returns the exact same value (if the number is an int, returns an int)
- Same with `min(number1, number2, number3, etc.)`

### `dir(__builtins__)`
- \__builtins__ is a [[Module]] and dir gets every function available from said module. 
- This line allows us to see every built in function available to us
- If you just call `dir()`, it'll list out every module.

### `help(method_name)`
- Gives the signature and description of the function

```
>>> help(abs)    
Help on built-in function abs in module builtins:

abs(x, /)
    Return the absolute value of the argument.

```

### `abs(number)`
- Takes in 1 number and gives the absolute value
- It returns an int if the arg is an int, and a float if the arg is a float

### `round(number, ndigits=None)`
- Returns the same type as the number passed: int or float. Unless no second param, in which case it returns an int. 
- When decided where to round when "5" determines whether to go up or down, round to the <span class="emphasis">closest even number</span>
	- 1.5 rounds to 2, but 6.5 rounds to 6.
- You can pass either 1 or 2 arguments. 1 argument will round the number to an integer
	- 2 arguments will round the number to `n` number of digits.

> I've also seen the notation of `round(number[, ndigits])`, in which case `ndigits` is defaulted to `None`

### `pow(base, exp, mod=None)`
- Can be called like `pow(base, exp)` which is the same as `base ** exp`
- Or `pow(base, exp, mod)` which is like `base ** exp % mod`
- Returns int, unless a float is passed anywhere.

### `type(object)`
- Returns the class of an object passed in

### int(`float`)
- Returns the truncated number as an integer

### float(`number`)
- Returns the number as a float

