For loops and if statements do not scope its inside contents. That means if you have something like this
```python
for i in range(100):
	pass

print(i)
```
and it will print `99`, even though it's not... in the for loop. 

Similarly, variables in if statements or for loops will retain their value outside of its "scope"
```python
if True:
	tacos = "Yes. Tacos."

print(tacos) 
```
and allow this code to print `'Yes. Tacos'` blasphemously.