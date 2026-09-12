- Tables are "relations"
- Column headers are "attributes"
- Attributes have domains which are atomic types
- Rows are "tuples"

A *relational* schema looks like: `name(attributes) + other info (keys, constraints)`
A DB schema is a collection of relational schemas

### But why relations
- Coz they're easy. They're just flipping tables. Math is easy on them too

### E/R design to Relational Design

#### Entity Sets
- Entity sets become **relations**
- Relationships become **relations**

![[ER design to Relational Design.png|500]]
Relations look like `Movies(title, year, length, film-type)`
- You underline the "key" attributes in the relation, which means if two tuples have the same key, they must also have the same attributes (i.e. basically keys define uniqueness. *Same as E/R*)
- That relation looks like:
![[Keys in relationships.png|300]]
#### Relations
- The (primary) *key* attributes of each entity set participates in the *relation*.
	- So if there are sets A and B tied to relation R, then R gets the keys of A and B in the form `A(a_key, b_key)`
	- Depending on the multiplicity, one, the other, or both become the "key" (the "many" sides is always the key since that's what varies)
	- In SQL, these keys would be "foreign" keys!
	- For **many-to-many**, *both* are keys. 
	- For **one-to-one**, you can use *either* key

#### Example
![[Big ER to Relational example.png]]
1. `stars-in` is many-many so both foreign keys are keys for the relation.
2. `directs` is many-one, the `title` of `Movies` is the key since it's the "many" side.
3. `co-stars` has roles. So two co-stars are paired. Both are equally important (this is a many-many-like relation) in the pair so both names are keyed
	1. Remember, 1 star can be co-stars with many other stars in various movies. Vice versa holds, too.
4. acted-as is one-to-one, so having just 1 attr keyed is enough since it's only possible for 1 of these pairs to exist.
	1. Having a star who was a husband implies you already have the wife. I guess the actor doesn't act as husband more than once? They're faithful ig

