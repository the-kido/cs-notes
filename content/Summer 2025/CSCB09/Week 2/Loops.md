While loops
```sh
while echo hi ;  do
	# This loop will go on forever unless we use `break`
done
```

For loops
```sh
# Declares "var" as a variable
# Iterates over all the terms after "in" separated by spaces.
for var in word1 word2 word3 ; do 
	echo $var
done
```

Also ``