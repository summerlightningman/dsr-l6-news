import {FC} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from "react-query";

import SignInPage from "../sign-in-page/sign-in-page";
import NewsPage from "../news-page/news-page";
import Endpoint from "../../endpoint";
import GlobalStyle from "../styled/global";

const queryClient = new QueryClient();

const App: FC = () => {

    
    return <>
        <GlobalStyle/>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path={Endpoint.NEWS_PAGE} element={<NewsPage/>}/>
                    <Route path={Endpoint.SIGN_IN} element={<SignInPage/>}/>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    </>
};

export default App;