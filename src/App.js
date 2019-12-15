import React, { Component } from "react";
// import logo from "./logo.svg";
import Cart from "./Components/MenuConteiner/Cart";
import SearchBar from "./Components/Search";
import SortBar from "./Components/Sort/SortBar";
import pasta from "./images/pasta.jpg";
import "./style/Style.css";

const renderMenuData = [
  {
    id: 1,
    name: "Pizza",
    price: 55,
    ratting: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit",
    imageUrl:
      "https://images.jdmagicbox.com/comp/def_content/pizza_outlets/default-pizza-outlets-3.jpg?clr="
  },
  {
    id: 2,
    price: 100,
    name: "pasta",
    ratting: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit",
    imageUrl: pasta
  },
  {
    id: 3,
    name: "waffle",
    price: 55,
    ratting: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit",
    imageUrl:
      "https://i.pinimg.com/originals/66/84/6f/66846fdd6bbdaeab59e0091171736864.jpg"
  },
  {
    id: 4,
    price: 120,
    name: "egg omelet",
    ratting: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit",
    imageUrl:
      "https://img.sndimg.com/food/image/upload/w_614,h_461/v1/img/recipes/14/09/36/uWQCgQPS16ar9pFQvu0g_DSC_0613.jpg"
  },
  {
    id: 5,
    name: "Pizza",
    price: 55,
    ratting: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit",
    imageUrl:
      "https://images.jdmagicbox.com/comp/def_content/pizza_outlets/default-pizza-outlets-3.jpg?clr="
  },
  {
    id: 6,
    price: 100,
    name: "pasta",
    ratting: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit",
    imageUrl: pasta
  },
  {
    id: 7,
    name: "waffle",
    price: 55,
    ratting: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit",
    imageUrl:
      "https://i.pinimg.com/originals/66/84/6f/66846fdd6bbdaeab59e0091171736864.jpg"
  },
  {
    id: 8,
    price: 120,
    name: "egg omelet",
    ratting: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit",
    imageUrl:
      "https://img.sndimg.com/food/image/upload/w_614,h_461/v1/img/recipes/14/09/36/uWQCgQPS16ar9pFQvu0g_DSC_0613.jpg"
  },
  {
    id: 9,
    name: "Pizza",
    price: 55,
    ratting: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit",
    imageUrl:
      "https://images.jdmagicbox.com/comp/def_content/pizza_outlets/default-pizza-outlets-3.jpg?clr="
  }
];
class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // age: 0,
      menuData: renderMenuData
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.shortLowHandler = this.shortLowHandler.bind(this);
    this.sortHighHandler = this.sortHighHandler.bind(this);
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
  // incrementAge() {
  //   if (this.state.age < 10)
  //     this.setState({
  //       age: this.state.age + 1
  //     });
  // }

  // decrementAge() {
  //   if (this.state.age > 0) {
  //     this.setState({
  //       age: this.state.age - 1
  //     });
  //   }
  // }

  searchHandler = data => {
    this.setState({
      ...this.state,
      searchData: data
    });
    console.log(this.state.menuData);

    const filterMenu = renderMenuData.filter(menu => menu.name.includes(data));
    console.log(filterMenu);

    this.setState({
      ...this.state,
      menuData: filterMenu
    });

    // debugger;
  };

  shortLowHandler = data => {
    this.setState({
      ...this.state,
      shortData: data
    });
    const shortedLowData = this.state.menuData.sort((a, b) => {
      return a.price - b.price;
    });
    console.log(shortedLowData);

    this.setState({
      ...this.state,
      menuData: shortedLowData
    });
    // debugger;
  };

  sortHighHandler = data => {
    this.setState({
      ...this.state,
      shortData: data
    });
    const shortedHighData = this.state.menuData.sort((a, b) => {
      return b.price - a.price;
    });
    console.log(shortedHighData);

    this.setState({
      ...this.state,
      menuData: shortedHighData
    });
    // debugger;
  };
  render() {
    return (
      <div>
        <SearchBar searchHandler={this.searchHandler} />
        <SortBar
          shortLowHandler={this.shortLowHandler}
          sortHighHandler={this.sortHighHandler}
        ></SortBar>

        <Cart menuData={this.state.menuData}></Cart>

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
