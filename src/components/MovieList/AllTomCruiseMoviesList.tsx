
import { useQuery } from '@apollo/client';
import moviesWithTomQuery from 'queries/movies/moviesWithTomQuery';
import LoadingInProgress from './components/LoadingInProgress';
import MovieDataList from './components/MovieDataList';
import NoMatches from './components/NoMatches';
import WaitingOnInput from './components/WaitingOnInput';

const AllTomCruiseMoviesList = () => {
  const { loading, data } = useQuery(moviesWithTomQuery, {
    variables: {
      offset: 0,
      limit: 10,
    },
  });

  if (loading) return <LoadingInProgress />;
  if (!data.Movies) return <WaitingOnInput />;
  if (data.Movies.length === 0) return <NoMatches />;

  // https://www.apollographql.com/docs/react/pagination/offset-based#using-with-fetchmore
  return (
    <>
    <MovieDataList {...data} />
    <>Load More ...</>
    </>
  );
};

export default AllTomCruiseMoviesList;