import {Field} from '@atsnek/jaen'
import {Box, Container, Divider, Heading, HStack} from '@chakra-ui/layout'
import {Slider} from '@snek-at/uikit'
import React from 'react'

import {getThemeColor} from '../../../../common/utils'
import {Bullet} from '../../../atoms/Bullet'
import {FixedStrokeLogo} from '../../../molecules/FixedStrokeLogo'
import {ReviewCard} from '../../../molecules/ReviewCard'
import * as style from './style'

export interface ReviewItem {
  id: string
  sourceImage: string
  source: string
  rating: number
  body: string
}

export interface ReviewSectionProps {
  name: string
  googleReviews: ReviewItem[]
}

export const ReviewSection = ({name, googleReviews}: ReviewSectionProps) => {
  const reviewsForSlider = googleReviews.map((review: ReviewItem) => (
    <ReviewCard
      key={review.id}
      reviewId={review.id}
      reviewImage={review.sourceImage}
      reviewName={review.source}
      reviewRating={review.rating}
      reviewText={review.body}
    />
  ))

  return (
    <>
      <Box
        id={name}
        position="relative"
        overflow="hidden"
        color="ece8e1"
        pb="16"
        css={style.Section}>
        <Divider
          orientation="vertical"
          position="absolute"
          boxSizing="border-box"
          // w="0"
          // h="100%"
          top="0"
          left="calc(4em + 2.5vw)"
          // borderLeft="1px"
          borderColor="stroke"
          display={{base: 'none', '2xl': 'block'}}
        />
        <Divider
          orientation="horizontal"
          position="absolute"
          boxSizing="border-box"
          w={{base: '100%', '2xl': 'calc(90vw - 4em - 2.5vw)'}}
          // h="100%"
          bottom="0"
          left={{base: '0', '2xl': 'calc(4em + 2.5vw)'}}
          // borderLeft="1px"
          borderColor="stroke"
        />
        <Divider
          orientation={undefined}
          position="absolute"
          boxSizing="border-box"
          style={{transformOrigin: 'left', transform: 'rotate(330deg)'}}
          w="15vw"
          bottom="0"
          left="90vw"
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
              defaultValue="Reviews"
              color="white"
            />
            <Bullet w="unset" fontSize="xl" mt="5" mb="10" />
          </Box>
          <Slider
            flexDir="column"
            alignItems="stretch"
            w="100%"
            elementProps={{boxSize: 'none'}}>
            <HStack
              spacing="9"
              h="100%"
              py="5"
              width="max-content"
              minW="100%"
              justifyContent="center">
              {reviewsForSlider}
            </HStack>
          </Slider>
        </Container>
      </Box>
    </>
  )
}
