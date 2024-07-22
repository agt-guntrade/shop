import {Link} from '@chakra-ui/react'
import {SearchProvider} from '@snek-at/gatsby-theme-shopify'
import React from 'react'
import {LayoutProps} from 'jaen'
import {Link as GatsbyLink} from 'gatsby'

import {BasketDrawerProvider} from '../../services/basket'
import {SearchModalProvider} from '../../services/search'

import {Footer} from '../../components/organisms/Footer'
import {Header} from '../../components/organisms/Header'
import {ContactModalProvider} from '../../services/contact'

export const Layout: React.FC<LayoutProps> = ({children, pageProps}) => {
  return (
    <>
      <ContactModalProvider location={pageProps.location}>
        <BasketDrawerProvider>
          <SearchProvider>
            <SearchModalProvider>
              <Header path={pageProps.location.pathname} />

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
                  <Link as={GatsbyLink} to={'/agb'}>
                    AGB
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
                  'Montag: geschlossen',
                  'Dienstag: 8Uhr - 12Uhr & 14Uhr - 18Uhr',
                  'Mittwoch: nach Terminvereinbarung wegen Außendienst',
                  'Do.-Fr. 8Uhr - 12Uhr & 14Uhr - 18Uhr',
                  'Sa. 9Uhr - 12Uhr',
                  'Sonn- & Feiertags: geschlossen'
                ]}
              />
            </SearchModalProvider>
          </SearchProvider>
        </BasketDrawerProvider>
      </ContactModalProvider>
    </>
  )
}

export default Layout
