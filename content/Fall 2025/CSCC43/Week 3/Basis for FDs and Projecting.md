>[!note] What is a Basis and a Minimal Basis?
>A **basis** for a relation $R$ is a set of FDs whose [[Not-course-related notes/Functional Programming/Closures|closure]] *implies* all FDs that *actually* hold for $R$
>
>Here's an example: Let there be a relation `R(A, B C)` where $A \to B$ and $B \to C$. 
>Some "implied" FDs would be:
>- $AC \to BC$
>- $AC \to C$
>- $A \to C$
>
>A "basis" obviously given here is simply the set $\set{A \to B, B \to C}$. This is always a valid basis for this kind of problem.
>
>In fact, it is probably the *minimal* basis too, which is the *basis* with no subset as another basis (it's minimal)
>
>A basis *cannot* be $\set{A \to C}$ since that **doesn't** imply $A \to B$ in any way!
>
>
>>[!note] Extended example
>>Let `R(A, B, C)` where $A \to BC$ and $A \to C$
>>
>>A *basis* here that's always given is $\set{A \to BC, A \to C}$ by virtue of the definition of a basis (it clearly does imply all two FDs of R)
>>
>>The *minimal* basis here would be JUST $A \to BC$. Why? Because its closure can get us $B \to C$:
>>$A \to BC \equiv A \to C$
>>So that means $\set{A \to BC}^+$ represents *all* two FDs of R
>>

