Let `int i; char c; double d`
- Note $c < i < d$ in size
`i = c` is OK since $c < i$
`c = i` is OK so long as the `i` fits 
- If `i` doesn't fit, there are some wack rules you'd have to go through
`d = i` is OK if fits but approximates if it can't be exact

`i = d` (truncates towards zero and is OK so long as the number fits)
- It's better to be explicit than use some random rule that's hard to remember, so type cast!
Also applies to when passing into functions: passing `char c` into `f(int)` would implicitly convert the types (cuz `char < int`)

#goes-in-cheat-sheet-DONE 