Equal objects *must* have equal hash codes. Objects are equal --> Hashcodes are equal
- Remember what "equal" objects mean depending on how `equals()` is overriden
	- Oh yeah if `equals()` is overriden then you should almost always change `hashCode()` as well.
- A *good* hashCode tends to produce unequal hash codes for unequal objects
	- But at times unequal hashcodes may still reference 
	- $\text{Unequal Objects} \to \text{Unequal Hash Codes}$
		- But two unequal objects may still have the same hash code (it just be like that sometimes)
	- 