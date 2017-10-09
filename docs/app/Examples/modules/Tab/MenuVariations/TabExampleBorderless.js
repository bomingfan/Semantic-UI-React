import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Tab 1', pane: { attached: false, content: 'Tab 1 Content' } },
  { menuItem: 'Tab 2', pane: { attached: false, content: 'Tab 2 Content' } },
  { menuItem: 'Tab 3', pane: { attached: false, content: 'Tab 3 Content' } },
]

const TabExampleBorderless = () => (
  <Tab menu={{ borderless: true, attached: false, tabular: false }}panes={panes} />
)

export default TabExampleBorderless
