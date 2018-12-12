import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import theme from './theme';
import { Users, Dashboard } from './components';

const client = new ApolloClient({ uri: 'http://localhost:3003/graphql' });

const App = () => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/dashboard/:userId" render={props => <Dashboard {...props} />} />
          <Route path="/users" component={Users} />
          <Route render={() => <Redirect to="/users" />} />
        </Switch>
      </Router>
    </ApolloProvider>
  </ThemeProvider>
);

export default App;
