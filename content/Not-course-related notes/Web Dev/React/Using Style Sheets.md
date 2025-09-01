In the `.jsx` where your app is rendered, simply import your `./styles.css` 

```tsx
import { createRoot } from 'react-dom/client';
import '../styles.css' 


function App()
{
    return <>
        <h1> bazinga! </h1>
    </>
}

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App/>);
}
```

#todo I do not know why this works or *how* it works. I also don't know why, in electron, importing the css within the `.html` via `<link>`'s don't work either (something about `MIME`)
