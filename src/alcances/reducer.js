import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


var tid;
function fetchMyData(i) {
  // simulating data fetching from server
  return new Promise((resolve, reject) => {
    tid = setTimeout(() => resolve(Math.random()), i * 1000);
    setTimeout(reject, 5000);
  });
}


  const initialState = {
    data: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: ''
  }


  const fetchData = createAsyncThunk(
  "data/fetchStatus",
  async (params,thunkAPI) => {

    console.log(params);
    console.log(params[1]);
    console.log(params[2]);

    thunkAPI.dispatch({ type: "data" });
    thunkAPI.rejectWithValue("rejected", { a: 0 });
    thunkAPI.fulfillWithValue("fulfilled", { a: 0 });
  try {
   
        const { data } = await axios.post(`http://localhost:5000/express_productos?name=${params[0]}&direccion=${params[1]}&correo=${params[2]}&telefono=${params[3]}&fecha=${params[4]}&municipio=${params[5]}&tipo=${params[6].code}`)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
        return data;


    } catch (err) {
      return thunkAPI.rejectWithValue("No encontrado");
    }


  }
);



const dataSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      console.log(state);
      console.log(payload);
      state.data = payload;
    },
    [fetchData.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = payload
    }
  }
})



export { fetchData };
export const { cancel } = dataSlice.actions;
export default dataSlice.reducer;
