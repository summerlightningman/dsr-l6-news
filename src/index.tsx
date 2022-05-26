import {createRoot} from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components'

import store from './redux/store';
import Endpoint from "./endpoint";

import App from "./components/app/app";
import GlobalStyle from "./components/styled/global";
import NavbarEndpoint from "./components/news-page/news-navbar/navbar-endpoint";

import NewsPage from "./components/news-page/news-page";
import AuthPage from "./components/auth-page/auth-page";
import SignInForm from "./components/auth-page/sign-in-form/sign-in-form";
import SignUpForm from "./components/auth-page/sign-up-form/sign-up-form";
import NotFound from "./components/not-found/not-found";
import AllNewsList from "./components/news-page/all-news-list/all-news-list";
import TagList from "./components/news-page/tag-list/tag-list";
import UserList from "./components/news-page/user-list/user-list";
import NewPost from "./components/news-page/new-post/new-post";
import SubNewsList from "./components/news-page/sub-news-list/sub-news-list";


const theme = {
    font: {
        inter: 'Inter, sans-serif'
    },
    color: {
        themeBlue: '#013775',
        darkPink: '#FE295D',
        darkYellow: '#F0CC01',
        darkOrange: '#F37731',
        lightOrange: '#FFD5AB',
        lightPink: '#FF6AAA',
        formControlColor: '#DBD1BF',
        gray: '#828282'
    },
    width: {
        formControlWidth: '30rem',
    }
};

const root = createRoot(document.querySelector('#root') as HTMLElement);
root.render(
    <ThemeProvider theme={theme}><Provider store={store}>
        <GlobalStyle/>
        <BrowserRouter>
            <Routes>
                <Route path={Endpoint.ROOT} element={<App/>}>
                    <Route path={Endpoint.ROOT} element={<NewsPage/>}>
                        <Route path={NavbarEndpoint.ALL} element={<AllNewsList/>}/>
                        <Route path={NavbarEndpoint.SUBSCRIBED} element={<SubNewsList/>}/>
                        <Route path={NavbarEndpoint.TAG_LIST} element={<TagList/>}/>
                        <Route path={NavbarEndpoint.USER_LIST} element={<UserList/>}/>
                        <Route path={NavbarEndpoint.NEW_POST} element={<NewPost/>}/>
                    </Route>
                    <Route path={Endpoint.AUTH} element={<AuthPage/>}>
                        <Route index element={<SignInForm/>}/>
                        <Route path={Endpoint.SIGN_UP} element={<SignUpForm/>}/>
                    </Route>
                </Route>
                <Route path={Endpoint.NOT_FOUND} element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
    </ThemeProvider>
)