import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #29abe2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    color: #fff;
    font-family: "Helvetica 25 UltraLight", sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
  }

  form {
    width: 500px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    div {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: left;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      color: #fff;
      margin-bottom: 20px;
      position: relative;

      label {
        margin-bottom: 10px;
        font-size: 12px;
      }

      input {
        border: none;
        border-bottom: 1px solid #fff;
        background-color: transparent !important;
        color: #fff;
        padding-bottom: 2px;
        font-family: "Helvetica Condensed", sans-serif;
        outline: none;

        :focus {
          outline: none;
          background-color: transparent !important;
        }

        ::-webkit-calendar-picker-indicator {
          filter: invert(1);
        }
      }
      #phone-input {
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }
  }

  button {
    color: #29abe2;
    background-color: #012d51;
    cursor: pointer;
    width: 280px;
    height: 60px;
    font-size: 40px;
    font-family: "Helvetica 25 UltraLight", sans-serif;
    border: none;
  }

  @media screen and (max-width: 768px) {
    height: 60vh;
    justify-content: center;
    gap: 50px;
  }

  @media screen and (max-width: 500px) {
    height: 60vh;
    justify-content: center;
    gap: 50px;

    h1 {
      font-size: 40px;
      margin-bottom: 30px;
    }

    form {
      width: 300px !important;
    }
  }
`;
