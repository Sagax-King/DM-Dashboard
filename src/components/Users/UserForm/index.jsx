import React from 'react';
import { Mutation } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import {
  Container, InstructionText, NameField, ConfirmButton,
} from './styles';
import { CREATE_USER } from '../mutations';
import { GET_USERS } from '../queries';

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      redirect: null,
    };
    this.valueChange = this.valueChange.bind(this);
  }

  valueChange({ target }) {
    const { value } = target;
    this.setState(() => ({
      username: value,
    }));
  }

  render() {
    const { redirect, username } = this.state;
    return (
      <Mutation
        mutation={CREATE_USER}
        update={(cache, { data: { createUser } }) => {
          const { users } = cache.readQuery({ query: GET_USERS });
          cache.writeQuery({
            query: GET_USERS,
            data: { users: users.concat([createUser]) },
          });
        }}
      >
        {createUser => (
          <Container>
            {redirect && <Redirect to={`/dashboard/${redirect}`} />}
            <InstructionText>Who are you?</InstructionText>
            <NameField type="text" value={username} onChange={this.valueChange} />
            <ConfirmButton onClick={() => {
              createUser({ variables: { user: { username } } })
                .then(user => this.setState(() => ({ redirect: user.data.createUser.id })));
            }}
            >
                Confirm
            </ConfirmButton>
          </Container>
        )}
      </Mutation>
    );
  }
}
