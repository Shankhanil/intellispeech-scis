import styled from "styled-components";

export const AppThemes = styled.div`
    background-color : ${((props) => props.theme) ? "black" : "green"}
`;