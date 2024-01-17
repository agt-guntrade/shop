import {Field} from '@atsnek/jaen'
import {graphql, PageProps} from 'gatsby'
import React from 'react'
import {ContactTemplate} from '../components/templates/ContactTemplate'

const ContactPage: React.FC<PageProps> = props => (
  <ContactTemplate
    path={props.path}
    email={<Field.Text name="email" defaultValue={'info@agt-guntrade.at'} />}
    phone={<Field.Text name="phone" defaultValue={'+43 (0) 676 6510977'} />}
    address={
      <Field.Text
        name="address"
        defaultValue={'In der Wildfellnerstraße 22/14910 Ried im Innkreis'}
      />
    }
  />
)

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export default ContactPage

export {Head} from '@atsnek/jaen'
