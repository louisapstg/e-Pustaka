import { createSlice } from "@reduxjs/toolkit";

const initialValue = "";

export const listAuth = createSlice({
     name: "token",
     initialState: {
          tokens: initialValue,
          account: initialValue,
          id: initialValue,
          email: initialValue,
     },
     reducers: {
          addTokenUser: (state, action) => {
               state.tokens = action.payload.token;
               state.id = action.payload.id;
               state.email = action.payload.email;
               state.account = "User";
          },
          deleteToken: (state) => {
               state.tokens = "";
               state.id = "";
               state.email = "";
               state.account = "";
          },
     },
});

export const { addTokenUser, deleteToken } = listAuth.actions;
export default listAuth.reducer;