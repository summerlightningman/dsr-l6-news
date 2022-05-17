import {configureStore} from "@reduxjs/toolkit";
import newsSlice from "./slices/news/news.slice";

import newsService from "./services/news/news.service";
import userService from "./services/user/user.service";
import tagService from "./services/tag/tag.service";

const store = configureStore({
    reducer: {
        news: newsSlice.reducer,


        [newsService.reducerPath]: newsService.reducer,
        [userService.reducerPath]: userService.reducer,
        [tagService.reducerPath]: tagService.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(newsService.middleware)
            .concat(userService.middleware)
            .concat(tagService.middleware)
});

export default store