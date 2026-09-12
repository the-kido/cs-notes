The core operations are
1. [[Relational Algebra#Union / Intersection / Difference|Union/intersection/difference]]
2. [[Relational Algebra#Selection|Selection (picking rows)]]
3. [[Relational Algebra#Projection|Projection (Picking columns)]]
4. [[Relational Algebra#Cartesian Product|Products]] and [[Relational Algebra#Theta-join|Joins]]
5. [[Relational Algebra# Schema of Expressions|Renaming]]

Relations are sets (no repeating elements)
![[All relational algebra operations.png]]

## Union / Intersection / Difference
- Union unions two relations (tables) together
	- $R \cup S$
- Intersection only keeps the common tuples between the tables
	- $R \cap S$
- Difference is the first set minus everything common in the second set
	- $R-S$

# Projection
$\pi_{cols}$
- Takes a table and returns specific columns of its tuples

Used like $\pi_{\text{title, year, length}}(\textbf{Movies})$
- This only gives the title, year, and length of all tuples in "Movies"

Look at slide 23 for another example but basically if you project a column where everything is the same thing, then the new table is just 1 element (not X rows of the same element... that would be wasteful!)
# Selection
$\sigma_{year=2023}(Movies)$
- Takes a table and returns all tuples/rows that satisfy the condition

Another example: $\sigma_{\text{length >= 200 AND studio-name = 'Paramount'}}(Movies)$
- You can just refer to the attributes of the table you're working with

# Cartesian Product
Takes the product of two tables. That is, it pairs every tuple of 1 table with *every* tuple of another table
- 2 tuples in table with 3 attr's + 3 tuples in another table with 2 attr's = 6 total rows with 5 attr's.

Also just to visualize the difference when there's a common name:
![[Cartesian Product.png]]

# Theta-join
- $R_1 ⨝_\theta R_2$ is equivalent to $\sigma_\theta(R_1 \times R_2)$
- Basically it filters via the condition all elements of the cartesian product
- Could be useful... somewhere lowkey idk

# Natural Join
$⨝$ the goat
- Takes two tables, joins them, and then only gives the columns common between the two
- It merges the tuples of 1 table whose attributes match the other tables.
- For instance, if R1 has name, id, address and R1 has id, phone number, then the natural join of those is every tuple that has an id, and the id matches! 

Equivalent to $\pi_{R_1 \cup R_2}(R_1 ⨝_{\text{Common attributes in } R_1 \cap R_2} R_2)$
- Basically it does theta join, picking all the rows who has common attributes
- Then it removes all duplicate columns (like if we have table A,B and B,C,D,E, the join would be A, B1, B2, C, D, E. We just need "one" B between both tables which is where the projection comes in!)

Important example. Top table is R1 and bottom is R2

| A   | B   |
| --- | --- |
| 1   | 13  |
| 2   | 13  |

| B   | C   |
| --- | --- |
| 13  | 4   |
| 13  | 5   |

The natural join of these is

| A   | B   | C   |
| --- | --- | --- |
| 1   | 13  | 4   |
| 1   | 13  | 5   |
| 1   | 13  | 4   |
| 2   | 13  | 5   |
Because R1's first row matched both rows of R2 and R1's second row matched both rows of R2, too! So don't think that natural join is just like a "glue". It's still a product after all.

# Operator precedence
Just use parentheses. There is no "universal agreement"

# Schema of Expressions
- Union/intersection/diff has no change
- Projection removes unlisted attributes
- Selection no change
- Product adds attrs from R *and* S. If R and S have the same named attr, name them via R.A and S.A to differentiate
	- Theta join is same as product
- Natural join is common attributes merged (so no differentiating with R.A and S.A. The $\pi$ projection removes that)
- *Rename* renames schema of relation to whatever it says
	- $\rho_\text{S(A, B, C)}(R)$
	- R(X, Y, Z) becomes S(A, B, C)

# Expression Trees
![[Expression Trees for Relational Algebra.png]]
- See how the AND is its own operator and how it splits the tree up. Yeah pretty awesome. All binary operations do that (including joins)
- The unary operations are alone.
- The arguments are writing separately as well.

# Linear Notation of Expressions
![[Linear notation of expressions.png]]
You can split up the relations like so, naming the temporary tables and using them again.

When I did my exam I didn't write the schema in `()` parentheses each time I declared a name... strange!

# Bags
Bags are like sets but you can have duplicates.  $\set{1, 2, 1, 3}$ is a bag.
Selection, Projection, and Join work just fine with bags
- Anything on a tuple-by-tuple basis, really.
$\cup, \cap, -$ not so much.
- $\cup$ literally adds both sets together
- $\cap$ takes the *minimum* number of occurrences in each bag
	- So like if $\set{1, 2, 2}$ and $\set{1, 2, 2, 3}$ then the intersection is $\set{1,2,2}$ 
- For subtraction, literally subtract number of occurrences 

![[Bag semantics for set operations.png]]

We have distributive law for bags as well as sets!
Too lazy to include here.
# Extended Relational Algebra
## $\delta$ for eliminate duplicates
- It takes a relation. Removes all duplicate *tuples*
## $\tau_L(R)$ for sorting the $L$'th attribute
- If we pass $B$, it'll sort depending on the column $B$
## $\pi_L(R)$ for extended projection
- Basically it's weird
- Lets you do addition n stuff. yep!

![[Extended Projection is Strange.png]]

# Aggregation Operators
SUM(A) for instance, adds up all A's.
These are not relational operators though. They just summarize tables. 
There's SUM AVG MIN MAX and COUNT

# Grouping Operator
Seems important cuz this confused me in SQL
$$\gamma_L(R)$$
$L$ is a list of elements that are first
1. Individual (grouping) attributes, then
2. Of the form $\theta(A)$ where $\theta$ is an *aggregation operator*!
The grouping attributes are what we `GROUP BY` and the aggregations are what we `SELECT`

### One Grouping Attr, One aggregate
Looks like this:
![[One Grouping Attr, One aggregate.png|700]]
Basically the "grouping" attribute is sorted so then you know how many duplicate instances there are. The aggregations happen for all these "duplicates". For instance, Fox, Fox, Fox are averaged into 1 row. The other rows are just 1 instance so nothing interesting happens :( 

### Two Grouping Attrs, One aggregate

|**Region**|**Product**|**Revenue**|
|---|---|---|
|North|Apple|100|
|North|Apple|200|
|North|Orange|50|
|South|Apple|100|
The group $\gamma_{\text{Region, Product, AVG(Revenue)}}(TABLE)$
would have 3 rows: North apple, north orange, and south apple. It pairs them like *that* now!
If the grouping attr was just "North", there would only be 2 rows: Region and AVG

### One Grouping Attr, NO aggregate
This simply "groups" the attribute.

|**StoreID**|**Item**|
|---|---|
|**101**|Apple|
|**102**|Pear|
|**101**|Banana|
|**103**|Grape|
|**101**|Apple|
If we do $\gamma_{StoreID}(Table)$
Then the result is simply 

|**StoreID**|
|---|
|101|
|102|
|103|
because a) that's all the unique storeIDs and b) it's sorted!

Equivalent SQL:
```sql
SELECT StoreID
FROM Sales
GROUP BY StoreID;
```
or also:
```SQL
SELECT DISTINCT StoreID
FROM Sales;
```

## Outer Join

Natural join joins two tables, but "nulls" the attributes that aren't common
If you do the "right" version, it biases the right table so the right table doesn't get nulled, only the left does. Same for the "left" version.

## Division Operator
R/S would be the table $R$ that has the attributes of S
Used for "Find all students who have passed ALL courses!"
- R would be all students and the courses they've passed
- S would be ALL courses
- it would return all the student's who've passed every course

![[I have this division operator for relational tables downloaded in my brain.png]]

and that's a wrap!