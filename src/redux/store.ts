import {configureStore} from "@reduxjs/toolkit";
import newsSlice from "./slices/news/news.slice";
import userSlice from "./slices/user/user.slice";
import tagSlice from "./slices/tag/tag.slice";

const store = configureStore({
    reducer: {
        news: newsSlice.reducer,
        user: userSlice.reducer,
        tag: tagSlice.reducer
    }
});

export default store