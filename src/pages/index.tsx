import {PageConfig} from '@atsnek/jaen'
import {GoogleReview} from '@snek-at/gatsby-plugin-scaleserp'
import {ShopifyProduct} from '@snek-at/gatsby-theme-shopify'
import {graphql, navigate, PageProps} from 'gatsby'
import * as React from 'react'

import {
  HeroSection,
  AboutSection,
  FeaturedPartnerSection,
  ReviewFAQSection
} from '../components/organisms/sections'
import {SideButtons} from '../components/molecules/buttons/SideButtons'
import {useContactModal} from '../services/contact'
import {ScrollSpy} from '../components/molecules/ScrollSpy'

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
  const contact = useContactModal()

  return (
    <>
      <HeroSection
        name="hero"
        latestProducts={props.data.latestProducts.nodes}
        categoryProducts={props.data.categoryShowcase.nodes}
        spotlightProducts={props.data.productSpotlight.nodes}
      />
      <AboutSection name="about" />

      <FeaturedPartnerSection
        name="featuredpartner"
        featuredProducts={props.data.featuredProducts.nodes}
        productsPagePath="/products"
      />

      <ReviewFAQSection
        name="reviewfaq"
        googleReviews={props.data.googleReviews.nodes}
      />

      <SideButtons
        onMailButtonClick={() => contact.onOpen()}
        onLocationButtonClick={() => navigate('/impressum/')}
        onPhoneButtonClick={() => navigate('/contact/')}
      />

      <ScrollSpy
        anchors={[
          {
            name: 'hero',
            label: 'AGT Gun Trade'
          },
          {
            name: 'about',
            label: 'Über uns'
          },
          {
            name: 'featuredpartner-featured-products',
            label: 'Empfohlene Produkte'
          },
          {
            name: 'featuredpartner-partner',
            label: 'Partner'
          },
          {
            name: 'reviewfaq-review',
            label: 'Bewertungen'
          },
          {
            name: 'reviewfaq-faq',
            label: 'Fragen'
          }
        ]}
      />
    </>
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
  label: 'AGT Gun Trade',
  icon: 'FaHome',
  childTemplates: [],
  menu: {
    label: 'Startseite',
    type: 'app',
    order: 100
  }
}
