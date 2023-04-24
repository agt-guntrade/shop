import React from 'react'
import {Heading} from '@chakra-ui/react'

import {ContainerLayout} from '../../ContainerLayout'
import {BreadcrumbsBanner} from '../../molecules/BreadcrumbsBanner'
import {GoogleMaps} from '../../molecules/GoogleMaps'

export interface ImprintContactProps {
  heading: React.ReactNode
  contact: React.ReactNode
  // city: React.ReactNode
  // zip_code: React.ReactNode
  // address: React.ReactNode
  // telephone: React.ReactNode
  // telefax: React.ReactNode
  // whatsapp_telephone: React.ReactNode
  // whatsapp_contactline: React.ReactNode
  // email: React.ReactNode
  // copyrightholder: React.ReactNode
}

const ImprintContact = (props: ImprintContactProps) => {
  return (
    <>
      <Heading as="h4" size="md" mt="4">
        {props.heading}
      </Heading>
      {props.contact}
      {/*
      {props.city}
      {props.zip_code}
      {props.address}
      {props.telephone}
      {props.telefax}
      {props.whatsapp_telephone}
      {props.whatsapp_contactline}
      {props.email}
      {props.copyrightholder}
      */}
    </>
  )
}

interface ImprintLegalProps {
  heading: React.ReactNode
  legal: React.ReactNode
  // vat_number: React.ReactNode
  // tax_id: React.ReactNode
  // court_of_registry: React.ReactNode
  // place_of_registry: React.ReactNode
  // trade_register_number: React.ReactNode
  // ownership: React.ReactNode
}

const ImprintLegal = (props: ImprintLegalProps) => {
  return (
    <>
      <Heading as="h4" size="md" mt="4" mb="2">
        {props.heading}
      </Heading>
      {props.legal}
      {/*
      {props.vat_number}
      {props.tax_id}
      {props.court_of_registry}
      {props.place_of_registry}
      {props.trade_register_number}
      {props.ownership}
      */}
    </>
  )
}

interface ImprintTermsProps {
  heading: React.ReactNode
  terms: React.ReactNode
  // about: React.ReactNode
  // privacy: React.ReactNode
  // shipping: React.ReactNode
  // gtc: React.ReactNode
  // cancellation_policy: React.ReactNode
}

const ImprintTerms = (props: ImprintTermsProps) => {
  return (
    <>
      <Heading as="h4" size="md" mt="4" mb="2">
        {props.heading}
      </Heading>
      {props.terms}
      {/*
      {props.about}
      {props.privacy}
      {props.shipping}
      {props.gtc}
      {props.cancellation_policy}
      */}
    </>
  )
}

export interface ImprintTemplateProps {
  path: string
  content: React.ReactNode
}

export const ImprintTemplate = ({path, content}: ImprintTemplateProps) => {
  return (
    <>
      <BreadcrumbsBanner title="Impressum" path={path} />
      <ContainerLayout>
        {content}
        <GoogleMaps
          mt={5}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.793548439696!2d13.482410015651524!3d48.21059237922942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477414f48eca0575%3A0x95a37c9b5dc7ef8e!2sWildfellnerstra%C3%9Fe%2022%2F1%2C%204910%20Ried%20im%20Innkreis!5e0!3m2!1sen!2sat!4v1682348281282!5m2!1sen!2sat"
        />
      </ContainerLayout>
    </>
  )
}
