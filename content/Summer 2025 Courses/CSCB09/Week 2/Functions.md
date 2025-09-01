```sh
aFunction() {
	echo $1
	echo world
}

aFunction hello > out.txt 
# out.txt would be
hello
world
# just like that!
```
- Functions group just like `{}` does (does NOT create another shell)
- Exiting in a function WILL exit everything
- Arguments are *positional parameters*:
	- $1 $2 etc etc. Those are your parameters. (they start at 1, remember!)
#goes-in-cheat-sheet-DONE 
