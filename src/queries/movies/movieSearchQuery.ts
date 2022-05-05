import { gql } from "@apollo/client";
import { movieFrament } from "./movieFragment";

const movieSearchQuery = gql`
  ${movieFrament}

  query Movies($filter: _MovieFilter!) {
    Movie(filter: $filter) {
      ...MovieFields
    }
  }
`;

export default movieSearchQuery