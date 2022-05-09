import {FC, MouseEventHandler} from 'react';
import SignOutBtnStyled from "./sign-out-btn.styled";
import {signOut} from "../../../../http";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import Endpoint from "../../../../endpoint";

const SignOutBtn: FC = () => {
    const [{token}, , removeCookie] = useCookies(['token']);
    const navigate = useNavigate();

    const handleClick: MouseEventHandler<HTMLButtonElement> = () => signOut(token).then(resp => {
        if (resp.ok)
            removeCookie('token');
        navigate(Endpoint.SIGN_IN);
    });

    return <SignOutBtnStyled onClick={handleClick}>
        Sign Out
    </SignOutBtnStyled>
};

export default SignOutBtn;