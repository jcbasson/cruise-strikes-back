import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { SearchParams } from 'types/searching/searchParams';

const SearchMovies = ({
  onSearch,
}: {
  onSearch: ({ text, type }: SearchParams) => void;
}) => {
  const [searchText, setSearchText] = useState("");

  const search = (searchText: string) => {
    onSearch({ text: searchText, type: "allMovies" });
  };

  return (
    <div style={{ display: "flex", gap: 5 }}>
      <Input
        placeholder="Enter movie title"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button colorScheme="blue" onClick={() => search(searchText)}>
        Search All
      </Button>
    </div>
  );
};

export default SearchMovies;
