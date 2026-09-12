A *set* of attributes (one or more) that the rest of the properties of an entity set depend on.
- For a entity `E`, a subset of attributes `K` are the "keys" if, for two unique entities, `e_1`, `e_2`, the keys MUST be unique as well.
	- Likewise, if the keys are the same, the entities are the same (contrapositive)

In an entity set, it's the *key* the differentiates items (keys are unique for each entity)
- Each entity set MUST have a key set
	- You can have **many keys**, but 1 is the *designated key*
		- I.e. a car can have license plates and a `VIN`. Both are possible keys, but one must be designated. 
	- A key with other attributes that could technically be removed / are redundant is a *super key*.

![[Key.png]]

### Key Inheritance
- The root key is used for subclasses. 

![[Root key for subclasses.png|500]]

