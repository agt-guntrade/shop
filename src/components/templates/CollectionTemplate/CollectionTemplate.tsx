import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import {
  CollectionPageData,
  getCollectionStructure
} from '@snek-at/gatsby-theme-shopify'
import {Link as GatsbyLink} from 'gatsby'
import {IGatsbyImageData} from 'gatsby-plugin-image'

import React from 'react'
import {gridPadBoxes} from '../../../common/utils'
import {ContainerLayout} from '../../ContainerLayout'
import {BreadcrumbsBanner} from '../../molecules/BreadcrumbsBanner'
import {ProductSlider} from '../../molecules/ProductSlider'

const getCollectionName = (title: string) =>
  getCollectionStructure(title).name || 'No collection title'

export interface CollectionTemplateProps extends CollectionPageData {
  path: string
}

export const CollectionTemplate = ({
  path,
  shopifyCollection,
  subCollections,
  relatedProducts
}: CollectionTemplateProps) => {
  const name = getCollectionName(shopifyCollection.title)

  const emptyBoxes: Array<any> = gridPadBoxes(subCollections.nodes, 5)

  return (
    <>
      <BreadcrumbsBanner
        path={path}
        title={`${name} (${shopifyCollection.productsCount})`}
      />

      <ContainerLayout>
        <Box>
          <SimpleGrid spacing="4" minChildWidth="300px" py="8">
            <CollectionCard
              path="products"
              image={shopifyCollection.image}
              collageImages={shopifyCollection.collageImages}
              name="Alle Produkte anzeigen"
            />
            {subCollections.nodes.map((subCollection, index) => {
              const {name, path} = getCollectionStructure(
                subCollection.title,
                shopifyCollection.title
              )

              return (
                <CollectionCard
                  key={index}
                  path={path || 'products'}
                  image={subCollection.image}
                  name={name || 'No collection title'}
                  collageImages={subCollection.collageImages}
                  productsCount={subCollection.productsCount}
                />
              )
            })}
            {emptyBoxes}
          </SimpleGrid>
        </Box>
        <ProductSlider
          products={relatedProducts.nodes}
          heading="Weitere Empfehlungen"
          prefixPath={path + 'products'}
        />
      </ContainerLayout>
    </>
  )
}

interface CollectionCardProps {
  path: string
  image: {
    src: string
    altText: string | null
    gatsbyImageData?: IGatsbyImageData
  } | null
  collageImages?: string[]
  name: string
  productsCount?: number
}

const CollectionCard = ({
  path,
  image,
  collageImages,
  name,
  productsCount
}: CollectionCardProps) => {
  const images = image ? [image.src] : collageImages || []

  return (
    <LinkBox
      key={path}
      borderRadius="lg"
      overflow="hidden"
      position="relative"
      p="4"
      mb="4"
      textAlign="center"
      cursor="pointer"
      _hover={{
        transform: 'scale(1.05)',
        color: 'agt.brand'
      }}>
      <Grid
        boxSize="xs"
        templateColumns="repeat(3, 1fr)" // Adjust the number of columns as needed
        gap={2}>
        {images.slice(0, 3).map((imageUrl, index) => (
          <GridItem key={index} colSpan={1} rowSpan={1}>
            <Image
              rounded="md"
              bg="gray.200"
              src={imageUrl}
              alt={`Photo ${index + 1}`}
              boxSize="100%"
              objectFit="cover"
            />
          </GridItem>
        ))}

        {images.length < 3 &&
          [...Array(3 - images.length)].map((_, index) => (
            <GridItem key={index} colSpan={1} rowSpan={1}>
              <Box
                bg="gray.200"
                boxSize="100%"
                objectFit="cover"
                rounded="md"
              />
            </GridItem>
          ))}
      </Grid>
      <Heading as="h3" mt="4" size="lg">
        <LinkOverlay as={GatsbyLink} to={path}>
          {name}
          {productsCount !== undefined && (
            <Text as="span" color="gray.500">
              {` (${productsCount})`}
            </Text>
          )}
        </LinkOverlay>
      </Heading>
    </LinkBox>
  )
}
