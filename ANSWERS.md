1. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used to check what type of data is being passed into a component and keep it limited to certain data types. It is important to type-check the data so errors do not occur.

2. Describe a life-cycle event in React?

Life-cycle methods are special methods each component can have that allow us to hook into the views when specific conditions occur (for example when the component initially renders or when the component is updated with new data, etc).
There are two categories of life-cycle methods. When a component gets mounted to the DOM and un-mounted, & when a component receives new data.

3. Explain the details of a Higher Order Component?

A higher-order component is used to share common functionality between components without being repetitive. A HOC takes a component as an argument and returns a component. It transforms a component into another component and adds additional data or functionality.

4. What are three different ways to style components in React? Explain some of the benefits of each.

CSS, inline, styled components.

- CSS is the way it's been done for years. It's organized well and all options are available to you. It's quick and doesn't require any dependencies.
- Inline styling is a quick way to get styling on elements. This is good if you just have to style a certain component and do not need to reuse the styling.

- Styled components allow you to reuse styling you have created for specific components.
