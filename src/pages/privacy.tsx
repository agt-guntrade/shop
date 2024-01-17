import {graphql, PageProps} from 'gatsby'
import React from 'react'

import {PageConfig} from '@atsnek/jaen'
import {PrivacyTemplate} from '../components/templates/PrivacyTemplate'

const PrivacyPage: React.FC<PageProps> = ({path}) => {
  return <PrivacyTemplate path={path} />
}

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default PrivacyPage

export {Head} from '@atsnek/jaen'

export const pageConfig: PageConfig = {
  label: 'Datenschutz',
  childTemplates: []
}
