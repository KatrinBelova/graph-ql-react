import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';

const client = new ApolloClient({});
// assums that graphQL server is available on route "/graphql"

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <div>Lyrics</div>
        <SongList />
      </div>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
