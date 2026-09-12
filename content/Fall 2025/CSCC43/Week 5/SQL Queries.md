
```sql
SELECT -- The desired attributes you wanna select
FROM -- tuple variables (range over relations, tables)
WHERE -- Condition about tuple variables
```

```sql
SELECT * -- This means "all" attributes of the table FROM
FROM Movies -- This is a table
WHERE studio-name='Disney' AND year=1990
```
- This *selects* ($\sigma$) all movies whose studio name is Disney and whose year is 1990.

In terms of relational operators and the order in which you design these single-relation queries:
1. FROM is the relation we're dealing with. We start here
2. WHERE is a bag $\sigma$. For each tuple, we check this condition.
3. SELECT is your extended, bag $\pi$. If the tuple satisfies the condition, it's attributes are added as specified by the SELECT (which describes the *new* columns)

### AS example
- You can do extended projection (renaming and doing operations) with `AS`
- Reads as `__thing__ AS __newThing__`
	- The "thing" can be an attribute name, or even an expression using attributes (like addition or division)

```SQL
SELECT title AS name, length / 60.0 AS duration -- duration # Renaming + expression done here!
FROM Movies
WHERE studio-name='Disney' AND year>=1990
```
- You can use a constant expression to fill all rows of a new column
```sql
SELECT title as name, length as duration, 'bazinga' as meta
(...rest of stuff goes here)
```

### Patterns (like regex)
- Two single quotes like `'hello'` starts a string.
- Having two `''` single quotes together represents a *single* single-quote inside of a string (for escaping)
	- `'Wayne''s world'` = `Wayne's World`

`%` for "any string"
`_` for "one character"
`attribute LIKE pattern`  is true if a string matches a pattern. You can also do `NOT LIKE` for the negation
### `LIKE` condition

```sql
SELECT title 
FROM Movies
WHERE title LIKE 'Star ____' -- This matches title to the regex!
```

#### Nulls
- The meaning is versatile (could be 'value inapplicable' or 'missing value' etc.)
- Operations whose expressions are NULL return NULL if i understand correctly
There are TRUE, FALSE and UNKNOWN truth values.

If any part of an operation is UNKNOWN, the entire result is UNKNOWN. They propagate like a disease 
![[The NULL selection disease.png|600]]
### 3-valued logic
Let TRUE = 1, FALSE = 0, and UNKNOWN = 1/2
- AND = $\min$
- OR = $\max$
- NOT = $1 - x$

`p OR (NOT p)` is TRUE in a 2-valued system
but in a 3-valued system, if `p` was 1/2, then 
`min(1/2, (1 - 1/2) = 1/2 != 1` so it's not always true. 

## Multi-relational queries
```sql
SELECT name
FROM Movies, MovieExec
WHERE title='Star Wars' AND producer-c# = cert#
```
- We didn't have to use `Movies.title` or `MovieExec.cert#` since there was no ambiguity between the **product** of the two tables
	- Multi-relational = product of the two tables!

#### Explicit Tuple Variables
In the case of ambiguity (two of the SAME table), we specify the relation name in the `FROM`, then use that everywhere else (like a pseudo-name)
```sql
SELECT Star1.name, Star2.name
FROM MovieStars Star1, Moviestars Star2
WHERE Star1.address == Star2.address AND Star1.name < Star2.name
```

For `Star1.name < Star2.name`, you use `<` and not `!=` cuz `!=` would create *two* pairs. I.e., we don't want `(Carrie, Carrie)` twice
- Think: "`!=` $\equiv$ `<` $\wedge$ `>`"
- We're going thru MovieStars twice. There's one instance where star1 is hit, and finds star2 as a match, and another where star2 is hit, and star1 is a match. Well flip, now we have both! How filter? Just use `<`
	- It's actually like the thing I explained Yusuf. If it doesn't make sense that's fine but yeah

## Union/Difference/Intersection
Intersection doesn't look so bad. It's basically two subqueries merged with an `INTERSECT` or `UNION` or `EXCEPT`
- *Make sure the schemas of the tables are the same though!*
```SQL 
(SELECT name
FROM MovieStars
WHERE gender = 'F')
	INTERSECT
(SELECT name
FROM MovieStars
WHERE net-worth > 1000000)
```
- All woman with net worths greater than `1000000`

