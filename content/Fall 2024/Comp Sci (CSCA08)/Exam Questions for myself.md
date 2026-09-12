#CScards 

What is the difference between a = a + 1 vs a += 1?
?
[[The += nuance]]

What does this output?
```python
a_math_expression = (1)
a_tuple = (1,)
a_concatenated_tuple = a_tuple + (2,3,4,5,8)[:-1] 
print(a_concatenated_tuple)
```
?
Will be (1,2,3,4,5)


#todo [[Assignments that are good to refer back to]]

What is short-circuit evaluation? When does it happen?
?
It is when you have a boolean like 
```python
# Perfectly fine
a = True or 1 / 0 == 0
b = False and 1 / 0 == 0

  
# Will murder u and you're family 💯
a = False or 1 / 0 == 0
b = True and 1 / 0 == 0
```


What does 3 < 10 != True evaluate to? How about `a = 3 < 10 != True*10`?
?
This is a case of chained comparisons. To make this easier, we will use an equivalent expression of (3 < 10) and (10 != True) which is eqv to (True) and (True) or just `True`

The second expression will be false since you'll get `True and False` (10 != 10 of course is false)

When checking if something is true, should you use `==` or `is`
?
Use `is`. I.e, `3 < 5 is True`

What is a call stack?
?
A frame that contains its own variables (passed and local)
These are created from every function call. There is also the main frame the script runs on.

How do you make constants?
?
`LIKE_THIS = True`

What are control structures?
?
If, for, and while loops namely. 

What are dictionaries? 
?
Mutable, unordered, array of keys and values. Yes

How do you update a value of a key? How do you add a new pair? How do you remove a pair? How do you update a value without knowing if the key is there?
?
1. `dict['key'] = 'value'`
2. `dict['key'] = 'value'` as well
3. `dict.pop('key')`
4. 
```python
dict = {
    'key': ['list!']
}

key = dict.get('key')
if key is not None:
    dict['key'].append('new item!')

print(dict)
```
or 
```python
 dict = {
    'key': ['list!']
}

if 'key' in dict:
    dict['key'].append('banana')

print(dict)
```
cuz dictionaries are iterable (each item is a key!)


How to invert a dictionary? (i.e. make all keys values and values into keys)
?
```python
dict = {1:'hi', 2:'hi', 3:'hello!'}
inverted = {}

for key in dict:
	value = dict[key]
	if value not in inverted:
		inverted[value] = []
	
	inverted[value].append(key)
```

What does this `dict` evaluate to?
``` python
dict = {1: 10, 1: 20, 1: 30}
```
?
It will just be `dict = {1:30}`. Only the last dup is kept.

What is the following code going to print?
```python
dict_1 = {1:'s', 2:'b'}
dict_2 = {2:'b', 1:'s'}
print(dict_1 == dict_2)
```
It will print True because dictionaries are unordered

What are the (two) types of errors I remembered to type?
?
`NameError` (when a variable DNE)
`AttributeError` (when a variable does not contain some attribute or method with a specific signature)

What is an expression vs. a statement?
?
A statement is an action or command (assignments, prints, etc.)
Expressions are combinations of operations and values. Parts of a statement usually
- in `k = 2 + 3`, 2 + 3 is the "expression"

What are the 3 modes for files
?
File reading 'r'
- Opens the file for reading (you cannot edit it). Does not change ANY of the contents.
File writing 'w'
- Wipes the file and lets you write totally new things into it. Wipes as SOON as you call `open('file_directory.txt', 'w')`
File appending 'a' 
- Appending is just like writing but it adds to the end of the file without erasing it all

How do you close files?
?
.close() 
- Closes the opened file to avoid problems
- Alternatively you can use this notation:
```python
with open('file_directory.txt') as fancy_name:
  lines_list = fancy_name.readlines()
  # etc
# Now the file is closed!
```

What are ALL the ways to read lines from a TextIO?
?
.readline()
- Reads 1 line at a time. Moves the cursor. Includes the \n so be wary of that.
- If there are no more lines, returns an empty string.
.read()
- Reads the entire thing in 1 chonky string. Includes the newlines present in the file too, of course!
.readlines()
- Returns every line of the file in a list
- Again, keeps the `\n`'s as well!

How does the file cursor work?
?
When .readline, .read, or readlines is called, the cursor moves. This means, if you call .readline a few times, then call .read, the .read will NOT return *every* line; only the lines you have not read so far.
For instance:
```python
file = open('fancy.txt', 'r')

'''
fancy.txt looks like this:
a
b
c
d
e
'''

file.readline() # a\n
file.readline() # b\n

remainding = file.read() 
# Will output a string 'c\nd\ne'
```

What are the 3 main parts of a file?
?
The header of the file
- Contains metadata
- The actual data / content of the file
- The EoF (end of file)

Flow charts?
?
Nah

What is a accumulator?
?
A variable that accumulates over a loop

Evaluate the elements in each range:
1. `range(0, 5, -1)`
2. `range(5, 0, -1)`
3. `range(5, 0, 1)`
4. `range(0, 5, 1)`
?
1. `[]`
2. `[5,4,3,2,1]`
3. `[]`
4. `[0, 1, 2, 3, 4]`

#todo why is this why

What is a parameter vs argument?
?
A parameter is when you define a function
An argument is what is passed / associated with a parameter 

