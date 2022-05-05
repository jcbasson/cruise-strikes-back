import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Button } from "@chakra-ui/button";
import movieSearchQuery from "queries/movies/movieSearchQuery";
import LoadingInProgress from "./components/LoadingInProgress";
import MovieDataList from "./components/MovieDataList";
import NoMatches from "./components/NoMatches";
import WaitingOnInput from "./components/WaitingOnInput";

const SearchMoviesList = ({ searchText }: { searchText: string }) => {
  const [first, setFirst] = useState(10);
  const { loading, data } = useQuery(movieSearchQuery, {
    variables: {
      first,
      filter: { title_contains: searchText },
    },
  });

  if (loading) return <LoadingInProgress />;
  if (!data.Movie) return <WaitingOnInput />;
  if (data.Movie.length === 0) return <NoMatches />;

  return (
    <>
      <MovieDataList movies={data.Movie} />
      <Button
        color="blue"
        variant="link"
        onClick={() => setFirst((prevFirst) => prevFirst + prevFirst)}
      >
        Load More ...
      </Button>
    </>
  );
};

export default SearchMoviesList;
