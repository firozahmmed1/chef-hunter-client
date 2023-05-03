import React from 'react';

const Blog = () => {
    return (
        <div className='lg:container'>
            <div className='lg:mx-auto lg:ml-8 lg:mt-8'>
                <h1 className='font-semibold'>1.Tell us the differences between uncontrolled and controlled components?</h1>
                <p>
                In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.
                </p>
                <h1 className='font-semibold mt-4'>2.How to validate React props using PropTypes?</h1>
                <p>
                Props and PropTypes are important mechanisms for passing read-only attributes between React components.
                We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.
                Since JavaScript doesn’t have a built-in type checking solution, many developers use extensions like TypeScript and Flow. However, React has an internal mechanism for props validation called PropTypes
                </p>
                <h1 className='font-semibold mt-4'>3.Tell us the difference between nodejs and express js.?</h1>
                <p>
                NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.
                </p>
                <h1 className='font-semibold mt-4'>4.What is a custom hook, and why will you create a custom hook?</h1>
                <p>
                Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.
                </p>
            </div>
        </div>
    );
};

export default Blog;