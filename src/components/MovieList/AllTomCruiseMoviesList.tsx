import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Button } from "@chakra-ui/button";
import moviesWithTomQuery from "queries/movies/moviesWithTomQuery";
import LoadingInProgress from "./components/LoadingInProgress";
import MovieDataList from "./components/MovieDataList";
import NoMatches from "./components/NoMatches";
import WaitingOnInput from "./components/WaitingOnInput";

const AllTomCruiseMoviesList = () => {
  const [first, setFirst] = useState(10);
  const { loading, data } = useQuery(moviesWithTomQuery, {
    variables: {
      first,
      filter: { actors_single: { name: "Tom Cruise" } },
    },
  });

  if (loading) return <LoadingInProgress />;
  if (!data.Movie) return <WaitingOnInput />;
  if (data.Movie.length === 0) return <NoMatches />;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        paddingBottom: "20px",
      }}
    >
      <MovieDataList movies={data.Movie} />
      <Button
        color="blue"
        variant="link"
        onClick={() => setFirst((prevFirst) => prevFirst + prevFirst)}
      >
        Load More ...
      </Button>
    </div>
  );
};

export default AllTomCruiseMoviesList;
