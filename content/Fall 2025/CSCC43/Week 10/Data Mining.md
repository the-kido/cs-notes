"Queries that summarize big data sets usefully"
Example:
- Clustering all web pages by topic
- Finding the characteristics of fraudulent credit-card use!


### Market-Basket Data
Market-basket = Set of items that are bought together as a customer leaves a store.
And this is somehow an "important form" of mining from relational data.

#### Example
If people often buy hamburgers and ketchup together, the store can:
1. Put burger and ketchup near each other and put potato chips between
2. Run a sale on hamburger and raise the price of ketchup

Wow!

### Finding Frequent Pairs
In order to do the above, we must find the frequent pairs through data mining.

Assume the data relation is `Basket(basket, item)`

The **support threshold** $s$ is the minimum number of baskets in which a pair must appear before we're interested
- I.e., if someone buys a super expensive bike and a chocolate no one else wants to buy, then that pair will have crazy high cohesion but it's an outlier (only one sample size) so we must ignore it!


```SQL
SELECT b1.item, b2.item
FROM Baskets b1, Baskets b2
WHERE b1.basket = b2.basket 
	AND b1.item < b2.item   -- Making sure the items aren't the same, but not recounting b1 and b2 twice
GROUP BY b1.item, b2.item -- Pair the tuples by the item's we're buying
HAVING COUNT(*) >= s -- Filter the outlier pairs
```
Where $s$ is just some constant for the "minimum size"

### A-Priori (theoretically good) Optimization
A straightforward optimization you can make that involves a join of a huge Baskets relation with itself
Something to do with the fact that a pair $\set{i, j}$ cannot have $s$ support unless both $\set{i}$ and $\set{j}$ do?

Below, `Baskets1` is a  "materialized" view that's a pruned version of `Baskets`
It selects all items with $s$ support. 
```SQL
INSERT INTO Baskets1(basket, item)
SELECT * FROM Baskets
WHERE item IN (
	SELECT item FROM Baskets
	GROUP BY item
	HAVING COUNT(*) >= s
);
```

Now we can do the same query but instead of on `Baskets` we do it on `Baskets1` without the expensive `join`!

