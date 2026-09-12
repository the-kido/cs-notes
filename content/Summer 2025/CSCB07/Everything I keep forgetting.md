Lol i basically have 2 hours to do all this (it'll prolly be 10 mins per slide anyway)
### Intro slides

- Write once, run anywhere -- with the VM!
- source to bytecode (JVM runs) interpreted and executed by the JVM
- Source code goes into compiler. That makes a `.class` executable. Then that, alongside library code, is shoved into the JVM to run
- Primitive types:
	- bool, int, long, float, double, char, short, byte
- Classes have fields, methods, and constructors
- Each thread has only 1 stack. Heaps are where objects themselves are stored. Stacks have local variables and info on method calls
- Reference types default to `null`. The rest are 0, false, etc.
- Primitive types's values are *of* the primitive type. Reference type's values are a *reference* to where the object is in the heap.
- Reference variable = the context that you can access fields/methods from.
	- i.e. `Point point = new();` `point` is a refernce variable that lets you access `x` via `point.x`.
	- Static methods don't need a reference variable. You can do `Point.staticMethod()`
- `int[] a = new int[10];`
- `double[] b = { 3.2, 324.43, 43.3535, 321 }`
- In 2d arrays, the first index = the first array
- `System.in` is an input stream. It's like a file. Same with `System.out`
- `File` is a class that exists. `new File("file.txt")` works
- Bunch of ways to read. Scanner is the safest way. input.nextInt and stuff like that, yknow!
- FileWriter for writing too. PrintStream is EXACTLY like `System.out` . So you can do `println` which is coolio.

### OOP slide
- Procedural = focus on methods with data and operations separate.
- OOP couples methods and data together into objects. Are organized to mirror real life.
- inheritance reduces redundancy and extend thingys. `extends`
- `instanceof`
```java
if (someObject instanceof Point) // returns true of someObject is a Point
```
- Downcasting = destructive = going down from parent to child = turning object into another object (i assume the method defs and stuff also change!) `Employee e = (Employee)p;` 
- Upcasting obvious. 
- `Overriding` = new implementation for same signature. Use `@Override` for type thingy
- `Overloading` has you adding more of the same named method and  yeah. diff signatures
- Invoke superclass method defs with `super.` things. Also if empty constructor not explicit, you gotta make it explicit!
- Equals! It's gotta be 
	- symmetric (x equals y and y equals x)
	- transistive (funny thing)
	- consistent (call many times)
	- reflexive (calling itself)
- Override equals = override hashcode too
	- Equal objects MUST have equal hashcodes
	- Unequal objects preferably have unequal hashcodes
- `class@12312414` for default `toString`
- Polymorphism:  An object of a subclass can be use whatever its superclass is used
	- in that sense, the parent object can assume many shapes (many child objects)
- Dynamic binding
	- Method can use diff implement depends on what class you instanced
	- JVM looks for most recent implementation
- Encapsulation = things hidden from user. APIs and black-boxing
- Abstract classes
	- abstract or regular methods. abstract = no implementation
	- If a subclass doesn't define abstract, then it too must be abstract (the class of course!)
- interfaces only have abstract methods and final fields
- Generics!
- `T extends Shape` means any T of type Shape (so you can access appropriae )
- Define like `class thingy<T>`
- `Comparable<T>` is generic! and you can implement it!
	- `compareTo(T other)`
- `@Override` checks if any child can be overriden. if not, you're a bozo
- ArrayList and HashSet have a bunch of methods. yayyaya
- LinkedHashSet is hash set but with items in actual order of hash value
	- Linked list implementation. subclass of HashSet
- Exceptions!
	- `Exceptions` are checked. `RuntimeException` are unchecked (no catch required)
- If a method throws errors, you do `void method() throws Exception1, Exception2, etc.`
	- Adding unchecked methods to the `throws` list is uncessessary

### Unit Testing
- Unit testing tests methods individually
- `@Test` before a test. Also use `assertTrue, assertEquals, and assertNotNull`
- Can be approached black box or white box 
- Coverage! Each line should be touched by tests
	- Still, dead code or complex criteria might hinder effectiveness
	- Not everything will be detected
- Fault/Error/Failure
	- Bugs are all of them!
	1.  Faults are a static defect (a bad line of code)
	2. Errors are an incorrect internal state
	3. Failures are incorrect behaviour w.r.t the requirements.
	- Think of RIPR. I is the first. P is the second. R is the third
- RIPR for a single failure
	1. Reachable. You should be able to reach the fault that would cause the infection.
	2. Infection: You run the faulty line of code which messes up the current state of the program
	3. Propagation: This infection eventually results in incorrect outputs 
	4. Revealability: the infection propagated and now the user can see it

### Software Development Life Cycle!
- Agile the best
- How to do:
	- Product backlog --> Scrum backlog --> Springs (1 to 4 weeks each) and u cycle those --> Eventually you get software!
- Scrum master removes obstacles. Product owner gives requirements and accepts demos. Helps plan. Team members actually do the work
- How to scrum
	- Sprints:
		- Tasks are a bunch of user stories
		- Work for a few weeks
		- Then at the end, hold a retrospective
	- User Stories
		- As a ___ I want to ___ such that ___
	- Planning sessions
		- Take a few hours before the start of a new sprint
		- Decide on what work to do and other technical things they might face
	- Standup meetings
		- Every day
		- No more than 15 minutes
			- What did i do
			- What will i do
			- what do  I need help with
	- Working agreement is basically a contract abt how the team will work!
	- "Definition of done" is also defined
	- Overall flow:
		- Product owner specifies features
		- Team figures out what's gonna be done (backlog)
		- Turns those into sprint backlog
		- Sprints are done
			- Each 24 hours you have your standup
			- Each sprint you have it reviewed and your retrospective.
- 