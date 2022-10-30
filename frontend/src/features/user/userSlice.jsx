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
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserType: (state, action) => {
      state.usertype = action.payload;
    },
  },
});

export const { setUserType } = userSlice.actions;
export default userSlice.reducer;
