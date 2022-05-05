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
    <Button colorScheme="green" onClick={search}>
      Tom Cruise
    </Button>
  );
};

export default AllTomCruiseMovies;
