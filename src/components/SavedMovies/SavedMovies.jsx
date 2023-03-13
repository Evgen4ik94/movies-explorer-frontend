import './Movies.css';

import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';

function Movies({ moviesList }) {

  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList moviesList={moviesList} />
    </main>
  )
}


export default Movies;