import React from 'react'
import {Box, Accordion} from '@chakra-ui/react'
import {withJaenMock} from 'jaen'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {
  FAQAccordionSectionJSX,
  FAQAccordionSectionProps
} from '../FAQAccordionSection'
import {jaenData} from './jaen-data'

export default {
  title: 'Components/Organisms/Sections/FAQAccordionSection',
  component: FAQAccordionSectionJSX,
  decorators: [
    Story => {
      const MockedStory = withJaenMock(Story, {
        jaenPage: {...jaenData.jaenPage}
      })
      return <MockedStory />
    }
  ]
} as ComponentMeta<typeof FAQAccordionSectionJSX>

const Template: ComponentStory<typeof FAQAccordionSectionJSX> = args => (
  <div
    style={{
      width: '900px',
      height: '300px',
      margin: '100px'
    }}>
    <FAQAccordionSectionJSX name={args.name} displayName={args.displayName} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  name: 'faq',
  displayName: 'Frage'
}
