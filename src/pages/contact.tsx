import {Field} from 'jaen'
import {
  Button,
  Center,
  Container,
  Icon,
  SimpleGrid,
  Stack,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import {FaAddressBook} from '@react-icons/all-files/fa/FaAddressBook'
import {FaEnvelopeSquare} from '@react-icons/all-files/fa/FaEnvelopeSquare'
import {FaPhoneSquare} from '@react-icons/all-files/fa/FaPhoneSquare'
import {graphql, PageProps} from 'gatsby'
import React from 'react'

import {BreadcrumbsBanner} from '../components/molecules/BreadcrumbsBanner'
import {GoogleMaps} from '../components/molecules/GoogleMaps'
import {useContactModal} from '../services/contact'

const ContactPage: React.FC<PageProps> = props => {
  const contact = useContactModal()

  return (
    <>
      <BreadcrumbsBanner path={props.path} title="Kontakt" />
      <Container
        as="section"
        maxW="8xl"
        pt="6"
        id="featuredproducts"
        bg={useColorModeValue('white', 'gray.700')}
        borderWidth="1px"
        my={{base: 4, md: 8}}
        px={4}
        py={4}
        borderRadius="lg">
        <Stack spacing="4">
          <Button
            size="lg"
            onClick={() => {
              contact.onOpen()
            }}>
            Kontaktieren Sie uns
          </Button>
          <GoogleMaps src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.793548439696!2d13.482410015651524!3d48.21059237922942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477414f48eca0575%3A0x95a37c9b5dc7ef8e!2sWildfellnerstra%C3%9Fe%2022%2F1%2C%204910%20Ried%20im%20Innkreis!5e0!3m2!1sen!2sat!4v1682348281282!5m2!1sen!2sat" />
          <SimpleGrid
            spacing="40px"
            py={8}
            columns={[1, 1, 1, 3]}
            bg="agt.gray"
            color="white">
            <Center>
              <a href="tel:+43 676 6510977">
                <VStack spacing={6}>
                  <Icon as={FaPhoneSquare} boxSize="16" />

                  <Field.Text
                    name="phone"
                    defaultValue={'+43 (0) 676 6510977'}
                    fontSize="xl"
                    fontWeight="semibold"
                  />
                </VStack>
              </a>
            </Center>
            <Center>
              <VStack spacing={6}>
                <Icon as={FaAddressBook} boxSize="16" />

                <Field.Text
                  name="address"
                  defaultValue={
                    'In der Wildfellnerstraße 22/14910 Ried im Innkreis'
                  }
                  fontSize="xl"
                  fontWeight="semibold"
                />
              </VStack>
            </Center>
            <Center>
              <a href="mailto:info@agt-guntrade.at">
                <VStack spacing={6}>
                  <Icon as={FaEnvelopeSquare} boxSize="16" />

                  <Field.Text
                    name="email"
                    defaultValue={'info@agt-guntrade.at'}
                    fontSize="xl"
                    fontWeight="semibold"
                  />
                </VStack>
              </a>
            </Center>
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  )
}

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default ContactPage

export {Head} from 'jaen'
