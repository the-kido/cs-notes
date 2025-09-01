Each recursive call looks like this:
- Pop the arguments of the function.
- (assuming we're doing the recursive call now) Store all local variables we might use after the call, including `$ra`!. Then you should store your arguments. 
- Then call the recursive function again
- Then pop the return, the previous local variable values, and boom, we're back to normal!

Stack unwinding!