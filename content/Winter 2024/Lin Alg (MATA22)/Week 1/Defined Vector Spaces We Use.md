"Additionally, scalar multiplication is defined using the multiplication operator from the field." 
	- Like, is the vector some structure that is defined using "some" field. This field could be complex numbers, real numbers, *any* field? And whatever operator the field uses is what the vector uses to define scalar multiplication?
 It reminds me of generics / abstraction. Is that right to compare that? 
 Also, is there anyone that could actually... interpret this? Chatgpt said this is totally right. 
```csharp
// Pseudocode of course
class Vector<T> where T : Field
{
	// Does vector things.
	// Defines scalar multiplication using the multiplication operator defined by the field passed into the vector
}

abstract class Field {
	// Has the blueprints to suffice the 6 axioms
	public Field Addition(Field x, Field y);
	public Field Multiplication(Field x, Field y);
}

class RealNumber : Field {
	double x, double y;
	// Has implemenations that suffice the 6 axioms
}

class ComplexNumber : Field {
	double a, b; // Real and imaginary components
	double c, d;
	// Has implemenations that suffice the 6 axioms
}

// Represents "A real vector space where the field is real numbers"
Vector<RealNumber> someVectorSpace;
```
#todo confirm

I think the above is right, so anyway:


>[!quote ] Complex Vector Space
A $\mathbb C$-vector space is a vector space where the field is the complex numbers.
>- So like in the above example, the Vector passes the type argument of `RealNumbers`, which is a field!  

> [!quote] Real Vector Space / $\mathbb R$ vector space
> A vector space where the field is the real numbers.
>- Similar to $\mathbb C$ vector spaces



#todo "the field R is a vector space over R". Why is that true? (i saw this on reddit)
