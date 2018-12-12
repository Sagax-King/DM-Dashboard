import styled from 'styled-components';

export default styled.div`
    height: calc(100vh - 94px);
    width: 130px;
    position: fixed;
    background: ${({ theme }) => theme.colors.lightGrey};
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    padding-top: 10px;
    left: 0;
`;
