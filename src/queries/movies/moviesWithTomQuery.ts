import { gql } from "@apollo/client";
import { movieFrament } from "./movieFragment";

const moviesWithTomQuery = gql`
  ${movieFrament}

  query Movies($filter: _MovieFilter!) {
    Movie(filter: $filter) {
      ...MovieFields
    }
  }
`;

export default moviesWithTomQuery
