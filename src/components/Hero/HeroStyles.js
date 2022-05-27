import styled from 'styled-components'

export const LeftSection = styled.div`
  max-width: 55%;

  position: absolute;
  display: flex;
  flex-direction: column;
  margin-botton: 2rem;
  height: min-content;
  justify-content: center;
  z-index: 1;
  @media ${(props) => {
      props.theme.breakpoints.sm
    }} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media screen and (max-width: 960px) {
    max-width: 100%;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    position: relative;
    max-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    display: ${(props) => (props.hideSmall ? 'none' : '')};
    margin: 0 auto;
  }
`
export const RightSection = styled.div`
  width: 1000px;
  margin-botton: 2rem;
  position: absolute;
  left: 400px;
  
  @media ${(props) => props.theme.breakpoints.md} {
    position: relative;
    left: 0;
    display: ${(props) => (props.hideSmall ? 'none' : '')};
  }
`

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 50%;
  @media ${(props) => props.theme.breakpoints.md} {
`

export const ButtonLink = styled.a`
  border: none;
  border-radius: 50px;
  color: ${(props) => props.theme.colors.button.text};
  display: flex;
  top: 0;
  left: 0;
  padding: 10px 20px;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.colors.button.bg};
  opacity: ${({ disabled }) => (disabled ? '.5' : '1')};
  transition: 0.4s ease;
  font-size: ${({ alt }) => (alt ? '20px' : '24px')};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) =>
    disabled
      ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)'
      : 'none'};

  &:hover {
    background-color: #252525;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled {
    background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => (alt ? '20px' : '16px')};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
  }
`

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => (large ? '24px' : '16px')};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => (large ? '16px' : '8px')};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => (large ? '0' : '8px')};
  }
`
