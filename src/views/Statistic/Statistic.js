import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useValueAndKey,
  withElementType,
} from '../../lib'
import StatisticGroup from './StatisticGroup'
import StatisticLabel from './StatisticLabel'
import StatisticValue from './StatisticValue'

/**
 * A statistic emphasizes the current value of an attribute.
 */
function Statistic(props) {
  const {
    as: ElementType,
    children,
    className,
    color,
    content,
    floated,
    horizontal,
    inverted,
    label,
    size,
    text,
    value,
  } = props

  const classes = cx(
    'ui',
    color,
    size,
    useValueAndKey(floated, 'floated'),
    useKeyOnly(horizontal, 'horizontal'),
    useKeyOnly(inverted, 'inverted'),
    'statistic',
    className,
  )
  const rest = getUnhandledProps(Statistic, props)

  if (!childrenUtils.isNil(children)) return <ElementType {...rest} className={classes}>{children}</ElementType>
  if (!childrenUtils.isNil(content)) return <ElementType {...rest} className={classes}>{content}</ElementType>

  return (
    <ElementType {...rest} className={classes}>
      {StatisticValue.create(value, {
        defaultProps: { text },
      })}
      {StatisticLabel.create(label)}
    </ElementType>
  )
}

Statistic._meta = {
  name: 'Statistic',
  type: META.TYPES.VIEW,
}

Statistic.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A statistic can be formatted to be different colors. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A statistic can sit to the left or right of other content. */
  floated: PropTypes.oneOf(SUI.FLOATS),

  /** A statistic can present its measurement horizontally. */
  horizontal: PropTypes.bool,

  /** A statistic can be formatted to fit on a dark background. */
  inverted: PropTypes.bool,

  /** Label content of the Statistic. */
  label: customPropTypes.contentShorthand,

  /** A statistic can vary in size. */
  size: PropTypes.oneOf(_.without(SUI.SIZES, 'big', 'massive', 'medium')),

  /** Format the StatisticValue with smaller font size to fit nicely beside number values. */
  text: PropTypes.bool,

  /** Value content of the Statistic. */
  value: customPropTypes.contentShorthand,
}

Statistic.Group = StatisticGroup
Statistic.Label = StatisticLabel
Statistic.Value = StatisticValue

Statistic.create = createShorthandFactory(Statistic, content => ({ content }))

export default withElementType(Statistic)
