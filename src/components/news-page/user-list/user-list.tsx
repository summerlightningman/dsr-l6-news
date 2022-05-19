import {FC} from 'react';
import NewsContentStyled from "../../styled/news-content.styled";
import userListService from "../../../redux/services/userList/user-list.service";
import {useCookies} from "react-cookie";
import UserListItem from "./user-list-item/user-list-item";

const UserList: FC = () => {
    const [{token}] = useCookies(['token']);
    const {data: list, status} = userListService.useGetUserListQuery(token);

    const getContentByStatus = () => {
        switch (status) {
            case 'pending':
                return <h2>Loading...</h2>
            case 'fulfilled':
                return list!.map((user, idx) =>
                    <UserListItem {...user} key={idx + user.nickname + user.tags.join(',')}/>)
            case 'rejected':
                return <h2>Loading error</h2>
        }
    };

    return <NewsContentStyled>
        {getContentByStatus()}
    </NewsContentStyled>
};

export default UserList;