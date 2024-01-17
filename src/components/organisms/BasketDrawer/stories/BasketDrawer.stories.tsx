import {ComponentMeta, ComponentStory} from '@storybook/react'
import React from 'react'

import {BasketDrawer} from '../BasketDrawer'
import data from './data'

export default {
  title: 'Components/Organisms/BasketDrawer',
  component: BasketDrawer
} as ComponentMeta<typeof BasketDrawer>

const Template: ComponentStory<typeof BasketDrawer> = args => (
  <BasketDrawer {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  products: data.products,
  subtotal: 213.12
}
