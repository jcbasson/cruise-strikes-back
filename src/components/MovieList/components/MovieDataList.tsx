import styled from "styled-components";
import {
  Avatar,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
} from "@chakra-ui/react";

const Container = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const MovieDataList = ({ movies }: { movies: any }) => {
  return (
    <Container>
      <Heading fontSize="xl">SEARCH RESULTS</Heading>
      <TableContainer>
        <Table variant="simple" size="md">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Title</Th>
              <Th isNumeric>Year</Th>
              <Th isNumeric>Imdb</Th>
              <Th>Genre</Th>
            </Tr>
          </Thead>
          <Tbody>
            {movies.map((movie: any) => (
              <Tr key={movie.movieId}>
                <Td style={{ width: 80 }}>
                  <Avatar name={movie.title} src={movie.poster} />
                </Td>
                <Td>
                  <Text style={{ maxWidth: 500, overflowWrap: "break-word" }}>
                    {movie.title}
                  </Text>
                </Td>
                <Td style={{ width: 20 }} isNumeric>
                  {movie.year}
                </Td>
                <Td style={{ width: 10, textAlign: "center" }} isNumeric>
                  {movie.imdbRating}
                </Td>
                <Td>
                  <Text style={{ maxWidth: 200 }} isTruncated>
                    {movie.genres
                      .reduce((prev: string, genre: { name: string }) => {
                        if (genre && genre.name) {
                          return `${prev},${genre.name}`;
                        }
                        return prev;
                      }, "")
                      .substring(1)}
                  </Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default MovieDataList;
