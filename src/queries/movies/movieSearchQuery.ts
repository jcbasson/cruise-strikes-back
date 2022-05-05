import { gql } from "@apollo/client";
import { movieFrament } from "./movieFragment";

const movieSearchQuery = gql`
  ${movieFrament}

  query Movies($first: Int, $filter: _MovieFilter!) {
    Movie(first: $first, filter: $filter) {
      ...MovieFields
    }
  }
`;

export default movieSearchQuery;
