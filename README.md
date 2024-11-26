in this case the ```duration``` state was a non-reactive effect (we don't want each duration changes to trigger a new animation call). So we have don't have to use it in our ```useEffect```. And plus, it only happens whenever the user updates the slider duration.   
### ~~~So, we don't want this~~~
```tsx
    const h1WelcomeRef = useRef<HTMLHeadingElement>(null);


    //  Effect for calling a new animation, (unintentionnally  for each duration changes)
    useEffect(() => {
        let animation: FadeInAnimation;
        if (h1WelcomeRef.current) {
            animation = new FadeInAnimation(h1WelcomeRef.current)
            animation.start(duration);
        }

        return () => {
            animation.stop();
        }
    }, [duration]);

```
### ===> DO THIS INSTEAD:
```tsx
    const h1WelcomeRef = useRef<HTMLHeadingElement>(null);

    // for avoiding unintentional re-renders on useEffect caused by "duration" prop. 
    const onDurationUpdate = useEffectEvent((animation: FadeInAnimation) => {
        animation.start(duration)
    });

    //  Effect for calling a new animation. 
    useEffect(() => {
        let animation: FadeInAnimation;
        if (h1WelcomeRef.current) {
            animation = new FadeInAnimation(h1WelcomeRef.current)
            onDurationUpdate(animation)
        }

        return () => {
            animation.stop();
        }
    }, []); // now there is no unnecessary re-renders. 
```