> You do NOT need a `Where` clause. You can just exclude it

```SQL
(SELECT name
FROM MovieStars)
	EXCEPT
(SELECT name
FROM MovieExec)
```
- Gets all movie stars who are not also movie execs

## Subqueries
WHERE  can take another `(SELECT FROM WHERE)` combo as well!

```SQL
SELECT title, year
FROM Movies
WHERE length = (SELECT length 
				FROM Movies
				WHERE title = 'Star Wars' AND year = 1977)
```
- Similar to doing `WHERE length = otherAttr` except that other attr is the attr given by `SELECT` the subquery

### IN
- Checks if an attribute of a table is in another table (i.e., a Subquery) with a schema that contains that attribute to find.

```SQL
SELECT name, birthdate
FROM MovieStars
WHERE name IN (SELECT star-name
				FROM StarsIn
				WHERE movie-title='Star Wars' AND movie-year=1977)
```
- This matches the tuple `(name)` with the table formed by the subquery (which happens to have tuples with only 1 thing: `star-name`). If the `(name)` tuple is in (matches) a tuple in the subquery, then it's returned

### EXISTS(relation)
- True iff relation is not empty
- It takes a relation/table and if it has stuff, it'll be true. So it's a boolean. So it's for your `WHERE` clauses
![[EXISTS SQL.png|600]]
- `<>` means `!=` to. It's the same but it's for some "standard compliance" reason. People prefer `<>` though. Interesting
### ALL / ANY
- ALL takes a table. Lets you compare an attribute with ALL of the elements in a table. 

```SQL
SELECT title, year
FROM Movies
WHERE length >= ALL(SELECT length
					FROM Movies)
```
- This find the longest movie!
	- We go through every movie tuple. For each tuple, we see if its length is `>=` to all movies (again, so this a a subquery)
- `ALL` = The condition `length >= tuple` must be true for all `tuple`'s.
- `ANY` = The condition `length >= tuple` must be true for at least one `tuple`
	- So if we're on tuple with `length = 10` and there are two tuples in the subquery with `length = 3, 10, 12`, the `ANY` would end at `3` since `10 >= 3` holds. It's not the greatest length though. 12 is the greatest.
#### You can use subqueries inside the FROM clause as well, but that's obvious.
- You put the name of the table *after* the ending `)` for the subquery

![[Subqueries in FROM Clauses.png]]
I highlighted the name `Prod` for you.

### Joins
- instead of doing `SELECT FROM WHERE` you can do things like `R NATURAL JOIN S` or `R JOIN S ON (condition)`
	- Condition could be like, `R.title = S.title`
- `R NATURAL JOIN S`
	- Same as $R ⨝ S$
- `R JOIN S ON condition`
	- Same as $R ⨝_{\text{condition}} S$
- `R CROSS JOIN S`
	- Literally just product. Same as $R \times S$
- `R OUTER JOIN S`
	- Same as $R ⨝_O S$
	- It nulls the things that aren't common ykyk

Example: Note how we have a condition in the WHERE that filters elements by comparing both Movies and MovieExec. We can instead move that into a theta join for maximum efficiency!
```SQL
SELECT name  
FROM Movies, MovieExec  
WHERE title = 'Star Wars' AND producer-c# = cert#  


SELECT name  
FROM Movies JOIN MovieExec ON producer-c# = cert#  
WHERE title = 'Star Wars'
```

