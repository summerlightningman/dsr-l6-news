import {FC} from 'react';
import UserInfoStyled from "./user-info.styled";
import SignOutBtn from "./sign-out-btn/sign-out-btn";

const UserInfo: FC = () => {
    return <UserInfoStyled>
        UserInfo
        <SignOutBtn/>
    </UserInfoStyled>
};

export default UserInfo;