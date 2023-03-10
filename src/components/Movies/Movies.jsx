import './Movies.css';

import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';

function Movies({ movies }) {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList movies={movies} />
    </main>
  )
}

export default Movies;