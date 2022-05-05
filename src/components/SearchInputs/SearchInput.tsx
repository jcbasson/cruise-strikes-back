import styled from "styled-components";
import { Text } from "@chakra-ui/react";
import { SearchParams } from "types/searching/searchParams";
import AllTomCruiseMovies from "./AllTomCruiseMovies";
import SearchMovies from "./SearchMovies";

const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const SearchInput = ({
  onSearch,
}: {
  onSearch: ({ text, type }: SearchParams) => void;
}) => {
  return (
    <Container>
      <SearchMovies onSearch={onSearch} />
      <Text fontSize="1xl">OR</Text>
      <AllTomCruiseMovies onSearch={onSearch} />
    </Container>
  );
};

export default SearchInput;
