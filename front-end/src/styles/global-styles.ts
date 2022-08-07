import { createGlobalStyle } from "styled-components";
import HelveticaULT from "../asssets/fonts/HelveticaUltraLt.ttf";
import HelveticaCondensed from "../asssets/fonts/ps.ttf";

export const GlobalStyles = createGlobalStyle`
    * {
        @import url(${HelveticaULT});
        @import url(${HelveticaCondensed});
        
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        overflow-x: hidden;
    }
`;
