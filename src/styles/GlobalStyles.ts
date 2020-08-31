import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
    color: var(--white)
}

html, body, #root{
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;
    overflow: hidden
}

*, button, input {
    border:0;
    background: none; 
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

html {
    background: var(--primary);
}

::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: var(--white);
}

::-webkit-scrollbar
{
	width: 5px;
	background-color: var(--white);
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: var(--gray);
}
:root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --check: #00C06B;
    --delete: #E8265E;
    --background: #33A1F2;
    --background-dark-hover: #011017;
    --background-light-hover: #2C8ED6;
  }
`;
