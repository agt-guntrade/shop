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
              ? 'https://ried.agt-guntrade.at'
              : 'http://localhost:8000',
          projectIds: []
        },
        sentry: {
          org: 'cronit',
          project: 'agt-guntrade',
          dsn: 'https://80e0097af1f71b1df45d4e3ec519912e@sentry.cronit.io/6'
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
