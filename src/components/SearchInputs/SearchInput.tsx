import { Text } from "@chakra-ui/react";
import { SearchParams } from "types/searching/searchParams";
import AllTomCruiseMovies from "./AllTomCruiseMovies";
import SearchMovies from "./SearchMovies";

const SearchInput = ({
  onSearch,
}: {
  onSearch: ({ text, type }: SearchParams) => void;
}) => {
  return (
    <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
      <SearchMovies onSearch={onSearch} />
      <Text fontSize="1xl">OR</Text>
      <AllTomCruiseMovies onSearch={onSearch} />
    </div>
  );
};

export default SearchInput;
