import { gql } from "@apollo/client";

export const movieFrament = gql`
  fragment MovieFields on Movie {
    movieId
    title
    year
    poster
    imdbRating
    genres {
      name
    }
    actors {
      name
    }
  }
`;
