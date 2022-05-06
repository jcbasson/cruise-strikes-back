import { useQuery } from "@apollo/client";
import moviesWithTomQuery from "queries/movies/moviesWithTomQuery";
import LoadingInProgress from "./components/LoadingInProgress";
import MovieDataList from "./components/MovieDataList";
import NoMatches from "./components/NoMatches";
import WaitingOnInput from "./components/WaitingOnInput";

const AllTomCruiseMoviesList = () => {
  const { loading, data } = useQuery(moviesWithTomQuery, {
    variables: {
      filter: { actors_single: { name: "Tom Cruise" } },
    },
  });

  if (loading) return <LoadingInProgress />;
  if (!data.Movie) return <WaitingOnInput />;
  if (data.Movie.length === 0) return <NoMatches />;

  return <MovieDataList movies={data.Movie} />;
};

export default AllTomCruiseMoviesList;
