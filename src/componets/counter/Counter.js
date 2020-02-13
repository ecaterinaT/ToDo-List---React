import React from 'react';

class Counter extends React.Component {

    constructor() {
      super();
      this.state = {
        counter: 0
      };
      this.dec = this.dec.bind(this);
    }
    inc = () => {
      debugger;
      this.setState(
        {
          counter: this.state.counter +1
        }
      );
    }

    dec() {
      this.setState(
        {
          counter: this.state.counter -1
        }
      );
    }
    
    render() {
      return (
      <div>
        <button 
        onClick={this.dec}
        >-</button>

        <input type="text" value={this.state.counter} ></input>

        <button  onClick={this.inc}>+</button>
      </div>);
    }
  }

export default Counter;  