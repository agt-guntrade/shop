import {SearchIcon} from '@chakra-ui/icons'
import {
  Box,
  Button,
  ButtonProps,
  HStack,
  Kbd,
  Text,
  useColorModeValue,
  VisuallyHidden
} from '@chakra-ui/react'
import * as React from 'react'

import {useSearch} from '../../../services/search'

export interface SearchbarProps {}

export const Searchbar = (props: ButtonProps) => {
  const search = useSearch()

  return (
    <Button
      variant="ghost"
      w="full"
      flex="1"
      type="button"
      lineHeight="1.2"
      bg={useColorModeValue('white', 'gray.700')}
      whiteSpace="nowrap"
      display={'flex'}
      alignItems="center"
      color="gray.400"
      py="3"
      px="4"
      outline="0"
      _focus={{shadow: 'outline'}}
      shadow="base"
      rounded="md"
      onClick={search.onOpen}>
      <SearchIcon />
      <HStack w="full" mx="3" spacing="4px">
        <Text textAlign="left" flex="1">
          Finde Artikel
        </Text>
        <HStack spacing="4px">
          <VisuallyHidden>Drücke</VisuallyHidden>
          <Kbd color="gray.500" rounded="2px">
            <Box as="abbr" title={'Strg'} textDecoration="none !important">
              {'Strg'}
            </Box>
          </Kbd>
          <VisuallyHidden>und</VisuallyHidden>
          <Kbd color="gray.500" rounded="2px">
            K
          </Kbd>
          <VisuallyHidden> zum suchen</VisuallyHidden>
        </HStack>
      </HStack>
    </Button>
  )
}

export default Searchbar
