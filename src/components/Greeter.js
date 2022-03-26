import React from 'react';
console.log("react is", React)
// JS class is an object factory; it is not the factory but it is the layout method 
//if you are extending a class then you are reacting with a class 
//cash curleys on tline 9 tell you some JS will be added 
class Greeter extends React.Component{
render(){
    
    return (
        <>
        <h2> Hello Again,{this.props.name}!</h2>
        <p> I am {this.props.age}!</p>
        </>
    )
    // this refers to the Greeter function 
    
}
}

export default Greeter ; 