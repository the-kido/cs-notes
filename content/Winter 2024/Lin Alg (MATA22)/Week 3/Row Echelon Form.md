## RREF vs REF 
>[!note] There is a difference between REF and RREF.
>Some books define these two as different things (Row Echelon Form vs Reduced Row Echelon form). In our case when we talk abt Echelon Form we are using something equivalent to RREF. 

>[!defn] Echelon Form.
>A system of linear equations is in echelon form (EF) if the following conditions hold:
>(note: $i$ is the row, $j(i)$ is the column at some row. The <span class="emphasis">pivot</span> is the first non-zero entry in any equation / row)
>In each equation we have EITHER that:
>1. All coefficients are zero OR the first non-zero coefficient is 1.
>	1. "The pivot must be 1"
>	2. We say the first non-zero term $1x_{j(i)}$ is the leading term of its row. Its column # is $j(i)$ (starting at 1. it's not an index lol.)
>		1. So, the column of the leading term of a row is j(i)
>2. "for each row $r \neq i$, the coefficient $a_{rj}$ of $x_{j(i)}$ is zero"
>	1. The rest of the column where a pivot is on should be zeroed out.
>	2. We look up and down on the column where the non-zero entry occurs. the rest of them should be non-zero.
>3. j(i) < j(i+1) whenever rows i  and i + 1 have non-zero entries. (Echelon/staircase pattern)
>	1. Where the first non-zero entry is in one zero, the next row's non-zero entry must be to the right of it. 
>	2. This makes the leading terms to form a "staircase"
>	3. Literally reads as "the column # of the leading term of the $i^{th}$ row must always be less than the column # of the leading term of the $i^{th}+1$ row"
>
>> [!examples]
>> ![[Pasted image 20250128151853.png]]
>> Observe:
>> 1. For the first row, the LC is 1. For the second row, the LC is 1. And for the last row, all coefficients are 0. So #1 passes.
>> 2. Observe that each column has only 1 non-empty entry each. I.e. the 3rd column only has an entry on row #2.
>> 3. Notice how j(1) = 1 < 3 < j(2) and j(3) only has zero-entries so 3 is also true.  
>> 
>> ![[Pasted image 20250128152916.png]]
>> 4. This is true
>> 5. This is false, since when i = 2, then r = 1, 3 and j(i) = 5? Then a_{35} = 2, which is not zero as 2 requires.
>> 	1. This kinda implies the last column is still a column.

### Edge case
The constants *are* kinda in the echelon form? The below example is kinda ehhh not true or false.
![[Pasted image 20250129152543.png]]
- Tom said this is "technically" *true* by our definition, but Parker says it is not. 

>[!defn] The Elimination Algorithm.
>Our input is a matrix $M \in M_{n \times k}(\mathbb F$).
>Our output is a matrix M' in echelon form equivalent to M. 
>For each row (for loop!) $R_i$, where $1 \leq i \leq n$, we proceed as follows:
>- Check for zero rows. If all the rows below us (rows $i \leq r \leq n$) are 0, then we're done. 
>	- We're already in echelon form so yeah.
>- Otherwise, we find the first non-zero coefficient with the smallest j in the row. 
>	- Mathematically it's written as $a_{rj} \neq 0$ where $r \geq i$
>- Then we run the rest of the algorithm:
>	1. Define the column of the leading one we defined as $j(i) = j$.
>	2. Divide out $a_{rj}$ by applying the operation $M \xrightarrow{\frac{1}{a_{rj}}R_r} M_{next}$
>	3. Exchange $R_i$ and $R_r$ by applying the operation $M \xrightarrow{ R_r \leftrightarrow R_i } M_{next}$
>	4. Clear the jth column using the operation $M \xrightarrow{-a_{rj}R_i + R_j  } M_{next}$ for each $a_{rj} \neq 0$.
>		1. By clear, we just ensure that the column doesn't have any other non-zero coefficients other than $a_{ij(i)}$
>- Run the elimination algorithm on $M_{next}$.
>
 >> Tom describes this loop very plainly as this for each row:
> > 1. Find the pivot (the top left-most entry of the row and the rows below)
> > 2. Make it 1 (by dividing)
> > 3. Put it in the right place.
> > 4. Zero out the column. 

>[!thm] Every Linear System Has a Row Echelon Form
>Every linear system has a unique row-echelon form.
>
>> [!explanation] Understanding it
>Consider M --> M' 
>There are many ways to go from M to M' but the easiest way is via the elimination algorithm.
>The echelon form is unique. 
>Inuitively, the echelon form is the simplest form equivalent to the original system. So when we say it's "unique", we are referring to how the simplest form is unique.
>
>>[!check] Proof: Not yet!

# <span class="cards">Cards</span> #linalg-3 
What does it mean for Echelon Form (EF) to be unique?
?
There is 1 unique EF in its simplest terms that equivalently describes any linear system.