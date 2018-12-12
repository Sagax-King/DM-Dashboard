import styled from 'styled-components';
import dungeon from '../../../assets/images/dungeon.jpg';

export default styled.div`
    background-image: url(${dungeon});
    background-size: cover;
    min-height: 100vh;
    background-attachment: fixed;
    z-index: -1;
`;
