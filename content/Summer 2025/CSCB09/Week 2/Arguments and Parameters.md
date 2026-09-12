When calling `sh ./myScript -o -p arg1 arg2 arg3`
1. $# = 3 (this is the number of arguments)
2. $1 = arg1
3. $2 = arg2
4. $3 = arg3
5. and -o -p are "options"

when we use `shift` by default it shifts by 1. So $2 becomes $1 ($3 to $2 as well) and $# goes from 3 to 2.
It also shifts options, too! Like, if you have options, they count as "positional parameters"

Inside of the script, $1, $2, etc. are your *parameters*. This is just like programming anywhere else!
