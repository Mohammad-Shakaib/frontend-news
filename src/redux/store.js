import reducers from './rootReducers'

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: reducers
})