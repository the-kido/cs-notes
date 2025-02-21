In main, we return 0 if there is no problem, and 1, 2, 3, etc if there *are* problems.
These are used because we assume this program will be used in bigger programs, so it's helpful to have info like that.




# Temp: idea to implement exercise 6

1. we get the elevation of the coord (ix, iy)
2. Instead we will march!
	1. WE start at the point and go left.
	2. If at least 1 point adjacent to that new point is the right elevation, we add it.
3. i would kinda need "4" pairs of 2 for loops. 8 loops total
	1. 2 to to the bottom right quadrant, etc.
4. I will have a function that takes in the left and right direction, and then goes do the for loop thing. 
	1. So i run (-1, 1), (1, 1), (1,-1) and (-1,-1)
	2. The for loop will go through all the pixels to that direction until we hit the boundary. so actually it's a while loop yay.
	3. For each pixel we do the adjacent test
	4. The adjacent test will be another function
		1. Ensure you check the boundries!
	5. If true, the while loops will set the right pixel to the right elevation

okay new plan

we will utilize levelset_map as a way to track the things we've already done.
We will fill bucket this bad boy.
1. Have a function that expands from a point. in all 4 directions
2. for each direction, if there is an adjacent pixel that has yet to be expanded into, but has the right elevation, then expand into it.
3. okay i think this is far simpler