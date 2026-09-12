$\forall$ and $\exists$ are the universal and existential quantifiers.
- $\forall x$ refers to all "x" in the universe of discourse
- $\exists x$ refers to one or more "x" in the universe of discourse

Looking at [[Logical Connectives]] they are almost as much of a glue as $\neg$ is, meaning we need to wrap everything quantifiers attach with with a bunch of brackets most of the time. 

>[!note] Quantifiers "<span class="emphasis">bind</span>" variables
>In the case of P(x), x may be a <span class="emphasis">free</span> variable.
>However, in $\forall x, P(x)$, x is a <span class="emphasis">bound</span> variable.
>For this reason, we say quantifiers "bind" variables
>Also, the notation {x | ...} also "binds" the variable (they are equivalent after all) 
## Negating Quantifiers
$\neg \exists$ means "there does not exist
$\neg \forall$ means "not all"
## Having many quantifiers
Yes, you can use many quantifiers. 

If the two quantifiers are the same (i.e. two universal quantifiers or two existential quantifiers), then the order does not matter.
Otherwise, <span class="emphasis">the order matters</span>!
>[!note]
>$\forall x, \exists y, x + y = 5$ is a true statement
>- If x is 2, we can choose y to be 3 for the statement to be true
>
>$\exists y, \forall x, x + 5 = 5$ is a false statement!
>- We can choose y to be 3, but x can be any other number, so the statement does not hold

Here's another example:
>[!example]
>Let L(x, y) stand for "x likes y" 
>>$\forall x, \exists y, L(x,y)$
>
>This would mean "every person likes somebody"
>However,
>> $\exists y, \forall x, L(x,y)$
>
>would mean "there is a person that everyone likes"
>- This insinuates everyone likes 1 person, whereas with the first statement everyone likes "some" other person (but not the *same* person!)
>

>[!example]- Here is one last example. 
>The universe of discourse in each case is $\mathbb{N}$ 
>
![[Pasted image 20241011124506.png]]
>
>1. True
>2. False
>3. False
>4. False
>	1. When y is 0, there is no valid x that could work
>5. True
>6. False


# Cards #discrete-4<span class="emphasis"></span>

To know if a variable is bound or free, what could you do?
? 
Write out the statement with quantifiers and see what is bind-ed. For example:
>[!example]
>If there is a number x such that x 2 + 5x = w, and there is a number y such that 4 − y 2 = w, then w is strictly between -10 and
>
>Writing this out as a statement would give us:
>$\forall x, (x^2 +5x = w \wedge \exists y,  4 - y^2 = w) \to -10 < w < 10$
>And as we can see, x and y are bound whereas 'w' is free.