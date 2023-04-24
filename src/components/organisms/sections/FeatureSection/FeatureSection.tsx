import {
  AspectRatio,
  Box,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import {connectBlock, Field} from '@snek-at/jaen'
import React, {ReactNode} from 'react'

export interface FeatureSectionProps {
  name: string
  displayName: string
}

export interface FeatureProps {
  image: ReactNode
  heading: ReactNode
  lead: ReactNode
}

export const Feature = ({image, heading, lead}: FeatureProps) => {
  return (
    <Box
      css={{'*': {borderStyle: 'none'}}}
      h="100%"
      w="100%"
      bg={useColorModeValue('white', 'gray.700')}
      borderRadius="7px">
      <AspectRatio ratio={16 / 4} w="100%" css={{img: {objectFit: 'cover'}}}>
        <HStack>
          <Flex
            css={{img: {objectFit: 'cover'}}}
            alignItems="stretch"
            w="30%"
            h="100%">
            {image}
          </Flex>
          <Box px="1" w="90%" h="100%">
            <Text fontSize="xl" fontWeight="bold">
              {heading}
            </Text>
            <Text fontSize="md" fontWeight="semibold" color="agt.blue">
              {lead}
            </Text>
          </Box>
        </HStack>
      </AspectRatio>
    </Box>
  )
}

export const FeatureSection = ({name, displayName}: FeatureSectionProps) =>
  connectBlock(
    () => {
      return (
        <Feature
          heading={
            <Field.Text
              name="heading"
              defaultValue="Heading"
              label="Überschrift"
            />
          }
          lead={<Field.Text name="lead" defaultValue="Lead" label="Subline" />}
          image={
            <Field.Image
              name="image"
              defaultValue={
                'http://honor.ancorathemes.com/wp-content/uploads/2018/03/banner_5_bg.jpg'
              }
              label="Image"
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

export const FeatureSectionJSX = ({name, displayName}: FeatureSectionProps) => (
  <Field.Section
    as={VStack}
    props={{
      w: '100%',
      spacing: 3,
      justify: 'center'
    }}
    sectionProps={{
      w: '100%',
      h: '10%'
    }}
    name={name}
    label={displayName}
    blocks={[FeatureSection({name: `${name}-item`, displayName: displayName})]}
  />
)
