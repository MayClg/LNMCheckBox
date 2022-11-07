import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const USERTYPE = Object.freeze({
    STUDENT: 'student',
    FACULTY: 'faculty',
    DEAN: 'dean',
    NULL: '',
});

const initialState = {
  userid: '',
  usertype: USERTYPE.NULL,
  loggedin: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserType: (state, action) => {
      state.usertype = action.payload;
    },
    logout:(state)=>{
      state.loggedin=false;
      state.userid='';
    },
    login: (state,action)=>{
      state.loggedin = action.payload.log;
      state.userid = action.payload.studentid
    }
  },
});

export const { setUserType,login,logout } = userSlice.actions;
export default userSlice.reducer;
