import styled from 'styled-components'

export const Img = styled.img`
  width: 100%;
  max-width: 100vw;
  height: ${(props) => props.height || 'auto'};
  max-height: 70vh;
  object-fit: cover;
  overflow: hidden;
  @media ${(props) => props.theme.breakpoints.md} {
    height: auto;
    width: 100%;
    max-width: 100vw;
  }
  &:hover {
    cursor: pointer;
  }
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 5rem;
  row-gap: 5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`
export const BlogCard = styled.div`
  border-radius: 10px;
  background-color: ${props => props.theme.colors.secondary};
  text-align: center;
  max-width: 550px;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  padding: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
`

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.text};
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? '3rem' : '2rem')};
`

export const Hr = styled.hr`
  width: 300px;
  height: 3px;
  margin: 0px auto 10px auto;
  border: 0;
  background: ;
`

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: ${(props) => props.theme.colors.text};
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  flex: 1;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`

export const ExternalLinks = styled.a`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.6rem;
  padding: 0.5rem;
  background: transparent;
  border-radius: 5px;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${(props) => props.theme.colors.hover};
  }
`

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export const Tag = styled.li`
  margin: 1rem 1.5rem;
  color: ${(props) => props.theme.tags.color};
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  background: ${(props) => props.theme.tags.background};
  border-radius: 5px;
  font-weight: 500;
  transition: 0.5s;
`
export const Legend = styled.p`
  margin: 1rem;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.text};
`

export const TooltipBox = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  right: 0
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: max-content;
  padding: 8px 8px;
  border-radius: 4px;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;
`

export const Tooltip = styled.div`
  position: relative;
  width: max-content;
  margin: 0 1rem;

  & ${ExternalLinks}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: max-content;
    padding: 8px 8px;
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8) rgba(0, 0, 0, 0.8);
    }
  }
`
