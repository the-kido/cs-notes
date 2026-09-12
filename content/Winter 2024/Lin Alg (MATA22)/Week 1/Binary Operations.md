A binary operator is a function ⊞ with two inputs and one output.
- The usual addition on real numbers is a binary operator! Here's what it looks like
$$ + : R \times R \to R$$

> The notation is a bit strange. It's "the symbol" : "DataType1" $\times$ "DataType2" $\to$ "DataType3"
> This reads as "the symbol" is a binary operator such that it takes in DataType1 and DataType2 and returns a DataType2 (it takes in 2 values and returns 1)
> Addition looks like this: $+ : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$. Note this explicitly shows that complex numbers cannot be added. We gotta use a different addition operation for that.

#### Determining types using operations

Consider this expression: $(ac -bc) + (ab)i$ for $a, b, c, d \in R$

Since the standard `-` is between ac and bc, that implies ac and bc are real numbers. So (ac - bd) is a real number. However, for $(ab)i$, it must be that (ab) is complex since $i$ is complex.
