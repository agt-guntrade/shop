import {Box, Container, Divider, Heading, Stack} from '@chakra-ui/layout'
import {useColorModeValue} from '@chakra-ui/react'
import {connectBlock, Field} from '@snek-at/jaen'
import React, {ReactNode} from 'react'

import {getThemeColor} from '../../../../common/utils'
import {Bullet} from '../../../atoms/Bullet'
import {ContactForm} from '../../../molecules/ContactForm'
import {FixedStrokeLogo} from '../../../molecules/FixedStrokeLogo'
import {FAQAccordionSectionJSX} from '../FAQAccordionSection'

export interface FAQSectionProps {
  anchor?: string
  name: string
  displayName: string
}

export interface FAQProps {
  anchor?: string
  bg?: string
  heading: ReactNode
  faqheading: ReactNode
  contactheading: ReactNode
  accordionsection: ReactNode
}

export const FAQ = ({
  anchor,
  heading,
  faqheading,
  contactheading,
  accordionsection,
  bg
}: FAQProps) => {
  return (
    <Box
      id={anchor}
      w="full"
      position="relative"
      overflow="hidden"
      bg={bg}
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
          <Heading color="white" size="2xl">
            {heading}
          </Heading>
          <Bullet color="agt.yellow" w="unset" fontSize="xl" mt="5" mb="10" />
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
            <Heading mb="5" color="white">
              {faqheading}
            </Heading>
            {accordionsection}
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
            <Heading mb="5" as="h3">
              {contactheading}
            </Heading>
            <ContactForm
              requestOptions={['Option A', 'Option B', 'Option C']}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export const FAQSection = ({anchor, name, displayName}: FAQSectionProps) =>
  connectBlock(
    () => {
      return (
        <FAQ
          anchor={anchor}
          bg="agt.darkbackground"
          heading={
            <Field.Text
              name="heading"
              defaultValue="Fragen"
              label="Überschrift"
            />
          }
          faqheading={
            <Field.Text
              name="faqheading"
              defaultValue="Häufig gestellte Fragen"
              label="Überschrift"
            />
          }
          contactheading={
            <Field.Text
              name="contactheading"
              defaultValue="Jetzt Anfragen"
              label="Überschrift"
            />
          }
          accordionsection={
            <FAQAccordionSectionJSX name="faq" displayName="Frage" />
          }
        />
      )
    },
    {
      name: name,
      label: displayName
    }
  )

export const FAQSectionJSX = ({name, displayName, anchor}: FAQSectionProps) => (
  <Field.Section
    name={name}
    label={displayName}
    blocks={[FAQSection({name: `${name}-item`, anchor, displayName})]}
  />
)
