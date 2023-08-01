import "./Movies.css"
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { movieDataFormatConverter, searchMovies, updateSavedMovies, SHORT } from "../../utils/fncLib";
import moviesApi from '../../utils/MoviesApi';

function Movies(props) {

  //Состояние чекбокса короткометражек
  const [filterCheckboxState, setFilterCheckboxState] = React.useState(()=>{
    const search = localStorage.getItem('search');
    return search
    ? JSON.parse(search).chkbx
    : false
  });
  //Состояние поля ввода запроса
  const [searchQuerry, setSearchQuerry] = React.useState(()=>{
    const search = localStorage.getItem('search');
    return search
    ? JSON.parse(search).query
    : '';
  });
  //Состояние поля ввода запроса
  const [searchResult, setSearchResult] = React.useState(()=>{
    const search = localStorage.getItem('search');
    return search
    ? JSON.parse(search).result
    : []
  });
  //Настройки предыдущего поиска
  const [lastSearch, setLastSearch] = React.useState(()=>{
    const search = localStorage.getItem('search');
    return search
    ? JSON.parse(search)
    : {query:'', chkbx:false, result: []};
  });
  //Список фильмов
  const [moviesData, setMoviesData] = React.useState(()=>{
    const movies = localStorage.getItem('movies');
    return movies
    ? JSON.parse(movies)
    : [];
  });    
  //Идёт ли загрузка
  const [isLoading, setIsLoading] = React.useState(false);
  //Стейт для активации эффекта с поиском
  const [isSearching, setIsSearching] = React.useState(false);
  const [isQueryStringEmpty, setIsQueryStringEmpty] = React.useState(true);

//При изменении параметров последнего поиска после получения результата поиска они сохраняются в localstorage
  React.useEffect (()=>{
    console.log(lastSearch);
    console.log(searchResult);
    console.log(moviesData);
    console.log(props.savedMovies);
    localStorage.setItem('search', JSON.stringify(lastSearch));
  },[lastSearch])

//При изменении результатов поиска обновляются параметры последнего поиска
  React.useEffect (()=>{
    setLastSearch({ query:searchQuerry, chkbx:filterCheckboxState, result:searchResult });
    console.log('SEARCH RES');
    console.log(searchResult);
  },[searchResult])

//Первый поиск: получаем фильмы -> преобразуем формат -> сохраняем массив в localstorage 
//-> сохраняем список в стейте -> вызываем функцию поиска и результат заносим в стейт с результатами
  function handleFirstSearch() {
    setIsLoading(true);
    moviesApi.getInitialMovies()
      .then((data)=>{
        const convertedArray = data.map(el=>movieDataFormatConverter(el))
        localStorage.setItem('movies', JSON.stringify(convertedArray));
        setMoviesData(convertedArray);
        handleSearch(convertedArray);
      })
      .finally(()=>setIsLoading(false))
  }

//Второй и последующие поиски
  function handleSearch(moviesArray) {
    const result = searchMovies(moviesArray, searchQuerry);
    setSearchResult(updateSavedMovies(result, props.savedMovies));
  }
  
  //производит установку чекбокса в состояние state
   function handleFilterCheckboxSwitch(newState) {
    setFilterCheckboxState(newState);
    setLastSearch({...lastSearch, 'chkbx': newState});
  }

  React.useEffect(function() {
    console.log('update');
    setSearchResult(updateSavedMovies(searchResult, props.savedMovies));
  }, [props.savedMovies])

  React.useEffect(function() {
    if(isSearching) {
      const search = localStorage.getItem('search')
      const movies = localStorage.getItem('movies')
      search && movies 
      ? handleSearch(moviesData)
      : handleFirstSearch();
    }
    setIsSearching(false);
  }, [isSearching])

  function handleSearchClick(queryString) {
    if(queryString) {
      setIsQueryStringEmpty(false);
      setIsSearching(true);
      setSearchQuerry(queryString);
    } else {
      props.showInfoTooltip('Нужно ввести ключевое слово', false) ;
    }
  }

  return (
    <main className="main">
      <SearchForm 
        handleSearch={ handleSearchClick }
        checkboxState={ filterCheckboxState }
        handleCheckboxSwitch={ handleFilterCheckboxSwitch }
        queryVal={ searchQuerry }
      />
      <div className="movies">
        {isLoading
        ? <Preloader />
        : searchResult.length === 0
          ? moviesData.length && <h2 className="movies__nothingFound">Ничего не найдено</h2>
          : <MoviesCardList 
            drawSaved={false} 
            films={
              filterCheckboxState
              ? searchResult.filter(el=>el.duration < SHORT)
              : searchResult
            }
            handleLikeClick={ props.handleLikeClick }
            />
        }
      </div>
    </main>
  );
}

export default Movies;