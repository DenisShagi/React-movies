import { Component } from "react";
import { Movies } from "../components/Movies";

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?s=matrix&apikey=68565c82")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  render() {
    const { movies } = this.state;
    return (
      <main className="container content">
        {movies.length ? (
          <Movies movies={movies} />
        ) : (
          <h3>Loading...</h3>
        )}
      </main>
    );
  }
}
export { Main };
