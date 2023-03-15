import reducer from "./alcances/reducer";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer:reducer
});
