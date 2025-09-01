Was relevant for Top K frequent elements
>[!quote] 
>For an input array, treat each value as an index of an output array.
>Increment the count at that index by 1
>This effectively counts the occurrences of a number of index $i$ in $O(?)$ space
>
>This only works if the input is bounded. Otherwise space is unknown. It could go crazy!
>
>If not bounded (i.e. memory can go crazy) you instead do this:
>1. The index is now the *count* (the array will *always* be less than $n$ size, so it scales by $O(n)$)
>2. The value of the array is an array of values that the count associates with (i.e. index 2 with `[201, 43]` inside means 201 and 43 have a count of 2)
>3. Size problems solved! 

Note:
- Hashmaps keep track of key/value pairs. It doesn't have a big list of values that would scale indefinitely. If a key is 100000000000, then it won't use 4000000000000 bytes or whatever.
