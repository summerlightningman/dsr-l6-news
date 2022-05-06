import {FC} from 'react';
import SignInPageStyled from "./sign-in-page.styled";
import SignInImg from "./sign-in-img";
import SignInForm from "./sign-in-form/sign-in-form";

const SignInPage: FC = () => {
    return <SignInPageStyled>
        <div style={{width: '75%', height: '100vh'}}>
            <SignInForm/>
        </div>
        <SignInImg/>
    </SignInPageStyled>
};

export default SignInPage;