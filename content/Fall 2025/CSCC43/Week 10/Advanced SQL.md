# Data Analysis and OLAP

## On-Line Analytic Processing
- An interactive analysis of data. Lets data be summarized and viewed in different ways in an *online* fashion!
- Data can be modelled as "dimension attributes" and "measure attributes" is called "multidimensional data"
- okay....? 

### Measure Attributes
- They measure some value
- They can be *aggregated* upon (SUM, AVG, etc.)
- E.g., the *quantity* attribute of `Sales(productId, quantity, time, storeId)`

### Dimension Attributes
- These define the *dimensions* that measure attributes (or aggregates thereof) are viewed on.
	- So they are the *facts* that measure attributes summarize.
- E.g., the `productId`, `color`, and `shape` attributes of the *Sales* relation.
	- Measures could be quantity, total revenue, etc.,
	- They are "angles" from which you can view those numbers. No math needed, but you can slice the data in some way to see them differently.
		- "How many units of Item #101 did we sell?" uses measure `Quantity` with dimension `productId`
		- "Do circular items sell better than square ones?" uses dimension `shape`

### Common Architecture
- DBs for, say, store branches, handle OLTP (like with online transactions)
	- Every physical store (like a Walmart) has its own local DB. The system is optimized for OLTP
		- It's where data is collected
	- Its fast. All it does is record sales immediately, and other things like that.
- "Local store databases (single stores) would be copied to a central warehouse overnight"
	- The warehouse is where data analysists perform OLAP to get business insights with *The Cube*
### Star Schema
A common way to organize data in the "warehouse"
It has:
- A **Fact Table**: A very large accumulation of facts like sales, which are *periodically updated* (wow lowkey sounds cool?)
- Many **Dimensions Tables**: A smaller (typically static) set of facts about the entities involved in the above facts.
#### Example
We're recording beer sales!

We want to record, in the warehouse, information about all beer sales: the bar, the brand, the drinker, *everything*.

This is the *fact table* we'll be getting our facts from: `Sales(bar, beer, drinker, day, time, price)`
- This is what gets updated nightly

The *dimension tables* include info like the bar, beer, drinkers, etc. They can look like:
- `Bars(name, addr, license)`
- `Beers(name, manf)`
- `Drinkers(customerId, name, addr, phone)`

![[Star Schema Visual.png]]

#### Fact Table Attributes
- Dimension attribute: the key of a dimension table
- Dependent attribute: a value determined by the dimension attributes of the tuple
	- So like a measure?
##### Example:
`price` is a dependent attribute of the `Sales` relation!
- It's determined by the combination of the other dimension attributes `bar`, `beer`, `drinker` and `time` (combination of day and time-of-day attributes)

### Approaches to Building Warehouses
**ROLAP** = "relational OLAP" which tunes a relation DBMS to support star schemas
**MOLAP** = "multi-dimensional OLAP" which use a specialized DBMS w/ a model like the "Data Cube"!

### Roll Up!
Aggregate (merge) a very detailed dimension (table) into a less detailed (more summarized) one
- For instance, if you have a table for now much Bud each drinker consumes at each bar, "roll it up" into a table to show the **total** amount of Bud consumed by each drinker
	- It gets rid of the *bar* dimension altogether.

### Drill Down!
The opposite of rolling up. You add more details. You add new *dimensions* 

Example: Given that Joe's bar sells very few A.-B beers, break down Joe Bar's sales by particular beer

![[Visual of rolling up and drilling down.png]]
- Notice how the table increases/increases in dimension

### Cross-Tabulation (Cross-Tab or Pivot-Table)
![[Cross Tabulation.png]]
Basically, taking any table, you can use one column as the x-axis, and another as the y-axis for maximum analyzability!
- The cells themselves are aggregates of the values of the dimension attributes that specify the cell
	- So for "dark + shirt", it's the aggregate of the quantity of dark shirts sold.
- So long as you account for all dimension attributes (like, for `clothes_size` dimension attribute we just say "use all sizes"), you can use the "quantity" measure as the cell values.
	- Means for the other dimensions that aren't your X or Y axis, you must aggregate them in some way. Or you can use a [[#Data Cube]] for 3 axes.

#### Relational Representation
![[Relational Representation of Cross-Tabs.png]]
- In a relation, the dimension-attributes that are aggregated are replaced with "all" (equivalent to saying `null` in SQL). 
#todo I dont really get this?

### Data Cube
Similar to your cross-tabulation, but instead of two dimensions, it's tree!
![[Data Cube.png]]

## Extended Aggregation to Support OLAP
We can aggregate a table to support OLAP with `GROUP BY CUBE(dim_attr1, dim_attr2, ...)`
The code code might look like this:

```sql
SELECT item_name, color, size, SUM(number)
FROM Sales
GROUP BY CUBE(item_name, color, size)
```
- The 3 first columns are the axes of the cube. The 4th is the measure of the 3 axes.
- It'll do all the right aggregations and stuff to have a nice cube for analysis
- It calculates the $2^3 = 8$ subsets of the 3 dimensions
	- I.e., it calculates: $\set{(i,  c, s), (i, c), (i, s), (c, s), (i), (c), (s), ()}$
	- This is used to easily show the aggregates of any combination of dimensions, as well as to roll up or drill down.


