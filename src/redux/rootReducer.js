import { combineReducers } from 'redux'
import resultsReducer from './repositories'

const rootReducer = combineReducers({
  results: resultsReducer,
})

export default rootReducer
