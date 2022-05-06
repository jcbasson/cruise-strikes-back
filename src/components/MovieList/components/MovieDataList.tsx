import { Avatar, Text } from "@chakra-ui/react";
import { Movie } from "types/movie/movie";
import "./MovieDataList.css";

const MovieDataList = ({ movies }: { movies: Movie[] }) => {
  return (
    <>
      <table className="movies">
        <thead>
          <tr>
            <th colSpan={2}>Title</th>
            <th>Year</th>
            <th>Imdb</th>
            <th>Genres</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie: any) => (
            <tr key={movie.movieId} data-testid={movie.movieId}>
              <td>
                <Avatar name={movie.title} src={movie.poster} />
              </td>
              <td>
                <Text>{movie.title}</Text>
              </td>
              <td>{movie.year}</td>
              <td>{movie.imdbRating}</td>
              <td>
                <Text>
                  {movie.genres
                    .map((genre: { name: string }) => genre.name)
                    .join(", ")}
                </Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MovieDataList;
