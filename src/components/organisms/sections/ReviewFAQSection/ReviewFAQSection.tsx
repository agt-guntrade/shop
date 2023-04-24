import React, {ReactNode} from 'react'
import {Divider, Box} from '@chakra-ui/layout'
import {Field, connectBlock} from '@snek-at/jaen'

import {getThemeColor} from '../../../../common/utils'
import {ParallaxBackground} from '../../../molecules/ParallaxBackground'
import {Review, ReviewItem} from '../ReviewSection/ReviewSection'
import {FAQAccordionSectionJSX} from '../FAQAccordionSection'
import {FAQ} from '../FAQSection/FAQSection'

export interface ReviewFAQSectionProps {
  name: string
  displayName: string
  reviewAnchor?: string
  faqAnchor?: string
  googleReviews: ReviewItem[]
}

export interface ReviewFAQProps {
  reviewAnchor?: string
  faqAnchor?: string
  googleReviews: ReviewItem[]
  reviewHeading: ReactNode
  faqHeading: ReactNode
  faqFaqheading: ReactNode
  contactHeading: ReactNode
  accordionsection: ReactNode
}

export const ReviewFAQ = ({
  reviewAnchor,
  faqAnchor,
  reviewHeading,
  faqHeading,
  faqFaqheading,
  contactHeading,
  googleReviews,
  accordionsection
}: ReviewFAQProps) => {
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
      <Review
        anchor={reviewAnchor}
        heading={reviewHeading}
        googleReviews={googleReviews}
      />
      <FAQ
        anchor={faqAnchor}
        heading={faqHeading}
        faqheading={faqFaqheading}
        contactheading={contactHeading}
        accordionsection={accordionsection}
      />
    </Box>
  )
}

export const ReviewFAQSection = ({
  name,
  displayName,
  reviewAnchor,
  faqAnchor,
  googleReviews
}: ReviewFAQSectionProps) =>
  connectBlock(
    () => {
      return (
        <>
          <ReviewFAQ
            reviewAnchor={reviewAnchor}
            faqAnchor={faqAnchor}
            reviewHeading={
              <Field.Text
                name="heading"
                defaultValue="Bewertungen"
                label="Überschrift"
              />
            }
            faqHeading={
              <Field.Text
                name="heading"
                defaultValue="Fragen"
                label="Überschrift"
              />
            }
            faqFaqheading={
              <Field.Text
                name="faqheading"
                defaultValue="Häufig gestellte Fragen"
                label='Überschrift "FAQ"'
              />
            }
            contactHeading={
              <Field.Text
                name="contactheading"
                defaultValue="Jetzt Anfragen"
                label="Überschrift"
              />
            }
            accordionsection={
              <FAQAccordionSectionJSX name="faq" displayName="Frage" />
            }
            googleReviews={googleReviews}
          />
        </>
      )
    },
    {
      name: name,
      label: displayName
    }
  )

export const ReviewFAQSectionJSX = ({
  name,
  displayName,
  faqAnchor,
  reviewAnchor,
  googleReviews
}: ReviewFAQSectionProps) => (
  <Field.Section
    name={name}
    label={displayName}
    blocks={[
      ReviewFAQSection({
        name: `${name}-item`,
        displayName,
        faqAnchor,
        reviewAnchor,
        googleReviews
      })
    ]}
  />
)
