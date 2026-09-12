There are 3 ways
1. The obvious way: Make the subclass have all attr's of the parent class
![[The obvious way for subclass to relation.png]]

2. E/R style! 
	1. The parent class keeps track of child classes common attr's (like it always should)
	2. The child classes schema is just the key of the parent + any extra attr's of the child.
		1. That way you can "natural join" the child classes with the parent classes to get "all" the properties like in Way #1

![[Second way of subclass to relation.png]]
- Observe Movies has the key `title`. For all cartoons, crime movies, and other movies, there are entries in `Movies`. Alongside the `Movies` entry, we add an entry to `Cartoons` that associates to one of the movies (that is its key) as well as extra attr's like "the animator".
- To summarize: Movies has every movie. Cartoons / Crime movies has a reference to a movie + extra stuff

3. Use "nulls"
![[Using nulls for subclass to relation.png]]
- Every child classes stuff gets its own column. If it's relevant to the movie, add it. Otherwise NULL it.



