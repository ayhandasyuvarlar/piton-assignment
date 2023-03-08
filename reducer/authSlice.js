import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  msg: "",
  user: "",
  token: "",
  loading: false,
  error: null,
};

export const signUpUser = createAsyncThunk("signUp", async (data) => {
  const { email, password, name } = data;
  const res = await axios.post(
    "https://assign-api.piton.com.tr/api/rest/register",
    {
      email,
      name,
      password,
    }
  );
  return await res.data;
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUpUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      // state.loading = false;
      // if (action.payload.error) {
      //   state.error = action.payload.error;
      // } else {
      //   state.user = action.payload;
      // }
      console.log(action.payload);
      state.loading = false;
      state.msg = action.payload;
      state.error = null;
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default authSlice.reducer;
