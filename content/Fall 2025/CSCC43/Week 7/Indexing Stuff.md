## What is an *Index*?

An index "on a set of records" speeds up selections of a *Search Key Attribute*
- A "Search Key" is not the same as a normal "key".
- *Any* subset of the attributes of a relation can be a search key for an index on a relation.

### Indexing on Sequential Files
- A file is data records sorted on the *index key* $K$
- We use indices (which are "structures" that help find things without looking at *every single record*)

![[Sequential Files.png]]

**Index blocks** are going to be the left side of the upcoming diagrams. They indicate the "helper structure" that holds indices for the records.
**Data Blocks** store actual records in batches. They require an index block to help find them easier!
### Dense Indices

- *Every single search key* in the data file has a corresponding entry in the *index* file
- Means if you have 1000 records, you also have 1000 entries in our Dense Index.
	- This is faster because indexing means we can use binary search!
	- We don't need to unnecessarily access the records. The indexes are all we need

![[Dense Indices.png]]
- In the image, the Index Blocks (left) has a pointer to every Data Block on the right!
- Searching therefore is super fast

### Sparse Indices
![[Sparse Indices.png]]
- In this case, there are *less* index blocks than with Dense Indices, and they point to fewer data blocks (usually one data block per index block).

### Multiple Levels of Index
Indexes can be *too big* to fit into memory (too much ram, but without it, no speed!)
Solution: We use an index to index...

Basically, we have one index block, which maps to smaller index blocks, which eventually map to data blocks
![[Multiple Levels of Index.png]]
- The second level must be sparse otherwise there is no point to using multiple levels (having dense is basically what we had before)

### Indices with Duplicate Search Keys
- There can be *more than one record* with the same search-key value!
- To find them, there are 4 "approaches"
	1. Using dense index to key all duplicate. 
		1. So each record w/ the same key value can be indexed.
		2. Problem is it's huge. Like if there's 50 entries w/ the same key value, it increases the size for your "key column" -> ai said this
	2. One entry for each *unique* search key: Just have one entry for each search key $K$ (the very first one). Since the keys are sorted sequentially, we know the other ones after will also have the same key.
		1. It's must smaller than option 1, but still very fast
	3. Use a sparse index--one index for every data block--regardless of what's inside. The index stores the key of the *first* record in that block.
		1. Problem is you can have redundancy, with two pointers to the same key twice (if there are enough duplicates)
	4. Use a sparse index again but optimize by NOT creating a new key that was the start of the previous block. So you skip adding the key and go to the next one.
#todo maybe learn if important?


### How deleting records looks like
![[Index view of deleting records.png|800]]


### Indexing in SQL
![[Indexing in SQL.png]]
#todo not tryna remember all this....