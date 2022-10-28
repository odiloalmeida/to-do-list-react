import { createGlobalStyle }  from 'styled-components'

const GlobalStyle = createGlobalStyle`

    body {
        padding: 0;
        margin: 0;
        border: none;
        box-sizing: border-box;
        outline: none;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
    }

    * {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px; 
    }
`

export default GlobalStyle