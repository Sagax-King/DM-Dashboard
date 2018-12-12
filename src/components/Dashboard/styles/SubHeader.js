import styled from 'styled-components';

export default styled.div`
    position: fixed;
    width: calc(100vw - 20px);
    height: 34px;
    background-color: ${({ theme }) => theme.colors.grey};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 10px;
    top: 50px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
`;
