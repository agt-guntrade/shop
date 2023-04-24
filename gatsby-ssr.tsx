/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import {GatsbySSR} from 'gatsby'
import {AuthenticationProvider} from './src/services/authentication'

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({element}) => {
  // return <PageWrapper>{element}</PageWrapper>

  return <AuthenticationProvider>{element}</AuthenticationProvider>
}
