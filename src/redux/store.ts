import {configureStore} from "@reduxjs/toolkit";
import newsSlice from "./slices/news/news.slice";

import newsService from "./services/news/news.service";
import userService from "./services/user/user.service";
import tagService from "./services/tag/tag.service";
import userListService from "./services/userList/user-list.service";

const store = configureStore({
    reducer: {
        news: newsSlice.reducer,

        [newsService.reducerPath]: newsService.reducer,
        [userService.reducerPath]: userService.reducer,
        [tagService.reducerPath]: tagService.reducer,
        [userListService.reducerPath]: userListService.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(newsService.middleware)
            .concat(userService.middleware)
            .concat(tagService.middleware)
            .concat(userListService.middleware)
});

export default store