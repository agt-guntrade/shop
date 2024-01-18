import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  StackDivider,
  Text,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import {
  getFormattedProductPrices,
  getProductTags,
  ProductPageData,
  ShopifyProduct
} from '@snek-at/gatsby-theme-shopify'
import {GatsbyImage} from 'gatsby-plugin-image'
import React from 'react'

import {FaShare} from '@react-icons/all-files/fa/FaShare'
import {FaShoppingBasket} from '@react-icons/all-files/fa/FaShoppingBasket'

import {BreadcrumbsBanner} from '../../molecules/BreadcrumbsBanner'

import {getProductPrices, replaceHexColorsInHTML} from '../../../common/utils'

import {PhotoProvider, useAuthenticationContext} from '@atsnek/jaen'
import {PhotoView} from 'react-photo-view'
import {getSrcFromImageData} from '../../../common/get-src-from-image-data'
import {getProductMetafields} from '../../../common/getProductMetafields'
import {useBasket} from '../../../services/basket'
import {ContainerLayout} from '../../ContainerLayout'
import {ProductSlider} from '../../molecules/ProductSlider'
import {useWholesaleUser} from '../../../hooks/use-wholesale-user'

function removeLastPartOfPath(path: string) {
  let lastSlashIndex = path.lastIndexOf('/')
  if (lastSlashIndex === -1) {
    return ''
  }
  if (lastSlashIndex === path.length - 1) {
    path = path.substring(0, path.length - 1)
    lastSlashIndex = path.lastIndexOf('/')
  }
  return path.substring(0, lastSlashIndex + 1)
}

export interface ProductTemplateProps extends ProductPageData {
  path: string
  onWishlistAdd: (id: string) => void
  isOnWishList?: boolean
}

export const ProductTemplate = ({
  path,
  onWishlistAdd,
  shopifyProduct,
  relatedProducts,
  isOnWishList = false
}: ProductTemplateProps) => {
  // remove last part of path
  const prefixPath = removeLastPartOfPath(path)

  const wholesale = useWholesaleUser()

  return (
    <>
      <BreadcrumbsBanner path={path} title={shopifyProduct.title} />
      <ContainerLayout>
        <VStack spacing={12} w="100%">
          <Flex direction={{base: 'column', lg: 'row'}} w="100%">
            <Box>
              <Stack direction={{base: 'column', lg: 'row'}} spacing="14">
                <Box pos="relative" w="100%">
                  <ImageSlider
                    featuredMedia={shopifyProduct.featuredMedia}
                    media={shopifyProduct.media}
                  />
                </Box>
                <Stack
                  spacing="8"
                  w="100%"
                  position={{base: 'relative', lg: 'sticky'}}
                  top={{
                    base: '0',
                    lg: 44
                  }}
                  px={{base: 0, md: 4}}
                  m={{base: 0, md: 1}}
                  h="fit-content">
                  <ProductDetail
                    wholesale={wholesale}
                    product={shopifyProduct}
                  />
                </Stack>
              </Stack>
            </Box>
          </Flex>
        </VStack>
        <ProductSlider
          products={relatedProducts.nodes}
          heading="Weitere Empfehlungen"
          prefixPath={prefixPath}
        />
      </ContainerLayout>
    </>
  )
}

function Price({
  prices
}: {
  prices: ReturnType<typeof getFormattedProductPrices>
}) {
  const {priceFormatted, compareAtPriceFormatted} = prices

  if (compareAtPriceFormatted) {
    // strike through price and put discount price on the right side
    return (
      <HStack>
        <Text
          fontWeight="semibold"
          color="gray.600"
          textDecoration="line-through">
          {compareAtPriceFormatted}
        </Text>

        <Heading fontWeight="semibold" color="red.500">
          {priceFormatted}
        </Heading>
      </HStack>
    )
  }

  return (
    <Heading size="md" fontWeight="semibold">
      {priceFormatted}
    </Heading>
  )
}

