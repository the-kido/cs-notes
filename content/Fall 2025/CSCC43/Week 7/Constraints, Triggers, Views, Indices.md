This should be *the last of the hard lectures* so if I can finish this, I might be onto a winner for the rest of them!?

If not, I'll most certainly be done all of it by tomorrow, with... very little time for my other courses but sheesh who needs STAB52 or CSC236 anyway, am I right?

### What are constraints?
We want to be able to declare:
1. Primary keys (we got that)
2. Foreign keys (inter-relational constraints)
3. Attribute-and-tuple-based checks (intra-relational constraints)
4. SQL assertions (*global* constraints)

## Foreign Keys
BASICALLY `->` Pointers `->`

Uses *keyword* `REFERENCES`

If you have a table where one column references the *key* of another table, that is a *foreign* key!
- Within relation $R$ who has a column $A$ that points to a key B of relation $S$, we say "`<attribute> A REFERENCES S(B)`"

Example:
Underscores around attribute means it's a key. Thanks....
1. `MovieExec(name, address, __certno__, net-worth)`  
2. `Studios(__name__, addr, pres_no)`
```sql
CREATE TABLE Studios (
	name CHAR(30) PRIMARY KEY,
	addr CHAR(50) DEFAULT '123 Seasame St'
	pres_no REAL REFERENCES MovieExec(certno))
```
### What's the prize?

1. When you update or insert a tuple of `Studios`, if the `pres_no` doesn't point to a `certno` for `MoviesExec` (i.e., dangling pointer) it will *always reject*!
2. If you delete or update a `MovieExec` tuple that has a `certno` that's pointed to (like in Studios), then
	1. Default: it rejects the operation
	2. `CASCADE`: Ripple the changes to the referring tuples (like Studios would update *its* tuple too)
	3. `SET NULL`: Changes referring tuples to NULL for all tables once referring to it.

### How do you select which option when deleting/updating?
We select a policy!!

## Selecting Policy
You can set the policy on a per-key basis.

Syntax: `ON [DELETE, UPDATE] [CASCADE, SET NULL]`
- That's 4 total permutations there 💯

```SQL
CREATE TABLE Studios (  
	name CHAR(30) PRIMARY KEY,  
	addr CHAR(50) DEFAULT '123 Sesame St',  
	pres_cno REAL,  
	FOREIGN KEY (pres_cno) REFERENCES MovieExec(certno)  
		ON DELETE SET NULL  
		ON UPDATE CASCADE)
```
In this above example, when we delete a `MoviesExec` tuple that Studios was pointing to, it'll set the pointer to null.
If `MoviesExec` *updates* a pointed-at tuple, `Studios` will update theirs too with `CASCADE`


## Checks for Attributes
Kind of goated. Basically a sanity-checker every time you update an attribute in a table.
Style follows an attribute with `CHECK <condition-that-involves-the-attribute-usually>`

```sql
CREATE TABLE Studios (  
	name CHAR(30) PRIMARY KEY,  
	addr CHAR(50) DEFAULT '123 Sesame St',  
	pres_cno REAL CHECK (pres_cno >= 100000),  
	FOREIGN KEY (pres_cno) REFERENCES MovieExec(certno)  
		ON DELETE SET NULL  
		ON UPDATE CASCADE)
```
- `pres_cno` is ensured to be `>= 100000`. 
- This check only occurs on updates or *adds* (not deletes, like with foreign-keys)

*But what if you want to compare many tuples at once every insertion or update?*
### Tuple-based checks
A table-whide check

```SQL
CREATE TABLE MovieStars (  
	name CHAR(30) PRIMARY KEY,  
	address CHAR(255),  
	gender CHAR(1),  
	birthdate DATE,  
	CHECK (gender = 'F' OR name NOT LIKE 'Ms. %')
```
Now the CHECK validifies many attributes at once. 

Also `(gender = 'M' AND name NOT LIKE 'Ms. %')` is an invalid check since it means if `gender = 'F"` then the check fails every time. No women allowed smh

## ⚠️ASSERTIONS⚠️

Creates like you create TABLES. It's a DB-wide thing. Unlike the tuple-checks which are scoped within the tables.

Checked *whenever* a mentioned relation**s** changes.

Syntax for creation:
```
CREATE ASSERTION <name-of-assertion>  
CHECK(<condition-like-in-WHERE-clause>)
```

```sql
CREATE ASSERTION RichPres CHECK  
	(NOT EXISTS(SELECT *  
		FROM Studios, MovieExec  
		WHERE pres_cno = certno AND  
			net_worth < 10000000))
```
- This checks that there does NOT exist a `MovieExec` of a `Studio` whose net worth is at least 10,000,000
	- If so, things should happen

## Triggers (Event, Condition, Action)
Goes a step further. Also gosh this is so much STUFF for such a small period of time...

- **EVENT** = A class of changes in the DB (like `INSERT`ion into `Studio`'s table)
- **CONDITION** = A test (like a WHERE clause) to see if the "trigger" action applies or not
- **ACTION** = One or more SQL statements to do something.

```SQL
CREATE TRIGGER NetWorthTrigger  
AFTER UPDATE OF net_worth ON MovieExec  
REFERENCING  
	OLD ROW AS OldTuple,  
	NEW ROW AS NewTuple  
	FOR EACH ROW  
WHEN(OldTuple.net_worth > NewTuple.net_worth)  
	UPDATE MovieExec  
	SET net_worth = OldTuple.net_worth  
	WHERE certno = NewTuple.certno
```

yeah we don't need to remember this clearly (look at all the new words smh)

## Views
Sort of like *wrappers*, I think, for tables/relations

Syntax: `CREATE VIEW <name-of-view> AS <sql-query>`

```SQL
CREATE VIEW ParamountMovies AS  
	SELECT title, year  
	FROM Movies  
	WHERE studio_name = 'Paramount'
```
Look at now nice that is! It references *movies* so if we update that, it'll basically update this mask of a table.
You can even use it like any other table in queries

```SQL
SELECT title  
FROM ParamountMovies -- This is a VIEW!  
WHERE year = 1979
```
