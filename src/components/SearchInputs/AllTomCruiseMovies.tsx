import { Button } from "@chakra-ui/react";
import { SearchParams } from "types/searching/searchParams";

const AllTomCruiseMovies = ({
  onSearch,
}: {
  onSearch: ({ text, type }: SearchParams) => void;
}) => {
  const search = () => {
    onSearch({ text: undefined, type: "tomMovies" });
  };

  return (
    <Button colorScheme="blue" onClick={search}>
      All Tom Cruise Movies
    </Button>
  );
};

export default AllTomCruiseMovies;
