import {useDisclosure} from '@chakra-ui/react'
// import {useAnalytics} from '@snek-at/jaen'
import {SearchProvider, useProductSearch} from '@snek-at/gatsby-theme-shopify'
import React from 'react'
import {useFlatMenu} from '../../../hooks/menu'
import {Header} from './Header'
import {useAuthentication} from '../../../services/authentication'

export interface HeaderContainerProps {
  path: string
}

export const HeaderContainer = ({path}: HeaderContainerProps) => {
  const menu = useFlatMenu()

  const search = useProductSearch({
    options: {
      count: 15
    },
    persistData: false
  })

  // const analytics = useAnalytics()

  const onSearch = (searchTerm: string) => {
    search.onChangeFilter({
      searchTerm
    })

    // analytics.track('search', {
    //   searchTerm
    // })
  }

  return (
    <>
      {/* <AuthModal
        onLogin={onLogin}
        isOpen={authDisclosure.isOpen}
        onClose={authDisclosure.onClose}
        user={user || undefined}
        onLogout={onLogout}
      /> */}
      <Header
        links={menu}
        path={path}
        onSearch={onSearch}
        searchResultProducts={search.products}
      />
    </>
  )
}

export const HeaderWithSearch = ({path}: HeaderContainerProps) => {
  return (
    <SearchProvider>
      <HeaderContainer path={path} />
    </SearchProvider>
  )
}
