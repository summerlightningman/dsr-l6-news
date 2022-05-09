import {FC} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import AuthPage from "../auth-page/auth-page";
import NewsPage from "../news-page/news-page";
import Endpoint from "../../endpoint";
import GlobalStyle from "../styled/global";
import NotFound from "../not-found/not-found";


const App: FC = () => {
    return <>
        <GlobalStyle/>
        <BrowserRouter>
            <Routes>
                <Route path={Endpoint.NEWS_PAGE} element={<NewsPage/>}/>
                <Route path={Endpoint.NEWS_PAGE + ':section'} element={<NewsPage/>}/>
                <Route path={Endpoint.SIGN_IN} element={<AuthPage/>}/>
                <Route path={Endpoint.SIGN_UP} element={<AuthPage/>}/>
                <Route path={Endpoint.NOT_FOUND} element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </>
};

export default App;