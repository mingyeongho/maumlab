import { UserDTO } from "./type";

export interface ProfileProps {
  user: UserDTO;
}

export interface MyProfileProps {
  user: UserDTO;
}

export interface UserListProps {
  users: UserDTO[];
}
