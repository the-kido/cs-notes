## Defining functions
```python
def _name_():
	"""
	description
	Preconditions: 
	doctests """
	# Body
	# Body
	return _type_

```

<span class="definition">Parameters</span> are when you define the function

<span class="definition">Arguments</span> are what is passed and are associated with a parameter in the function.

## <span class="definition">docstrings</span> and <span class="definition">doctests</span> 

```python
def my_function(fun_int: int):
	"""
	This is the docstring! When I call help(my_function), this will show!
	
	Below is the "doctest"!
	my_function(2)
	>>> 5
	my_function(1)
	>>> 2
	"""
	return fun_int ** 2 + 1;
```

doctests will be checked by python when running. So, if your example is not the same as what is outputted when pythons secretly runs it, it will display the error in the shell.
- it's ran when you do this
```python
import doctest
doctest.testmod() # This actually runs the test. Idk why she didn't mention that. 
```
- Also, it's space sensitive. So don't have extra spaces. 
#### Steps to writing a function (as per [the video](https://youtu.be/v63oukRbJHE))
1. Write examples of how you'll call the function (and include it in the `doctests`)
	1. You need 3-4 cases (unless there are no edge-cases) with different purposes 
2. Write the header with <span class="definition">Type Contracts</span> 
	1. Each variable should have a type contract. 
3. Write the description
	1. Only describe what is returned (not how it is done)
	2. Specify *what* it returns (not the type; that's given with `->`)
	3. Mention the arguments by name within the description (<span class="emphasis">not</span> the type)
		1. For example: "Returns the minimum number of boxes for `num_pencils` pencils with each box containing `pencils_per_box` number of boxes
	4. Include preconditions for parameters
4. Complete the body of code
5. Test it!

```python
def area(length: float, width: float) -> float:
	"""
	Returns the area of a square with the given length and width
		
	>>> area(1, 1)
	1
	>>> area(2.0, 2.0)
	4.0
	"""
	return length * width
```

The part that defines the function is the <span class="definition">Function Header</span>


pow(2, 3) <-- This is a <span class="definition">function call</span>!
### Optional arguments
round(number, \[, ndigits])
round(number, ndigits = None)

Calling (203.13, None) would return 203
Calling (203, 0) would return 203.0

round(2.675, 2) should return 2.68 but it returns 2.67 because of floating point imprecision
- Floats aren't really representable 1:1 in binary 

## `pass`
A placeholder keyword just so that a function's body has something inside of it. Otherwise, the interpreter will be confused.

## Edge cases
- Just make sure that your doctests accomodate for edge cases that might otherwise be returned just fine. 


### Functions that return nothing
- That just means it returns `None`


num_pencils: int
pencils_per_box: int 
--> int


- this good
