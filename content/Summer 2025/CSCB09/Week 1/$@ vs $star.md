[[Cl Readings for Scripting (24-36.1)#VERY IMPORTANT! ⚠️⚠️]]
`$@ = $* = "every" "option" "in quotes"`
The difference is when you surround them in quotes:
`"$@" = ""every" "option" "in quotes""`
`"$*" = "every option in quotes"`
 
```sh
for variable in "a" "b" "c d e" ; do
	echo $variable 
	# This echos:
	# a
	# b
	# c
done
```

`$*` expands into "all of my arguments"
Pretend I pass in "I" "love" "Toronto Island" as arguments:
```sh
for var in $* ; do
	echo $var
done
# Prints:
# I
# love
# Toronto
# Island
# since after expanding, the above is equivalent to 
```

### Gimmick with for loops
The list of things to iterate over can either all be surrounded in quotes or not surrounded and will behave identically.

```sh
echo "" >> out1.txt
echo "" >> out2.txt

for a in "a b c d e f gun" ; do
	echo a >> out1.txt
done

```