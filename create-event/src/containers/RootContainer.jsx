// @flow

import React from 'react'
import { connect } from 'react-redux'
import Root from '../components/Root'
import HomeContainer from '../containers/HomeContainer'
import EventContainer from '../containers/EventContainer'
import { fetchUser } from '../actions/UserActions'

import { INDEX_PATH, CREATE_EVENT_PATH } from '../constants/RouterConstants'

const RootContainer = props => <Root {...props} />

const mapStateToProps = state => {
  const { user } = state
  return {
    paths: [INDEX_PATH, CREATE_EVENT_PATH],
    components: {
      [INDEX_PATH]: HomeContainer,
      [CREATE_EVENT_PATH]: EventContainer,
    },
    user,
  }
}

export default connect(mapStateToProps, { fetchUser })(RootContainer)