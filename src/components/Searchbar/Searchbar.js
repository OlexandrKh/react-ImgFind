import React, { Component } from "react";

export default class Searchbar extends Component {
  state = {
    searchStr: "",
  };

  handleOnChange = (e) => {
    const searchStr = e.target.value;
    this.setState({ searchStr });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const searchStr = this.state.searchStr.trim();

    if (searchStr === "") return;
    this.props.onSubmit(searchStr);
    // this.setState({ searchStr: "" });
  };
  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>
            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleOnChange}
              value={this.state.searchStr}
            />
          </form>
        </header>
      </>
    );
  }
}
