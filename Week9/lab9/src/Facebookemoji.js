import './App.css'
import React from 'react'
import like7 from './like.png'; 
import Love from './Love.png'; 
import happy from './happy.png';

class FacebookEmojiCounter extends React.Component // initiates the components properties 
{ 
 constructor(props) //Props are like function arguments, and you send them into the component as attributes.
{ 
 super(props); // allowing the component to access the props passed to it by its parent component, and also access this.
 this.state = {number : 0};
 this.increment = this.increment.bind(this);
 this.pic=null
 if (this.props.type==="Love") 
 this.pic=Love
 else if (this.props.type==="like") 
 this.pic=like7
 else if (this.props.type==="happy") 
 this.pic=happy
 }


increment() { 
 this.setState((prevState)=>{
    return {number : prevState.number+1} 
 })
 }

 render() { 
 return ( 
 <div>
 <h5>It is {this.state.number}{this.props.type}.</h5>
 <button onClick={this.increment}> 
 <img src={this.pic} alt=" "/>
 <b>{this.state.number} </b>
 </button> 
 </div>
 );
 } 
}

export default FacebookEmojiCounter;
