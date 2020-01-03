import React, { Component } from "react";
import "../../Components/Sort/srot.css";

class SortBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sortLowChange = () => {
    this.props.shortLowHandler(this.state.shortMenu);
  };

  sortHighChange = () => {
    this.props.sortHighHandler(this.state.shortMenu);
  };

  sortByRetting =()=>{
    this.props.sortRettingHandler(this.state.shortMenu)
  }

  render() {
    const { sortLowChange, sortHighChange,sortByRetting } = this;
    return (
      <div className="sortNavigationContainer">
        <div className="sortNavigationWrapper">
          <div className="sortWrapper">
            <ul onClick={sortLowChange}> Price: Low to High </ul>
            <ul onClick={sortHighChange}> Price: High to Low </ul>
            <ul onClick={sortByRetting}> Retting </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SortBar;
