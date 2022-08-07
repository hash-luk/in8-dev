import { useState, useEffect } from "react";
import * as S from "./styles";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import logoin8 from "../../asssets/logo.svg";
import indexImageDesktop from "../../asssets/images/index.jpg";
import IndexImageMobile from "../../asssets/images/indexMobile.jpg";
import hamburger from "../../asssets/icons/hamburguer.svg";
import openHamburger from "../../asssets/icons/hamburguerAberto.svg";

export default function MainContent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageSRC, setImageSRC] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenu = document.querySelector(".mobile-menu") as HTMLDivElement;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    }),
      [];

    if (windowWidth <= 500) {
      setImageSRC(IndexImageMobile);
    } else {
      setImageSRC(indexImageDesktop);
    }
  });

  function handleOpen() {
    if(isOpen){
      setIsOpen(false);
      mobileMenu.style.display = "none";
    } else {
      setIsOpen(true)
      mobileMenu.style.display = "block"
    }
  }

  return (
    <S.Container>
      <S.MobileMenu className="mobile-menu">
        <div>
          <img src={openHamburger} alt="" onClick={handleOpen}/>
          <a href="#">lista</a>
          <a href="#">cadastro</a>
          <a href="#">sobre mim</a>
        </div>
      </S.MobileMenu>
      <header>
        <img
          src={logoin8}
          alt="Logo da IN8 Dev com 2 losangos a esquerda, um em cinza outro em branco e a palavra IN8 DEV a direita com a plavra DEV escrita em azul"
          className="logo"
        />

        <img src={hamburger} alt="" className="hamburger-icon" onClick={handleOpen}/>

        <S.LinksContainer>
          <a href="#" className="selected">cadastro</a>
          <FiberManualRecordIcon className="icon" />
          <a href="#">lista</a>
          <FiberManualRecordIcon className="icon" />
          <a href="#">sobre mim</a>
        </S.LinksContainer>
      </header>

      <main>
        <div>
          <h1>Estágio</h1>
          <h3>Prova de seleção</h3>
        </div>

        <img src={imageSRC} alt="" className="bg-image" />
      </main>
    </S.Container>
  );
}
