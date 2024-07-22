import {Field} from 'jaen'
import {Box, Container, Divider, HStack, Heading} from '@chakra-ui/layout'
import {Slider} from '@snek-at/uikit'
import React from 'react'

import {getThemeColor} from '../../../../common/utils'
import {Bullet} from '../../../atoms/Bullet'
import {FixedStrokeLogo} from '../../../molecules/FixedStrokeLogo'
import {PartnerScrollSection} from '../PartnerScrollSection'
import * as style from './style'

export interface PartnerSectionProps {
  name: string
}

export const PartnerSection = ({name}: PartnerSectionProps) => {
  return (
    <Box
      id={name}
      position="relative"
      overflow="hidden"
      pb="10"
      // pt="6"
      css={style.Section}>
      {/* <Box position="absolute" top="0" bg="red" boxSize="300px"/> */}
      <Divider
        orientation="horizontal"
        position="absolute"
        boxSizing="border-box"
        // w="85vw"
        // h="100%"
        top="0"
        left={{base: '0', '2xl': 'calc(4em + 2.5vw)'}}
        //left="5vw"
        borderColor="stroke"
      />
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
          backgroundColor={getThemeColor('background')}
        />
      </Box>
      <Container position="relative" py="10" maxW="8xl">
        <Box textAlign="center" my="10">
          <Field.Text
            as={Heading}
            name={`${name}-heading`}
            size="2xl"
            defaultValue="Partner"
          />
          <Bullet w="unset" fontSize="xl" mt="5" mb="10" />
        </Box>
        <Slider
          flexDir="column"
          alignItems="stretch"
          w="100%"
          elementProps={{boxSize: 'none'}}>
          <Field.Section
            as={HStack}
            props={{
              h: '100%',
              py: '5',
              spacing: '5',
              width: 'max-content',
              minW: '100%',
              justifyContent: 'center'
            }}
            sectionProps={{
              h: '100%'
              // w: '100%'
            }}
            name="partner"
            label="Partner"
            blocks={[
              PartnerScrollSection({
                name: `${name}-item`,
                displayName: 'Partner Logo'
              })
            ]}
          />
        </Slider>
      </Container>
    </Box>
  )
}
