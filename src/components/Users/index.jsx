import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Query } from 'react-apollo';
import { Container } from './styles';
import { GET_USERS } from './queries';
import UserList from './UserList';
import UserForm from './UserForm';

const index = ({ match }) => (
  <Container>
    <Switch>
      <Route
        path={`${match.url}/select`}
        render={() => (
          <Query query={GET_USERS}>
            {({ loading, error, data }) => {
              if (loading) return 'Loading...';
              if (error) return `Error! ${error.message}`;
              return (
                <UserList users={data.users} />
              );
            }}
          </Query>
        )}
      />
      <Route
        path={`${match.url}/create`}
        render={() => <UserForm />}
      />
      <Route render={() => <Redirect to={`${match.url}/select`} />} />
    </Switch>
  </Container>
);

index.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default index;
