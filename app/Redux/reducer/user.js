import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userData',
  initialState: {
    userData: {},
    login : false,
  },
  reducers: {
    setUser(state,action) {
      const user = action.payload;
      return {...state, userData:user,login:true}
    },
    removeUser(state,action) {
       return {...state, userData:{},login:false}
    }
  }
})

export const {  setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
