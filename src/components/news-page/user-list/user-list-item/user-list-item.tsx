import {FC} from 'react';
import ItemHeader from "../../../styled/item-header.styled";
import {Role, User} from "../../../../types/user";
import UserListItemStyled from "./user-list-item.styled";
import TagStyled from "../../new-post/tag.styled";
import Select from "../../../styled/select.styled";

const UserListItem: FC<User> = ({nickname, firstName, lastName, tags, role}) => {


    return <UserListItemStyled>
        <ItemHeader># {firstName} {lastName} {nickname}</ItemHeader>
        <TagStyled>{tags.map(_ => `#${_}`).join('\t')}</TagStyled>
        <Select value={role}>
            <option value={Role.READER}>Reader</option>
            <option value={Role.ADMIN}>Admin</option>
            <option value={Role.WRITER}>Writer</option>
        </Select>
    </UserListItemStyled>
};

export default UserListItem;