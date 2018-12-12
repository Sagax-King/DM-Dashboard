import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import Steps from './Steps';
import { Race } from './modules';
import { Container } from './styles';

const index = ({ match, location }) => (
  <Container>
    <Steps match={match} location={location} />
    <Switch>
      <Route
        path={`${match.url}/race`}
        component={Race}
      />
      <Route render={() => <Redirect to={`${match.url}/race`} />} />
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
