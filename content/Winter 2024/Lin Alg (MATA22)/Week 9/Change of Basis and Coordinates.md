
![[Pasted image 20250318150332.png]]
- idk might be useful

>[!faq] Idea:
>Given a vector $v \in V$ and two bases $\alpha, \beta$ of V, there are two coordinate representations of $v$: either $[v]_\alpha$ or $[v]_\beta$
>But how are these related? How can we go from one to the other!?

>[!thm] Changing Coordinates / Change of Basis
>![[Pasted image 20250318151017.png]]
>- You need to compute $[I]_\alpha^\beta$ first before being able to use it for base changing purposes
>
>The idea is that the $\alpha$'s cancel at the step $[I]_\alpha^\beta[v]_\alpha$ to get $[I(v)]_\beta$
>$=[v]_\beta$ cuz I is the identity transformation
>
>>[!proof]
>>![[Pasted image 20250318151225.png]]


![[Pasted image 20250318153929.png]]

>[!thm] Changing Coordinates and Linear Maps
>![[Pasted image 20250318163043.png]]
>
>>[!proof]
>> For each vector $v \in V$ we have $$T(v) = I_w(T(I_v(v)))$$ 
>> We get:
>> $$[T]_{\alpha'}^{\beta'} = [I_w\cdot T\cdot T_v]_{\alpha'}^{\beta'}$$
>> $$=[I_w]^{\beta'}_{\beta} [T]_\alpha^\beta [I_V]_{\alpha'}^\alpha \text{ by matrix multiplication / composition}$$
>> Be careful w/ the bases
>> 

^143a46


>[!thm]
>![[Pasted image 20250318170950.png]]
>- Often we only have 1 vector space V where we want to change coordinates. So this deals with that case
>
>>[!proof] 
>>Taking V=W. $\alpha = \beta$ and $\alpha' = \beta'$ we have
>>$[T]_{\alpha'}^{\alpha'} = [I]_\alpha^{\alpha'}[T]_\alpha^\alpha [I]_{\alpha'}^\alpha$
>>Notice how the first and last terms are very similar looking (only the bases are different).
>>We check $[I]_\alpha^{\alpha'} = ([I]_{\alpha'}^\alpha)^{-1}$
>>
>>Since $[I]_{\alpha}^{\alpha'}[I]_{\alpha'}^\alpha = [II]_{\alpha'}^{\alpha'}$
>>$=[I]_{\alpha'}^{\alpha'}$, which is also the identity transformation
>>![[Pasted image 20250318171659.png]]

Example to show why all this stuff is actually somehow useful
![[Pasted image 20250318171911.png]]



# Misc things

![[Pasted image 20250324231213.png]]

![[Pasted image 20250324231224.png]]
- This helps find that 3rd matrix
- We know then that $[I]_\alpha^\beta [T]_\alpha^\alpha [v]_\alpha$ 
- T takes in alpha, returns alpha

![[Pasted image 20250324231407.png]]
- The circles should match; do a bit of manipulation

![[Pasted image 20250324231742.png]]

