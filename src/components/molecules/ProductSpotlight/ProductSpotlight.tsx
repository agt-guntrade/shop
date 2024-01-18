import {Button} from '@chakra-ui/button'
import {
  Box,
  BoxProps,
  Circle,
  Flex,
  StackProps,
  Text,
  VStack
} from '@chakra-ui/layout'
import {
  getFormattedProductPrices,
  ShopifyProduct
} from '@snek-at/gatsby-theme-shopify'
import {AnimatePresence, motion} from 'framer-motion'
import {navigate} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
import React from 'react'

import {flipImage} from './style'
import {HStack, Stack} from '@chakra-ui/react'

export interface ProductshowcaseProps {
  products: ShopifyProduct[]
}

const DescriptionBox = motion<StackProps>(VStack)
const WeaponBox = motion<BoxProps>(Box)

export const ProductSpotlight = (props: ProductshowcaseProps) => {
  const products = props.products.filter(p =>
    p.metafields.some(
      m => m.namespace === 'spotlight' && m.key === 'show' && m.value === 'true'
    )
  )

  const [current, setCurrent] = React.useState(products[0])

  React.useEffect(() => setCurrent(products[0]), [])
  React.useEffect(() => {
    const interval = window.setInterval(() => {
      let indexNext = 0
      if (products.length !== products.indexOf(current) + 1) {
        indexNext = products.indexOf(current) + 1
      }
      setCurrent(products[indexNext])
    }, 10000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <Flex justifyContent="center" alignItems="flex-start">
      <VStack
        color="white"
        zIndex="1"
        h="40vh"
        mt="12"
        mb="36"
        w={{base: '300px', md: '770px', lg: '60%'}}
        alignSelf="center">
        <Stack
          h={'full'}
          gap="8"
          direction={{base: 'column', md: 'row'}}
          alignSelf="center"
          alignItems={'center'}
          justifyContent="center">
          <AnimatePresence initial={false}>
            {products.map((weapon, index) => {
              const spotlightMetafields = weapon.metafields.filter(
                ({namespace}) => namespace === 'spotlight'
              )

              const mirrorImage = spotlightMetafields.find(
                ({key, namespace}) =>
                  key === 'mirror_image' && namespace === 'spotlight'
              )

              const shouldMirrorImage = !(mirrorImage?.value === 'true')

              const productPrices = getFormattedProductPrices(weapon)

              return (
                weapon === current && (
                  <WeaponBox
                    zIndex="3"
                    key={index}
                    initial={{opacity: 0, x: -300}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, type: 'spring'}}>
                    <Box
                      height={{base: '300px', md: '450px'}}
                      width={{base: '300px', md: '450px'}}
                      mt={'-110px'}
                      css={flipImage(shouldMirrorImage)}>
                      {weapon.featuredMedia?.image && (
                        <GatsbyImage
                          objectFit="contain"
                          imgClassName="image"
                          style={{
                            height: '100%',
                            width: '100%'
                          }}
                          image={weapon.featuredMedia.image.gatsbyImageData}
                          alt={
                            weapon.featuredMedia.image.altText || weapon.title
                          }
                        />
                      )}
                    </Box>
                    <Text
                      zIndex="1"
                      transform="rotate(20deg)"
                      borderRadius="10px"
                      py="1"
                      px={{base: '1', md: '3'}}
                      fontSize={{base: '25', md: '35'}}
                      fontWeight="bold"
                      position="relative"
                      mt={{base: '-120px', md: '-190px'}}
                      w="max-content"
                      border="4px"
                      borderColor="agt.red"
                      color="agt.red"
                      userSelect="none">
                      {productPrices.priceFormatted}
                    </Text>
                  </WeaponBox>
                )
              )
            })}
          </AnimatePresence>
          <AnimatePresence>
            {products.map((weapon, index) => {
              const spotlightMetafields = weapon.metafields.filter(
                ({namespace}) => namespace === 'spotlight'
              )

              let title, description

              for (const metafield of spotlightMetafields) {
                if (metafield.key === 'title') {
                  title = metafield.value
                } else if (metafield.key === 'description') {
                  description = metafield.value
                }
              }

              return (
                current === weapon && (
                  <DescriptionBox
                    align={{base: 'center', md: 'flex-start'}}
                    minW={{base: '300px', md: '370px', lg: '60%'}}
                    direction={{base: 'row', md: 'column'}}
                    mt={{base: '14', md: '0'}}
                    w={{base: '300px', md: '370px', lg: '60%'}}
                    key={index}
                    initial={{opacity: 0, x: 300}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.25, delay: 0.33}}>
                    <VStack display={{base: 'none', md: 'block'}}>
                      <Text
                        fontWeight="bold"
                        fontSize={'4xl'}
                        casing="uppercase">
                        {title}
                      </Text>
                      <Text
                        minH={{base: 30, md: '8vw', lg: '4vw'}}
                        fontSize={'lg'}>
                        {description}
                      </Text>
                    </VStack>
                    <Button
                      w={{base: '100%', md: '50%'}}
                      ml={{base: 2, md: 0}}
                      size="lg"
                      borderRadius="5px"
                      variant="solid"
                      onClick={() => navigate(`/products/${weapon.handle}`)}>
                      Mehr davon
                    </Button>
                  </DescriptionBox>
                )
              )
            })}
          </AnimatePresence>
        </Stack>
        <Flex
          justifyContent="center"
          alignContent="center"
          position="relative"
          zIndex="10"
          mt={{base: '10', md: '20'}}
          mb={{base: '10', lg: '5'}}>
          {products.map(weapon => {
            return (
              <Circle
                key={weapon.id}
                cursor="pointer"
                size="2"
                mr="1"
                bgColor={weapon === current ? 'agt.red' : 'white'}
                onClick={() => {
                  if (weapon !== current) {
                    setCurrent(weapon)
                  }
                }}
              />
            )
          })}
        </Flex>
      </VStack>
    </Flex>
  )
}
