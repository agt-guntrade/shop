import {graphql, PageProps} from 'gatsby'
import React from 'react'

import {Head as JaenHead} from '@snek-at/jaen'
import {
  CollectionPageData,
  ColllectionPageContext,
  getCollectionStructure
} from '@snek-at/gatsby-theme-shopify'
import {Layout} from '../components/Layout'
import {CollectionTemplate} from '../components/templates/CollectionTemplate'

type CollectionPageTemplateProps = PageProps<
  CollectionPageData,
  ColllectionPageContext
>

const CollectionPageTemplate = (props: CollectionPageTemplateProps) => {
  const {relatedProducts} = props.data
  const {shopifyCollection, shopifySubCollections} = props.pageContext

  return (
    <>
      <Layout path={props.path}>
        <CollectionTemplate
          path={props.path}
          shopifyCollection={shopifyCollection}
          subCollections={shopifySubCollections}
          relatedProducts={relatedProducts}
        />
      </Layout>
    </>
  )
}

export const query = graphql`
  query ($relatedProductIds: [String!]!) {
    relatedProducts: allShopifyProduct(filter: {id: {in: $relatedProductIds}}) {
      nodes {
        ...shopifyProductData
      }
    }
  }
`

export default CollectionPageTemplate

export const Head = (props: CollectionPageTemplateProps) => {
  const {relatedProducts} = props.data
  const {shopifyCollection, shopifySubCollections, collectionId} =
    props.pageContext

  const {name} = getCollectionStructure(collectionId)

  return (
    <JaenHead {...(props as any)}>
      <title id="title">{name}</title>
      <meta
        id="meta-description"
        name="description"
        content={
          shopifyCollection.description +
          ' | Unterkategorien: ' +
          shopifySubCollections.nodes.map(n => n.title).join(', ') +
          ' | Weitere Produkte: ' +
          relatedProducts.nodes.map(n => n.title).join(', ')
        }
      />
    </JaenHead>
  )
}
