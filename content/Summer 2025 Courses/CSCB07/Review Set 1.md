### Q1
(note inside of the Employee constructor, the exception is unchecked so we dont have to add `throws` )
1. The super constructor of employee doesnt take a name
2. Comparable requires that `compareTo` is implemented but it never was
3. @override on a method that can't be overriden (i.e. the method overrided does not exist in the abstract class)
4. Cannot instance person in main
5. Oh main doesn't have the right signature














6. Doesn't implement `compareTo`
7. Super constructor DNE
8. @Override is bad
9. Person is abstract
10. 

is that it?

### Q2
1. `Alpha: B07 ✅ `
2. `no message ✅ `
3. `~~~~~~` #todo this one is CRAZY 
>[!note]- spoilers
> answer is `B07`
4. `Alpha  ✅ `
5. `Alpha: CSC ✅ `
6. `CSCB07 ✅ `
7. `Alpha: B07 ✅ `

### Q3
a) 
- No symmetry, cuz d.equals(b) is true (b is a document and has the same content) but b.equals(d) is NOT
- Reflexive yes because d.equals(d) is true since the type and content is the same. Same for b.equals(b)
- Transitive is true becuz assuming the content and titles of the books and docs are the same...
	- #todo Engrain this sorta logic! It's really intuitive with practice though. a67 for the win.
	- Suppose a1.equals(a2) and a2.equals(a3) and assume they all have the same content; if they're a book, they should have the same title.
		- If a1 is a document, then a1.equals(a3) because:
			- if a2 is a book, then a1.equals(a2) holds. a2.equals(a3) can only be true if a3 is a book, so a1.equals(a3) since a1 is a doc and a3 is a book
			- if a2 is a document, then a3 can either be a book or document. either way, a1.equals(a3) holds
		- If a1 is a book, then a1.equals(a3) cuzzz
			- a2 must be a book for a1.equals(a2) to hold. Similarly a3 must be a book since a2.equals(a3) must hold. Therefore a1.equals(a3) since a1 and a3 must both be books.
- Consistent
	- Because the function doesn't change the variables, the state of the class when called again is the same, so the function will return the same output as the content and value of variables have not changed

b) 
```java
public int hashCode() {
	return document.length(); // Equal objects have equal hash codes is TRUE!
}
```

c) With composition (I got spoiled for the answer lol)
but it's simple: have a document instance within the book and reference it, instead of implementing it and dealing with bloated boilerplate. Composition my beloved

### Q4
- #todo I need to remember all the kinds of jtest. There was `assertEquals`, `assertTrue`, `assertNotNull` but I haven't used the last two enough (and used them wrong, too)
- Also remember to use the annocation `@Test` to show the method is a test

Basically good but use assert false as well as assert true. Use assert equals when comparing if two values are equal as well. Yeah just gotta remember that #todo
```java
@Test
public void testEquals1() {
	Point p1 = new Point(0, 0);
	Circle c1 = new Circle(p1, 4.0);
	Circle c2 = null;
	assertNotEquals(c1, c2);
}

@Test
public void testEquals2() {
	Point p1 = new Point(0, 0);
	Circle c1 = new Circle(p1, 4.0);
	Circle c2 = c1;
	assertTrue(c1.equals(c2) == true);
}

@Test
public void testEquals3() {
	Point p1 = new Point(0, 0);
	Circle c1 = new Circle(p1, 4.0);
	assertTrue(c1.equals(p1) == false);
}

@Test
public void testEquals4() {
	Point p1 = new Point(0, 0);
	Circle c1 = new Circle(p1, 4.0);
	Circle c2 = new Circle(p1, 4.0);
	assertTrue(c1.equals(c2) == true);
}

@Test
public void testEquals5() {
	Point p1 = new Point(0, 0);
	Circle c1 = new Circle(p1, 4.0);
	Circle c2 = new Circle(p1, 3.0);
	assertFalse(c1.equals(c2));
}

@Test
public void testEquals6() {
	Point p1 = new Point(0, 0);
	Point p2 = new Point(0, 1);
	Circle c1 = new Circle(p1, 4.0);
	Circle c2 = new Circle(p2, 4.0);
	assertFalse(c1.equals(c2));
}
```

### Q5
#todo Remember, by default things are "public"-ish (package private)
1. x is defaulted to 0 as it's an instance field (unlike local variables, who you should explicitly set a default value to) so the output should intuitively be `2` (C)
2. d (will not compile cuz you can still access static things that illegal-looking way)
	1. Better explanation: you cannot define the same function signature twice, even if the static modifier differentiates the two
3. `nullpointerexception` (java is too dumb to know m is null)
4. Okay...
	1. should be ok but `abstract` is implicit
	2. B is good
	3. `int x` should be constant. otherwise it's good Oh nvm java doesnt do that for you?
		1. Nope it has to be marked `final`
	4. nuh uh uh. No implementations
5. Alright...
	1. A is chill
	2. B cannot have abstract members in non-abstract class
	3. C is chill
	4. D is chill
6. `s` is an array = a reference type. so it's by default `null`. accessing `length` as a member should throw a `NullPointerException` (C)
7. The empty-arged constructor is private, so the fraction cannot be instanced. It will not compile
8. okee
	1. false
	2. false
	3. true
	4. false
	5. ✅ Good work
9. aaa
	1. A is good cuz equal objects have equal hashcodes
	2. B is good
	3. Two classes can have the same id but different department so the hashcodes would be different for the same class (as defined by equals)
	4. D is false cuz id is what determines equivalence
		1. note that string's hashcode function *is* overwritten
10. D: none of them (should be gibberish)
11. 4
12. okay..
	1. Duration is equal when the mins and secs are equal
	2. Specific duration is true also if millis are equal
	3. Reflexive is true
	4. Not symmetry (dur.equals(spec) can be true when spec.equals(dur) is false)
	5. consider s1.equals(d1) and d1.equals(s2) where s1's mili = 10 and s2's mili = 20
		1. Because d1 is not a specific duration, s1.equals(d1) uses the duration implementation, which compares minutes and seconds. Thus, s1 and d1 only have equivalent secs/mins.
		2. Because d1.equals(s2) casts s2 to a duration, it again doesn't consider miliseconds.
		3. So s2 and s1 may have different miliiseconds, meaning they are not equivalent. 
	6. Consistency is true
14. #todo I dont know exceptions well enough...!
	1. If you want to catch errors *in* errors, you have to *nest*. But catch statements chained are to select between the many kinds of errors you might get (i.e. runtime exception, any old exception, etc.). The `finally` is run every time no matter what though.


### Q6 
Basically


### Q7
a)
R --> True: it's reachable because 1 < 3 --> b < c is true. Also 2 > 1 --> !(a < b) so the `m = b` fault is hit with this test.
I --> True. m = b is a fault. The expected `m` at this point is `m = a`
P --> True. The incorrect `m` propagates down to the `return` of the function
R --> True. The return of `median(2,1,3)` is `1` and `1 != 2` so the `assertTrue` test will fail when it was expected to have passed

b) let `A = { 1 }, 1`
then left = 0, right = 0. 0 < 0 is false. skips to -1

c) `A = { 2, 3 }, x = 7`
- `assertEquals(binSearch(new int[]{2, 3}, 7), -1)`
- When item isn't found... hmmm smart!



- down-casting means going from parent to child (usually destructive; requires explicit cast)
- upcasting means going from child to parent (not destructive. Can be done implicitly)