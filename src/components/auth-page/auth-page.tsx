import {FC} from 'react';
import AuthPageStyled from "./auth-page.styled";
import AuthPageImgStyled from "./auth-page-img.styled";
import SignInForm from "./sign-in-form/sign-in-form";

const AuthPage: FC = () => {
    return <AuthPageStyled>
        <div style={{width: '75%', height: '100vh'}}>
            <SignInForm/>
        </div>
        <AuthPageImgStyled/>
    </AuthPageStyled>
};

export default AuthPage;