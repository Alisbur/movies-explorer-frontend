import './SavedMovies.css'
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { searchMovies, SHORT } from "../../utils/fncLib";

function SavedMovies(props) {

  //Состояние чекбокса короткометражек
  const [filterCheckboxState, setFilterCheckboxState] = React.useState(false);

  //Состояние поля ввода запроса
  const [searchQuerry, setSearchQuerry] = React.useState('');

  //Состояние поля ввода запроса
  const [searchResult, setSearchResult] = React.useState([]);

  //Идёт ли загрузка
  const [isLoading, setIsLoading] = React.useState(false);

  //производит установку чекбокса в состояние state
   function handleFilterCheckboxSwitch(newState) {
    setFilterCheckboxState(newState);
  }

  //При изменении одной из зависимостей происходит обновление результатов поиска
  React.useEffect (()=>{
    const result = searchMovies(props.savedMovies, searchQuerry);
    setSearchResult(
      filterCheckboxState
      ? result.filter(el=>el.duration < SHORT)
      : result);
    setIsLoading(false);
  },[searchQuerry, props.savedMovies, filterCheckboxState])

//Обработчик поиска в форме
  function handleSearchClick(queryString) {
    setIsLoading(true);
    setSearchQuerry(queryString);
  }

  return (
    <main className="main">
      <SearchForm 
        handleSearch={ handleSearchClick }
        checkboxState={ filterCheckboxState }
        handleCheckboxSwitch={ handleFilterCheckboxSwitch }
        queryVal={ searchQuerry }
      />
      <div className="savedmovies">
        {isLoading
        ? <Preloader />
        : searchResult.length === 0
          ? (searchQuerry || filterCheckboxState) && <h2 className="savedmovies__nothingFound">Ничего не найдено</h2>
          : <MoviesCardList 
            drawSaved={ true } 
            films={ searchResult }
            handleDeleteClick={ props.handleDeleteClick }
            />
        }
      </div>
    </main>
  );
}

export default SavedMovies;
