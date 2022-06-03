import React from "react";

class SearchField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }

    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this)

  }

  onSearchChangeHandler(e) {
    this.props.onSearch(e.target.value)
    this.setState((prevState) => {
      return {
        ...prevState,
        search: e.target.value
      }
    })
  }

  render() {
    return (
      <div className="search-field">
        <input className="search-field__input" type='text' placeholder="Search Notes . . ." onChange={this.onSearchChangeHandler} />
      </div>
    )
  }
}

export default SearchField;