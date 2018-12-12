import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
    color: ${({ theme, active }) => (active ? theme.colors.red : theme.colors.black)};
    text-decoration: none;
    padding: 6px 8px;
    margin: 0 8px;
    font-size: 16px;
    font-weight: 600;
`;
