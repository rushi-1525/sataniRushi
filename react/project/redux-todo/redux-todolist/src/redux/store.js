import { configureStore } from '@reduxjs/toolkit'
import todolistSlice from './features/todoSlice'

export default configureStore({
  reducer: {
    todo: todolistSlice,
  },
})