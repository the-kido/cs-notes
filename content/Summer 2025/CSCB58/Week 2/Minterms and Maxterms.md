> [!note] Intuition
> The "output" of a truth table can be described simply by explaining, at what rows the table is 0 or 1.
> Every output of a truth table can be described by simply saying at what rows the table is 0 or 1
> 
> Min-terms and max-terms help express the combinations (the inputs in a row of a truth table) that results in 0 or 1 


### Definitions
**Minterms** are AND expressions and they are represented w.r.t *all* the inputs a given truth table uses. 
They represent combinations that result in high outputs.

**Maxterms** are OR expressions and also represented w.r.t *all* the inputs for a given truth table. 
They represent combinations that result in *low* outputs.

Both of these describes the left side of the truth table. Denoted as $m_i$ for minterms and $M_i$ for maxterms where $i$ is a row (indices start at 0)

For instance, if, when A, B, and C are 0, the output is also 0, then we can describe this relation with a minterm: OR A, B, C together to get $A + B +C$ and note it will be equivalent to $0$ since OR expressions are 0 if and ONLY if the inputs are 0, which is what we're given!
> The thing to note here is that there is only 1 way that $A + B + C$ can be false, and that is when $A=0, B=0, \text{ and } C=0$
 
Likewise, If, when A, B, C are all 0, the out is also 1, then we can AND those to get $A\cdot B\cdot C$ and the ONLY time the expression is true is if $A = 1, B = 1, \text{ and } C=1$. That makes $A\cdot B \cdot C$ by definition a minterm.

![[Minterm represents.png]]

## **Sum of minterms** (SOM) and **Product of maxterms** (POM)
- Since each minterm corresponds to a single high output in the truth table, the combination of these minterms would represent *all* high outputs of a table.
	- This is done by using $+$ unions since they mean "or" and you can have $m_x$ or $m_y$ or $m_z$ or $\dots$ minterms that result in a high output.
- Similar is the case with POM's (it represents all combinations that result in the output 0) but it's the intersections $\cdot$ of the maxterms. 
	- Why? Well if we used $+$ then we would be saying "if any of the maxterms are sufficient, then the output should be 0" which is not true. Even if one of the maxterms are not sufficient, then the total POM would be *1*... that's how I am trying to think about it I guess...

## `Y = SOM` $\equiv$ `Y = POM`
- These are LOGICALLY EQUIVALENT! 




q1
Y = the # of outputs that are HIGH
There are 5 possibilities: 0, 1, 2, 3, 4
$2^2$ wouldn't be enough info, so we gotta do $2^3$. There is some wasted data (i.e. 101, 110, 111 will NEVER be true as those are 5, 6, 7 bits respectively)

3 bits = 3 "k-maps" for each column.
Then you'd combine the 3 k-map circuits to get the final output!


