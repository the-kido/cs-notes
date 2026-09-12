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

What are the (two) types of errors I remembered to type?
?
`NameError` (when a variable DNE)
`AttributeError` (when a variable does not contain some attribute or method with a specific signature)

What is an expression vs. a statement?
?
A statement is an action or command (assignments, prints, etc.)
Expressions are combinations of operations and values. Parts of a statement usually
- in `k = 2 + 3`, 2 + 3 is the "expression"



WTS if b is an upper bound, then b >= 1
Assume b is an upper bound. Then, we have that $\forall x \in S, b >= x$
To derive a contradiction, assume b < 1.
(we needa somehow show that b < m-n/mn to contradict that it's an upper bound)
By archemedian property (let x = 1,)
nx > y
b > n - m/nm
nmb > n - m
nmb + m > n
m(nb + 1) > n
n = 1, 