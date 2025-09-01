Refer to [[Cl Readings for Scripting (24-36.1)#Tests|tests]]

There are a bunch of comparisons you can pick from. Also `[` is a command which exits 0 or 1. This means you can chain them like `[...] && [...]` or `[...] || [...]` like in [[Conditionals]]

BUT instead of doing that, you can use `-a` for AND and `-o` for OR!
Same for NOT
#goes-in-cheat-sheet-DONE 

![[NOT AND OR SH.png]]

- The `[` command takes in *arguments* and the problem is characters like `(` and `)` have special meanings in sh. To get around this, we surround them with `'` single quotes to make them lose their meaning
![[Testing and meaning SH.png]]
Also without spaces, the command wouldn't be able to differentiate between the "arguments" of the command, so please add spaces!
#goes-in-cheat-sheet-DONE 