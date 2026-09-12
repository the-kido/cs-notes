> An abstraction of a more complex statement. For instance we can define some values "x1, x2" as always increasing, and use that definition within other statements / proofs.

We use [[Fall 2024/Calc (MATA31)/2️⃣ Proofs (Week 1 & 2)/Quantifiers]] to write precise definitions

> These following examples attempt to define a positive function

>[!fail] Here are some examples of what isn't a definition / imprecise definitions
>"f(x) > 0" 
> - We didn't specify what f is. To describe it's an output, use f(x) #card-this 
> - We didn't specify x
> - Where the interval
> 
>"A function f is positive on an interval [a, b] where f(x) > 0"
>- We still  don't know what a, b, or x is

>[!check] Here is a good definition
>A function f is positive on an interval I if $\forall x \in I, f(x) > 0$
>- We know i is an interval, x is an element of i, and f(x) is a function

"If" in a definition means "iff" but they're lazy and want us to be annoyed #card-this
- A definition goes both ways. Theorems do not. Theorems are implications

Here's another example:

>[!example] Define what it means for a function to be increasing on an interval
>- This means that for any two points within the interval, we have to show that the point after the other point is increasing.
>- x_2 and x_1 can represent the first and second point within the interval i
>- Every pair of x_2 and x_1 should mean the function is increasing
>So the final definition should be
>> A function f is increasing on an interval I if $\forall x_1, x_2 \in I,\  x_1 < x_2 \implies f(x_1) < f(x_2)$

# Cards #calc-2

In a definition, why is "if" used and not "iff"?
?
because lazy.
<!--SR:!2024-10-07,3,250-->

These following examples attempt to define a positive **function**. Which one is the best and why?
- "f(x) > 0"
- "A function f is positive on an interval [a, b] where f(x) > 0"
- "A function f is positive on an interval I if $\forall x \in I, f(x) > 0$"
?
The last one, of course. Since it defines every element within the definition (the function, interval, and values of x are all clearly outlined). There is no ambiguity about what each element is!
<!--SR:!2024-10-08,4,270-->

What is a (formal) definition
?
A *formal* definition describes what it means for a statement to be true. For instance, if I want to say that a function is increasing, I can have a definition that applies to all functions that are increasing.
[[Fall 2024/Calc (MATA31)/2️⃣ Proofs (Week 1 & 2)/Quantifiers]] are used to make them precise!
<!--SR:!2024-10-08,4,270-->

The definition for a one-to-one function in domain D can be expressed as $\forall x_{1}, x_{2} \in D \text{ s.t. } x_{1} \neq x_{2} \implies f(x_{1}) \neq f(x_{2})$. However, this is hard to solve for because of the $\neq$ signs. How can we get rid of them?
? 
By using the contrapositive of the implication, of course!
$\forall x_{1}, x_{2} \in D \text{ s.t. } f(x_{1}) = f(x_{2}) \implies x_{1} = x_{2}$
