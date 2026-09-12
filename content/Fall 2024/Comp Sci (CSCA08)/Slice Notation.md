```python
test = "Something"
other = test[0:5:-1]
# Empty string
other = test[5:0:-1]
# "htemo"
```

>[!note] Slice will NEVER return an error. It is safe and will, if there are no elements, just return an empty version of the enumerable.
>
