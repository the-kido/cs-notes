The [[Minterms and Maxterms#**Sum of minterms** (SOM) and **Product of maxterms** (POM)|SOM]] is an expression that represents all high outputs for every combination of the given inputs. However, it is really really big and ugly.

#### The hard way
The first, but more involved way to reduce a SOM is by using your [[Boolean Algebra]] axioms and laws.
It works, but you cannot be guaranteed to get the most reduced version of the expression


#### The better way (K-Maps)
#todo
tl;dr you make groups; the common factors you add together to get the simplified expression (that is literally it. it's that easy!)



- We don't want to just GUESS what algebra to do to get the best circuit. 
- So we use K-maps (Karnaugh maps). 
	- Each row/column has only one "change" between the two expressions
		- Between 01 and 10, there are "2" changes. K-maps are ordered such that there is only 1 change between columns 
	- You can have at most 4 inputs.
- It will show what terms are "common" in the most efficient way. In the slide abt `karnaugh maps`, notice you could technically pull out C if you wanted to, but that it would be better to pull out A and B and C since A and B is common between the two minterms. 
	- Maybe this example isn't the best because it's too simple
- The "groups" must have powers of "2" items 
	- But the groups CAN overlap.
- To find the SMALLEST expression, we want the smallest # of boxes, all of which are as BIG as possible.
- Since the "change" between columns is only 1, you can find a common input within le group and factor that out.




