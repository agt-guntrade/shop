import React from 'react'
import {Link} from '@chakra-ui/react'
import {Link as GatsbyLink} from 'gatsby'
import {Footer} from './organisms/Footer'
import {Header} from './organisms/Header'

interface LayoutProps {
  path: string
  children: React.ReactNode
}

export const Layout = ({path, children}: LayoutProps) => {
  return (
    <>
      <Header path={path} />

      {children}

      <Footer
        col1h={'AGT'}
        col1={[
          <Link as={GatsbyLink} to={'/'}>
            Startseite
          </Link>,
          <Link as={GatsbyLink} to={'/products'}>
            Produkte
          </Link>,
          <Link as={GatsbyLink} to={'/contact'}>
            Kontakt
          </Link>
        ]}
        col2h="Rechtliches"
        col2={[
          <Link as={GatsbyLink} to={'/impressum'}>
            Impressum
          </Link>,
          <Link as={GatsbyLink} to={'/privacy'}>
            Datenschutz
          </Link>,
          <Link as={GatsbyLink} to={'/sitemap/sitemap-index.xml'}>
            Sitemap
          </Link>
        ]}
        col3h="Öffnungszeiten"
        col3={[
          'MO: Geschlossen',
          'DI: 8:00 - 12:00 - 14:00 - 18:00',
          'MI: 8:00 - 12:00',
          'DO: 8:00 - 12:00 - 14:00 - 18:00',
          'FR: 8:00 - 12:00 - 14:00 - 18:00',
          'SA: 8:00 - 12:00',
          'Sonn und Feiertag: Geschlossen'
        ]}
      />
    </>
  )
}
