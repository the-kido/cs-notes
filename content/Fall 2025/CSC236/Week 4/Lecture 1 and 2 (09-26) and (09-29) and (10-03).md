We know P(3), because we know P(2), P(1), and P(0)
- Which we prove (I think that's what assuming the IH gives us)


YESSS the Principle of Complete Induction is exactly what I was trying to wrap my head around
Completely forgot abt it

Basically the first half of this lecture covers why the Principle of Complete Induction holds, that is:
$\left[\forall n \in \mathbb N, (\forall k \in \mathbb N, k < n \implies P(k)) \implies P(n)\right] \implies \forall n \in \mathbb N, P(n)$
That middle antecedent is your IH induction hypothesis!
#todo which one was the thing where it was like i <= k < n or something... like the numbers were between something?
- Oh it might've been because of cases: so if you showed for k <= 4, then 4 < k <= n is what you need to keep proving, iirc

Okay after that, we have *structural induction*
### Structural Induction
There are objects that are defined recursively... trees for instance!
Also, recursively defined values!
```python
def an_e():
	if maybe(): return choice('x', 'y', 'z')
	else: return an_e() + choice('-', '+') + an_e()
```


Ill go with the example given in lecture
- You define some properties of the "returnable set" depending on the structure:
	- $x, y ,z \in E$ 
		- (E is the "set of all strings that can be returned") (this comes from the first return; we know x, y, and z are part of the set)
	- $\forall e_1, e_2, \in E, e_1-e_2 \in E \cap e_1 * e_2 \in E$
		- This reads as "if you have two elements in E, then the elements joined by `-` or `*` are also part of the set". This uses the "math" string notation
 However, for the above, the 'set of all strings' also satisfies the above definition! 

As such we use some standard phrases like:
- "E contains nothing else"
- "E is the smallest set such that... \<properties go here>"
==- "Define E as the set such that..."==
	- This is the one we use cuz easy

> To prove something about all elements in the returned set, you can do it *recursively* using the structure of the definition

#### Principle of Structural Induction (for set E)
> For different sets, it'll always look different. That's because all we do is "prove the base properties" and if they hold, then it should hold for all of them

WTS $\forall e \in E, P(e)$
To do that, we use **PCI**:
$\left[P(x) \cap P(y) \cap P(z) \cap \forall e_1, e_2 \in E, P(e_1) \cap P(e_2) \implies P(e_1 - e_2) \cap P(e_1 * e_2)\right] \implies \forall e \in E, P(e)$

![[Principle of Structural Induction.png]]

#### Example
![[Instead of recursive structure, let's do induction.png]]

WTP the Post(s), which is $\forall e \in E, var(e) = 1 + op(e)$. E is the same structure as above.
Therefore our $P$ predicate is $P(e): var(e) = 1 + op(e)$ 
Base cases: (this is the $P(x) \cap P(y) \cap P(z)$ part)
- var(x) = 1
- op(x) = 0
- 1 = 1 + 0 ✅
Same for y and z, too! It holds for the base elements. 

Inductive step #todo why is this the inductive step?
Let e_1, e_2 in E. Assume P(e1) and P(e2), so var(e1) = 1 + op(e1) and same for e2. This is *the induction hypothesis*
WTP P(e1-e2): var(e1-e2) = 1 + op(e1-e2)
(also WTP P(e1\*e2))

var(e_1-e_2) = var(e_1) + var(-) + var(e_2)
= (by IH) (1 + op(e1)) + ....
= ... 1 + op(e1 - e2)

Therefore by structural induction, $\forall e \in E, var(e) = 1 + op(e)$. The return values are correct!

> But there's no natural numbers.... strange. How induction if no natural number?!

Well all you have to do is show the base elements and everything that derives from it will be in the set.

For the above, it's kind of like simple induction. (That's the one that increments / makes the result slightly larger each time.) So for arbitrary e1, e2, having P(e1) and P(e2) lets us derive the larger P(e1-e2). Very simple (induction) stuff!

However, there is also CI. Complex induction!
### Complex-induction-structural-induction-transfusion-of-power-✨style✨

>[!note] The thing
>WTP: $\forall e \in E, P(e)$
>Let $e \in E$
>Case: e = x or e = y or e = z
>- \[prove P(x), P(y), P(z)]
>
>Otherwise [Case: e = e1-e2 for some e1, e2 in E or e1\*e2 for some e1, e2 \in E]
>- Assume `[I.H]`: $P(e_1) \wedge P(e_2)$
>	 - \[...prove $P(e1-e2)] \wedge P(e1*e2)...$]
- The cases come directly from the structure! 
- Simple induction is easier though.

### Another question:  `structural-II`
> Define $\forall e \in E$, define $val(e)$ s.t. $val(x) = 1$, $val(y) = 2$, and $val(z) = 3$ 
> Also $val(e_1-e_2) = val(e_2) - val(e_2)$  and $val(e_1 \times e_2) = val(e_2) \times val(e_2)$ 

Now, $val(x - x - x) = val(x - x) - val(x) = -1$
but also $val(x) - val(x - x) = 1$, so it's *not* a function. 

Uh oh! The definition is ambiguous. The set has ambiguous elements. It can be generated in two ways!

![[Ambiguous tree fricks everything over.png]] 
The above is a "*derivation tree*"
![[Parse tree example.png|600]]
Also wow look this is a "parse tree". Reading it via in-order traversal gives the result.

Anyway, using a string loses information. We could
1. Use parentheses!
2. Don't output strings. Just output *trees* 
	1. Same as tuples in that you can have `(x, -, (x, -, x))`, which is ordered

### Binary Tree proofs, but structurally!
- Remember that height proof where we had to introduce an $n$ to use induction? Kinda ugly, right?
- A requirement that is no more!

Let's "define" a BT. The structure of it.
>In code, we might have `t = BT(BT(None), None)` to define a binary tree with the left being a 1-height subtree, and the right being empty. Effectively, the root node is just a pair of at most two other nodes, as is all nodes. 
>
>NOTE: it falls apart if there are actual values. Each node would be a "triple" instead and would have duplicate, redundant tree entries but let's not worry about that
- $\circ$ (empty tree) $\in BT$
- $\forall t_1, t_2 \in BT, (t_1, t_2) \in BT$

In this tree, the $(t_1, t_2)$ *pair* is a "node". It's an object! An empty (or possibly not empty!) tuple. 

From there, we can define height ($h(t)$) and size ($nn(t)$)

And lastly, we can define the Structural Induction Principle for BT. (Remember, these are unique to all structures)
$P(\circ) \cap \forall t_1, t_2 \in BT, P(t_1) \wedge P(t_2) \implies P((t_1, t_2)) \implies \forall t \in BT, P(t)$
- Oh... $P$ is arbitrary! It's in all the instances where $t \in E$ in the definition of the structure #todo Think about that. It's an important coincidence. Also #todo *remember* this formula


# Readings
