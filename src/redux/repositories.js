import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API_ENDPOINT, XHR_STATUS_IDLE, XHR_STATUS_PENDING, XHR_STATUS_REJECTED, XHR_STATUS_FULFILLED } from '../consts'

export const fetchAllResults = createAsyncThunk(
  'results',
  async () => {
      const response = await fetch(API_ENDPOINT)
      return response.json()
  }
)

const slice = createSlice({
  name: 'Results',
  initialState: {
    status: XHR_STATUS_IDLE,
    errors: null,
    entities: []
  },
  reducers: {},
  extraReducers: {
    [fetchAllResults.pending]: (state, action) => {
      state.status = XHR_STATUS_PENDING
    },
    [fetchAllResults.rejected]: (state, action) => {
      state.status = XHR_STATUS_REJECTED
      state.errors = action.payload
    },
    [fetchAllResults.fulfilled]: (state, action) => {
      state.status = XHR_STATUS_FULFILLED
      state.entities = action.payload
    }
  }
})

export default slice.reducer
