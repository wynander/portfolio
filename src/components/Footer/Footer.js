import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

import { NavIcons } from '../Header/HeaderStyles'
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles'

const Footer = () => (
  <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:wynanderson77@gmail.com">
          wynanderson77@gmail.com
        </LinkItem>
      </LinkColumn>

      <SocialContainer>
        <NavIcons target="_blank" href="https://github.com/wynander">
          <AiFillGithub size="3rem" />
        </NavIcons>
        <NavIcons
          target="_blank"
          href="https://www.linkedin.com/in/wyn-anderson/"
        >
          <AiFillLinkedin size="3rem" />
        </NavIcons>
      </SocialContainer>
    </LinkList>
  </FooterWrapper>
)

export default Footer
