import {FC, useEffect} from 'react';
import UserInfoStyled from "./user-info.styled";
import SignOutBtn from "./sign-out-btn/sign-out-btn";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import fetchUserInfo from "../../../redux/slices/user/fetch-user-info.thunk";
import {useCookies} from "react-cookie";

const UserInfo: FC = () => {
    const [{token}] = useCookies(['token']);

    const {nickname} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUserInfo(token));
    }, [token, dispatch]);

    return <UserInfoStyled>
        {nickname}
        <SignOutBtn/>
    </UserInfoStyled>
};

export default UserInfo;