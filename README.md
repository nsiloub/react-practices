The counter was freezing when clicking the increment/decrement factor multiple times, because in this case ```increment``` state is an ```Effect-Event``` (a non-reactive effect). since it's an effect which happens only ***when the user click on the button***( or any other user acation). Therefore will need to read the ***latest value*** which we can't get in this case while using the state directly on ```useEffect```, plus, with the timeout, the state are batched and are not set automatically,...

so don't do this
```tsx
  // Effect for incrementing the counter 
  useEffect(() => {
    const delay = 1000;
    const timerId = setInterval(() => {
      setCount(c => c + increment) // "increment" is not the latest value from the state
    }, delay);

    return () => {
      clearInterval(timerId);
    }
  }, [increment])
```


in stead, Separate the ***non-reactive Effect*** into a dedicated ```useEffectEvent``` like so: 
```tsx
  const onIncrement = useEffectEvent(() => {
    setCount(c => c + increment); 
  });

  // Effect for using the non-reactive Effect "increment"
  useEffect(() => {
    const delay = 1000;
    const timerId = setInterval(() => {
      onIncrement()
    }, delay);

    return () => {
      clearInterval(timerId);
    }
  }, [])


```

and make sure to import the ***experimental*** useEffect by adding the following lines on the top of your document:
```ts
/// <reference types="react/experimental" />
import { experimental_useEffectEvent as useEffectEvent } from "react";
```

and make sure you've installed the packages as described [here](https://react.dev/reference/react/experimental_useEffectEvent), and run this ```npm commands```:
```shell
npm install react@experimental react-dom@experimental eslint-plugin-react-hooks@experimental
```