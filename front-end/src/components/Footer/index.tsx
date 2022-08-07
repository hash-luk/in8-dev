import {useState, useEffect} from 'react';
import * as S from './styles';
import footerImageDesktop from "../../asssets/images/footerDesktop.jpg";
import footerImageMobile from "../../asssets/images/footerMobile.jpg";

export default function Footer() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [imageSRC, setImageSRC] = useState("");

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        }), []

        if(windowWidth <= 500) {
            setImageSRC(footerImageMobile)
        } else {
            setImageSRC(footerImageDesktop)
        }
    })

    return(
        <S.Container>
            <div>
                <p>Fulano Beltrano de Oliveira da Silva</p>
                <p>fulanobs@gmail.com</p>
                <p>(31) 9 9666-1111</p>
                <p>Faculdade de Belo Horizonte</p>
            </div>
            <img src={imageSRC} alt="Fundo do rodapé" />
        </S.Container>
    )
}