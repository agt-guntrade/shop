import {
  Button,
  Center,
  Container,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import React from 'react'
import {GoogleMaps} from '../../molecules/GoogleMaps'

import {FaAddressBook} from '@react-icons/all-files/fa/FaAddressBook'
import {FaEnvelopeSquare} from '@react-icons/all-files/fa/FaEnvelopeSquare'
import {FaPhoneSquare} from '@react-icons/all-files/fa/FaPhoneSquare'

import {BreadcrumbsBanner} from '../../molecules/BreadcrumbsBanner'
import {useContactModal} from '../../../services/contact'

export interface ContactTemplateProps {
  path: string
  phone: React.ReactNode
  email: React.ReactNode
  address: React.ReactNode
}

export const ContactTemplate = (props: ContactTemplateProps) => {
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
            <VStack spacing={6}>
              <Icon as={FaPhoneSquare} boxSize="16" />
              <Text fontSize="xl" fontWeight="semibold">
                {props.phone}
              </Text>
            </VStack>
          </Center>
          <Center>
            <VStack spacing={6}>
              <Icon as={FaAddressBook} boxSize="16" />
              <Text fontSize="xl" fontWeight="semibold">
                {props.address}
              </Text>
            </VStack>
          </Center>
          <Center>
            <VStack spacing={6}>
              <Icon as={FaEnvelopeSquare} boxSize="16" />
              <Text fontSize="xl" fontWeight="semibold">
                {props.email}
              </Text>
            </VStack>
          </Center>
        </SimpleGrid>
      </Container>
    </>
  )
}
