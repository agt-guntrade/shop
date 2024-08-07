import React from 'react'
import {withJaenMock} from 'jaen'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {FAQSectionJSX} from '../FAQSection'
import {jaenData} from './jaen-data'

export default {
  title: 'Components/Organisms/Sections/FAQSection',
  component: FAQSectionJSX,
  decorators: [
    Story => {
      const MockedStory = withJaenMock(Story, {
        jaenPage: {...jaenData.jaenPage}
      })
      return <MockedStory />
    }
  ]
} as ComponentMeta<typeof FAQSectionJSX>

const Template: ComponentStory<typeof FAQSectionJSX> = args => (
  <FAQSectionJSX {...args} />
)

export const Default = Template.bind({})
Default.args = {
  name: 'faq',
  displayName: 'Fragen und Antworten',
  anchor: ''
}
