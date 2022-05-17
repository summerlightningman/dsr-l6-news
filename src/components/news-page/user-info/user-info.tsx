import {FC} from 'react';
import UserStyled from "./user-info.styled";
import SignOutBtn from "./sign-out-btn/sign-out-btn";

import {useCookies} from "react-cookie";
import userService from "../../../redux/services/user/user.service";

const UserInfo: FC = () => {
    const [{token}] = useCookies(['token']);
    const {data: user} = userService.useGetUserInfoQuery(token);


    return <UserStyled>
        {user?.nickname}
        <SignOutBtn/>
    </UserStyled>
};

export default UserInfo;