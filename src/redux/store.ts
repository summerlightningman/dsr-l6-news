import {configureStore} from "@reduxjs/toolkit";
import newsSlice from "./slices/news/news.slice";

const store = configureStore({
    reducer: {
        news: newsSlice.reducer
    }
});

export default store