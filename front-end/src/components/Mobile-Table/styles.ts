import styled from "styled-components";

export const Container = styled.div`
    width: 400px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #table-header {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            text-align: center;
            width: 22%;
            height: 30px;
            cursor: pointer;
            font-family: "roboto", sans-serif;
            font-weight: 300;
            color: #012d51;
            border: 1px solid #808080;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .selected {
            border: 1px solid #29abe2;
        }
    }

    #table-body {
        transform: translateY(-7px);
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        border: 1px solid #29abe2;

        div {
            width: 90%;
            height: 20px;
            border-bottom: 1px solid #29abe2 !important;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 10px;
            

            span:first-child {
                font-family: "Roboto", sans-serif;
                font-weight: 400;
                color: #012d51;
            }


            span:last-child {
                font-family: "Helvetica 25 UltraLight", sans-serif !important;
                color: #808080;
            }
        }
    }
`;