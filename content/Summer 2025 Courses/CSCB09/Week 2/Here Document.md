A "file" that you type out (it is not a string!)
```sh
cat << MY_EOF
Something
Some other thing
Last thing
Not MY_EOF
 MY_EOF
MY_EOF FOR_REAL
MY_EOF # This ends the here document for REAL real. Cant have anything before OR after!
```
Oh, also, surrounding the FIRST end marker w/ single quotes will make the $ no longer special (prints it literally)
```sh
cat << 'EOF'
'ello world!
Also $x and $y
EOF
```

#goes-in-cheat-sheet 