Refer to [[Circuits with Physical Switches]] for the first AND gate via physical switches.
ALL digital logic gates (AND, OR, NOT, etc.) are created by a combination of nMOS and pMOS [[Transistors (pMOS and nMOS)]]!

The below is a [[CMOS (or Transistor) Circuits|CMOS circuit]]

$V_{cc}$ is the top point; the ground is the bottom point (ignore the battery!) 
![[Example of Logic Gate via Transistors.png|300]]
^example-image

# Example: NAND gate

> NAND gates OP
> - They are the cheapest to make
> - They can implement *every other kind of gate*
> #todo maybe try making another gate with NAND gates

1. Reference the truth table. See what kind of output is easier / has less entries.
	1. For a NAND gate, *true* can occur in 3 ways; *false* can occur in only 1 way. Let's work with the output Y and *ground*
2. Create the appropriate half of the circuit from there!
	1. *false* occurs when A and B are true. And = series, so we will have two pMOS transistors in series going into ground. 
3. Create the other half by [[Principles of CMOS design|inverting the solved half]]
	1. For the top, the series becomes parallel and the pMOS transistors become nMOS ones.





#todo Do the rest! Refer to slide 46. You can do these as regular circuits or [[CMOS (or Transistor) Circuits]]




 
