import {RequiresToken} from "../../types";
import {Role, UserID} from "../../../types/user";

export interface SetUserRoleRequest extends RequiresToken {
    id: UserID,
    role: Role,
}