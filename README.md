# kbar3

> WIP


## `ActionInterface` and `ActionImpl`

> [source reference](https://github.com/timc1/kbar/pull/103)

These manage the implicit parent/child relationships between all `actions`, 

in addition any other relationships we want; e.g. *tracking ancestors*.

`ActionImpl`

An implementation of the `Action` *type*. 
Users pass a list of actions in the example above, and we transform each action into an ActionImpl which will keep a reference of its parent, children, and ancestors. As actions are added and removed, this class will handle updating its references.

`ActionInterface`
A utility which help us interface with the underlying `ActionImpl` *class*. 

This holds the **internal actions state** which our `useStore` will use.


Users *define* actions by passing in an object like so when using `useRegisterActions`:

```js
/*! example: define action by passing object */
[
  {
    id: 123,
    name: "Post 1",
    parent: "parentId"
  },
]
```
We then transform that into our internal `ActionImpl` object, which will maintain *parent*, *children*, and *ancestor* relationships outside of React land.

> src/action/ActionInterface.ts
```ts
export class ActionInterface {
  actions: Record<ActionId, ActionImpl> = {};
 ```
This interface improves the previous naive logic we had for adding/removing actions. This way is more testable and extracts logic out of our React component.
