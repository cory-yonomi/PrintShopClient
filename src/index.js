import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthContextProvider } from './store/AuthContext'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: "http://print-shop-server.herokuapp.com/graphql",
  cache: new InMemoryCache()
})

ReactDOM.render(
  <AuthContextProvider>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </AuthContextProvider>
  ,
  document.getElementById('root')
);
