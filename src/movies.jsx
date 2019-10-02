import React, { Component, Fragment } from "react";
import { getMovies } from "./services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(
      singleMovie => singleMovie !== movie
    );
    this.setState({ movies });
  };

  getHeader() {
    const header =
      this.state.movies.length === 0 ? (
        <p className="m-2">No movies found</p>
      ) : (
        <p className="m-2">
          Currently {this.state.movies.length} movies are present
        </p>
      );
    return header;
  }
  render() {
    const { movies } = this.state;
    return (
      <Fragment>
        {this.getHeader()}
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default Movies;