import {FC} from 'react';
import UserStyled from "./user-info.styled";
import SignOutBtn from "./sign-out-btn/sign-out-btn";

import {useCookies} from "react-cookie";
import userService from "../../../redux/services/user/user.service";
import {useNavigate} from "react-router-dom";
import Endpoint from "../../../endpoint";

const UserInfo: FC = () => {
    const navigate = useNavigate();
    const [{token}, , removeCookie] = useCookies(['token']);
    const {data: user, status} = userService.useGetUserInfoQuery(token);

    const getContentByStatus = () => {
        switch (status) {
            case 'pending':
                return 'Loading...'
            case 'fulfilled':
                return user!.nickname
            case 'rejected':
                removeCookie('token');
                navigate(Endpoint.AUTH)
        }
    };

    return <UserStyled>
        {getContentByStatus()}
        <SignOutBtn/>
    </UserStyled>
};

export default UserInfo;