import React from 'react';
import PropTypes from 'prop-types';
import dice from '../../../assets/images/dice.png';
import {
  Bar, Logo, NavElement, UserText, NavGroup,
} from './styles';

const getActive = (pathname, url) => pathname.includes(url);

const index = ({ match, location, user }) => (
  <Bar>
    <NavGroup>
      <Logo src={dice} />
      <NavElement
        to={`${match.url}/campaigns`}
        active={getActive(location.pathname, `${match.url}/campaigns`)}
      >
      Campaigns
      </NavElement>
      <NavElement
        to={`${match.url}/characters`}
        active={getActive(location.pathname, `${match.url}/characters`)}
      >
      Characters
      </NavElement>
      <NavElement
        to={`${match.url}/worlds`}
        active={getActive(location.pathname, `${match.url}/worlds`)}
      >
      Worlds
      </NavElement>
      <NavElement
        to={`${match.url}/session`}
        active={getActive(location.pathname, `${match.url}/session`)}
      >
      Session
      </NavElement>
    </NavGroup>
    <UserText>
      {`Logged in as ${user.username}`}
    </UserText>
  </Bar>
);

index.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
};

export default index;
