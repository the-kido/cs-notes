`H[3] = address of H[0] + 3 * 2` where H is an array of half-words
`3 * 2` is the offset 

`A: .space 400`... is that equivalent to `A: .word 100` ? #todo 
You gotta do `B: .word 42:100` cuz that initialises the array to 42

When doing `la` with a label, A and B are in RAM right? So are the addresses not the same as the 32 ones in the register file? #todo 
oh right it's `lw` or `sw` for load/store word


For the optimization, `sll` has two registers (`i` and `i * 4`) so the idea is to not keep the `i` and just have `i * 4` and increment it by 4 (cuz that's the size of a word) each iteration

Optimization two: instead of calling `j` and `bge` every loop, we can just jump once and branch each loop.

#### Strings!
Array of char (byte, not a word!)
`.word`, `.space`, these are *directives* (anything that starts with `.`)
So `.asciiz` is the directive for strings. The assembler now knows the characters become bytes! The null terminator is added implicitly.
- It understands things like `\n`

#### Structs!
- Structs store many data types!
- Remember for lw or sw, we need to access thingys *aligned* (you cant load a word at location `1` for instance cuz words are aligned on addresses divisible by 4). 
	- For instance, a struct of char and int would be in total 5 bytes. But that's not possible because if the struct starts at position 0, then char would be at 0 and int would be at 1. That's not aligned!
	- Instead, you treat the char as a 4 byte value. It is a bit wasteful but it's necessary
	- This is `padding`. This struct is actually 8 bytes (not 5)

```c
#include <stdio.h>

struct a {
    int a;
    char b;
};

int main() {
    printf("%d", sizeof(struct a)); // This prints 8, not 5!!!!
}
```

### Functions
- An "interface" for a bunch of lines of code
- This interface asks for inputs and specifies outputs. It has a name and content where values are returned, too.

#### Parameters
- Option #1: just use the registers for return values (`v0, v1`) and args (`a0 to a3`)
	- But if you need more args and return values you're out luck. 
	- Also, what if you need to call another function?! Recursion would be pain
- Option #2: We use the stack!
	- Set some memory for this stack
	- `$sp` is the register that points to the *top* of the stack (`push`-ing onto the stack)
	- A function caller would push parameters to the top of the stack such that it grows!
	- "Then the function `pops` the parameters from the stack using `$sp`" #todo wat. It was making sense before this
- I think the stack goes "up" in that, if you want to add a new thing, the index goes down??
	- So if the stack starts at, idk `$sp = 1000`. If you want to push to the stack, then `$sp = 996` depending on the size of the stack element what is this called 

#### Implementation time
Idea: the function is a label, but instead of jumping to it directly, we also cache where the function was called. The caller will push the params on stack in order (a, b, c). When we pop them we pop c, b, a (reverse order!)
- These are your `calling conventions` (ways the caller and callee agree on how params and stuff work between them -- order, mechanism, etc.)
Return values again are stored by pushing it onto the stack! Or you can use `$v0` and `$v1`
To go back to what we called, we use `$ra` (return address) instead of storing it in the stash
- This is done with `jal` (jump and link) which jumps to the function *and* stores the next line's address (`PC + 4)` into `$ra`
- But what about functions in functions!? `$ra` would be overridden!
- #todo i didn't catch this part

#### Functions r kinda slow
"Expected lines" = "predictability" = "optimisations"
"Jumps" = "no predictability" = 'no optimisations'

#### Functions in functions
- Problems: `$ra` will be overridden. Also if `$t` temp values are used by both functions then uh oh, also overridden
- The order in which you push is important. Remember the *calling conventions*.
- We only need to push `$t2` because `$t0` and `$t1` are not needed past the first`max` call #todo go over this again
- t0-t9 are caller-saved (the caller is responsible for "perserving" the value). s0-s7 are callee-saved (the callee is responsible) #todo I thinkt his means like, the caller shouldn't override it if it needs it
- plz go over the slides (82 specifically)
- 








#todo
STAB52 <-- I wanna murder this
C43
C09
MUZA80 (sans c10)
CSC236