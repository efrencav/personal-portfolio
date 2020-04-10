import React from 'react'

// Functional Components
// When to use: 
// 1. for smaller components
// 2. for resuable components
// 3. presentional components, partially right, we can use Hoooks and specify state

// RESUABLE COMPONENTS

const About = () => {
    const message = 'Hello World'
    return (
        <h1>Hello About Page - {message}</h1>
    )
}

// const About = () => {
//     const message = 'Hello World'
//     return React.createElement('div', null, ' I am generating this with createElement')
// }

// CLASS COMPONENTS

// class About extends React.Component {
//     render() {
//         return (
//             <h1>Hello, I am class component!</h1>
//         )
//     }
// }

export default About