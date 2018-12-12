import React from 'react';
import PropTypes from 'prop-types';
import { SubHeader, SubNavElement } from '../../../styles';

const getActive = (pathname, url) => pathname.includes(url);

const index = ({ match, location }) => (
  <SubHeader>
    <SubNavElement
      to={`${match.url}/creation`}
      active={getActive(location.pathname, `${match.url}/creation`)}
    >
        Creation
    </SubNavElement>
    <SubNavElement
      to={`${match.url}/saved`}
      active={getActive(location.pathname, `${match.url}/saved`)}
    >
        Saved
    </SubNavElement>
  </SubHeader>
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
