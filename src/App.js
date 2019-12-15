import React, { Component } from "react";
// import logo from "./logo.svg";
import Cart from "./Components/MenuConteiner/Cart";
import "./style/Style.css";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0
    };
    this.incrementAge = this.incrementAge.bind(this);
  }
  // incrementAge = (increment = true) => {
  //   if (this.state.age === 0) {
  //     this.setState({
  //       age: increment ? this.state.age : this.state.age + 1
  //     });
  //     console.log(this.state.age);
  //   }
  //   if (this.state.age !== 0) {
  //     this.setState({
  //       age: increment ? this.state.age : this.state.age + 1
  //     });
  //   }
  // };
  incrementAge() {
    if (this.state.age < 10)
      this.setState({
        age: this.state.age + 1
      });
  }

  decrementAge() {
    if (this.state.age > 0) {
      this.setState({
        age: this.state.age - 1
      });
    }
  }

  render() {
    return (
      <div>
        {/* <div className="main-div">
          <button className="btn" onClick={() => this.decrementAge()}>
            -
          </button>
          <label className="label"> onClick : {this.state.age}</label>
          <button className="btn" onClick={() => this.incrementAge()}>
            +
          </button>
        </div> */}

        <Cart></Cart>
      </div>
    );
  }
}

export default Person;
