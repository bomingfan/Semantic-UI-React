import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

const ElementType = getElementType()

/**
 * A pushable sub-component for Sidebar.
 */
function SidebarPusher(props) {
  const { className, dimmed, children, content } = props

  const classes = cx(
    'pusher',
    useKeyOnly(dimmed, 'dimmed'),
    className,
  )
  const rest = getUnhandledProps(SidebarPusher, props)

  return (
    <ElementType {...rest} className={classes}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
}

SidebarPusher._meta = {
  name: 'SidebarPusher',
  type: META.TYPES.MODULE,
  parent: 'Sidebar',
}

SidebarPusher.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Controls whether or not the dim is displayed. */
  dimmed: PropTypes.bool,
}

export default SidebarPusher
