import  styled  from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 70px 1fr;
    grid-template-areas: 'AS MH' 'AS CT';
    height: 100vh;

`;