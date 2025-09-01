c programs cannot run literal text. It's got to turn into machine instructions first in some platform-dependent executable format. The compiler will read your code, check its syntax, enforce C conventions, then turn it into executable instructions. 

![[Pasted image 20250107151150.png]]

## GCC
The default executable is "a.exe". To change that, while running `gcc test.c`, include a flag to specify the file's name with `-o test.exe`
```bash
gcc test.c -o test.exe
```

>[!note] `-Wall` will show all warnings and things (windows thing )
>
```bash
gcc test.c -o test.exe -Wall
```
