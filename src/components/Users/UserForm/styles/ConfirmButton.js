import styled from 'styled-components';

export default styled.div`
    padding: 10px 50px;
    background-color: silver;
    border: 2px solid grey;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    border-radius: 4px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    :hover {
        background-color: gold;
        color: purple;
    }
`;
