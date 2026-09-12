## DQL
SQL operators only *read* from databases!
So SQL only *queries*. It's a **DQL** (data query language)

# Data Modification Language (DML)
Another part of SQL (as is DQL)

Modifications consist of:
- *Inserting*,
- *Deleting*, and
- *Updating* data!

### INSERT-ing
```sql
INSERT INTO <relation/table> VALUES (<list of records>)
```

```SQL
INSERT INTO StarsIn(movie_title, star_name, movie_year)  
VALUES ('Star Wars', 'Harrison Ford', 1977), 
	   ('Star Wars', 'Mark Hamill', 1977)
```
You can add many records as long as they are separated with `,` commas.
- The attributes in the bracket for `StarsIn` specifies the "order" of the listed attributes. Means when you add new records, the values match the order you specifiy.
- E.g.,: If you don't do `StarsIn(movie_title, star_name, movie_year)` (as in you just do `StarsIn`, then it will default to the table's attributes order. The `(stuff)` *overrides* the order. Like doing `func(arg2 = 3, arg1 = 4)` in C#

#todo Do you have to list all attributes? Will it `null` the attributes you don't list?

#### Inserting the result of a Query

```sql
INSERT INTO <relation> (<subquery>)

eg.

INSERT INTO Studios(name)
	SELECT DISTINCT studio_name
	FROM Movies
	WHERE studio_name NOT IN (SELECT name
							  FROM Studios)
```

The subquery is the `SELECT FROM WHERE` thing
It inserts it so long as the Query has the same Schema. In the above example, it is, since `Studios(name)` asks for a name, and the Query returns a `studio_name` column

### DELETE-ing

```sql
DELETE FROM <relation> 
WHERE <condition>
```
Remember how *WHERE* selects tuples? Same thing here

If you don't specify the WHERE, it'll make the *whole* table empty! Think of the condition as "always true" and therefore matching everything for deletion.
### UPDATE-ing
```sql
UPDATE <relation>
SET <new-value>
WHERE <condition>
```

Example: Prefixing the name of every movie executive with "Pres"
```sql
UPDATE MovieExec
SET name = 'Pres. ' || name
WHERE certno IN (SELECT pres_cno FROM Studios)
```
- SETs the `name` of every tuple in `MovieExec` WHERE they have a `certno` (its *IN*) in the `Studios` table 
- `||` does concatenation 

### CREATE-ing
This is DDL (Data Definition Language)

```sql
CREATE TABLE <name> (<list of elements>)

CREATE TABLE Studios (
	name CHAR(20),
	address VARCHAR(20),
	pres_cno REAL)

DROP TABLE Studios
```
- *Principle* elements are your columns/attribute (the name, then and type)
- `DROP TABLE <table-name>` literally deletes the whole table

#todo Come back to when done Week 7
- `CREATE <type>` lets you create other objects, like `VIEWS, INDEX, ASSERTION, TRIGGER`, etc.
- `DROP <type> name` deletes the created element of type `<type>` (views, index, etc.) with the name `"name"`

## Types
- `INT` or `INTEGER` if you wanna be verbose
- `BOOLEAN`
- `REAL` or `FLOAT`
- `CHAR`(n) is a "string"
	- This is for fixed length characters, padded with "pad characters"
	- If you insert a char of size 12 for a `CHAR(10)`, the other 2 chars are ignored (so it allocates `11` in size? #todo)
- `VARCHAR(n)` is a variable-length string but at max `n` characters
	- For shorter strings, the "length" of the attribute will be the actual length (not always `n` like for `CHAR(n)`)
	- Also more space efficient. Shorter strings occupy less space. But it's *slower* performance wise

> There are more types at times. MySQL and PostgreSQL might have different ones

## Declaring Keys
`PRIMARY KEY`defines a key, or you can use `UNIQUE`
- A table can only have `1` primary key. 
- It can have many `UNIQUE` attributes, and they are nullable (unlike keys, which cannot be nullable, but you CANNOT repeat the non-null values--coz unique, duh)

#### Syntax
`PRIMARY KEY(name)` goes usually near the end of the table creation. It just asserts "hey, `name` is a key!"
You can also put `PRIMARY KEY` after the type

The UNIQUE "property" is the same as PRIMARY KEY.

#todo remember this syntax!
#### Example
```SQL
CREATE TABLE Studios_v1 (
	name CHAR(20) PRIMARY KEY,
	address VARCHAR(20) UNIQUE,
	pres_cno REAL UNIQUE)

you can also do:

CREATE TABLE Studios_v2 (
	name CHAR(20),
	address VARCHAR(20),
	pres_cno REAL,
	UNIQUE(adderss, pres_cno),
	PRIMARY KEY(name)
	
but for the above, address + press_cno are exclusively unique. You can have either or; it's not enforced that it be both
```

### Other Properties of Attributes
So far we have `UNIQUE` and `PRIMARY KEY`. There is also:

- `NOT NULL` = the attribute is not nullable.
- `DEFAULT <value>` = a value to use when no value is present

Example
```sql
CREATE TABLE Studios(
	name CHAR(30) PRIMARY KEY,
	addr CHAR(50) DEFAULT '123 Seasame St',
	pres_cno REAL NOT NULL)
```

So when you do
```SQL
INSERT INTO Studios(name, pres_cno)  
VALUES('Fox', 90943)
```
The table would just be
`  name |    address      | pres_cno  `
`  Fox  | '123 Sesame St' | 90943     `
- The middle is auto-filled by the `DEFAULT` declaration
### ALTER-ing columns of a table
**ALTER TABLE** for all your table-column-manipulation needs! 

`ALTER TABLE R ADD <column-declaration>`
Or 
`ALTER TABLE R DROP <name-of-column>`

Examples:
```sql
CREATE TABLE MovieStars (  
	name CHAR(30),  
	address VARCHAR(255),  
	gender CHAR(1),  
	birthdate DATE,  
	PRIMARY KEY(name))  

ALTER TABLE MovieStars ADD phone CHAR(16) DEFAULT 'unlisted'
```
So this updates the `MovieStars` table to also have a *new* column called `phone` which is a string with a default value of `'unlisted'`!

And if we don't want the column anymore we just:
`ALTER TABLE MovieStars DROP birthdate`
## Data Control Language (DCL) for setting authorization
- Another another part of SQL (as was Data Query Language and Data Modification Language)
- Lets users access database objects, like databases's, tables, columns, rows, etc.

### GRANT-ing access

Syntax for *granting* access to a certain `ops` (operation) ON a certain object TO a certain trustworthy user!
```SQL
GRANT SELECT ON Movies TO user1
```
and if another user is not trustworthy anymore because they keep inserting garbage movies:
```sql
REVOKE INSERT ON Movies FROM user1
```

# PostgreSQL time
useless
