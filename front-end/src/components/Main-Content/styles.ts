import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;

  header {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    top: 0;
    z-index: 3;

    .hamburger-icon {
      width: 30px;
      height: 30px;
      display: none;
    }
  }

  main {
    width: 100%;
    height: 100%;

    div {
      position: absolute;
      color: #fff;
      z-index: 2;
      top: 35%;
      left: 21%;
      text-transform: uppercase;

      h1 {
        font-size: 6.25rem;
        font-family: "Helvetica 25 UltraLight", sans-serif;
        font-weight: 400;
      }

      h3 {
        font-size: 2.5rem;
        font-family: "Helvetica 25 UltraLight", sans-serif;
        font-weight: 400;
        letter-spacing: 0.1rem;
      }
    }

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: cover;
    }
  }

  .logo {
    width: 150px;
    height: 150px;
  }

  @media screen and (max-width: 768px) {
    .logo {
      width: 100px;
      height: 100px;
    }

    .hamburger-icon {
      display: block !important;
    }

    header {
      flex-direction: row-reverse;
      justify-content: space-between;
      padding: 0 20px !important;
    }

    main {
      div {
        top: 30%;
        left: 10%;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .logo {
      width: 100px;
      height: 100px;
    }

    .hamburger-icon {
      display: block !important;
    }

    header {
      flex-direction: row-reverse;
      justify-content: space-between;
      padding: 0 20px;
    }

    main {
      div {
        top: 15%;
        left: 15%;
      }
    }
  }
`;

export const LinksContainer = styled.div`
  width: 220px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    text-decoration: none;
    color: #fff;
  }

  .icon {
    width: 10px;
    height: 10px;
    color: #fff;
  }

  .selected {
    border-bottom: 1px solid #fff;
  }



  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 5;
  background-color: rgba(128, 128, 128, 0.3);
  display: none;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 10px;
    padding: 20px;
    width: 200px;
    height: 300px;
    background-color: #29abe2;
    font-family: "Roboto", sans-serif;
    font-weight: 400;

    a {
      text-decoration: none;
      color: #fff;

      :visited {
        color: #fff;
      }
    }

    img {
      width: 30px;
      height: 30px;
      transform: translateY(-130px);
    }
  }
`;
