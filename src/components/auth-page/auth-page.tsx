import {FC} from 'react';
import AuthPageStyled from "./auth-page.styled";
import AuthPageImgStyled from "./auth-page-img.styled";
import {Outlet} from "react-router-dom";


const AuthPage: FC = () => {

    return <AuthPageStyled>
        {/*<div style={{width: '75%', height: '100vh'}}>*/}
        {/*    {path === Endpoint.SIGN_UP ? <SignUpForm/> : <SignInForm/>}*/}
        {/*</div>*/}
        <Outlet/>
        <AuthPageImgStyled/>
    </AuthPageStyled>
};

export default AuthPage;