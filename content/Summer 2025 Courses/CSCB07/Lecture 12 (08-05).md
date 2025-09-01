(from before)
- low coupling, high cohesion!
	- things *inside* a module are very connected

### Refactoring
- No change in external behaviour, but improves internal structure
	- Shouldn't change how *others* interact w/ your code
- With time, any well-designed system will deteriorate!
	- If more people get involved (even if they are experts!), more requirements arise, etc. the contributions at sporadic intervals means things will slowly deteriorate (he doesn't explain why; he just asserts it does)
	- Thus, refactoring
#### "Extract into Method" method
- If there's a self-sustaining fragment, you can pull it out to another method!
	- A function call is another *level* of abstraction (a call to `println` isn't really that abstracted)
	- Less levels is better

#### Refactoring replace method w/ method
- Create a new object, make it take le object, return changes
- Idk tbh. WHy cant you just make another method? Local variables?
	- Future me here: I dunno what i was talking about. Think of the damage struct in my game.
- 

#### Consolidating Conditional Expressions
- Make a boolean method. returns bool that u otherwise would calculate elsewhere.

#### Remove duplicate expressions in conditionals

#### "Remove control flag" 
- Wait we just use `break` yay.
	- You keep track of when you find someone and say "yes, found" when done so. Return otherwise
	- Problem is duplicate code / redundancy and too many layers of indentation
- You can improve the code further by having a method that does the `if` checks for you.
#### GUARD CLAUSES YIPPEEE
- "special cases". if none satisfied, do the regular thing

#### Magic Numbers be Gone
- Replace em with constants
	- They have a "meaning" 

#### Parameterise similar methods
- Best example is in slides
	- fivePercentRaise() and tenPercentRaise() could just be raise(percentage)

#### eldritch horror
Bruh imaging passing a string to determine the behaviour of a function. what the actual heck


#### "Explaining Variables"
- Instead of having 1 bit line, separate into tinier expressions.

#### Extracting class from bigger class
- Person with Phone functionality means Phone could just be split from person

#### Extract Superclass
- If two classes have common behaviour, extract into a super class
- Obvious

#### Extract Subclass
- A person might have functionality only some instances use.
- You can pull out that extra behaviour into a subclass

#### Pull up Field/Method
- if you have a class w/ identical fields/methods, you can pull them into a superclass! ( #todo isn't that the same as above?)

#### Push down
- A class has behaviour only a few subclasses use. Push that small behaviour down instead

#### Composition is amazing (let's replace it with inheritance!)
- Delegation = composition
- The example he gives
	- A vector is a "array" collection
	- A stack has an array and pushes/pops the array
	- Initially, since stack inherits from vector, we also get all of "vector"s behaviour. We can still add a book at any location!
		- Imagine `vector` had a `void add(Item item, int index) { }` function. You can see the issue here. It's accessible outside of the stack.
	- Instead we must encapsulate the vector for the user to access (by making it a private field)

#### Delegation to inheritance
- If you're commonly accessing every element of the interface you composed with (e.g. an Employee might compose with a person, and every aspect of this person is accessed, then what's even the point)
	- OR, if the composed field is *private* (for some reason i assumed it's public, lol) then you would need a bazillion getters or setters. That's silly
- So inheritance makes the most sense when all features of the superclass applies to the subclass (and LSP isn't violated) then you should do inheritance.

#### Conditional to Polymorphism
- If a function returns a bunch of things depending on the "type" of something (like if we have a string for the type, and each type has other properties like speed, then we can just create classes for all of these guys!)
	- Make bird abstract, and have the subclasses implement those details instead of another class figuring that out.

#### Introducing a `null` object
- Weirdo.
- If we keep checking for null (annoying!) we can instead just... not care about that, and have a class that handles it instead.
	- Reduces if statements or other repeated code

## Review part 2 (i missed part 1 `:(` very sad)

Q1
- #tood mockito examples in the R2_Set2. Interesting!
- Oh this is defo in the lectures he posted (that i refused to watch)
- For the second last else if, we didn't specify what to do, so the default behaviour is "false".
- Mock models don't really register the student 
- Therefore the whole thing will be true (it will print registered successfully twice, since nothing changes throughout the whole pass of the method the first time)
- For mock objects, if you dont specify what a method will do, the default behaviour will occur!

Q2
- DIP (??) (item relies on `Fruit` inside of computerPrice)
- It also violates OCP cuz compute price might need to mutate for other kinds of items
- LSP because `getWeight` inside of ElectronicDevice
	- Because offff why? #todo 
	- Something about it doing something it doesn't need to
- One could argue SRP is violated since computePrice shouldn't be there 
	- Like, not all items should have a calculable price, for instance

- Solution
	- Make computePrice abstract
	- for LSP, to address the `@Override` issue, just get rid of `getWeight` inside of `item` altogether.


Q5
- Singleton
- LinkedHashSet
- Strategy pattern (for `b)` )

Nothing on files or file IO