import{ createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: undefined,
  userid: undefined,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username
      state.id = action.payload.id
    },
  }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer