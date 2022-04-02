import React, { Component } from "react";
import SearchBar from "../../Components/Search";
import SortBar from "../../Components/Sort/SortBar";
import MenuContainer from "../../Containers/MenuContainer";
import pasta from "../../images/pasta.jpg";

const renderMenuData = [
  {
    id: 1,
    name: "Pizza",
    price: 55,
    ratting: 3.5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit",
    imageUrl:
      "https://images.jdmagicbox.com/comp/def_content/pizza_outlets/default-pizza-outlets-3.jpg?clr="
  },
  {
    id: 2,
    price: 100,
    name: "pasta",
    ratting: 2.3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit",
    imageUrl: pasta
  },
  {
    id: 3,
    name: "waffle",
    price: 55,
    ratting: 3.2,
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
    ratting: 3.8,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit",
    imageUrl:
      "https://images.jdmagicbox.com/comp/def_content/pizza_outlets/default-pizza-outlets-3.jpg?clr="
  },
  {
    id: 6,
    price: 100,
    name: "pasta",
    ratting: 4.1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit",
    imageUrl: pasta
  },
  {
    id: 7,
    name: "waffle",
    price: 55,
    ratting: 4.5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit",
    imageUrl:
      "https://i.pinimg.com/originals/66/84/6f/66846fdd6bbdaeab59e0091171736864.jpg"
  },
  {
    id: 8,
    price: 120,
    name: "egg omelet",
    ratting: 4.2,
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
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuData: renderMenuData
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.shortLowHandler = this.shortLowHandler.bind(this);
    this.sortHighHandler = this.sortHighHandler.bind(this);
    this.sortRettingHandler = this.sortRettingHandler.bind(this);
  }

  searchHandler = searchData => {
    this.setState({
      ...this.state,
      searchData
    });
    const filterMenu = renderMenuData.filter(menu =>
      menu.name.toLocaleLowerCase().includes(searchData)
    );
    this.setState({
      ...this.state,
      menuData: filterMenu
    });
  };

  shortLowHandler = shortLowData => {
    this.setState({
      ...this.state,
      shortLowData
    });
    const shortedLowData = this.state.menuData.sort((a, b) => {
      return a.price - b.price;
    });
    this.setState({
      ...this.state,
      menuData: shortedLowData
    });
  };

  sortHighHandler = shortHighData => {
    this.setState({
      ...this.state,
      shortHighData
    });
    const shortedHighData = this.state.menuData.sort((a, b) => {
      return b.price - a.price;
    });
    this.setState({
      ...this.state
    });
  };
  vf

  sortRettingHandler = shortRettingData => {
    this.setState({
      ...this.state,
      shortRettingData
    });
    const shortedRettingData = this.state.menuData.sort((a, b) => {
      return b.ratting - a.ratting;
    });
    console.log(shortedRettingData);

    this.setState({
      ...this.state
    });
  };
  render() {
    const {
      state = {},
      searchHandler,
      shortLowHandler,
      sortHighHandler,
      sortRettingHandler
    } = this;
    const { menuData = [] } = state;

    return (
      <div>
        <SearchBar searchHandler={searchHandler} />
        <SortBar
          shortLowHandler={shortLowHandler}
          sortHighHandler={sortHighHandler}
          sortRettingHandler={sortRettingHandler}
        ></SortBar>
        <MenuContainer menuData={menuData}></MenuContainer>
      </div>
    );
  }
}

export default Main;
