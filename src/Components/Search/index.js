import React, { Component } from "react";
import SearchLogo from "../Search/searchlogo.svg";
import "../Search/index.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  getInput = e => {
    console.log(e.target.value);
    this.setState({ input: e.target.value });
  };

  changeSearch = () => {
    this.props.searchHandler(this.state.input);
    console.log(this.state.input);
  };
  // debugger

  render() {
    return (
      <div className="topBar">
        <div className="logoWrapper">
          <div className="logo">
            <h1 className="logoName">Mustafa.</h1>
          </div>
        </div>
        <div className="searchBarWrapper">
          <div className="searchBar">
            <img src={SearchLogo} className="SearchLogo" alt="o" />
            <input
              type="text"
              value={this.state.input}
              onChange={this.getInput}
              id="searchInput"
              placeholder="Search What you like..."
            />
            <i className="fas fa-search search" onClick={this.changeSearch}></i>
          </div>
        </div>
        <div className="navigation">
          <div className="navigationWrapper">
            <div className="navNameWrapper">
              <a href="/#" className="navName">
                <i className="fas fa-home"> </i>Home
              </a>
            </div>

            <div className="navNameWrapper">
              <a href="#" className="navName">
                <i className="fas fa-cogs"> </i>Services
              </a>
            </div>

            <h1 className="navNameWrapper">
              <a href="#" className="navName">
                <i className="fas fa-hotel"> </i> About
              </a>
            </h1>
          </div>
          <i className="fas fa-bars navBar"></i>
        </div>
      </div>
    );
  }
}

export default SearchBar;
