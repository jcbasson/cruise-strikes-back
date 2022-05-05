
import { Heading } from '@chakra-ui/react';
const MovieDataList = ({ data }: { data: any }) => {
  return (
    <>
      <Heading>SEARCH RESULTS</Heading>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Actor</th>
          </tr>
        </thead>
        {data.Movies.map((movie: any) => {
          return (
            <tr>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.actor}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default MovieDataList;
