> Fixed $n \times n$ size. Like Grade 3 math !

![[Grade 3 Math.png]]
- Observe how the top number is "multiplied" to the first, second, and third number. Then all of these results are summed. 
![[Bin multiplying like in grade 3.png]]

Generally speaking it looks like this:
![[Generic bin mult.png]]
You just add up all the columns... we know how to add! 
In implementation it looks a bit... you'll see

![[Bin mult implementation and wow yikes.png]]
> I do *not* know why `the` and `of` are there


- The calculations happen in 1 cycle! Combinational circuit indeed: O(1) clock cycles
- The size is really big though: $O(N^2)$
	- One 4-bit multiplier already needs 12 FA's. That is a lot!
	- 32 bits would be even crazier
