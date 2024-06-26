import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  profile_pic: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload._id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.profile_pic = action.payload.profile_pic;
      state.id = action.payload._id;
    },

    setToken: (state, action) => {
      state.token = action.payload;
    },

    logout: (state, action) => {
      state.id = "";
      state.name = "";
      state.email = "";
      state.profile_pic = "";
      state.id = "";
      state.token = "";
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { setToken, setUser, logout } = userSlice.actions;

// Export the slice reducer as the default export
export default userSlice.reducer;
