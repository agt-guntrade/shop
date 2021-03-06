import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'

import {ContactTemplate} from '../ContactTemplate'

export default {
  title: 'Components/Templates/ContactTemplate',
  component: ContactTemplate
} as ComponentMeta<typeof ContactTemplate>

const Template: ComponentStory<typeof ContactTemplate> = args => (
  <ContactTemplate {...args} />
)

export const Default = Template.bind({})
Default.args = {
  path: '/contact',
  phone: '+49 1234567890',
  email: 'email@test.com',
  address: 'Test Street 123, 12345 Test City'
}
