import {FC, useEffect} from 'react';
import UserStyled from "./user-info.styled";
import SignOutBtn from "./sign-out-btn/sign-out-btn";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import fetchUser from "../../../redux/slices/user/fetch-user-info.thunk";
import {useCookies} from "react-cookie";

const UserInfo: FC = () => {
    const [{token}] = useCookies(['token']);

    const {nickname} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUser(token));
    }, [token, dispatch]);

    return <UserStyled>
        {nickname}
        <SignOutBtn/>
    </UserStyled>
};

export default UserInfo;