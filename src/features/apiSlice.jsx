const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getAllData = createAsyncThunk("gitUser", async () => {
  const response = await fetch("https://api.github.com/users");
  const result = response.json();
  return result;
});
const initialState = {
  name: "gitUser",
  users: [],
  loading: false,
  error: null,
};
export const gitUsers = createSlice({
  name: "gitUser",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getAllData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default gitUsers.reducer;
