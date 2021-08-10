import { createGlobalStyle } from "styled-components"


export default createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    html, border-style, #root{
        height: 100%;
    }

    * , button, input, select, option{
        border: 0;
        outline: 0;
        color: orange;
        font-family: monospace;

    }

    button {
        cursor: pointer;
    }
`;