import React, {ReactNode} from 'react'
import {Divider, Box} from '@chakra-ui/layout'
import {Field, connectBlock} from '@atsnek/jaen'

import {getThemeColor} from '../../../../common/utils'
import {ParallaxBackground} from '../../../molecules/ParallaxBackground'
import {ReviewSection, ReviewItem} from '../ReviewSection/ReviewSection'
import {FAQSection} from '../FAQSection/FAQSection'

export interface ReviewFAQSectionProps {
  name: string

  googleReviews: ReviewItem[]
}

export const ReviewFAQSection = ({
  name,
  googleReviews
}: ReviewFAQSectionProps) => {
  return (
    <Box position="relative">
      <ParallaxBackground
        strokeColor={getThemeColor('stroke')}
        backgroundColor={getThemeColor('agt.darkbackground')}
        offset={200}
      />
      <Divider
        orientation="horizontal"
        position="absolute"
        boxSizing="border-box"
        borderColor="stroke"
        top="0"
        left="0"
      />
      <Divider
        orientation="horizontal"
        position="absolute"
        boxSizing="border-box"
        borderColor="stroke"
        bottom="0"
        left="0"
      />
      <ReviewSection name={name + '-review'} googleReviews={googleReviews} />
      <FAQSection name={name + '-faq'} />
    </Box>
  )
}
