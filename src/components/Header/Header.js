import Link from 'next/link'
import React, { useContext } from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'
import { MdDarkMode, MdWbSunny } from 'react-icons/md'
import { useThemeContext } from 'src/styles/theme'

import { Logo,Tooltip,TooltipBox,Container, Div1, Div2, Div3, NavLink, SocialIcons, DarkModeIcon } from './HeaderStyles'

const Header = () => {
  const {theme, setTheme} = useThemeContext()
  return (
    <Container>
      <Div1>
        <Link href='/'>
          <Logo >
            <svg
              width='67'
              height='33'
              viewBox='0 0 67 33'
              
              xmlns='http://www.w3.org/2000/svg'
            >
              <mask
                id='mask0_2_4'
                style={{ maskType: 'alpha' }}
                maskUnits='userSpaceOnUse'
                x='41'
                y='18'
                width='16'
                height='17'
              >
                <path d='M49 18L56.7942 34.5H41.2058L49 18Z' />
              </mask>
              <g mask='url(#mask0_2_4)'>
                <rect x='35' y='14' width='24' height='10' />
              </g>
              <path d='M7.72618 2.74782C7.03462 1.24219 5.25345 0.582262 3.74782 1.27382C2.24219 1.96538 1.58226 3.74655 2.27382 5.25218L7.72618 2.74782ZM16.0236 28L13.2974 29.2522C13.7833 30.3099 14.8371 30.9911 16.001 30.9999C17.165 31.0087 18.2289 30.3434 18.7306 29.2931L16.0236 28ZM27.4882 4L30.1757 2.66683C29.6656 1.63863 28.6136 0.99156 27.4659 1.00008C26.3182 1.00861 25.2759 1.67123 24.7812 2.70689L27.4882 4ZM39.3937 28L36.7062 29.3332C37.2199 30.3687 38.2828 31.017 39.4386 30.9997C40.5944 30.9824 41.6374 30.3026 42.1199 29.2522L39.3937 28ZM50.4173 4L53.1623 2.78961C52.686 1.70951 51.6206 1.0091 50.4402 1.00009C49.2598 0.991071 48.1839 1.67512 47.6911 2.74782L50.4173 4ZM58.255 29.2104C58.9235 30.7264 60.6944 31.4135 62.2104 30.745C63.7264 30.0765 64.4135 28.3056 63.745 26.7896L58.255 29.2104ZM57.9134 21L60.6584 19.7896L60.6584 19.7896L57.9134 21ZM52 18H49V24H52V18ZM2.27382 5.25218L13.2974 29.2522L18.7498 26.7478L7.72618 2.74782L2.27382 5.25218ZM18.7306 29.2931L30.1952 5.29311L24.7812 2.70689L13.3166 26.7069L18.7306 29.2931ZM24.8007 5.33317L36.7062 29.3332L42.0812 26.6668L30.1757 2.66683L24.8007 5.33317ZM42.1199 29.2522L53.1435 5.25218L47.6911 2.74782L36.6675 26.7478L42.1199 29.2522ZM47.6723 5.21039L55.1684 22.2104L60.6584 19.7896L53.1623 2.78961L47.6723 5.21039ZM55.1684 22.2104L58.255 29.2104L63.745 26.7896L60.6584 19.7896L55.1684 22.2104ZM57.9134 18H52V24H57.9134V18Z' />
            </svg>
          </Logo>
        </Link>
      </Div1>
      <Div2>
        <li className='scale'>
          <Link href='#experience'>
            <NavLink>Experience</NavLink>
          </Link>
        </li>
        <li className='scale'>
          <Link href='#tech'>
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li className='scale'>
          <Link href='#'>
            <NavLink>Resume</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href='https://google.com'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://google.com'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <Tooltip>
          <DarkModeIcon onClick={() => setTheme((prev) => !prev)}>
            {theme ? (
              <MdDarkMode color='white' size='2rem' />
            ) : (
              <MdWbSunny color='#121212' size='2rem' />
            )}
          </DarkModeIcon>
          <TooltipBox>{theme ? 'Dark Mode' : 'Light Mode'}</TooltipBox>
        </Tooltip>
      </Div3>
    </Container>
  )
}

export default Header
