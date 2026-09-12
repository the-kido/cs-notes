Used to get to [[BCNF]]

- Let's say R is our relation, and F is the set of FD's. R has the BCNF violation $X \to A$ (means $X$ is not a superkey!)
- We are going to get rid of the $X \to A$ violation!

## The algorithm:
1. We find $X^+$ (*it can't be all attributes since it's not a superkey! as per the violation!!!*)
	- This is **Table #1** of the decomposition
2. Find $(R-X^+) \cup X$. This is **Table #2**
	- $R- X^+$ are all the attributes *not* captured by $X$. The "leftovers".
	- $X$ is unionised to the above because it's the bridge between $X^+$ and $R - X^+$
		- The $\cup X$ satisfies the [[Relational Decomposition and Criteria|"Lossless Join"]] decomposition criteria
	- ![[Decomposing to get to BCNF.png]]
3. Then we "check"
	- Yay! By Step 1 and 2, the tables no longer have the $X \to A$ issue. But we might have more problems
	- So we have to check:
	- Find the FD's of the decomposed relations/tables #1 and #2 by [[Projecting FDs|projecting]] the FD's from F to get the two decompositions' FDs that involve only attributes of $X^+$ and $(R-X^+) \cup X$
		- In my own words: For each table, you project every attribute of the relation. Your goal is to see if any of the projected FDs violate [[BCNF]]. If so, we split again!

### Example 1
![[Example 1 or BCNF algo.png|600]]
- For step 1: $X^+$ in this case is just $title, year$ since that's the right side of our violating FD
	- $X^+ = title,year = \set{\text{title, year, length, film-type, studio-name}}$
	- We define the first split: $Movies_1(\text{all of that above stuff})$
- For step 2: $(R - X^+) \cup X= \set{star-name} \cup \set{title, year}$
	- Split #2: $Movies_2(\text{star-name, title, year})$

Yay! We decomposed... and left out the checking step 🤔
...because we just knew it was good! Let's do an example where things aren't good!

### Example 2
![[BCNF Decop Example 2.png|600]]
- We split the tables just fine. 
- For step 3 we project the new tables while only caring about the 3 attributes in the table:
	- For movies #1: 
		- title -> title (trivial)
		- year -> year (trivial)
		- title, year-> studio-name
	- For movies #2:
		- studio-name -> president (non-trivial but satisfies [[BCNF]])
		- `president -> pres-addr` (non-trivial... BUT DOESN'T SATISFY BCNF!)
		- We must split movies #2 again!

#### Splitting Movies #2 again
![[BCNF decomp example 2 part 2.png|600]]
- The violating FD is that `president -> press-addr`
- So $X = president$
- $X^+ = president^+ = \set{president, pres-addr}$
- $(R - X^+) \cup X = \set{studio-name} \cup \set{president}$
- And then we check the projections:
	- Movies #2.1: president -> pres-addr (both in the thing. Satisfies BCNF. Nothing interesting. I'm not doing the uninteresting projections for speed)
	- Movies #2.2: studio-name -> president (same as above. Satisfies BCNF. We good)


## The issue
BCNF does NOT preserve dependencies. This means if we split tables via BCNF, and then merge them back, we might get something different.

Example:
- `R(A, B, C)` with FD `AB -> C` and `C -> B`
	- For instance, `street, city -> zip` and `zip -> city`
	- There are two keys: `{A, B}`, `{A, C}` but `C -> B` has a left-side that is NOT a superkey! So it suggests we need to decompose into *BC* (BC+ = BC) and *AC* (AC+ = ABC but only take A,B's)
	- But we can't "check" $AB \to C$ ("When AB is seen, C should be seen") with just these relations because none of them have all of `A, B, C`
	- We can enforce little FDs like $B \to C$ for BC, or $C\to A$ for AC, but we CANNOT enforce $AB \to C$. 
		- The problem is, no table has all of $A, B, C$ to enforce $AB\to C$. It physically *cannot* enforce it.
	- We're exposed! And we can violate the whole database's FDs by adding something where $AB \not \to C$ in either table and no one can stop us!

![[BCNF problem.png]]
The join is lossless (yay!) but decomposing doesn't guarantee that functional dependencies are enforced when the tables are apart (no *dependency preservation*)
- The join can finally let us check the $AB \to C$ FD since all of $A, B, C$ are in one place. But, alas, it doesn't hold anymore 🤔
- When you split an original table and merge it back with BCNF, this wouldn't be a problem. But when you split, then add *new rows*, and merge the tables back, you can incur problems with the FD's not holding! Because adding new data into $X$ and $Y$ doesn't enforce $AB\to C$!

To solve this, we look into [[Dependency Preserving Decomposition]]