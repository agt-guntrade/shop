import {Box, Container, Divider, Heading, Stack} from '@chakra-ui/layout'
import {useColorModeValue, Text, Button} from '@chakra-ui/react'
import {connectBlock, Field} from '@atsnek/jaen'
import React, {ReactNode} from 'react'

import {getThemeColor} from '../../../../common/utils'
import {Bullet} from '../../../atoms/Bullet'
import {FixedStrokeLogo} from '../../../molecules/FixedStrokeLogo'
import {FAQAccordionSection} from '../FAQAccordionSection'
import {useContactModal} from '../../../../services/contact'

export interface FAQSectionProps {
  name: string
}

export const FAQSection = ({name}: FAQSectionProps) => {
  const contact = useContactModal()

  return (
    <Box
      id={name}
      w="full"
      position="relative"
      overflow="hidden"
      color="ece8e1">
      <Divider
        orientation="vertical"
        position="absolute"
        top="0"
        left="calc(4em + 2.5vw)"
        borderColor="stroke"
        display={{base: 'none', '2xl': 'block'}}
      />
      <Box
        w="100%"
        h="100%"
        position="absolute"
        style={{clip: 'rect(0, auto, auto, 0)'}}>
        <FixedStrokeLogo
          strokeColor={getThemeColor('stroke')}
          backgroundColor={getThemeColor('agt.darkbackground')}
        />
      </Box>
      <Container position="relative" py="10" maxW="8xl">
        <Box textAlign="center" my="10">
          <Field.Text
            as={Heading}
            name={`${name}-heading`}
            size="2xl"
            defaultValue="FAQ"
            color="white"
          />

          <Bullet w="unset" fontSize="xl" mt="5" mb="10" />
        </Box>
        <Stack
          direction={{base: 'column', lg: 'row'}}
          h="100%"
          justifyContent="center"
          alignItems="center"
          spacing={9}>
          <Box
            w={{base: '100%', lg: '50%'}}
            css={{'*': {borderStyle: 'none'}}}
            h="100%">
            <Field.Text
              as={Heading}
              name={`${name}-faqheading`}
              mb="5"
              color="white"
            />

            <FAQAccordionSection name="faq" displayName="Frage" />
          </Box>
          <Box
            w={{base: '100%', lg: '50%'}}
            bg={useColorModeValue('white', 'gray.700')}
            boxSizing="border-box"
            border="1px"
            borderColor="border"
            borderRadius="5px"
            p="10"
            h="100%">
            <Field.Text
              as={Heading}
              name={`${name}-contactheading`}
              mb="5"
              asAs="h3"
            />

            <Field.Text name={`${name}-contacttext`} mb="5" />

            <Button
              size="lg"
              onClick={() => {
                contact.onOpen()
              }}>
              Kontaktieren
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
