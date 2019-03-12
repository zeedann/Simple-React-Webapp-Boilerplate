// Compt for copying as a HomePage
// This compt is used for...

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Radium from 'radium'
import PropTypes from 'prop-types'
import Rx from 'rxjs'
import { withRouter } from 'react-router-dom'
import {
	Button,
} from 'antd'
import Header from './Header'

class HomePage extends Component {

	render() {
		return (
			<div id='HomePage' style={comStyles().container}>
				<Header />
				<div id='body' style={comStyles().body}>
					<h1>React Boilerplate</h1>
					<p>Hello, Let's get started!</p>
					<Button type='primary' onClick={() => window.open('https://ant.design/docs/react/introduce', '_blank')}>
						Ant Design
					</Button>
				</div>
			</div>
		)
	}
}

// defines the types of variables in this.props
HomePage.propTypes = {
	history: PropTypes.object.isRequired,
}

// for all optional props, define a default value
HomePage.defaultProps = {

}

// Wrap the prop in Radium to allow JS styling
const RadiumHOC = Radium(HomePage)

// Get access to state from the Redux store
const mapReduxToProps = (redux) => {
	return {

	}
}

// Connect together the Redux store with this React component
export default withRouter(
	connect(mapReduxToProps, {

	})(RadiumHOC)
)

// ===============================

// the JS function that returns Radium JS styling
const comStyles = () => {
	return {
		container: {
      display: 'flex',
      flexDirection: 'column',
		},
		content: {
			padding: '20px',
			overflowY: 'scroll',
			fontFamily: 'Arial'
		},
		body: {
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		}
	}
}
