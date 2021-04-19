# State in React
State is the internal knowledge that any component can have about itself. Any javascript variable can be stored in state: strings, numbers, booleans, arrays, objects, even functions. State is what lets the different components on our page be unique, even though they follow a very similar template.

Wait tho: yesterday we learned that props were what lets our components be different while following a similar template. Are props and state the same? NO:
- How are props and state different?
  - Props are passed into a component from its parent, while a component is free to define its own state.
  - When a component receives props, they are locked in for the rest of that component's life. But state can change and evolve while the component is on the screen. So, state is what lets us have user interactivity, while props do not.
- How are props and state similar?
  - They both allow two (or more) instances of the same component to be differentiated.
  - They are both encapsulated within the component that owns them: components on the page cannot _see_ the props or state of other components by default (although you can set your components up to share their state&props with the world).

## Let's Build A Thing Together
![color-changer animation](https://media.giphy.com/media/WNIf5ZnAgH6mPw79Su/giphy.gif)

## Understanding `useState`
Our primary tool for giving our components state is `useState`. Let's take a look at a sample implementation:
```js
import { useState } from 'react'

function ColorChanger() {
  const [color, setColor] = useState('red')

  return (
    <div>The color is {color}</div>
  )
}

export default ColorChanger
```
1. First things first: we have to import `useState`. Why is it wrapped in curly bois? This is compact object notation, it's short for `import { useState: useState } from 'react'`. It's needed because the `'react'` package exports many things, not just a single default export. So if we want to grab one of the tools that it makes available to us, we have to grab it by name. `import { useState: useState } from 'react'` means "I want to reach into the react package, find the thing that it exports under the name useState, and I want to assign it to the variable useState in my file.
2. `const [color, setColor] = useState('red')` is assigning two variables wrapped in an array. It's unpacking the 2-element array that useState returns. useState gives us a two-part return value: the first part is the getter for this state value, and the second part is the setter. This one line is identical to:
```js
const colorStateResult = useState('red')
const color = colorStateResult[0]
const setColor = colorStateResult[1]
```
3. In `const [color, setColor] = useState('red')`, the `'red'` is nothing more than the initial value of this piece of state. You can initialize your state to start out as whatever you need. Any js data type can be used as an initial value.
4. The variable `color` is a getter: we can use it to get the current value of the state. It can be popped into our jsx just like any javascript variable, and we can do any normal js tricks on it. The only thing we should not do with `color` is change its value directly, ie `color = 'green'`. For this we have...
5. `setColor` is the second part of the return value from `useState`. It is always a function (no matter what datatype the state was initialized with!). We can invoke this function with a new value that we want to set the state to.

## Build This Thing Yourselves!
Delete your color-changer code from App.js and App.css, and replace it with this thing:
![counter animation](https://media.giphy.com/media/XkdutdNYhsp7pCVWIY/giphy.gif)

## Put our states all together!
You can have any number of pieces of state, creating each one with a separate invocation of `useState`. We're going to use this to combine our two little state gadgets into one interactive webpage! Note that at this point, all your code should be in App.js: we're going to talk about breaking it into components in the next section.
![combined gadget](https://media.giphy.com/media/jEfrYdLuaRIjjI7ekU/giphy.gif)

## Moving our state into separate components
Yesterday we learned about the advantages of making reusable components. Let's go on an adventure of using state inside our components:
1. Extract the `Counter` gadget into its own component file. The Counter contains its own knowledge of the `count` state, so move that invocation of `useState` into the component. Import the component in App.js and invoke it.
1. Create several instances of the Counter component, and inspect them in the react devtools. Note that they each have their own color state, completely independent of each other!
1. Extract and reduplicate the ColorChanger component in the same way.
1. What happens when we switch between the two sections, now that we've separated the state into two components? They both should reset to their initial values whenever we load them! That's because App.js is rendering a brand new Counter / ColorChanger every time, and the state gets re-initialized every time. If we want the state to persist across re-renders of the child components, we need to store the state in a component that doesn't get re-rendered and is permanently on the page. In this case, that would be our App.js. But if we do that, the state is contained in App.js, but how would we transmit that state into the Counter / ColorChanger? A fine topic for tomorrow.
