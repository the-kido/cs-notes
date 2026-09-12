# Local Variables
`local x=something y` 
- X is initialized. Y is declared only
- Dynamically scoped 

# Arrays
```bash
crew=(kermit piggy frozzie) # Initialize array
crew[3]='sam eagle' # Adds a 4th item 'sam eagle'
echo ${crew[1]} # Gets item 1 (piggy)
crew+=(gonzo 'dr pepper')
echo ${#crew[@]} # Gets number of items in array

for c in "${crew[@]}" ; do # iterates over all items
    echo $c
done

for i in $(seq 1 ${#crew[@]} ) ; do
	echo ${crew[$((i - 1))]}
done
```

Output is as follows:
```
piggy  
6  
kermit  
piggy  
frozzie  
sam eagle  
gonzo  
dr pepper
```

#goes-in-cheat-sheet-DONE 

## "Dictionaries" (Associative Arrays)
Always string indexes

```sh
declare -A mark # Required to do. Makes "mark" a dict
mark=([denise]=4 [bob]=9)
mark[charles]=3
mark+=([bob]=7 [alice]=5])
for k in "${!mark[@]}" ; do
	echo "$k has ${mark[$k]} marks"
done
```

# Process Substitution
cmd1 | cmd2 connects 1 command to another.
But what if you want a command to take more than 1 inputs?
`cmd <(cmd1) <(cmd2)`
- Run cmd1 and redirect to temp file
- Run cmd2 and redirect to another temp file
- Those temp files are appended into `cmd` as if it was the `stdin`

Also... this (but idk why this exists): `foo >(cmd1)`
- Sends foo into `cmd1`

#todo
https://www.cs.utoronto.ca/~trebla/CSCB09-2025-Summer/08-shell-l.pdf#Navigation45 
- What is the last slide on this!?