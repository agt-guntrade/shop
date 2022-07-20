import {graphql, PageProps} from 'gatsby'
import React from 'react'

import {connectPage} from '@jaenjs/jaen'
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
    displayName: 'LegalPage'
  }
)

export const query = graphql`
  query($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default PrivacyPage
