android yayayay

"A collection of screens"

#todo ask if we can use kotlin (for funzies -- we are quite familiar with java yknow!? More of a challenge!?)

### Activities
- A big flow chart
- `onStart` = screen is *visible* but you CANNOT interact with it yet
	- A "transient state"
- `onResume` = you can actually interact with the screen
- `onPause` = screen is visible but not interactable (again...?)

The id of elements should be unique (in order to refer to them in the code)

Bundle is your previous "state".
- To know what state you had before
- If you're starting from scratch every time, it's prolly useless

`setContentView` renders a certain layout.

All items in XML are a subclass of `View`
- Buttons, EditText, etc.

View groups are also views. Views in views!


### Activity!
`android.intent.action.MAIN` specifies this is the "main" activity

idrk what hes talking abt

We only doing unit testing. Ignore testing android UI stuff in the video provided

`colors.xml` has your palette colours (instead of hard-coding them!)


### Gradle
- Automates *building* your app
- `compileSdk 31` -- That is the thingy you're actually compiling
- `targetSdk 31` -- Thingy you are "targeting" (should be less than or equal)
- `minSdk 21`-- The lowest that works (the more devices you can support)

### Storing things persistently
- File System (`FileWriter`, json specifically)
	- Unorganized; not that much; small
- For organized data, *Shared Preferences* or Db is prolly better
	- Shared preferences = as a XML file
	- SQLite or Firebase
		- SQL for excel-like stuff
		- Firebase Realtime Database
			- This is what we are using for our project!
			- DB is stored online (you can interact w/ it and whatnot)
			- Any changes to the Db will be communicated to *everyone* monitoring the Db 
				- I.e. when making an announcement, everyone gets notified
			- 
		- 
- Firebase uses JSON
	- Everything is stored as a key-value pair

onClickAdd
- Passes the `View` that it was called by 
- `R` is a file (`id` is a static field of the class)
	- `findViewById` takes an ID and u find it like that mhmhm

### Multithreading
- `setOutputText` is the "old main thread" and instancing `new ValueEventListener` creates a new thread ? So whatever variables exist outside the function is copied and yeah yeah.
- Basically u needa make sure the new thread *returns* the changes such that the old thread is correctly updated, instead of updating values as if it updates the old thread, which it doesnt.
- 