### Bag stuff
- `DISTINCT` after `SELECT` to get unique **selections**. (usually it's bag semantics)
- Also `ALL` after **unions/intersections/differences** to make them bag (cuz normally they do *set* semantics)
Example #1: DISTINCT
- This only gives *unique* star names
```SQL
SELECT DISTINCT name  
FROM MovieStars
```
- If you have 4 actors but 2 have the same name, it'll just have 3 entries instead.

This query is NOT allowed. Distinct has to be the *start* of the SELECT line (because it applies to the entire row, not just one column)
```SQL
SELECT age, DISTINCT name
FROM MovieStars

-- Fix! Add distinct first. Now the tuples will be all unique pairs of age and name. if two entries have the same
-- age and name, then it will be ignored.
SELECT DISTINCT age, name
FROM MovieStars
```

Example #2: DISTINCT again
- The first query simply returns the COUNT (that means, the number of times a row has a `length`, but `DISTINCT` enforces that if there are two lengths that are the same, we don't count that)
- The second query has an issue. The `length` might be of size `5` but `COUNT(DISTINCT length)` only returns `1` row for the entire table (we haven't grouped)
```sql
SELECT COUNT(DISTINCT length)  
FROM Movies  
WHERE year = 2002

SELECT length, COUNT(DISTINCT length)  
FROM Movies  
WHERE year = 2002
```


Example #3: Bag semantics
```SQL
(SELECT name, address  
FROM MovieStars)  
	UNION ALL -- Now we're using BAG semantics
(SELECT name, address  
FROM MovieExec)
```


# Aggregation
`SUM, AVG, MIN, MAX, COUNT` for attributes (columns)
It turns a `SELECT` into an answer for "What's the COUNT(...)". It's just 1 cell with the number. The table is truncated basically (without `GROUP BY`)
```SQL
SELECT AVG(length)  
FROM Movies  
WHERE year = 2002
```

Oh but `COUNT(*)` also applies to tuples.
- Example query below: This returns the *count* (so a 1x1 table) counting the total number of tuples (not the number of times an attribute is in a tuple, like `COUNT(year)` would've done)
```SQL
SELECT COUNT(*)
FROM MOVIES
WHERE year = 2002
```


In this case, it'll
- First: Make the table only full of tuples with `year = 2002`
- Then it will average every length. We GROUP BY "everything" effectively, in this scenario. Without a `GROUP BY`, we have no precedent for what sub-groups we want to average.
- Therefore the table is of size `1`, since there's only `1` group.

## `GROUP BY`
- Useful for aggregation. the attributes in `GROUP BY __attr__` are grouped, and aggretation is done on them (aggregagion only happens in the groups)
	- I.e. GROUP BY year will mean aggration happens on all items with the same year

Example: "How many movies are $x$ minutes long?" 
- This is a "question" but a question for each length. One column will be the length, the other will be the count.
```SQL
SELECT length, COUNT(*)
FROM Movies
GROUP BY length
```
1. We are working with the `Movies` table so we `FROM Movies` that
2. We `GROUP BY` length. Now the table has been subdivided into chunks whose lengths are the same. That's the `*`, to be specific
3. We return one column as just the length, `length`, and the second column is the `COUNT(*)`, which is the size of the subdivision (the # of tuples)

### Restriction of SELECT lists with aggregation
```sql
SELECT length, COUNT(length)  
FROM Movies  
WHERE year = 2002
```
This query does NOT work because if any aggregation is used (i.e., COUNT), in the SELECT, then each other element of it must either be aggregated or appear in a group-by clause

Fix #1: Group-by
```sql
SELECT length, COUNT(length)  
FROM Movies  
WHERE year = 2002
GROUP BY length
```
- Now COUNT counts number of *lengths* in the groups, grouped by common *lengths*. eh, a bit strange but whatever.

Fix #2: Other elements can be aggregated
```sql
SELECT AVG(length), COUNT(length)  
FROM Movies  
WHERE year = 2002
```
- This also works because we have two aggregations. Now the outputted table is just `1` tuple!

# HAVING Clauses
- Selections for GROUPS, like how WHERE is selections for tuples
- It's a condition! It filters which groups stay or not. The groups (remember, the common tuples) can be *in* or *not in* depending on the HAVING condition

Fat example:
```SQL
SELECT name, SUM(length)  
FROM Movies, MovieExec  
WHERE producer-c# = cert#  
GROUP BY name  
HAVING MIN(year) < 1930
```
1. We product `Movies` and `MovieExec`
	1. So every move is paired with an Exec. They might not be the one who made it though, but frick that I guess?
2. We filter all tuples to the movies made by a certain producer
	1. For instance, if there was a tuple with Jared Hess and The Lion King, it would be filtered out. Now we have tuples like Jared Hess with Napoleon Dynamite, and Jared Hess with A Minecraft Movie
3. Now we group by the names (For each name, there are many tuples! For the movies they directed)
4. But we filter the groups (names) with `MIN(year)` being the minimum within the group. If the minimum year a movie was made was less than 1930 for that group, the group stays.
5. Then finally we SELECT the name of the directors that survived the HAVING clause, and the sum of the lengths for the movies they directed

