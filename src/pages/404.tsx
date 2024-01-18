import {PageConfig} from '@atsnek/jaen'
import {Box, Button, Heading, Text} from '@chakra-ui/react'
import {Link, PageProps} from 'gatsby'
import * as React from 'react'

// markup
const NotFoundPage: React.FC<PageProps> = props => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading display="inline-block" as="h2" size="2xl">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Seite nicht gefunden
      </Text>
      <Text color={'gray.500'} mb={6}>
        Die Seite die Sie suchen scheint nicht zu existieren
      </Text>

      <Button as={Link} to="/" variant="solid">
        Zur Startseite
      </Button>
    </Box>
  )
}

export default NotFoundPage

export {Head} from '@atsnek/jaen'

export const pageConfig: PageConfig = {
  label: '404 | AGT Gun Trade'
}
