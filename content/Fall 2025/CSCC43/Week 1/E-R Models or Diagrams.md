Doesn't define tables. It defines entities and their relations. Nothing to do to with its physical database representation, though.
- Used to figure out the important info needed to design tables (relations) in order to *physically* represent the data

Has 3 basic elements:
- An entity is an instance of an entity set.
- An entity set is a **class** / set of similar things
- Attributes are properties of entities, like their fields.

# Relationships
- They connect two entity sets
- Think of them as a table of the sets they are connected to.
	- So a relation between Movies and Stars would have a table with each movie associated with each star (and vice versa).
	- Relationships therefore define **tuples**

>Relations are just pairs of entities of the two sets
>![[Relations are just pairs of entities of the two sets.png]]
# Multiplicity
You can have:
1. One-one: Each item in an entity set associates with exactly 1 other item in another entity set
	1. Think of it as a **pair**
	2. e.g. 1 student has 1 student ID, and 1 student ID can only belong to one student!
2. Many-one: Each item can of an entity set can associate to any item in another entity set. 
	1. Usually a **hierarchy** or *parent-child*
	2. e.g. parents and children
		1. 1 parent has many children (one-to-many direction)
		2. 1 children can have 1 parent (one does not go to many a second time!)
	3. e.g. cars and car owners
		1. A car owner can own many cars. A car can only be owned by 1 person.
3. Many-many: Networks.
	1. e.g. Students and courses
		1. 1 student can take many courses (one-to-many holds in this direction)
		2. 1 course can be taken by many students (one-to-many holds the other direction, too!)

### Representing it 
![[Many to One.png]]
- No arrow for many-many
- You can "Read" it by starting at the arrow side, and saying that one of the "one" thing relates (and include the diamond relation here) to many of the "many" thing
	- A `Star` `StarsIn` many `Movie`s
- You can also think of the arrows as an "implication". For instance, giving one instance of a "many" *implies* a "one"
# Multi-way relationships
![[Better as multiway relationship ER.png]]
- Consider this E/R. We can simplify this using multi-way relationships!

#todo Understand how to go back and forth between these

- Multi-way Relationships always involve the 3+ member entities
	- Observe the below table! Each record has all 3 entities present
- Reads as: A studio contracts many stars and many movies (paired together!)

![[Multiway ER.png]]


# Roles in Relationships
When an entity set has sub-relations! Like, you can have an entity set of husbands and wives
![[Roles in Relationships.png|800]]
These are defined with edges labeled with **roles**. These roles become the columns of the table.
- It's like when you have `Stars.name1` and `Stars.name2` in SQL.
- This is many-many, so both thingys are a "key" here

Note in the below example that the table "looks" like it's asymmetrical (star 1 dictates star 2) but in reality both are equally important. 
![[Symmetry example roles in relations.png]]

>[!example] Interpret this model
>![[Roles and Three Way.png]]
>
>Okay there's a lot here, eh?
>It "reads" as "many stars and movies are contracted by a 2 studios"
>
>Or: You can have many stars, many movies. For each of them, there will be two studios associated with them.
>
>Turning this into a 2-way would be.... interesting for sure. You turn "contracts" into an entity. Then you create 4 new relations. Actually it's not as interesting as I thought it was initially.... :( 
 
### Attributes on Relationships
![[Pasted image 20251203212200.png|600]]
- Just "another thing to remember".
	- An attribute with a line going into a relation is a "entity" pointing to the relation (so the "relation" is the many part) and it has the attribute that was on the relation prior.
	- It just "looks nicer" this way... I would disagree!
## Converting Multi-way to 2-way
![[Mutli-way to 2-way.png]] 
Not awful:
- All connecting lines are broken up with a new relation
- #todo If I understand correctly, the functional dependency visualized by the 3-way is *removed* in the converted 2-way-only system.
	- Means you cannot do the "backwards" direction easily
# Subclasses
![[Subclasses ER.png|600]]
## `isa`
- Lets you not rewrite common properties between objects.
- It's a one-one relation
- For instance, an action movie is a kind of movie, with perhaps a certain extra property.
- NO multiple inheritance
- Properties of the inherited class is the *union* of the class it's inheriting from as well.
