// reducers/index.js

import { combineReducers } from 'redux'
import auth from './auth'
import data from './data'

const rootReducer = combineReducers({
  auth,
  data
  // add your other reducers here
})

export default rootReducer