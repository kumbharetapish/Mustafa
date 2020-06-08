import React, { Component } from "react";
// import logo from "./logo.svg";
import "./style/Style.css";
import Main from "./Components/Main";

class Person extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       // age: 0,
  //       menuData: renderMenuData
  //     };
  //     this.searchHandler = this.searchHandler.bind(this);
  //     this.shortLowHandler = this.shortLowHandler.bind(this);
  //     this.sortHighHandler = this.sortHighHandler.bind(this);
  //   }
  //   // incrementAge = (increment = true) => {
  //   //   if (this.state.age === 0) {
  //   //     this.setState({
  //   //       age: increment ? this.state.age : this.state.age + 1
  //   //     });
  //   //     console.log(this.state.age);
  //   //   }
  //   //   if (this.state.age !== 0) {
  //   //     this.setState({
  //   //       age: increment ? this.state.age : this.state.age + 1
  //   //     });
  //   //   }
  //   // };
  //   // incrementAge() {
  //   //   if (this.state.age < 10)
  //   //     this.setState({
  //   //       age: this.state.age + 1
  //   //     });
  //   // }

  //   // decrementAge() {
  //   //   if (this.state.age > 0) {
  //   //     this.setState({
  //   //       age: this.state.age - 1
  //   //     });
  //   //   }
  //   // }

  //   searchHandler = data => {
  //     this.setState({
  //       ...this.state,
  //       searchData: data
  //     });
  //     console.log(this.state.menuData);

  //     const filterMenu = renderMenuData.filter(menu => menu.name.includes(data));
  //     console.log(filterMenu);

  //     this.setState({
  //       ...this.state,
  //       menuData: filterMenu,
  //        menuData: shortedHighData
  //     });

  //     // debugger;
  //   };

  //   shortLowHandler = data => {
  //     this.setState({
  //       ...this.state,
  //       shortData: data
  //     });
  //     const shortedLowData = this.state.menuData.sort((a, b) => {
  //       return a.price - b.price;
  //     });
  //     console.log(shortedLowData);

  //     this.setState({
  //       ...this.state,
  //       menuData: shortedLowData
  //     });
  //     // debugger;
  //   };

  //   sortHighHandler = data => {
  //     this.setState({
  //       ...this.state,
  //       shortData: data
  //     });
  //     const shortedHighData = this.state.menuData.sort((a, b) => {
  //       return b.price - a.price;
  //     });
  //     console.log(shortedHighData);

  //     this.setState({
  //       ...this.state,

  //     });
  //     // debugger;
  //   };
  render() {
    return (
      <div>
        <Main />
        {/* <div className="main-div">
          <button className="btn" onClick={() => this.decrementAge()}>
            -
          </button>
          <label className="label"> onClick : {this.state.age}</label>
          <button className="btn" onClick={() => this.incrementAge()}>
            +
          </button>
        </div> */}
      </div>
    );
  }
}

export default Person;