const ProductDetail = (props: {
  wholesale: boolean
  product: ProductPageData['shopifyProduct']
}) => {
  const productMetatfields = getProductMetafields(props.product)

  const stepperStep = props.wholesale
    ? parseInt(productMetatfields.wholesale?._SU || '1')
    : parseInt(productMetatfields.details?._SU || '1')
  const minQuantity = stepperStep

  const [quantity, setQuantity] = React.useState(minQuantity)

  const prices = getProductPrices(props.product, {
    isWholesale: props.wholesale
  })

  let taxable = props.product.variants[0]?.taxable

  if (props.wholesale) {
    taxable = false
  }

  const tags = getProductTags(props.product)

  const productTags = []

  if (tags.categoryString) {
    productTags.push(tags.categoryString)
  }

  if (tags.otherString) {
    productTags.push(tags.otherString)
  }

  if (props.product.vendor !== '-') {
    productTags.push(`Hersteller: ${props.product.vendor}`)
  }

  if (props.product.productType && props.product.productType !== '-') {
    productTags.push(`Art: ${props.product.productType}`)
  }

  const basket = useBasket()

  const addProductToBasket = () => {
    basket.addProduct({
      variantId: props.product.variants[0].shopifyId,
      quantity,
      stepperQuantity: stepperStep,
      wholesalePrice: prices.wholesalePrice
    })

    setQuantity(minQuantity)
  }

  const availableForSale =
    (props.product.variants[0].price || prices.wholesalePrice) &&
    props.product.variants[0].availableForSale

  return (
    <VStack align="left" spacing="4" divider={<StackDivider />}>
      <Stack>
        <Heading as="h1">{props.product.title}</Heading>

        <Text color="gray.600">
          {tags.otherTags.map(tag => tag.split(':')[1]).join(', ')}
        </Text>

        <ProductMoreDetail description={props.product.descriptionHtml} />
      </Stack>

      {/* <Divider />

      {productTags.map((tag, index) => (
        <Box
          as="span"
          fontSize={'xs'}
          fontWeight={'hairline'}
          color="gray.600"
          mr={2}
          key={index}>
          {tag}
        </Box>
      ))} */}

      <Text fontSize="sm">
        Artikelnummer:{' '}
        <Text as="span" color="gray.600">
          {props.product.variants[0].sku || '-'}
        </Text>
      </Text>

      <Stack>
        <Stack spacing="4" mt="4">
          <HStack>
            <Price prices={prices} />

            <Text fontSize="xs" color="gray.600">
              {taxable ? 'inkl.' : 'exkl.'} USt.
            </Text>
          </HStack>

          {availableForSale ? (
            <Text color="green" fontSize="sm">
              {productMetatfields.details?.available}
            </Text>
          ) : (
            <Text color="red.500">Derzeit nicht verfügbar</Text>
          )}

          <HStack>
            <NumberInput
              size="lg"
              maxW={24}
              step={stepperStep}
              defaultValue={minQuantity}
              min={minQuantity}
              value={quantity}
              onChange={valueString => {
                setQuantity(parseInt(valueString))
              }}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Button
              // display={{
              //   base: 'none',
              //   md: 'flex'
              // }}
              size="lg"
              isDisabled={!availableForSale}
              fontWeight="semibold"
              textTransform="uppercase"
              onClick={addProductToBasket}
              leftIcon={<FaShoppingBasket />}>
              In den Warenkorb
            </Button>
          </HStack>
        </Stack>
      </Stack>

      <Flex alignItems="center" justifyContent="center" fontSize="xl">
        <Box mx="auto">
          <ShareText />
        </Box>
      </Flex>
    </VStack>
  )
}

function ShareText() {
  const value = typeof window !== 'undefined' ? window.location.href : ''

  const {hasCopied, onCopy} = useClipboard(value)

  return (
    <Center
      color={hasCopied ? 'red.500' : undefined}
      _hover={{
        color: hasCopied ? 'red.400' : 'red.300'
      }}
      verticalAlign="center"
      cursor="pointer">
      <Icon as={FaShare} mr="2" />
      <Text fontWeight="semibold" onClick={onCopy}>
        Teilen
        {hasCopied && (
          <Text ml="2" fontWeight="thin">
            (Kopiert!)
          </Text>
        )}
      </Text>
    </Center>
  )
}

type SliderMedia = ShopifyProduct['featuredMedia']

const ImageThumbnailWrapItem = (props: {
  media: SliderMedia
  active: boolean
  onClick: () => void
}) => {
  if (!props.media) {
    return null
  }

  const {gatsbyImageData, altText} = props.media.image

  return (
    <WrapItem
      boxSize={{base: '16', md: '20'}}
      onClick={props.onClick}
      cursor="pointer"
      boxShadow={props.active ? 'inset 0px 4px 0px 0px #eb1933' : 'none'}
      p={2}
      mr={2}
      mb={2}
      _hover={{
        bg: useColorModeValue('gray.300', 'gray.800')
      }}
      transition="ease-out">
      <GatsbyImage
        onDragStart={e => e.preventDefault()}
        draggable="false"
        image={gatsbyImageData}
        alt={altText || 'Product image '}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'contain',
          objectPosition: 'center'
        }}
      />
    </WrapItem>
  )
}

const ImageSlider = (props: {
  featuredMedia: SliderMedia
  media: ShopifyProduct['media']
}) => {
  const media = props.media

  return (
    <PhotoProvider maskOpacity={0.8}>
      <VStack>
        <Wrap
          overflow="hidden"
          bg={'white'}
          border="1px"
          borderColor="gray.100"
          justify="center">
          {media.map((media, index) => (
            <PhotoView
              key={index}
              src={getSrcFromImageData(media.image.gatsbyImageData)}>
              <Box cursor="zoom-in">
                <GatsbyImage
                  image={media.image.gatsbyImageData}
                  alt={media.image.altText || 'Product Image'}
                  style={{
                    height: '100%',
                    width: '100%'
                  }}
                  objectFit="contain"
                />
              </Box>
            </PhotoView>
          ))}
        </Wrap>
      </VStack>
    </PhotoProvider>
  )
}

const ProductMoreDetail = (props: {description: string}) => {
  const color = useColorModeValue('#000000', '#ffffff')

  const html = replaceHexColorsInHTML(props.description, '#000000', color)

  return (
    <Box py="8">
      <Box dangerouslySetInnerHTML={{__html: html}} />
    </Box>
  )
}
