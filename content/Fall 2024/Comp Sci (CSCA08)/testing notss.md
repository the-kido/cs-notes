when is testing good
- to make sure your code works as intended
- to ensure that when you refactor code / update code, then it ensures everything still works good. 
ways to do it
- doctests
	- the string thingy
	- pros
		- straightforward  & fewer steps to type & easy to use
		- best with basic things and simple output
		- It integrates well with unit tests (?)
			- it is "executable documentation" whatever that means
	- cons
		- poor readability (shoving doctests into a function is not preferable)
		- they are long 
		- makes documentation look bad :(
		- only checks the output printed. 
		- it doesn't work with non-deterministic output
			- if your function returns the current time, you cannot test that!
			- If a function returns a floating point, there could be imprecision 
		- hard to maintain for some reason
- unit tests

conclusion
- use doctests for writing executable documentation
- unit tests are better for testing documentation

how many test cases to make?
- Test with all kids/types/categories of input 
- only test with valid input
	- make sure they satisfy preconditions 
		- This is called Design By Contract
- don't test with duplicate inputs / cases in the same category.
	- DRY !! She mentioned DRY yooo
- "Consider only the specification"
	- Don't worry about the implementation of the function, only what it's meant to do.
	- "Black Box Testing"


Rules of thumb
- If inputting lists, str, dict, tuple, test for:
	- Empty, single, and many elements
- for bools, check for true or false obviously
- for int, choose (depending on the function):
	- even and odd
	- negative and positive
	- etc.
- Mutable types
	- check for mutation on the argument to ensure it's not modified (?)
- Boundaries (ranges of values like 13-18 inclusive)
	- If there's a precondition that age >= 0, then we can choose:
		- 0 is the minimum valid input
		- 13 is the smallest true value
		- 18 is the largest true value
		- A number less than 13
		- A number greater than 18
		- A number between 13 and 18
		- I needa write ALL of these for full marks like bruh. #todo this for sure.  


#todo go to OH for assignment 3 to see if the test cases we make are enough)


#todo there is a worksheet with the good stuff called "Choosing Test Cases"
- The age one uses "boundry" rule of thumb

in the week 9 testing paper (The second one) it's exactly as it will look on the exam yay.
