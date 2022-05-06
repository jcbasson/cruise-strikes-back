import { render, within, screen } from "@testing-library/react";
import ReactDOM from "react-dom/client";
import MovieDataList from "./MovieDataList";

describe("<MoviesDataList>", () => {
  it("must display the list of movies", () => {
    const movies = [
      {
        movieId: "123",
        title: "Top Gun",
        year: 1986,
        imdbRating: 9.1,
        genres: [{ name: "Action" }, { name: "Romance" }],
      },
    ];
    render(<MovieDataList movies={movies} />);
    movies.forEach(({ movieId, title, year, imdbRating, genres }) => {
      // eslint-disable-next-line testing-library/no-node-access
      const row = screen.getByTestId(movieId).closest("tr");
      // highlight-start
      const utils = within(row);
      expect(utils.getByText(title)).toBeInTheDocument();
      expect(utils.getByText(year)).toBeInTheDocument();
      expect(utils.getByText(imdbRating)).toBeInTheDocument();
      expect(
        utils.getByText(
          genres.map((genre: { name: string }) => genre.name).join(", ")
        )
      ).toBeInTheDocument();
    });
  });
});
