> Selects 1 output from a bunch of inputs. MUX's
> These guys are *everywhere*.

- The "selector" S has $ciel(log_2(N))$ data bits where $N$ is the number of inputs to the mux 
	- S selects between the different inputs you pass and "passes through" the selected. 
	- e.g. 7 inputs means your S would need to be $3$ data bits as that represents at most 8 numbers = 8 inputs!
- M represents the output depending on what input the $S$ chooses M to "pass through"
- The inputs themselves can have $n$ data bits (the output should have the same # of data bits too)

![[Mux.png]]
>[!note] The "/" with the n above specifies how many bits the "streams" are passing. Refer to [[Data Bits]]

> An 8-to-1 mux has 8 inputs, 1 output, and should have 3 select bits.

## Design
![[Mux design.png]]
- You don't really need a k-map since $M = Y\cdot S + X \cdot \bar S$ makes sense intuitively!
	- If S is true, return Y. If S is false, return X. Nothing fancy here :)
- Similar thing for a 4-to-1 mux, for instance:
$M = \bar S_0 \cdot \bar S_1 \cdot X + \bar S_1 \cdot S_0 \cdot Y + \dots$
- For each permutation of $S_0, S_1, \bar S_0, \bar S_1$, you would have one unique output!

# Use case
- Think of TVs
	- there is a mux to determine your channel.
- Think of surveillance cameras
	- You can only display 1 of them at a time by selecting. Think fnaf lol

