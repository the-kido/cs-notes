There are **redundancies** where info can be inferred by FD's

There are **update** anomalies and **deletion** anomalies
- For update: if you update a bit of info, will the changes propagate properly? Will change in the length of a movie change the length in *each* tuple?
	- For instance, if the "length" isn't dependent on the "title", and we change the length on the row with Emily Blunt to 179, the length's change will not propagate. Oppenheimer's length will be 179 and 180 simultaneously
- For deletion: will deleting a tuple unexpectedly also delete other information?
	- Maybe deleting a "movie" also deletes a "star" if they are both in the same tuple!
![[Design Anomalies movie example.png]]

This table is very badly designed. It has both anomalies:
- If you update any row's length, the other lengths will not sync! 
- This would be solved if the movies and their lengths had its own table, and the rest of these rows pointed to that new table! That's where **normalisation** comes it!
- Same for deletion
- To do that, to normalise, we [[Relational Decomposition and Criteria|decompose]]


