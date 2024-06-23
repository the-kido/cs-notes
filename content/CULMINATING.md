
- The lev function is too slow
```java
// This takes FOREVER to finish. How to fix ??
int book = Utils.lev("Danotopia: A Land Apart from Time", "Dinotopia: A Land Apart from Time");
```

What I need:
* UML diagram per object (fields and methods)
* Flow chart for  3 methods minimum (the heavy-hitting ones; algorithms etc)
	* roughly outline how you will implement it
* A flowchart for the flow of the chart. Don't provide detail, just rough idea.

`User` will have:
- Name
- UserName
- Password

`Books` will have
- Name
- ISBN
- Year
- Author

`DataService` 
- string ratingsFile, booksFile
	- The directory to the ratings and books file.
- readFile // Reads the file and updates the data.
- updateFiles // Resets the file according to the HashMap.
- getReviewsFromUser // Gets reviews from a user 
- getBookReviews // Gets reviews for a book 
- addBook(book)
	- Increase every hashmap by 1 size.
- changeReview(user, book, rating)

- `HashMap<User, HashMap<Book, Integer>>` ratings.
- Allows me to get each rating per book
	- Allows me to get each book per users. 

The GUI's I'll need:
- Login
	- Will store the current user's name in some way
	- Allow you to create an account (IRL name, user name, password)
	- Create Account menu
	- Quit Button
- Create Account
	- Login Menu
- Main Menu
	- a "Welcome!" screen.
	- Buttons:
		- Account menu
		- Show recommendations (`FindBook)
		- Open Reviews Menu
- Account Menu
	- Set new password or name. Cannot change username.
	- Logout (should save all recommendation/review changes)
- Review menu
	- Shows all your reviews as soon as you enter it.
	- Allows you to review a new book
- `Find Book Menu`
	- Shows books you should read. 
	- Has a search menu to search for books (even if spelt incorrectly!)
		- If you do search for books it should push everything down.
- Admin Menu
	- Allows you to add/delete accounts/books (hopefully not remove, that will be very annoying)
	- Allows you to edit books and give them an ISBN.
	- Allows you to change what file the data comes from.

https://docs.google.com/document/d/1rwIZng6GqM0q9etCr2qeTgINTwvceOkBjUWopXS7dS8/edit Instructions

https://tdsb.elearningontario.ca/d2l/lms/dropbox/user/folder_submit_files.d2l?db=34279967&grpid=0&isprv=0&bp=0&ou=23612905 Rubric

How to multiple GUI's
- Feb 27 has the changes