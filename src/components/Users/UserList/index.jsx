import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import UserListTable from './UserListTable/UserListTable';
import { CardArea } from './styles';

export default class index extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
    })).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      isNew: false,
      select: null,
    };
    this.redirectToNew = this.redirectToNew.bind(this);
    this.selectUser = this.selectUser.bind(this);
  }

  redirectToNew() {
    this.setState(() => ({ isNew: true }));
  }

  selectUser(dm) {
    this.setState(() => ({ select: dm.id }));
  }

  render() {
    const { select, isNew } = this.state;
    const { users } = this.props;
    return (
      <CardArea>
        {select && <Redirect to={`/dashboard/${select}`} />}
        {isNew && <Redirect to="create" />}
        <UserListTable
          redirectToNew={this.redirectToNew}
          selectUser={this.selectUser}
          users={users}
        />
      </CardArea>
    );
  }
}