How do you write a function?
?
1. First write the `doctests` (i.e. write some calls and expected return types).
	1. 3-4 is good
2. Write the header (with type contracts!) and return type
3. Write the description 
	1. Describe what is returned but not HOW
	2. Mention the arguments by name and not type.
	3. Include preconditions
4. Finish the body
5. donzo


If a function returns nothing, what does it actually return?
?
`None`

What is the exact value of 
1. round(1234, -2)
2. round(100.31, 1)
3. round(1234.56, -2)
4. round(6.9)
5. round(6.9, 0)
6. round(10.5)
?
1. 1200
2. 100.3
3. 1200.0
4. 7 (it's an int since the second parameter wasn't specified)
5. 7.0 (the second param was specified)
6. 10 (remember that it rounds to the closest *even* number)


What identity describes how integer division and modulus is calculated?
?
`x == (x//y) * y + x % y` 
#todo MAKE 100% sure you remember this it is very important!

What does 
1. -4.0 // 3.0 
2. -4//3
3. -4 // 3.0
4. -4 // -3
evaluate to?
?
1. -2.0 (-4.0 / 3.0 = -1.333 --rounded down--> -2.0)
2. -2 ez
3. -2.0 ez
4. 1 (-4/-3 = 1.333 --rounded down--> 1 )

What is 
1. 10 % -7
2. -10 % -7
3. 15 % 0
?
1. 10 - 7 - 7 = -4
2. -10 + 7 = -3
3. Will throw error (`ZeroDivisionError`)

What does 12e10 represent in scientific notation?
?
It looks like $12 \cdot 10^{12}$ =`120000000000.0`

What does `print("wave", "to", "earth")`print?
?
`wave to earth` with spaces

Do control statements scope its content locally in python?
?
NO IT DOESNT.
```python
if True:
	baguettes = 10000
print(baguettes)
```
This is PERFECTLY GOOD CODE. To contrast this...
```csharp
if (true)
{
	int baguettes = 10000;
}
// Will throw an error!
Console.WriteLine(baguettes);
```


What are all the searching techniques we have done as of yet?
?
Binary search
Linear search
#todo gonna revisit this 

What do these strings evaluate to?
```python
test = "Something"
string_1 = test[0:5:-1]
string_2 = test[1:5:-1]
string_3 = test[5:0:-1]
string_4 = test[::-1]
```
?
string_1 = empty (starting at 0 and going backwards will result in a negative index so it rejects the slicing!)
string_2 = empty (same as above; starting at 1 gets us indices 1, 0, -1, -2 .... infinitely, so it just gives up)
string_3 gets indices 5, 4, 3, 2, 1, but not 0. That would give us the string `htemo`
string_4 is `gnihtemoS` (the opposite of Something) since the slice notation is smart enough to know where to start some how?!

How can you represent `you're` as a string?
?
Either do `'you\'re'` or do `"you're"`

Can you concatenate strings? Can you multiply strings? Can you add strings to numbers?
?
Yes and yes and no, not directly. To add strings to numbers, that number must also be a string. 

What does `'ab' >'Ab'` evaluate to?
?
True, since 'a' > 'A'. This will NEVER be on the exam! But hey, at least I know.

What does `a_boolean = 'Banana' in 'I love banana'` evaluate to?
?
False, since `in` is caps sensitive

How can you deep copy a list?
?
`copy = list[:]`
`copy = deepcopy(list)`

```python
copy = []
for item in list:
	copy.append(item)
```
etc.

What is 'new' at the end of the code 
```python
string = "Hello world!"
new = string[0:9][1:5]
```
?
`string[0:9]` would be `Hello wo`
and `'Hello wo'[1:5]` would be `ello`

Make sure to remember `str.strip()` because it's useful for getting rid offff.....
?
new lines, especially for file reading!

List the differences between functions and methods
?
- They're both blocks of code somewhere
- Methods are functions associated with an object
- Functions can be called independently from any object
- You can call methods on literals (i.e. string literals)

Look at this below image
![[Pasted image 20241011153915.png]]
How many frames are there from functions? Why are there 2 variables in the global frame?
?
There are 2 frames created by functions (convert_to_seconds and convert_to_minutes calls. Also, global has two variables pertaining to the functions themselves (functions are stored as variables in python!)

Do these ints/lists/tuples share a place in memory?
```python
int_1 = 123
int_2 = 123

list_1 = [1,2,3]
list_2 = [1,2,3]

tuple_1 = (1,2,3)
tuple_2 = (1,2,3)

```
?
The ints do share a same place since the literals are the same. The lists are NOT the same (imagine changing list_1 and it updating list_2; a nightmare). This is not a case of aliasing.
Tuples are stranger since it's prolly taxing to have identical objects with the same ids. So the answer is "not necessarily the same id"

If a function is O(n) time complexity, is it linear?
?
Yes, it's a linear function


If the step size varies, then watch out! It could be constant, linear, quadratic, or even logarithmic depending on the function
?
OK boss! 


Remember the diff between extend vs append
?
OK


You can use $!=$ in python
Actually all the valid operations are like,
- `!=`
- `==`
- `is`
- `not`
- `and`
- `or`

When working with numbers that could be the "smallest". Instead of choosing infinitely as the biggest number, choose the possibly biggest number in the scenario. yes
