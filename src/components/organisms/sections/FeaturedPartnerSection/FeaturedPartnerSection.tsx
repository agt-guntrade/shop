import React, {ReactNode} from 'react'
import {HStack, Text, Box} from '@chakra-ui/layout'
import {useColorModeValue} from '@chakra-ui/react'
import {Link as GatsbyLink, navigate} from 'gatsby'
import {Button} from '@chakra-ui/button'
import {ShopifyProduct} from '@snek-at/gatsby-theme-shopify'
import {Field, connectBlock} from '@snek-at/jaen'

import {ProductCard} from '../../../molecules/ProductCard'
import {Bullet} from '../../../atoms/Bullet'
import {StickyStrokeLogo} from '../../../molecules/StickyStrokeLogo'
import {getThemeColor} from '../../../../common/utils'
import {FeaturedProducts} from '../FeaturedProductsSection/FeaturedProductsSection'
import {Partner} from '../PartnerSection/PartnerSection'
import {PartnerScrollSection} from '../PartnerScrollSection'
import * as style from './style'

export interface FeaturedPartnerSectionProps {
  name: string
  displayName: string
  featuredAnchor?: string
  partnerAnchor?: string
  featuredProducts: ShopifyProduct[]
  productsPagePath?: string
}

export interface FeaturedPartnerProps {
  featuredAnchor?: string
  partnerAnchor?: string
  featuredProducts: ShopifyProduct[]
  productsPagePath?: string
  featuredHeading: ReactNode
  partnerHeading: ReactNode
  partnerscrollsections: ReactNode
}

export const FeaturedPartner = ({
  featuredAnchor,
  partnerAnchor,
  featuredHeading,
  partnerHeading,
  featuredProducts,
  productsPagePath,
  partnerscrollsections
}: FeaturedPartnerProps) => {
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
        anchor={featuredAnchor}
        heading={featuredHeading}
        featuredProducts={featuredProducts}
        productsPagePath={productsPagePath}
      />
      <Partner
        anchor={partnerAnchor}
        heading={partnerHeading}
        partnerscrollsections={partnerscrollsections}
      />
    </Box>
  )
}

export const FeaturedPartnerSection = ({
  name,
  displayName,
  featuredAnchor,
  partnerAnchor,
  featuredProducts,
  productsPagePath = '/products'
}: FeaturedPartnerSectionProps) =>
  connectBlock(
    () => {
      return (
        <>
          <FeaturedPartner
            featuredAnchor={featuredAnchor}
            featuredHeading={
              <Field.Text
                name="featuredheading"
                defaultValue={'Empfohlene Produkte'}
                label="Überschrift"
              />
            }
            featuredProducts={featuredProducts}
            productsPagePath={productsPagePath}
            partnerAnchor={partnerAnchor}
            partnerHeading={
              <Field.Text
                name="partnerheading"
                defaultValue={'Partner'}
                label="Überschrift"
              />
            }
            partnerscrollsections={
              <Field.Section
                as={HStack}
                props={{
                  h: '100%',
                  py: '5',
                  spacing: '5',
                  width: 'max-content',
                  minW: '100%',
                  justifyContent: 'center'
                }}
                sectionProps={{
                  h: '100%'
                  // w: '100%'
                }}
                name="partner"
                label="Partner"
                blocks={[
                  PartnerScrollSection({
                    name: `${name}-item`,
                    displayName: 'Partner Logo'
                  })
                ]}
              />
            }
          />
        </>
      )
    },
    {
      name: name,
      label: displayName
    }
  )

export const FeaturedProductsSectionJSX = ({
  name,
  displayName,
  featuredAnchor,
  partnerAnchor,
  featuredProducts,
  productsPagePath
}: FeaturedPartnerSectionProps) => (
  <Field.Section
    name={name}
    label={displayName}
    blocks={[
      FeaturedPartnerSection({
        name: `${name}-item`,
        featuredAnchor,
        partnerAnchor,
        displayName,
        featuredProducts,
        productsPagePath
      })
    ]}
  />
)
