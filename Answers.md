1. What problem does the context API help solve?

The Context API helps solve the problem of "prop-drilling", which means passing down a piece of information from an ancestor component to a distant descendent component through props. This involves passing down the information as props through components that don't themselves need it themselves. With context, we can simply surround the ancestor component in context provider tags, and assign an object with the information to a values attribute on it. Then the decendent component can access this using useContext.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

In redux, actions provide the reducers with instructions for the type of change to state that the app wants to make and information that it will need in order to update state properly in the form of a payload. Reducers serve the purpose of setting the new state using the information provided in the actions. Lastly, the store is what contains the state of the application. The store is then made accessible to all components in the app by the Provider.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application level state can be accessed by any component in the application, while component level state can only be accessed by the component to which it belongs and be passed down to that component's children. A good time to use component level state would be to contain and update the values of a form. A good situation to use application level state would be to contain data, perhaps received from an api that will be used throughout the application.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk allows us to make asyncronous operations inside of our action creatores before we dispatch our action to a reducer. It changes our action by adding '=> dispatch' between our action creator's arguments and its arrow. This allows the action to use dispatch to send the action to the reducer after all our async activities have completed rather than simply return our action right away as usual.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system is Redux because it makes our application behavior super predictable by allowing state to be updated in only a certain set of predefined ways. The drawback is that there is more typing and complexity involved with Redux, but in my judgment its benefits are greater than its drawbacks.
