import {configureStore} from "@reduxjs/toolkit";
import newsSlice from "./slices/news/news.slice";
import userSlice from "./slices/user/user.slice";

const store = configureStore({
    reducer: {
        news: newsSlice.reducer,
        user: userSlice.reducer
    }
});

export default store