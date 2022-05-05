import styled from "styled-components";
import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { SearchParams } from "types/searching/searchParams";

const Container = styled.div`
  display: flex;
  gap: 5px;
`;
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
    <Container>
      <Input
        placeholder="Enter movie title"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button colorScheme="blue" onClick={() => search(searchText)}>
        Search
      </Button>
    </Container>
  );
};

export default SearchMovies;
