import dotenv from 'dotenv'
import type {GatsbyConfig} from 'gatsby'
import path from 'path'
import {JaenSource} from 'jaen-utils'
import {IJaenPage} from '@snek-at/jaen'

import {site} from './jaen-data/internal.json'

dotenv.config()

JaenSource.jaenData.read()
const siteUrl = JaenSource.jaenData.internal.siteUrl

const config: GatsbyConfig = {
  siteMetadata: site.siteMetadata,
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/jaen/admin`, `/_`],
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
          }`,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: {nodes: allPages}
        }: {
          allSitePage: {nodes: IJaenPage[]}
        }) => {
          return allPages.map(page => {
            return {...page}
          })
        },
        serialize: ({path, modifiedGmt}: any) => {
          return {
            url: path,
            lastmod: modifiedGmt
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-jaen`,
      options: {
        snekResourceId: `6ce49cab-c6bf-4b68-853b-2e7d96b859bf`
      }
    },
    '@chakra-ui/gatsby-plugin',
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
          'src/templates/ProductPageTemplate.tsx'
        ),
        collectionPageTemplate: path.resolve(
          'src/templates/CollectionPageTemplate.tsx'
        ),

        productsPageTemplate: path.resolve(
          'src/templates/ProductsPageTemplate.tsx'
        )
      }
    }
  ]
}

export default config
