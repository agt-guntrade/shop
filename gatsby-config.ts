import dotenv from 'dotenv'
import type {GatsbyConfig} from 'gatsby'
import path from 'path'

dotenv.config()

const config: GatsbyConfig = {
  plugins: [
    {
      resolve: `gatsby-plugin-jaen`,
      options: {
        remote: {
          repository: 'agt-guntrade/shop'
        },
        zitadel: {
          organizationId: '253329432192745475',
          clientId: '252746210698395651@services',
          authority: 'https://accounts.cronit.io',
          redirectUri:
            process.env.NODE_ENV === 'production'
              ? 'https://agt.schett.net'
              : 'http://localhost:8000',
          projectIds: []
        },
        sentry: {
          org: 'cronit',
          project: 'agt-guntrade',
          dsn: 'https://c0719152fd8297c15d5a3a8b181bfdb0@sentry.cronit.io/4'
        }
      }
    },
    `gatsby-jaen-mailpress`,
    {
      resolve: '@snek-at/gatsby-plugin-scaleserp',
      options: {
        apiKey: process.env.SCALE_SERP_APIKEY,
        placeId: process.env.SCALE_SERP_GOOGLE_PLACE_ID
      }
    },
    {
      resolve: '@snek-at/gatsby-theme-shopify',
      options: {
        productPageTemplate: path.resolve(
          'src/shop-templates/ProductPageTemplate.tsx'
        ),
        collectionPageTemplate: path.resolve(
          'src/shop-templates/CollectionPageTemplate.tsx'
        ),

        productsPageTemplate: path.resolve(
          'src/shop-templates/ProductsPageTemplate.tsx'
        )
      }
    }
  ]
}

export default config
