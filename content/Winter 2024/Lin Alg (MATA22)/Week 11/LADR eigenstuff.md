>[!thm] The "LADR" way to finding eigenvectors (Find a Dependence)
>![[Pasted image 20250329111402.png]]
>>[!explanation] 
>>The goal is to find a set of transformations such that it is linearly dependent. The theorem makes it sound like we will always need $n^2$ transformations but it's not necessary as we'll see in a future example (we can hit dependence earlier!)
>>We can use the set of transformations to solve for $Z$ knowing that all the coefficients are not $0$ (as the set is lin dep)
>>

>[!example] Example using the LADR way!
>![[Pasted image 20250329111714.png]]
>>[!explanation] We know that $\dim(V) = 2$ so we find at most $T^1, T^2, T^3, T^4$ (i think)
>>When we hit T^2, we notice it's dependent as it can be represented by the other vectors in the set $\set{I, T, T^2}$ with $T^2 = 4T + 5I$
>>From there we have that $T^2 = 4T + 5I \implies Z = T^2 - 4T - 5I$
>>Let's represent that as $x^2 -4x - 5 = 0$ instead, cuz that is nicer to look at.
>>Then we factor it, get $(x-5)(x+1)$
>>$\Longleftrightarrow (T-5I)(T+I) = Z$
>
>![[Pasted image 20250329122525.png]]
>>[!explanation] 
>>Same as before, really. 


>[!thm] The LADR way to find the eigenvector
>![[Pasted image 20250329133216.png]]
>>[!explanation]  
 #todo honestly idk



My interpretation based on kielstras work:
You find the dependence, and factor it
I got $(T-5I)(T+I)\vec v = \vec 0$ for instance. Yay.
Then you choose any $\vec v$ that is nice to work with (ANY!) and we'll plug it into the two expressions:
$$(T-5I)(T+I)\vec v = \vec 0$$
and $$(T+I)(T-5I)\vec v = \vec 0$$
The top one is for $\lambda = -1$. If the expression doesn't hold for that particular v, well then at least the second coordinate as a *result* surely will! Observe:
![[Pasted image 20250411213625.png]]
- It's like magic! The first calculation did flop, yes (in that $[10\ \  \ 20]$ is not the zero vector as we'd hope)

