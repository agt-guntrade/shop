import dotenv from 'dotenv'
import type {GatsbyConfig} from 'gatsby'
import path from 'path'

dotenv.config()

const config: GatsbyConfig = {
  plugins: [
    {
      resolve: `gatsby-plugin-jaen`,
      options: {
        pylonUrl: 'https://pylons.cronit.io/jaen/graphql',
        remote: {
          repository: 'agt-guntrade/shop'
        },
        zitadel: {
          organizationId: '277049780788535300',
          clientId: '277049969163182084@shop',
          authority: 'https://accounts2.cronit.io',
          redirectUri:
            process.env.NODE_ENV === 'production'
              ? 'https://ried.agt-guntrade.at'
              : 'http://localhost:8000',
          projectIds: ['270250070505431044']
        },
        sentry: {
          org: 'cronit',
          project: 'agt-guntrade-shop',
          dsn: 'https://9c5258c9df2e385800a582e94f6068ea@sentry.cronit.io/13'
        }
      }
    },
    {
      resolve: `gatsby-jaen-mailpress`,
      options: {
        pylonUrl: 'https://pylons.cronit.io/mailpress/graphql'
      }
    },
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
