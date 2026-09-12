```bash
if echo bazinga! ; then
	# Runs if the command didn't throw any errors (i.e. $? == 0)
fi


if [ $string ] ; then
	# Checks if string is null. If not, continue!
fi
```

Also `else` and `elif`  like python. 
### AND and OR
`mkdir foo && cp myfile foo`
- Runs the first guy; if that was successful, run the next guy
`mkdir foo1 || mkdir foo2 || mkdir foo3`
- Runs the first guy. The first "false" stops succeeding commands from running
This is just simple logic