I always thought that a += b was just short-form for a = a + b but NO! They are different!!!

## Lists 
```python
a = a + [8]
# and 
a += [8]
# are different! One modifies the original and the other does not.
```
a = a + \[8] will concatenate a with \[8] whereas a += \[8] will simply extend it.
idek.