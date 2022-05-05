import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import DefaultLayout from 'layouts/DefaultLayout';
import MovieFinder from 'pages/MovieFinder/MovieFinder';

const client = new ApolloClient({
  uri: "https://movies.grandstack.io/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <DefaultLayout>
          <MovieFinder />
        </DefaultLayout>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
