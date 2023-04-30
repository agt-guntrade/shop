import {VStack} from '@chakra-ui/layout'
import {Field} from '@snek-at/jaen'
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
  return (
    <>
      <Field.Section
        as={VStack}
        props={{
          w: '100%',
          spacing: 0,
          justify: 'center'
        }}
        sectionProps={{
          w: '100%',
          h: '100%',
          position: 'relative',
          mt: 0
        }}
        name={props.name}
        label={props.displayName}
        blocks={[
          HeroSection({...props.heroSection, anchor: 'hero'}),
          FeaturedProductsSection({
            ...props.featuredProductsSection,
            anchor: 'featured'
          }),
          FeaturedPartnerSection({
            ...props.featuredPartnerSection,
            partnerAnchor: 'partner',
            featuredAnchor: 'featured'
          }),
          PartnerSection({...props.partnerSection, anchor: 'partner'}),
          ReviewSection({...props.reviewSection, anchor: 'review'}),
          ReviewFAQSection({
            ...props.reviewFAQSection,
            reviewAnchor: 'review',
            faqAnchor: 'faq'
          }),
          FAQSection({...props.faqSection, anchor: 'faq'}),
          AboutSection({...props.aboutSection, anchor: 'about'}),
          NewsSection({...props.newsSection, anchor: 'news'})
        ]}
      />
      <SideButtons
        onMailButtonClick={() => navigate('/contact/')}
        onLocationButtonClick={() => navigate('/impressum/')}
        onPhoneButtonClick={() => navigate('/contact/')}
      />
      {/* <ScrollToTopButton onScrollToTopClick={() => null}/> */}
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
