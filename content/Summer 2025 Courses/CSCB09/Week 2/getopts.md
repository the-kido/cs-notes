Exit's 1 when the next option it would give is "nothing"
Option followed by a : is gonna have a 

```sh
# m and N have additional arguments; p doesnt
for getopts m:N:p option ; do 
	echo $option # The actual letter
	echo $OPTIND # The index (starts at 2)
	echo $OPTARG # The argument from the option
done
```
![[getopts SH sample run.png]]
-  Also note that it honours -- to mean "end of options"
- If an illegal option occurs, it'll yell in console but NOT exit
![[getopts illegal.png]]