import {withJaenMock} from '@atsnek/jaen'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import React from 'react'
import {AboutSectionJSX} from '../AboutSection'
import {jaenData} from './jaen-data'

export default {
  title: 'Components/Organisms/Sections/AboutSection',
  component: AboutSectionJSX,
  decorators: [
    Story => {
      const MockedStory = withJaenMock(Story, {
        jaenPage: {...jaenData.jaenPage}
      })
      return <MockedStory />
    }
  ]
} as ComponentMeta<typeof AboutSectionJSX>

const Template: ComponentStory<typeof AboutSectionJSX> = args => (
  <AboutSectionJSX {...args} />
)

export const Default = Template.bind({})
Default.args = {
  name: 'about',
  displayName: 'Über uns',
  anchor: 'about'
}
