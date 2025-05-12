Creating one is simple:
1. Have a directory that looks something like this:

```
big-folder/
├── packages/
│   ├── electron-app/
│   │   ├── src/
│   │   └── package.json (requires 'shared-types')
│   ├── chrome-extension/
│   │   ├── src/
│   │   └── package.json (requires 'shared-types')
│   └── shared-types/
│       ├── src/
│       └── package.json (name: 'shared-types')
```

To initialize shared-types, run the usual:
1. `npm init`
2. `npm install --save-dev typescript`
3. Initialize `package.json`
	1.  `"name": "big-app-shared-types"` (for this example)
	2. `"main": "dist/index.js"`
	3. `"types": "dist/index.d.ts"`
		1. This is IMPORTANT. But also #todo I am not sure what the `.d` represents.
	4. Ensure you have `"build": "tsc"` as a pair inside of `"scripts"` within `package.json`

Then the `index.ts` within `src` might look like this:
```ts
export * from './shared';
```
That's all. Populate `shared.ts` with all the interfaces and enums and constants you want!

From there we go into our electron app's `package.json` and include this dependency:
```json
"dependencies": {
	...
	"big-app-shared-types": "file:../shared-types",
	...
}
```
and lastly we run `npm install prod-app-shared` within the electron app's directory and all should be set up.

You can import all the stuff with `import * as _ from 'big-app-shared-types` now.
