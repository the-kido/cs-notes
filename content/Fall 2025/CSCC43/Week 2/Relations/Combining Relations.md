### Common Case
Case: Entity set `E` and `F` is related via relation `R` . `E` is the "many" side and `F` is the "one" side. 

Commonly, you can combine relations of an entity-set with some many-one relationship. This creates *a new relation*
![[Combining Relations Common.png]]
-  Movies is the many side of "directs" (a director directs many movies). You can just embed who directed the movie into the entity set instead.

>[!note] Explaining my braindead thought process
>I thought, for some reason, you can combine an entity set and a relation, and somehow display that in the E/R  diagram. You **CANNOT**!

>[!warn] You can accidentally combine too much and create redundancy!
>For instance, you wouldn't want to merge Movies(title, length) and stars-in(name, title) since you'd get MovieStars(title, name, length), which has the length of the movie. *Irrelevant* info!



