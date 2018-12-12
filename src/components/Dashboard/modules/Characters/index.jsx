import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import SubNavigation from './SubNavigation';
import { Creation } from './modules';
import { Container } from './styles';

const index = ({ match, location }) => (
  <Container>
    <SubNavigation match={match} location={location} />
    <Switch>
      <Route
        path={`${match.url}/creation`}
        component={Creation}
      />
      <Route render={() => <Redirect to={`${match.url}/creation`} />} />
    </Switch>
  </Container>
);

index.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};


export default index;
