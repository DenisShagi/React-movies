import { Component } from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/Search";
import { Preloader } from "../components/Preloader";

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?s=matrix&apikey=68565c82`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }
  searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?s=${str}&apikey=68565c82`)
    .then((response) => response.json())
    .then((data) => this.setState({ movies: data.Search, loading: false }));
  }
  render() {
    const { movies } = this.state;
    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies}/>
        {movies.length ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}
export { Main };
