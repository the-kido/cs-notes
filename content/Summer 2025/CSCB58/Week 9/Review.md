The 8 types of ASM instructions
1. Arithmetic
2. Logical 
	1. `and`, `or`, `10101000 * 10000000` = `10000000`. You get the idea!
3. Bit shifting
	1. `sll`, `sra`, shift less than, shift right arithmetic (multiplies by 2!)
4. Data movement
	1. `mflo`, `mfhi`, move from low, move from hi, etc.
5. Branch
	1. `beq`, `bgtz`, terrible names
6. Jump 
	1. `j`, `jr`,
7. Comparison
	1. `slt`, `sltu`. Returns 0 or 1
8. Memory
	1. `lw`, `sw`


==Important for me==
`move $t1 $t2 = add $t1 $zero $t2`

`li $s0 i`= load immediate 32 bit number. Because otherwise you can only load 16 bit numbers with `lui`and `ori` #todo

Question 2
```mips
li $t1 10
li $t2 3
sll $t3 $t2 1 # im so smart for this
add $t3 $t3 $t1
```


```mips
START: 
	blt a b ELSE
	blt c b ELSE
IF: 
	addi b b 1
	j DONE
ELSE:
	subi b b 1
DONE:
	li $v0 10
	syscall
```

Loops
```mips
main: # INIT
	li $t0 0
	li $t1 0
	li $t9 100 # This be the max
START: # WHILE
	beq $t0 $t9 EXIT 
	addi $t1 $t1 1
UPDATE: # DO
	addi $t0 $t0 1
```

```mips
main:
	li $t0 3 # This is X
	li $t1 4 # This is Y
	li $t2 0  # This is a counter
	li $t3 1 # This is the result!
LOOP:
	beq $t2 $t1 END # When counter = Y
	mult $t3 $t0
	mflo $t3
	addi $t2 $t2 1
	j LOOP 
END:
	# stuff
```

`arr: .byte 0:48`
0 means each item has a value of 0; there are 48 of them

#todo Slide 12 is weird

Structs must be word-aligned!
```c
struct a {
    int a;
    char b;
};
```
remember that example. it's good example! Uses padding

![[Structs and Padding for word alignment.png]]


to *add* item to stack
```MIPS
addi $sp $sp -4 # Increase stack size
sw $t0 0($sp)
```

to *remove* item to stack
```MIPS
lw $t0 0($sp)
addi $sp $sp 4 # Increase stack size
```

Function calls:
- All args / fields go into stack in order (A, B, C)
- Then $ra goes into stack. We call with `jal`
- Pop ra. 
- Pop C, B, A, load those n things.
- do stuff
- store returned stuff onto stack
- jump back to $ra via `jr`
- pop returned stuff
- donezo!

When dividing, remainder goes into the `HI` register whereas the quotient goes into `LO`
