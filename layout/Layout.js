import React from 'react'

import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
