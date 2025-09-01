I honestly don't know too much about what it does or what it is, but I do know that, alongside `webpack`, it creates 
- `webpack.main.config.js`
- `webpack.renderer.config.js`
and `webpack.config.js` is NOT used!


In their contexts, the `__dirname` refers to the directory where the config file itself lives.

# The .html debacle
I was trying to open a new window from the main thread. Note that, since I was using `webpack`,  everything in the Electron app that's used in runtime lives inside the .webpack directory.

That means `__dir` points to something like `"project-name\.webpack\renderer\main_window\index.js"` instead of `"project-name\src\index.ts"`

Things like `.html` files are *not* copied over automatically, and especially not if they're used *dynamically* (i.e. they are not explicitly imported -- otherwise they would be bundled just fine)
That is when the `copy-webpack-plugin` comes into play. You can do something like this within your `webpack.main.config.ts` (⚠️ and NOT `webpack.config.js`. I wasted too many days on this quirk ⚠️)
```ts
... other things ...

plugins: [
new CopyWebpackPlugin({
  patterns: [
	{
	  from: path.resolve(__dirname, "src/renderer/test.html"),
	  to: path.resolve(__dirname, ".webpack/main/test.html"),
	},
  ],
}),
],

... other things ...
```
- This will copy a file relative to the config file and copy it into webpack where it belongs and can be easily accessed by the rest of your app!