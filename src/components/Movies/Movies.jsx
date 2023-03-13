import './Movies.css';

import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';

function Movies({ moviesList }) {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList moviesList={moviesList} />
    </main>
  )
}

export default Movies;