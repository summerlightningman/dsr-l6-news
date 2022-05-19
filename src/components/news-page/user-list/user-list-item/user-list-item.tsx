import {ChangeEventHandler, FC} from 'react';
import ItemHeader from "../../../styled/item-header.styled";
import {Role, User} from "../../../../types/user";
import UserListItemStyled from "./user-list-item.styled";
import TagStyled from "../../new-post/tag.styled";
import Select from "../../../styled/select.styled";
import {useCookies} from "react-cookie";
import userListService from "../../../../redux/services/userList/user-list.service";

const UserListItem: FC<User> = ({id = 0, nickname, firstName, lastName, tags, role}) => {
    const [{token}] = useCookies(['token']);
    const [setRole] = userListService.useSetUserRoleMutation();

    const handleChange: ChangeEventHandler<HTMLSelectElement> = e =>
        setRole({token, role: (e.currentTarget.value as Role), id});

    return <UserListItemStyled>
        <ItemHeader>#{id} {firstName} {lastName} {nickname}</ItemHeader>
        <TagStyled>{tags.map(_ => `#${_}`).join('\t')}</TagStyled>
        <Select value={role} onChange={handleChange}>
            <option value={Role.READER}>Reader</option>
            <option value={Role.ADMIN}>Admin</option>
            <option value={Role.WRITER}>Writer</option>
        </Select>
    </UserListItemStyled>
};

export default UserListItem;