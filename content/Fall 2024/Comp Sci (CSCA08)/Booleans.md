the 3 logical operators are `not`, `or`, and `and`
don't try using || or &&, krish.


with `or`, remember that it won't continue to read the rest of the Boolean expression because of <span class="emphasis">short circuit evaluation</span>
```python
>>> 10 > 5 or "a" < 10 # Perfectly fine
>>> 10 > 5 and "a" < 10 # Will murder you
```

## Order of precedence 
Same as in [[Logical Connectives|discrete]]
1. not (highest)
2. and
3. or (lowest)

### Python-specific things
You can describe ranges in python with a <= b <= c (same with >=)
she calls it "chaining comparison"

```python
if 0 --> will be false
if 0.0 --> false
if '' --> false

#it's all in pcrs
```

### More chaining stuff
Look at these two examples:
- `3 < 5 != True` eqv `True`
- `3 < 5 != False` eqv `True`
The reason they are evaluated like this is by nature of the `==` operator, which compares the value of two objects *and* because this is a chained comparison! Another way of writing the above expressions is:
- `3 < 5 and 5 != True`
- `3 < 5 and 5 != False`
> True is casted to the integer `1` and False is `0`

- So 3 < 5 is always true, and in both cases, 5 != 0 and 5 != 1


>[!note]
>Don't do `== True`. Do `is True` or just get rid of it entirely


