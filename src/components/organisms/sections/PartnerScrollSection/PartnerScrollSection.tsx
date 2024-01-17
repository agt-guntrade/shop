import React, {ReactNode} from 'react'
import {
  Box,
  Flex,
  Text,
  HStack,
  VStack,
  AspectRatio,
  useColorModeValue
} from '@chakra-ui/react'
import {Field, connectBlock} from '@atsnek/jaen'
import {StaticImage} from 'gatsby-plugin-image'
import {Slider} from '@snek-at/uikit'

export interface PartnerScrollSectionProps {
  name: string
  displayName: string
}

export interface PartnerScrollProps {
  image: ReactNode
}

export const PartnerScroll = ({image}: PartnerScrollProps) => {
  return (
    <Box
      w="280px"
      h="200px"
      p="5"
      borderRadius="5px"
      border="1px"
      borderColor="border"
      bg={useColorModeValue('white', 'gray.700')}>
      {image}
    </Box>
  )
}

export const PartnerScrollSection = ({
  name,
  displayName
}: PartnerScrollSectionProps) =>
  connectBlock(
    () => {
      return (
        <PartnerScroll
          image={
            <Field.Image
              name="image"
              defaultValue={undefined}
              objectFit="contain"
            />
          }
        />
      )
    },
    {
      name: name,
      label: displayName
    }
  )

export const PartnerScrollSectionJSX = ({
  name,
  displayName
}: PartnerScrollSectionProps) => (
  <Slider
    flexDir="column"
    alignItems="stretch"
    w="100%"
    elementProps={{boxSize: 'none'}}>
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
      label="Partner Liste"
      blocks={[PartnerScrollSection({name: `${name}-item`, displayName})]}
    />
  </Slider>
)
