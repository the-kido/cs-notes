## Reading 1
1. To describe a set E independently from code (the returned values of a function), you write a *structural/recursive/inductive definition* of the set E
	1. It has two parts, I'd say. 
	2. The first part is stating what "E" is. 
		1. "**Let E  be the set *defined* by:**"
		2. The phrasing is important, in that it excludes other sets not defined by this definition. For instance, if $E$ is all strings with the letters `a` and `b`, technically the set of all strings is also the set $E$. 
	3. The second part is the actual description. Usually you have the base case, and the inductive step
		1. $x, y, z \in E$
			1. This is the base results the function can return. Means elements x, y, z are in $E$ for sure, baseline
		2. if $e_1, e_2 \in E$, then $e_1 - e_2 \in E$ and $e_1 * e_2 \in E$ 
			1. This is the other things the function returns, usually using the results of a recursive call. For the above, e_1 and e_2 are given from recursive calls, and a new thing is returned from them
	4. In total, I would write:
		1. Let E be the set defined by:
			1. $x, y, z \in E$
			2. if $e_1, e_2 \in E$, then $e_1 - e_2 \in E$ and $e_1 * e_2 \in E$ 
2. The pattern to deriving **a** "structural induction principle" is easy to remember: Every place where there is a precondition that an element is within $E$, we replace it with enforcing that the element satisfies $P$. Also, we $\wedge$ all the properties of the description together
	1. Intuition is "if all the properties of E are satisfied by an effective P, then all E satisfy P"

3. The proof for that `op`, `var` question is super easy! You just have to show the antecedent holds to get the prized consequent of the Structural Induction Principle

~~
For some e = x, y, z, var(e) = 1 = 0 + 1 = op(e) + 1
So P(x), P(y), and P(z) hold.

Let e1, e2 \in E be arbitrary. Suppose IH:  $P(e1) \equiv \dots$ and $P(e2) \equiv \dots$

> Personal note: for the induction step, the antecedent *is* the IH. It's the thing we assume is true of the returned things in our code, and we show a new thing holds utilizing what was returned

Then 
- var(e1-e2) = var(e1) + var(-) + var(e2) by fact abt string
- = var(e1) + 0 + var(e2) by inspection
- = op(e1) + 1 + op(e2) + 1 by IH
- = 1 + op(e1-e2)
And similar is true, replacing all `-` with `*`
easiest proof of my life!

4. Trace time
> Include $\because$ and $\wedge$. Also don't use $P$ 

var(y-x-y) = 1 + op(y-x-y)
	$\because$ var(y-x) = 1 + op(y-x)
		$\because$ var(y) = 1 + op(y)
		$\wedge$ var(x) = 1 + op(x)
	$\wedge$ var(y) = 1 + op(y)

## Reading 2

$P(\circ) \wedge \dots \implies \forall t \in BT, P(t)$

Assume for now P(t): $t \in BT$

$(\circ \in BT \wedge \forall t_l, t_r \in BT, (t_l, t_r) \in BT) \implies \forall t \in BT$
