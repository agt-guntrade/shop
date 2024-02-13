// import {useAnalytics} from '@atsnek/jaen'
import React from 'react'
import {useFlatMenu} from '../../../hooks/menu'
import {Header} from './Header'

export interface HeaderContainerProps {
  path: string
}

export const HeaderContainer = ({path}: HeaderContainerProps) => {
  const menu = useFlatMenu()

  // const analytics = useAnalytics()

  return (
    <>
      <Header links={menu} path={path} />
    </>
  )
}
