import { configureStore } from "@reduxjs/toolkit";
import todoReduce from "./todoSlice";

const store = configureStore({
  reducer: {
    Todo: todoReduce, // This key should match the name you use in `useSelector`
  },
});

export default store;
