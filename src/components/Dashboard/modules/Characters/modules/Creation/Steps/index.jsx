import React from 'react';
import PropTypes from 'prop-types';
import { Container, Step } from './styles';

const getActive = (pathname, url) => pathname.includes(url);

const index = ({ location, match }) => (
  <Container>
    <Step
      to={`${match.url}/race`}
      active={getActive(location.pathname, `${match.url}/race`)}
    >
        Race
    </Step>
    <Step
      to={`${match.url}/class`}
      active={getActive(location.pathname, `${match.url}/class`)}
    >
        Class
    </Step>
    <Step
      to={`${match.url}/abilities`}
      active={getActive(location.pathname, `${match.url}/abilities`)}
    >
        Abilities
    </Step>
    <Step
      to={`${match.url}/skills`}
      active={getActive(location.pathname, `${match.url}/skills`)}
    >
        Skills
    </Step>
    <Step
      to={`${match.url}/feats`}
      active={getActive(location.pathname, `${match.url}/feats`)}
    >
        Feats
    </Step>
    <Step
      to={`${match.url}/description`}
      active={getActive(location.pathname, `${match.url}/description`)}
    >
        Description
    </Step>
    <Step
      to={`${match.url}/equipment`}
      active={getActive(location.pathname, `${match.url}/equipment`)}
    >
        Equipment
    </Step>
    <Step
      to={`${match.url}/magic`}
      active={getActive(location.pathname, `${match.url}/magic`)}
    >
        Magic
    </Step>
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
