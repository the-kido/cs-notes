downsides of many arrays vs 1 container
1. it's wasteful
2. not ensured to be synced
3. conceptually it doesn't make sense. a "record" should be 1 unit of info.
Instead of passing each part of an object, you could pass that whole object. much nicer.

- typedef --> we are making a new type
- struct Restaraunt_Score --> this is a compound data type and the name of the struct is Restaraunt_Score.
- Inside are the fields. 
Why have the struct name and an alias? Well because of legacy C reasons (old C code had to always write `struct Restaurant_Score` every time

Here's the class example we made. Perhaps I can make this its own note
```c
#include<stdio.h>
#include<stdlib.h>
#include<string.h>

#define STR_LEN 300

// ah ha. global variables!
int uniqueDishID = 0;

typedef struct paco_eats_struct
{
	char dish_name[STR_LEN];		// Name of the dish
	char dish_descrption[STR_LEN];		// Dish description
	double price;				// Price in CAD (w/o tax)
	int dishID;				// Unique dish identified
	double dish_rating;			// Community rating in [1-10]
	int spicy;				// Spicy level in [1-5]

	// I removed a bunch of things:
	// Restaurant Name
	// Restaurant ID
	// etc. WHY?
	// ANS: Dishes don't need to have an attachment to what restaraunt it came from. 
} OneDish;


OneDish fillOneDish()
{
	// give the fields the same name as the variables. otherwise it's bad practice!
	int spicy;
	double price;
	char dish_name[STR_LEN];
	char desc[STR_LEN];

	printf("Give price and spice\n");
	scanf("%f %d", &price, &spicy);
	getchar();
	printf("Give dish name\n");
	fgets(dish_name, STR_LEN, stdin);
	printf("Give dish desc\n");
	fgets(desc, STR_LEN, stdin);

	printf("Here's what we have:");
	printf("%s %s %f %d", dish_name, desc, price, spicy);

	OneDish newDish;
	newDish.price = price;
	newDish.spicy = spicy;
	strcpy(newDish.dish_name, dish_name);
	strcpy(newDish.dish_descrption, desc);
	newDish.dish_rating = 0;
	newDish.dishID = uniqueDishID++;
	
	return newDish;
}


// This will NOT duplicate the data unlike the above one :)
void print_with_pointer(OneDish *dish)
{
	int spicy;
	double price;
	char dish_name[STR_LEN];
	char desc[STR_LEN];
	
	printf("Give price and spice\n");
	scanf("%f %d", &price, &spicy);
	getchar();
	printf("Give dish name\n");
	fgets(dish_name, STR_LEN, stdin);
	printf("Give dish desc\n");
	fgets(desc, STR_LEN, stdin);

	printf("Here's what we have:");
	printf("%s %s %f %d\n", dish_name, desc, price, spicy);

	dish->price = price;
	dish->spicy = spicy;
	strcpy(dish->dish_name, dish_name);
	strcpy(dish->dish_descrption, desc);
	dish->dish_rating = 0;
	dish->dishID = uniqueDishID++;
}

int main()
{
	// 1) Create a DB! (how?)
	OneDish dishes[5]; // we asked for 5 of em ye.

	// 2) What does that do in memory?
	// There aer 5 boxes for the dishes, and 1 box for the return.

	// 3) Let's write a function that
	// READS from the terminal
	// - The name, description, price, and spicy level
	//   for a dish.
	// - Stores that information into a OneDish *variable*
	// - Assigns a unique dishID (how?)
	// - Sets the dish_rating to 0 (we don't have it yet!)
	// - Returns the properly filled OneDish variable so it
	//   can be put into the DB at the specified index.
	
	for (int i = 0; i < 5; i++)
	{
		dishes[i] = fillOneDish(); // copies everything from the returned OneDish into the OneDish at dishes[0]
		printf("%s", dishes[i].dish_name);
	}



	// 4) Add a little loop to use your function to read
	//    a couple dishes to the DB.
	//    How would we keep track of how many dishes we
	//    actually have?

	// 5) Print the name, price, and spicy level of each
	//    dish in the DB - nicely!

	// 6) Let's see how to use pointers with variables
	//    of some CDT

	// 7) Let's write a function like the one from 3)
	//    but it doesn't use a OneDish variable. It
	//    stores information directly on a OneDish
	//    box that lives in another function!
	//    Remind me, how does that work?

	// 8) What does that look like in memory?

	// 9) What have we learned? how good is this
	//    solution? where should we go next?

	return 0;
}
```

- We do not want to copy and past the CDT each time we pass it, so pointers are better.

scanf() cannot work with strings as it interprets spaces as delimiters for a new value for a separate variable. `fgets()` gets the whole string, spaces included.
