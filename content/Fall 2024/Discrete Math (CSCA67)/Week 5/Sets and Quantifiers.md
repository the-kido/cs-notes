You can specify what values a quantifier assumes with $\forall x \in S, P(x)$ where S is some set. It defaults to U, the [[Universe of Discourse]].

The above can be rewritten as $\forall x, (x \in \to P(x))$. Likewise, $∃x ∈ A, P(x)$ can be rewritten as $∃x,(x ∈ A ∧ P(x))$


## Sets to Quantified Statements
Take $A \subseteq B$
- For all elements of A, it should be contained in B, so the statement would look like
- $\forall x, x \in A \to x \in B$
Now take $A \cap B \subseteq B \backslash C$
- $\forall x, (x \in A \wedge x \in B) \to (x \in B \wedge x \not \in C)$

## Dealing with $=$ ("set" equal "set")
- Let's have $A \cup B = B$. Equal signs imply a bi-conditional, so it can be written with quantifiers as $\forall x, (x \in A \vee x \in B) \leftrightarrow (x \in B)$. This is also equivalent to $A \subseteq B$ ([You should try and prove why](https://www.utsc.utoronto.ca/~atafliovich/csca67/lectures/week05/quantifiers_post_lecture_part1.pdf)! Slide 38 has the answers)

Look at page 57 of the textbook for more reference

## Vacuously true
$∀x ∈ A, P(x)$ is vacuously true if set `A` has no elements in it.

Note that an empty set is a subset of all sets. So, $\emptyset \subseteq S$ is always true. 

