import { useQuery } from '@apollo/client';
import movieSearchQuery from 'queries/movies/movieSearchQuery';
import LoadingInProgress from './components/LoadingInProgress';
import MovieDataList from './components/MovieDataList';
import NoMatches from './components/NoMatches';
import WaitingOnInput from './components/WaitingOnInput';

const SearchMoviesList = ({ searchText } : { searchText: string }) => {
  console.log(searchText);
  const { loading, data } = useQuery(movieSearchQuery, {
    variables: {
      offset: 0,
      limit: 10,
    },
  });

  if (loading) return <LoadingInProgress />;
  if (!data.Movies) return <WaitingOnInput />;
  if (data.Movies.length === 0) return <NoMatches />;

  return (
    <MovieDataList data={data} />
  );
};

export default SearchMoviesList;
