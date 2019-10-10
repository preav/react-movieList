import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import Sort from "../utils/sort";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: {},
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    const genres = [{ name: "All Genres", _id: "" }, ...getGenres()];
    this.setState({ movies: getMovies() });
    this.setState({ genres });
  }

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = this.state.movies.indexOf(movie);
    const updatedLike = { ...this.state.movies[index] };
    updatedLike.liked = !updatedLike.liked;
    movies[index] = updatedLike;
    this.setState({ movies });
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(
      singleMovie => singleMovie !== movie
    );
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = listItem => {
    this.setState({ selectedGenre: listItem, currentPage: 1 });
  };

  handleSort = path => {
    this.setState({ sortColumn: { path, order: "desc" } });
  };

  render() {
    const {
      movies,
      pageSize,
      currentPage,
      genres,
      selectedGenre,
      sortColumn
    } = this.state;
    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? movies.filter(f => f.genre._id === selectedGenre._id)
        : movies;
    const sorted = Sort(filteredMovies, sortColumn);
    const paginatedMovies = paginate(sorted, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            genres={genres}
            selectedGenre={selectedGenre}
            onGenreSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          {filteredMovies.length === 0 ? (
            <p className="m-2">No movies found</p>
          ) : (
            <p className="m-2">
              Currently {this.state.movies.length} movies are present
            </p>
          )}
          <MoviesTable
            paginatedMovies={paginatedMovies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={filteredMovies.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
