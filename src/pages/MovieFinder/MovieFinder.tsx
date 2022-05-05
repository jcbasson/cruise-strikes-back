import AllTomCruiseMoviesList from 'components/MovieList/AllTomCruiseMoviesList';
import SearchMoviesList from "components/MovieList/SearchMoviesList";
import SearchInput from 'components/SearchInputs/SearchInput';
import { useState } from 'react';
import { SearchParams } from 'types/searching/searchParams';

const MovieFinder = () => {
  const [search, setSearch] = useState<SearchParams>({
    text: undefined,
    type: undefined,
  });


  return (
    <>
      <SearchInput onSearch={(searchParams: SearchParams) => setSearch(searchParams)} />
      {search.type === 'allMovies' && search.text !== undefined && <SearchMoviesList searchText={search.text}  />}
      {search.type === 'tomMovies' && search.text === undefined && <AllTomCruiseMoviesList />}
    </>
  );
}

export default MovieFinder;