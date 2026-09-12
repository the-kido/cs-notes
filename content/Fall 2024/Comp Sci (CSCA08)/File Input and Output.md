# Reading files
#### `open(filename, mode)`
- A function which opens a file. There are 3 modes
	- 'r' to open for reading
	- 'w' to open for writing
		- By doing this, the old file will be totally erased. 
	- 'a' to open for appending (adding to what is already in the file)
	- Adding nothing will default to *read*. 
- You can either give the full path of the directory, or the local directory relative to the file
	- If the file is in the same place as the script, then just writing the file name is fine.

```python
file = open('testfile.txt', 'r')

line = file.readline()
while line != '':
	 # Note that if we print a string with a new line, 
	 # it will print an extra new line automatically
    
    print(line, end='') # Specify the end so the \n from readline does it for us.
    line = file.readline()

# Close the file after reading to avoid.... #todo
file.close() 
```

> Read files returned from open() are enumerable.
```python
file = open('testfile.txt', 'r')

for line in file:
    # Specify no new line since the \n from readline creates one for us.
    print(line, end='') 
```
### Generic file methods
#### `.close()`
- Closes the opened file.
### Files methods relevant to *reading*
#### `.readline()`
- Returns the next line in a file, including a new-line character every line.
- An empty line in the file will simply be `'\n'
- The only time we get an empty string is if there are no more lines to be read
#### `.read()`
- Returns a chunky string with all lines in the file.
- Not recommended for huge files. The other ones are fine though.
- If you call it again, it will return an empty string similar to .readLine()
#### `.readlines()`
- Returns a list of every line in the file. 

# Writing to files

### Files methods relevant to *writing*
#### `.write(str)`
- Writes a string to a file. Does NOT append a new line by itself, so you will explicitly add it.
```python
r = open('fruit.txt', 'r')
txt = r.read()
r.close()

w = open('newfruit.txt','w')
w.write("This is a copy\n")
w.write(txt)
w.close()

#newfruit.txt will be identical to fruit.txt but with an added line at the top.
```

### Why do we close files?
Cuz we have to. A safer way is to use 'with' tho
```python
with open('file.txt') as file:
	# file is now declared here
# After leaving that scope, the file will be automagically closed. 
```

### Misc info about files. 
A "file" is a contiguous set of bytes used to store data.
FIles contain 3 main parts
- The header of the file 
	- Metadata (size of file, purpose, date created, etc.)
- Data 
	- The content of the file
- End of file (EoF)
	- A special character indicating *end of file* (chosen by the OS)

### Other gimmicks
If you read a few lines, and then call .read(), .read() will continue off where you read those few lines previously. This is due to the cursor mechanic!