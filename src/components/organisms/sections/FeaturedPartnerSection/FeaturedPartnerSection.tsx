import {Box, Text} from '@chakra-ui/layout'
import {ShopifyProduct} from '@snek-at/gatsby-theme-shopify'
import React from 'react'

import {getThemeColor} from '../../../../common/utils'
import {FeaturedProducts} from '../FeaturedProductsSection/FeaturedProductsSection'
import {PartnerSection} from '../PartnerSection/PartnerSection'

export interface FeaturedPartnerSectionProps {
  name: string
  featuredProducts: ShopifyProduct[]
  productsPagePath: string
}

export const FeaturedPartnerSection = ({
  name,
  featuredProducts,
  productsPagePath
}: FeaturedPartnerSectionProps) => {
  return (
    <Box position={'relative'}>
      <Box
        position="absolute"
        pl="calc(4em + 3.5vw)"
        pt="10%"
        h="100%"
        w="100%"
        overflow="hidden">
        <Text
          fontSize="calc(20em + 3vw)"
          fontWeight="bold"
          color="background"
          style={{WebkitTextStroke: `1px ${getThemeColor('stroke')}`}}
          display={{base: 'none', xl: 'block'}}>
          <span>Si vis pacem para bellum</span>
        </Text>
      </Box>
      <FeaturedProducts
        name={name + '-featured-products'}
        featuredProducts={featuredProducts}
        productsPagePath={productsPagePath}
      />
      <PartnerSection name={name + '-partner'} />
    </Box>
  )
}
