import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #__next {
        width: 100%;
        height: 100%;
    }

    #__next {
        display: flex;
    }

    main {
        flex: 1;
        background-color: #262626;
        color: white;
    }
`;
