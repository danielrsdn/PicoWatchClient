import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import userReducer from '../features/user/userSlice'
import rootReducers from '../actions/reducers/rootReducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleWare from 'redux-thunk'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleWare))

export default configureStore({
  // reducer: {
  //   user: rootReducers,
  // },
  reducer: rootReducers,
  middleware: [thunkMiddleWare],
})