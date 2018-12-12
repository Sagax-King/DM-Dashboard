import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
    color: ${({ theme, active }) => (active ? '#eeeeee' : theme.colors.red)};
    text-decoration: none;
    margin: 0 16px;
    font-size: 18px;
    font-weight: 500;
`;
