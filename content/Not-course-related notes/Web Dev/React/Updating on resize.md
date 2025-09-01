Before you would just subscribe to `window.addEventlister('resize')` and be happy, but with React, if you do that within a component, you'll be subscribing to the event *every update* and that is abysmal for memory.

How to fix? Like this:

```tsx
const open = usePopupStore((store) => store.open);

useEffect(() => {
    if (!open) return;
    window.addEventListener('resize', updatePopupPosition);
    return () => {
      window.removeEventListener('resize', updatePopupPosition);
    };
  }, [open]);
```
- Assuming `open` is a store that indicates *when* you want this event to be subscribed, and `updatePopupPosition` is that function you want to call each update, you must use `useEffect` because it automatically cleans up the event each update (that's what the `return` is for). Otherwise the event would be continuously added, with no clean-up to be had.