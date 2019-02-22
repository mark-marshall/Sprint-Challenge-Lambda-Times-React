1. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used to safeguard against problems that could be introduced into our programmes by way of passing incorrect prop types to our components. In such a situation, we receive the error in the console first, prior to other errors, with detailed instructions on which prop has failed. It's important to type check our data in JS especially owing to it being dynamically-typed.

2. Describe a life-cycle event in React?

A life-cycle event in React refers to any one of the 3 moments that exist in the lifecycle of a component; mounting/birth, updating/growth, and demounting/death. React JS provides us with a number of life-cycle hooks to target each of these instances and acheive desired behaviour within our applications.

3. Explain the details of a Higher Order Component?

A Higher Order Component takes in a components, or a number of components, and returns a component. In React, the 2 typically patterns are to enrich components with new props (including functions) or to conditionally render components based on logic and state found within the HOC.

4.  What are three different ways to style components in React? Explain some of the benefits of each.

1) Using CSS/LESS/SASS files that are imported as needed into each component. These give us the full-power of familiar pre-processors that are widely used across all projects and can be easily shared across parts of a project in a team with the widely-used syntax.
2) Inline styles. These allow us to make use of JS goodies like objects to easily organise our code.
3) Styled-components/other libraries. These allow us to build data-driven styles off of state, and add all necessary browser prefixes to our styles automatially.