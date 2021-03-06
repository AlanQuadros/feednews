import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const middlewares = [applyMiddleware(thunk)]

/* eslint-enable */
export default middlewares
