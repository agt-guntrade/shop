import {VStack} from '@chakra-ui/layout'
import {Field} from '@atsnek/jaen'
import {navigate} from 'gatsby'
import React from 'react'

import {SideButtons} from '../../molecules/buttons/SideButtons'
import {ScrollSpy} from '../../molecules/ScrollSpy'
// import {StickyStrokeLogo} from '../../molecules/StickyStrokeLogo'
import {
  AboutSection,
  AboutSectionProps,
  FAQSection,
  FAQSectionProps,
  FeaturedPartnerSection,
  FeaturedPartnerSectionProps,
  FeaturedProductsSection,
  FeaturedProductsSectionProps,
  HeroSection,
  HeroSectionProps,
  NewsSection,
  NewsSectionProps,
  PartnerSection,
  PartnerSectionProps,
  ReviewFAQSection,
  ReviewFAQSectionProps,
  ReviewSection,
  ReviewSectionProps
} from '../../organisms/sections'
import {useContactModal} from '../../../services/contact'

export interface HomeTemplateProps {
  name: string
  displayName: string
  aboutSection: AboutSectionProps
  faqSection: FAQSectionProps
  heroSection: HeroSectionProps
  featuredProductsSection: FeaturedProductsSectionProps
  featuredPartnerSection: FeaturedPartnerSectionProps
  reviewSection: ReviewSectionProps
  reviewFAQSection: ReviewFAQSectionProps
  newsSection: NewsSectionProps
  partnerSection: PartnerSectionProps
  // sideButtons?: SideButtonsProps
  // scrollToTopButton?: ScrollToTopButtonProps
  // scrollSpy?: ScrollSpyProps
}

export const HomeTemplate = (props: HomeTemplateProps) => {
  const contact = useContactModal()

  return (
    <>
      <HeroSection {...props.heroSection} anchor="hero" />

      <AboutSection {...props.aboutSection} anchor="about" />

      {/* <FeaturedProductsSection
        {...props.featuredProductsSection}
        anchor="featured"
      /> */}

      <FeaturedPartnerSection
        {...props.featuredPartnerSection}
        partnerAnchor="partner"
        featuredAnchor="featured"
      />

      <ReviewFAQSection
        {...props.reviewFAQSection}
        reviewAnchor="review"
        faqAnchor="faq"
      />

      <SideButtons
        onMailButtonClick={() => contact.onOpen()}
        onLocationButtonClick={() => navigate('/impressum/')}
        onPhoneButtonClick={() => navigate('/contact/')}
      />

      <ScrollSpy
        anchors={[
          {
            name: 'hero',
            label: 'AGT Gun Trade'
          },
          {
            name: 'about',
            label: 'Über uns'
          },
          {
            name: 'featured',
            label: 'Empfohlene Produkte'
          },
          {
            name: 'partner',
            label: 'Partner'
          },
          {
            name: 'review',
            label: 'Bewertungen'
          },
          {
            name: 'faq',
            label: 'Fragen'
          },
          {
            name: 'news',
            label: 'Neuigkeiten'
          }
        ]}
      />
    </>
  )
}
