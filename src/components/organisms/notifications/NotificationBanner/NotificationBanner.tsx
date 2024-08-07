import {
  CloseButton,
  Container,
  Icon,
  Square,
  Stack,
  Text,
  useBreakpointValue,
  useModalContext
} from '@chakra-ui/react'
import * as React from 'react'
import {FiInfo} from '@react-icons/all-files/fi/FiInfo'
import {Field} from 'jaen'

export interface NotificationBannerProps {}

export const NotificationBanner = (props: NotificationBannerProps) => {
  const {onClose} = useModalContext()

  const isMobile = useBreakpointValue({base: true, md: false})
  return (
    <Container py={{base: '4', md: '2.5'}} position="relative" maxW="8xl">
      <CloseButton
        display={{sm: 'none'}}
        position="absolute"
        right="2"
        top="2"
        onClick={onClose}
      />
      <Stack
        direction={{base: 'column', sm: 'row'}}
        justify="space-between"
        spacing={{base: '3', md: '2'}}>
        <Stack
          spacing="4"
          direction={{base: 'column', md: 'row'}}
          align={{base: 'start', md: 'center'}}>
          {!isMobile && (
            <Square size="12" bg="gray.50" borderRadius="md">
              <Icon as={FiInfo} boxSize="6" />
            </Square>
          )}
          <Stack
            direction={{base: 'column', md: 'row'}}
            spacing={{base: '0.5', md: '1.5'}}
            pe={{base: '4', sm: '0'}}>
            <Text fontWeight="medium">
              <Field.Text
                name="message"
                defaultValue={
                  'Wir haben gerade unser neues Produkt auf den Markt gebracht. Lesen Sie unsere Pressemitteilung'
                }
              />
            </Text>
          </Stack>
        </Stack>
        <Stack
          direction={{base: 'column', sm: 'row'}}
          spacing={{base: '3', sm: '2'}}
          align={{base: 'stretch', sm: 'center'}}>
          <CloseButton
            display={{base: 'none', sm: 'inline-flex'}}
            onClick={onClose}
          />
        </Stack>
      </Stack>
    </Container>
  )
}
