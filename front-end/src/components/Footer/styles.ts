import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    div {
        margin: 0 auto;
        color: #fff;
        position: absolute;
        z-index: 1;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        height: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }
`;