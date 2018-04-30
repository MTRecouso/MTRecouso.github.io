import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { Button } from 'react-md'

const Nav = ({className}) => <Button icon className={className}>menu</Button>

Nav.PropTypes = {
    className: PropTypes.string,
}

export default Nav