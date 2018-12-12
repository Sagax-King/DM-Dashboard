import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from './styles';
import Header from './Header';
import { USER } from './queries';
import { Characters } from './modules';

const index = ({ match, location }) => {
  const { params } = match;
  const { userId } = params;
  return (
    <Query query={USER} variables={{ id: userId }}>
      {({ loading, error, data }) => {
        if (loading) {
          return <div>loading...</div>;
        }
        if (error) {
          return <div>{JSON.stringify(error)}</div>;
        }
        return (
          <Container>
            <Header match={match} location={location} user={data.user} />
            <Switch>
              <Route
                path={`${match.url}/characters`}
                component={Characters}
              />
              <Route render={() => <Redirect to={`${match.url}/characters`} />} />
            </Switch>
          </Container>
        );
      }}
    </Query>
  );
};

index.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default index;
