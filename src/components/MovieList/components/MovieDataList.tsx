import {
  Avatar,
  Box,
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
const MovieDataList = ({ movies }: { movies: any }) => {
  return (
    <main
      style={{
        paddingTop: "20px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <Heading fontSize="xl">SEARCH RESULTS</Heading>
      <Box display="flex" alignItems="center">
        <TableContainer>
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Title</Th>
                <Th isNumeric>Year</Th>
              </Tr>
            </Thead>
            <Tbody>
              {movies.map((movie: any) => (
                <Tr>
                  <Td>
                    <Avatar name={movie.title} src={movie.poster} />
                  </Td>
                  <Td>{movie.title}</Td>
                  <Td isNumeric>{movie.year}</Td>
                  <Td isNumeric>{movie.imdbRating}</Td>
                  <Td>
                    <Text noOfLines={[1, 2, 3]}>
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
      </Box>
    </main>
  );
};

export default MovieDataList;
