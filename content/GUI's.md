A window is a "`JFrame`"
- Dimensions are in pixels
	- (0,0) is at the top left (like Godot)
- Widgets are the components:
	- `TextLabel`s
		- Will display words
	- Buttons
	- `TextField`
		- Will allow user input
	- `TextArea`
	- `CheckBox`
* Output can be a label (most common)
* All widgets are rectangular and they are placed via the top-left corner's position

E.g: a label is 200 by 50. The Frame is 500 by 500. How do we center it?
- y: 250 - 25 = 225 y
- x: 250 - 100 = 150 x
- Rect Coords: (150, 225)




* Main isn't used very much
* If we want to make a Gui, make a new file called frmMyGui
	* All forms will start with "frm"
	* All the imports will be copy-pasted
	* Dw about what `extends` and `implements` mean; really.
	* Instance the GUI inside of main:
	* ![[Pasted image 20240227141600.png]]

> here is the file frmMyGui.java
![[Pasted image 20240227141453.png]]


### Frame methods
> Inside of frmMyGUI's constructor
![[Pasted image 20240227141708.png]]

### Instancing custom colors
![[Pasted image 20240227141748.png]]

### Defining new widgets on a frame
![[Pasted image 20240227142036.png]]
> Declare it first 
>
```java
public class frmMyFrame extends JFrame implements ActionListener 
{
	// Declare variable
	JLabel lblTitle;
	JTextField txtName;
	JButtom btnEnter;
	
	public frmMyFrame() 
	{
		setLayout(null); // This will give "full control" over where labels go
		
		// Instance it
		lblTitle = new JLabel("Welcome to my GUI");
		// These can now be controlled b/c setLayout is null.
		lblTitle.setSize(200, 50);
		lblTitle.setLocation(150, 0);
		// Required to see the widget
		add(lblTitle);  


		// Setting up a text field
		txtName = new JTextField(); // Nothing required to instance
		txtName.setLocation(150, 50);
		txtName.setSize(100, 50);
		add(txtName);
		

		// Lastly, a button for example
		btnEnter = new JButton("Enter");
		btnEnter.setSize(150, 200);
		btnEnter.setLocation(100, 50);
		add(btnEnter;)
	}
}
```
> [!Note] If two widgets are on the same spot, they're cover eachother up! Be careful about that


## Coding the GUI's
* All buttons have "Actions"
* Before adding a button, you need these 2 lines of code to make the button do something.
```java

public frmMyFrame() {
	btnEnter = new JButton("Enter");
	btnEnter.setSize(150, 200);
	btnEnter.setLocation(100, 50);	
	// New lines
	btnEnter.setActionComment("enter");
	btnEnter.setActionListener(this);
	// Remember to add
	add(btnEnter;)
}

public void actionPerformed(ActionEvent e) {
	if (e.getActionComment.equals("enter")) {
		// Code is triggered when the button is pressed
	}
}
```

## Getting text from TextLabel
```java
// It's this simple! txtName is a JTextLabel
String text = txtName.getText();

double dblValue = 10.41;
txtName.setText("" + dblValue); // Set text always takes in a string. A double is not a string, so we concatenate with the "+"
```

## Misc things
- `JOptionPane.showMessageDialog(null, "Message")` will display a ⓘ message