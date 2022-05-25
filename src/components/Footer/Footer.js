import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

import { SocialIcons } from '../Header/HeaderStyles'
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

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:wynanderson77@gmail.com'>wynanderson77@gmail.com</LinkItem>
        </LinkColumn>

        
          <SocialContainer>
            <SocialIcons href='https://github.com/wynander'>
              <AiFillGithub size='3rem' />
            </SocialIcons>
            <SocialIcons href='https://www.linkedin.com/in/wyn-anderson/'>
              <AiFillLinkedin size='3rem' />
            </SocialIcons>
          </SocialContainer>
        
      </LinkList>
    </FooterWrapper>
  )
}

export default Footer
