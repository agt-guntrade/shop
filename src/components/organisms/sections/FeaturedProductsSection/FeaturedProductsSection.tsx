import {Button} from '@chakra-ui/button'
import {Box, Center, Container, Divider, Heading} from '@chakra-ui/layout'
import {ShopifyProduct} from '@snek-at/gatsby-theme-shopify'
import {Link as GatsbyLink} from 'gatsby'
import React, {ReactNode} from 'react'

import {getThemeColor} from '../../../../common/utils'
import {Bullet} from '../../../atoms/Bullet'
import {FixedStrokeLogo} from '../../../molecules/FixedStrokeLogo'
import {ProductGrid} from '../../../molecules/ProductGrid'
import {Field} from '@atsnek/jaen'

export interface FeaturedProductsSectionProps {
  name: string
  featuredProducts: ShopifyProduct[]
  productsPagePath: string
}

export const FeaturedProducts = ({
  name,
  featuredProducts,
  productsPagePath
}: FeaturedProductsSectionProps) => {
  return (
    <>
      <Box id={name} position="relative" overflow="hidden">
        <Divider
          orientation="horizontal"
          position="absolute"
          boxSizing="border-box"
          // w="85vw"
          // h="100%"
          top="0"
          left={{base: '0', '2xl': 'calc(4em + 2.5vw)'}}
          //left="5vw"
          borderColor="stroke"
        />
        <Divider
          orientation="vertical"
          position="absolute"
          zIndex={-1}
          // w="0"
          // h="100%"
          top="0"
          left="calc(4em + 2.5vw)"
          // borderLeft="1px"
          borderColor="stroke"
          display={{base: 'none', '2xl': 'block'}}
        />
        <Box
          w="100%"
          h="100%"
          position="absolute"
          style={{clip: 'rect(0, auto, auto, 0)'}}>
          <FixedStrokeLogo
            strokeColor={getThemeColor('stroke')}
            backgroundColor={getThemeColor('background')}
          />
        </Box>
        <Container position="relative" py="10" maxW="8xl">
          <Box textAlign="center" my="10">
            <Field.Text
              name={`${name}-heading`}
              as={Heading}
              size="2xl"
              defaultValue={'Featured Products'}
            />
            <Bullet w="unset" fontSize="xl" mt="5" mb="10" />
          </Box>
          <ProductGrid
            prefixPath={productsPagePath}
            products={featuredProducts}
            spacing="5"
            columns={{base: 2, md: 3, xl: 4}}
          />
          <Center mt="10">
            <Button
              as={GatsbyLink}
              to={productsPagePath}
              color="white"
              borderRadius="5px"
              colorScheme="agt.grayScheme"
              variant="solid"
              size="lg">
              Mehr davon
            </Button>
          </Center>
        </Container>
      </Box>
    </>
  )
}
