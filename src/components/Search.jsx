import { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search);
    }
  };
  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            className="validate"
            placeholder="search"
            type="search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            onClick={() => this.props.searchMovies(this.state.search)}
            className="btn search-btn"
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export { Search };
