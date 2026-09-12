
In order of when they are shown in the b09 slides
### LS
[[ls command]]

### pwd and cd


### ls
`ls -l` prints more information
`ls -a` prints dot files (i.e. it includes file starting with `.`)

### cat
- Usually used to dump files
- One file by itself doesn't really concatenate anything... lol
- But with many files it prints everything from them depending on their contents
`cat file1 file2 file3`

### less
lets you view a file (and you can scroll and things too wow!)

### mkdir
lets you make a directory w/ the given parent path and the final directory name

`mkdir ../newFolder`
- This creates a folder in the same directory as the directory your program is in.
	- So mkdir understands that given your path and name, itll go to said path and create this new folder 
`mkdir ./a/b/c/d` does NOT work because the directory does not exist. (there is no a, b, or c to create `d` in)

### cp (copy)

`cp myfile newname`
Or
`cp file1 file2 newDirName`
To copy a directory (and its contents) you want to do it recursively with `-R`

### mv (move)

Moves files to another directory 
`mv myFile.txt ./myDirectory ./newDirectory`

Also used to rename:
`mv myFile.txt nuclearWeaponCodes.txt`
- You cannot rename more than 1 file at a time. Any more than 2 arguments implies you're just tryna move files to another directory

### rm and `rmdir`
- `rmdir` removes a directory, but they gotta be empty before you can delete them
- rm just deletes a files
	- You can recursively delete with `rm -r` and that will delete everything within a directory

## Week 2-3
### echo
"The print command"
Takes a string and prints it out. if passed a variable or other expandable things, it will do expansion first before printing it out

By default, adds a new line to the very end of what you've echod. More than 1 spaces between arguments are ignored
- You can keep spaces with `\ `. Stack em with `\ \ \ \ ` to get lots of spaces.

### sh
Runs the script right after as a shell script (creates a shell instance)
Different from the `.` dot command

### shift
Shifts the "positional parameters" (the "arguments" as I say)


### tr
#todo This one always sucks. "Translate" or "Transform" or whatever

### `[` (test commands)
[[Test Commands]]

### seq `start` `end`
returns a sequence form `start` to `end`
i.e. `seq 0 3` returns 
0 
1
2
3
line by line!
#goes-in-cheat-sheet 