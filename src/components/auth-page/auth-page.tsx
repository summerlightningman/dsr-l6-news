import {FC} from 'react';
import AuthPageStyled from "./auth-page.styled";
import AuthPageImgStyled from "./auth-page-img.styled";
import {Outlet} from "react-router-dom";


const AuthPage: FC = () => {

    return <AuthPageStyled>
        <Outlet/>
        <AuthPageImgStyled/>
    </AuthPageStyled>
};

export default AuthPage;