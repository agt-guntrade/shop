import {graphql, PageProps} from 'gatsby'
import React from 'react'

import {PageConfig} from 'jaen'
import {Prose} from '@nikolovlazar/chakra-ui-prose'

import {MdxField} from 'jaen-fields-mdx'

import {ContainerLayout} from '../components/ContainerLayout'
import {BreadcrumbsBanner} from '../components/molecules/BreadcrumbsBanner'

const AGBPage: React.FC<PageProps> = ({path}) => {
  return (
    <>
      <BreadcrumbsBanner title="AGB" path={path} />
      <ContainerLayout>
        <MdxField
          name="mdx-content"
          components={{
            wrapper: Prose
          }}
        />
      </ContainerLayout>
    </>
  )
}

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default AGBPage

export {Head} from 'jaen'

export const pageConfig: PageConfig = {
  label: 'AGB | AGT Gun Trade',
  childTemplates: []
}
