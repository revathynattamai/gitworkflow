import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'

class Element extends Component{
  render(){
    return(
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>);
  }
}
    ReactDOM.render(
      <Element />,
      document.getElementById('root')
    );
  
  
