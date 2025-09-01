- Every input assignment should make the path from the output to exclusively $V_{cc}$ or ground (not both, otherwise you'' get a [[Short-Circuiting|short-circuit!]])
- Take for instance [[#^example-image|this example]]. When A = 0, then the output is only connected to *ground*. When A = 1, the output is only connected to $V_{cc}$

# Ensuring we don't get a short circuit
- You can create the top half of the CMOS circuit, then copy and *invert* that top half onto the bottom half: 
	- nMOS becomes pMOS and vice versa
	- series becomes parallel and vice versa
- That means creating one side basically GIVES you the other side!

