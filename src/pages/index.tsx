import {PageConfig} from '@atsnek/jaen'
import {GoogleReview} from '@snek-at/gatsby-plugin-scaleserp'
import {ShopifyProduct} from '@snek-at/gatsby-theme-shopify'
import {graphql, PageProps} from 'gatsby'
import * as React from 'react'

import {HomeTemplate} from '../components/templates/HomeTemplate'

interface IndexPageData {
  googleReviews: {
    nodes: GoogleReview[]
  }
  productSpotlight: {
    nodes: ShopifyProduct[]
  }
  categoryShowcase: {
    nodes: Array<ShopifyProduct>
  }
  latestProducts: {
    nodes: ShopifyProduct[]
  }
  featuredProducts: {
    nodes: ShopifyProduct[]
  }
}

// markup
const IndexPage: React.FC<PageProps<IndexPageData>> = props => {
  return (
    <HomeTemplate
      name="home"
      displayName="Sections"
      heroSection={{
        name: 'hero',
        displayName: 'Hero',
        latestProducts: props.data.latestProducts.nodes,
        categoryProducts: props.data.categoryShowcase.nodes,
        spotlightProducts: props.data.productSpotlight.nodes
      }}
      featuredProductsSection={{
        name: 'featured',
        displayName: 'Empfehlungen',
        featuredProducts: props.data.featuredProducts.nodes
      }}
      partnerSection={{
        name: 'partner',
        displayName: 'Vertretungen'
      }}
      featuredPartnerSection={{
        name: 'featuredpartner',
        displayName: 'Empfehlungen/Vertretungen',
        featuredProducts: props.data.featuredProducts.nodes
      }}
      faqSection={{
        name: 'faq',
        displayName: 'Fragen und Antworten'
      }}
      reviewSection={{
        name: 'review',
        displayName: 'Bewertungen',
        googleReviews: props.data.googleReviews.nodes
      }}
      reviewFAQSection={{
        name: 'reviewfaq',
        displayName: 'Bewertungen/FAQ',
        googleReviews: props.data.googleReviews.nodes
      }}
      aboutSection={{
        heading: null,
        name: 'about',
        displayName: 'Über uns'
      }}
      newsSection={{
        name: 'news',
        displayName: 'Neuigkeiten'
      }}
    />
  )
}

export const query = graphql`
  query ($featuredProductIds: [String!]!, $jaenPageId: String!) {
    googleReviews: allGoogleReview {
      nodes {
        ...googleReviewData
      }
    }
    productSpotlight: allShopifyProduct(
      filter: {
        metafields: {
          elemMatch: {
            key: {eq: "show"}
            namespace: {eq: "spotlight"}
            value: {eq: "true"}
          }
        }
      }
    ) {
      nodes {
        ...shopifyProductData
      }
    }
    categoryShowcase: allShopifyProduct(
      filter: {
        metafields: {
          elemMatch: {
            key: {eq: "show"}
            namespace: {eq: "showcase"}
            value: {eq: "true"}
          }
        }
      }
      sort: {fields: createdAt}
    ) {
      nodes {
        ...shopifyProductData
      }
    }
    latestProducts: allShopifyProduct(
      sort: {fields: createdAt, order: DESC}
      limit: 6
    ) {
      nodes {
        ...shopifyProductData
      }
    }
    featuredProducts: allShopifyProduct(
      filter: {id: {in: $featuredProductIds}}
    ) {
      nodes {
        ...shopifyProductData
      }
    }
    jaenPage(id: {eq: $jaenPageId}) {
      ...JaenPageData
    }
  }
`

export default IndexPage

export {Head} from '@atsnek/jaen'

export const pageConfig: PageConfig = {
  label: 'AGT GunTrade',
  icon: 'FaHome',
  childTemplates: [],
  menu: {
    label: 'Startseite',
    type: 'app',
    order: 100
  }
}
