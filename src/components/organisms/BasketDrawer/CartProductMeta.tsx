import {
  Box,
  Image,
  Stack,
  Text,
  useColorModeValue as mode
} from '@chakra-ui/react'

export interface CartProductMetaProps {
  name: string
  description: string
  image: string
}

export const CartProductMeta = (props: CartProductMetaProps) => {
  const {image, name, description} = props
  return (
    <Stack direction="row" spacing="5" width="full">
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={image}
        alt={name}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium" noOfLines={1}>
            {name}
          </Text>
          <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
            {description}
          </Text>
        </Stack>
      </Box>
    </Stack>
  )
}
