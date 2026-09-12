z## id(`object`)
- Returns the location of the expression in memory as a big number (int)

`>>> k = 5.1`
k will be assigned to a value "5.1" which is in location "id1" of type / size "float"

<span class="definition">Stack Frames</span> A table of all variables

<span class="definition">Objects</span> The values in your program that variables refer to

>[!example]
>x = 4
>y = x + 2
>x = y + 1
>
>x in id1:int --> 4
>id2:int --> 2           (The temporary "2")
>y in id3:int --> 6    (x + 2 was evaluated to 6)
>id4:int --> 1           (The temporary 1)
>x in id5:int --> 7    (y + 1 was evaluated to 7)
>
> > [!danger] The intermediate memory locations for `2` and `1` is fine to ignore during exams (I will probably do that just for my own ease)
> 
> The <span class="definition">Garbage Collector</span> will then periodically look for memory with no pointers pointing to it and discard it. So, Id1, id2, and id4 will be brushed away.

>[!help] Use `pythontutor.com` to better understand the model with code examples

>[!example]
![[Pasted image 20240915143854.jpg]]\
#card-this Draw out the memory model of a similar step-by-step assignment script. 
Here is the step-by-step on the above model
>- a is set to 5
>- a is then set to 3, so it no longer points to 5. 5 would then be freed>?- b is now pointing at the value of a.
>- b then switches to point at 7. 3 would not yet be freed because a is still pointing to it, though. 

>[!example]
Here's another example for reference.
![[Pasted image 20240915145427.png]]

## Function Calls
Functions themselves, while living as a frame, is a "variable" with its own id.
![[Pasted image 20241011153915.png]]
- In this example, the global frame has stored up the two methods as variables with id's representing them, too!
- The new frames are created as we enter a function with it's own variables (namely, num_hours -- the parameter, any other local variables, and the returned value)

When calling a function, like pow(12+2, 2), python will first evaluate the arguments (So 14 and 2) and then store them in memory with unique addresses, like you would declaring a variable
These are then freed when the function is finished running

When returning, the value to be returned is stored in another bit of memory 
## Lists
```python
list_1 = [1,2,3]
list_2 = [1,2,3]
```
These two lists are stored in different places in the memory because if they were shared, then changing one of the lists would change the other one, and that would be bad o_o
Unlike other objects, like `int`s, where the references are shared.

```python
def test(lst):
	lst = [4, 5, 6]

outside = [1,2,3]
test(outside)
# "outside" will still be [1,2,3] 
```