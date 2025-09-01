
#todo When do these "expand"
- in for loops they do (like after  `in` but when echoing it does not.... why ?
- Also when used in cases. huh.

```sh

var="bazinga"
case $var in
	
	*) 
		exit 1
esac
```

Also this:
```sh
f="file.c!"
case "$f" in 
	*.c | *.sh | myscript)
		echo This is code!
		;;
	*)
		echo I have no clue what you are
		;;
```

#goes-in-cheat-sheet FOR SURE. i ALWAYS forget these! 
![[pattern match filenames.png]]
==hey make sure u do this yeah?==