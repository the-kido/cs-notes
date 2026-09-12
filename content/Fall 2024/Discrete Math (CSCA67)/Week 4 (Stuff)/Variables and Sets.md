# Operations
#### Intersection
>$A \cap B = \{x | x \in A \text{ and } x \in B \}$
#### Union
> $A \cup B = \{x | x \in A \text{ or } x \in B \}$
#### Difference
> $A \backslash B = \{x | x \in A \text{ and } x \not \in B \}$
#### Symmetric Difference
>$A\triangle B = (A \backslash B)\cup(B \backslash A)$
>    - It's everything but the parts they share 
>    - $A\triangle B = \{x | (P(x) \vee Q(x)) \wedge \not (P(x) \wedge Q(x)\}$

## Using [[Truth Sets]] to describe statements
>[!example] P(x) ∧ Q(x)
>P(x) has the solution set A and Q(x) has the solution set B
>So...it can be described as $P = \{ x | P(x) \wedge Q(x) \}$ 
>which finally equals
>$\{ x | x \in A \wedge x \in B \}$
>Which can be rewritten as just $A \cap B$
>

#### Example of going from one set to another using logical equivalences

>[!example]- A \ (A ∩ B) = A \ B
>![[Pasted image 20241010214452.png]]

### Subset, superset, and disjoint sets
If $A \subseteq B$, then A contains every element that B does. If $A \cap B = \emptyset$ then the set is <span class="definition">disjoint</span> (there are no common elements)

# Cards #discrete-4
Why is the set $(A \cup B) \backslash B \neq A$ ?
?
Since A U B will contain some segments that both A and B share; removing "B" will remove those shared segments! The above conclusion would only work if A and B are disjoint.


Analyze the set $A \subseteq B$
?
$\forall x, x \in A \to x \in B$
- The -> is important because x could be an element outside of "A" too


