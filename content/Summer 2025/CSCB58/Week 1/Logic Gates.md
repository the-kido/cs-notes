Takes in one or more binary inputs and results in 1 binary output. The result does not "float"; [[Physical Representation of Boolean Values|as discussed here]] the output must either be $V_{cc}$ (high) or ground (low) to represent true and false.

They are built by [[Transistors (pMOS and nMOS)|transistors]]
# Gates that take in more than 1 input
The prefixes for these names are intuitive:
- X $\rightarrow$ Exclusive (used only with XOR)
- N $\rightarrow$ Not (the inverse of)

## AND gate
> If the inputs are all true, then the output is true.
![[AND.png|300]]

- if either var is 0, will return 0.
- If both var are 1, will return 1

The truth table is as follows:

| A   | B   | Result (Y) |
| --- | --- | ---------- |
| 0   | 0   | 0          |
| 0   | 1   | 0          |
| 1   | 0   | 0          |
| 1   | 1   | 1          |

## OR gates
> If any variable is 1, will return 1.
> If both variables are 0, will return 0.
![[OR.png|300]]

| A   | B   | Result (Y) |
| --- | --- | ---------- |
| 0   | 0   | 0          |
| 0   | 1   | 1          |
| 1   | 0   | 1          |
| 1   | 1   | 1          |

## XOR gates
"Exclusive or". "Only if one is true"
![[XOR.png|300]]
- if both vars are 0 or 1, then the result is 0.
- Alternatively:
	- Returns a high value if inputs are different
	- or
	- Returns a high value when the number of high inputs is odd 
- if 1 var is 0 and the other is 1, then the result is 1.
- Basically this is like the "English" version of "OR" 
	- If A = 1 and B = 1, you don't say A **or** B are true in English. You say that A **and** B is true because that's a stronger, clearer statement.
	- This is reflected in XOR gates, who instead of letting Y = 1 when A = B = 1, it makes Y = 0 instead, and it's your job to use an AND gate, for example, to show A and B are true.  

| A       | B       | Result (Y) |
| ------- | ------- | ---------- |
| 0       | 0       | 0          |
| 0       | 1       | 1          |
| 1       | 0       | 1          |
| ***1*** | ***1*** | ***0***    |

## NAND gates
> **N**OT **AND** gate. The opposite of an AND gate.
![[NAND.png|300]]

Refer to [[Inversion Bubble]] for more explanation on the little bubble at the end of the gate right before the Y output.

| A   | B   | Result (Y) |
| --- | --- | ---------- |
| 0   | 0   | 1          |
| 0   | 1   | 1          |
| 1   | 0   | 1          |
| 1   | 1   | 0          |
## NOR gates
>NOT or gate
![[NOR.png|300]]

| A   | B   | Result (Y) |
| --- | --- | ---------- |
| 0   | 0   | 1          |
| 0   | 1   | 0          |
| 1   | 0   | 0          |
| 1   | 1   | 0          |
# Gates that take in 1 input
## Buffer
> Takes something, returns the same thing
> Becomes useful *later*
![[Buffer.png|300]]

| A   | Result (Y) |
| --- | ---------- |
| 0   | 0          |
| 1   | 1          |

## Inverter
> Takes something, returns the *opposite*
![[Inverter.png|300]]

| A   | Result (Y) |
| --- | ---------- |
| 0   | 1          |
| 1   | 0          |


