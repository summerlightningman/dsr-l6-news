import {FC, useContext} from 'react';
import UserInfoStyled from "./user-info.styled";
import SignOutBtn from "./sign-out-btn/sign-out-btn";
import {UserContext} from "../news-page.helpers";

const UserInfo: FC = () => {
    const user = useContext(UserContext);

    return <UserInfoStyled>
        {user.nickname}
        <SignOutBtn/>
    </UserInfoStyled>
};

export default UserInfo;