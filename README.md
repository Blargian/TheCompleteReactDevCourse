# The Complete React Dev Course
Learn how to build and launch React web applications using React, Redux, Webpack, React-Router, and more!

## Section 2 - Setting up your environment

### What did I learn? 

- What JSX (JavaScript XML) is 
- Setting up Babel so we can work with JSX and React

## Section 3 - Hello React

### What did I learn? 

- Conditional rendering
- ES6 let and const vs var 
- Arrow functions 
- ES6 method syntax 
- Working with .map (returns a new array with some manipulation applied to each element through the return function)
- eventHandlers
- Arrays in JSX
- challenge: built a visibility toggle

## Section 4 - React Components

### What did I learn? 

- Component thinking in React (reusability)
- ES6 classes, constructors default arguments,
- Class inheritance and using super() in the constructor
- How to make a React class with extends React.Component
- Add a render () method to every component 
- Passing data using props
- Adding event handlers using props and handler functions
- using .bind() to set the this context to that of the object passed into .bind()
- A better way to do that is to call the constructor (props) { super (props); } within the class
- The setState method

## Section 5 - Stateless Functional Components

### What did I learn? 

- We can make functional stateless components which take in props and return JSX (no render method)
- Default prop values
- Using the React developer tools
- Short hand set state:
    - this.setState(() => ({options: []}))
- Lifecycle methods
    - componentDidMount
    - componentDidUpdate
    - componentWillUnmount

## Section 6 - Webpack

### What did I learn? 

- Webpack is an asset bundler 
- Setting up webpack
- Named and default exports
- Webpack loaders
- Configuring webpack with babel 
- Configuring Source mapping
- Transform class properties syntax and how to add it to webpack

## Section 7 - Using a third-party component

### What did I learn? 

- Children prop (props.children)
- Using third party components (eg React modal)

## Section 8 - Styling React

### What did I learn? 

- Setting up webpack to use SCSS
- scss partials and imports
- BEM naming convention
- The importance of resetting (eg - normalise.css)
- Styled the indecision app

## Section 9 - React Router

### What did I learn? 

- Server vs Client side routing 
- What is React Router + setup
- BrowserRouter, Switch, Link and NavLink components

## Section 10 - Redux

### What did I learn? 

- Short comings of built-in state management 
- Setting up Redux 
- Store and actions
- Subscribing to the store and dynamic actions
- How to destructure objects
- How to destructure arrays
- Reducers are pure functions that take a previousState, action and return a new state
- Using combineReducers() function and passing that to createStore()
- Using spread operators in reducers
- Setting up object spread with babel 
- Implementing actions, reducers and store + filtering on the expensify app

## Section 11 - React With Redux 

### What did I learn? 

- Set up Redux with the expensify app
- Higher order components and why we might want to use them 
- Installing react-redux and using the Provider component
- Using the connect component 
- Implemented expensify app in redux 

## Section 12 - Testing Your Application

### What did I learn? 

- How to install and setup Jest 
- Jest globals like test() and expect() and how to write basic tests
- expect.any() for testing things like uuid [just checking by type]
- Wrote tests for actions, selectors and reducers
- fixtures are dummy data/test data
- Snapshot testing with react-test-renderer
- Enzyme and using snapshot 
- Wrote snapshot tests for the expensify app components
- Creating mock libraries
- Enzyme simulate to simulate events
    - wrapper.simulate
    - wrapper.state
- Test spies (mocked functions)
    - create a spy with jest.fn();
    - expect(mySpy).toHaveBeenCalled();
- MapDispatchToProps in redux for easier dispatch testing 
- beforeEachMethod in Jest

This section was a little tough. I can really see the value of testing though, especially as an app gets bigger and the state gets more complex. This was a good introduction to testing with Jest. 

## Section 13 - Deploying Apps

### What did I learn? 

- How to setup SSH with Git
    - To check: ls -a ~/..ssh in gitbash 
    - ssh-keygen -t rsa -b 4096 -C "email address here"
    - follow the steps to set it up
    - eval "$(ssh-agent -s)" to check if agent is running or to launch if not
    - ssh-add ~/.ssh/id_rsa 
    - For windows run "clip < ~/.ssh/id_rsa.pub" to copy to the clipboard
    - Add it on github profile
    - To check it run "ssh -T git@github.com"
- Setting up Webpack for production 
    - setup production vs dev 
    - dev tool type changes depending on prod or dev
        - generates a separate source map 'bundle.map.js'
- Creating separate CSS files (breaking them out from the bundle.js file)
    - extract text webpack plugin (deprecated)
- Setting up a production express server
- Getting set up with Heroku
    - Install Heroku
    - Use Heroku create (gives you a url and git url)
    - Setup server to dynamically use port 
    - Setup webpack with Heroku 
    - Heroku-postbuild in package.json
- dev dependencies vs production 

From here I am going to setup a new repository specifically for the expensify-app for 
setting up with Heroku. Currently I can't deploy on Heroku because the expensify-app is
a folder within this Git repository. 