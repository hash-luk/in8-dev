import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: relative;

    .back-to-top {
        width: 35px;
        height: 28px;
        border-radius: 50%;
        background-color: transparent;
        position: absolute;
        right: 300px;
        bottom: 150px;
        cursor: pointer;

        @media screen and (max-width: 768px) {
            display: none;
        }

        @media screen and (max-width: 500px) {
            display: none;
        }
    }

    h1 {
        margin: 30px 0;
        text-transform: uppercase;
        font-family: "Helvetica 25 UltraLight", sans-serif;
        color: #29abe2;
        font-weight: 400;
    }

    .data-grid {
        width: 900px;
        margin: 0 auto;

        .title {
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            text-align: center;
            color: #012d51;
            border-bottom: 1px solid #29abe2;
            border-left: 1px solid #29abe2;
        }

        .text {
            border-bottom: 1px solid #29abe2;
            color: #808080;
            text-align: center;
            border-left: 1px solid #29abe2;
            font-family: "Helvetica Condensed", sans-serif;
            font-weight: 400;

            :first-child{
                border-left: none !important; 
            }
        }

        .data-id {
            font-family: "Roboto", sans-serif !important;
            font-weight: 100;
            color: #012d51 !important;
        }
    }

    @media screen and (max-width: 768px) {
        .data-grid {
            width: 700px;
        }
    }

    @media screen and (max-width: 500px) {
        height: 500px;

        h1 {
            font-size: 40px;
            text-align: center;
        }
    }
`;