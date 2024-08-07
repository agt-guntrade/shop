//#region > Imports
import {
  AspectRatio,
  Badge,
  Box,
  Flex,
  Heading,
  Text,
  VStack
} from '@chakra-ui/layout'
import {useColorModeValue} from '@chakra-ui/react'
import {Field} from 'jaen'
import React from 'react'

import * as style from './style'
//#endregion

//#region > Interfaces
// export interface NewsCardProps {
//   page: IJaenPage
// }
//#endregion

//#region > Functions
export const NewsCard = () => {
  return (
    <VStack
      bg={useColorModeValue('white', 'gray.700')}
      // minH="200px"
      borderRadius="5px"
      // boxShadow="lg"
      overflow="hidden"
      maxW="sm"
      position="relative"
      border="1px"
      borderColor="border"
      // divider={<StackDivider />}
      css={style.CardStyle}>
      <AspectRatio
        ratio={16 / 10}
        boxSize="full"
        css={{img: {objectFit: 'cover'}}}>
        <Box position="relative">
          <Flex
            css={{img: {objectFit: 'cover'}}}
            alignItems="stretch"
            w="100%"
            h="100%">
            {/* <Field.Image
                name="imagetopleft"
                width="100%"
                height="100%"
                defaultValue={
                  <StaticImage
                    src="http://honor.ancorathemes.com/wp-content/uploads/2018/03/banner_5_bg.jpg"
                    alt="Placeholder image for about feature"
                  />
                }
                style={{
                  width: "100%",
                  height: "100%"
                }}
              /> */}
          </Flex>
        </Box>
      </AspectRatio>
      <VStack p="5" alignItems="start">
        {/* <Badge
          position="absolute"
          top="0"
          left="0"
          color={'agt.blue'}
          fontWeight={600}
          fontSize={'sm'}
          letterSpacing={1.1}>
          <Field.Text name="highlight" defaultValue="Aktion" />
        </Badge> */}
        <Flex position="absolute" top="0" left="0" right="0" p={2}>
          <Badge
            variant="solid"
            fontSize="sm"
            fontWeight="semibold"
            rounded="md"
            px={2}
            mr={2}
            color="white"
            bgColor="agt.blue"
            textTransform="none">
            <Field.Text name="tag" defaultValue="Aktion" label="Tag" />
          </Badge>
        </Flex>
        <Field.Text
          as={Heading}
          name="heading"
          defaultValue="Titel"
          label="Titel"
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'2xl'}
          fontFamily={'body'}
        />
        <Field.Text
          name="description"
          defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam voluptua. At vero eos et accusam et
    justo duo dolores et ea rebum."
          color={'gray.500'}
          noOfLines={4}
        />
      </VStack>
    </VStack>
  )
}
//#endregion
