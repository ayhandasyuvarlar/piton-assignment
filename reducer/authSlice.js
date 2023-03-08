import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  msg: null,
  token: "",
  loading: false,
  error: null,
  homePage: false,
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
export const signInUser = createAsyncThunk("signIn", async (data) => {
  const { email, password, rememberMe } = data;
  const res = await axios.post(
    "https://assign-api.piton.com.tr/api/rest/login",
    {
      email,
      password,
    }
  );
  return await res.data;
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInUser.pending, (state) => {
      state.loading = true;
      state.msg = null;
      state.error = null;
    });
    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.action_login.message) {
        state.error = action.payload.action_login.message;
        state.msg = null;
      } else {
        state.token = action.payload.action_login.token;
        localStorage.setItem("token", action.payload.action_login.token);
        state.error = null;
        state.msg = "Giriş Başarılı";
        state.homePage = true;
      }
    });
    builder.addCase(signInUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    //*******  */
    builder.addCase(signUpUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.msg = null;
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
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

export const { addToken } = authSlice.actions;
export default authSlice.reducer;
