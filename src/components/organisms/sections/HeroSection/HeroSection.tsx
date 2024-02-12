import {Box, Container, Flex} from '@chakra-ui/react'
import {
  ShopifyProduct,
  getCollectionStructure,
  getProductTags
} from '@snek-at/gatsby-theme-shopify'
import {StaticImage} from 'gatsby-plugin-image'
import React from 'react'
import {GCImage} from '../../../../common/GCImage'

import {AccessorieShowcase} from '../../../molecules/AccessorieShowcase'
import {BulletShowcase} from '../../../molecules/BulletShowcase'
import {CategoryShowcase} from '../../../molecules/CategoryShowcase'
import {ProductSpotlight} from '../../../molecules/ProductSpotlight'

export interface CategoryProduct extends ShopifyProduct {}

export interface HeroSectionProps {
  name: string
  latestProducts: ShopifyProduct[]
  categoryProducts: ShopifyProduct[]
  spotlightProducts: ShopifyProduct[]
  noScroll?: boolean
}

export interface Categories {
  name: string
  path: string
  items: CategoryProduct[]
}

export interface Tabs {
  [name: string]: Categories
}

export const HeroSection = ({
  name,
  latestProducts,
  categoryProducts,
  spotlightProducts,
  noScroll
}: HeroSectionProps) => {
  const tabs: Tabs = {}

  categoryProducts.forEach(node => {
    const tags = getProductTags(node)

    tags.categoryTags.forEach(title => {
      const {name, path} = getCollectionStructure(title)

      if (!tabs[title]) {
        tabs[title] = {items: [], name: name || title, path: path}
      }
      tabs[title].items.push(node)
    })
  })

  return (
    <>
      <Box
        id={name}
        as="section"
        width={'full'}
        backgroundColor="#1F1F1D"
        position="relative"
        overflow="hidden">
        <GCImage
          gimg={
            <StaticImage
              src="https://i.imgur.com/8zG2Ymd.jpeg"
              alt="Banner with title and breadcrumbs"
              imgStyle={{
                position: 'absolute',
                width: '100%',
                height: '75%',
                objectFit: 'cover'
              }}
            />
          }
        />
        <Container maxW="8xl" py="6">
          <ProductSpotlight products={spotlightProducts} />
          <CategoryShowcase tabs={tabs} latestProducts={latestProducts} />
          <Flex
            mt="8"
            direction={{base: 'column-reverse', xl: 'row'}}
            width="full"
            justifyContent="center"
            alignContent="center">
            <BulletShowcase />
            <AccessorieShowcase />
          </Flex>
        </Container>
      </Box>
    </>
  )
}
