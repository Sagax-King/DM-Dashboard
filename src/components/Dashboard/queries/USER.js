import gql from 'graphql-tag';

export default gql`
    query User($id: ID!) {
        user(id: $id) {
            id
            username
        }
    }
`;
