import {graphql, PageProps} from 'gatsby'
import React from 'react'

import {connectPage} from '@snek-at/jaen'
import {Layout} from '../components/Layout'
import {PrivacyTemplate} from '../components/templates/PrivacyTemplate'

const PrivacyPage = connectPage(
  ({path}: PageProps) => {
    return (
      <Layout path={path}>
        <PrivacyTemplate path={path} />
      </Layout>
    )
  },
  {
    label: 'Datenschutz'
  }
)

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default PrivacyPage

export {Head} from '@snek-at/jaen'
