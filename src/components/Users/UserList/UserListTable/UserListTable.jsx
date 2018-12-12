import React from 'react';
import PropTypes from 'prop-types';
import {
  Table, TableHeader, TableHeading, HeadingRow, TableRow, TableCell,
} from './styles';

const UserListTable = ({ users, redirectToNew, selectUser }) => (
  <Table>
    <TableHeader>
      <HeadingRow>
        <TableHeading>
              Select A User
        </TableHeading>
      </HeadingRow>
    </TableHeader>
    <tbody>
      <TableRow onClick={redirectToNew}>
        <TableCell>
              New User
        </TableCell>
      </TableRow>
      { users.map(user => (
        <TableRow key={user.id} onClick={() => selectUser(user)}>
          <TableCell>
            {user.username}
          </TableCell>
        </TableRow>
      )) }
    </tbody>
  </Table>
);

UserListTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
  })).isRequired,
  redirectToNew: PropTypes.func.isRequired,
  selectUser: PropTypes.func.isRequired,
};

export default UserListTable;
