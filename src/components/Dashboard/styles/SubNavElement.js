import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
    color: ${({ theme, active }) => (active ? '#eeeeee' : theme.colors.orange)};
    text-decoration: none;
    padding: 0 8px 2px 8px;
    margin: 0 8px;
    font-size: 16px;
    font-weight: 600;
    border-bottom: ${({ theme, active }) => (active && `1px solid ${theme.colors.orange}`)};
`;
