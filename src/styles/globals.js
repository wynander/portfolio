import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;
    overflow-x: hidden;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  #path_0-{
    stroke-dashoffset: -1200;
    stroke-dasharray: 1200;
  animation: dash 4s ease-out forwards;
  animation-delay: .2s;
  
}

  @keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}#path_1-{
    stroke-dashoffset: 1200;
    stroke-dasharray: 1200;
  animation: dash 3.25s ease-out forwards;
  animation-delay: .2s;
  }
  @keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

.arrow-container{
  padding: .5rem;
  background: rgba(0,0,0,.5);
  opacity: .75;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50vw;
}
button:hover .arrow-container{
    background: rgba(0,0,0,1);
    opacity: 1;
}

.pdf-container{
  width: 100%;
  height: 1175px;
  padding: 2rem;
  display: flex;
  justify-content: center;
}

.pdf-viewer{
  width: 80%;
  height: 100%;
  border-radius: .5rem;
  box-shadow: 0 0 .5rem rgba(0,0,0,.5);
}
.nav-width{
  position: fixed;
  max-width: 1280px;
  z-index: 1000;
  background-color: ${(props) => props.theme.colors.primary1};
}

@media ${(props) => props.theme.breakpoints.sm}{
  .nav-width{
    position: relative;
}


`

export default GlobalStyles
