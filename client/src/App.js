import React from 'react';
import BookList from './components/BookList'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
//apollo client setup

const client = new ApolloClient({
  url: 'http://localhost:4000/graphql'
})
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Reading List</h1>
        <BookList/>
      </div>
    </ApolloProvider>
  );
}

export default App;
