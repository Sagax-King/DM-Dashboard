import styled from 'styled-components';

export default styled.div`
    position: fixed;
    width: 100vw;
    height: 50px;
    background-color: ${props => props.theme.colors.charcoal};
    display: flex;
    align-items: center;
    justify-content: center;
`;
