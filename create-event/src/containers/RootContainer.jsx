/* @flow */

import React from 'react'
import { connect } from 'react-redux'
import Root from '../components/Root'
import HomeContainer from '../containers/HomeContainer'
import EventContainer from '../containers/EventContainer'
import EventsContainer from '../containers/EventsContainer'
import { fetchUser } from '../actions/UserActions'
import { fetchCreateEvent } from '../actions/EventActions'

import {
  INDEX_PATH,
  EVENTS_PATH,
  EVENT_PATH,
  CREATE_EVENT_PATH,
} from '../constants/RouterConstants'

const RootContainer = props => <Root {...props} />

const mapStateToProps = state => {
  const { user } = state
  return {
    paths: [INDEX_PATH, EVENTS_PATH, EVENT_PATH, CREATE_EVENT_PATH],
    components: {
      [INDEX_PATH]: HomeContainer,
      [EVENTS_PATH]: EventsContainer,
      [EVENT_PATH]: EventContainer,
      [CREATE_EVENT_PATH]: EventContainer,
    },
    user,
  }
}

export default connect(mapStateToProps, { fetchUser, fetchCreateEvent })(
  RootContainer,
)
