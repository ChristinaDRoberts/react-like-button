import React, { Component } from 'react';

import './App.css';


// MUST ALWAYS EXTEND FROM COMPONENT
class App extends Component {
    // ALWAYS HAS TO HAVE PROPS WHICH IS SHORT FOR PROPERTIES
    constructor(props) {
      // GETS THE PROPERTIES THAT ARE IN COMPONENT WITH SUPER
    	super(props);
    	// SETS THE STATE AS CLICKS = 0 TO BEGIN WITH
    	this.state = {clicks: 0}
    }

    // METHOD LIKES
    Likes() {
      // TAKE THE CURRENT STATE OR NUMBER OF CLICKS, FAT ARROW ACTS AS ANONYMOUS FUNCTION
      // THAT GIVES THE DIRECTIONS TO ADD 1 TO THE PREVIOUS STATE AND MAKE IT THE NEW NUMBER OF CLICKS
      //http://www.react.express/fat_arrow_functions
    	this.setState((prevState) => ({
      	   clicks: prevState.clicks + 1
        }));
    }

    // RENDER METHOD
    render() {
      // RETURN IS REQUIRED IN EVERY CLASS AND LETS US INJECT HTML STYLE CODE INTO OUR JSX
    	return (
    	    // CREATED A DIV TAG TO HOLD MY BUTTON
    	    <div>
              {/*event handler built into button, binds it, gets current state of # of clicks, adds "likes" in text*/}
              {/*unsure of the syntax of bimnding and why it has  to be this way*/}
              <button onClick={this.Likes.bind(this)}>{this.state.clicks} Likes </button>
            </div>
        )

    }

}
//must export App everytime
export default App;


// see https://medium.com/@aghh1504/2-increment-and-decrease-number-onclick-react-5767b765103c
//see https://codepen.io/html5andblog/pen/ENPWme
//see https://gist.github.com/castaneai/9ce7815aba7f1024038d