### Bubble sort
* Swap the first and second term if they are greater. After a whole run, do it again except the last number is correctly sorted as it bubbled up to the top.
### Selection sort
* Go through all the numbers. Find the smallest number and put it at the start 
* OR
* Find the biggest number and put it at the end
### Insertion sort
* Assume the first number is good.
* Go to the next number. If it should go before, it'll wiggle its way down (by swapping) until it reaches the right place
* Or:  The first number is sorted. Check if the number after is bigger or not. if it is, then shove it to the right place 
![[Pasted image 20240610202515.png]]
Observe the image above. The first row is the initial array of \[9, 8, 5, 6, 4]. 
1. 8 wiggle it's way down.
2. 5 is wiggled down
3. 6 is wiggled down (before 5!)
4. 4 is wiggled down. Now it's complete!
### Merge sort
 * Split up the array into a whole bunch of sub-arrays. Then sort these sub arrays, go up, and compare the first terms of two sub-arrays and add it to a bigger division. 